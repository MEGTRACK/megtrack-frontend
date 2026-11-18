import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/ui/PageHero";
import { QuoteBand } from "@/components/home/QuoteBand";
import { Estimator } from "@/components/tools/Estimator";
import { Checker } from "@/components/tools/Checker";
import { Faq } from "@/components/ui/faq";

const Confirm = ({ children }: { children: React.ReactNode }) => (
  <span className="rounded-[3px] bg-[#FFF1C2] px-1 text-[0.86em] font-medium text-[#5B4300]">
    {children}
  </span>
);

const steps: [string, React.ReactNode][] = [
  [
    "Book and get picked up in India",
    <>
      Our partner collects from your door{" "}
      <Confirm>[pickup coverage and booking method to confirm]</Confirm>.
    </>,
  ],
  [
    "Flies to Australia",
    <>
      Transit time <Confirm>[confirm]</Confirm>.
    </>,
  ],
  [
    "Cleared on arrival",
    "We coordinate customs and biosecurity checks and tell you if anything is needed.",
  ],
  ["Delivered anywhere in Australia", "Tracking shared with the recipient."],
];

const faqs = [
  {
    q: "Where in India can you pick up from?",
    text: "Anywhere in India, through our partners. Add your city and PIN code to the quote form.",
    a: (
      <>
        Anywhere in India, through our partners{" "}
        <Confirm>[pickup coverage to confirm]</Confirm>. Add your city and PIN
        code to the quote form.
      </>
    ),
  },
  {
    q: "Will the recipient pay anything on delivery?",
    text: "Usually not for personal parcels worth AUD 1,000 or less. Higher-value goods attract duty and GST, and biosecurity treatment can carry a charge. We tell you before anything is due.",
    a: "Usually not for personal parcels worth AUD 1,000 or less. Higher-value goods attract duty and GST, and biosecurity treatment can carry a charge. We tell you before anything is due.",
  },
  {
    q: "Can I send homemade food?",
    text: "Homemade food is often refused at the border. Commercially packaged, labelled items have a better chance, but many dairy and meat products are not allowed at all.",
    a: "Homemade food is often refused at the border. Commercially packaged, labelled items have a better chance, but many dairy and meat products are not allowed at all.",
  },
  {
    q: "How long does it take?",
    text: "We give you an estimated timeline with your quote; customs inspections can add time.",
    a: (
      <>
        <Confirm>Typical transit times to confirm.</Confirm> We give you an
        estimated timeline with your quote; customs inspections can add time.
      </>
    ),
  },
  {
    q: "What is the weight limit?",
    text: "Weight and size limits to be confirmed.",
    a: <Confirm>Weight and size limits to confirm.</Confirm>,
  },
];

// Swap for your shared post data / PostCard if you have one
const guides = [
  {
    href: "/blog/shipping-from-india-to-australia-guide",
    cat: "India to Australia Shipping",
    title: "How to ship from India to Australia: a step-by-step guide",
    desc: "What to check, pack and prepare before you send a parcel or shipment from India, and what happens when it lands in Australia.",
  },
  {
    href: "/blog/what-you-cant-send-to-australia",
    cat: "International Shipping Guidelines",
    title:
      "What you can't send to Australia from India: biosecurity rules for parcels",
    desc: "Why homemade food is so often refused, which items need a permit, and how to avoid a held parcel.",
  },
];

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Courier and cargo shipping from India to Australia",
  areaServed: ["IN", "AU"],
  provider: { "@type": "Organization", name: "MEGTRACK Freight Forwarding" },
};

const h2 =
  "font-display text-[clamp(1.9rem,3.5vw,3rem)] font-bold [font-stretch:108%]";

export default function Page() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "India to Australia" }]}
        title="Courier from India to Australia, door to door"
        lead="Send parcels and cargo from anywhere in India to anywhere in Australia. We handle the Australian end: arrival, clearance coordination and delivery."
      />
      <Section>
        <div className="split">
          <div>
            <h2 className={h2}>How it works</h2>
            <ol className="route-steps">
              {steps.map(([title, body]) => (
                <li key={title}>
                  <b>{title}</b>
                  <span>{body}</span>
                </li>
              ))}
            </ol>
            <p className="text-[var(--muted)]">
              India is now the largest overseas-born community in Australia,
              with most living in Victoria and New South Wales.
            </p>

            <h2 className={`${h2} mt-11`}>What it costs</h2>
            <Estimator />

            <h2 className={`${h2} mt-14`}>What you can&apos;t send</h2>
            <Checker />

            <h2 className={`${h2} mt-14`}>Frequently asked questions</h2>
            <Faq items={faqs} />

            <h2 className={`${h2} mt-14`}>Guides for this route</h2>
            <div className="pcards !grid-cols-2 max-[640px]:!grid-cols-1">
              {guides.map((g) => (
                <Link key={g.href} href={g.href} className="pcard">
                  <div className="meta">
                    <span className="cat">{g.cat}</span>
                  </div>
                  <h3>{g.title}</h3>
                  <p>{g.desc}</p>
                  <span className="tlink">Read more</span>
                </Link>
              ))}
            </div>
          </div>

          <aside>
            <div className="qcard">
              <h3 className="text-white">Ship from India</h3>
              <p>
                Personal parcels, gifts, commercial goods and e-commerce orders.
              </p>
              <Link href="/quote" className="btn btn-red w-full">
                Request a quote
              </Link>
              <Link href="/contact" className="btn btn-ghost mt-2.5 w-full">
                <MessageCircle aria-hidden="true" /> WhatsApp us
              </Link>
              <hr className="my-[22px] border-0 border-t border-[#3a2627]" />
              <p className="mb-1.5 text-[0.9rem]">
                Shipping regularly from India?
              </p>
              <Link
                href="/partners"
                className="font-semibold text-[var(--pink)]"
              >
                Talk to our partner team
              </Link>
            </div>
          </aside>
        </div>
      </Section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
      <QuoteBand />
    </>
  );
}
