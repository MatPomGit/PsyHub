(function () {
  'use strict';

  /* ══════════════════════════════════════════════════
     STATE
  ══════════════════════════════════════════════════ */
  const state = {
    current:       null,
    pageMap:       new Map(),
    mdCache:       new Map(),
    emptyArticles: new Set()
  };

  const MOBILE_BREAKPOINT = 900; /* matches CSS @media(max-width:900px) */

  /* ══════════════════════════════════════════════════
     MINI MARKDOWN PARSER
  ══════════════════════════════════════════════════ */
  function md2html(src) {
    const esc     = s => s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    const escAttr = s => esc(s).replace(/"/g,'&quot;');
    const safeUrl = url => /^(https?:\/\/|#|\/|mailto:)/.test(url) ? url : '#';
    const inl = s => {
      s = esc(s);
      return s
        .replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>')
        .replace(/\*(.+?)\*/g,'<em>$1</em>')
        .replace(/~~(.+?)~~/g,'<del>$1</del>')
        .replace(/`(.+?)`/g,'<code>$1</code>')
        .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (_, alt, url) => `<img src="${safeUrl(url)}" alt="${escAttr(alt)}" loading="lazy">`)
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, text, url) => `<a href="${safeUrl(url)}">${text}</a>`);
    };

    // fenced code blocks (must run before inline backtick replacement)
    src = src.replace(/```[\w]*\n([\s\S]*?)```/gm, (_, code) =>
      `<pre><code>${esc(code.trim())}</code></pre>`
    );

    // tables
    src = src.replace(/((?:\|.+\|\n){2,})/g, blk => {
      const rows = blk.trim().split('\n').filter(r => !/^[\s|:-]+$/.test(r));
      if (rows.length < 2) return blk;
      const hd = rows[0].split('|').slice(1,-1).map(c=>`<th>${inl(c.trim())}</th>`).join('');
      const bd = rows.slice(1).map(r=>'<tr>'+r.split('|').slice(1,-1).map(c=>`<td>${inl(c.trim())}</td>`).join('')+'</tr>').join('');
      return `<div class="table-wrap"><table><thead><tr>${hd}</tr></thead><tbody>${bd}</tbody></table></div>`;
    });
    src = src.replace(/^([*_-])\1{2,}$/gm,'<hr>');
    src = src.replace(/^#{4}\s+(.+)$/gm,(_,t)=>`<h4>${inl(t)}</h4>`);
    src = src.replace(/^#{3}\s+(.+)$/gm,(_,t)=>`<h3>${inl(t)}</h3>`);
    src = src.replace(/^#{2}\s+(.+)$/gm,(_,t)=>`<h2>${inl(t)}</h2>`);
    src = src.replace(/^#{1}\s+(.+)$/gm,(_,t)=>`<h1>${inl(t)}</h1>`);
    src = src.replace(/((?:^>.*\n?)+)/gm, blk =>
      `<blockquote><p>${inl(blk.replace(/^>\s?/gm,'').trim())}</p></blockquote>\n`
    );
    src = src.replace(/((?:^[-*+]\s.+\n?)+)/gm, blk =>
      '<ul>'+blk.trim().split('\n').map(l=>`<li>${inl(l.replace(/^[-*+]\s/,''))}</li>`).join('')+'</ul>\n'
    );
    src = src.replace(/((?:^\d+\.\s.+\n?)+)/gm, blk =>
      '<ol>'+blk.trim().split('\n').map(l=>`<li>${inl(l.replace(/^\d+\.\s/,''))}</li>`).join('')+'</ol>\n'
    );
    src = src.split('\n\n').map(blk => {
      blk = blk.trim();
      if (!blk) return '';
      if (/^<[a-z]/.test(blk)) return blk;
      return `<p>${inl(blk.replace(/\n/g,' '))}</p>`;
    }).join('\n');
    return src;
  }

  /* ══════════════════════════════════════════════════
     PAGE MAP & ROUTING
  ══════════════════════════════════════════════════ */
  function buildPageMap() {
    for (const sec of SITE_CONFIG.nav)
      for (const item of sec.items)
        state.pageMap.set(item.id, { ...item, section: sec.section });
  }

  /* ── Empty article indicator refresh ──────── */
  const EMPTY_BANNER_HTML = `<div class="empty-banner"><span class="empty-banner-icon">⚠</span><div class="empty-banner-text">Artykuł jeszcze nie zawiera treści — zostanie uzupełniony wkrótce.</div></div>`;

  function isBodyEmpty(text) {
    const h1m = text.match(/^#\s+(.+)$/m);
    const body = h1m ? text.slice(text.indexOf(h1m[0]) + h1m[0].length) : text;
    return !body.trim();
  }

  function updateEmptyIndicators() {
    state.emptyArticles.forEach(id => {
      document.querySelectorAll(`.art-card[data-artid="${id}"]`).forEach(el => {
        if (el.classList.contains('empty')) return;
        el.classList.remove('live','xlink','wiki','planned');
        el.classList.add('empty');
        const dot = el.querySelector('.art-dot');
        if (dot) dot.className = 'art-dot empty';
        const badge = el.querySelector('.art-badge');
        if (badge) { badge.className = 'art-badge empty'; badge.textContent = 'pusty'; }
      });
      document.querySelectorAll(`.plan-item[data-artid="${id}"]`).forEach(el => {
        if (el.classList.contains('empty')) return;
        el.classList.remove('live','planned');
        el.classList.add('empty');
        const dot = el.querySelector('.plan-dot');
        if (dot) dot.className = 'plan-dot empty';
        const badge = el.querySelector('.plan-badge');
        if (badge) { badge.className = 'plan-badge empty'; badge.textContent = 'pusty'; }
      });
    });
  }

  /* ── Navigation buttons helper ─────────────── */
  function buildNavButtons(prev, next) {
    const prevB = prev
      ? `<button class="pnav-btn" onclick="navigate('${prev.id}')"><span>← ${prev.label}</span></button>`
      : `<button class="pnav-btn" disabled><span>←</span></button>`;
    const nextB = next
      ? `<button class="pnav-btn" onclick="navigate('${next.id}')"><span>${next.label} →</span></button>`
      : `<button class="pnav-btn" disabled><span>→</span></button>`;
    return { prevB, nextB };
  }

  /* ── Sidebar rendering ─────────────────────── */
  function renderSidebar() {
    const nav = document.getElementById('sidebarNav');
    const active    = state.current || SITE_CONFIG.defaultPage;
    const activeItem = state.pageMap.get(active);
    const activeSec  = activeItem ? activeItem.section : null;
    let html = '';
    for (const sec of SITE_CONFIG.nav) {
      const open = sec.section === activeSec;
      html += `<div class="nav-group${open?' open':''}" data-sec="${q(sec.section)}">`;
      html += `<div class="nav-group-hdr" onclick="toggleGroup(this)">`;
      html += `<span class="ng-label">${sec.section}</span>`;
      html += `<svg class="ng-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>`;
      html += `</div><div class="nav-items">`;
      for (const item of sec.items) {
        if (item.href) {
          html += `<a class="nav-item nav-item-external" href="${q(item.href)}" target="_blank" rel="noopener noreferrer">${item.label} ↗</a>`;
        } else {
          const cls = ['nav-item', item.wiki?'is-wiki':'', item.id===active?'active':''].filter(Boolean).join(' ');
          html += `<div class="${cls}" data-id="${item.id}" onclick="navigate('${item.id}')">${item.label}</div>`;
        }
      }
      html += `</div></div>`;
    }
    nav.innerHTML = html;
  }

  function q(s) { return s.replace(/&/g,'&amp;').replace(/"/g,'&quot;'); }

  function toggleGroup(hdr) {
    const group  = hdr.parentElement;
    const isOpen = group.classList.contains('open');
    document.querySelectorAll('.nav-group').forEach(g => g.classList.remove('open'));
    if (!isOpen) group.classList.add('open');
  }

  function setActive(id) {
    document.querySelectorAll('.nav-item').forEach(el =>
      el.classList.toggle('active', el.dataset.id === id)
    );
    const el = document.querySelector(`.nav-item[data-id="${id}"]`);
    if (el) {
      const group = el.closest('.nav-group');
      document.querySelectorAll('.nav-group').forEach(g => g.classList.remove('open'));
      group?.classList.add('open');
      el.scrollIntoView({ block:'nearest', behavior:'smooth' });
    }
  }

  /* ── Navigate ──────────────────────────────── */
  function navigate(id, replaceHistory) {
    if (!id) return;
    const item = state.pageMap.get(id);
    if (!item) return;
    state.current = id;
    if (replaceHistory) history.replaceState({id},'','#'+id);
    else                history.pushState({id},'','#'+id);
    setActive(id);
    closeSidebar();
    if (item.file)       loadMd(id, item);
    else if (item.wiki)  renderWiki(id, item.wiki);
    else                 renderHome();
  }

  /* ── Load markdown ─────────────────────────── */
  async function loadMd(id, item) {
    const area = document.getElementById('content');
    area.innerHTML = '<div class="loading"><div class="spinner"></div>Ładowanie…</div>';
    setBreadcrumb(item);
    if (state.mdCache.has(item.file)) { renderMd(state.mdCache.get(item.file), id, item); prefetch(id); return; }
    try {
      const r = await fetch(item.file);
      if (!r.ok) throw new Error('HTTP '+r.status);
      const t = await r.text();
      state.mdCache.set(item.file, t);
      if (isBodyEmpty(t)) { state.emptyArticles.add(id); updateEmptyIndicators(); }
      renderMd(t, id, item);
      prefetch(id);
    } catch(e) {
      /* file missing — treat as empty stub rather than hard error */
      console.error('[PsyHub] Failed to load', item.file, e);
      state.emptyArticles.add(id);
      updateEmptyIndicators();
      const {prev, next} = prevNext(id);
      const { prevB, nextB } = buildNavButtons(prev, next);
      const domainKey = id.split('/')[0];
      const planItems = (SITE_CONFIG.plans || {})[domainKey] || [];
      const plansHtml = planItems.length ? renderPlans(planItems, id) : '';
      area.innerHTML = `<div class="rendered">
        <div class="page-hero">
          <span class="chapter-lbl">${item.section||''}</span>
          <h1>${item.label}</h1>
        </div>
        ${EMPTY_BANNER_HTML}
        ${plansHtml}
        <div class="page-nav">${prevB}${nextB}</div>
      </div>`;
      window.scrollTo(0,0);
      animateContentIn();
    }
  }

  function renderMd(text, id, item) {
    const area  = document.getElementById('content');
    const h1m   = text.match(/^#\s+(.+)$/m);
    const title = h1m ? h1m[1] : item.label;
    const body  = h1m ? text.slice(text.indexOf(h1m[0])+h1m[0].length) : text;
    const {prev, next} = prevNext(id);
    const { prevB, nextB } = buildNavButtons(prev, next);

    const domainKey = id.split('/')[0];
    const planItems = (SITE_CONFIG.plans || {})[domainKey] || [];
    const plansHtml = planItems.length ? renderPlans(planItems, id) : '';

    const isEmpty = isBodyEmpty(text);
    if (isEmpty) state.emptyArticles.add(id);
    const emptyBanner = isEmpty ? EMPTY_BANNER_HTML : '';

    area.innerHTML = `<div class="rendered">
      <div class="page-hero">
        <span class="chapter-lbl">${item.section||''}</span>
        <h1>${title}</h1>
      </div>
      ${emptyBanner}
      <div class="md">${md2html(body)}</div>
      ${plansHtml}
      <div class="page-nav">${prevB}${nextB}</div>
    </div>`;
    window.scrollTo(0,0);
    document.getElementById('progFill').style.width='0%';
    if (isEmpty) updateEmptyIndicators();
    animateContentIn();
  }

  /* ── Plan list for a domain ────────────────── */
  function renderPlans(items, currentId) {
    const rows = items.map(it => {
      const fileId = it.file ? it.file.replace('wiki/','').replace('.md','') : null;
      const isEmpty = fileId && state.emptyArticles.has(fileId);
      const effectiveStatus = isEmpty ? 'empty' : it.status;
      const cls   = ['plan-item', effectiveStatus].join(' ');
      const navTo = fileId ? `onclick="navigate('${fileId}')"` : '';
      const artid = fileId ? `data-artid="${fileId}"` : '';
      const badge = isEmpty ? 'pusty' : (it.status==='live' ? 'dostępny' : 'planowany');
      return `<div class="${cls}" ${artid} ${effectiveStatus==='live'||effectiveStatus==='empty' ? navTo : ''}>
        <div class="plan-dot ${effectiveStatus}"></div>
        <span class="plan-label">${it.label}</span>
        <span class="plan-badge ${effectiveStatus}">${badge}</span>
      </div>`;
    }).join('');
    return `<div class="plans-section">
      <h2>Artykuły w tym dziale</h2>
      <div class="plans-grid">${rows}</div>
    </div>`;
  }

  function prevNext(id) {
    const all = SITE_CONFIG.nav.flatMap(s => s.items.filter(i => i.file));
    const idx = all.findIndex(i => i.id === id);
    return { prev: idx>0?all[idx-1]:null, next: idx<all.length-1?all[idx+1]:null };
  }

  function prefetch(id) {
    const {prev, next} = prevNext(id);
    for (const it of [prev, next]) {
      if (it?.file && !state.mdCache.has(it.file))
        fetch(it.file).then(r=>r.ok?r.text():Promise.reject()).then(t=>{
          state.mdCache.set(it.file,t);
          if (isBodyEmpty(t)) { state.emptyArticles.add(it.id); updateEmptyIndicators(); }
        }).catch(()=>{ state.emptyArticles.add(it.id); updateEmptyIndicators(); });
    }
  }

  /* ── Wiki index ────────────────────────────── */
  function renderWiki(id, wikiKey) {
    const cfg  = SITE_CONFIG.wikis[wikiKey];
    const area = document.getElementById('content');
    if (!cfg) { area.innerHTML=`<div class="error-box"><h2>WIKI nieznana: ${wikiKey}</h2></div>`; return; }
    const item = state.pageMap.get(id);
    setBreadcrumb({...item, section:'Encyklopedie', label:cfg.title});

    const isGloss = cfg.sections.length===1 && cfg.sections[0].isGlossary;
    const body = isGloss
      ? renderGlossHTML(cfg.sections[0].entries)
      : cfg.sections.map(sec=>`
        <div class="wiki-sec">
          <div class="wiki-sec-title">${sec.title}</div>
          <div class="art-grid">${sec.articles.map(artCard).join('')}</div>
        </div>`).join('');

    area.innerHTML = `<div class="rendered">
      <div class="wiki-hdr">
        <span class="chapter-lbl">Encyklopedia</span>
        <h1>${cfg.title}</h1>
        <p class="intro">${cfg.intro}</p>
      </div>
      ${body}
    </div>`;
    window.scrollTo(0,0);
    updateEmptyIndicators();
    animateWikiIn();
  }

  function artCard(art) {
    const isEmpty = art.id && state.emptyArticles.has(art.id);
    const effectiveStatus = isEmpty ? 'empty' : art.status;
    const lbl = {live:'dostępny',planned:'planowany',wiki:'wiki',xlink:'wspólny ↗',empty:'pusty'};
    const clickable = (isEmpty || art.status==='live'||art.status==='wiki'||art.status==='xlink') && art.id;
    const click = clickable ? `onclick="navigate('${art.id}')"` : '';
    const artid = art.id ? `data-artid="${art.id}"` : '';
    const desc  = art.desc ? `<div class="art-desc">${art.desc}</div>` : '';
    return `<div class="art-card ${effectiveStatus}" ${artid} ${click}>
      <div class="art-dot ${effectiveStatus}"></div>
      <div class="art-body"><div class="art-lbl">${art.label}</div>${desc}</div>
      <span class="art-badge ${effectiveStatus}">${lbl[effectiveStatus]||effectiveStatus}</span>
    </div>`;
  }

  /* ── Glossary ──────────────────────────────── */
  function renderGlossHTML(entries) {
    const groups = {};
    for (const e of entries) { const l=e.term[0].toUpperCase(); (groups[l]=groups[l]||[]).push(e); }
    const letters = Object.keys(groups).sort();
    const btns = ['Wszystkie',...letters].map(l=>
      `<button class="gloss-btn${l==='Wszystkie'?' active':''}" onclick="filterGloss('${l}')">${l}</button>`
    ).join('');
    const content = letters.map(l=>`
      <div class="gloss-group" data-letter="${l}">
        <div class="gloss-letter">${l}</div>
        ${groups[l].map(e=>`
          <div class="gloss-entry">
            <div class="gloss-term">${e.term}${e.link?`<span class="gloss-go" onclick="navigate('${e.link}')">→ artykuł</span>`:''}</div>
            <div class="gloss-def">${e.def}</div>
          </div>`).join('')}
      </div>`).join('');
    return `<div class="gloss-filter">${btns}</div><div id="glossGroups">${content}</div>`;
  }

  window.filterGloss = function(l) {
    document.querySelectorAll('.gloss-btn').forEach(b=>b.classList.toggle('active',b.textContent===l));
    document.querySelectorAll('.gloss-group').forEach(g=>{
      g.style.display = (l==='Wszystkie'||g.dataset.letter===l) ? '' : 'none';
    });
  };

  /* ── Home ──────────────────────────────────── */
  function renderHome() {
    const area = document.getElementById('content');
    setBreadcrumb(null);
    const totalMd   = SITE_CONFIG.nav.flatMap(s=>s.items).filter(i=>i.file).length;
    const totalWiki = Object.keys(SITE_CONFIG.wikis).length;
    const domains   = SITE_CONFIG.nav.filter(s=>!['Encyklopedie','Referencje','Wprowadzenie'].includes(s.section));
    const totalPlan = Object.values(SITE_CONFIG.plans||{}).flat().filter(p=>p.status==='planned').length;

    const icons = {'Neurobiologia':'🧬','Funkcje Poznawcze':'🧩','Zaburzenia Kliniczne':'⚕️',
      'Przypadki Kliniczne':'📋','Diagnostyka':'📊','Psychometria':'📏','Farmakologia':'💊',
      'Różnice Indywidualne':'👤','Temperament':'🌡️','Emocje i Motywacja':'❤️',
      'Biologiczne Podstawy':'🔬','Psychoterapia':'🛋️','Psychopatologia':'🔍',
      'Suicydologia':'🆘','Seksuologia':'💜','Arteterapia':'🎨','Animaloterapia':'🐾'};
    const cards = domains.map(sec=>{
      const cnt   = sec.items.filter(i=>i.file).length;
      const navId = sec.items[0]?.id||'';
      return `<div class="domain-card" onclick="navigate('${navId}')">
        <div class="d-icon">${icons[sec.section]||'📖'}</div>
        <div class="d-name">${sec.section}</div>
        <span class="d-count">${cnt} art.</span>
      </div>`;
    }).join('');

    area.innerHTML = `<div class="rendered">
      <div class="home-hero">
        <div class="home-eyebrow">Portal Wiedzy Psychologicznej</div>
        <h1>Witaj w <span>PsyHub</span></h1>
        <p>Encyklopedia psychologii i neuropsychologii — każdy artykuł w osobnym pliku Markdown, każdy dział z pełnym planem rozbudowy.</p>
        <div class="home-stats">
          <div><div class="stat-val">${totalMd}</div><div class="stat-lbl">Artykułów</div></div>
          <div><div class="stat-val">${totalPlan}</div><div class="stat-lbl">Zaplanowanych</div></div>
          <div><div class="stat-val">${totalWiki}</div><div class="stat-lbl">Encyklopedii</div></div>
          <div><div class="stat-val">${domains.length}</div><div class="stat-lbl">Działów</div></div>
        </div>
      </div>
      <div><div class="domains-h2">Działy tematyczne</div><div class="domain-grid">${cards}</div></div>
    </div>`;
    window.scrollTo(0,0);
    animateHomeCards();
  }

  /* ── Breadcrumb ────────────────────────────── */
  function setBreadcrumb(item) {
    const bc = document.getElementById('breadcrumb');
    if (!item) { bc.innerHTML = `<a onclick="navigate(SITE_CONFIG.defaultPage)">PsyHub</a>`; return; }
    const s = item?.section||'';
    const l = item?.label||'';
    let sHtml = '';
    if (s) {
      const sec     = SITE_CONFIG.nav.find(n => n.section === s);
      const firstId = sec?.items?.[0]?.id;
      sHtml = firstId
        ? `<span class="bsep">/</span><a onclick="navigate('${firstId}')">${s}</a>`
        : `<span class="bsep">/</span><span>${s}</span>`;
    }
    bc.innerHTML = `<a onclick="navigate(SITE_CONFIG.defaultPage)">PsyHub</a>`
      + sHtml
      + (l ? `<span class="bsep">/</span><span class="bcur">${l}</span>` : '');
  }

  /* ── Search ────────────────────────────────── */
  document.getElementById('searchInput').addEventListener('input', function() {
    const query = this.value.trim().toLowerCase();
    document.querySelectorAll('.nav-item').forEach(el=>{
      el.style.display = (!query || el.textContent.toLowerCase().includes(query)) ? '' : 'none';
    });
    document.querySelectorAll('.nav-group').forEach(g=>{
      const any = [...g.querySelectorAll('.nav-item')].some(i=>i.style.display!=='none');
      g.style.display = any ? '' : 'none';
      if (query && any) g.classList.add('open');
      if (!query && !g.querySelector('.nav-item.active')) g.classList.remove('open');
    });
  });

  /* ── Sidebar mobile ────────────────────────── */
  function openSidebar()  {
    document.getElementById('sidebar').classList.add('open');
    document.getElementById('overlay').classList.add('open');
  }
  function closeSidebar() {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('overlay').classList.remove('open');
    const searchInput = document.getElementById('searchInput');
    if (searchInput) { searchInput.value = ''; searchInput.dispatchEvent(new Event('input')); }
  }

  /* ── Progress bar ──────────────────────────── */
  window.addEventListener('scroll', () => {
    const h = document.body.scrollHeight - window.innerHeight;
    document.getElementById('progFill').style.width = (h>0 ? Math.min(100, window.scrollY/h*100) : 0)+'%';
  });

  /* ── Keyboard ──────────────────────────────── */
  document.addEventListener('keydown', e => { if (e.key==='Escape') closeSidebar(); });

  /* ── Anime.js Animations ───────────────────── */
  function animateContentIn() {
    anime({
      targets: '#content .rendered',
      opacity: [0, 1],
      translateY: [18, 0],
      duration: 380,
      easing: 'easeOutQuart'
    });
  }

  function animateHomeCards() {
    anime({
      targets: '.domain-card',
      opacity: [0, 1],
      translateY: [24, 0],
      delay: anime.stagger(60, { start: 120 }),
      duration: 420,
      easing: 'easeOutQuart'
    });
    anime({
      targets: '.home-hero',
      opacity: [0, 1],
      translateY: [14, 0],
      duration: 480,
      easing: 'easeOutQuart'
    });
    const statEls = document.querySelectorAll('.stat-val');
    statEls.forEach(el => {
      const target = parseInt(el.textContent, 10) || 0;
      el.textContent = '0';
      anime({
        targets: el,
        innerHTML: [0, target],
        round: 1,
        duration: 900,
        delay: 180,
        easing: 'easeOutQuart',
        update() { el.textContent = Math.round(parseFloat(el.textContent)); }
      });
    });
  }

  function animateWikiIn() {
    anime({
      targets: '.wiki-sec',
      opacity: [0, 1],
      translateY: [20, 0],
      delay: anime.stagger(80, { start: 80 }),
      duration: 400,
      easing: 'easeOutQuart'
    });
    anime({
      targets: '.wiki-hdr',
      opacity: [0, 1],
      translateY: [14, 0],
      duration: 420,
      easing: 'easeOutQuart'
    });
  }

  function animateSidebar() {
    if (window.innerWidth > MOBILE_BREAKPOINT) {
      anime({
        targets: '.sidebar',
        translateX: [-20, 0],
        opacity: [0, 1],
        duration: 500,
        easing: 'easeOutQuart'
      });
    }
    anime({
      targets: '.s-logo',
      opacity: [0, 1],
      translateY: [-8, 0],
      duration: 400,
      delay: 100,
      easing: 'easeOutBack'
    });
    anime({
      targets: '.nav-group',
      opacity: [0, 1],
      translateX: [-12, 0],
      delay: anime.stagger(30, { start: 200 }),
      duration: 350,
      easing: 'easeOutQuart'
    });
  }

  /* ── Boot ──────────────────────────────────── */
  window.addEventListener('DOMContentLoaded', () => {
    buildPageMap();
    state.pageMap.set('__home__', {id:'__home__', label:'Strona główna', section:''});
    renderSidebar();
    animateSidebar();
    const hash = window.location.hash.slice(1);
    navigate(hash && state.pageMap.has(hash) ? hash : SITE_CONFIG.defaultPage, true);
  });

  /* ── Browser back/forward ──────────────────── */
  window.addEventListener('popstate', e => {
    const id = e.state?.id || window.location.hash.slice(1) || SITE_CONFIG.defaultPage;
    navigate(state.pageMap.has(id) ? id : SITE_CONFIG.defaultPage, true);
  });

  /* ── Expose public API (called from HTML onclick attributes) ── */
  window.navigate     = navigate;
  window.openSidebar  = openSidebar;
  window.closeSidebar = closeSidebar;
  window.toggleGroup  = toggleGroup;

}());
