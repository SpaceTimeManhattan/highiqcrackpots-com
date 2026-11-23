// In-page preview of the verified 16-volume CCT/SEXA edition.
// Pages are the chunked reading copies on cctsexa.com (CORS *); PDFs are not hosted here.
const REL = "https://github.com/SpaceTimeManhattan/cctsexa-com/releases/download/verified-edition-2026-11-23/";
const CHUNK = "https://cctsexa.com/pdf/view/";
const COVER = "https://cctsexa.com/assets/covers/";
const READER = "https://cctsexa.com/";
const BOOKS = [
  {b:1,r:"I",t:"The Master Theorem of the CCT/SEXA Unified Field Framework",n:161,s:1,file:"CCT-SEXA_Book_01_I_print.pdf",cover:"book-01",c:[["v01_000.pdf",1,40],["v01_001.pdf",41,80],["v01_002.pdf",81,120],["v01_003.pdf",121,160],["v01_004.pdf",161,161]]},
  {b:2,r:"II",t:"The CCT/SEXA Unified Field Framework",n:179,s:162,file:"CCT-SEXA_Book_02_II_print.pdf",cover:"book-02",c:[["v02_000.pdf",1,40],["v02_001.pdf",41,80],["v02_002.pdf",81,120],["v02_003.pdf",121,160],["v02_004.pdf",161,179]]},
  {b:3,r:"III",t:"Gamma-Subthreshold Fold Logic",n:304,s:341,file:"CCT-SEXA_Book_03_III_print.pdf",cover:"book-03",c:[["v03_000.pdf",1,40],["v03_001.pdf",41,80],["v03_002.pdf",81,120],["v03_003.pdf",121,160],["v03_004.pdf",161,200],["v03_005.pdf",201,240],["v03_006.pdf",241,280],["v03_007.pdf",281,304]]},
  {b:4,r:"IV",t:"The Quaternionic Architecture of Recursive Computation",n:518,s:645,file:"CCT-SEXA_Book_04_IV_print.pdf",cover:"book-04",c:[["v04_000.pdf",1,40],["v04_001.pdf",41,80],["v04_002.pdf",81,120],["v04_003.pdf",121,160],["v04_004.pdf",161,200],["v04_005.pdf",201,240],["v04_006.pdf",241,280],["v04_007.pdf",281,320],["v04_008.pdf",321,360],["v04_009.pdf",361,400],["v04_010.pdf",401,440],["v04_011.pdf",441,480],["v04_012.pdf",481,518]]},
  {b:5,r:"V",t:"Spectral Architecture of Recursive Computation",n:227,s:1163,file:"CCT-SEXA_Book_05_V_print.pdf",cover:"book-05",c:[["v05_000.pdf",1,40],["v05_001.pdf",41,80],["v05_002.pdf",81,120],["v05_003.pdf",121,160],["v05_004.pdf",161,200],["v05_005.pdf",201,227]]},
  {b:6,r:"VI",t:"Higher-Order Recursive Operator Architectures",n:337,s:1390,file:"CCT-SEXA_Book_06_VI_print.pdf",cover:"book-06",c:[["v06_000.pdf",1,40],["v06_001.pdf",41,80],["v06_002.pdf",81,120],["v06_003.pdf",121,160],["v06_004.pdf",161,200],["v06_005.pdf",201,240],["v06_006.pdf",241,280],["v06_007.pdf",281,320],["v06_008.pdf",321,337]]},
  {b:7,r:"VII",t:"Recursive Computational Universes",n:537,s:1727,file:"CCT-SEXA_Book_07_VII_print.pdf",cover:"book-07",c:[["v07_000.pdf",1,40],["v07_001.pdf",41,80],["v07_002.pdf",81,120],["v07_003.pdf",121,160],["v07_004.pdf",161,200],["v07_005.pdf",201,240],["v07_006.pdf",241,280],["v07_007.pdf",281,320],["v07_008.pdf",321,360],["v07_009.pdf",361,400],["v07_010.pdf",401,440],["v07_011.pdf",441,480],["v07_012.pdf",481,520],["v07_013.pdf",521,537]]},
  {b:8,r:"VIII",t:"Recursive Meta-Cosmological Architectures",n:681,s:2264,file:"CCT-SEXA_Book_08_VIII_print.pdf",cover:"book-08",c:[["v08_000.pdf",1,40],["v08_001.pdf",41,80],["v08_002.pdf",81,120],["v08_003.pdf",121,160],["v08_004.pdf",161,200],["v08_005.pdf",201,240],["v08_006.pdf",241,280],["v08_007.pdf",281,320],["v08_008.pdf",321,360],["v08_009.pdf",361,400],["v08_010.pdf",401,440],["v08_011.pdf",441,480],["v08_012.pdf",481,520],["v08_013.pdf",521,560],["v08_014.pdf",561,600],["v08_015.pdf",601,640],["v08_016.pdf",641,680],["v08_017.pdf",681,681]]},
  {b:9,r:"IX-A",t:"Recursive Hyper-Cosmological Architectures",n:575,s:2945,file:"CCT-SEXA_Book_09A_IX-A_print.pdf",cover:"book-09a",c:[["v09a_000.pdf",1,40],["v09a_001.pdf",41,80],["v09a_002.pdf",81,120],["v09a_003.pdf",121,160],["v09a_004.pdf",161,200],["v09a_005.pdf",201,240],["v09a_006.pdf",241,280],["v09a_007.pdf",281,320],["v09a_008.pdf",321,360],["v09a_009.pdf",361,400],["v09a_010.pdf",401,440],["v09a_011.pdf",441,480],["v09a_012.pdf",481,520],["v09a_013.pdf",521,560],["v09a_014.pdf",561,575]]},
  {b:10,r:"IX-B",t:"Recursive Hyper-Cosmological Architectures",n:564,s:3520,file:"CCT-SEXA_Book_09B_IX-B_print.pdf",cover:"book-09b",c:[["v09b_000.pdf",1,40],["v09b_001.pdf",41,80],["v09b_002.pdf",81,120],["v09b_003.pdf",121,160],["v09b_004.pdf",161,200],["v09b_005.pdf",201,240],["v09b_006.pdf",241,280],["v09b_007.pdf",281,320],["v09b_008.pdf",321,360],["v09b_009.pdf",361,400],["v09b_010.pdf",401,440],["v09b_011.pdf",441,480],["v09b_012.pdf",481,520],["v09b_013.pdf",521,560],["v09b_014.pdf",561,564]]},
  {b:11,r:"X",t:"Recursive Civilizational Architectures",n:313,s:4084,file:"CCT-SEXA_Book_10_X_print.pdf",cover:"book-10",c:[["v10_000.pdf",1,40],["v10_001.pdf",41,80],["v10_002.pdf",81,120],["v10_003.pdf",121,160],["v10_004.pdf",161,200],["v10_005.pdf",201,240],["v10_006.pdf",241,280],["v10_007.pdf",281,313]]},
  {b:12,r:"XI",t:"Recursive Interstellar Architectures",n:333,s:4397,file:"CCT-SEXA_Book_11_XI_print.pdf",cover:"book-11",c:[["v11_000.pdf",1,40],["v11_001.pdf",41,80],["v11_002.pdf",81,120],["v11_003.pdf",121,160],["v11_004.pdf",161,200],["v11_005.pdf",201,240],["v11_006.pdf",241,280],["v11_007.pdf",281,320],["v11_008.pdf",321,333]]},
  {b:13,r:"XII",t:"Recursive Galactic Civilizations",n:304,s:4730,file:"CCT-SEXA_Book_12_XII_print.pdf",cover:"book-12",c:[["v12_000.pdf",1,40],["v12_001.pdf",41,80],["v12_002.pdf",81,120],["v12_003.pdf",121,160],["v12_004.pdf",161,200],["v12_005.pdf",201,240],["v12_006.pdf",241,280],["v12_007.pdf",281,304]]},
  {b:14,r:"XIII",t:"Recursive Intergalactic Civilizations",n:276,s:5034,file:"CCT-SEXA_Book_13_XIII_print.pdf",cover:"book-13",c:[["v13_000.pdf",1,40],["v13_001.pdf",41,80],["v13_002.pdf",81,120],["v13_003.pdf",121,160],["v13_004.pdf",161,200],["v13_005.pdf",201,240],["v13_006.pdf",241,276]]},
  {b:15,r:"XIV-A",t:"The Universal Recursive Closure",n:554,s:5310,file:"CCT-SEXA_Book_14A_XIV-A_print.pdf",cover:"book-14a",c:[["v14a_000.pdf",1,40],["v14a_001.pdf",41,80],["v14a_002.pdf",81,120],["v14a_003.pdf",121,160],["v14a_004.pdf",161,200],["v14a_005.pdf",201,240],["v14a_006.pdf",241,280],["v14a_007.pdf",281,320],["v14a_008.pdf",321,360],["v14a_009.pdf",361,400],["v14a_010.pdf",401,440],["v14a_011.pdf",441,480],["v14a_012.pdf",481,520],["v14a_013.pdf",521,554]]},
  {b:16,r:"XIV-B",t:"The Universal Recursive Closure",n:546,s:5864,file:"CCT-SEXA_Book_14B_XIV-B_print.pdf",cover:"book-14b",c:[["v14b_000.pdf",1,40],["v14b_001.pdf",41,80],["v14b_002.pdf",81,120],["v14b_003.pdf",121,160],["v14b_004.pdf",161,200],["v14b_005.pdf",201,240],["v14b_006.pdf",241,280],["v14b_007.pdf",281,320],["v14b_008.pdf",321,360],["v14b_009.pdf",361,400],["v14b_010.pdf",401,440],["v14b_011.pdf",441,480],["v14b_012.pdf",481,520],["v14b_013.pdf",521,546]]}
];

const css = `.uvp{border:1px solid var(--sxacc,var(--gold,#d4a84a));border-radius:12px;overflow:hidden;background:#0b0f17;margin:0 0 1.2rem;color:#e8ecf3;font:15px/1.5 system-ui,sans-serif}
.uvp *{box-sizing:border-box}
.uvp-bar{display:flex;flex-wrap:wrap;gap:.55rem;align-items:center;justify-content:space-between;padding:.65rem .85rem;background:#080b12;border-bottom:1px solid var(--sxacc,var(--gold,#d4a84a))}
.uvp-bar b{color:var(--sxacc,var(--gold,#d4a84a));font-weight:600}
.uvp-nav{display:flex;flex-wrap:wrap;gap:.4rem;align-items:center}
.uvp-bar select,.uvp-bar input{background:#06080d;color:#e8ecf3;border:1px solid #3a4558;border-radius:5px;padding:.28rem .4rem;font:13px system-ui}
.uvp-bar input{width:4.6em}
.uvp-bar a,.uvp-bar button{display:inline-block;border:1px solid var(--sxacc,var(--gold,#d4a84a));color:var(--sxacc,var(--gold,#d4a84a));background:transparent;border-radius:999px;padding:.28rem .8rem;text-decoration:none;font:600 12px system-ui;cursor:pointer}
.uvp-bar a.p,.uvp-bar button.p{background:var(--sxacc,var(--gold,#d4a84a));color:#111}
.uvp-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(118px,1fr));gap:.7rem;padding:.85rem}
.uvp-vol{display:flex;flex-direction:column;gap:.35rem;text-decoration:none;color:#e8ecf3;cursor:pointer;background:none;border:0;padding:0;text-align:left;font:inherit}
.uvp-vol img{width:100%;height:auto;border-radius:4px;border:1px solid #2a3550;background:#111;aspect-ratio:600/817;object-fit:cover;display:block}
.uvp-vol.on img{border-color:var(--sxacc,var(--gold,#d4a84a));box-shadow:0 0 0 1px var(--sxacc,var(--gold,#d4a84a))}
.uvp-vol span{font:600 12px/1.3 system-ui;color:var(--sxacc,var(--gold,#d4a84a))}
.uvp-vol small{font:12px/1.35 system-ui;color:#9fb0c8}
.uvp-stage{background:#1d222c;min-height:200px}
.uvp-stage canvas,.uvp-stage .uvp-ph{display:block;width:min(100%,900px);height:auto;margin:0 auto;background:#fff;box-shadow:0 2px 10px #0008}
.uvp-msg{padding:1.4rem;text-align:center;color:#cfd6e2}
.uvp-foot{display:flex;flex-wrap:wrap;gap:.6rem;justify-content:space-between;align-items:center;padding:.55rem .85rem;border-top:1px solid #24344f;font-size:.88rem;color:#9fb0c8}
.uvp-foot a{color:var(--sxacc,var(--gold,#d4a84a))}`;
document.head.appendChild(Object.assign(document.createElement('style'),{textContent:css}));

const BASE = new URL('../pdfjs/', import.meta.url).href;
let pdfjsP;
const lib = () => pdfjsP ||= import(BASE + 'pdf.min.mjs').then(m => { m.GlobalWorkerOptions.workerSrc = BASE + 'pdf.worker.min.mjs'; return m; });
const docs = new Map();
function getDoc(file){
  if (docs.has(file)) return docs.get(file);
  const pr = lib().then(m => m.getDocument({ url: CHUNK + file, disableAutoFetch: true, isEvalSupported: false }).promise);
  docs.set(file, pr);
  return pr;
}
function loc(book, p){
  p = Math.max(1, Math.min(book.n, p|0));
  for (const [f,a,b] of book.c) if (p>=a && p<=b) return [f, p-a+1];
  return [book.c[0][0], 1];
}

function mount(el){
  const gold = getComputedStyle(el).getPropertyValue('--sxacc') || getComputedStyle(el).getPropertyValue('--gold') || '#d4a84a';
  el.innerHTML = `<div class="uvp-bar"><b>Verified edition · 14 books in 16 volumes</b>
    <span class="uvp-nav">Volume <select class="uvp-sel" aria-label="Choose volume"></select>
    Page <input class="uvp-page" type="number" min="1" value="1" aria-label="Page in this volume"> / <span class="uvp-n">—</span>
    <a class="uvp-dl p" href="#" rel="noopener">Download this volume (PDF, free)</a>
    <a class="uvp-open" href="${READER}" target="_blank" rel="noopener">Full reader on cctsexa.com</a></span></div>
    <div class="uvp-grid" role="list"></div>
    <div class="uvp-stage"><div class="uvp-msg">Choose a volume, or start with Book I below.</div></div>
    <div class="uvp-foot"><span class="uvp-cite">Jered McClain · 6,215 dissertation pages (6,409 PDF pages) · CC BY-ND 4.0 · DOI <a href="https://doi.org/10.17605/OSF.IO/5AT2W" target="_blank" rel="noopener">10.17605/OSF.IO/5AT2W</a></span></div>`;
  const sel = el.querySelector('.uvp-sel'), inp = el.querySelector('.uvp-page'), nEl = el.querySelector('.uvp-n');
  const dl = el.querySelector('.uvp-dl'), open = el.querySelector('.uvp-open'), stage = el.querySelector('.uvp-stage'), grid = el.querySelector('.uvp-grid');
  BOOKS.forEach((b,i) => {
    const o = document.createElement('option'); o.value = i; o.textContent = `Book ${b.r} · ${b.t}`; sel.appendChild(o);
    const btn = document.createElement('button'); btn.type='button'; btn.className='uvp-vol'; btn.setAttribute('role','listitem');
    btn.innerHTML = `<img src="${COVER}${b.cover}-300.webp" srcset="${COVER}${b.cover}-300.webp 300w, ${COVER}${b.cover}-600.webp 600w" sizes="118px" width="300" height="408" alt="Book ${b.r}, hardcover board cover" loading="${i<4?'eager':'lazy'}" decoding="async"><span>Book ${b.r}</span><small>${b.t}</small>`;
    btn.addEventListener('click', () => show(i,1));
    grid.appendChild(btn);
  });
  let cur = 0, page = 1, token = 0;
  function show(i, p){
    cur = i; const b = BOOKS[i]; page = Math.max(1, Math.min(b.n, p|0));
    sel.value = i; inp.max = b.n; inp.value = page; nEl.textContent = b.n.toLocaleString();
    dl.href = REL + b.file; dl.setAttribute('download', b.file);
    open.href = READER + '#p=' + (b.s + page - 1);
    grid.querySelectorAll('.uvp-vol').forEach((x,j)=>x.classList.toggle('on', j===i));
    draw();
  }
  async function draw(){
    const b = BOOKS[cur], my = ++token, [file, local] = loc(b, page);
    stage.innerHTML = `<div class="uvp-msg">Loading Book ${b.r}, page ${page}…</div>`;
    try{
      const doc = await getDoc(file);
      if (my !== token) return;
      const pg = await doc.getPage(local);
      const cssW = Math.min(stage.clientWidth || 700, 900);
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const vp1 = pg.getViewport({scale:1});
      const vp = pg.getViewport({scale: cssW * dpr / vp1.width});
      const c = document.createElement('canvas');
      c.width = Math.floor(vp.width); c.height = Math.floor(vp.height);
      c.style.width = '100%'; c.style.maxWidth = '900px';
      c.setAttribute('aria-label', `Book ${b.r}, page ${page} of the verified edition`);
      await pg.render({canvasContext:c.getContext('2d',{alpha:false}), viewport:vp}).promise;
      if (my !== token) return;
      stage.innerHTML = ''; stage.appendChild(c); pg.cleanup();
    }catch(e){
      if (my !== token) return;
      const href = READER + '#p=' + (b.s + page - 1);
      stage.innerHTML = `<div class="uvp-msg">The in-page preview could not load this page. <a href="${href}" target="_blank" rel="noopener">Open it on cctsexa.com</a> or use <a href="${REL + b.file}" rel="noopener">Download this volume (PDF, free)</a>.</div>`;
      console.warn('uvp', e);
    }
  }
  sel.addEventListener('change', () => show(+sel.value, 1));
  inp.addEventListener('change', () => show(cur, +inp.value || 1));
  show(0, 1);
}

document.querySelectorAll('.uvp').forEach(mount);
