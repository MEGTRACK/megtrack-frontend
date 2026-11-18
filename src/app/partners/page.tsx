import type { Metadata } from "next";
import {
  Handshake,
  Link2,
  Tag,
  UserRound,
  GitCommitHorizontal,
} from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { PartnerForm } from "@/components/partners/PartnerForm";

export const metadata: Metadata = {
  title: "Australian Partner for Indian Couriers | MEGTRACK",
  description:
    "Arrival handling, clearance coordination and delivery in Australia for couriers and freight forwarders in India.",
};

const BENEFITS = [
  {
    Icon: UserRound,
    title: "One operational contact",
    body: "A named account manager who knows your shipments and your customers.",
  },
  {
    Icon: Link2,
    title: "Data that flows",
    body: "Pre-arrival manifests or an API with your software.",
  },
  {
    Icon: Tag,
    title: "Clear charges",
    body: "Pricing tailored to your volumes, with no surprises on holds or storage.",
  },
  {
    Icon: GitCommitHorizontal,
    title: "Visibility for your customers",
    body: "Milestones from landing to delivery for your own tracking.",
  },
];

const STEPS = [
  {
    title: "Tell us your volumes",
    body: "Cities you ship from in India, monthly shipments, typical contents and data format.",
  },
  {
    title: "Agree service levels and rates",
    body: "Handling, clearance coordination, storage and delivery, priced for your volume.",
  },
  {
    title: "Connect data",
    body: "Manifest template or API set up and tested with a pilot shipment.",
  },
  {
    title: "Go live",
    body: "Regular reporting and a direct line to our operations team.",
  },
];

export default function PartnersPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Partners" }]}
        title="Your partner on the ground in Australia"
        lead="For couriers and freight forwarders in India that need dependable arrival handling, clearance coordination and delivery for shipments to Australia."
        icon={Handshake}
        ctas={false}
      />

      <Section>
        <div className="split">
          <div>
            <h2>What partners get</h2>
            <div className="incl">
              {BENEFITS.map(({ Icon, title, body }) => (
                <div key={title}>
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

            <h2>How onboarding works</h2>
            <ol className="route-steps">
              {STEPS.map((s) => (
                <li key={s.title}>
                  <b>{s.title}</b>
                  <span>{s.body}</span>
                </li>
              ))}
            </ol>
          </div>

          <aside>
            <PartnerForm />
          </aside>
        </div>
      </Section>
    </>
  );
}
