import { PageHero } from "@/components/ui/PageHero";
import { QuoteBand } from "@/components/home/QuoteBand";
import { BentoGrid } from "@/components/home/ServicesBento";

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Services" }]}
        title="Freight forwarding services, India to Australia"
        lead="Five services that work alone or together, from the moment your shipment lands to the moment it is delivered."
      />
      <section className="pad">
        <div className="wrap">
          <BentoGrid />
        </div>
      </section>
      <QuoteBand />
    </>
  );
}
