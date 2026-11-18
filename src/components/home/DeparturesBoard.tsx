const rows = [
  { code: "DEL", city: "Delhi", to: "SYD", shipment: "Personal parcel", status: "Delivered" },
  { code: "BOM", city: "Mumbai", to: "MEL", shipment: "E-commerce orders", status: "Cleared" },
  { code: "BLR", city: "Bengaluru", to: "SYD", shipment: "Commercial cargo", status: "In transit" },
  { code: "ATQ", city: "Amritsar", to: "MEL", shipment: "Gift parcel", status: "Picked up" },
];

export function DeparturesBoard() {
  return (
    <div className="board">
      <div className="bh">
        <b className="font-display text-[1.1rem] font-[750] [font-stretch:118%]">Departures</b>
        <span className="text-[0.78rem] text-[#b9a5a7]">India → Australia · example</span>
      </div>
      <table className="w-full border-separate border-spacing-y-1.5 text-[0.86rem]">
        <thead>
          <tr>
            <th className="px-2 text-left text-[0.74rem] font-semibold text-[#9c8789]">From</th>
            <th className="px-2 text-left text-[0.74rem] font-semibold text-[#9c8789]">To</th>
            <th className="px-2 text-left text-[0.74rem] font-semibold text-[#9c8789] max-[520px]:hidden">Shipment</th>
            <th className="px-2 text-left text-[0.74rem] font-semibold text-[#9c8789]">Status</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.code}>
              <td className="rounded-l-lg bg-[#1d1213] px-2 py-2.5">
                <span className="block font-display text-[1.05rem] font-[750] leading-none tracking-[0.04em] [font-stretch:118%]">{r.code}</span>
                <small className="mt-1 block text-[0.72rem] text-[#9c8789]">{r.city}</small>
              </td>
              <td className="bg-[#1d1213] px-2 py-2.5"><span className="font-display text-[1.05rem] font-[750]">{r.to}</span></td>
              <td className="bg-[#1d1213] px-2 py-2.5 max-[520px]:hidden">{r.shipment}</td>
              <td className="rounded-r-lg bg-[#1d1213] px-2 py-2.5">
                <span className="inline-block min-w-[9.2ch] rounded-md bg-[#2b1a1b] px-2 py-1 text-center font-display text-[0.8rem] font-bold tracking-[0.04em] tabular-nums text-[var(--pink)]">
                  {r.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="foot">
        <span>Illustration only, not live data</span>
        <a href="/track" className="font-semibold text-[var(--pink)] no-underline">Track a real shipment</a>
      </div>
    </div>
  );
}