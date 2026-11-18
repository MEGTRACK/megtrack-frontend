import type { Metadata } from "next";
import Link from "next/link";
import {
  Globe,
  UserRound,
  GitCommitHorizontal,
  ShieldCheck,
  Tag,
  Link2,
} from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { QuoteBand } from "@/components/home/QuoteBand";

export const metadata: Metadata = {
  title: "About MEGTRACK Freight Forwarding",
  description:
    "MEGTRACK connects shippers in India with customers across Australia.",
};

const WHY = [
  {
    Icon: UserRound,
    title: "One team from landing to doorstep",
    body: "Arrival, clearance coordination, storage and delivery run by one team, so you never chase four companies for one parcel.",
  },
  {
    Icon: GitCommitHorizontal,
    title: "One timeline for both ends",
    body: "The sender in India and the recipient in Australia see the same milestones, including clearance.",
  },
  {
    Icon: ShieldCheck,
    title: "Honest about the rules",
    body: "Biosecurity and customs explained before you ship. We never promise what customs will decide.",
  },
  {
    Icon: Tag,
    title: "Clear, competitive pricing",
    body: "Written quotes, with rates tailored to your volumes.",
  },
  {
    Icon: Link2,
    title: "Ready for partners",
    body: "Manifest files or API integration for couriers and forwarders sending regular volumes.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "About" }]}
        title="About MEGTRACK"
        lead="MEGTRACK Freight Forwarding connects shippers in India with customers across Australia."
        icon={Globe}
        ctas={false}
      />

      <Section>
        <div className="split">
          <div>
            <h2>What we do</h2>
            <p>
              We handle courier and cargo shipments from India arriving in
              Australia: receiving them from the airline, coordinating customs
              clearance, storing them where needed and delivering them
              nationwide. Our partners in India collect and send; we make sure
              everything that lands gets where it&apos;s going.
            </p>

            <h2 style={{ marginTop: 40 }}>Our story</h2>
            <p>
              <span className="confirm">
                Founding year, history and milestones to be supplied by
                MEGTRACK.
              </span>
            </p>

            <h2 style={{ marginTop: 40 }}>What we value</h2>
            <ul className="checks">
              <li>
                <b>Reliability:</b> every shipment handled with care and
                accountability.
              </li>
              <li>
                <b>Transparency:</b> clear pricing, requirements and progress.
              </li>
              <li>
                <b>Compliance:</b> customs and biosecurity rules respected.
              </li>
              <li>
                <b>Responsiveness:</b> fast answers and practical solutions.
              </li>
            </ul>
            <p className="muted" style={{ fontSize: ".9rem" }}>
              <span className="confirm">Values to confirm with MEGTRACK.</span>
            </p>
          </div>

          <aside>
            <div className="qcard">
              <h3 style={{ color: "#fff" }}>At a glance</h3>
              <ul className="checks" style={{ color: "#E9DFE0" }}>
                <li>India origin, Australia-wide delivery</li>
                <li>Courier and cargo import handling</li>
                <li>Customs clearance coordination</li>
                <li>Warehousing and storage</li>
              </ul>
              <Link href="/contact" className="btn btn-red">
                Contact us
              </Link>
            </div>
          </aside>
        </div>
      </Section>

      <Section tone="mist">
        <div className="why">
          <div className="stick">
            <span className="kicker">Why MEGTRACK</span>
            <h2>Why choose MEGTRACK?</h2>
            <p className="lead">
              Most India–Australia shipments lose time at the handover, when
              they land. That&apos;s exactly where we work.
            </p>
            <Link href="/contact" className="btn btn-dark">
              Talk to our team
            </Link>
          </div>
          <div className="wcards">
            {WHY.map(({ Icon, title, body }) => (
              <div className="wcard" key={title}>
                <span className="ic">
                  <Icon aria-hidden="true" strokeWidth={1.7} />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <QuoteBand />
    </>
  );
}