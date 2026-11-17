const rows = [
  { code: "DEL", city: "Delhi", eta: "5–7d" },
  { code: "BOM", city: "Mumbai", eta: "5–8d" },
  { code: "BLR", city: "Bengaluru", eta: "6–9d" },
  { code: "MAA", city: "Chennai", eta: "6–9d" },
  { code: "HYD", city: "Hyderabad", eta: "6–9d" },
];

export function DeparturesBoard() {
  return (
    <div className="relative z-[2] w-[min(520px,100%)] rounded-2xl border border-[#3a2627] bg-[#120a0b] p-5 pb-4 text-[#f4ecec] shadow-[0_40px_80px_-30px_rgba(0,0,0,.7)]">
      <div className="mb-3 flex items-center justify-between">
        <b className="font-display text-[1.1rem] font-[750] [font-stretch:118%]">Origin departures</b>
        <span className="text-[0.78rem] text-[#b9a5a7]">Today</span>
      </div>
      <table className="w-full border-separate border-spacing-y-1.5 text-[0.86rem]">
        <thead>
          <tr>
            <th className="px-2 text-left text-[0.74rem] font-semibold text-[#9c8789]">From</th>
            <th className="px-2 text-left text-[0.74rem] font-semibold text-[#9c8789]">City</th>
            <th className="px-2 text-right text-[0.74rem] font-semibold text-[#9c8789]">ETA</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.code}>
              <td className="rounded-l-lg bg-[#1d1213] px-2 py-2.5">
                <span className="block font-display text-[1.05rem] font-[750] leading-none tracking-[0.04em] [font-stretch:118%]">{r.code}</span>
              </td>
              <td className="bg-[#1d1213] px-2 py-2.5 text-[#b9a5a7]">{r.city}</td>
              <td className="rounded-r-lg bg-[#1d1213] px-2 py-2.5 text-right">
                <span className="inline-block min-w-[9.2ch] rounded-md bg-[#2b1a1b] px-2 py-1 text-center font-display text-[0.8rem] font-bold tracking-[0.04em] tabular-nums text-[var(--pink)]">
                  {r.eta}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-2 flex flex-wrap justify-between gap-2 text-[0.75rem] text-[#9c8789]">
        <span>Times indicative, subject to clearance</span>
        <span>v1.0</span>
      </div>
    </div>
  );
}