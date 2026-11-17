import { Building2, Package, ShoppingBag, Users } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

const audiences = [
  {
    icon: Users,
    title: "Families & individuals",
    body: "Personal effects, gifts and parcels sent to friends and family in Australia.",
  },
  {
    icon: ShoppingBag,
    title: "Online sellers",
    body: "A practical cross-border option for ecommerce orders and customer deliveries.",
  },
  {
    icon: Building2,
    title: "Growing businesses",
    body: "Flexible freight support for regular imports, samples and business shipments.",
  },
  {
    icon: Package,
    title: "Commercial shippers",
    body: "Air and sea freight coordination for larger, consolidated consignments.",
  },
];

export function WhoWeServe() {
  return (
    <Section tone="mist">
      <SectionHeader
        kicker="Who we serve"
        title="Shipping for real life and business."
        lead="From a single parcel to a planned commercial shipment, the service can be matched to what you need to move."
      />
      <div className="grid grid-cols-4 gap-4 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1">
        {audiences.map(({ icon: Icon, title, body }) => (
          <article
            key={title}
            className="rounded-[20px] border border-[var(--line)] bg-white p-6 transition hover:-translate-y-1 hover:shadow-[0_20px_40px_-30px_rgba(33,20,20,.4)]"
          >
            <span className="mb-5 grid h-[52px] w-[52px] place-items-center rounded-2xl bg-[#fbe9eb] text-[var(--red)]">
              <Icon className="h-6 w-6" />
            </span>
            <h3 className="mb-2 font-display text-[1.2rem] font-bold">{title}</h3>
            <p className="m-0 text-[0.95rem] text-[var(--muted)]">{body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}