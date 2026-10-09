export const personalInfo = {
  name: "Paul Dete",
  title: "Electrical Engineer",
  subtitle: "POWERING SAFE & SMART SOLUTIONS",
  headlineMain: "I’m an Electrical Engineer building reliable and efficient systems.",
  bio: "Paul Dete is a highly skilled and experienced Electrical Engineer with a passion for delivering safe, reliable, and energy-efficient electrical solutions. With extensive experience across residential, commercial, and industrial electrical projects, he specializes in power wiring, lighting design, solar PV energy systems, circuit protection, and high-precision fault diagnosis.",
  detailedAbout: "Whether upgrading complex electrical distribution panels, installing off-grid solar solutions, or diagnosing hidden wiring faults, Paul delivers dependable, code-compliant engineering services. Known for meticulous attention to detail, proactive problem-solving, and strict safety procedures, he combines technical expertise with practical innovations to save energy and optimize electrical infrastructure.",
  phone: "+254700774437",
  email: "detepaul23@gmail.com",
  location: "Nairobi, Kenya",
  whatsappUrl: "https://wa.me/254700774437?text=Hello%20Paul%20Dete,%20I%20saw%20your%20Electrical%20Engineering%20portfolio%20and%20would%20like%20to%20hire%20you.",
  cvFileName: "Paul_Dete_Electrical_Engineer_CV.pdf",
  stats: [
    { number: "8+", label: "Years Experience" },
    { number: "250+", label: "Completed Projects" },
    { number: "100%", label: "Safety Record" },
    { number: "180+", label: "Satisfied Clients" }
  ]
};

export const trustHighlights = [
  {
    icon: "Shield",
    title: "Safe",
    subtitle: "Safety-first solutions",
    description: "Built strictly to national electrical codes and international safety standards."
  },
  {
    icon: "Zap",
    title: "Reliable",
    subtitle: "Quality workmanship",
    description: "High-grade components, robust wiring, and zero-downtime maintenance."
  },
  {
    icon: "Leaf",
    title: "Efficient",
    subtitle: "Smart energy solutions",
    description: "Optimized power consumption, solar integration, and reduced electricity overheads."
  }
];

export const services = [
  {
    id: "residential",
    icon: "Home",
    title: "Residential Electrical Installation",
    description: "Complete house wiring, socket and switch installations, architectural villa lighting, and circuit breaker panel setups for modern homes.",
    features: ["Whole-house wiring", "Architectural LED illumination", "Breaker box upgrades"]
  },
  {
    id: "commercial",
    icon: "Building2",
    title: "Commercial Electrical Systems",
    description: "Scalable power distribution systems, high-efficiency commercial LED retrofits, emergency power setups, and office wiring.",
    features: ["3-Phase power setups", "Commercial lighting", "Emergency backup"]
  },
  {
    id: "industrial",
    icon: "Factory",
    title: "Industrial Electrical Maintenance",
    description: "Heavy machinery power wiring, motor controls, water pump float switch automation, and distribution panel maintenance.",
    features: ["Pump float switch controls", "Preventative maintenance", "Heavy equipment wiring"]
  },
  {
    id: "troubleshooting",
    icon: "Activity",
    title: "Fault Diagnosis & Troubleshooting",
    description: "Rapid, accurate isolation of electrical short circuits, digital voltage protector installation, breaker tripping, and wire degradation.",
    features: ["Voltage surge protectors", "Short circuit tracing", "Thermal inspection"]
  },
  {
    id: "rewiring",
    icon: "Cpu",
    title: "Electrical Wiring & Rewiring",
    description: "Upgrading obsolete wiring, replacing dangerous fuses with modern circuit breakers, and conduit piping installation.",
    features: ["Conduit piping", "Old fuse upgrades", "Safety ground bonding"]
  },
  {
    id: "solar",
    icon: "Sun",
    title: "Solar Power & Energy Solutions",
    description: "Custom solar PV design, inverter configuration, deep-cycle battery banks, and hybrid off-grid/grid-tied power systems.",
    features: ["PV panel array setup", "Hybrid inverter tuning", "Battery storage setup"]
  },
  {
    id: "inspection",
    icon: "ShieldCheck",
    title: "Electrical Inspection & Safety",
    description: "Comprehensive safety audits, grounding system testing, lightning protection, and compliance certification.",
    features: ["Safety compliance audit", "Earthing & bonding", "Load analysis report"]
  }
];

export const skillCategories = [
  {
    category: "Core Electrical Skills",
    skills: [
      { name: "Electrical Installation", level: 95, icon: "Wrench" },
      { name: "Electrical Troubleshooting", level: 98, icon: "Search" },
      { name: "Electrical Maintenance", level: 92, icon: "Settings" },
      { name: "Circuit Breakers & Protection", level: 94, icon: "Shield" }
    ]
  },
  {
    category: "Design & Engineering",
    skills: [
      { name: "Electrical Circuit Design", level: 90, icon: "FileText" },
      { name: "Power Distribution Systems", level: 92, icon: "Grid" },
      { name: "Water Pump Automation & Float Switches", level: 95, icon: "Cpu" },
      { name: "Electrical Equipment Testing", level: 95, icon: "CheckCircle" }
    ]
  },
  {
    category: "Safety & Renewable Energy",
    skills: [
      { name: "Electrical Safety Procedures", level: 99, icon: "ShieldCheck" },
      { name: "Solar Energy & PV Systems", level: 94, icon: "Sun" },
      { name: "Digital Surge & Voltage Protectors", level: 96, icon: "Anchor" },
      { name: "Architectural Exterior Lighting", level: 93, icon: "Camera" }
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "Luxury Mansion Exterior Architectural Illumination",
    category: "Residential",
    image: "/images/luxury-villa-exterior-lighting.jpg",
    description: "Designed and engineered the complete exterior facade lighting scheme for a multi-story luxury villa, featuring warm LED accent sconces, pillar uplighting, balcony perimeters, and dusk-to-dawn sensors.",
    technologies: ["Warm LED Sconces", "Pillar Uplights", "Architectural Facade Fixtures", "Automatic Twilight Sensors"],
    client: "Private Residential Estate",
    year: "2026",
    details: "Created a stunning nighttime visual identity while ensuring energy-efficient LED consumption and IP66 weatherproof exterior conduit routing."
  },
  {
    id: 2,
    title: "Digital Over/Under Voltage Protector & Keypad Meter Box Setup",
    category: "Industrial",
    image: "/images/meter-box-digital-protector.jpg",
    description: "Installed a high-precision digital voltage protector displaying real-time line voltage (200V), integrated with a Hexing CIU EV100 keypad meter, sub-circuit MCBs, and heavy-duty phase distribution.",
    technologies: ["Digital Voltage Protector", "Hexing CIU Keypad Meter", "Residual Circuit Breakers", "Wire Termination"],
    client: "Commercial & Sub-distribution Utility",
    year: "2026",
    details: "Protects sensitive appliances and commercial devices against sudden utility grid voltage spikes, brownouts, and phase imbalance."
  },
  {
    id: 3,
    title: "Automatic Overhead Water Tank Float Switch Automation",
    category: "Troubleshooting",
    image: "/images/water-float-switch-sensor.jpg",
    description: "Wired an automatic float switch sensor system for overhead water tank pump control, eliminating dry-run motor burnout and preventing tank overflows.",
    technologies: ["Float Switch Sensor", "Submersible Cable", "Waterproof Junctions", "Pump Starter Relay"],
    client: "Residential Complex",
    year: "2026",
    details: "Automates the filling cycle of high-capacity water tanks with heavy-duty rubber-coated submersible wiring."
  },
  {
    id: 4,
    title: "Commercial LED & Panel Modernization",
    category: "Commercial",
    image: "/images/lighiting-7.jpeg.jpeg",
    description: "Transformed an outdated office space with high-efficiency energy-saving LED lighting panels and dual-tariffs sub-metering.",
    technologies: ["3-Phase Panel Board", "Energy-saving LEDs", "Digital Power Meters"],
    client: "Nairobi Commercial Plaza",
    year: "2025",
    details: "Reduced energy overheads by 35% through precision load distribution and installation of commercial motion-activated LED fixtures."
  },
  {
    id: 5,
    title: "Hybrid Solar Power & Battery Storage System",
    category: "Solar",
    image: "/images/meter-1.jpg.jpeg",
    description: "Off-grid 5kW hybrid solar inverter setup with lithium battery storage and automatic transfer switch for seamless power backup.",
    technologies: ["5kW Solar Inverter", "LiFePO4 Batteries", "Automatic Transfer Switch"],
    client: "Residential Estate",
    year: "2025",
    details: "Provides 100% uninterrupted electricity for essential home circuits during utility outages with zero manual intervention required."
  },
  {
    id: 6,
    title: "Conduit Piping & Slab Wiring Route Network",
    category: "Residential",
    image: "/images/piping-1.jpeg.jpeg",
    description: "Executed complete full-house electrical conduit piping, cable routing, main consumer unit setup, and decorative LED ambient lighting.",
    technologies: ["Sub-distribution Panel", "PVC Conduit Piping", "LED Smart Switches", "Ground Bonding"],
    client: "Private Homeowner",
    year: "2025",
    details: "Designed and installed a complete safe electrical grid for a modern 3-bedroom villa including dedicated power lines for high-load appliances."
  }
];

export const galleryItems = [
  { id: 1, src: "/images/luxury-villa-exterior-lighting.jpg", title: "Luxury Villa Facade & Architectural Lighting", category: "Lighting & Facades", isNew: true },
  { id: 2, src: "/images/meter-box-digital-protector.jpg", title: "Keypad Energy Meter & Digital Voltage Protector Box", category: "Panels & Meters", isNew: true },
  { id: 3, src: "/images/water-float-switch-sensor.jpg", title: "Overhead Tank Automatic Float Switch Wiring", category: "Automation & Controls", isNew: true },
  { id: 4, src: "/images/water-float-switch-1.jpg", title: "Water Level Sensor Cable Routing", category: "Automation & Controls", isNew: true },
  { id: 5, src: "/images/piping-1.jpeg.jpeg", title: "Conduit Piping Route", category: "Piping & Wiring" },
  { id: 6, src: "/images/lighiting-7.jpeg.jpeg", title: "Commercial LED Ceiling Grid", category: "Lighting & Facades" },
  { id: 7, src: "/images/meter-1.jpg.jpeg", title: "Digital Meter & Breaker Board", category: "Panels & Meters" },
  { id: 8, src: "/images/piping-2.jpeg.jpeg", title: "Wall Channel Piping Installation", category: "Piping & Wiring" },
  { id: 9, src: "/images/lighiting-4.jpeg.jpeg", title: "Architectural Recessed Lighting", category: "Lighting & Facades" },
  { id: 10, src: "/images/meter-2.jpg.jpeg", title: "Utility Energy Meter Box", category: "Panels & Meters" },
  { id: 11, src: "/images/wiring-1.jpeg.jpeg", title: "Control Panel Internal Wiring", category: "Piping & Wiring" },
  { id: 12, src: "/images/lighiting-6.jpeg.jpeg", title: "Warm Ambient Living Room Lights", category: "Lighting & Facades" }
];

export const siteVideos = [
  {
    id: 1,
    title: "Electrical Installation & Wiring Field Operations",
    description: "Live video demonstration of Paul Dete performing precision conduit routing, wire termination, and panel assembly.",
    src: "/videos/video.mp1.mp4",
    thumbnail: "/images/piping-1.jpeg.jpeg",
    duration: "Site Video 1"
  },
  {
    id: 2,
    title: "Meter Board & Voltage Protection Testing",
    description: "Detailed video walkthrough testing voltage levels, circuit breaker functionality, and energy meter setup.",
    src: "/videos/video.mp2.mp4",
    thumbnail: "/images/meter-box-digital-protector.jpg",
    duration: "Site Video 2"
  }
];

export const testimonials = [
  {
    quote: "Paul Dete did an excellent job rewiring our house and setting up our luxury exterior lighting. Very professional, punctual, and reliable!",
    author: "Dancan D.",
    role: "Homeowner",
    rating: 5
  },
  {
    quote: "Efficient and highly knowledgeable electrical engineer. Upgraded our commercial meter panel and installed digital voltage protectors flawlessly.",
    author: "Fredrick Njoroge",
    role: "Facility Manager",
    rating: 5
  },
  {
    quote: "Installed an automatic water tank float switch and a solar inverter system at my home. Everything works automatically and safely. Great peace of mind!",
    author: "Mitchell Atieno",
    role: "Residential Client",
    rating: 5
  },
  {
    quote: "Paul installed outdoor security and architectural facade lighting at our villa. The quality of work was top notch and he gave extremely useful safety advice.",
    author: "Ester Njeri",
    role: "Property Owner",
    rating: 5
  },
  {
    quote: "Paul quickly diagnosed and fixed a complex electrical fault that other technicians failed to resolve. Outstanding troubleshooting skills.",
    author: "Peter Otieno",
    role: "Business Owner",
    rating: 5
  },
  {
    quote: "We hired Paul to handle full electrical wiring at our new residential house. He explained everything clearly and ensured full code compliance.",
    author: "Mary W.",
    role: "Homeowner",
    rating: 5
  }
];

export const blogPosts = [
  {
    id: 1,
    title: "How Automatic Float Switches Protect Water Pumps & Save Electricity",
    excerpt: "Learn how installing a water level sensor switch automated pump operations, prevents dry running, and stops wasteful water tank overflows.",
    date: "October 2026",
    readTime: "4 min read",
    category: "Automation & Control",
    image: "/images/water-float-switch-sensor.jpg"
  },
  {
    id: 2,
    title: "Why You Need a Digital Voltage Protector For Your Appliances",
    excerpt: "Grid voltage surges and low-voltage brownouts can destroy sensitive equipment. Discover how digital voltage protectors safeguard your electrical investment.",
    date: "September 2026",
    readTime: "5 min read",
    category: "Electrical Safety",
    image: "/images/meter-box-digital-protector.jpg"
  },
  {
    id: 3,
    title: "Architectural Exterior Lighting: Transforming Villa Facades at Night",
    excerpt: "Explore best practices for designing IP66 weatherproof outdoor LED sconces, pillar uplighting, and automated dusk-to-dawn twilight controls.",
    date: "August 2026",
    readTime: "6 min read",
    category: "Lighting Design",
    image: "/images/luxury-villa-exterior-lighting.jpg"
  }
];
