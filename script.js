// ============================================================
// LOCATION DATA
// ------------------------------------------------------------
// This is the ONE place you edit to add a building/block.
// Each entry needs:
//   id          unique string, no spaces (used internally)
//   name        shown in the tooltip + modal title
//   x, y        position as a % of the map image (0–100)
//               tip: open the image in any editor, hover the
//               spot you want, read pixel coords, then
//               x = pixelX / imageWidth  * 100
//               y = pixelY / imageHeight * 100
//   eyebrow     small label above the title in the modal
//   images      array of image paths for the modal. One image = no
//               arrows shown. Two or more = a next/prev gallery with
//               a dot counter appears automatically.
//   description a couple of sentences about the place
//   facts       optional {label: value} pairs shown as a list
//
// You said you'll fill in real x/y yourself — every entry
// below has a placeholder x: 0, y: 0 EXCEPT the two that were
// already calibrated (Cricket Field, Synthetic Track), so you
// can see the pattern working immediately.
// ============================================================
const LOCATIONS = [
  {
    id: "cricketField",
    name: "Cricket Field",
    x: 36.9,
    y: 32.8,
    eyebrow: "Sports Complex · Outdoor",
    images: ["images/cricket.jpeg"],
    description:
      "The cricket field sits at the heart of Thapar's sports zone, ringed by the synthetic running track and framed by the campus's dense tree cover. It's a full-size ground used for inter-hostel tournaments, practice nets, and open play through the year.",
    facts: {
      Location: "Center of the sports zone, inside the running track loop",
      Surface: "Turf outfield with a prepared natural pitch",
      "Used for": "Inter-hostel matches, practice sessions, PT classes",
      Nearby: "Synthetic Track, OAT, Tennis Court, Sports Complex"
    }
  },
  {
    id: "syntheticTrack",
    name: "Synthetic Track",
    x: 23.7,
    y: 50.1,
    eyebrow: "Sports Complex · Outdoor",
    images: ["images/synthetic-track.png"],
    description:
      "A 400m synthetic athletics track used for practice and sports events, wrapping around the cricket field and OAT.",
    facts: {
      Length: "400m",
      "Used for": "Athletics practice, sports meets"
    }
  },
  {
    id: "csBlock",
    name: "CS Block",
    x: 64,
    y: 44.5,
    eyebrow: "Department · CSED",
    images: ["images/cs-block-1.png", "images/cs-block-2.png"],
    description:
      "Home to the Computer Science and Engineering Department (CSED) — lecture rooms, labs, and faculty offices.",
    facts: {
      Department: "CSED",
      "Also nearby": "LP 110–111, Venture Lab, Library"
    }
  },
  {
    id: "Sports Complex",
    name: "Sports Complex",
    x: 45,
    y: 46,
    eyebrow: "Sports Complex",
    images: ["images/sports.jpeg"],
    description: "Multi-purpose hall featuring premium courts for badminton, basketball, volleyball, and table tennis.",
    facts: { Indoor: "Arena" }
  },
  
  {
    id: "OAT",
    name: "Open Air Theatre",
    x: 29.6,
    y: 47,
    eyebrow: "Cultural Hub · TIET",
    images: ["images/oat.png"],
    description: "The vibrant heart of Thapar's cultural life, hosting major events, street plays, musical nights.",
    facts: {
      "Capacity": "Large outdoor seating",
    "Purpose": "Cultural events & fests"
     }
  },
  {
    id: "COS",
    name: "COS",
    x: 29.6,
    y: 54,
    eyebrow: "Student Hub · TIET",
    images: ["images/cos.jpeg"],
    description: "The ultimate campus hangout spot featuring food joints, retail shops, and a vibrant open area where students gather, relax, and socialize after classes.",
    facts: {"Type": "Student Hangout & Retail",
    "Facilities": "Eateries, Shops & Open Spaces"
     }
  },
  {
    id: "library",
    name: "Library",
    x: 67,
    y: 57.5,
    eyebrow: "Academic",
    images: ["images/library.png"],
    description: "The central library, next to the LT and LP 101–103 lecture blocks.",
    facts: {}
  },
  {
    id: "tslas",
    name: "TSLAS",
    x: 79,
    y: 35,
    eyebrow: "Academic",
    images: ["images/tslas.png"],
    description: "An innovative, interdisciplinary hub blending sciences, humanities, management, and social sciences with global university pathways and student-centric pedagogy.",
    facts: {"Programs": "BA, BSc, BCom, BBA (Hons.)",
    "Focus": "Interdisciplinary Education"}
  },
  {
    id: "cBlockEced",
    name: "C Block",
    x: 71,
    y: 69.3,
    eyebrow: "Department · ECED",
    images: ["images/c-block.jpg"],
    description: "Home to the Electronics & Communication Engineering Department (ECED).",
    facts: { Department: "ECED" }
  },
  {
    id: "hostelPG1",
    name: "Hostel PG-1 — Dhriti Hall",
    x: 48,
    y: 80,
    eyebrow: "Hostel · Girls",
    images: ["campus-map.jpg"],
    description:
      "Dhriti Hall, the newest addition to the Thapar Institute of Engineering & Technology campus, is a modern hostel designed exclusively for female residents, offering 928 air-conditioned double-occupancy rooms with shared facilities.",
    facts: { "Total Capacity": "928" }
  },
  {
    id: "hostelQ",
    name: "Hostel Q — Vahni Hall",
    x: 52,
    y: 80,
    eyebrow: "Hostel · Girls",
    images: ["images/hostel-q.jpg"],
    description:
      "Hostel Q is the newest addition to the Thapar Institute campus's state-of-the-art housing facilities. Designed exclusively for female residents, it offers 928 double-seater rooms with air conditioning and shared restrooms.",
    facts: { "Total Capacity": "928" }
  },
  {
    id: "hostelE",
    name: "Hostel E — Vasudha Hall Block E",
    x: 50,
    y: 47,
    eyebrow: "Hostel · Girls",
    images: ["images/hostel-g.jpg"],
    description:
      "Hostel E is one of the girls' hostels on campus, offering a range of facilities to create a comfortable and conducive environment for female students. Various room configurations are available to accommodate different preferences and needs.",
    facts: { "Total Capacity": "234" }
  },
  {
    id: "hostelG",
    name: "Hostel G — Vasudha Hall Block G",
    x: 50,
    y: 58,
    eyebrow: "Hostel · Girls",
    images: ["images/hostel-g.jpg"],
    description:
      "Hostel G is beautiful and charming, surrounded by majestic lawns that add to its appeal. Recently renovated, it offers accommodation for 234 girls, with various room options available so students can choose according to their preferences.",
    facts: { "Total Capacity": "234" }
  },
  {
    id: "hostelI",
    name: "Hostel I — Ira Hall",
    x: 55.5,
    y: 44,
    eyebrow: "Hostel · Girls",
    images: ["images/hostel-i.jpg"],
    description:
      "Hostel I at Thapar Institute of Engineering & Technology, Patiala, offers female students affordable and socially comfortable accommodation.",
    facts: { "Total Capacity": "406" }
  },
  {
    id: "hostelN",
    name: "Hostel N — Ananta Hall",
    x: 56,
    y: 57,
    eyebrow: "Hostel · Girls",
    images: ["images/hostel-n-1.jpg", "images/hostel-n-2.png"],
    description:
      "Iconic Ananta Hall is a newly constructed multistory girls' hostel at Thapar Institute of Engineering & Technology. It is regarded as one of the country's finest hostels and boasts state-of-the-art facilities.",
    facts: { "Total Capacity": "500" }
  },
  {
    id: "KRAVINGS",
    name: "Kravings",
    x: 50,
    y: 65,
    eyebrow: "Eatery · COS Complex",
    images: ["images/kravings.jpg"],
    description: "A favorite student food joint located at the COS complex, famous for its quick bites, refreshing beverages, and late-afternoon snacks.",
    facts: {
    "Type": "Café & Fast Food",
    "Location": "COS Complex"
  }
  },
  {
    id: "LT",
  name: "Learning Theatre",
  x: 65,
  y: 51.5,
  eyebrow: "Academic Infrastructure · TIET",
  images: ["images/learning-theatre.jpg"],
  description: "State-of-the-art, tiered lecture halls featuring modern acoustics, advanced projection systems, and interactive layouts designed for an immersive lecture experience.",
  facts: {
    "Type": "Smart Lecture Halls",
    "Design": "Tiered / Amphitheater Style"
  }
},
{
  id: "DEAN_VISITORS",
  name: "Dean's Office & Visitor's Lounge",
  x: 72,
  y: 49,
  eyebrow: "Administration & Hospitality · TIET",
  images: ["images/dean-visitors.png"],
  description: "The central administrative hub for student welfare and activities, featuring a premium waiting lounge to receive parents, official guests, and recruiters.",
  facts: {
    "Location": "Administrative Block",
    "Purpose": "Student Affairs & Guest Reception"
  }
},
{
  id: "HEALTH_CENTRE",
  name: "Health Centre",
  x: 63,
  y: 31.5,
  eyebrow: "Medical & Wellness · TIET",
  images: ["images/health-centre.png"],
  description: "The campus medical facility providing 24/7 emergency medical care, general OPD consultations, routine checkups, and ambulance services for all students and staff.",
  facts: {
    "Availability": "24/7 Medical Care",
    "Services": "OPD, Emergency & Ambulance"
  }
},
{
  id: "MECHANICAL_WORKSHOP",
  name: "Mechanical Engineering Workshop",
  x: 72.5,
  y: 58,
  eyebrow: "Academic & Practical Training · TIET",
  images: ["images/mechanical-workshop.jpg"],
  description: "A sprawling hands-on training facility equipped with industrial machinery, welding bays, foundry setups, and lathe sections where students learn core manufacturing and fabrication skills.",
  facts: {
    "Department": "Mechanical Engineering",
    "Focus": "Hands-on Engineering & Fabrication"
  }
},
{
  id: "ELC_BUILDING",
  name: "Experiential Learning Centre (ELC)",
  x: 82.5,
  y: 58,
  eyebrow: "Innovation & Incubation · TIET",
  images: ["images/elc-building.jpg"],
  description: "A state-of-the-art facility focused on hands-on engineering, creative design, and entrepreneurial prototyping. It features maker spaces, high-tech labs, and co-working areas to turn student ideas into real-world projects.",
  facts: {
    "Purpose": "Experiential Learning & Innovation",
    "Facilities": "Maker Spaces & Prototyping Labs"
  }
},
{
  id: "VENTURE_LAB",
  name: "Venture Lab",
  x: 72,
  y: 37,
  eyebrow: "Innovation & Entrepreneurship · TIET",
  images: ["images/venture-lab.png"],
  description: "The startup incubator and acceleration hub at Thapar, dedicated to nurturing student entrepreneurs with mentorship, seed funding, co-working spaces, and legal support to launch scalable businesses.",
  facts: {
    "Purpose": "Startup Incubation & Funding",
    "Focus": "Entrepreneurship & Commercialization"
  }
},
{
  id: "SWIMMING_POOL",
  name: "Swimming Pool",
  x: 47,
  y: 53,
  eyebrow: "Sports & Recreation · TIET",
  images: ["images/swimming.jpeg"],
  description: "A beautifully maintained, standard competitive swimming pool equipped with clean filtration systems, shower rooms, and training lanes for recreation, fitness, and inter-hostel aquatic events.",
  facts: {
    "Type": "Outdoor Standard Pool",
    "Activities": "Recreational & Competitive Swimming"
  }
},
{
  id: "TAN",
  name: "Teaching and Academic Network (TAN)",
  x: 58,
  y: 65,
  eyebrow: "Academic Infrastructure · TIET",
  images: ["images/tan-building.jpg"],
  description: "A cutting-edge academic wing housing smart classrooms advanced computer centers and collaborative spaces designed to optimize digital learning and faculty-student interaction",
  facts: {
    "Purpose": "Digital Learning & Modern Lectures",
    "Facilities": "Smart Classrooms & Computer Labs"
  }
},
{
  id: "HOSTEL_F",
  name: "Hostel F",
  x: 55,
  y: 65,
  eyebrow: "Student Accommodation · TIET",
  images: ["campus-map.jpg"],
  description: "One of the established boys hostels at Thapar providing a comfortable residential environment with lush green lawns spacious common areas and clean dining facilities",
  facts: {
    "Type": "Boys Hostel",
    "Amenities": "Mess Common Room & Wi-Fi"
  }
},
{
  id: "G_BLOCK",
  name: "G Block",
  x: 63,
  y: 65,
  eyebrow: "Academic Block · TIET",
  images: ["images/g-block.jpg"],
  description: "A prominent academic block housing multiple department classrooms faculty rooms and modern engineering laboratories designed for interactive technical education",
  facts: {
    "Type": "Academic & Research Building",
    "Facilities": "Classrooms Labs & Faculty Cabins"
  }
},
{
  id: "MAIN_AUDI",
  name: "Main Auditorium",
  x: 68.5,
  y: 89,
  eyebrow: "Cultural & Events · TIET",
  images: ["images/main-auditorium.jpg"],
  description: "The premier indoor event venue at Thapar featuring a massive seating capacity high-end acoustics and modern staging systems for convocations cultural performances and guest lectures",
  facts: {
    "Type": "Indoor Auditorium",
    "Purpose": "Convocations Fests & Mega Events"
  }
},
{
  id: "B_BLOCK",
  name: "B Block",
  x: 71,
  y: 74,
  eyebrow: "Academic Block · TIET",
  images: ["images/b block.jpeg"],
  description: "One of the legacy academic blocks housing the Electrical and Instrumentation Engineering Department (EIED) along with core foundation labs and lecture halls",
  facts: {
    "Department": "Electrical and Instrumentation Engineering",
    "Facilities": "Lecture Rooms & Electrical Labs"
  }
},
{
  id: "D_BLOCK",
  name: "D Block",
  x: 71,
  y: 65,
  eyebrow: "Academic Block · TIET",
  images: ["images/d block.jpeg"],
  description: "A key academic block housing the Civil Engineering Department along with computing laboratories lecture rooms and faculty offices",
  facts: {
    "Department": "Civil Engineering & Computer Science",
    "Facilities": "Structural Labs & Computing Centres"
  }
},
{
  id: "E_BLOCK",
  name: "E Block",
  x: 75.5,
  y: 71.5,
  eyebrow: "Academic Block · TIET",
  images: ["images/e-block.jpg"],
  description: "A major academic block housing the Electronics and Communication Engineering department along with advanced embedded systems and chemical engineering labs",
  facts: {
    "Department": "Electronics & Chemical Engineering",
    "Facilities": "Hardware Labs & Research Centres"
  }
},
{
  id: "F_BLOCK",
  name: "F Block",
  x: 75.5,
  y: 66.5,
  eyebrow: "Academic Block · TIET",
  images: ["images/f-block.jpg"],
  description: "An academic building mainly utilized for Computer Science lectures tutorial sessions and faculty interaction rooms",
  facts: {
    "Department": "Computer Science Engineering",
    "Facilities": "Tutorial Rooms & Faculty Cabins"
  }
},
{
  id: "H_BLOCK",
  name: "H Block",
  x: 78.5,
  y: 79.5,
  eyebrow: "Academic Block · TIET",
  images: ["images/h-block.png"],
  description: "The academic block dedicated to Chemistry and Biochemistry housing comprehensive wet labs research apparatus and foundational science lecture halls",
  facts: {
    "Department": "School of Chemistry & Sciences",
    "Facilities": "Chemistry Labs & Research Wings"
  }
},
{
  id: "DIRECTORATE",
  name: "Directorate Office",
  x: 73,
  y: 78,
  eyebrow: "Apex Administration · TIET",
  images: ["images/directorate-1.png", "images/directorate-2.png"],
  description: "The highest administrative office at Thapar housing the Director and leadership team responsible for strategic vision institutional growth and policy decisions",
  facts: {
    "Location": "Main Administrative Block",
    "Purpose": "Apex Executive & Leadership"
  }
},
{
    id: "hostelM",
    name: "Hostel M — Anantam Hall",
    x: 20.7,
    y: 70.5,
    eyebrow: "Hostel · Boys",
    images: ["images/hostel-m-1.jpg", "images/hostel-m-2.png"],
    description:
      "Anantam Hall is one of the residential halls in the western hostel cluster, close to Shiv Mandir, the Gurudwara, and the Western Gate.",
    facts: { "Total Capacity": "1148" }
  },
  {
    id: "hostelD",
    name: "Hostel D — Neeram Hall",
    x: 15.9,
    y: 84.5,
    eyebrow: "Hostel · Boys",
    images: ["images/hostel-d.jpg"],
    description:
      "Neeram Hall is the latest addition to the exceptional range of hostel facilities. This 928-seater hostel provides double-seater rooms with shared washrooms for boys. Each room is fully furnished, with a study table, chair, wardrobe, bookrack, shoe rack, mattress, geyser, curtains, and dustbins. Students also benefit from amenities such as water coolers and RO systems for their convenience. The hostel features four elevators, ensuring easy access to all floors, with power backup available in emergencies.",
    facts: { "Total Capacity": "928" }
  },
  {
    id: "hostelC",
    name: "Hostel C — Prithvi Hall",
    x: 20.7,
    y: 84.5,
    eyebrow: "Hostel · Boys",
    images: ["images/hostel-c.jpg"],
    description:
      "Prithvi Hall is one of the oldest hostels equipped with modern amenities. With a total capacity of 387, the hostel offers air-conditioned accommodation in two-seater and three-seater rooms, each featuring a shared washroom for students.",
    facts: { "Total Capacity": "387" }
  },
  {
    id: "hostelO",
    name: "Hostel O — Vyom Hall",
    x: 27.9,
    y: 84.5,
    eyebrow: "Hostel · Boys",
    images: ["images/hostel-o.jpg"],
    description:
      "Vyom Hall is the latest addition to the exceptional range of hostel facilities on the Thapar Institute campus. This 928-seater hostel provides double-seater rooms with shared washrooms for boys.",
    facts: { "Total Capacity": "928" }
  },
  {
    id: "hostelB",
    name: "Hostel B — Amritam Hall",
    x: 31.5,
    y: 82.7,
    eyebrow: "Hostel · Boys",
    images: ["images/hostel-b.jpg"],
    description:
      "Amritam Hall offers a comfortable and enjoyable student environment with its easy-going and relaxing atmosphere.",
    facts: { "Total Capacity": "724" }
  },
  {
    id: "hostelA",
    name: "Hostel A — Agira Hall",
    x: 41,
    y: 82.7,
    eyebrow: "Hostel · Boys",
    images: ["images/hostel-a.jpg"],
    description:
      "Agira Hall is the latest addition to the exceptional range of hostel facilities. This 928-seater hostel provides double-seater rooms with shared washrooms for boys.",
    facts: { "Total Capacity (Single Rooms)": "928" }
  },
  {
    id: "hostelJ",
    name: "Hostel J — Tejas Hall",
    x: 31.5,
    y: 66,
    eyebrow: "Hostel · Boys",
    images: ["images/hostel-j.jpg"],
    description:
      "Tejas Hall is a multistoried boys hostel at Thapar Institute of Engineering & Technology, offering state-of-the-art facilities. It is considered one of the finest hostels designed to provide residents with a comfortable and convenient living experience.",
    facts: { "Total Capacity": "1170" }
  },
  {
    id: "hostelH",
    name: "Hostel H — Vyan Hall",
    x: 41,
    y: 66,
    eyebrow: "Hostel · Boys",
    images: ["images/hostel-h.jpg"],
    description:
      "Vyan Hall is a spacious and well-equipped hostel providing ample space for residents. Sixty of its rooms, housing 240 students, are air-conditioned, offering an added level of comfort.",
    facts: { "Total Capacity": "680" }
  },
  {
    id: "hostelK",
    name: "Hostel K — Ambaram Hall",
    x: 36.3,
    y: 14.3,
    eyebrow: "Hostel · Boys",
    images: ["images/hostel-k.jpg"],
    description:
      "Ambaram Hall is a well-equipped hostel that offers comfortable accommodation for students, close to the Polytechnic Gate and the sports zone.",
    facts: { "Total Capacity": "600" }
  },
  {
    id: "hostelL",
    name: "Hostel L — Viyat Hall",
    x: 50.8,
    y: 15.3,
    eyebrow: "Hostel · Boys",
    images: ["images/hostel-l.jpg"],
    description:
      "Viyat Hall is a student residential facility at Thapar Institute of Engineering and Technology in Patiala. This 300-bedded hostel offers a comfortable and modern living experience to its residents.",
    facts: { "Total Capacity": "300" }
  }


  // Add more blocks here following the same shape ↑
];

// ============================================================
// ELEMENT REFERENCES
// ============================================================
const mapFrame = document.getElementById("mapFrame");
const tooltip = document.getElementById("tooltip");
const tooltipName = document.getElementById("tooltipName");

const overlay = document.getElementById("modalOverlay");
const modalClose = document.getElementById("modalClose");
const modalImage = document.getElementById("modalImage");
const modalEyebrow = document.getElementById("modalEyebrow");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalFacts = document.getElementById("modalFacts");
const modalPrev = document.getElementById("modalPrev");
const modalNext = document.getElementById("modalNext");
const modalDots = document.getElementById("modalDots");

// Gallery state for the currently open location
let currentImages = [];
let currentImageIndex = 0;

// ============================================================
// RENDER MARKERS FROM LOCATIONS
// ============================================================
function renderMarkers() {
  LOCATIONS.forEach((loc) => {
    const marker = document.createElement("button");
    marker.className = "marker";
    marker.id = `marker-${loc.id}`;
    marker.dataset.locationId = loc.id;
    marker.style.setProperty("--x", `${loc.x}%`);
    marker.style.setProperty("--y", `${loc.y}%`);
    marker.setAttribute("aria-haspopup", "dialog");
    marker.setAttribute("aria-label", `${loc.name} — show details`);

    marker.innerHTML = `
      <span class="marker-dot"></span>
      <span class="marker-pulse" aria-hidden="true"></span>
    `;

    marker.addEventListener("mouseenter", () => showTooltip(marker, loc));
    marker.addEventListener("mouseleave", hideTooltip);
    marker.addEventListener("focus", () => showTooltip(marker, loc));
    marker.addEventListener("blur", hideTooltip);
    marker.addEventListener("click", () => openModal(loc));

    mapFrame.appendChild(marker);
  });
}

// ============================================================
// TOOLTIP (hover preview)
// ============================================================
function showTooltip(marker, loc) {
  tooltipName.textContent = loc.name;

  const rect = marker.getBoundingClientRect();
  tooltip.style.left = `${rect.left + rect.width / 2}px`;
  tooltip.style.top = `${rect.top}px`;
  tooltip.classList.add("is-visible");
}

function hideTooltip() {
  tooltip.classList.remove("is-visible");
}

// ============================================================
// MODAL (click detail)
// ============================================================
function openModal(loc) {
  currentImages = loc.images && loc.images.length ? loc.images : ["campus-map.jpg"];
  currentImageIndex = 0;
  renderGalleryImage();

  modalEyebrow.textContent = loc.eyebrow || "";
  modalTitle.textContent = loc.name;
  modalDescription.textContent = loc.description || "";

  modalFacts.innerHTML = "";
  Object.entries(loc.facts || {}).forEach(([label, value]) => {
    const dt = document.createElement("dt");
    dt.textContent = label;
    const dd = document.createElement("dd");
    dd.textContent = value;
    modalFacts.appendChild(dt);
    modalFacts.appendChild(dd);
  });

  hideTooltip();
  overlay.classList.add("is-open");
  document.body.style.overflow = "hidden";
  modalClose.focus();
}

// ============================================================
// IMAGE GALLERY (prev/next through loc.images)
// ============================================================
function renderGalleryImage() {
  modalImage.src = currentImages[currentImageIndex];
  modalImage.alt = modalTitle.textContent;

  const hasMultiple = currentImages.length > 1;
  modalPrev.hidden = !hasMultiple;
  modalNext.hidden = !hasMultiple;
  modalDots.hidden = !hasMultiple;

  if (hasMultiple) {
    modalDots.innerHTML = "";
    currentImages.forEach((_, i) => {
      const dot = document.createElement("span");
      dot.className = "modal-dot" + (i === currentImageIndex ? " is-active" : "");
      modalDots.appendChild(dot);
    });
  }
}

function showNextImage() {
  if (currentImages.length < 2) return;
  currentImageIndex = (currentImageIndex + 1) % currentImages.length;
  renderGalleryImage();
}

function showPrevImage() {
  if (currentImages.length < 2) return;
  currentImageIndex = (currentImageIndex - 1 + currentImages.length) % currentImages.length;
  renderGalleryImage();
}

function closeModal() {
  overlay.classList.remove("is-open");
  document.body.style.overflow = "";
}

// ============================================================
// GLOBAL EVENTS
// ============================================================
modalClose.addEventListener("click", closeModal);
modalNext.addEventListener("click", showNextImage);
modalPrev.addEventListener("click", showPrevImage);

overlay.addEventListener("click", (e) => {
  if (e.target === overlay) closeModal();
});

document.addEventListener("keydown", (e) => {
  if (!overlay.classList.contains("is-open")) return;
  if (e.key === "Escape") closeModal();
  if (e.key === "ArrowRight") showNextImage();
  if (e.key === "ArrowLeft") showPrevImage();
});

window.addEventListener("scroll", hideTooltip, { passive: true });
window.addEventListener("resize", hideTooltip);

// ============================================================
// INIT
// ============================================================
renderMarkers();
