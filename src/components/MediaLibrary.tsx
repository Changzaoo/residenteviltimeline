"use client";

import type { MediaItem, ContinuityId } from "@/data";
import { MediaCard } from "./MediaCard";

export function MediaLibrary({
  title,
  kicker,
  items,
  onOpen,
  continuity = "all",
  query = ""
}: {
  title: string;
  kicker: string;
  items: MediaItem[];
  onOpen: (item: MediaItem) => void;
  continuity?: ContinuityId | "all";
  query?: string;
}) {
  const needle = query.trim().toLowerCase();
  const filtered = items.filter((item) => {
    const matchesContinuity = continuity === "all" || item.continuity === continuity;
    const haystack = [
      item.title,
      item.originalTitle,
      item.type,
      item.releaseYear,
      item.inUniverseYear,
      item.summary,
      item.canonNote,
      ...(item.protagonists ?? []),
      ...(item.antagonists ?? []),
      ...(item.organizations ?? []),
      ...(item.biohazards ?? []),
      ...(item.locations ?? [])
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
    return matchesContinuity && (!needle || haystack.includes(needle));
  });

  return (
    <section className="section-block">
      <div className="section-title">
        <div>
          <p className="eyebrow">{kicker}</p>
          <h2>{title}</h2>
        </div>
        <span className="counter">{filtered.length} registros</span>
      </div>
      <div className="card-grid">
        {filtered.map((item) => (
          <MediaCard key={item.id} item={item} onOpen={() => onOpen(item)} />
        ))}
      </div>
    </section>
  );
}
