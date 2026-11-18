"use client";

import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";

export function MobileNav({
  id,
  open,
  onClose,
  navLinks,
  quickLinks,
}: {
  id: string;
  open: boolean;
  onClose: () => void;
  navLinks: readonly { href: string; label: string }[];
  quickLinks: readonly { href: string; label: string }[];
}) {
  if (!open) return null;
  return (
    <div
      id={id}
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      className="fixed inset-0 z-[150] flex flex-col overflow-auto bg-[var(--jet)] px-[22px] py-5 text-white"
    >
      <div className="mb-5 flex items-center justify-between">
        <Image
          src="/megtrack-logo.png"
          alt="MEGTRACK"
          width={330}
          height={36}
          style={{ width: "auto", height: "28px" }}
          className="h-7 w-auto brightness-0 invert"
        />
        <button
          type="button"
          onClick={onClose}
          className="rounded-full border-[1.5px] border-white/50 px-4 py-2 text-sm font-bold"
        >
          <X className="mr-1 inline h-4 w-4" /> Close
        </button>
      </div>
      <nav aria-label="Mobile">
        {navLinks.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            onClick={onClose}
            className="block border-b border-white/10 py-[10px] font-display text-[2rem] font-[750] leading-tight [font-stretch:110%]"
          >
            {l.label}
            {l.href === "/services" && <small className="block text-[0.85rem] font-normal text-[#c9b8ba]">Courier, cargo, customs, storage, delivery</small>}
            {l.href === "/ship-from/india-to-australia" && <small className="block text-[0.85rem] font-normal text-[#c9b8ba]">Door to door from anywhere in India</small>}
            {l.href === "/partners" && <small className="block text-[0.85rem] font-normal text-[#c9b8ba]">For couriers and forwarders</small>}
            {l.href === "/blog" && <small className="block text-[0.85rem] font-normal text-[#c9b8ba]">Guides and shipping insights</small>}
          </Link>
        ))}
      </nav>
      <div className="mt-6 grid grid-cols-2 gap-[10px]">
        {quickLinks.map((q) => (
          <ButtonLink key={q.href} href={q.href} variant="ghost" size="sm" className="w-full">
            {q.label}
          </ButtonLink>
        ))}
      </div>
    </div>
  );
}