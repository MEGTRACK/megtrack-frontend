import { ArrowRight, ClipboardCheck, PackageCheck, Plane, Truck } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

const steps = [
  {
    icon: ClipboardCheck,
    title: "Share your shipment details",
    body: "Tell us what you are sending, where it is going and your preferred service.",
  },
  {
    icon: PackageCheck,
    title: "Arrange pickup",
    body: "We coordinate collection and prepare the shipment for its journey from India.",
  },
  {
    icon: Plane,
    title: "Freight & clearance",
    body: "Your freight moves to Australia while documentation and customs clearance are coordinated.",
  },
  {
    icon: Truck,
    title: "Delivery in Australia",
    body: "The shipment is handed over for delivery to your nominated address.",
  },
];

export function ProcessSection() {
  return (
    <Section>
      <SectionHeader
        kicker="How it works"
        title="Four steps. One clear journey."
        lead="Know what happens next, from the first quote through to delivery."
      />
      <ol className="m-0 grid list-none grid-cols-4 gap-4 p-0 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1">
        {steps.map(({ icon: Icon, title, body }, index) => (
          <li
            key={title}
            className="relative rounded-[20px] border border-[var(--line)] bg-white p-6"
          >
            <div className="mb-5 flex items-center justify-between">
              <span className="grid h-[52px] w-[52px] place-items-center rounded-2xl bg-[var(--jet)] text-[var(--pink)]">
                <Icon className="h-6 w-6" />
              </span>
              <span className="font-display text-[1.6rem] font-extrabold text-[var(--red)]">
                0{index + 1}
              </span>
            </div>
            <h3 className="mb-2 font-display text-[1.2rem] font-bold">{title}</h3>
            <p className="m-0 text-[0.95rem] text-[var(--muted)]">{body}</p>
            {index < steps.length - 1 && (
              <ArrowRight
                aria-hidden="true"
                className="absolute -right-[17px] top-1/2 z-10 h-8 w-8 -translate-y-1/2 rounded-full bg-white p-1.5 text-[var(--red)] max-[900px]:hidden"
              />
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}