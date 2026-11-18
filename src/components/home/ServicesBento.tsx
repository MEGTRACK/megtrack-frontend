import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/data/services";

/** Bento grid only (shared by the home page and /services). Styles live in globals.css (.bento, .tile). */
export function BentoGrid() {
  const [featured, ...rest] = services;
  const FeaturedIcon = featured.icon;

  return (
    <div className="bento">
      <Link href={`/services/${featured.slug}`} className="tile hero-tile">
        <span className="ic">
          <FeaturedIcon />
        </span>
        <h3>{featured.title}</h3>
        <p>{featured.description}</p>
        {featured.tags && (
          <div className="tags">
            {featured.tags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        )}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="art" src="/plane.png" alt="" />
        <span className="go">
          Explore {featured.title} <ArrowRight />
        </span>
      </Link>

      {rest.map((s) => {
        const Icon = s.icon;
        return (
          <Link key={s.slug} href={`/services/${s.slug}`} className="tile">
            <span className="ic">
              <Icon />
            </span>
            <h3>{s.title}</h3>
            <p>{s.description}</p>
            <span className="go">
              Explore {s.title} <ArrowRight />
            </span>
          </Link>
        );
      })}
    </div>
  );
}

/** Home page section: kicker + heading + "All services" button + bento. */
export function ServicesBento() {
  return (
    <section className="pad-s" aria-labelledby="sv-h" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="shead">
          <div>
            <span className="kicker">What we do</span>
            <h2 id="sv-h">Freight forwarding services</h2>
          </div>
          <Link className="btn btn-line" href="/services">
            All services
          </Link>
        </div>
        <BentoGrid />
      </div>
    </section>
  );
}
