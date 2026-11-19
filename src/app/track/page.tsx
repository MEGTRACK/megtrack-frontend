import { Suspense } from "react";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { TrackForm } from "@/components/forms/TrackForm";

export const metadata = {
  title: "Track a shipment | MEGTRACK",
  description:
    "Enter a MEGTRACK number, airway bill or your courier's reference.",
};

export default function TrackPage({
  searchParams,
}: {
  searchParams: Promise<{ n?: string }>;
}) {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Track" }]}
        title="Track a shipment"
        lead="Enter a MEGTRACK number, airway bill or your courier's reference."
      />
      <section className="pad-s">
        <div className="wrap split">
          {/* searchParams is runtime data, so it is read inside Suspense */}
          <Suspense
            fallback={
              <div
                className="card"
                style={{ minHeight: 160 }}
                aria-busy="true"
              />
            }
          >
            <Form searchParams={searchParams} />
          </Suspense>
          <aside>
            <div className="qcard">
              <h3 style={{ color: "#fff" }}>
                Waiting for a parcel from India?
              </h3>
              <p>
                See what happens when it lands and what you might need to do.
              </p>
              <Link className="btn btn-red" href="/receiving">
                Receiving a parcel
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

async function Form({
  searchParams,
}: {
  searchParams: Promise<{ n?: string }>;
}) {
  const { n } = await searchParams;
  return <TrackForm initial={n ?? ""} />;
}
