"use client";

import type { Continuity } from "@/data";

export function TimelineContinuitySelector({
  continuities,
  value,
  onChange
}: {
  continuities: Continuity[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="selector-panel">
      <label htmlFor="timeline-continuity">Continuidade</label>
      <select id="timeline-continuity" value={value} onChange={(event) => onChange(event.target.value)}>
        {continuities.map((continuity) => (
          <option key={continuity.id} value={continuity.id}>
            {continuity.title}
          </option>
        ))}
      </select>
    </div>
  );
}
