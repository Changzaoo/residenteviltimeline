"use client";

import type { SourceRef } from "@/data";

export function SourceCard({ source }: { source: SourceRef }) {
  return (
    <a className="source-card" href={source.url} target="_blank" rel="noreferrer">
      <div className="card-topline">
        <span className={source.reliability === "high" ? "badge badge-green" : "badge badge-blue"}>
          {source.reliability === "high" ? "FONTE OFICIAL" : "FONTE SECUNDÁRIA"}
        </span>
        <span className="badge badge-muted">{source.type}</span>
      </div>
      <h3>{source.name}</h3>
      <p>{source.notes}</p>
      <span className="source-url">{source.url}</span>
    </a>
  );
}
