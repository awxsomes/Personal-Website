/* ---------------------------------------------------------------
   alex chen · portfolio
   Edit PROJECTS / EXPERIENCE / MEMES below to update the site.
   Projects float in the order listed (similar ones sit near
   each other). Each project's two `visuals` float as one
   tight cluster above its name; the
   overlay shows all of them. A visual is either a real image
   { img, ar } or a drawn card { svg } from ART below.
---------------------------------------------------------------- */

const SETS = {
  personal:  { label: "personal",  c: "var(--blue)",   l: "var(--blue-l)" },
  research:  { label: "research",  c: "var(--sage)",   l: "var(--sage-l)" },
  hackathon: { label: "hackathon", c: "var(--pink)",   l: "var(--pink-l)" },
  apps:      { label: "app",       c: "var(--yellow)", l: "var(--yellow-l)" },
};

const IMG = "assets/img/";

const PROJECTS = [
  {
    id: "ai-trader", name: "AI Trader", sets: ["personal"],
    when: "Personal project · Jul 2026 – present",
    blurb: "Can a neural network find tiny, predictable wobbles in the stock market? I replicated a deep-learning statistical arbitrage paper to find out, then let it trade (fake) money every day.",
    bullets: [
      "CNN + Transformer trained on PCA factor residuals of ~500 S&P 500 stocks, optimizing Sharpe ratio directly",
      "Out-of-sample Sharpe of 2.8 (2002–2026) before costs",
      "Building trading costs into the objective took after-cost Sharpe from −3.8 to 0.75 and cut daily turnover from 110% to 9%",
      "Runs automatically every day on Alpaca paper trading",
    ],
    tags: ["PyTorch", "Transformers", "quant"],
    links: [["GitHub", "https://github.com/awxsomes/AI-Trader"]],
    visuals: [
      { img: "trader-cumret.webp", ar: 760 / 428, alt: "Cumulative returns: CNN+Transformer vs. baseline models, 2003–2026" },
      { img: "trader-net.webp", ar: 760 / 494, alt: "Growth of $1 net of trading costs for cost-trained models" },
    ],
  },
  {
    id: "cat-detector", name: "Cat Image Detector", sets: ["personal"],
    when: "Personal project · Jul 2026 – present",
    blurb: "Make a face at your webcam and the matching cat meme pops up. Extremely important research.",
    bullets: [
      "0.91 validation macro-accuracy on six expression + gesture classes (4,789 frames, 34 sessions)",
      "PyTorch MLP on 117 features from MediaPipe face blendshapes and hand landmarks",
      "Sliding-window voting and a minimum-hold gate keep the live predictions from flickering",
    ],
    tags: ["PyTorch", "MediaPipe", "computer vision"],
    links: [
      ["Watch the demo", "https://www.youtube.com/watch?v=2jbFuosY0do"],
      ["GitHub", "https://github.com/awxsomes/Cat-Image-Detector"],
    ],
    visuals: [
      { img: "cat-demo.webp", ar: 480 / 270, alt: "Demo: webcam on the left, matching cat on the right" },
      { img: "cat-shocked.webp", ar: 335 / 597, alt: "Shocked cat (the 'surprised' class)" },
    ],
  },
  {
    id: "urf", name: "Unbiased Random Forest", sets: ["research"],
    when: "Research · University of Maryland · 2025 – present",
    blurb: "Regression models quietly shrink their predictions toward the average. My constrained random forest fixes that, and it became my first first-author paper.",
    bullets: [
      "Closed-form out-of-bag correction to fitted leaf values",
      "Test calibration slope went from 0.21–0.34 to 0.87–0.90 on two real biological-age datasets",
      "First author, IEEE BigData 2026",
    ],
    tags: ["random forests", "calibration", "Python"],
    links: [["GitHub", "https://github.com/awxsomes/Unbiased-Random-Forests"]],
    visuals: [{ svg: "calib" }, { svg: "tree" }],
  },
  {
    id: "tga", name: "TGA", sets: ["research"],
    when: "Research · Johns Hopkins APL · Jun 2024 – Jun 2025",
    blurb: "A genetic algorithm that fits outgassing kinetics for NASA's Dragonfly mission to Titan.",
    bullets: [
      "Multi-stage GA jointly fits all three Arrhenius parameters to TGA/QCM data",
      "22.4× more accurate parameter extraction than sequential fitting",
      "Vectorized + parallelized the solver: 590 s → 300 s, then another 2× faster",
      "Presented at AIAA YPSE 2025",
    ],
    tags: ["MATLAB", "genetic algorithms", "NASA"],
    links: [["GitHub", "https://github.com/awxsomes/TGA_GA"]],
    visuals: [{ svg: "titan" }, { svg: "mass" }],
  },
  {
    id: "skin", name: "Skin Analysis", sets: ["hackathon"],
    when: "Bitcamp · Apr 2026",
    blurb: "An acne classifier that runs entirely in your browser, so your selfies never leave your phone.",
    bullets: [
      "14 MB ONNX model running client-side with ONNX Runtime Web (WebAssembly), no server or database",
      "GPU → CPU MediaPipe fallback, code splitting, and preloading for low-end devices",
      "Majority vote over 20 predictions across seven guided poses, with head-angle and low-light checks",
    ],
    tags: ["ONNX", "React", "MediaPipe"],
    links: [
      ["Try it", "https://kcyle.github.io/skin-analysis-app/"],
      ["GitHub", "https://github.com/Kcyle/skin-analysis-app"],
    ],
    visuals: [
      { img: "skin-home.jpg", ar: 1410 / 1154, alt: "Skin Analysis: 'Know your skin.' with upload, camera and live scan" },
      { svg: "pose", ar: 3 / 4 },
    ],
  },
  {
    id: "immigrai", name: "ImmigrAI", sets: ["hackathon", "apps"],
    when: "AISB Hackathon · Nov 2026",
    blurb: "An “Angie's List” of AI tools for immigrant-owned small businesses. Describe what you need in any language and get affordable tools with verified ratings.",
    bullets: [
      "Next.js / TypeScript app deployed on Vercel, translated into multiple languages",
      "LLM web-research pipeline only accepts a rating, price, or language if the cited page actually says so",
      "Verified a 56-tool catalog and caught reviews of similarly named products",
    ],
    tags: ["Next.js", "TypeScript", "LLMs"],
    links: [
      ["Live site", "https://immigri-ai.vercel.app"],
      ["GitHub", "https://github.com/awxsomes/ImmigrAI"],
    ],
    visuals: [
      { img: "immigrai-home.webp", ar: 900 / 492, alt: "ImmigrAI home: 'Find the right AI tool for your business.'" },
      { svg: "tools56" },
    ],
  },
  {
    id: "oars", name: "OARS", sets: ["apps"],
    when: "UMD App Dev Club · Sep 2026 – present",
    blurb: "A UMD App Dev Club project for the Agroecology Lab: a mapping app where the lab draws land parcels on a map and tracks goals and practices for each one.",
    bullets: [
      "Interactive Leaflet map that saves parcel boundaries as PostGIS polygons",
      "Turned the lab's ERD into the schema for parcels, goals, and practices on AWS RDS",
      "FastAPI REST endpoints connecting the React frontend to the database",
    ],
    tags: ["UMD App Dev Club", "FastAPI", "PostGIS", "React", "AWS"],
    links: [["Repo", "https://git.appdevclub.com/rparikh6/Agroecology-Lab-OARS-Project"]],
    visuals: [{ svg: "club" }, { svg: "api" }],
  },
  {
    id: "loo", name: "Loo", sets: ["apps"], wip: true,
    when: "App · in progress",
    blurb: "An app I'm building right now. More soon!",
    bullets: [],
    tags: [],
    links: [],
    visuals: [{ svg: "wipPhone", ar: 3 / 4 }, { svg: "soon" }],
  },
];

const EXPERIENCE = [
  {
    org: "UMD App Dev Club · Agroecology Lab project",
    role: "Backend Engineer",
    date: "Sep 2026 – present",
    logo: "adc.svg", fill: true,
    bullets: [
      "Building an interactive Leaflet map that saves land-parcel boundaries as PostGIS polygons in a shared AWS RDS PostgreSQL database",
      "Developing FastAPI REST endpoints connecting the React frontend to the database",
    ],
  },
  {
    org: "University of Maryland",
    role: "Research Intern · neural networks",
    date: "Jun 2025 – present",
    logo: "umd.png",
    bullets: [
      "Constrained neural network in NumPy/CuPy with hand-written, CUDA-accelerated backprop: test RMSE down 47% (3.90 → 2.05), beating XGBoost and random forest",
      "Calibration slope from 0.40 to 0.97 across 100 seeded replications via augmented-Lagrangian dual ascent",
      "Constrained random forest with a closed-form out-of-bag leaf correction (IEEE BigData 2026)",
    ],
  },
  {
    org: "Johns Hopkins University Applied Physics Laboratory",
    role: "Research Intern",
    date: "Jun 2024 – Jun 2025",
    logo: "apl.png",
    bullets: [
      "Multi-stage genetic algorithm in MATLAB fitting Arrhenius kinetics to outgassing data for NASA's Dragonfly mission: 22.4× more accurate",
      "Cut solver runtime from 590 s to 300 s, plus another 2× speedup, by vectorizing and parallelizing",
    ],
  },
  {
    org: "Hack the Colosseum",
    role: "Co-Organizer, Outreach Lead & ML Workshop Lead",
    date: "Jul 2024 – Oct 2025",
    logo: "htc.png", fill: true,
    bullets: [],
  },
];

/* [file, width, height, caption] */
const MEMES = [
  ["01.webp", 560, 548, "with twin"],
  ["02.webp", 560, 612, "fine ignore me then"],
  ["03.webp", 560, 512, "i need a break"],
  ["04.webp", 560, 622, "goobie snoobert"],
  ["05.webp", 560, 685, ":D"],
  ["06.webp", 560, 775, "am i swag"],
  ["07.webp", 560, 450, "YIPPEE & WAHOO"],
  ["08.webp", 225, 225, "我emo了"],
  ["09.webp", 560, 452, "?"],
  ["10.webp", 560, 380, "the chicken brothers"],
  ["11.webp", 208, 242, "???"],
  ["12.webp", 560, 556, "..."],
  ["13.webp", 560, 396, "mi mi mi"],
  ["14.webp", 560, 729, ":D (again)"],
  ["15.webp", 560, 427, "sometimes i think"],
];

/* ---------------- drawn cards (viewBox 160×120 unless noted) ---------------- */
const F = `font-family="Inter, sans-serif"`;
const ART = {
  calib: `<svg viewBox="0 0 160 120"><rect width="160" height="120" fill="#fbfaf6"/>
    <text x="12" y="16" ${F} font-size="8" fill="#5d5a53">predicted vs. actual</text>
    <path d="M20 104H150M20 104V22" stroke="#c9c3b6"/>
    <path d="M20 104L140 26" stroke="#aaa" stroke-dasharray="3 3"/>
    ${[[30,96],[38,92],[47,84],[55,82],[62,74],[71,72],[80,64],[86,60],[95,55],[104,48],[112,44],[121,38],[130,33],[136,28]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="2" fill="#5f93b8" opacity=".55"/>`).join("")}
    <path d="M20 80L140 56" stroke="#c9789a" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M20 104L140 26" stroke="#2f6fe0" stroke-width="2.5" stroke-linecap="round"/>
    <text x="98" y="74" ${F} font-size="8" fill="#b0567c">before 0.21</text>
    <text x="66" y="44" ${F} font-size="8" fill="#2f6fe0">after 1.00</text></svg>`,
  tree: `<svg viewBox="0 0 160 120"><rect width="160" height="120" fill="#eef5f0"/>
    <path d="M80 26L44 58M80 26L116 58M44 58L26 92M44 58L62 92M116 58L98 92M116 58L134 92" stroke="#6f9a87" stroke-width="2"/>
    <circle cx="80" cy="24" r="9" fill="#6f9a87"/><circle cx="44" cy="58" r="7" fill="#8fb5a3"/><circle cx="116" cy="58" r="7" fill="#8fb5a3"/>
    ${[26,62,98,134].map(x=>`<rect x="${x-9}" y="86" width="18" height="12" rx="3" fill="#fff" stroke="#6f9a87"/><text x="${x}" y="108" ${F} font-size="7" text-anchor="middle" fill="#2f6fe0">+δ</text>`).join("")}
    <text x="80" y="10" ${F} font-size="7.5" text-anchor="middle" fill="#4b6e5f">out-of-bag leaf correction</text></svg>`,
  titan: `<svg viewBox="0 0 160 120"><defs><radialGradient id="tg" cx=".4" cy=".35"><stop offset="0" stop-color="#f3c37a"/><stop offset="1" stop-color="#b8692a"/></radialGradient></defs>
    <rect width="160" height="120" fill="#1c1a2b"/>
    ${[[14,14],[40,30],[150,12],[130,40],[20,90],[60,12],[150,100],[100,20]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r=".9" fill="#fff" opacity=".8"/>`).join("")}
    <circle cx="104" cy="78" r="44" fill="#f3c37a" opacity=".18"/><circle cx="104" cy="78" r="36" fill="url(#tg)"/>
    <g transform="translate(42 46) rotate(-8)" stroke="#e8e6f0" stroke-width="1.6" fill="none"><rect x="-10" y="-4" width="20" height="8" rx="2" fill="#e8e6f0"/>
    <path d="M-10 -4L-18 -10M10 -4L18 -10M-10 4L-18 10M10 4L18 10"/><path d="M-24 -10H-12M12 -10H24M-24 10H-12M12 10H24" stroke-width="1.2"/></g>
    <text x="10" y="112" ${F} font-size="8" fill="#e8e6f0">Dragonfly → Titan</text></svg>`,
  /* two panels: mass loss on top, its derivative dm/dt below (shared temperature axis) */
  mass: (() => {
    const sig = (x) => 1 / (1 + Math.exp(-(x - 85) / 9));
    const m = (x) => 14 + 36 * sig(x);                                  /* top panel, y 14–50 */
    const d = (x) => 106 - 34 * 4 * sig(x) * (1 - sig(x));               /* bottom panel peak, y 72–106 */
    const line = (f) => Array.from({ length: 60 }, (_, i) => { const x = 22 + i * 2.1; return (i ? "L" : "M") + x.toFixed(1) + " " + f(x).toFixed(1); }).join("");
    const dots = (f, amp) => Array.from({ length: 16 }, (_, i) => { const x = 24 + i * 8; return `<circle cx="${x}" cy="${(f(x) + ((i * 37) % 7 - 3) * amp).toFixed(1)}" r="1.8" fill="#5d5a53" opacity=".5"/>`; }).join("");
    return `<svg viewBox="0 0 160 120"><rect width="160" height="120" fill="#fbfaf6"/>
    <path d="M20 54H150M20 54V8M20 110H150M20 110V64" stroke="#c9c3b6"/>
    <text x="24" y="12" ${F} font-size="7" fill="#5d5a53">mass</text>
    <text x="24" y="70" ${F} font-size="7" fill="#5d5a53">dm/dt</text>
    ${dots(m, 0.7)}<path d="${line(m)}" stroke="#c9789a" stroke-width="2.2" fill="none"/>
    ${dots(d, 0.7)}<path d="${line(d)}" stroke="#2f6fe0" stroke-width="2.2" fill="none"/>
    <text x="108" y="30" ${F} font-size="7" fill="#b0567c">GA fit</text>
    <text x="104" y="86" ${F} font-size="7" fill="#2f6fe0">residual ↓22×</text>
    <text x="150" y="118" ${F} font-size="6" text-anchor="end" fill="#8d897f">temperature →</text></svg>`;
  })(),
  pose: `<svg viewBox="0 0 120 160"><rect width="120" height="160" fill="#f7f3ea"/>
    <rect x="22" y="8" width="76" height="144" rx="12" fill="#fff" stroke="#1d1c1a" stroke-width="2"/>
    <ellipse cx="60" cy="68" rx="22" ry="30" fill="none" stroke="#d9b44a" stroke-width="2" stroke-dasharray="4 3"/>
    <path d="M48 58q4-3 8 0M64 58q4-3 8 0M54 80q6 4 12 0" stroke="#bbb" stroke-width="1.6" fill="none"/>
    ${Array.from({length:7},(_,i)=>`<circle cx="${42+i*6}" cy="112" r="2.2" fill="${i<3?"#d9b44a":"#ddd"}"/>`).join("")}
    <text x="60" y="128" ${F} font-size="6.5" text-anchor="middle" fill="#5d5a53">turn left a little</text></svg>`,
  tools56: `<svg viewBox="0 0 160 120"><rect width="160" height="120" fill="#fff"/>
    <text x="16" y="50" font-family="Newsreader, serif" font-size="38" fill="#1d1c1a">56</text>
    <text x="16" y="66" ${F} font-size="8.5" fill="#5d5a53">AI tools, every claim</text>
    <text x="16" y="78" ${F} font-size="8.5" fill="#5d5a53">checked against its source</text>
    ${[0,1,2].map(i=>`<rect x="16" y="${88+i*0}" width="0" height="0"/>`).join("")}
    ${["rating","price","languages"].map((t,i)=>`<g transform="translate(${16+i*46} 90)"><rect width="42" height="16" rx="8" fill="#d5e6dc"/><text x="21" y="11" ${F} font-size="7" text-anchor="middle" fill="#3f5e51">✓ ${t}</text></g>`).join("")}</svg>`,
  api: `<svg viewBox="0 0 160 120"><rect width="160" height="120" fill="#1e1f24"/>
    ${[["POST","/parcels","#7ee0a1"],["GET","/parcels/{id}","#7fb2ff"],["GET","/goals","#7fb2ff"],["PUT","/practices/{id}","#f6c96b"],["DELETE","/parcels/{id}","#ff8f8f"]].map(([m,p,c],i)=>`<text x="12" y="${24+i*18}" font-family="ui-monospace, Consolas, monospace" font-size="8.5" fill="${c}">${m}</text><text x="52" y="${24+i*18}" font-family="ui-monospace, Consolas, monospace" font-size="8.5" fill="#e6e6e6">${p.replace(/[{}]/g,m=>m==="{"?"&#123;":"&#125;")}</text>`).join("")}
    <text x="12" y="112" font-family="ui-monospace, Consolas, monospace" font-size="7" fill="#777"># FastAPI · PostGIS</text></svg>`,
  club: `<svg viewBox="0 0 160 120"><rect width="160" height="120" fill="#dbe7fd"/>
    <image href="assets/logos/adc.svg" x="14" y="36" width="44" height="44"/>
    <text x="64" y="63" ${F} font-size="12.5" font-weight="600" fill="#1f2a44">App Dev Club</text>
    <text x="80" y="106" ${F} font-size="8" text-anchor="middle" fill="#3d4c6e">UMD · Agroecology Lab</text></svg>`,
  wipPhone: `<svg viewBox="0 0 120 160"><rect width="120" height="160" fill="#f7f3ea"/>
    <rect x="22" y="8" width="76" height="144" rx="12" fill="#fff" stroke="#1d1c1a" stroke-width="2"/>
    ${[[32,26,40],[32,38,56],[32,58,56],[32,70,44],[32,90,56],[32,102,30]].map(([x,y,w])=>`<rect x="${x}" y="${y}" width="${w}" height="7" rx="3.5" fill="#ebe7de"/>`).join("")}
    <g transform="translate(60 126) rotate(-8)"><rect x="-50" y="-9" width="100" height="18" fill="#d9b44a"/>
    ${Array.from({length:9},(_,i)=>`<path d="M${-50+i*12} 9l8-18h6l-8 18z" fill="#1d1c1a" opacity=".85"/>`).join("")}
    <rect x="-30" y="-6" width="60" height="12" fill="#f6e7ae"/><text x="0" y="3" ${F} font-size="7" font-weight="600" text-anchor="middle" fill="#1d1c1a">IN PROGRESS</text></g></svg>`,
  soon: `<svg viewBox="0 0 160 120"><rect width="160" height="120" fill="#f6e7ae"/>
    <text x="80" y="58" font-family="Caveat, cursive" font-size="28" font-weight="700" text-anchor="middle" fill="#1d1c1a">coming soon</text>
    <text x="80" y="84" font-family="Caveat, cursive" font-size="22" text-anchor="middle" fill="#5d5a53">(i promise) :)</text></svg>`,
};

/* ---------------- helpers ---------------- */
const $ = (s, el = document) => el.querySelector(s);
const esc = (s) => String(s).replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

/* deterministic "random" so piles look the same every visit */
const rand = (seed) => { const x = Math.sin(seed * 999.7) * 43758.5453; return x - Math.floor(x); };

function arOf(v) { return v.ar || (v.svg && ART[v.svg].includes('viewBox="0 0 120 160"') ? 3 / 4 : 4 / 3); }

/* an image wrapped in a shimmering skeleton that fades in on load */
function visualHTML(v, cls = "media") {
  const ar = arOf(v);
  if (v.svg) return `<div class="${cls}" style="--ar:${ar}">${ART[v.svg]}</div>`;
  return `<div class="${cls} ph" style="--ar:${ar}"><img src="${IMG + v.img}" alt="${esc(v.alt || "")}" loading="lazy" decoding="async" /></div>`;
}

/* mark skeletons as loaded once their image arrives (works for cached images too) */
function hydrateSkeletons(root) {
  root.querySelectorAll(".ph img").forEach((img) => {
    const done = () => img.parentElement.classList.add("loaded");
    if (img.complete && img.naturalWidth) done();
    else { img.addEventListener("load", done, { once: true }); img.addEventListener("error", done, { once: true }); }
  });
}

/* ---------------- project piles ---------------- */
/* two-image layouts: [left%, top%, width%] for the back and front image.
   Tall (portrait) images ignore top/width and fill the cluster's height instead. */
const SLOTS = [
  [[0, 0, 62], [40, 26, 58]],
  [[38, 0, 62], [0, 24, 58]],
  [[2, 4, 60], [42, 20, 56]],
];
const STACK_AR = 300 / 200; /* keep in sync with .pile-stack aspect-ratio */
/* ---- the canvas: the note sits in the middle as the "hidden layer", research +
   personal projects feed in from one side (inputs) and the things I built come
   out the other (outputs). Wires follow anything you drag. ---- */
const canvas = $("#canvas");
const world = $("#world");
const wires = $("#wires");
const note = $("#note");
const piles = {};
const INPUTS = ["urf", "tga", "ai-trader", "cat-detector"];
const OUTPUTS = ["immigrai", "skin", "oars", "loo"];
let pileHeld = false; /* a touch-held pile pauses canvas panning */

PROJECTS.forEach((p, i) => {
  const b = document.createElement("button");
  b.type = "button";
  b.className = "pile";
  b.setAttribute("aria-label", `${p.name}: press enter to open, arrow keys to move`);

  const slots = SLOTS[i % SLOTS.length];
  const bits = p.visuals.slice(0, 2).map((v, k) => {
    let [l, t, w] = slots[k];
    const ar = arOf(v);
    if (ar < 1) { t = 0; w = Math.min(w, ar * 96 / STACK_AR); if (l + w > 100) l = 100 - w; }
    const seed = i * 7 + k;
    return `<div class="bit" style="left:${l}%;top:${t}%;width:${w.toFixed(1)}%;z-index:${k + 1};` +
      `--r:${((rand(seed + 61) - 0.5) * 10).toFixed(1)}deg;--d:${(-rand(seed + 71) * 7).toFixed(2)}s;` +
      `--dur:${(5.5 + rand(seed + 81) * 3.5).toFixed(2)}s;--amp:${(-4 - rand(seed + 91) * 5).toFixed(1)}px">${visualHTML(v)}</div>`;
  }).join("");

  b.innerHTML = `<div class="pile-stack" aria-hidden="true">${bits}</div>
    <span class="pile-name">${esc(p.name)}${p.wip ? ' <span class="wip">wip</span>' : ""}</span>`;
  makeDraggable(b, world, () => openProject(p.id), { holdOnTouch: true, onMove: drawWires });
  world.appendChild(b);
  piles[p.id] = b;
});
makeDraggable(note, world, null, { holdOnTouch: true, onMove: drawWires });
hydrateSkeletons(document);

/* ---- wires ---- */
const SVGNS = "http://www.w3.org/2000/svg";
const edges = [];
function addEdge(from, to, i) {
  const base = document.createElementNS(SVGNS, "path"); base.setAttribute("class", "wire");
  const flow = document.createElementNS(SVGNS, "path"); flow.setAttribute("class", "flow");
  flow.style.animationDelay = (-rand(i + 101) * 1.8).toFixed(2) + "s";
  const n1 = document.createElementNS(SVGNS, "circle"); n1.setAttribute("class", "neuron"); n1.setAttribute("r", "5");
  const n2 = document.createElementNS(SVGNS, "circle"); n2.setAttribute("class", "neuron"); n2.setAttribute("r", "4");
  wires.append(base, flow, n1, n2);
  edges.push({ from, to, i, base, flow, n1, n2 });
}
INPUTS.forEach((id, i) => addEdge(piles[id], note, i));
OUTPUTS.forEach((id, i) => addEdge(note, piles[id], i));

let vertical = false; /* narrow screens: inputs above the note, outputs below */
const VIEW_TOP = 44, VIEW_BOTTOM = 64; /* hint bar + folder tabs overlap the canvas */
function box(el) { return { x: el.offsetLeft, y: el.offsetTop, w: el.offsetWidth, h: el.offsetHeight }; }
function drawWires() {
  edges.forEach(({ from, to, i, base, flow, n1, n2 }) => {
    const a = box(from), b = box(to);
    const spread = (i - 1.5) * (vertical ? 46 : 34); /* fan the wires along the note's edge */
    let x1, y1, x2, y2, d;
    if (!vertical) {
      /* attach on whichever side faces the other node, so moved piles still wire up sensibly */
      const ltr = a.x + a.w / 2 < b.x + b.w / 2;
      x1 = ltr ? a.x + a.w : a.x; y1 = from === note ? a.y + a.h / 2 + spread : a.y + a.h * 0.42;
      x2 = ltr ? b.x : b.x + b.w; y2 = to === note ? b.y + b.h / 2 + spread : b.y + b.h * 0.42;
      const c = Math.max(60, Math.abs(x2 - x1) * 0.5) * (ltr ? 1 : -1);
      d = `M${x1} ${y1} C${x1 + c} ${y1} ${x2 - c} ${y2} ${x2} ${y2}`;
    } else {
      const ttb = a.y + a.h / 2 < b.y + b.h / 2;
      x1 = a.x + a.w / 2 + (from === note ? spread : 0); y1 = ttb ? a.y + a.h : a.y;
      x2 = b.x + b.w / 2 + (to === note ? spread : 0); y2 = ttb ? b.y : b.y + b.h;
      const c = Math.max(40, Math.abs(y2 - y1) * 0.5) * (ttb ? 1 : -1);
      d = `M${x1} ${y1} C${x1} ${y1 + c} ${x2} ${y2 - c} ${x2} ${y2}`;
    }
    base.setAttribute("d", d); flow.setAttribute("d", d);
    n1.setAttribute("cx", x1); n1.setAttribute("cy", y1);
    n2.setAttribute("cx", x2); n2.setAttribute("cy", y2);
  });
}

/* ---- layout ---- */
let worldW = 0, worldH = 0, laidOutFor = "";
function layoutWorld(force = false) {
  const vw = canvas.clientWidth;
  if (!vw) return;
  const key = vw < 900 ? "v" + vw : "h";
  if (!force && key === laidOutFor) return;
  laidOutFor = key;
  vertical = vw < 900;
  note.classList.toggle("compact", vertical);

  const vh = canvas.clientHeight;
  const visH = vh - VIEW_TOP - VIEW_BOTTOM; /* the part not covered by the hint bar and tabs */
  const p0 = piles[INPUTS[0]];
  const pw = p0.offsetWidth, ph = p0.offsetHeight;
  const nw = note.offsetWidth, nh = note.offsetHeight;
  const put = (el, x, y) => { el.style.left = x + "px"; el.style.top = y + "px"; el.style.zIndex = ""; };
  const lIn = $("#lbl-in"), lHid = $("#lbl-hidden"), lOut = $("#lbl-out");

  if (!vertical) {
    /* wide enough gaps for the wires, narrow enough that both columns are in the first view */
    const gapX = Math.max(70, Math.min(170, (vw - 40 - 2 * pw - nw) / 2)), vgap = 22, pad = 140;
    const colH = 4 * ph + 3 * vgap;
    worldW = 2 * pw + 2 * gapX + nw + 2 * pad;
    worldH = Math.max(colH, nh) + 2 * pad;
    const cx = worldW / 2, cy = worldH / 2;
    put(note, cx - nw / 2, cy - nh / 2);
    const top = cy - colH / 2;
    INPUTS.forEach((id, i) => {
      const bow = Math.abs(i - 1.5) * 26; /* slight curve, like a hand-drawn layer */
      put(piles[id], pad - bow + 26 + (rand(i + 41) - 0.5) * 16, top + i * (ph + vgap));
    });
    OUTPUTS.forEach((id, i) => {
      const bow = Math.abs(i - 1.5) * 26;
      put(piles[id], worldW - pad - pw + bow - 26 + (rand(i + 51) - 0.5) * 16, top + i * (ph + vgap));
    });
    const ly = top - 56;
    Object.assign(lIn.style, { left: pad + pw / 2 + "px", top: ly + "px" });
    Object.assign(lHid.style, { left: cx + "px", top: cy - nh / 2 - 56 + "px" });
    Object.assign(lOut.style, { left: worldW - pad - pw / 2 + "px", top: ly + "px" });
  } else {
    /* size the gaps so the first row above and below the note fit on screen */
    const gx = 14, gy = 18, padTop = 120, padBot = 120;
    const gapY = Math.max(34, Math.min(110, (visH - nh - 2 * ph) / 2));
    worldW = Math.max(vw, 2 * pw + 3 * gx);
    const cx = worldW / 2;
    const gridH = 2 * ph + gy;
    const colX = [cx - pw - gx / 2, cx + gx / 2];
    INPUTS.forEach((id, i) => put(piles[id], colX[i % 2], padTop + Math.floor(i / 2) * (ph + gy)));
    const noteY = padTop + gridH + gapY;
    put(note, cx - nw / 2, noteY);
    const outY = noteY + nh + gapY;
    OUTPUTS.forEach((id, i) => put(piles[id], colX[i % 2], outY + Math.floor(i / 2) * (ph + gy)));
    worldH = outY + gridH + padBot;
    Object.assign(lIn.style, { left: cx + "px", top: padTop - 44 + "px" });
    Object.assign(lHid.style, { left: cx + "px", top: noteY - gapY / 2 - 11 + "px" });
    Object.assign(lOut.style, { left: cx + "px", top: noteY + nh + gapY / 2 - 11 + "px" });
  }
  world.style.width = worldW + "px"; world.style.height = worldH + "px";
  wires.setAttribute("width", worldW); wires.setAttribute("height", worldH);
  drawWires();
  recenter(false);
}

/* ---- panning ---- */
let px = 0, py = 0;
function setPan(x, y) {
  const vw = canvas.clientWidth, vh = canvas.clientHeight, slack = 160;
  px = worldW <= vw ? (vw - worldW) / 2 : Math.min(slack, Math.max(vw - worldW - slack, x));
  py = worldH <= vh ? (vh - worldH) / 2 : Math.min(slack, Math.max(vh - worldH - slack, y));
  world.style.setProperty("--px", px + "px");
  world.style.setProperty("--py", py + "px");
}
function recenter(glide = true) {
  const vw = canvas.clientWidth, vh = canvas.clientHeight, n = box(note);
  const visH = vh - VIEW_TOP - VIEW_BOTTOM;
  const targetY = n.h > visH ? VIEW_TOP + 30 - n.y : VIEW_TOP + visH / 2 - (n.y + n.h / 2);
  canvas.classList.toggle("glide", glide && !reduced);
  setPan(vw / 2 - (n.x + n.w / 2), targetY);
  if (glide) setTimeout(() => canvas.classList.remove("glide"), 650);
}

let pan = null;
canvas.addEventListener("pointerdown", (e) => {
  if (e.button !== 0) return;
  pan = { id: e.pointerId, sx: e.clientX, sy: e.clientY, ox: px, oy: py, moved: false };
});
canvas.addEventListener("pointermove", (e) => {
  if (!pan || e.pointerId !== pan.id) return;
  if (pileHeld) { pan.sx = e.clientX; pan.sy = e.clientY; pan.ox = px; pan.oy = py; return; }
  const dx = e.clientX - pan.sx, dy = e.clientY - pan.sy;
  if (!pan.moved) {
    if (Math.hypot(dx, dy) < 5) return;
    pan.moved = true;
    try { canvas.setPointerCapture(e.pointerId); } catch {} /* capture only once it's a real drag, so link clicks still work */
    canvas.classList.add("panning");
  }
  setPan(pan.ox + dx, pan.oy + dy);
});
const endPan = () => { pan = null; canvas.classList.remove("panning"); };
canvas.addEventListener("pointerup", endPan);
canvas.addEventListener("pointercancel", endPan);
canvas.addEventListener("wheel", (e) => {
  e.preventDefault();
  setPan(px - e.deltaX, py - e.deltaY);
}, { passive: false });
canvas.addEventListener("keydown", (e) => {
  if (e.target !== canvas) return;
  const d = { ArrowLeft: [80, 0], ArrowRight: [-80, 0], ArrowUp: [0, 80], ArrowDown: [0, -80] }[e.key];
  if (d) { e.preventDefault(); setPan(px + d[0], py + d[1]); }
  if (e.key === "Home") { e.preventDefault(); recenter(); }
});

$("#recenter").addEventListener("click", () => recenter());
$("#tidy").addEventListener("click", () => { layoutWorld(true); recenter(); });
if (matchMedia("(pointer: coarse)").matches) $("#drag-hint").textContent = "hold to move · tap to open";
addEventListener("resize", () => { if (!canvas.closest(".page").hidden) { layoutWorld(); setPan(px, py); } });
if (document.fonts) document.fonts.ready.then(() => { if (!canvas.closest(".page").hidden) layoutWorld(true); });

/* ---------------- overlay ---------------- */
const overlay = $("#overlay");
const panel = $(".overlay-panel", overlay);
const body = $("#overlay-body");
let lastFocus = null;

function openOverlay(html, mode = "") {
  lastFocus = document.activeElement;
  panel.className = "overlay-panel" + (mode ? " " + mode : "");
  body.innerHTML = html;
  overlay.hidden = false;
  document.body.style.overflow = "hidden";
  hydrateSkeletons(body);
  panel.scrollTop = 0;
  panel.focus();
}
function closeOverlay() {
  overlay.hidden = true;
  document.body.style.overflow = "";
  if (lastFocus) lastFocus.focus();
}
overlay.addEventListener("click", (e) => { if (e.target.closest("[data-close]")) closeOverlay(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !overlay.hidden) closeOverlay(); });

function openProject(id) {
  const p = PROJECTS.find((x) => x.id === id);
  const tags = p.sets.map((s) => `<li class="tag" style="--c-l:${SETS[s].l}">${SETS[s].label}</li>`)
    .concat(p.wip ? ['<li class="tag" style="--c-l:var(--yellow-l)">in progress</li>'] : [])
    .concat(p.tags.map((t) => `<li class="tag">${esc(t)}</li>`)).join("");
  openOverlay(`
    <h2 class="p-title" id="overlay-title">${esc(p.name)}</h2>
    <p class="p-when">${esc(p.when)}</p>
    <div class="gallery">${p.visuals.map((v) => visualHTML(v, "g-item")).join("")}</div>
    <p class="p-blurb">${esc(p.blurb)}</p>
    ${p.bullets.length ? `<ul class="p-bullets">${p.bullets.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>` : ""}
    <ul class="tags">${tags}</ul>
    ${p.links.length ? `<div class="p-links">${p.links.map(([t, u], i) => `<a class="btn${i ? " ghost" : ""}" href="${esc(u)}" target="_blank" rel="noopener">${esc(t)} ↗</a>`).join("")}</div>` : ""}
  `);
}

function openMeme(i) {
  const [f, w, h, cap] = MEMES[i];
  openOverlay(`
    <div class="meme-big-wrap ph" style="aspect-ratio:${w}/${h};width:min(560px, calc(100vw - 72px), calc(70vh * ${(w / h).toFixed(3)}))"><img class="meme-big" src="assets/memes/${f}" alt="meme: ${esc(cap)}" /></div>
    <p class="meme-cap" id="overlay-title">${esc(cap)}</p>`, "meme-mode");
}

/* ---------------- experience ---------------- */
$("#exp-rows").innerHTML = EXPERIENCE.map((e) => `
  <li class="row">
    <span class="logo${e.fill ? " fill" : ""}"><img src="assets/logos/${e.logo}" alt="" width="38" height="38" /></span>
    <div class="row-main">
      <span class="row-title">${esc(e.org)}</span>
      <span class="row-sub">${esc(e.role)}</span>
      ${e.bullets.length ? `<details><summary>more</summary><ul>${e.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul></details>` : ""}
    </div>
    <span class="row-date">${esc(e.date)}</span>
  </li>`).join("");

/* ---------------- draggable things (projects, notes, memes) ----------------
   opts.holdOnTouch: on touchscreens, a quick swipe scrolls the page and a
   short press-and-hold picks the item up, so big draggables don't trap scrolling. */
let z = 10;
const HOLD_MS = 260;
function makeDraggable(el, board, onTap, opts = {}) {
  let sx, sy, ox, oy, moved = false, down = false;
  el.addEventListener("pointerdown", (e) => {
    const ctl = e.target.closest("a, button");
    if (ctl && ctl !== el) return; // let links be links
    if (opts.holdOnTouch && e.pointerType === "touch") return; // handled by the touch path below
    e.stopPropagation(); // don't pan the canvas underneath
    down = true; moved = false;
    el.setPointerCapture(e.pointerId);
    el.style.zIndex = ++z;
    sx = e.clientX; sy = e.clientY; ox = el.offsetLeft; oy = el.offsetTop;
  });

  if (opts.holdOnTouch) {
    let timer = null, held = false, tmoved = false, tx, ty, tox, toy;
    el.addEventListener("touchstart", (e) => {
      if (e.touches.length > 1) return;
      const t = e.touches[0];
      held = false; tmoved = false;
      tx = t.clientX; ty = t.clientY; tox = el.offsetLeft; toy = el.offsetTop;
      timer = setTimeout(() => {
        held = true; pileHeld = true;
        el.style.zIndex = ++z;
        el.classList.add("dragging");
        if (navigator.vibrate) navigator.vibrate(8);
      }, HOLD_MS);
    }, { passive: true });
    el.addEventListener("touchmove", (e) => {
      const t = e.touches[0];
      const dist = Math.hypot(t.clientX - tx, t.clientY - ty);
      if (!held) { if (dist > 8) { clearTimeout(timer); tmoved = true; } return; } // a swipe: let the page scroll
      e.preventDefault();
      place(el, board, tox + t.clientX - tx, toy + t.clientY - ty);
      opts.onMove?.();
    }, { passive: false });
    const tend = (e) => {
      clearTimeout(timer);
      const wasHeld = held;
      held = false; pileHeld = false;
      el.classList.remove("dragging");
      if (wasHeld) { e.preventDefault(); return; } // dropped: no tap
      if (!tmoved && e.type === "touchend" && onTap) { e.preventDefault(); onTap(); }
    };
    el.addEventListener("touchend", tend);
    el.addEventListener("touchcancel", tend);
    el.addEventListener("contextmenu", (e) => e.preventDefault()); // long-press shouldn't open a menu
  }

  el.addEventListener("pointermove", (e) => {
    if (!down) return;
    if (!moved && Math.hypot(e.clientX - sx, e.clientY - sy) < 5) return;
    moved = true;
    el.classList.add("dragging");
    place(el, board, ox + e.clientX - sx, oy + e.clientY - sy);
    opts.onMove?.();
  });
  const end = () => {
    if (!down) return;
    down = false;
    el.classList.remove("dragging");
    if (!moved && onTap) onTap();
  };
  el.addEventListener("pointerup", end);
  el.addEventListener("pointercancel", () => { down = false; el.classList.remove("dragging"); });
  el.addEventListener("keydown", (e) => {
    if ((e.key === "Enter" || e.key === " ") && onTap && e.target === el) { e.preventDefault(); onTap(); return; }
    const step = e.shiftKey ? 40 : 12;
    const d = { ArrowLeft: [-step, 0], ArrowRight: [step, 0], ArrowUp: [0, -step], ArrowDown: [0, step] }[e.key];
    if (!d) return;
    e.preventDefault();
    el.style.zIndex = ++z;
    place(el, board, el.offsetLeft + d[0], el.offsetTop + d[1]);
    opts.onMove?.();
  });
}
function place(el, board, x, y) {
  const maxX = board.clientWidth - el.offsetWidth;
  const maxY = board.clientHeight - el.offsetHeight;
  el.style.left = Math.max(0, Math.min(maxX, x)) + "px";
  el.style.top = Math.max(0, Math.min(maxY, y)) + "px";
}

/* contact notes */
const board = $("#board");
board.querySelectorAll(".sticky").forEach((n) => makeDraggable(n, board));
function tidyBoard() {
  if (board.clientWidth >= 560) return;
  const colW = board.clientWidth / 2;
  board.querySelectorAll(".sticky").forEach((note, i) => {
    place(note, board, (i % 2) * colW + (colW - note.offsetWidth) / 2, 18 + Math.floor(i / 2) * 235);
  });
}
$("#shuffle").addEventListener("click", () => {
  board.querySelectorAll(".sticky").forEach((note) => {
    note.style.setProperty("--r", (Math.random() * 10 - 5).toFixed(1) + "deg");
    place(note, board, Math.random() * (board.clientWidth - note.offsetWidth), Math.random() * (board.clientHeight - note.offsetHeight));
  });
});

/* meme wall */
const memeBoard = $("#meme-board");
MEMES.forEach(([f, w, h, cap], i) => {
  const el = document.createElement("div");
  el.className = "polaroid-m";
  el.tabIndex = 0;
  el.setAttribute("role", "button");
  el.setAttribute("aria-label", `meme: ${cap}. press enter to enlarge`);
  el.style.setProperty("--r", ((rand(i + 11) - 0.5) * 12).toFixed(1) + "deg");
  el.innerHTML = `<span class="pin" aria-hidden="true"></span>
    <div class="ph" style="--ar:${w}/${h}"><img src="assets/memes/${f}" alt="" loading="lazy" decoding="async" /></div>
    <span class="cap">${esc(cap)}</span>`;
  makeDraggable(el, memeBoard, () => openMeme(i));
  memeBoard.appendChild(el);
});
hydrateSkeletons(memeBoard);

let memeW = 0;
function layoutMemes() {
  const W = memeBoard.clientWidth;
  if (!W || W === memeW) return;
  memeW = W;
  const pw = W < 560 ? 138 : 176;
  memeBoard.style.setProperty("--w", pw + "px");
  const cols = Math.max(2, Math.floor(W / (pw + 30)));
  const cellW = W / cols;
  const colH = Array(cols).fill(22);
  [...memeBoard.children].forEach((el, i) => {
    const [, w, h] = MEMES[i];
    const ph = (pw - 16) * (h / w) + 38;
    const col = colH.indexOf(Math.min(...colH));
    const x = col * cellW + (cellW - pw) / 2 + (rand(i + 21) - 0.5) * 24;
    const y = colH[col] + (rand(i + 31) - 0.5) * 16;
    el.style.left = Math.max(4, Math.min(W - pw - 4, x)) + "px";
    el.style.top = Math.max(8, y) + "px";
    colH[col] += ph + 14;
  });
  memeBoard.style.height = Math.max(...colH) + 30 + "px";
}
addEventListener("resize", () => { if (!memeBoard.closest(".page").hidden) layoutMemes(); });

/* ---------------- routing ---------------- */
const PAGES = ["projects", "experience", "connect", "secret"];

function route() {
  const name = location.hash.replace(/^#\/?/, "") || "projects";
  const page = PAGES.includes(name) ? name : "projects";
  document.querySelectorAll(".page").forEach((el) => (el.hidden = el.dataset.page !== page));
  document.querySelectorAll(".tab").forEach((t) => {
    if (t.dataset.tab === page) t.setAttribute("aria-current", "page");
    else t.removeAttribute("aria-current");
  });
  document.title = page === "projects" ? "alex chen · cs, linguistics & applied math @ umd" : `${page} · alex chen`;
  if (!overlay.hidden) closeOverlay();
  window.scrollTo({ top: 0, behavior: "instant" });
  document.body.classList.toggle("on-canvas", page === "projects");
  if (page === "projects") requestAnimationFrame(() => layoutWorld());
  if (page === "connect") requestAnimationFrame(tidyBoard);
  if (page === "secret") requestAnimationFrame(layoutMemes);
}
window.addEventListener("hashchange", route);
route();

/* ---------------- tap sparkles ---------------- */
const fx = $("#fx");
const SPARK_COLORS = ["#4f8ff7", "#a77bf3", "#f4b76b", "#f6e4c4", "#5fc4d0"];
document.addEventListener("pointerdown", (e) => {
  if (e.button !== 0) return;
  const x = e.clientX, y = e.clientY;

  const ring = document.createElement("span");
  ring.className = "ring";
  fx.appendChild(ring);
  ring.animate(
    [{ transform: `translate(${x}px, ${y}px) scale(.3)`, opacity: .9 }, { transform: `translate(${x}px, ${y}px) scale(1.4)`, opacity: 0 }],
    { duration: 450, easing: "cubic-bezier(.2,.7,.3,1)" }
  ).onfinish = () => ring.remove();

  if (reduced) return;
  const n = 8;
  for (let i = 0; i < n; i++) {
    const s = document.createElement("span");
    s.className = "spark" + (i % 3 === 2 ? " round" : "");
    s.style.setProperty("--c", SPARK_COLORS[i % SPARK_COLORS.length]);
    fx.appendChild(s);
    const a = (i / n) * Math.PI * 2 + Math.random() * 0.6;
    const d = 26 + Math.random() * 26;
    const rot = Math.random() * 180;
    s.animate(
      [
        { transform: `translate(${x}px, ${y}px) scale(.4) rotate(0deg)`, opacity: 1 },
        { transform: `translate(${x + Math.cos(a) * d}px, ${y + Math.sin(a) * d}px) scale(1.1) rotate(${rot}deg)`, opacity: 1, offset: 0.6 },
        { transform: `translate(${x + Math.cos(a) * d * 1.25}px, ${y + Math.sin(a) * d * 1.25 + 8}px) scale(0) rotate(${rot * 1.5}deg)`, opacity: 0 },
      ],
      { duration: 620 + Math.random() * 200, easing: "cubic-bezier(.2,.8,.3,1)" }
    ).onfinish = () => s.remove();
  }
}, { capture: true, passive: true });

/* ---------------- blue ball cursor (mouse / trackpad only) ---------------- */
if (matchMedia("(pointer: fine)").matches) {
  const cur = $("#cursor");
  document.documentElement.classList.add("has-cursor");
  let tx = -100, ty = -100, cx = -100, cy = -100;
  const HOVERABLE = "a, button, summary, .pile, .sticky, .polaroid-m, [data-close], .tab";

  addEventListener("mousemove", (e) => {
    tx = e.clientX; ty = e.clientY;
    if (cx < -50) { cx = tx; cy = ty; }
    cur.classList.remove("gone");
  }, { passive: true });
  document.addEventListener("mouseover", (e) => cur.classList.toggle("hover", !!e.target.closest(HOVERABLE)));
  document.addEventListener("mouseleave", () => cur.classList.add("gone"));
  addEventListener("mousedown", () => cur.classList.add("down"));
  addEventListener("mouseup", () => cur.classList.remove("down"));

  const k = reduced ? 1 : 0.3;
  (function loop() {
    cx += (tx - cx) * k; cy += (ty - cy) * k;
    cur.style.setProperty("--x", cx.toFixed(1) + "px");
    cur.style.setProperty("--y", cy.toFixed(1) + "px");
    requestAnimationFrame(loop);
  })();
}
