import Link from "next/link";
import { cacheLife } from "next/cache";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { navLinks, siteConfig } from "@/lib/config";

async function getCopyrightYear() {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}

export async function Footer() {
  const year = await getCopyrightYear();
  return (
    <footer className="relative overflow-hidden bg-[var(--jet)] pb-8 text-[#d9cccd]">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-7 border-b border-[#3a2627] py-10 pb-12">
          <h2 className="m-0 max-w-[16ch] font-display text-[clamp(1.9rem,3.5vw,3rem)] font-extrabold italic [font-stretch:118%] text-white">
            Ship from India to Australia, end to end.
          </h2>
          <ButtonLink href="/quote" variant="red">Get a quote</ButtonLink>
        </div>
        <div className="grid grid-cols-[1.3fr_repeat(4,1fr)] gap-8 py-12 max-[1000px]:grid-cols-2 max-[560px]:grid-cols-1">
          <div>
            <b className="font-display text-xl font-extrabold text-white">MEGTRACK</b>
            <p className="mt-4 text-[0.93rem] text-[#a99496]">
              {siteConfig.description}
            </p>
          </div>
          <FootCol title="Services" links={[{ href: "/services/courier", label: "Courier" }, { href: "/services/cargo", label: "Cargo" }, { href: "/services/customs", label: "Customs" }, { href: "/services/warehousing", label: "Warehousing" }, { href: "/services/delivery", label: "Delivery" }]} />
          <FootCol title="Company" links={[{ href: "/about", label: "About" }, { href: "/partners", label: "Partners" }, { href: "/contact", label: "Contact" }]} />
          <FootCol title="Resources" links={[{ href: "/blog", label: "Blog" }, { href: "/estimate", label: "Rate estimate" }, { href: "/prohibited", label: "Can I send it?" }]} />
          <FootCol title="India → AU" links={navLinks} />
        </div>
        <div className="flex flex-wrap justify-between gap-4 border-t border-[#3a2627] pt-6 text-[0.84rem] text-[#a99496]">
          <span>© {year} {siteConfig.name}. All rights reserved.</span>
          <span>ABN pending · ACN pending</span>
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
  links: readonly { href: string; label: string }[];
}) {
  return (
    <div>
      <h4 className="mb-[14px] font-display text-base text-white">{title}</h4>
      <ul className="m-0 grid list-none gap-[9px] p-0 text-[0.93rem]">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="hover:text-white hover:underline">{l.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}