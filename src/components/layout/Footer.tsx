import Link from "next/link";
import Image from "next/image";
import { cacheLife } from "next/cache";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { BackToTop } from "@/components/layout/BackToTop";

async function getCopyrightYear() {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}

const SERVICES = [
  {
    href: "/services/courier-import-handling",
    label: "Courier Import Handling",
  },
  { href: "/services/cargo-import-handling", label: "Cargo Import Handling" },
  { href: "/services/customs-clearance", label: "Customs Clearance" },
  { href: "/services/warehousing", label: "Warehousing & Storage" },
  { href: "/services/last-mile-delivery", label: "Last-Mile Delivery" },
];

const LANE = [
  { href: "/ship-from/india-to-australia", label: "Ship from India" },
  { href: "/estimate", label: "Rate estimate" },
  { href: "/prohibited", label: "Can I send it?" },
  { href: "/track", label: "Track a shipment" },
  { href: "/receiving", label: "Receiving a parcel" },
  { href: "/pay", label: "Pay charges" },
];

const COMPANY = [
  { href: "/about", label: "About" },
  { href: "/partners", label: "For partners" },
  { href: "/who-we-serve", label: "Who we serve" },
  { href: "/contact", label: "Contact" },
  { href: "/quote", label: "Request a quote" },
];

// Keep in sync with the latest 4 posts (HTML used title.split(":")[0]).
const BLOG = [
  {
    href: "/blog/shipping-from-india-to-australia-guide",
    label: "How to ship from India to Australia",
  },
  {
    href: "/blog/customs-clearance-australia-explained",
    label: "Customs clearance in Australia",
  },
  {
    href: "/blog/what-you-cant-send-to-australia",
    label: "What you can't send to Australia from India",
  },
  {
    href: "/blog/commercial-invoice-packing-list-guide",
    label: "Commercial invoice and packing list",
  },
];

const confirm =
  "rounded-[3px] bg-[#FFF1C2] px-1 text-[0.86em] font-medium text-[#5B4300]";

export async function Footer() {
  const year = await getCopyrightYear();
  return (
    <footer className="relative overflow-hidden bg-[var(--jet)] pb-[30px] text-[#d9cccd]">
      <svg
        className="block h-20 w-full"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 60 C 360 10, 900 90, 1440 20"
          fill="none"
          stroke="#4A3536"
          strokeWidth="2"
          strokeDasharray="4 10"
        />
      </svg>
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-7 border-b border-[#3a2627] pb-12 pt-10">
          <h2 className="m-0 max-w-[16ch] font-display text-[clamp(1.9rem,3.5vw,3rem)] font-extrabold italic [font-stretch:118%] text-white">
            From India to every doorstep in Australia.
          </h2>
          <div className="ctas">
            <ButtonLink href="/quote" variant="red">
              Request a quote
            </ButtonLink>
            {/* Swap for the wa.me link once the WhatsApp number is confirmed */}
            <Link href="/contact" className="btn btn-ghost">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2a10 10 0 00-8.6 15.1L2 22l5-1.3A10 10 0 1012 2zm0 18.2a8.2 8.2 0 01-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1112 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.6.8-.8 1-.3.2-.5.1a6.7 6.7 0 01-3.3-2.9c-.3-.4.3-.4.7-1.4a.5.5 0 000-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 00-.7.3 3 3 0 00-.9 2.2 5.2 5.2 0 001.1 2.7 11.8 11.8 0 004.5 4c1.7.7 2.3.8 3.1.7a2.7 2.7 0 001.8-1.3 2.2 2.2 0 00.2-1.3c-.1-.1-.3-.2-.5-.3z" />
              </svg>
              WhatsApp
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-[1.3fr_repeat(4,1fr)] gap-8 py-12 max-[1000px]:grid-cols-2 max-[560px]:grid-cols-1">
          <div>
            <Image
              src="/megtrack-logo.png"
              alt="MEGTRACK Freight Forwarding"
              width={330}
              height={36}
              style={{ width: "auto", height: "32px" }}
              className="mb-4 brightness-0 invert"
            />
            <p className="text-[0.93rem]">
              The Australian landing team for courier and cargo shipments from
              India.
            </p>
            <p className="text-[0.9rem]">
              <span className={confirm}>Phone</span> ·{" "}
              <span className={confirm}>Email</span>
              <br />
              <span className={confirm}>Address</span> ·{" "}
              <span className={confirm}>ABN</span>
            </p>
          </div>
          <FootCol title="Services" links={SERVICES} />
          <FootCol title="India → Australia" links={LANE} />
          <FootCol title="Company" links={COMPANY} />
          <FootCol
            title="Blog"
            links={[
              ...BLOG,
              { href: "/blog", label: "All articles", bold: true },
            ]}
          />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#3a2627] pt-[22px] text-[0.84rem] text-[#a99496]">
          <span>
            © {year} MEGTRACK Freight Forwarding. All rights reserved.
          </span>
          <span>
            <Link href="/privacy" className="hover:text-white hover:underline">
              Privacy
            </Link>
            {"  "}
            <Link href="/privacy" className="hover:text-white hover:underline">
              Terms
            </Link>
            {"  "}
            <Link href="/privacy" className="hover:text-white hover:underline">
              Accessibility
            </Link>
          </span>
          <BackToTop />
        </div>
      </Container>
    </footer>
  );
}

function FootCol({
  title,
  links,
}: {
  title: string;
  links: readonly { href: string; label: string; bold?: boolean }[];
}) {
  return (
    <div>
      <h4 className="mb-[14px] font-display text-base text-white">{title}</h4>
      <ul className="m-0 grid list-none gap-[9px] p-0 text-[0.93rem]">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="no-underline hover:text-white hover:underline"
            >
              {l.bold ? <b>{l.label}</b> : l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
