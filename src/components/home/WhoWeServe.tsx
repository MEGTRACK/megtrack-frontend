import Link from "next/link";
import {
  Handshake,
  ShoppingCart,
  Shirt,
  Package,
  Gift,
  GraduationCap,
} from "lucide-react";

const tiles = [
  {
    Icon: Handshake,
    title: "Couriers and forwarders",
    body: "An Australian landing partner for your inbound volumes from India.",
    href: "/partners",
    cta: "Become a partner",
  },
  {
    Icon: ShoppingCart,
    title: "E-commerce sellers",
    body: "Online orders and stock from India, landed and delivered nationally.",
    href: "/quote?type=E-commerce%20orders",
    cta: "Get a quote",
  },
  {
    Icon: Shirt,
    title: "Retail and fashion importers",
    body: "Apparel, textiles and homewares from Indian suppliers.",
    href: "/services/cargo-import-handling",
    cta: "Cargo handling",
  },
  {
    Icon: Package,
    title: "Small businesses",
    body: "Samples, inventory and regular commercial shipments.",
    href: "/quote?type=Commercial%20goods",
    cta: "Get a quote",
  },
  {
    Icon: Gift,
    title: "Families and individuals",
    body: "Gifts and personal parcels from family in India.",
    href: "/ship-from/india-to-australia",
    cta: "Send a parcel",
  },
  {
    Icon: GraduationCap,
    title: "Students",
    body: "Belongings and essentials sent from home in India.",
    href: "/blog/shipping-from-india-to-australia-guide",
    cta: "Read the guide",
  },
];

/** Tile grid only (also usable on /who-we-serve). */
export function ServeTiles() {
  return (
    <div className="serve">
      {tiles.map(({ Icon, title, body, href, cta }) => (
        <Link key={title} className="stile" href={href}>
          <Icon />
          <h3>{title}</h3>
          <p>{body}</p>
          <span className="tlink">{cta}</span>
        </Link>
      ))}
    </div>
  );
}

export function WhoWeServe() {
  return (
    <section className="pad" aria-labelledby="ws-h">
      <div className="wrap">
        <div className="shead">
          <div>
            <span className="kicker">Industries we serve</span>
            <h2 id="ws-h">Who ships with MEGTRACK</h2>
          </div>
          <Link className="btn btn-line" href="/who-we-serve">
            Who we serve
          </Link>
        </div>
        <ServeTiles />
      </div>
    </section>
  );
}
