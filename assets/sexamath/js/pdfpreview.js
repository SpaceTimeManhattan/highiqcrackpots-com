// Inline PDF preview: PDF.js, lazy page rendering, HTTP range loading (works on mobile).
// Usage: <div class="sxpdf" data-src="URL" data-len="BYTES" data-title="..."></div>
const BASE = new URL('../pdfjs/', import.meta.url).href;
const css = `.sxpdf{border:1px solid var(--sxacc,#d4a84a);border-radius:12px;overflow:hidden;background:#1d222c;margin:0 0 1rem}
.sxpdf .sxbar{display:flex;flex-wrap:wrap;gap:.5rem;align-items:center;justify-content:space-between;padding:.55rem .8rem;background:#0b0f17;border-bottom:1px solid var(--sxacc,#d4a84a);font:13px/1.4 system-ui,sans-serif;color:#e8ecf3}
.sxpdf .sxbar b{color:var(--sxacc,#d4a84a);font-weight:600}.sxpdf .sxnav{display:flex;gap:.4rem;align-items:center}
.sxpdf input{width:5.2em;background:#06080d;color:#e8ecf3;border:1px solid #3a4558;border-radius:5px;padding:.25rem .35rem;font:13px system-ui}
.sxpdf a.sxb{display:inline-block;border:1px solid var(--sxacc,#d4a84a);color:var(--sxacc,#d4a84a);border-radius:999px;padding:.25rem .75rem;text-decoration:none;font:600 12px system-ui}
.sxpdf a.sxb.p{background:var(--sxacc,#d4a84a);color:#111}
.sxpdf .sxpages{height:min(80vh,900px);overflow:auto;padding:8px;-webkit-overflow-scrolling:touch}
.sxpdf .sxpg{margin:0 auto 8px;background:#fff;position:relative;box-shadow:0 2px 8px #0008;max-width:100%}
.sxpdf .sxpg canvas{display:block;width:100%;height:100%}.sxpdf .sxpg i{position:absolute;right:6px;bottom:3px;font:11px system-ui;color:#999;font-style:normal}
.sxpdf .sxmsg{color:#cfd6e2;padding:1.5rem;text-align:center;font:14px system-ui}
.sxpdf iframe{width:100%;height:min(80vh,900px);border:0;background:#fff;display:block}`;
document.head.appendChild(Object.assign(document.createElement('style'), { textContent: css }));
let pdfjsP;
const lib = () => pdfjsP ||= import(BASE + 'pdf.min.mjs').then(m => { m.GlobalWorkerOptions.workerSrc = BASE + 'pdf.worker.min.mjs'; return m; });

function shell(el) {
  const src = el.dataset.src, title = el.dataset.title || 'PDF', fn = src.split('/').pop();
  el.innerHTML = `<div class="sxbar"><b>${title}</b><span class="sxnav">Page <input type="number" min="1" value="1" aria-label="Go to page"> / <span class="sxn">…</span></span>
<span><a class="sxb p" href="${src}" target="_blank" rel="noopener">Open</a> <a class="sxb" href="${src}" download="${fn}">Download</a></span></div>
<div class="sxpages"><div class="sxmsg">Loading preview…</div></div>`;
  return { pages: el.querySelector('.sxpages'), n: el.querySelector('.sxn'), jump: el.querySelector('input') };
}
function fallback(el, ui, why) {
  console.warn('sxpdf fallback', why);
  ui.pages.innerHTML = `<iframe src="${el.dataset.src}#page=1&view=FitH" title="${el.dataset.title || 'PDF'}" loading="lazy"></iframe>
<div class="sxmsg">If the preview is blank on your device, use <b>Open</b> or <b>Download</b> above.</div>`;
  ui.n.textContent = '—';
}
async function rangeOK(url) {
  try { const r = await fetch(url, { headers: { Range: 'bytes=0-1023' } }); return r.status === 206; } catch (e) { return false; }
}
async function start(el) {
  const ui = shell(el), url = el.dataset.src, len = +el.dataset.len || 0;
  try {
    const pdfjs = await lib();
    let params;
    if (len && await rangeOK(url)) {
      class T extends pdfjs.PDFDataRangeTransport {
        requestDataRange(b, e) {
          fetch(url, { headers: { Range: `bytes=${b}-${e - 1}` } }).then(r => r.arrayBuffer())
            .then(buf => this.onDataRange(b, new Uint8Array(buf))).catch(err => console.warn('range', err));
        }
      }
      params = { range: new T(len, null), length: len, disableAutoFetch: true, rangeChunkSize: 262144 };
    } else if (!len || len < 15e6) params = { url };
    else return fallback(el, ui, 'no range support');
    const pdf = await pdfjs.getDocument(params).promise;
    const N = pdf.numPages; ui.n.textContent = N.toLocaleString(); ui.jump.max = N;
    const p1 = await pdf.getPage(1), v1 = p1.getViewport({ scale: 1 }), ratio = v1.height / v1.width;
    ui.pages.innerHTML = '';
    const frag = document.createDocumentFragment(), boxes = [];
    for (let i = 1; i <= N; i++) { const d = document.createElement('div'); d.className = 'sxpg'; d.dataset.p = i; d.innerHTML = `<i>${i}</i>`; boxes.push(d); frag.appendChild(d); }
    ui.pages.appendChild(frag);
    const size = () => { const w = Math.min(ui.pages.clientWidth - 16, 900); boxes.forEach(d => { d.style.width = w + 'px'; d.style.height = Math.round(w * ratio) + 'px'; }); };
    size(); addEventListener('resize', () => { size(); });
    const live = new Set();
    async function draw(d) {
      if (d.dataset.r) return; d.dataset.r = 1;
      try {
        const pg = await pdf.getPage(+d.dataset.p), w = d.clientWidth, dpr = Math.min(devicePixelRatio || 1, 2);
        const vp = pg.getViewport({ scale: w * dpr / pg.getViewport({ scale: 1 }).width });
        const c = document.createElement('canvas'); c.width = vp.width; c.height = vp.height;
        await pg.render({ canvasContext: c.getContext('2d'), viewport: vp }).promise;
        if (d.dataset.r) { d.prepend(c); live.add(d); }
        if (live.size > 24) { for (const o of live) { if (Math.abs(+o.dataset.p - +d.dataset.p) > 12) { o.querySelector('canvas')?.remove(); delete o.dataset.r; live.delete(o); } } }
      } catch (e) { delete d.dataset.r; console.warn('page', e); }
    }
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) draw(e.target); }), { root: ui.pages, rootMargin: '600px 0px' });
    boxes.forEach(d => io.observe(d));
    const cur = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting && document.activeElement !== ui.jump) ui.jump.value = e.target.dataset.p; }), { root: ui.pages, threshold: 0.5 });
    boxes.forEach(d => cur.observe(d));
    ui.jump.addEventListener('change', () => { const p = Math.max(1, Math.min(N, +ui.jump.value || 1)); ui.pages.scrollTop = boxes[p - 1].offsetTop - ui.pages.offsetTop; });
  } catch (e) { fallback(el, ui, e); }
}
const all = [...document.querySelectorAll('.sxpdf[data-src]')];
const lazy = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { lazy.unobserve(e.target); start(e.target); } }), { rootMargin: '400px 0px' });
all.forEach(el => lazy.observe(el));
