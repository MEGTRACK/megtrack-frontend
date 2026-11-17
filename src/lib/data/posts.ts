import type { BlogPost } from "@/types";

export const posts: BlogPost[] = [
  {
    slug: "india-to-australia-shipping-guide",
    title: "The complete guide to shipping from India to Australia",
    excerpt:
      "Courier vs cargo, customs, biosecurity, duty — everything you need to know to plan your shipment.",
    category: "Guides",
    publishedAt: "2025-01-15",
    readMinutes: 9,
    content: "Full article content here…",
    featured: true,
  },
  {
    slug: "customs-clearance-australia",
    title: "Customs clearance in Australia: what to expect",
    excerpt: "ABF declaration, biosecurity, duty and GST — the practical timeline.",
    category: "Customs",
    publishedAt: "2025-02-03",
    readMinutes: 6,
    content: "Full article content here…",
  },
  {
    slug: "packing-tips-fragile-goods",
    title: "Packing tips for fragile goods from India",
    excerpt: "How to prepare parcels that survive the journey and clear inspection.",
    category: "Packing",
    publishedAt: "2025-02-20",
    readMinutes: 5,
    content: "Full article content here…",
  },
];