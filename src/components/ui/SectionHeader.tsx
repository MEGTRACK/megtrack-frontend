export function SectionHeader({
  kicker,
  title,
  lead,
  action,
  dark = false,
}: {
  kicker?: string;
  title: React.ReactNode;
  lead?: string;
  action?: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <div className="shead">
      <div>
        {kicker && (
          <div
            className={`kicker ${dark ? "dark" : ""}`}
          >
            <span className="block h-[2px] w-7 -rotate-12 bg-current" />
            {kicker}
          </div>
        )}
        <h2 className="font-display text-[clamp(1.9rem,3.5vw,3rem)] font-[750] leading-[1.06] tracking-[-0.01em] [font-stretch:108%]">
          {title}
        </h2>
        {lead && <p className={`mt-2 max-w-[60ch] ${dark ? "text-[#c9b8ba]" : "text-[var(--muted)]"}`}>{lead}</p>}
      </div>
      {action}
    </div>
  );
}