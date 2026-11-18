import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import Link from "next/link";

export default function ReceivingPage() {
  return (
    <>
      <PageHero crumbs={[{ label: "Receiving a parcel" }]} title="Receiving a parcel from India" lead="What happens when your parcel lands in Australia, and whether you may need to pay anything." />
      <Section>
        <div className="split">
          <div>
            <ol className="route-steps">
              <li><b>It lands and we receive it</b><span>Tracking shows landed once it is with us.</span></li>
              <li><b>Clearance</b><span>We coordinate customs and biosecurity. Most personal parcels under AUD 1,000 pay no duty or GST.</span></li>
              <li><b>If anything is needed</b><span>We contact you to confirm contents or value, or arrange an inspection.</span></li>
              <li><b>Delivered</b><span>Handed to our delivery partner with a tracking number for the final leg.</span></li>
            </ol>
            <h2 className="mt-9">Questions</h2>
            <div className="faq">
              <details><summary>Will I have to pay anything?</summary><p>Usually not for personal parcels worth AUD 1,000 or less. Duty, GST or biosecurity charges are explained before anything is due.</p></details>
              <details><summary>Why is my parcel held?</summary><p>Often because of food items, an unclear value or missing paperwork.</p></details>
              <details><summary>Can I collect it?</summary><p>Collection arrangements depend on the facility and shipment type.</p></details>
            </div>
          </div>
          <aside><div className="qcard"><h3 className="text-white">Track it</h3><p>Enter the MEGTRACK or airway bill reference.</p><Link className="btn btn-red" href="/track">Track shipment</Link><hr /><Link className="text-[var(--pink)] font-bold" href="/pay">Pay charges online</Link></div></aside>
        </div>
      </Section>
    </>
  );
}
