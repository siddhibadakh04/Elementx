// ============================================================
// ELEMENTX — ENGINEERING PERIODIC TABLE
// ============================================================

const elements = [
  {n:1,s:"H",name:"Hydrogen",mass:"1.008",density:"0.0000899",melt:"-259°C",boil:"-253°C",conductivity:"Low",valence:"1",period:1,type:"nonmetal",config:"1s¹",use:"Fuel cells, aerospace propulsion, ammonia production."},
  {n:2,s:"He",name:"Helium",mass:"4.003",density:"0.0001785",melt:"-272°C",boil:"-269°C",conductivity:"Very Low",valence:"0",period:1,type:"noble",config:"1s²",use:"Cryogenics, MRI systems, leak detection and aerospace."},

  {n:3,s:"Li",name:"Lithium",mass:"6.94",density:"0.534",melt:"181°C",boil:"1342°C",conductivity:"High",valence:"1",period:2,type:"metal",config:"1s² 2s¹",use:"Rechargeable batteries, aerospace alloys and ceramics."},
  {n:4,s:"Be",name:"Beryllium",mass:"9.012",density:"1.848",melt:"1287°C",boil:"2469°C",conductivity:"High",valence:"2",period:2,type:"metal",config:"1s² 2s²",use:"Aerospace structures, X-ray windows and precision instruments."},
  {n:5,s:"B",name:"Boron",mass:"10.81",density:"2.34",melt:"2076°C",boil:"3927°C",conductivity:"Medium",valence:"3",period:2,type:"nonmetal",config:"1s² 2s² 2p¹",use:"High-strength materials, glass, ceramics and semiconductors."},
  {n:6,s:"C",name:"Carbon",mass:"12.011",density:"2.267",melt:"3550°C",boil:"4027°C",conductivity:"High",valence:"4",period:2,type:"nonmetal",config:"1s² 2s² 2p²",use:"Steel production, composites, batteries and electronics."},
  {n:7,s:"N",name:"Nitrogen",mass:"14.007",density:"0.00125",melt:"-210°C",boil:"-196°C",conductivity:"Low",valence:"3",period:2,type:"nonmetal",config:"1s² 2s² 2p³",use:"Fertilizers, inert atmospheres and chemical manufacturing."},
  {n:8,s:"O",name:"Oxygen",mass:"15.999",density:"0.001429",melt:"-219°C",boil:"-183°C",conductivity:"Low",valence:"2",period:2,type:"nonmetal",config:"1s² 2s² 2p⁴",use:"Steelmaking, medical systems, combustion and welding."},
  {n:9,s:"F",name:"Fluorine",mass:"18.998",density:"0.001696",melt:"-220°C",boil:"-188°C",conductivity:"Low",valence:"1",period:2,type:"nonmetal",config:"1s² 2s² 2p⁵",use:"Fluoropolymers, chemical processing and semiconductor manufacturing."},
  {n:10,s:"Ne",name:"Neon",mass:"20.180",density:"0.0009",melt:"-249°C",boil:"-246°C",conductivity:"Very Low",valence:"0",period:2,type:"noble",config:"1s² 2s² 2p⁶",use:"Lighting, lasers and high-voltage indicators."},

  {n:11,s:"Na",name:"Sodium",mass:"22.990",density:"0.971",melt:"98°C",boil:"883°C",conductivity:"High",valence:"1",period:3,type:"metal",config:"[Ne] 3s¹",use:"Chemical production, heat-transfer systems and sodium lamps."},
  {n:12,s:"Mg",name:"Magnesium",mass:"24.305",density:"1.738",melt:"650°C",boil:"1091°C",conductivity:"High",valence:"2",period:3,type:"metal",config:"[Ne] 3s²",use:"Lightweight automotive alloys, aerospace and electronics."},
  {n:13,s:"Al",name:"Aluminium",mass:"26.982",density:"2.70",melt:"660°C",boil:"2470°C",conductivity:"Very High",valence:"3",period:3,type:"metal",config:"[Ne] 3s² 3p¹",use:"Aircraft, automotive structures, electrical cables and packaging."},
  {n:14,s:"Si",name:"Silicon",mass:"28.085",density:"2.329",melt:"1414°C",boil:"3265°C",conductivity:"Medium",valence:"4",period:3,type:"nonmetal",config:"[Ne] 3s² 3p²",use:"Semiconductors, solar cells, sensors and electronics."},
  {n:15,s:"P",name:"Phosphorus",mass:"30.974",density:"1.82",melt:"44°C",boil:"280°C",conductivity:"Low",valence:"3",period:3,type:"nonmetal",config:"[Ne] 3s² 3p³",use:"Fertilizers, detergents and semiconductor applications."},
  {n:16,s:"S",name:"Sulfur",mass:"32.06",density:"2.067",melt:"115°C",boil:"445°C",conductivity:"Low",valence:"2",period:3,type:"nonmetal",config:"[Ne] 3s² 3p⁴",use:"Sulfuric acid, batteries, fertilizers and rubber vulcanization."},
  {n:17,s:"Cl",name:"Chlorine",mass:"35.45",density:"0.003214",melt:"-101°C",boil:"-34°C",conductivity:"Low",valence:"1",period:3,type:"nonmetal",config:"[Ne] 3s² 3p⁵",use:"Water treatment, PVC production and chemical manufacturing."},
  {n:18,s:"Ar",name:"Argon",mass:"39.948",density:"0.001784",melt:"-189°C",boil:"-186°C",conductivity:"Low",valence:"0",period:3,type:"noble",config:"[Ne] 3s² 3p⁶",use:"Welding shields, lighting and inert manufacturing environments."},

  {n:19,s:"K",name:"Potassium",mass:"39.098",density:"0.862",melt:"63°C",boil:"759°C",conductivity:"High",valence:"1",period:4,type:"metal",config:"[Ar] 4s¹",use:"Fertilizers, chemical manufacturing and specialty alloys."},
  {n:20,s:"Ca",name:"Calcium",mass:"40.078",density:"1.55",melt:"842°C",boil:"1484°C",conductivity:"High",valence:"2",period:4,type:"metal",config:"[Ar] 4s²",use:"Cement, metallurgy, construction and alloy production."},

  {n:21,s:"Sc",name:"Scandium",mass:"44.956",density:"2.985",melt:"1541°C",boil:"2836°C",conductivity:"Medium",valence:"3",period:4,type:"metal",config:"[Ar] 3d¹ 4s²",use:"Aerospace alloys, lighting and advanced materials."},
  {n:22,s:"Ti",name:"Titanium",mass:"47.867",density:"4.506",melt:"1668°C",boil:"3287°C",conductivity:"Low",valence:"4",period:4,type:"metal",config:"[Ar] 3d² 4s²",use:"Aerospace, biomedical implants, automotive and marine systems."},
  {n:23,s:"V",name:"Vanadium",mass:"50.942",density:"6.11",melt:"1910°C",boil:"3407°C",conductivity:"Medium",valence:"5",period:4,type:"metal",config:"[Ar] 3d³ 4s²",use:"High-strength steel, aerospace alloys and flow batteries."},
  {n:24,s:"Cr",name:"Chromium",mass:"51.996",density:"7.19",melt:"1907°C",boil:"2671°C",conductivity:"High",valence:"6",period:4,type:"metal",config:"[Ar] 3d⁵ 4s¹",use:"Stainless steel, plating and corrosion-resistant alloys."},
  {n:25,s:"Mn",name:"Manganese",mass:"54.938",density:"7.21",melt:"1246°C",boil:"2061°C",conductivity:"Medium",valence:"7",period:4,type:"metal",config:"[Ar] 3d⁵ 4s²",use:"Steel production, batteries and industrial alloys."},
  {n:26,s:"Fe",name:"Iron",mass:"55.845",density:"7.874",melt:"1538°C",boil:"2862°C",conductivity:"High",valence:"2,3",period:4,type:"metal",config:"[Ar] 3d⁶ 4s²",use:"Structural steel, machinery, automotive components and construction."},
  {n:27,s:"Co",name:"Cobalt",mass:"58.933",density:"8.90",melt:"1495°C",boil:"2927°C",conductivity:"High",valence:"2,3",period:4,type:"metal",config:"[Ar] 3d⁷ 4s²",use:"Batteries, superalloys, magnets and catalysts."},
  {n:28,s:"Ni",name:"Nickel",mass:"58.693",density:"8.908",melt:"1455°C",boil:"2913°C",conductivity:"High",valence:"2",period:4,type:"metal",config:"[Ar] 3d⁸ 4s²",use:"Stainless steel, batteries, turbines and corrosion-resistant coatings."},
  {n:29,s:"Cu",name:"Copper",mass:"63.546",density:"8.96",melt:"1085°C",boil:"2562°C",conductivity:"Very High",valence:"1,2",period:4,type:"metal",config:"[Ar] 3d¹⁰ 4s¹",use:"Electrical wiring, motors, heat exchangers and electronics."},
  {n:30,s:"Zn",name:"Zinc",mass:"65.38",density:"7.14",melt:"420°C",boil:"907°C",conductivity:"High",valence:"2",period:4,type:"metal",config:"[Ar] 3d¹⁰ 4s²",use:"Galvanizing, batteries, brass and corrosion protection."},

  {n:47,s:"Ag",name:"Silver",mass:"107.868",density:"10.49",melt:"962°C",boil:"2162°C",conductivity:"Extremely High",valence:"1",period:5,type:"metal",config:"[Kr] 4d¹⁰ 5s¹",use:"Electronics, solar panels, electrical contacts and sensors."},
  {n:79,s:"Au",name:"Gold",mass:"196.967",density:"19.32",melt:"1064°C",boil:"2970°C",conductivity:"Very High",valence:"1,3",period:6,type:"metal",config:"[Xe] 4f¹⁴ 5d¹⁰ 6s¹",use:"Electronics, aerospace connectors, coatings and high-reliability contacts."},
  {n:80,s:"Hg",name:"Mercury",mass:"200.592",density:"13.53",melt:"-39°C",boil:"357°C",conductivity:"Medium",valence:"1,2",period:6,type:"metal",config:"[Xe] 4f¹⁴ 5d¹⁰ 6s²",use:"Specialized sensors and scientific instruments."},
  {n:82,s:"Pb",name:"Lead",mass:"207.2",density:"11.34",melt:"327°C",boil:"1749°C",conductivity:"Medium",valence:"2,4",period:6,type:"metal",config:"[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²",use:"Radiation shielding, batteries and specialized engineering applications."},
  {n:92,s:"U",name:"Uranium",mass:"238.029",density:"19.05",melt:"1135°C",boil:"4131°C",conductivity:"Medium",valence:"6",period:7,type:"metal",config:"[Rn] 5f³ 6d¹ 7s²",use:"Nuclear energy and scientific research."}
];


// ============================================================
// PERIODIC TABLE
// ============================================================

const table = document.getElementById("periodicTable");

const positions = {
  1:[1,1], 2:[18,1],
  3:[1,2],4:[2,2],5:[13,2],6:[14,2],7:[15,2],8:[16,2],9:[17,2],10:[18,2],
  11:[1,3],12:[2,3],13:[13,3],14:[14,3],15:[15,3],16:[16,3],17:[17,3],18:[18,3],
  19:[1,4],20:[2,4],21:[3,4],22:[4,4],23:[5,4],24:[6,4],25:[7,4],26:[8,4],27:[9,4],28:[10,4],29:[11,4],30:[12,4],
  47:[11,5],
  79:[11,6],80:[12,6],82:[14,6],
  92:[14,7]
};

elements.forEach(el => {
  const cell = document.createElement("div");

  cell.className = `element ${el.type}-type`;

  if (positions[el.n]) {
    cell.style.gridColumn = positions[el.n][0];
    cell.style.gridRow = positions[el.n][1];
  } else {
    cell.style.visibility = "hidden";
  }

  cell.innerHTML = `
    <div class="number">${el.n}</div>
    <div class="symbol">${el.s}</div>
    <div class="name">${el.name}</div>
  `;

  cell.addEventListener("click", () => openElement(el));

  table.appendChild(cell);
});


// ============================================================
// ELEMENT MODAL
// ============================================================

const modal = document.getElementById("elementModal");

function openElement(el) {
  document.getElementById("modalSymbol").textContent = el.s;
  document.getElementById("modalName").textContent = el.name;
  document.getElementById("modalNumber").textContent = `Atomic number ${el.n}`;
  document.getElementById("modalCategory").textContent = el.type.toUpperCase();

  document.getElementById("modalMass").textContent = el.mass;
  document.getElementById("modalDensity").textContent = el.density;
  document.getElementById("modalMelting").textContent = el.melt;
  document.getElementById("modalBoiling").textContent = el.boil;
  document.getElementById("modalConductivity").textContent = el.conductivity;
  document.getElementById("modalValence").textContent = el.valence;
  document.getElementById("modalUse").textContent = el.use;

  modal.classList.add("show");
}

document.getElementById("closeModal").onclick = () => {
  modal.classList.remove("show");
};

modal.addEventListener("click", e => {
  if (e.target === modal) modal.classList.remove("show");
});


// ============================================================
// NAVIGATION
// ============================================================

const pages = document.querySelectorAll(".page");
const navItems = document.querySelectorAll(".nav-item");

function showPage(id) {
  pages.forEach(p => p.classList.remove("active"));
  navItems.forEach(n => n.classList.remove("active"));

  document.getElementById(id).classList.add("active");

  const nav = document.querySelector(`[data-section="${id}"]`);
  if (nav) nav.classList.add("active");

  document.getElementById("currentPage").textContent = id.toUpperCase();

  const titles = {
    dashboard:"Periodic Intelligence",
    finder:"Element Finder",
    compare:"Material Comparison",
    compound:"Compound Builder",
    reaction:"Reaction Predictor",
    electron:"Electron Configuration",
    industry:"Industry Use Explorer",
    quiz:"Element Quiz"
  };

  document.getElementById("pageTitle").textContent = titles[id];
}

navItems.forEach(item => {
  item.addEventListener("click", () => showPage(item.dataset.section));
});

document.querySelectorAll("[data-goto]").forEach(btn => {
  btn.addEventListener("click", () => showPage(btn.dataset.goto));
});


// ============================================================
// GLOBAL SEARCH
// ============================================================

document.getElementById("globalSearch").addEventListener("input", e => {
  const query = e.target.value.toLowerCase().trim();

  if (!query) return;

  const result = elements.find(el =>
    el.name.toLowerCase().includes(query) ||
    el.s.toLowerCase() === query ||
    String(el.n) === query
  );

  if (result) openElement(result);
});


// ============================================================
// DROPDOWNS
// ============================================================

function fillSelect(id) {
  const select = document.getElementById(id);

  elements.forEach(el => {
    const option = document.createElement("option");
    option.value = el.n;
    option.textContent = `${el.s} — ${el.name}`;
    select.appendChild(option);
  });
}

[
  "compare1",
  "compare2",
  "compare3",
  "compoundA",
  "compoundB",
  "reactionA",
  "reactionB",
  "electronSelect"
].forEach(fillSelect);


// ============================================================
// MATERIAL COMPARISON
// ============================================================

document.getElementById("compareBtn").onclick = () => {
  const ids = [
    Number(document.getElementById("compare1").value),
    Number(document.getElementById("compare2").value),
    Number(document.getElementById("compare3").value)
  ];

  const selected = ids.map(id => elements.find(e => e.n === id));

  const rows = [
    ["Atomic Number", ...selected.map(e => e.n)],
    ["Atomic Mass", ...selected.map(e => e.mass)],
    ["Density", ...selected.map(e => e.density)],
    ["Melting Point", ...selected.map(e => e.melt)],
    ["Boiling Point", ...selected.map(e => e.boil)],
    ["Electrical Conductivity", ...selected.map(e => e.conductivity)],
    ["Valence", ...selected.map(e => e.valence)],
    ["Period", ...selected.map(e => e.period)]
  ];

  document.getElementById("comparisonTable").innerHTML = `
    <table>
      <thead>
        <tr>
          <th>Property</th>
          ${selected.map(e => `<th>${e.s} — ${e.name}</th>`).join("")}
        </tr>
      </thead>

      <tbody>
        ${rows.map(row => `
          <tr>
            ${row.map((cell,i) =>
              i === 0 ? `<td>${cell}</td>` : `<td>${cell}</td>`
            ).join("")}
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
};


// ============================================================
// ELEMENT FINDER
// ============================================================

document.querySelectorAll(".requirement-chips button").forEach(btn => {
  btn.onclick = () => {
    const text = {
      lightweight:"I need a lightweight material",
      conductive:"I need a highly electrically conductive material",
      strong:"I need a high strength material",
      heat:"I need a material with a high melting point",
      corrosion:"I need a corrosion resistant material"
    };

    document.getElementById("finderInput").value = text[btn.dataset.req];
  };
});

document.getElementById("findElements").onclick = () => {
  const query = document.getElementById("finderInput").value.toLowerCase();

  let ranked = elements.map(el => {

    let score = 40;

    if (query.includes("light") || query.includes("low density")) {
      if (Number(el.density) < 4) score += 40;
    }

    if (query.includes("conduct")) {
      if (el.conductivity.includes("High")) score += 35;
    }

    if (query.includes("strong")) {
      if (el.n >= 20 && el.type === "metal") score += 25;
    }

    if (query.includes("melting") || query.includes("heat")) {
      const temp = parseFloat(el.melt);
      if (temp > 1000) score += 40;
    }

    if (query.includes("corrosion")) {
      if (["Ti","Cr","Ni","Al","Au"].includes(el.s)) score += 40;
    }

    return {...el, score: Math.min(score,99)};
  });

  ranked.sort((a,b) => b.score - a.score);

  document.getElementById("finderResults").innerHTML =
    ranked.slice(0,6).map(el => `
      <div class="result-card">
        <div class="big-symbol">${el.s}</div>
        <h4>${el.name}</h4>
        <div class="match">${el.score}% MATCH</div>

        <div class="result-properties">
          <div>
            <small>Density</small>
            <strong>${el.density}</strong>
          </div>
          <div>
            <small>Melting</small>
            <strong>${el.melt}</strong>
          </div>
          <div>
            <small>Conductivity</small>
            <strong>${el.conductivity}</strong>
          </div>
          <div>
            <small>Valence</small>
            <strong>${el.valence}</strong>
          </div>
        </div>

        <button class="primary-btn" onclick='openElementByNumber(${el.n})'>
          View Details
        </button>
      </div>
    `).join("");
};

function openElementByNumber(n) {
  const el = elements.find(e => e.n === n);
  if (el) openElement(el);
}


// ============================================================
// COMPOUND BUILDER
// ============================================================

document.getElementById("buildCompound").onclick = () => {

  const a = elements.find(e =>
    e.n === Number(document.getElementById("compoundA").value)
  );

  const b = elements.find(e =>
    e.n === Number(document.getElementById("compoundB").value)
  );

  let formula = `${a.s}${b.s}`;

  let name = `${a.name} ${b.name} compound`;
  let application = "Used in chemical and engineering applications.";

  const pair = [a.s,b.s].sort().join("-");

  const compounds = {
    "Cl-Na": {
      formula:"NaCl",
      name:"Sodium Chloride",
      application:"Used in chemical processing, food preservation and industrial production."
    },

    "Al-O": {
      formula:"Al₂O₃",
      name:"Aluminium Oxide",
      application:"Used in ceramics, abrasives, coatings and high-temperature engineering."
    },

    "C-Fe": {
      formula:"Fe-C",
      name:"Iron–Carbon Alloy",
      application:"Foundation of steels used in construction, automotive and machinery."
    },

    "Cu-O": {
      formula:"CuO",
      name:"Copper Oxide",
      application:"Used in electronics, catalysts, pigments and advanced materials."
    },

    "H-O": {
      formula:"H₂O",
      name:"Water",
      application:"Critical engineering fluid used in cooling, power generation and chemical processes."
    }
  };

  if (compounds[pair]) {
    formula = compounds[pair].formula;
    name = compounds[pair].name;
    application = compounds[pair].application;
  }

  document.getElementById("compoundResult").innerHTML = `
    <div class="compound-card">
      <span class="eyebrow">PREDICTED / COMMON COMPOUND</span>
      <div class="compound-formula">${formula}</div>
      <h3>${name}</h3>
      <p>${application}</p>
    </div>
  `;
};


// ============================================================
// REACTION PREDICTOR
// ============================================================

document.getElementById("predictReaction").onclick = () => {

  const a = elements.find(e =>
    e.n === Number(document.getElementById("reactionA").value)
  );

  const b = elements.find(e =>
    e.n === Number(document.getElementById("reactionB").value)
  );

  let result = "Low direct reactivity expected under normal conditions.";
  let equation = `${a.s} + ${b.s} → No simple reaction`;

  const metals = ["Li","Na","K","Mg","Ca","Al","Fe","Zn"];
  const nonmetals = ["F","Cl","O","S"];

  if (metals.includes(a.s) && nonmetals.includes(b.s)) {
    result = "A reaction is chemically plausible. Metal + nonmetal combinations commonly form ionic compounds.";
    equation = `${a.s} + ${b.s} → ${a.s}${b.s}`;
  }

  if (metals.includes(b.s) && nonmetals.includes(a.s)) {
    result = "A reaction is chemically plausible. Metal + nonmetal combinations commonly form ionic compounds.";
    equation = `${a.s} + ${b.s} → ${b.s}${a.s}`;
  }

  if (a.s === "H" && b.s === "O" || a.s === "O" && b.s === "H") {
    equation = "2H₂ + O₂ → 2H₂O";
    result = "Hydrogen and oxygen can react strongly when an ignition source is present.";
  }

  if (a.s === "Na" && b.s === "Cl" || a.s === "Cl" && b.s === "Na") {
    equation = "2Na + Cl₂ → 2NaCl";
    result = "Highly favorable ionic compound formation.";
  }

  document.getElementById("reactionResult").innerHTML = `
    <div class="reaction-card">
      <span class="eyebrow">REACTION ANALYSIS</span>
      <h2 style="margin-top:10px">${equation}</h2>
      <p>${result}</p>
      <p><strong>Note:</strong> This educational predictor uses simplified rules and should not be treated as a laboratory prediction.</p>
    </div>
  `;
};


// ============================================================
// ELECTRON VISUALIZER
// ============================================================

function visualizeElectron() {

  const el = elements.find(e =>
    e.n === Number(document.getElementById("electronSelect").value)
  );

  document.getElementById("electronElement").textContent = el.name;
  document.getElementById("configuration").textContent = el.config;
  document.getElementById("atomicNumber").textContent = el.n;
  document.getElementById("valenceElectrons").textContent = el.valence;
  document.getElementById("periodNumber").textContent = el.period;

  const visual = document.getElementById("atomVisual");

  visual.innerHTML = `<div class="atom-nucleus">${el.s}</div>`;

  const shellCount = Math.min(el.period, 4);

  for (let i=1; i<=shellCount; i++) {

    const size = 90 + i * 55;

    const shell = document.createElement("div");

    shell.className = "shell";

    shell.style.width = size + "px";
    shell.style.height = size + "px";

    visual.appendChild(shell);

    const electrons = Math.min(
      i === 1 ? 2 :
      i === 2 ? 8 :
      i === 3 ? 8 : 2,
      8
    );

    for (let j=0; j<electrons; j++) {

      const angle = (360 / electrons) * j;

      const electron = document.createElement("div");

      electron.className = "electron";

      const radius = size / 2;

      electron.style.left =
        `calc(50% + ${Math.cos(angle*Math.PI/180)*radius}px - 4px)`;

      electron.style.top =
        `calc(50% + ${Math.sin(angle*Math.PI/180)*radius}px - 4px)`;

      visual.appendChild(electron);
    }
  }
}

document.getElementById("visualizeElectron").onclick = visualizeElectron;

visualizeElectron();


// ============================================================
// INDUSTRY USES
// ============================================================

const industries = [
  ["✈","Aerospace","Titanium, aluminium, nickel and lightweight alloys enable high-performance aircraft and spacecraft."],
  ["🚗","Automotive","Steel, aluminium, copper, lithium and nickel support modern vehicle systems."],
  ["⚡","Energy","Lithium, copper, uranium, silicon and nickel play major roles in energy technologies."],
  ["💻","Electronics","Silicon, copper, gold, silver and rare materials enable electronic systems."],
  ["🏗","Construction","Iron, carbon, aluminium, calcium and silicon are fundamental engineering materials."],
  ["🧬","Biomedical","Titanium, cobalt, chromium and platinum are important in medical technologies."],
  ["🔋","Batteries","Lithium, cobalt, nickel, manganese and graphite are used in energy storage."],
  ["🏭","Manufacturing","Iron, chromium, nickel, aluminium and zinc are widely used in industrial production."]
];

document.getElementById("industryGrid").innerHTML =
  industries.map(i => `
    <div class="industry-card">
      <div class="industry-icon">${i[0]}</div>
      <h4>${i[1]}</h4>
      <p>${i[2]}</p>
    </div>
  `).join("");


// ============================================================
// QUIZ
// ============================================================

const quiz = [
  {
    q:"Which element has the highest electrical conductivity?",
    answers:["Copper","Iron","Aluminium","Titanium"],
    correct:0
  },
  {
    q:"What is the atomic number of Carbon?",
    answers:["4","6","8","12"],
    correct:1
  },
  {
    q:"Which element is widely used in aerospace alloys?",
    answers:["Titanium","Chlorine","Neon","Sulfur"],
    correct:0
  },
  {
    q:"Which element is the primary semiconductor material?",
    answers:["Iron","Silicon","Sodium","Gold"],
    correct:1
  },
  {
    q:"Which element is strongly associated with rechargeable batteries?",
    answers:["Lithium","Argon","Calcium","Helium"],
    correct:0
  }
];

let quizIndex = 0;
let score = 0;
let answered = false;

function loadQuiz() {

  const q = quiz[quizIndex];

  document.getElementById("questionCount").textContent =
    `Question ${quizIndex+1} / ${quiz.length}`;

  document.getElementById("quizScore").textContent =
    `Score: ${score}`;

  document.getElementById("quizProgress").style.width =
    `${((quizIndex+1)/quiz.length)*100}%`;

  document.getElementById("question").textContent = q.q;

  const answers = document.getElementById("answers");

  answers.innerHTML = "";

  q.answers.forEach((answer,index) => {

    const button = document.createElement("button");

    button.className = "answer";
    button.textContent = answer;

    button.onclick = () => {

      if (answered) return;

      answered = true;

      if (index === q.correct) {
        button.classList.add("correct");
        score++;
      } else {
        button.classList.add("wrong");
        answers.children[q.correct].classList.add("correct");
      }

      document.getElementById("quizScore").textContent =
        `Score: ${score}`;
    };

    answers.appendChild(button);
  });
}

document.getElementById("nextQuestion").onclick = () => {

  if (!answered) return;

  quizIndex++;

  if (quizIndex >= quiz.length) {

    document.getElementById("question").textContent =
      `Quiz Complete! You scored ${score}/${quiz.length}.`;

    document.getElementById("answers").innerHTML =
      `<button class="answer correct" onclick="quizIndex=0;score=0;answered=false;loadQuiz()">Restart Quiz</button>`;

    return;
  }

  answered = false;
  loadQuiz();
};

loadQuiz();


// ============================================================
// THEME BUTTON
// ============================================================

document.getElementById("themeBtn").onclick = () => {

  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {

    document.documentElement.style.setProperty("--bg","#eef5f7");
    document.documentElement.style.setProperty("--bg2","#ffffff");
    document.documentElement.style.setProperty("--card","#ffffff");
    document.documentElement.style.setProperty("--text","#10202c");
    document.documentElement.style.setProperty("--muted","#61727d");

  } else {

    document.documentElement.style.setProperty("--bg","#071019");
    document.documentElement.style.setProperty("--bg2","#0b1622");
    document.documentElement.style.setProperty("--card","rgba(15,29,43,.78)");
    document.documentElement.style.setProperty("--text","#e9f2f8");
    document.documentElement.style.setProperty("--muted","#8da1b2");
  }
};