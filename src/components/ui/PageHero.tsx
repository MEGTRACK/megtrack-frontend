import type { ReactNode } from "react";
import Link from "next/link";
import { Plane, MessageCircle, type LucideIcon } from "lucide-react";

export function PageHero({
  crumbs,
  title,
  lead,
  icon: Icon = Plane,
  ctas = true,
  children,
}: {
  crumbs: { label: string; href?: string }[];
  title: string;
  lead?: string;
  icon?: LucideIcon;
  ctas?: boolean;
  children?: ReactNode;
}) {
  const all = [{ label: "Home", href: "/" }, ...crumbs];
  const ld = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
    })),
  };
  return (
    <section className="phero">
      <div className="l">
        <nav className="crumbs" aria-label="Breadcrumb">
          {all.map((c, i) => (
            <span key={`${c.label}-${i}`}>
              {i > 0 && (
                <span aria-hidden="true" className="mx-1.5">
                  /
                </span>
              )}
              {c.href ? (
                <Link href={c.href}>{c.label}</Link>
              ) : (
                <span aria-current="page">{c.label}</span>
              )}
            </span>
          ))}
        </nav>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
        />
        <h1 className="max-w-[18ch] font-display text-[clamp(2.1rem,4.4vw,3.6rem)] font-extrabold not-italic leading-[1.06] [font-stretch:118%]">
          {title}
        </h1>
        {lead && <p className="lead">{lead}</p>}
        {ctas && (
          <div className="ctas mt-[26px]">
            <Link href="/quote" className="btn btn-red">
              Request a quote
            </Link>
            {/* Point at wa.me once the WhatsApp number is confirmed */}
            <Link href="/contact" className="btn btn-line">
              <MessageCircle aria-hidden="true" /> WhatsApp us
            </Link>
          </div>
        )}
        {children}
      </div>
      <div className="r" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/plane.png"
          alt=""
          className="absolute -left-[10%] bottom-[8%] w-[120%] opacity-[0.12] [filter:brightness(0)_invert(1)]"
        />
        <Icon className="big" strokeWidth={1.7} />
      </div>
    </section>
  );
}
