"use client";

import { useState, type FormEvent } from "react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <>
      <PageHero
        crumbs={[{ label: "Contact" }]}
        title="Contact MEGTRACK"
        lead="Talk to us about a shipment from India, a quote or a partnership."
      />

      <Section>
        <div className="split">
          {/* Left: content + form */}
          <div>
            {sent ? (
              <div className="ok-box">
                <h3>Message sent</h3>
                <p style={{ margin: 0 }}>
                  Our team will reply within 1 business day.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} className="card">
                <div className="fs">
                  <div className="f2">
                    <label>
                      Your name
                      <input required />
                    </label>
                    <label>
                      Email
                      <input required type="email" />
                    </label>
                  </div>

                  <label>
                    Phone or WhatsApp
                    <input type="tel" />
                  </label>

                  <label>
                    How can we help?
                    <textarea required rows={5} />
                  </label>

                  <button
                    type="submit"
                    className="btn btn-red"
                    style={{ justifySelf: "start" }}
                  >
                    Send message
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right: sticky contact card */}
          <aside className="qcard">
            <h3>Talk to us</h3>
            <p>
              Prefer to speak with someone? Reach our team directly — we reply
              within 1 business day.
            </p>

            <hr />

            <p style={{ margin: "0 0 6px" }}>
              <b>Email</b>
            </p>
            <p style={{ margin: "0 0 18px" }}>
              <a href="mailto:hello@megtrack.com.au" className="sm">
                hello@megtrack.com.au
              </a>
            </p>

            <p style={{ margin: "0 0 6px" }}>
              <b>WhatsApp</b>
            </p>
            <p style={{ margin: "0 0 18px" }}>Available via the form</p>

            <a className="btn btn-red" href="#/quote">
              Get a quote
            </a>
          </aside>
        </div>
      </Section>
    </>
  );
}
