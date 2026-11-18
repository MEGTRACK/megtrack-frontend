import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";

export default function PayPage() {
  return (
    <>
      <PageHero crumbs={[{ label: "Pay charges" }]} title="Pay charges on a MEGTRACK shipment" lead="Secure payment for duty, GST or service charges will be available at launch." />
      <Section>
        <div className="split">
          <form className="card">
            <div className="fs">
              <div className="f2"><div><label>Full name<input required /></label></div><div><label>Email for receipt<input required type="email" /></label></div></div>
              <div className="f2"><div><label>Shipment reference<input required /></label></div><div><label>Amount (AUD)<input required type="number" min="1" step="0.01" /></label></div></div>
              <button type="submit" className="btn btn-red">Continue to secure payment</button>
              <p className="muted text-[0.85rem] m-0">Card details are entered on the payment provider&apos;s secure page, never on this site.</p>
            </div>
          </form>
          <aside><div className="qcard"><h3 className="text-white">Before you pay</h3><ul className="checks text-[#e9dfe0]"><li>Use the exact amount on your notice</li><li>Your shipment is released once payment clears</li><li>Never send card details by email or WhatsApp</li></ul></div></aside>
        </div>
      </Section>
    </>
  );
}
