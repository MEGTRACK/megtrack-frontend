import { ButtonLink } from "@/components/ui/Button";

export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[90] flex gap-2 border-t border-[var(--line)] bg-white/95 px-3 py-[10px] shadow-[0_-10px_24px_-18px_rgba(0,0,0,.4)] lg:hidden">
      <ButtonLink href="/quote" variant="red" size="sm" className="flex-1">Get a quote</ButtonLink>
      <ButtonLink href="/contact" variant="line" size="sm" className="flex-1">WhatsApp us</ButtonLink>
    </div>
  );
}