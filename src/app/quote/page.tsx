import { Suspense } from "react";
import Link from "next/link";
import { RESPONSE_TIME } from "@/lib/data/quote";
import { PageHero } from "@/components/ui/PageHero";
import { ShipmentQuoteForm } from "@/components/forms/ShipmentQuoteForm";

type Params = { service?: string; type?: string; kg?: string; state?: string };

export default function QuotePage({
  searchParams,
}: {
  searchParams: Promise<Params>;
}) {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Request a quote" }]}
        title="Request a quote"
        lead={`Three short steps. We reply within ${RESPONSE_TIME} with a written quote.`}
      />
      <section className="pad-s">
        <div className="wrap split">
          {/* searchParams is runtime data: read it inside Suspense so the rest of the page can prerender */}
          <Suspense
            fallback={
              <div
                className="card"
                style={{ minHeight: 420 }}
                aria-busy="true"
              />
            }
          >
            <QuoteForm searchParams={searchParams} />
          </Suspense>
          <aside>
            <div className="qcard">
              <h3 style={{ color: "#fff" }}>What happens next</h3>
              <ul className="checks" style={{ color: "#E9DFE0" }}>
                <li>A specialist reviews your shipment</li>
                <li>You get a written quote with every charge listed</li>
                <li>We confirm paperwork before anything ships</li>
              </ul>
              <hr />
              <p style={{ margin: "0 0 10px" }}>Not sure what you can send?</p>
              <Link className="sm" href="/prohibited">
                Check an item
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

async function QuoteForm({ searchParams }: { searchParams: Promise<Params> }) {
  const initial = await searchParams;
  return <ShipmentQuoteForm initial={initial} />;
}
