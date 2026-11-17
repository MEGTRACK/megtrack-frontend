import { Truck, Plane, ShieldCheck, Warehouse, Package } from "lucide-react";
import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "courier",
    title: "India → Australia Courier",
    shortDescription: "Door-to-door parcels from anywhere in India.",
    description:
      "Consolidated air freight with pickup across India, tracking, and delivery to every Australian state.",
    icon: Plane,
    featured: true,
    tags: ["Door to door", "Tracking", "Air freight"],
  },
  {
    slug: "cargo",
    title: "Sea & Air Cargo",
    shortDescription: "FCL, LCL and consolidated air cargo for larger shipments.",
    description:
      "Full container, LCL and air cargo options coordinated through our India partners and Australian agents.",
    icon: Truck,
    tags: ["FCL / LCL", "Air", "Bulk"],
  },
  {
    slug: "customs",
    title: "Customs Clearance",
    shortDescription: "ABF clearance coordinated on arrival.",
    description:
      "We coordinate customs brokers, documentation and duty/GST payment on arrival in Australia.",
    icon: ShieldCheck,
    tags: ["ABF", "Biosecurity", "Duty"],
  },
  {
    slug: "warehousing",
    title: "Warehousing",
    shortDescription: "Short-term storage in India and Australia.",
    description:
      "Consolidation and storage at origin and destination, with pick-and-pack options.",
    icon: Warehouse,
    tags: ["3PL", "Consolidation"],
  },
  {
    slug: "delivery",
    title: "Australia-wide Delivery",
    shortDescription: "Every state, every capital, regional included.",
    description:
      "Final-mile delivery across metro, regional and remote Australia via our carrier network.",
    icon: Package,
    tags: ["Metro", "Regional", "Remote"],
  },
];