// @ts-nocheck
/* Interactive behaviour for Kwartał Zabłocie (ported from the static build). */
const BASE = process.env.NEXT_PUBLIC_BASE ?? '';
const U = id => `${BASE}/mieszkanie/?id=${encodeURIComponent(id)}`;

export const KZ = (() => {

  let seed = 1912;
  const rnd = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;

  const BUILDINGS = {
    A: { name: 'Dawna hala', floors: [0, 1, 2, 3], perFloor: 6, free: 12, rooms: [3, 5], area: [70, 112], ppm: 13300, ready: 'IV kw. 2027', desc: 'lofty i mieszkania 3–5 pok.' },
    B: { name: 'Od dziedzińca', floors: [1, 2, 3, 4, 5, 6], perFloor: 6, free: 18, rooms: [2, 3], area: [48, 68], ppm: 12100, ready: 'IV kw. 2027', desc: '2–3 pokoje, balkony na południe' },
    C: { name: 'Od Wisły', floors: [0, 1, 2, 3], perFloor: 8, free: 21, rooms: [2, 4], area: [55, 90], ppm: 12800, ready: 'II kw. 2028', desc: 'widok na bulwary, tarasy' },
    D: { name: 'Kawalerki i 2 pok.', floors: [0, 1, 2, 3], perFloor: 8, free: 30, rooms: [1, 2], area: [38, 52], ppm: 12600, ready: 'II kw. 2028', desc: 'pod inwestycję i na start' }
  };

  const FIXED = {
    'B·4.04': { rooms: 3, area: 64.2, exp: 'S', price: 812000, status: 'free', balcony: 7.8, featured: true },
    'B·3.04': { rooms: 3, area: 64.2, exp: 'S', price: 798000, status: 'free', balcony: 7.8 },
    'B·4.02': { rooms: 3, area: 58.9, exp: 'S/W', price: 744000, status: 'free' },
    'B·2.05': { rooms: 3, area: 61.3, exp: 'S', price: 752000, status: 'free' },
    'B·5.03': { rooms: 3, area: 66.8, exp: 'S', price: 869000, status: 'free' },
    'B·3.01': { rooms: 3, area: 57.4, exp: 'S/E', price: 712000, status: 'free' },
    'B·6.04': { rooms: 3, area: 64.2, exp: 'S', price: 889000, status: 'free' },
    'B·1.03': { rooms: 3, area: 62.0, exp: 'S', price: 738000, status: 'free' },
    'B·5.01': { rooms: 3, area: 59.1, exp: 'S/E', price: 786000, status: 'free' },
    'C·3.02': { rooms: 3, area: 66.0, exp: 'N/W', price: 846000, status: 'free', note: 'widok na Wisłę' },
    'A·2.05': { rooms: 3, area: 71.5, exp: 'E', price: 899000, status: 'free', note: 'loft w dawnej hali, 2,9 m' }
  };

  const units = [];
  Object.entries(BUILDINGS).forEach(([b, cfg]) => {
    const list = [];
    cfg.floors.forEach(fl => {
      for (let p = 1; p <= cfg.perFloor; p++) {
        const id = `${b}·${fl}.${String(p).padStart(2, '0')}`;
        const area = Math.round((cfg.area[0] + rnd() * (cfg.area[1] - cfg.area[0])) * 10) / 10;
        const rooms = Math.max(cfg.rooms[0], Math.min(cfg.rooms[1], Math.round(area / 22)));
        const edge = p === 1 ? 'E' : p === cfg.perFloor ? 'W' : '';
        const base = { B: 'S', A: 'E', C: 'N', D: 'S' }[b];
        const exp = edge && edge !== base ? `${base}/${edge}` : base;
        const ppm = cfg.ppm + fl * 140 + Math.round(rnd() * 600);
        const price = Math.round((area * ppm) / 1000) * 1000;
        const outdoor = fl === 0 ? 'Ogródek' : (b === 'C' && fl === 3) || (b === 'B' && fl === 6) ? 'Taras' : b === 'A' ? 'Loggia' : 'Balkon';
        list.push({ id, b, floor: fl, pos: p, area, rooms, exp, price, outdoor, balcony: Math.round((4 + rnd() * 6) * 10) / 10, parking: rnd() > 0.7, storage: rnd() > 0.5, access: fl === 0 || rnd() > 0.8, status: 'sold' });
      }
    });
    // exact number of free units per building
    const fixedHere = list.filter(u => FIXED[u.id]);
    fixedHere.forEach(u => Object.assign(u, FIXED[u.id]));
    let freeLeft = cfg.free - fixedHere.filter(u => u.status === 'free').length;
    const pool = list.filter(u => !FIXED[u.id]).sort(() => rnd() - 0.5);
    pool.forEach(u => {
      if (freeLeft > 0) { u.status = 'free'; freeLeft--; }
      else u.status = rnd() > 0.65 ? 'res' : 'sold';
    });
    units.push(...list);
  });

  const fmt = n => String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, '\u00a0');
  const zl = n => fmt(n) + ' zł';
  const m2 = n => n.toFixed(1).replace('.', ',') + ' m²';
  const floorName = f => (f === 0 ? 'parter' : String(f));
  const roomsName = r => (r === 1 ? 'kawalerka' : r + (r < 5 ? ' pokoje' : ' pokoi'));

  /* Simple generated floor plan */
  function planSVG(u, opts = {}) {
    const W = 320, H = 210, x0 = 10, y0 = 10, w = W - 20, h = H - 40;
    const lw = Math.round(w * (u.rooms === 1 ? 1 : 0.56));
    const beds = Math.max(0, u.rooms - 1);
    const lbl = opts.labels;
    let s = `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Rzut mieszkania ${u.id}">`;
    // balcony
    s += `<rect x="${x0 + 20}" y="${y0 + h}" width="${lw - 40}" height="22" fill="none" stroke="#1C1C1A" stroke-width="1.5" stroke-dasharray="4 3"/>`;
    s += `<rect x="${x0}" y="${y0}" width="${w}" height="${h}" fill="#FBFAF7" stroke="#1C1C1A" stroke-width="4"/>`;
    // living
    if (u.rooms > 1) s += `<line x1="${x0 + lw}" y1="${y0}" x2="${x0 + lw}" y2="${y0 + h}" stroke="#1C1C1A" stroke-width="2.5"/>`;
    // bathroom top-left corner
    s += `<rect x="${x0}" y="${y0}" width="70" height="56" fill="#E9E4DA" stroke="#1C1C1A" stroke-width="2"/>`;
    // kitchen counter
    s += `<rect x="${x0 + 80}" y="${y0 + 4}" width="${Math.min(110, lw - 90)}" height="14" fill="#D8D2C6"/>`;
    // bedrooms
    const rw = w - lw, bh = h / Math.max(1, beds);
    for (let i = 0; i < beds; i++) {
      const by = y0 + i * bh;
      if (i) s += `<line x1="${x0 + lw}" y1="${by}" x2="${x0 + w}" y2="${by}" stroke="#1C1C1A" stroke-width="2.5"/>`;
      s += `<rect x="${x0 + lw + rw / 2 - 26}" y="${by + bh / 2 - 18}" width="52" height="36" rx="3" fill="#D9B99F"/>`;
      if (lbl) s += `<text x="${x0 + lw + 10}" y="${by + 18}" font-family="IBM Plex Mono" font-size="8" fill="#6E6A63">POKÓJ ${i + 1}</text>`;
    }
    // sofa
    s += `<rect x="${x0 + 24}" y="${y0 + h - 46}" width="${Math.min(90, lw - 50)}" height="22" rx="3" fill="#8E9A82"/>`;
    // windows
    s += `<rect x="${x0 + 30}" y="${y0 + h - 3}" width="${lw - 60}" height="6" fill="#9EC3D6"/>`;
    if (beds) s += `<rect x="${x0 + lw + 20}" y="${y0 + h - 3}" width="${rw - 40}" height="6" fill="#9EC3D6"/>`;
    if (lbl) {
      s += `<text x="${x0 + 82}" y="${y0 + 84}" font-family="IBM Plex Mono" font-size="8" fill="#6E6A63">SALON Z ANEKSEM</text>`;
      s += `<text x="${x0 + 8}" y="${y0 + 32}" font-family="IBM Plex Mono" font-size="7" fill="#6E6A63">ŁAZ.</text>`;
    }
    s += `<text x="${x0 + 4}" y="${H - 4}" font-family="IBM Plex Mono" font-size="8" fill="#B5562F">${u.outdoor.toUpperCase()} · ${u.exp}</text>`;
    return s + '</svg>';
  }

  return {
    BUILDINGS, units,
    get: id => units.find(u => u.id === id),
    byBuilding: b => units.filter(u => u.b === b),
    fmt, zl, m2, floorName, roomsName, planSVG
  };
})();

let started = false;
export function initCommon() {
  if (typeof window === 'undefined') return;
  window.KZ = KZ;

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  /* nav */
  const nav = $('.nav');
  if (nav) {
    $('.burger', nav)?.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      $('.burger', nav).setAttribute('aria-expanded', open);
    });
    const onScroll = () => nav.classList.toggle('scrolled', scrollY > 8);
    addEventListener('scroll', onScroll, { passive: true }); onScroll();
  }

  /* reveal + bars */
  // geometry check instead of IntersectionObserver: clip-path hidden elements never "intersect"
  let pend = $$('.rv, .bar i[data-w]');
  const show = el => {
    el.classList.add('in');
    $$('.bar i[data-w]', el).forEach(b => (b.style.width = b.dataset.w));
    if (el.matches('.bar i[data-w]')) el.style.width = el.dataset.w;
  };
  let tick = 0;
  const check = () => { tick = 0; const vh = innerHeight; pend = pend.filter(el => { const r = el.getBoundingClientRect(); if (r.top < vh * .9 && r.bottom > 0) { show(el); return false; } return true; }); };
  const req = () => { if (!tick) tick = requestAnimationFrame(check); };
  addEventListener('scroll', req, { passive: true }); addEventListener('resize', req); check(); setTimeout(check, 300);

  /* range fill */
  const fill = r => r.style.setProperty('--p', ((r.value - r.min) / (r.max - r.min)) * 100 + '%');
  $$('input[type=range]').forEach(r => { fill(r); r.addEventListener('input', () => fill(r)); });

  /* toggle chips */
  $$('[data-toggle] .chip').forEach(c => c.addEventListener('click', () => {
    const grp = c.closest('[data-toggle]');
    if (grp.dataset.toggle === 'one') $$('.chip', grp).forEach(x => x.setAttribute('aria-pressed', 'false'));
    c.setAttribute('aria-pressed', c.getAttribute('aria-pressed') === 'true' && grp.dataset.toggle !== 'one' ? 'false' : 'true');
    grp.dispatchEvent(new Event('change', { bubbles: true }));
  }));

  /* fake forms */
  $$('form.form').forEach(f => f.addEventListener('submit', e => {
    e.preventDefault();
    f.classList.add('sent');
    const b = $('button[type=submit]', f); if (b) { b.textContent = 'Wysłane ✓'; b.disabled = true; }
  }));

  /* ===== Facade component ===== */
  function popHTML(u) {
    return `<p class="k">${u.id.replace('·', ' · ')} · ${u.status === 'free' ? 'wolne' : u.status === 'res' ? 'rezerwacja' : 'sprzedane'}</p>
      <h4>${KZ.roomsName(u.rooms)}, ${KZ.m2(u.area)}</h4>
      ${KZ.planSVG(u)}
      <dl><dt>Piętro</dt><dd>${KZ.floorName(u.floor)} z ${KZ.BUILDINGS[u.b].floors.length === 6 ? 6 : 3}</dd>
      <dt>${u.outdoor}</dt><dd>${KZ.m2(u.balcony)} · ${u.exp}</dd>
      <dt>Cena</dt><dd>${KZ.zl(u.price)}</dd></dl>
      <a class="btn btn-i" href="${U(u.id)}">Zobacz mieszkanie →</a>
      <button class="pop-x" aria-label="Zamknij">×</button>`;
  }

  function facade(el, b, opts = {}) {
    const cfg = KZ.BUILDINGS[b];
    const floors = [...cfg.floors].reverse();
    let html = `<div class="facade" data-b="${b}"><div class="facade-body">`;
    floors.forEach(f => {
      html += `<div class="facade-floor" style="grid-template-columns:repeat(${cfg.perFloor},1fr)">`;
      KZ.units.filter(u => u.b === b && u.floor === f).forEach(u => {
        const lab = `${u.id}, ${KZ.roomsName(u.rooms)}, ${KZ.m2(u.area)}, ${u.status === 'free' ? 'wolne' : u.status === 'res' ? 'rezerwacja' : 'sprzedane'}`;
        html += u.status === 'free'
          ? `<a class="win free" href="${U(u.id)}" data-id="${u.id}" aria-label="${lab}"></a>`
          : `<span class="win ${u.status}" data-id="${u.id}" aria-label="${lab}" role="img"></span>`;
      });
      html += '</div>';
    });
    html += `</div><div class="facade-label"><span>BUDYNEK ${b}</span><span>${cfg.name.toUpperCase()}</span></div></div>`;
    el.insertAdjacentHTML('beforeend', html);
    return el.lastElementChild;
  }

  function bindPop(scope, pop, defaultId) {
    const show = (win) => {
      const u = KZ.get(win.dataset.id);
      if (!u || u.status !== 'free') return;
      $$('.win.sel', scope).forEach(w => w.classList.remove('sel'));
      win.classList.add('sel');
      pop.innerHTML = popHTML(u);
      pop.hidden = false;
      const sr = scope.getBoundingClientRect(), wr = win.getBoundingClientRect();
      let left = wr.right - sr.left + 14, top = wr.top - sr.top - 40;
      if (left + 300 > sr.width) left = wr.left - sr.left - 314;
      top = Math.max(0, Math.min(top, sr.height - 420));
      pop.style.left = left + 'px'; pop.style.top = top + 'px';
    };
    const mobile = matchMedia('(max-width:760px)');
    scope.addEventListener('mouseover', e => { if (mobile.matches) return; const w = e.target.closest('.win.free'); if (w && !w.classList.contains('dim')) show(w); });
    scope.addEventListener('click', e => {
      if (e.target.closest('.pop-x')) { pop.hidden = true; $$('.win.sel', scope).forEach(w => w.classList.remove('sel')); return; }
      const w = e.target.closest('.win.free'); if (!w) return;
      if (mobile.matches && !w.classList.contains('sel')) { e.preventDefault(); show(w); }
    });
    scope.addEventListener('focusin', e => { const w = e.target.closest('.win.free'); if (w) show(w); });
    if (defaultId && !mobile.matches) {
      const w = $(`.win[data-id="${defaultId}"]`, scope);
      if (w) requestAnimationFrame(() => show(w));
      addEventListener('resize', () => { const s = $('.win.sel', scope); if (s) show(s); });
    }
  }

  window.KZUI = { facade, bindPop, popHTML, $, $$ };

  /* home hero */
  const hv = $('#hero-view');
  if (hv) {
    const card = $('.vcard', hv), cap = $('.vcap', hv);
    const VIEW = { B: 'na zielony dziedziniec', C: 'na Wisłę i bulwary', A: 'na Wawel, z tarasów', D: 'na aleję, okna do sufitu' };
    $$('.vtabs button', hv).forEach(btn => btn.addEventListener('click', () => {
      const b = btn.dataset.b, on = btn.getAttribute('aria-pressed') !== 'true';
      $$('.vtabs button', hv).forEach(x => x.setAttribute('aria-pressed', 'false'));
      $$('.vph img', hv).forEach(i => i.classList.toggle('on', i.dataset.v === (on ? b : '0')));
      if (!on) { card.hidden = true; cap.hidden = false; return; }
      btn.setAttribute('aria-pressed', 'true');
      const B = KZ.BUILDINGS[b], free = KZ.byBuilding(b).filter(u => u.status === 'free').length;
      card.innerHTML = `<p class="k">Budynek ${b} · ${B.name}</p><h4>Widok ${VIEW[b]}</h4>
        <dl><dt>Wolne</dt><dd>${free} mieszkań</dd><dt>Pokoje</dt><dd>${B.rooms[0]}–${B.rooms[1]}</dd><dt>Metraż</dt><dd>${B.area[0]}–${B.area[1]} m²</dd><dt>Cena od</dt><dd>${KZ.zl(Math.round(B.area[0] * B.ppm / 1000) * 1000)}</dd></dl>
        <a class="btn btn-i" href="${BASE}/mieszkania/?b=${b}">Pokaż ${free} mieszkań →</a>`;
      card.hidden = false; cap.hidden = true;
    }));
  }
  /* mini building cards */
  $$('[data-mini]').forEach(m => {
    const us = KZ.byBuilding(m.dataset.mini).slice(-15);
    m.innerHTML = us.map(u => `<i class="st-${u.status === 'free' ? 'free' : u.status === 'res' ? 'res' : 'sold'}"></i>`).join('');
  });
  $$('[data-freecount]').forEach(n => (n.textContent = KZ.byBuilding(n.dataset.freecount).filter(u => u.status === 'free').length));

  /* live date */
  $$('[data-today]').forEach(n => (n.textContent = new Date().toLocaleDateString('pl-PL')));
  $$('[data-year]').forEach(n => (n.textContent = new Date().getFullYear()));

}

export function initListing() {
  const { $, $$, facade, bindPop } = KZUI;
  const q = $('#quarter'), cards = $('#cards'), count = $('#count');
  ['A', 'B', 'C', 'D'].forEach(b => facade(q, b));
  bindPop(q, $('#q-pop'));

  const params = new URLSearchParams(location.search);
  if (params.get('b')) $$('[data-f=b] .chip').forEach(c => c.setAttribute('aria-pressed', c.dataset.v === params.get('b') ? 'true' : 'false'));

  const favs = new Set(JSON.parse(localStorage.getItem('kz-fav') || '[]'));
  const pressed = name => $$(`[data-f=${name}] .chip[aria-pressed=true]`).map(c => c.dataset.v);
  const area = $('#f-area'), price = $('#f-price');

  function match(u) {
    if (u.status !== 'free') return false;
    const r = pressed('rooms'); if (r.length && !r.some(v => (v === '5' ? u.rooms >= 5 : u.rooms == v))) return false;
    if (u.area < +area.value) return false;
    if (u.price > +price.value) return false;
    const b = pressed('b'); if (b.length && !b.includes(u.b)) return false;
    const f = pressed('floor'); if (f.length && !f.some(v => (v === '0' ? u.floor === 0 : v === '12' ? [1, 2].includes(u.floor) : v === '34' ? [3, 4].includes(u.floor) : [5, 6].includes(u.floor)))) return false;
    const e = pressed('exp'); if (e.length && !e.some(v => u.exp.includes(v))) return false;
    const o = pressed('out'); if (o.length && !o.includes(u.outdoor)) return false;
    if ($('#x-park').checked && !u.parking) return false;
    if ($('#x-store').checked && !u.storage) return false;
    if ($('#x-acc').checked && !u.access) return false;
    return true;
  }

  function card(u) {
    const fav = favs.has(u.id);
    return `<article class="ucard rv in">
      ${u.featured ? '<span class="badge">polecane</span>' : ''}
      <button class="fav" aria-pressed="${fav}" aria-label="Dodaj ${u.id} do ulubionych" data-fav="${u.id}">${fav ? '♥' : '♡'}</button>
      ${KZ.planSVG(u)}
      <span class="id">${u.id.replace('·', ' · ')}</span>
      <h3>${KZ.roomsName(u.rooms)}, ${KZ.m2(u.area)}</h3>
      <div class="meta"><span>Piętro <b>${KZ.floorName(u.floor)}</b></span><span>Strona <b>${u.exp}</b></span><span>${u.outdoor}</span></div>
      <div class="pr"><div><b>${KZ.zl(u.price)}</b><br><small>${KZ.fmt(Math.round(u.price / u.area / 10) * 10)} zł/m²</small></div>
      <a class="link" href="${U(u.id)}">Zobacz →</a></div></article>`;
  }

  function update() {
    $('#v-area').textContent = area.value + ' m²';
    $('#v-price').textContent = 'do ' + KZ.zl(+price.value);
    const list = KZ.units.filter(match);
    const sort = $('#sort').value;
    list.sort((a, b) => sort === 'pa' ? a.price - b.price : sort === 'pd' ? b.price - a.price : sort === 'aa' ? b.area - a.area : (b.featured ? 1 : 0) - (a.featured ? 1 : 0) || a.price - b.price);
    $$('.win', q).forEach(w => { const u = KZ.get(w.dataset.id); w.classList.toggle('dim', u.status === 'free' && !match(u)); });
    count.textContent = list.length;
    $('#count2').textContent = list.length;
    cards.innerHTML = list.length ? list.map(card).join('') : '<p class="empty">Nie ma mieszkań dla tych filtrów. Poszerz metraż albo cenę, albo zostaw e-mail na dole strony.</p>';
  }

  $('#filters').addEventListener('change', update);
  $('#filters').addEventListener('input', update);
  $('#sort').addEventListener('change', update);
  $('#clear').addEventListener('click', () => {
    $$('#filters .chip').forEach(c => c.setAttribute('aria-pressed', 'false'));
    $$('#filters input[type=checkbox]').forEach(c => (c.checked = false));
    area.value = area.min; price.value = price.max;
    [area, price].forEach(r => r.dispatchEvent(new Event('input')));
    update();
  });
  cards.addEventListener('click', e => {
    const b = e.target.closest('[data-fav]'); if (!b) return;
    const id = b.dataset.fav; favs.has(id) ? favs.delete(id) : favs.add(id);
    localStorage.setItem('kz-fav', JSON.stringify([...favs]));
    b.setAttribute('aria-pressed', favs.has(id)); b.textContent = favs.has(id) ? '♥' : '♡';
  });

  // view toggle
  $$('.views button').forEach(btn => btn.addEventListener('click', () => {
    $$('.views button').forEach(b => b.setAttribute('aria-pressed', b === btn));
    const v = btn.dataset.view;
    $('#view-facade').hidden = v === 'list';
    $('#view-list').hidden = false;
    if (v === 'list') $('#view-list').scrollIntoView({ behavior: 'smooth' });
  }));
  update();
}

export function initApartment() {
  const { $, $$ } = KZUI;
  const id = new URLSearchParams(location.search).get('id') || 'B·4.04';
  const u = KZ.get(id) || KZ.get('B·4.04');
  const cfg = KZ.BUILDINGS[u.b];
  const top = cfg.floors[cfg.floors.length - 1];
  document.title = `${u.id} · ${KZ.roomsName(u.rooms)}, ${KZ.m2(u.area)} · Kwartał Zabłocie`;

  const set = (k, v) => $$(`[data-f="${k}"]`).forEach(n => (n.textContent = v));
  set('id', u.id.replace('·', ' · '));
  set('crumb', `Mieszkania  /  Budynek ${u.b}  /  ${u.id.split('·')[1]}`);
  set('title', `${KZ.roomsName(u.rooms)}, ${KZ.m2(u.area)}`);
  set('sub', `${u.floor === 0 ? 'parter' : u.floor + '. piętro'} z ${top} · ${u.outdoor.toLowerCase()} ${KZ.m2(u.balcony)} · strona ${u.exp}`);
  set('status', u.status === 'free' ? 'wolne' : u.status === 'res' ? 'rezerwacja' : 'sprzedane');
  set('price', KZ.zl(u.price));
  set('ppm', `${KZ.fmt(Math.round(u.price / u.area / 10) * 10)} zł / m² · cena brutto`);
  set('rooms', u.rooms); set('area', KZ.m2(u.area)); set('floor', `${KZ.floorName(u.floor)} z ${top}`);
  set('exp', u.exp); set('balcony', KZ.m2(u.balcony)); set('ready', cfg.ready);
  set('p10', KZ.zl(Math.round(u.price * 0.1))); set('p90', KZ.zl(Math.round(u.price * 0.9)));
  set('where', `Budynek ${u.b}, ${u.floor === 0 ? 'parter' : u.floor + '. piętro'}, ${u.pos}. okno od lewej. ${u.b === 'B' ? 'Od strony dziedzińca, więc cicho.' : u.b === 'C' ? 'Od strony Wisły, z widokiem na bulwary.' : u.b === 'A' ? 'W dawnej hali, z oryginalną cegłą.' : 'Blisko wejścia i stojaków na rowery.'}`);
  set('sunid', u.id.replace('·', '·'));
  $('#plan').innerHTML = KZ.planSVG(u, { labels: true });

  // where in building
  const wb = $('#where-facade'); if (wb) { KZUI.facade(wb, u.b); $$('.win', wb).forEach(w => { if (w.dataset.id === u.id) w.classList.add('sel'); else w.classList.add('dim'); }); }

  // tabs
  $$('[role=tab]').forEach(t => t.addEventListener('click', () => {
    $$('[role=tab]').forEach(x => x.setAttribute('aria-selected', x === t));
    $$('[role=tabpanel]').forEach(p => (p.hidden = p.id !== t.getAttribute('aria-controls')));
  }));

  // similar
  const sim = KZ.units.filter(x => x.id !== u.id && x.status === 'free' && x.rooms === u.rooms).sort((a, b) => Math.abs(a.price - u.price) - Math.abs(b.price - u.price)).slice(0, 3);
  $('#similar').innerHTML = sim.map(x => `<a class="ucard rv in" href="${U(x.id)}">${KZ.planSVG(x)}<span class="id">${x.id.replace('·', ' · ')}</span><h3>${KZ.roomsName(x.rooms)}, ${KZ.m2(x.area)}</h3><div class="meta"><span>Piętro <b>${KZ.floorName(x.floor)}</b></span><span>Strona <b>${x.exp}</b></span></div><div class="pr"><b>${KZ.zl(x.price)}</b><span class="link">Zobacz →</span></div></a>`).join('');

  // reserve button
  $('#reserve')?.addEventListener('click', e => { e.currentTarget.textContent = 'Zarezerwowane na 7 dni ✓'; e.currentTarget.disabled = true; });

  /* ===== Sun simulator (Kraków 50.06°N) ===== */
  const LAT = 50.06 * Math.PI / 180, R = Math.PI / 180;
  const MONTHS = ['stycznia', 'lutego', 'marca', 'kwietnia', 'maja', 'czerwca', 'lipca', 'sierpnia', 'września', 'października', 'listopada', 'grudnia'];
  function sunPos(month, hour) {
    const N = [21, 52, 80, 111, 141, 172, 202, 233, 264, 294, 325, 355][month];
    const dec = 23.44 * Math.sin(2 * Math.PI * (284 + N) / 365) * R;
    const dst = month >= 3 && month <= 9 ? 1 : 0;
    const H = 15 * (hour - dst + 0.33 - 12) * R;
    const el = Math.asin(Math.sin(LAT) * Math.sin(dec) + Math.cos(LAT) * Math.cos(dec) * Math.cos(H));
    let az = Math.atan2(Math.sin(H), Math.cos(H) * Math.sin(LAT) - Math.tan(dec) * Math.cos(LAT)) / R + 180;
    return { el: el / R, az };
  }
  const WIN_H = 135; // px (2,7 m w skali planu)
  const SOUTH = [[40, 200], [260, 420]], EAST = [90, 220];
  function patches(month, hour) {
    const { el, az } = sunPos(month, hour);
    const L = [-Math.sin(az * R), Math.cos(az * R)];
    const out = [];
    if (el <= 0) return { el, az, out };
    const len = Math.min(900, WIN_H / Math.tan(el * R));
    if (L[1] < 0 && el > 14) SOUTH.forEach(([a, b]) => out.push([[a, 480], [b, 480], [b + L[0] * len, 480 + L[1] * len], [a + L[0] * len, 480 + L[1] * len]]));
    if (L[0] < 0 && el > 3) out.push([[644, EAST[0]], [644, EAST[1]], [644 + L[0] * len, EAST[1] + L[1] * len], [644 + L[0] * len, EAST[0] + L[1] * len]]);
    return { el, az, out, L };
  }
  const hhmm = h => `${Math.floor(h)}:${String(Math.round((h % 1) * 60)).padStart(2, '0')}`;
  function dayStats(month) {
    let salon = 0, bedFirst = null, bedLast = null;
    for (let h = 4; h <= 21; h += 1 / 12) {
      const { el, az } = sunPos(month, h); if (el <= 0) continue;
      const L = [-Math.sin(az * R), Math.cos(az * R)];
      if (L[1] < 0 && el > 14) salon += 5;
      if (L[0] < 0 && el > 3) { if (bedFirst === null) bedFirst = h; bedLast = h; }
    }
    return { salon, bed: bedFirst === null ? 'brak' : `${hhmm(bedFirst)}–${hhmm(bedLast)}` };
  }
  const svg = $('#sun-svg'); if (!svg) return;
  const g = $('#sun-patches'), dot = $('#sun-dot'), hr = $('#sun-hour');
  let month = 2;
  function draw() {
    const hour = +hr.value;
    const { el, az, out } = patches(month, hour);
    g.innerHTML = out.map((p, i) => { const isEast = p[0][0] === 644; return `<polygon clip-path="url(#${isEast ? 'clip-bed' : 'clip-salon'})" points="${p.map(q => q.map(n => n.toFixed(1)).join(',')).join(' ')}" fill="#E8B07A" opacity="${isEast ? .5 : .72}"/>`; }).join('');
    // sun indicator around plan
    const cx = 322, cy = 240, r = 372;
    if (el > 0) { dot.setAttribute('cx', cx + Math.sin(az * R) * r); dot.setAttribute('cy', cy - Math.cos(az * R) * r * .7); dot.style.opacity = 1; } else dot.style.opacity = 0;
    $('#sun-read').textContent = `21 ${MONTHS[month]} · ${hhmm(hour)} · ` + (el > 0 ? `słońce na azymucie ${Math.round(az)}°, ${Math.round(el)}° nad horyzontem` : 'słońce pod horyzontem');
    $('#v-hour').textContent = hhmm(hour);
    const st = dayStats(month), dec = dayStats(11);
    $('#s-salon').textContent = `${Math.floor(st.salon / 60)} h ${st.salon % 60} min`;
    $('#s-salon-l').textContent = `słońca w salonie 21 ${MONTHS[month]}`;
    $('#s-dec').textContent = `${Math.floor(dec.salon / 60)} h ${dec.salon % 60} min`;
    $('#s-bed').textContent = st.bed;
  }
  hr.addEventListener('input', draw);
  $$('.months button').forEach((b, i) => b.addEventListener('click', () => {
    month = i; $$('.months button').forEach(x => x.setAttribute('aria-pressed', x === b)); draw();
  }));
  draw();
}

export function initPages() {
  const { $, $$ } = KZUI;

  /* ===== Okolica: mapa 15 minut ===== */
  const map = $('#map');
  if (map) {
    const C = [500, 380];
    const POI = [
      ['Przystanek tramwajowy', 'Komunikacja', 2, 20, 'tramwaj 3 i 24, 12 minut do Rynku'],
      ['Piekarnia na rogu', 'Jedzenie', 3, 300, 'chleb na zakwasie od 6:30'],
      ['Rower miejski', 'Komunikacja', 3, 120, 'stacja na 20 rowerów'],
      ['Apteka', 'Zdrowie', 3, 210, 'czynna 7 dni w tygodniu'],
      ['MOCAK', 'Kultura', 4, 250, 'muzeum sztuki współczesnej, wstęp we wtorki za darmo'],
      ['Supermarket', 'Zakupy', 4, 60, 'otwarty do 23:00'],
      ['Bistro w dawnej hali', 'Jedzenie', 5, 160, 'lunch dla pracujących z domu'],
      ['Targ na Zabłociu', 'Zakupy', 5, 340, 'warzywa od rolników, sobota 8–14'],
      ['Przedszkole „Wierzbowe”', 'Dzieci', 6, 20, 'ogród z piaskownicą od strony Wisły'],
      ['Bulwary Wiślane', 'Zieleń', 7, 105, 'ścieżka rowerowa do Tyńca'],
      ['Kino Kijów', 'Kultura', 8, 200, 'kino studyjne i nocne seanse'],
      ['Przychodnia', 'Zdrowie', 8, 290, 'NFZ i prywatnie, pediatra'],
      ['Szkoła podstawowa nr 34', 'Dzieci', 9, 50, 'z basenem i boiskiem'],
      ['Kładka Bernatka', 'Zieleń', 12, 155, 'na Kazimierz pieszo w 6 minut'],
      ['Park Bednarskiego', 'Zieleń', 14, 230, 'najstarszy park Podgórza']
    ];
    const COL = { Zakupy: '#B5562F', Dzieci: '#D9A441', Zieleń: '#8E9A82', Kultura: '#1C1C1A', Jedzenie: '#B5562F', Komunikacja: '#5E7C8C', Zdrowie: '#C8452E' };
    const rad = m => 30 + m * 23;
    let s = `<svg viewBox="0 0 1000 760" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mapa: co jest w 15 minut pieszo od Kwartału">`;
    s += `<rect width="1000" height="760" fill="#F2EFE9"/>`;
    s += `<path d="M -20 640 C 200 590 330 720 520 680 S 820 590 1020 640 L 1020 780 L -20 780 Z" fill="#CFDCE0"/><text x="780" y="712" font-family="IBM Plex Mono" font-size="12" fill="#5E7C8C" letter-spacing="2">WISŁA</text>`;
    for (let i = 0; i < 14; i++) s += `<line x1="${i * 80 - 40}" y1="0" x2="${i * 80 + 60}" y2="760" stroke="#E2DDD3" stroke-width="10"/>`;
    [15, 10, 5].forEach(m => s += `<circle cx="${C[0]}" cy="${C[1]}" r="${rad(m)}" fill="${m === 5 ? '#E9E4DA' : 'none'}" stroke="#B5562F" stroke-width="1.2" stroke-dasharray="${m === 15 ? '0' : '5 5'}" opacity=".7"/><text x="${C[0] + rad(m) * .72 + 6}" y="${C[1] - rad(m) * .72}" font-family="IBM Plex Mono" font-size="12" fill="#B5562F">${m} min</text>`);
    POI.forEach((p, i) => {
      const a = p[3] * Math.PI / 180, r = rad(p[2]);
      const x = C[0] + Math.cos(a) * r, y = C[1] + Math.sin(a) * r;
      s += `<g class="poi" data-cat="${p[1]}" data-i="${i}" tabindex="0" role="button" aria-label="${p[0]}, ${p[2]} minut pieszo"><circle class="dot" cx="${x}" cy="${y}" r="8" fill="${COL[p[1]]}"/><text x="${x + 13}" y="${y + 4}" font-family="Bricolage Grotesque Variable, Bricolage Grotesque, sans-serif" font-size="13" font-weight="500" fill="#1C1C1A">${p[0]}</text></g>`;
    });
    s += `<rect x="${C[0] - 16}" y="${C[1] - 16}" width="32" height="32" fill="#1C1C1A"/><text x="${C[0]}" y="${C[1] + 40}" text-anchor="middle" font-family="IBM Plex Mono" font-size="12" letter-spacing="2" fill="#1C1C1A">KWARTAŁ</text></svg>`;
    map.insertAdjacentHTML('afterbegin', s);
    const card = $('#mapcard');
    const show = i => { const p = POI[i]; card.innerHTML = `<span class="k">${p[1]}</span><b>${p[0]}</b><p>${p[2]} min pieszo · ${p[4]}</p>`; };
    map.addEventListener('click', e => { const g = e.target.closest('.poi'); if (g) show(+g.dataset.i); });
    map.addEventListener('keydown', e => { const g = e.target.closest('.poi'); if (g && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); show(+g.dataset.i); } });
    $('#cats').addEventListener('change', () => {
      const on = $$('#cats .chip[aria-pressed=true]').map(c => c.dataset.v);
      $$('.poi', map).forEach(g => g.classList.toggle('off', !(on.includes('Wszystko') || on.includes(g.dataset.cat))));
      const first = POI.findIndex(p => on.includes(p[1])); if (first > -1) show(first);
    });
    show(9);
  }

  /* ===== Kalkulator kredytu ===== */
  const calc = $('#calc');
  if (calc) {
    const f = n => KZ.fmt(Math.round(n));
    const run = () => {
      const price = +$('#c-price').value, dp = +$('#c-dp').value / 100, yrs = +$('#c-yrs').value, rate = +$('#c-rate').value / 100;
      const type = $('#c-type .chip[aria-pressed=true]')?.dataset.v || 'stala';
      const P = price * (1 - dp), n = yrs * 12, r = rate / 12;
      let first, interest;
      if (type === 'stala') { first = P * r / (1 - Math.pow(1 + r, -n)); interest = first * n - P; }
      else { first = P / n + P * r; interest = P * r * (n + 1) / 2; }
      $('#o-price').textContent = f(price) + ' zł';
      $('#o-dp').textContent = `${Math.round(dp * 100)}% · ${f(price * dp)} zł`;
      $('#o-yrs').textContent = yrs + ' lat';
      $('#o-rate').textContent = (rate * 100).toFixed(1).replace('.', ',') + '%';
      $('#r-rata').textContent = f(first) + ' zł';
      $('#r-rata-l').textContent = type === 'stala' ? `miesięcznie przez ${yrs} lat` : 'pierwsza rata, potem maleje';
      $('#r-loan').textContent = f(P) + ' zł';
      $('#r-int').textContent = f(interest) + ' zł';
      $('#r-inc').textContent = 'od ' + f(Math.ceil(first / 0.45 / 100) * 100) + ' zł';
    };
    calc.addEventListener('input', run); calc.addEventListener('change', run);
    const qp = new URLSearchParams(location.search).get('cena'); if (qp) { $('#c-price').value = qp; $('#c-price').dispatchEvent(new Event('input')); }
    run();
  }

  /* ===== Kamera na żywo ===== */
  const cam = $('#cam-time');
  if (cam) {
    const tick = () => {
      const d = new Date(); const m = Math.floor(d.getMinutes() / 15) * 15;
      cam.textContent = `ul. Lipowa · dźwig 2 · ${d.toLocaleDateString('pl-PL')} ${String(d.getHours()).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
      const next = 15 - (d.getMinutes() % 15);
      $('#cam-next').textContent = `następne zdjęcie za ${next} min`;
    };
    tick(); setInterval(tick, 30000);
  }
}
