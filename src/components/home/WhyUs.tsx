import Link from "next/link";
import { User, Milestone, ShieldCheck, Tag, Link2 } from "lucide-react";

const cards = [
  {
    Icon: User,
    title: "One team from landing to doorstep",
    body: "Arrival, clearance coordination, storage and delivery run by one team, so you never chase four companies for one parcel.",
  },
  {
    Icon: Milestone,
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

export function WhyUs() {
  return (
    <section className="pad mist tilt" aria-labelledby="wh-h">
      <div className="wrap why">
        <div className="stick">
          <span className="kicker">Why MEGTRACK</span>
          <h2 id="wh-h">Why choose MEGTRACK?</h2>
          <p className="lead">
            Most India–Australia shipments lose time at the handover, when they
            land. That&apos;s exactly where we work.
          </p>
          <Link className="btn btn-dark" href="/about">
            About MEGTRACK
          </Link>
        </div>
        <div className="wcards">
          {cards.map(({ Icon, title, body }) => (
            <div key={title} className="wcard">
              <span className="ic">
                <Icon />
              </span>
              <div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
