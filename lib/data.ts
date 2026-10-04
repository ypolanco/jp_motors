import type { IconName } from "./icons";
import { images } from "./images";

// ---------- "What's going on with your car?" (home) ----------
// Written in the customer's words, not shop terms.
export const symptoms: { title: string; text: string; cta: string; href: string; icon: IconName; tint: string }[] = [
  { title: "My brakes squeak or grind", text: "Brakes are JP’s specialty. He’ll show you what’s worn and what isn’t.", cta: "Brake service", href: "/brakes", icon: "brakes", tint: "bg-butter" },
  { title: "I’m due for an oil change", text: "The right oil for your engine, a new filter, and a quick look-over while it’s up.", cta: "Oil & maintenance", href: "/maintenance", icon: "oil", tint: "bg-sky" },
  { title: "A warning light came on", text: "We find the actual cause instead of guessing and swapping parts.", cta: "Diagnostics", href: "/repairs", icon: "checkEngine", tint: "bg-peach" },
  { title: "I hear a clunk over bumps", text: "Rattles, clunks and a bouncy ride usually mean worn suspension parts.", cta: "Suspension & steering", href: "/repairs", icon: "suspension", tint: "bg-mint" },
  { title: "My car won’t start", text: "Battery, starter or something electrical — we’ll track it down.", cta: "Starting & electrical", href: "/repairs", icon: "battery", tint: "bg-lilac" },
  { title: "I just want a check-up", text: "Road trip coming up, or buying a used car? Get peace of mind first.", cta: "Inspections", href: "/maintenance", icon: "maintenance", tint: "bg-sand" },
];

// ---------- How a visit works (home) ----------
export const visitSteps = [
  { title: "Book a time", text: "Book online in a minute, or just give us a call. Tell us what’s going on in your own words." },
  { title: "We look, then we talk", text: "JP checks your car and explains what he found — plainly, with photos if it helps." },
  { title: "You decide", text: "You approve the price before any work starts. If something can wait, we’ll tell you." },
];

// ---------- Specialties (home) ----------
export const specialties = [
  {
    n: "01",
    icon: "brakes" as IconName,
    label: "Brake Service",
    title: "Stop With Confidence",
    photo: "Close-up: new rotor & caliper on the hub",
    photoSrc: images.brakeRotorCaliper,
    cta: "Explore Brake Services",
    href: "/brakes",
    items: [
      "Brake pad replacement",
      "Rotor replacement",
      "Brake inspections",
      "Brake fluid service",
      "Calipers",
      "Brake noise diagnosis",
      "Vibration diagnosis",
    ],
  },
  {
    n: "02",
    icon: "oil" as IconName,
    label: "Oil & Lube",
    title: "Keep It Running Right",
    photo: "Close-up: fresh oil pour, new filter",
    photoSrc: images.oilPour,
    cta: "Explore Oil & Maintenance",
    href: "/maintenance",
    items: [
      "Synthetic oil changes",
      "Conventional oil changes",
      "Oil filter replacement",
      "Fluid checks",
      "Lubrication",
      "Maintenance inspections",
    ],
  },
];

// ---------- Full-service grid (home) ----------
export type ServiceSummary = { title: string; icon: IconName; desc: string; href: string };

export const fullServices: ServiceSummary[] = [
  { title: "Diagnostics", icon: "diagnostics", desc: "Scan-tool data plus hands-on testing to find the actual cause, not just a code.", href: "/repairs" },
  { title: "Engine Repair", icon: "engine", desc: "Leaks, misfires, mounts, gaskets and the noises that shouldn’t be there.", href: "/repairs" },
  { title: "Suspension", icon: "suspension", desc: "Struts, shocks, control arms and bushings for a car that rides and tracks straight.", href: "/repairs" },
  { title: "Steering", icon: "steering", desc: "Tie rods, racks and ball joints when the wheel wanders, clunks or feels heavy.", href: "/repairs" },
  { title: "Battery & Electrical", icon: "battery", desc: "Batteries, starters, alternators, and tracing gremlins in the wiring.", href: "/repairs" },
  { title: "Tune-Ups", icon: "tuneup", desc: "Plugs, coils and filters that bring back smooth idle, power and mileage.", href: "/maintenance" },
  { title: "Preventative Maintenance", icon: "maintenance", desc: "Scheduled service by the book, so small problems don’t become big bills.", href: "/maintenance" },
  { title: "Check Engine Lights", icon: "checkEngine", desc: "Read the code, test the system, explain what it means before you pay.", href: "/repairs" },
  { title: "Belts & Hoses", icon: "belts", desc: "Serpentine belts, tensioners, radiator and heater hoses.", href: "/repairs" },
  { title: "Cooling Systems", icon: "cooling", desc: "Radiators, thermostats, water pumps and overheating diagnosis.", href: "/repairs" },
  { title: "General Auto Repair", icon: "general", desc: "If it’s on a car and it’s broken, ask. JP will tell you straight if it’s a fit.", href: "/repairs" },
];

// ---------- Services page catalog ----------
export const serviceCategories = ["Brakes", "Maintenance", "Engine", "Electrical", "Suspension", "Diagnostics", "Fluids"] as const;
export type ServiceCategory = (typeof serviceCategories)[number];

export const categoryIcon: Record<ServiceCategory, IconName> = {
  Brakes: "brakes",
  Maintenance: "maintenance",
  Engine: "engine",
  Electrical: "electrical",
  Suspension: "suspension",
  Diagnostics: "diagnostics",
  Fluids: "oil",
};

export type CatalogService = { category: ServiceCategory; title: string; desc: string; symptoms: string[] };

export const catalog: CatalogService[] = [
  { category: "Brakes", title: "Brake Pads & Rotors", desc: "Pads and rotors measured, then replaced or resurfaced, with hardware and slide pins serviced.", symptoms: ["Grinding or squealing", "Vibration when stopping", "Pad wear light"] },
  { category: "Brakes", title: "Calipers & Brake Lines", desc: "Sticking calipers, seized slide pins, and leaking or rusted lines.", symptoms: ["Pulls when braking", "One wheel runs hot", "Fluid near a wheel"] },
  { category: "Brakes", title: "Brake Inspection", desc: "Pads, rotors, fluid and lines measured, with a straight answer on what’s left.", symptoms: ["12k+ miles since a check", "New-to-you car", "Something feels off"] },
  { category: "Maintenance", title: "Oil & Filter Change", desc: "Synthetic, blend or conventional — the oil your manufacturer specs, not the cheapest jug.", symptoms: ["Oil-change light on", "Past due mileage", "Dark or low oil"] },
  { category: "Maintenance", title: "Tune-Up", desc: "Spark plugs, coils, air and cabin filters to restore idle, power and mileage.", symptoms: ["Rough idle", "Hesitation", "Dropping MPG"] },
  { category: "Maintenance", title: "Scheduled Maintenance", desc: "Manufacturer service intervals followed and logged for your records.", symptoms: ["30k / 60k / 90k due", "No service history", "Bought used"] },
  { category: "Engine", title: "Engine Repair", desc: "Gaskets, mounts, leaks, misfires and mechanical noise.", symptoms: ["Oil leaks", "Knocking or ticking", "Shaking at idle"] },
  { category: "Engine", title: "Belts & Hoses", desc: "Serpentine belts, tensioners, radiator and heater hoses.", symptoms: ["Squeal on startup", "Cracked belt", "Coolant smell"] },
  { category: "Engine", title: "Cooling System", desc: "Radiators, thermostats and water pumps — the parts that keep it from overheating.", symptoms: ["Temp gauge climbing", "Steam or puddles", "No cabin heat"] },
  { category: "Electrical", title: "Battery, Starter & Alternator", desc: "Load testing and replacement for starting and charging problems.", symptoms: ["Slow crank", "Battery light", "Dim lights"] },
  { category: "Electrical", title: "Electrical Diagnosis", desc: "Tracing shorts, parasitic drains and failed circuits.", symptoms: ["Dead overnight", "Accessories cut out", "Blown fuses"] },
  { category: "Suspension", title: "Shocks & Struts", desc: "Ride-control parts that keep the tires planted and stops short.", symptoms: ["Bouncy ride", "Nose-dive when braking", "Cupped tire wear"] },
  { category: "Suspension", title: "Steering & Front End", desc: "Tie rods, ball joints, control arms and steering racks.", symptoms: ["Wandering", "Clunks over bumps", "Loose steering"] },
  { category: "Diagnostics", title: "Check Engine Light", desc: "Codes read, systems tested, cause confirmed before any parts get ordered.", symptoms: ["Solid or flashing light", "Failed emissions", "Reduced power"] },
  { category: "Diagnostics", title: "Noise & Drivability", desc: "Road test and inspection for the problems that don’t set a code.", symptoms: ["Clunks, hums, whines", "Vibration at speed", "Stalling"] },
  { category: "Diagnostics", title: "No-Start Diagnosis", desc: "Fuel, spark, air or electrical — test it in order instead of guessing.", symptoms: ["Clicks, no crank", "Cranks, won’t start", "Starts then dies"] },
  { category: "Fluids", title: "Brake Fluid Service", desc: "Moisture-tested and flushed so the pedal stays firm under heat.", symptoms: ["Soft pedal", "Dark fluid", "2–3 years since flush"] },
  { category: "Fluids", title: "Coolant Service", desc: "Coolant tested, flushed and leak-checked.", symptoms: ["Running hot", "Low coolant", "Sweet smell"] },
  { category: "Fluids", title: "Transmission & Differential", desc: "Drain-and-fill per manufacturer spec.", symptoms: ["Harsh shifts", "Whine from the rear", "Never been changed"] },
];

// ---------- Why JP ----------
export const pillars = [
  { title: "Honest Diagnosis", text: "Explain what actually needs fixing and what can wait.", icon: "search" },
  { title: "Quality Work", text: "Repairs done carefully instead of rushed.", icon: "shield" },
  { title: "Clear Communication", text: "Customers understand the issue before approving work.", icon: "message" },
  { title: "Mechanic You Can See", text: "JP also shares repairs, maintenance tips, and automotive knowledge publicly through his YouTube channel.", icon: "youtube" },
] as const;

// ---------- Videos ----------
export const videoCategories = ["Brake Tutorials", "Maintenance Tips", "Diagnostics", "Tool Reviews", "Garage Projects"] as const;
export type VideoCategory = (typeof videoCategories)[number];

export type Video = {
  title: string;
  duration: string;
  category: VideoCategory;
  /** YouTube video ID. When set, the thumbnail and link come from YouTube. */
  youtubeId?: string;
  /** Optional custom thumbnail path (e.g. /thumbs/brake-job.jpg). */
  thumbnail?: string;
};

// TODO: replace with real uploads (or fetch from the YouTube Data API).
export const featuredVideo: Video = {
  title: "Front Brake Job, Start to Finish — Pads, Rotors & Caliper Slides",
  duration: "24:18",
  category: "Brake Tutorials",
};

export const videos: Video[] = [
  { category: "Brake Tutorials", duration: "14:21", title: "How to Tell If You Need Rotors or Just Pads" },
  { category: "Maintenance Tips", duration: "12:40", title: "Synthetic vs Conventional Oil: What Your Engine Actually Needs" },
  { category: "Diagnostics", duration: "18:05", title: "Chasing a Random Misfire — Real Shop Diagnosis" },
  { category: "Brake Tutorials", duration: "9:52", title: "Why Your Brakes Squeal (and the Cheap Fix That Usually Works)" },
  { category: "Tool Reviews", duration: "15:30", title: "The Five Tools I Use on Every Brake Job" },
  { category: "Garage Projects", duration: "22:12", title: "Bringing a Neglected Daily Driver Back — Part 1" },
  { category: "Brake Tutorials", duration: "16:47", title: "Brake Fluid Flush the Right Way" },
  { category: "Maintenance Tips", duration: "11:03", title: "Oil Change Mistakes I See Every Week" },
  { category: "Diagnostics", duration: "13:26", title: "Battery or Alternator? Test It in 10 Minutes" },
  { category: "Tool Reviews", duration: "10:48", title: "Cheap vs Pro Scan Tools — Is the Upgrade Worth It?" },
  { category: "Maintenance Tips", duration: "8:55", title: "The 60,000-Mile Service, Explained" },
  { category: "Garage Projects", duration: "19:40", title: "Neglected Daily Driver — Part 2: Suspension" },
];

export const popularVideos = [videos[0], videos[6], videos[7]];

export const shorts = [
  "Grinding = metal on metal",
  "Check your oil in 30 seconds",
  "Why slide pins matter",
  "What a glazed rotor looks like",
  "Torque your lugs — here’s why",
  "Dark brake fluid? Watch this",
];

// ---------- Gallery ----------
export type GalleryItem = {
  service: string;
  vehicle: string;
  desc: string;
  photo: string;
  kind: "photo" | "beforeAfter" | "clip";
  /** Optional media paths; placeholders render until set. */
  src?: string;
  beforeSrc?: string;
  afterSrc?: string;
};

// TODO: replace with real jobs.
export const gallery: GalleryItem[] = [
  { service: "Brake Job", vehicle: "2017 Ford F-150", desc: "Front pads and rotors, caliper slides cleaned and greased. Came in grinding.", photo: "Front hub, new rotor", kind: "photo", src: images.galleryBrakeJob },
  { service: "Before / After", vehicle: "2014 Toyota Camry", desc: "Scored rotors out, new hardware in. Pedal back to firm.", photo: "", kind: "beforeAfter" },
  { service: "Suspension", vehicle: "2012 Honda CR-V", desc: "Front struts and sway bar links — the clunk over bumps is gone.", photo: "Strut assembly on the bench", kind: "photo", src: images.gallerySuspension },
  { service: "Oil Service", vehicle: "2019 Chevy Silverado", desc: "Full synthetic, new filter, fluids topped off and a full look-over.", photo: "Drain pan, filter swap", kind: "photo", src: images.galleryOilService },
  { service: "Diagnostics", vehicle: "2015 Nissan Altima", desc: "Intermittent no-start traced to a corroded ground — not the starter.", photo: "Multimeter on the ground strap", kind: "photo", src: images.galleryDiagnostics },
  { service: "Engine Repair", vehicle: "2010 Jeep Wrangler", desc: "Valve cover gasket and plugs — oil leak and misfire fixed together.", photo: "Valve cover off, new gasket", kind: "photo", src: images.galleryEngine },
];

// ---------- Reviews ----------
export const reviewFilters = ["Brakes", "Oil Change", "Diagnostics", "Repairs"] as const;
export type ReviewService = (typeof reviewFilters)[number];
export type Review = { name: string; service: ReviewService; vehicle: string; rating: number; text: string };

// Sample reviews. TODO: replace with Google Reviews (Places API) data.
export const reviews: Review[] = [
  { name: "Marcus T.", service: "Brakes", vehicle: "2016 Honda Accord", rating: 5, text: "JP showed me my old pads next to the new ones and explained why the rotors could be resurfaced instead of replaced. Saved me money and I actually understood the bill." },
  { name: "Dana R.", service: "Oil Change", vehicle: "2019 Subaru Outback", rating: 5, text: "In and out on time, and he pointed out a torn CV boot without pushing me to fix it that day. Told me what could wait. That’s rare." },
  { name: "Luis M.", service: "Diagnostics", vehicle: "2013 Ford Escape", rating: 5, text: "Two shops threw parts at my check engine light. JP found a cracked vacuum hose in under an hour. Found him on YouTube, staying for the honesty." },
  { name: "Keisha W.", service: "Brakes", vehicle: "2018 Toyota RAV4", rating: 5, text: "Steering wheel shook every time I braked on the highway. New rotors and pads, and he walked me through why it happened. Smooth as new." },
  { name: "Tom B.", service: "Repairs", vehicle: "2011 Chevy Silverado", rating: 5, text: "Water pump went out on a Friday. JP gave me a straight quote, had it done Monday, and showed me the failed bearing. Fair price." },
  { name: "Priya S.", service: "Oil Change", vehicle: "2020 Honda Civic", rating: 4, text: "Easy booking, quick service, and he explained which oil my engine actually needs. Only wish Saturday hours were longer." },
  { name: "Andre J.", service: "Diagnostics", vehicle: "2014 Jeep Grand Cherokee", rating: 5, text: "Battery kept dying overnight. He tracked it to a glovebox light staying on. Cheap fix instead of the new alternator I was quoted elsewhere." },
  { name: "Carla F.", service: "Repairs", vehicle: "2015 Mazda CX-5", rating: 5, text: "Front end clunk over every bump. Sway bar links and a control arm bushing — he showed me the play before touching anything." },
  { name: "Ben H.", service: "Brakes", vehicle: "2012 Ford Focus", rating: 5, text: "Soft pedal that two places said was fine. JP flushed the fluid, found a weeping caliper, fixed both. Pedal is rock solid now." },
];

// ---------- Brakes page ----------
export const brakeProblems = [
  { title: "Grinding", urgent: true, text: "Usually pads worn to the backing plate — metal on metal, chewing up the rotor with every stop." },
  { title: "Squeaking", urgent: false, text: "Could be wear indicators, glazed pads or dry hardware. Often a simple fix if caught early." },
  { title: "Steering Wheel Vibration", urgent: false, text: "Typically uneven rotor thickness or pad deposits. Felt most when braking from highway speed." },
  { title: "Pulling While Braking", urgent: true, text: "A sticking caliper, collapsed hose or contaminated pad on one side. Affects control." },
  { title: "Soft Brake Pedal", urgent: true, text: "Air or moisture in the fluid, a leak, or a failing master cylinder. Get it checked before driving far." },
  { title: "Brake Warning Light", urgent: true, text: "Low fluid, worn pads, or a parking brake or ABS fault. The light is telling you something." },
  { title: "Longer Stopping Distances", urgent: true, text: "Worn friction material, overheated fluid or failing hydraulics. Every foot matters." },
];

export const brakeServices = [
  { title: "Pads", text: "Matched to your vehicle and driving — ceramic or semi-metallic, never the bargain bin." },
  { title: "Rotors", text: "Measured against minimum thickness. Resurfaced when possible, replaced when not." },
  { title: "Calipers", text: "Slides cleaned and greased, seized pistons and torn boots replaced." },
  { title: "Brake Fluid", text: "Moisture tested, then flushed and bled to restore a firm pedal." },
  { title: "Inspections", text: "Pads, rotors, hoses, lines and fluid — with measurements you can see." },
  { title: "Brake Lines", text: "Rusted or leaking hard lines and cracked rubber hoses replaced." },
  { title: "Diagnosis", text: "Noises, pulls, vibration and warning lights traced to the actual cause." },
];

export const brakeSteps = [
  { title: "Inspect", text: "Wheels off. Pads, rotors, calipers, lines and fluid all checked." },
  { title: "Measure", text: "Pad thickness and rotor specs recorded — not eyeballed." },
  { title: "Explain", text: "You hear what needs doing now, what can wait, and what it costs." },
  { title: "Repair & Test", text: "Work done, brakes bedded in, and a road test before pickup." },
];

// ---------- Maintenance page ----------
export const maintenanceItems: { title: string; icon: IconName; items: string[]; primary?: boolean }[] = [
  { title: "Oil Changes", icon: "oil", items: ["Full synthetic, blend or conventional", "Oil matched to manufacturer spec", "New filter every time"], primary: true },
  { title: "Fluid Services", icon: "fluid", items: ["Coolant, brake and power steering", "Transmission & differential", "Top-offs between services"] },
  { title: "Filters", icon: "filter", items: ["Engine air filter", "Cabin air filter", "Fuel filter where serviceable"] },
  { title: "Battery Checks", icon: "battery", items: ["Load and charging test", "Terminals cleaned", "Replacement if it’s failing"] },
  { title: "Belts & Hoses", icon: "belts", items: ["Serpentine belt wear check", "Tensioner and pulleys", "Radiator and heater hoses"] },
  { title: "Tire Inspection", icon: "tires", items: ["Tread depth and wear pattern", "Pressure set to spec", "Rotation on schedule"] },
  { title: "Preventative Maintenance", icon: "maintenance", items: ["Manufacturer schedule followed", "Service history logged", "Heads-up on what’s coming"], primary: true },
];

export const mileageTimeline = [
  { miles: "5,000", label: "Every visit", items: ["Oil & filter change", "Tire rotation", "Fluid level check", "Quick brake look"] },
  { miles: "15,000", label: "Routine", items: ["Engine air filter", "Cabin air filter", "Brake inspection", "Battery test"] },
  { miles: "30,000", label: "Major check", items: ["Brake fluid test or flush", "Coolant condition", "Suspension inspection", "Plugs on some engines"] },
  { miles: "60,000", label: "Major service", items: ["Spark plugs", "Transmission fluid", "Coolant flush", "Belts & hoses"] },
  { miles: "100,000+", label: "High mileage", items: ["Timing belt, if equipped", "Water pump", "Shocks & struts", "Full fluid service"] },
];

// ---------- Repairs page ----------
export const repairCategories: { title: string; icon: IconName; text: string; signs: string }[] = [
  { title: "Engine", icon: "engine", text: "Gaskets, seals, mounts, timing components and mechanical noise.", signs: "Oil leaks · Ticking · Rough running" },
  { title: "Cooling System", icon: "cooling", text: "Radiators, thermostats, water pumps and fans.", signs: "Overheating · Coolant loss · No heat" },
  { title: "Suspension", icon: "suspension", text: "Struts, shocks, control arms, bushings and sway bar links.", signs: "Clunks · Bouncing · Uneven tire wear" },
  { title: "Steering", icon: "steering", text: "Tie rods, ball joints, racks and power steering.", signs: "Wandering · Play in the wheel · Whine" },
  { title: "Electrical", icon: "electrical", text: "Wiring, fuses, relays, lighting and accessories.", signs: "Dead circuits · Flicker · Blown fuses" },
  { title: "Starting & Charging", icon: "starting", text: "Starters, alternators and the cables between them.", signs: "Clicking · Slow crank · Battery light" },
  { title: "Check Engine Light", icon: "checkEngine", text: "Codes read, systems tested, cause confirmed.", signs: "Solid or flashing light · Power loss" },
  { title: "Belts", icon: "belts", text: "Serpentine belts, tensioners and idler pulleys.", signs: "Squeal · Chirp · Cracked ribs" },
  { title: "Hoses", icon: "hoses", text: "Radiator, heater, vacuum and fuel hoses.", signs: "Leaks · Soft spots · Hissing" },
  { title: "Battery", icon: "battery", text: "Testing, terminal service and replacement.", signs: "Hard starts · Corrosion · Age 4+ yrs" },
  { title: "Sensors", icon: "sensors", text: "O2, MAF, crank, cam, ABS and temperature sensors.", signs: "Poor MPG · Stalling · Warning lights" },
  { title: "General Repairs", icon: "general", text: "The everything-else list. Ask — you’ll get a straight answer.", signs: "If it’s off, bring it in" },
];

export const diagnosticSteps = [
  { title: "Tell Us What You Notice", text: "When it happens, what it sounds like, what it feels like. Details save diagnostic time." },
  { title: "We Test, Not Guess", text: "Scan data, pinpoint tests and a road test to confirm the actual cause." },
  { title: "You Approve First", text: "Clear explanation and estimate before any repair. What’s urgent, and what can wait." },
];

// ---------- About page ----------
// TODO: replace bracketed details with JP's real story.
export const aboutStory = [
  { label: "Experience", title: "Years Under the Hood", text: "JP has been wrenching for [X] years — [shop background, training or certifications]. Thousands of brake jobs and oil changes later, the fundamentals still matter most." },
  { label: "Why Cars", title: "It Started in a Driveway", text: "[JP’s story: the first car, the first repair, the moment it clicked.] Cars are honest machines — if something’s wrong, there’s a reason, and finding it never gets old." },
  { label: "Specialty", title: "Brakes & Maintenance", text: "Brakes keep you safe; maintenance keeps you from expensive surprises. JP focuses there because doing the basics perfectly prevents most big repairs." },
  { label: "Approach", title: "Honest Repairs", text: "You get the diagnosis, the options, and the price before work starts. What’s urgent gets said plainly. What can wait gets said just as plainly." },
  { label: "YouTube", title: "The Channel", text: "JP films real jobs from the bay — brake work, diagnostics, maintenance and tools — so people can see exactly how it’s done and what to watch for." },
  { label: "Teaching", title: "Why He Explains Everything", text: "An informed customer makes better decisions and trusts the work. Teaching people about their cars is half the reason JP does this." },
];

// ---------- FAQ ----------
export const faqs = [
  { q: "How do I know if my brakes need replacing?", a: "Grinding, squealing, a vibrating steering wheel, pulling to one side, a soft pedal or a brake warning light are all signs. The only sure answer is measuring pad thickness and rotor condition — a brake inspection does exactly that." },
  { q: "How often should I change my oil?", a: "It depends on your engine and oil type. Many modern cars on full synthetic run 5,000–10,000 miles; older engines or severe driving (towing, short trips, heat) need it sooner. Follow your owner’s manual or oil-life monitor — JP will confirm the right interval for your car." },
  { q: "Do you work on all makes and models?", a: "Most domestic, Japanese and Korean cars, trucks and SUVs. [Confirm any exclusions — e.g. certain European, diesel or EV work.] If it’s not a fit, you’ll hear that up front." },
  { q: "Can you diagnose a check engine light?", a: "Yes. The code is the starting point, not the answer. JP tests the related system to confirm the actual cause before recommending any parts." },
  { q: "Can I bring my own parts?", a: "[Set your policy.] Some shops install customer-supplied parts without a labor warranty; others decline. Ask when you book." },
  { q: "How long does brake service take?", a: "A typical pad and rotor job on one axle runs about 1–2 hours. Calipers, lines or a fluid flush add time. You’ll get a realistic estimate when you drop off." },
  { q: "Do I need an appointment?", a: "Appointments are recommended so your car gets in the bay quickly. Use the Book Service form or call — JP will confirm the time." },
  { q: "Do you offer same-day service?", a: "Often, for oil changes, inspections and many brake jobs, depending on the day’s schedule and parts availability. Call to check." },
  { q: "Do you provide estimates before performing repairs?", a: "Always. You get the diagnosis and the price before any work starts, and nothing extra gets done without your approval." },
];

// ---------- Booking ----------
export const bookingServices = ["Brake Service", "Oil Change", "Diagnostics", "Maintenance", "Suspension", "Engine Repair", "Electrical", "Other"] as const;
export const bookingTimes = ["Morning (8–10)", "Late morning (10–12)", "Afternoon (12–3)", "Late afternoon (3–5)", "No preference"] as const;
