import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Building2, Package, ShoppingBag, Users } from "lucide-react";
import { QuoteBand } from "@/components/home/QuoteBand";

const audiences = [
  ["Families & individuals", "Personal effects, gifts and parcels sent to friends and family in Australia.", Users],
  ["Online sellers", "A practical cross-border option for e-commerce orders and customer deliveries.", ShoppingBag],
  ["Growing businesses", "Flexible freight support for regular imports, samples and business shipments.", Building2],
  ["Commercial shippers", "Air and sea freight coordination for larger, consolidated consignments.", Package],
] as const;

export default function WhoWeServePage() {
  return (
    <>
      <PageHero crumbs={[{ label: "Who we serve" }]} title="Who we serve" lead="Businesses and people shipping from India to Australia." />
      <Section>
        <div className="grid grid-cols-4 gap-4 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1">
          {audiences.map(([title, body, Icon]) => (
            <article key={title} className="rounded-[20px] border border-[var(--line)] bg-white p-6">
              <span className="mb-5 grid h-[52px] w-[52px] place-items-center rounded-2xl bg-[#fbe9eb] text-[var(--red)]"><Icon className="h-6 w-6" /></span>
              <h3 className="mb-2 font-display text-[1.2rem]">{title}</h3>
              <p className="m-0 text-[0.95rem] text-[var(--muted)]">{body}</p>
            </article>
          ))}
        </div>
      </Section>
      <QuoteBand />
    </>
  );
}
