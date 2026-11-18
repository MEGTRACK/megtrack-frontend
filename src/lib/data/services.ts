import { Truck, Plane, ShieldCheck, Warehouse, Package } from "lucide-react";
import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "courier-import-handling",
    title: "Courier Import Handling",
    shortDescription: "Arrival, sorting and handover",
    description:
      "Consolidated courier shipments from India received when they land in Australia, cleared, sorted and handed over for delivery anywhere in the country.",
    icon: Plane,
    menu: "Arrival, sorting and handover",
    featured: true,
    tags: ["Consolidated courier", "E-commerce parcels", "Manifest or API data"],
    included: [
      { title: "Arrival handling", body: "Shipments collected from the airline or terminal and moved to our facility." },
      { title: "Clearance coordination", body: "Manifests and documents prepared so entries can be lodged with the Australian Border Force." },
      { title: "Sorting and handover", body: "Parcels sorted by destination and handed to delivery partners." },
      { title: "Data integration", body: "Pre-arrival manifest files or an API connection with your software." },
    ],
    points: ["One operational contact for every shipment", "Holds, inspections and charges explained in plain words", "Status updates you can pass on to your customers", "Pricing tailored to your volumes"],
  },
  {
    slug: "cargo-import-handling",
    title: "Cargo Import Handling",
    shortDescription: "Commercial cargo and deconsolidation",
    description:
      "Commercial shipments from India received, cleared through brokerage coordination, broken down and sent to their final destinations.",
    icon: Truck,
    menu: "Commercial cargo and deconsolidation",
    tags: ["Commercial cargo", "Deconsolidation"],
    included: [
      { title: "Commercial shipments", body: "Air cargo from India for importers and businesses of any size." },
      { title: "Deconsolidation", body: "Consolidated shipments broken down and sorted for distribution." },
      { title: "Documentation checks", body: "Commercial invoices, packing lists and air waybills checked before arrival." },
      { title: "Onward delivery", body: "Delivered to your premises, your customers or our storage." },
    ],
    points: ["Documents checked before cargo lands", "Charges explained in your quote", "Storage and delivery arranged by the same team"],
  },
  {
    slug: "customs-clearance",
    title: "Customs Clearance",
    shortDescription: "ABF clearance coordinated on arrival.",
    description:
      "Clearance of courier, cargo and e-commerce shipments from India coordinated with the Australian Border Force and biosecurity.",
    icon: ShieldCheck,
    menu: "Courier, cargo and e-commerce",
    tags: ["ABF", "Biosecurity", "Duty"],
    included: [
      { title: "Low-value shipments", body: "Goods worth AUD 1,000 or less arriving by air or sea cargo are cleared by a self-assessed clearance declaration." },
      { title: "Higher-value imports", body: "Full import declarations, with duty and GST assessed before release." },
      { title: "Biosecurity", body: "Coordination with DAFF for inspections and permits." },
      { title: "Restricted goods", body: "You are told if goods are restricted or need a permit." },
    ],
    points: ["Plain-language updates on every hold", "No promises about customs decisions", "Released goods move straight to storage or delivery"],
  },
  {
    slug: "warehousing",
    title: "Warehousing & Storage",
    shortDescription: "Storage, labelling, repacking",
    description:
      "Short-term storage for cleared and awaiting-clearance goods, with labelling, repacking, sorting and palletising.",
    icon: Warehouse,
    menu: "Storage, labelling, repacking",
    tags: ["Storage", "Labelling", "Repacking"],
    included: [
      { title: "Storage", body: "Cleared goods and inventory waiting for distribution." },
      { title: "Value-added handling", body: "Labelling, repacking, sorting and palletising." },
      { title: "Under-bond goods", body: "Goods held while clearance is completed." },
      { title: "Pick-up or delivery", body: "Collect from our facility or let us arrange delivery." },
    ],
    points: ["Storage charges stated in your quote", "Inventory updates on request", "One invoice when we also clear and deliver"],
  },
  {
    slug: "last-mile-delivery",
    title: "Last-Mile Delivery",
    shortDescription: "Every state, every capital, regional included.",
    description:
      "Cleared shipments from India delivered to homes and businesses across Australia through our delivery partners.",
    icon: Package,
    menu: "Every state and territory",
    tags: ["Metro", "Regional", "Remote", "Tracking"],
    included: [
      { title: "Metro delivery", body: "Sydney, Melbourne and other capital cities." },
      { title: "Regional delivery", body: "Regional and remote areas through partner networks." },
      { title: "Tracking", body: "Carrier tracking numbers passed to you and your recipients." },
      { title: "Business deliveries", body: "Scheduled deliveries to stores and warehouses." },
    ],
    points: ["Delivery partners confirmed before dispatch", "Transit times quoted for each lane", "Competitive rates for regular volumes"],
  },
];