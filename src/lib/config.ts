export const siteConfig = {
  name: "MEGTRACK Freight Forwarding",
  shortName: "MEGTRACK",
  url: "https://www.megtrack.com.au",
  description:
    "Courier and cargo shipping from India to Australia: pickup through partners in India, customs clearance coordination, warehousing and Australia-wide delivery.",
  responseTime: "1 business day",
  whatsapp: null as string | null,
  sampleRates: { base: 25, perKg: 11, regional: 15 },
  volumetricDivisor: 5000,
  lowValueThreshold: 1000,
} as const;

export const navLinks = [
  { href: "/ship-from/india-to-australia", label: "India → Australia" },
  { href: "/partners", label: "Partners" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const quickLinks = [
  { href: "/quote", label: "Get a quote" },
  { href: "/track", label: "Track" },
  { href: "/estimate", label: "Rate estimate" },
  { href: "/prohibited", label: "Can I send it?" },
] as const;