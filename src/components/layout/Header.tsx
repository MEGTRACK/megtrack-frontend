"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { navLinks, quickLinks } from "@/lib/config";
import { services } from "@/lib/data/services";
import { MobileNav } from "./MobileNav";

export function Header() {
  const pathname = usePathname();
  return <HeaderContent key={pathname} pathname={pathname} />;
}

function HeaderContent({ pathname }: { pathname: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [trackOpen, setTrackOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = pathname === "/";
  const solid = !isHome || scrolled || trackOpen || servicesOpen;
  const onDark = isHome && !solid;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[100] transition-[background,box-shadow] duration-200 ${
          solid
            ? "bg-white/95 shadow-[0_1px_0_var(--line),0_10px_30px_-24px_rgba(0,0,0,.4)] backdrop-blur-md"
            : ""
        }`}
      >
        <div className="mx-auto flex h-[78px] max-w-[1240px] items-center gap-5 px-7 max-[600px]:h-[66px] max-[600px]:px-4">
          <Link
            href="/"
            aria-label="MEGTRACK Freight Forwarding, home"
            className="flex shrink-0 items-center no-underline"
          >
            <Image
              src="/megtrack-logo.png"
              alt="MEGTRACK Freight Forwarding"
              width={330}
              height={36}
              priority
              style={{ width: "auto", height: "36px" }}
              className={`h-9 w-auto max-[600px]:h-[18px] ${
                onDark ? "brightness-0 invert" : ""
              }`}
            />
          </Link>

          <nav
            aria-label="Main"
            className={`ml-auto hidden items-center gap-[2px] rounded-full p-[5px] min-[1101px]:flex ${
              onDark ? "bg-white/10" : "bg-[rgba(33,20,20,.04)]"
            }`}
          >
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                aria-expanded={servicesOpen}
                aria-controls="services-menu"
                aria-current={
                  pathname.startsWith("/services") ? "page" : undefined
                }
                onClick={() => {
                  setTrackOpen(false);
                  setServicesOpen(true);
                }}
                className={`rounded-full px-[15px] py-[9px] text-[0.93rem] font-semibold ${
                  onDark
                    ? "text-white hover:bg-white hover:text-[var(--jet)]"
                    : "text-[var(--jet)] hover:bg-white"
                }`}
              >
                Services
                <span
                  aria-hidden="true"
                  className="ml-2 inline-block h-[6px] w-[6px] rotate-45 border-b-2 border-r-2 border-current align-[3px]"
                />
              </button>
              {servicesOpen && (
                <div
                  id="services-menu"
                  className="absolute left-1/2 top-[calc(100%+14px)] z-50 grid w-[min(760px,92vw)] -translate-x-[30%] grid-cols-[1.25fr_.75fr] overflow-hidden rounded-[20px] bg-white text-[var(--jet)] shadow-[0_30px_60px_-20px_rgba(33,20,20,.45)]"
                >
                  <div className="grid gap-0 p-[14px]">
                    {services.map(
                      ({ slug, title, shortDescription, icon: Icon }) => (
                        <Link
                          key={slug}
                          href={`/services/${slug}`}
                          className="grid grid-cols-[40px_1fr] items-center gap-3 rounded-xl px-3 py-2.5 no-underline hover:bg-[var(--mist)]"
                        >
                          <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#fbe9eb] text-[var(--red)]">
                            <Icon className="h-[22px] w-[22px]" />
                          </span>
                          <span>
                            <b className="block text-[0.95rem]">{title}</b>
                            <span className="text-[0.82rem] text-[var(--muted)]">
                              {shortDescription}
                            </span>
                          </span>
                        </Link>
                      ),
                    )}
                    <Link
                      href="/services"
                      className="flex items-center gap-2 rounded-xl px-3 py-2.5 font-bold text-[var(--red-deep)] no-underline hover:bg-[var(--mist)]"
                    >
                      All services <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                  <div className="grad-red flex flex-col p-[22px] text-white">
                    <span className="text-[0.85rem] text-[#f6dadc]">
                      India origin
                    </span>
                    <h2 className="mb-2 mt-2 font-display text-xl font-bold">
                      Ship from anywhere in India
                    </h2>
                    <p className="text-[0.9rem] text-[#f6dadc]">
                      Door to door, with clearance coordinated and delivery
                      Australia-wide.
                    </p>
                    <ButtonLink
                      href="/ship-from/india-to-australia"
                      variant="light"
                      size="sm"
                      className="mt-auto self-start"
                    >
                      India → Australia
                    </ButtonLink>
                  </div>
                </div>
              )}
            </div>

            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-full px-[15px] py-[9px] text-[0.93rem] font-semibold no-underline ${
                    active
                      ? onDark
                        ? "bg-white !text-[var(--jet)]"
                        : "bg-[var(--jet)] !text-white"
                      : onDark
                        ? "text-white hover:bg-white hover:text-[var(--jet)]"
                        : "text-[var(--jet)] hover:bg-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="ml-auto flex items-center gap-2 min-[1101px]:ml-0">
            <button
              type="button"
              onClick={() => {
                setServicesOpen(false);
                setTrackOpen((open) => !open);
              }}
              aria-expanded={trackOpen}
              aria-controls="trackPop"
              title="Track a shipment"
              className={`grid h-11 w-11 place-items-center rounded-full border-[1.5px] ${
                onDark
                  ? "border-white/40 bg-transparent text-white"
                  : "border-[var(--line)] bg-white text-[var(--jet)]"
              }`}
            >
              <span className="sr-only">Track a shipment</span>
              <Search className="h-5 w-5" />
            </button>
            <ButtonLink
              href="/quote"
              variant="red"
              size="sm"
              className="max-[1100px]:hidden"
            >
              Get a quote
            </ButtonLink>
            <button
              type="button"
              onClick={() => {
                setTrackOpen(false);
                setServicesOpen(false);
                setMenuOpen(true);
              }}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="ml-1 inline-flex items-center gap-2 rounded-full bg-[var(--jet)] px-[18px] py-[10px] text-[0.9rem] font-bold text-white min-[1101px]:hidden"
            >
              <Menu className="h-4 w-4" /> Menu
            </button>
          </div>
        </div>

        {trackOpen && (
          <form
            id="trackPop"
            action="/track"
            method="get"
            role="search"
            className="absolute right-7 top-[72px] w-[330px] rounded-2xl bg-white p-[18px] text-[var(--jet)] shadow-[0_30px_60px_-20px_rgba(33,20,20,.45)] max-[600px]:left-3 max-[600px]:right-3 max-[600px]:top-[62px] max-[600px]:w-auto"
          >
            <label htmlFor="tq" className="mb-2 block font-bold">
              Track a shipment
            </label>
            <div className="flex gap-2">
              <input
                id="tq"
                name="n"
                required
                autoComplete="off"
                placeholder="MEGTRACK or airway bill no."
                className="w-full rounded-xl border-[1.5px] border-[var(--line)] px-[14px] py-3"
              />
              <button
                type="submit"
                className="rounded-full bg-[var(--red)] px-[18px] py-[10px] text-[0.9rem] font-bold text-white"
              >
                Track
              </button>
            </div>
            <p className="mb-0 mt-2.5 text-[0.82rem] text-[var(--muted)]">
              Waiting for a parcel?{" "}
              <Link href="/receiving" className="font-semibold">
                What happens when it lands
              </Link>
            </p>
          </form>
        )}
      </header>

      <MobileNav
        id="mobile-menu"
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        navLinks={[...navLinks, { href: "/services", label: "Services" }]}
        quickLinks={quickLinks}
      />
    </>
  );
}
