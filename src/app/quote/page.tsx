import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { ShipmentQuoteForm } from "@/components/forms/ShipmentQuoteForm";

export default function QuotePage() {
  return (
    <>
      <PageHero crumbs={[{ label: "Request a quote" }]} title="Request a quote" lead="Three short details: who you are, what you are shipping and where it is going. We reply within 1 business day." />
      <Section><div className="grid grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] gap-10 max-[960px]:grid-cols-1"><ShipmentQuoteForm /><aside className="h-fit rounded-[22px] bg-[var(--jet)] p-7 text-white"><h3 className="font-display text-xl">What happens next</h3><ol className="grid list-decimal gap-3 pl-5 text-[#c9b8ba]"><li>We review pickup and delivery locations.</li><li>We confirm service, estimated timing and price.</li><li>You receive a written quote for approval.</li></ol></aside></div></Section>
    </>
  );
}