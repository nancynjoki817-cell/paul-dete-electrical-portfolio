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
    description: "Complete house wiring, socket and switch installations, lighting layouts, and circuit breaker panel setups for modern homes.",
    features: ["Whole-house wiring", "Breaker box upgrades", "Smart home prep"]
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
    description: "Heavy machinery power wiring, motor controls, electrical distribution panel maintenance, and preventative servicing.",
    features: ["Motor controls", "Preventative maintenance", "Heavy equipment wiring"]
  },
  {
    id: "troubleshooting",
    icon: "Activity",
    title: "Fault Diagnosis & Troubleshooting",
    description: "Rapid, accurate isolation of electrical short circuits, voltage drops, breaker tripping, and wire degradation using digital instruments.",
    features: ["Precision multimeter testing", "Short circuit tracing", "Thermal inspection"]
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
      { name: "Electrical Schematic Diagrams", level: 88, icon: "Layers" },
      { name: "Electrical Equipment Testing", level: 95, icon: "CheckCircle" }
    ]
  },
  {
    category: "Safety & Renewable Energy",
    skills: [
      { name: "Electrical Safety Procedures", level: 99, icon: "ShieldCheck" },
      { name: "Solar Energy & PV Systems", level: 94, icon: "Sun" },
      { name: "Earthing & Grounding Systems", level: 93, icon: "Anchor" },
      { name: "CCTV & Security Wiring", level: 89, icon: "Camera" }
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "Residential 3-Bedroom Villa Wiring",
    category: "Residential",
    image: "/images/piping-1.jpeg.jpeg",
    description: "Executed complete full-house electrical conduit piping, cable routing, main consumer unit setup, and decorative LED ambient lighting.",
    technologies: ["Sub-distribution Panel", "PVC Conduit Piping", "LED Smart Switches", "Ground Bonding"],
    client: "Private Homeowner",
    year: "2026",
    details: "Designed and installed a complete safe electrical grid for a modern 3-bedroom villa including dedicated power lines for high-load appliances."
  },
  {
    id: 2,
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
    id: 3,
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
    id: 4,
    title: "Industrial Main Distribution Board (MDB) Upgrade",
    category: "Industrial",
    image: "/images/meter-3.jpg.jpeg",
    description: "Upgraded aging fuses with modern molded case circuit breakers (MCCB) and residual current circuit breakers (RCCB) for enhanced plant safety.",
    technologies: ["MCCB Breakers", "RCCB Protection", "Copper Busbars", "Phase Indicators"],
    client: "Manufacturing Facility",
    year: "2025",
    details: "Upgraded industrial control switches and introduced overload relays to prevent motor burnouts."
  },
  {
    id: 5,
    title: "Perimeter Security & CCTV Power Infrastructure",
    category: "Commercial",
    image: "/images/lighiting-4.jpeg.jpeg",
    description: "Designed weather-resistant outdoor conduit wiring for high-output floodlights and security camera power supplies.",
    technologies: ["Outdoor Floodlights", "Weatherproof Junction Boxes", "CCTV Power Supplies"],
    client: "Gated Community",
    year: "2024",
    details: "Ensured uninterrupted outdoor illumination with automated twilight dusk-to-dawn sensors and armored cable runs."
  },
  {
    id: 6,
    title: "Complex Electrical Fault Isolation & Earthing Test",
    category: "Troubleshooting",
    image: "/images/wiring-1.jpeg.jpeg",
    description: "Isolated a dangerous hidden earth leakage fault causing frequent breaker tripping in a commercial complex.",
    technologies: ["Multimeter Insulation Tester", "Earth Resistance Meter", "Circuit Tracer"],
    client: "Retail Complex",
    year: "2024",
    details: "Restored full operational safety by re-bonding the primary earth electrode and replacing compromised subterranean cable feeds."
  }
];

export const galleryItems = [
  { id: 1, src: "/images/piping-1.jpeg.jpeg", title: "Conduit Piping Route", category: "Piping & Wiring" },
  { id: 2, src: "/images/lighiting-7.jpeg.jpeg", title: "Commercial LED Ceiling Grid", category: "Lighting" },
  { id: 3, src: "/images/meter-1.jpg.jpeg", title: "Digital Meter & Breaker Board", category: "Panels & Meters" },
  { id: 4, src: "/images/piping-2.jpeg.jpeg", title: "Wall Channel Piping Installation", category: "Piping & Wiring" },
  { id: 5, src: "/images/lighiting-4.jpeg.jpeg", title: "Architectural Recessed Lighting", category: "Lighting" },
  { id: 6, src: "/images/meter-2.jpg.jpeg", title: "Utility Energy Meter Box", category: "Panels & Meters" },
  { id: 7, src: "/images/wiring-1.jpeg.jpeg", title: "Control Panel Internal Wiring", category: "Piping & Wiring" },
  { id: 8, src: "/images/lighiting-6.jpeg.jpeg", title: "Warm Ambient Living Room Lights", category: "Lighting" },
  { id: 9, src: "/images/meter-3.jpg.jpeg", title: "3-Phase Industrial Breaker Board", category: "Panels & Meters" },
  { id: 10, src: "/images/piping-5.jpeg (2).jpeg", title: "Floor & Slab Piping Network", category: "Piping & Wiring" },
  { id: 11, src: "/images/lighiting-5.jpeg.jpeg", title: "Feature Pendant Light Installation", category: "Lighting" },
  { id: 12, src: "/images/piping-3.jpeg.jpeg", title: "Conduit Junction Boxes", category: "Piping & Wiring" }
];

export const testimonials = [
  {
    quote: "Paul Dete did an excellent job rewiring our house. Very professional, punctual, and reliable!",
    author: "Dancan D.",
    role: "Homeowner",
    rating: 5
  },
  {
    quote: "Efficient and highly knowledgeable electrical engineer. Highly recommended for commercial projects and power distribution setups.",
    author: "Fredrick Njoroge",
    role: "Facility Manager",
    rating: 5
  },
  {
    quote: "Installed a solar inverter and backup system at my home. Everything works perfectly and safely. Great peace of mind!",
    author: "Mitchell Atieno",
    role: "Residential Client",
    rating: 5
  },
  {
    quote: "Paul installed outdoor security lighting at our property. The quality of work was top notch and he gave extremely useful safety advice.",
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
    title: "5 Critical Electrical Safety Tips Every Homeowner Must Know",
    excerpt: "Learn how to spot early signs of electrical overload, faulty wiring, and trip risks before they lead to costly damage or safety hazards.",
    date: "October 2026",
    readTime: "4 min read",
    category: "Electrical Safety",
    image: "/images/lighiting-7.jpeg.jpeg"
  },
  {
    id: 2,
    title: "Why Upgrading Your Electrical Breaker Panel Saves Money",
    excerpt: "Old fuse boxes waste energy and can fail to protect modern electronics. Discover the benefits of modern MCCB/RCCB circuit breaker panels.",
    date: "September 2026",
    readTime: "6 min read",
    category: "Energy Efficiency",
    image: "/images/meter-1.jpg.jpeg"
  },
  {
    id: 3,
    title: "Transitioning to Solar Power: A Beginner’s Guide to Inverters & Storage",
    excerpt: "Understand how hybrid solar systems combine utility grid energy with solar PV panels and lithium batteries for 24/7 reliability.",
    date: "August 2026",
    readTime: "5 min read",
    category: "Solar Energy",
    image: "/images/meter-3.jpg.jpeg"
  }
];
