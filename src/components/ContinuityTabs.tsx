"use client";

import type { Continuity, ContinuityId } from "@/data";

export type ContinuityFilter = ContinuityId | "all";

export function ContinuityTabs({
  continuities,
  value,
  onChange
}: {
  continuities: Continuity[];
  value: ContinuityFilter;
  onChange: (value: ContinuityFilter) => void;
}) {
  const options = continuities.filter((item) =>
    [
      "games-canon",
      "cgi-canon",
      "live-action-anderson",
      "welcome-to-raccoon-city",
      "netflix-series",
      "novelization",
      "comic-manga"
    ].includes(item.id)
  );

  return (
    <div className="continuity-tabs">
      <button className={value === "all" ? "active" : ""} onClick={() => onChange("all")}>
        Tudo
      </button>
      {options.map((item) => (
        <button
          className={value === item.id ? "active" : ""}
          key={item.id}
          onClick={() => onChange(item.id as ContinuityId)}
          title={item.description}
        >
          {item.badge}
        </button>
      ))}
    </div>
  );
}
