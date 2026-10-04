// Business details. Anything in [BRACKETS] or marked TODO is a placeholder
// to replace before launch.

export const site = {
  name: "JP Motor Works",
  tagline: "Brakes. Lubes. Repairs. Done Right.",
  // TODO: set the real city/state. Leave city empty to drop "in [City]" from titles.
  city: "",
  state: "",
  url: "https://www.jpmotorworks.example", // TODO: production domain
  phone: "(555) 555-0123", // TODO: real phone
  phoneHref: "tel:+15555550123",
  email: "hello@jpmotorworks.example", // TODO: real email
  address: {
    street: "[Street Address]",
    locality: "[City]",
    region: "[ST]",
    postalCode: "[ZIP]",
  },
  serviceArea: "[City] & surrounding areas",
  serviceAreaDetail: "[Neighborhood] · [Neighborhood] · [Neighborhood]",
  directionsUrl: "https://maps.google.com/?q=JP+Motor+Works", // TODO
  mapEmbedUrl: "", // TODO: Google Maps embed URL
  googleReviewUrl: "https://g.page/r/[PLACE_ID]/review", // TODO
  googleRating: "[4.9]", // TODO: pull from Google Reviews
  googleReviewCount: "[###]",
  hours: [
    { days: "Mon–Fri", time: "8:00–6:00" },
    { days: "Saturday", time: "9:00–2:00" },
    { days: "Sunday", time: "Closed" },
  ],
  hoursShort: "Mon–Fri 8–6 · Sat 9–2",
  social: {
    youtube: "https://www.youtube.com/@[channel]", // TODO
    instagram: "https://www.instagram.com/[handle]", // TODO
    facebook: "https://www.facebook.com/[page]", // TODO
    tiktok: "https://www.tiktok.com/@[handle]", // TODO
  },
} as const;

/** "Brake Repair" -> "Brake Repair in Austin" once a city is set. */
export function inCity(base: string) {
  return site.city ? `${base} in ${site.city}` : base;
}

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/brakes", label: "Brake Service" },
  { href: "/maintenance", label: "Oil & Maintenance" },
  { href: "/repairs", label: "Repairs" },
  { href: "/youtube", label: "YouTube" },
  { href: "/about", label: "About JP" },
  { href: "/reviews", label: "Reviews" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

export const BOOK_HREF = "/contact#book";
