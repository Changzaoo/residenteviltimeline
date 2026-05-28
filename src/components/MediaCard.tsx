"use client";

import type { Character, Location, MediaItem, Organization, Biohazard } from "@/data";
import { CanonBadge } from "./CanonBadge";

type CardItem = MediaItem | Character | Organization | Biohazard | Location;

function getTitle(item: CardItem) {
  if ("title" in item) return item.title;
  if ("name" in item) return item.name;
  return "Arquivo sem título";
}

function getSubtitle(item: CardItem) {
  if ("type" in item && "releaseYear" in item) return `${item.type} · ${item.releaseYear}`;
  if ("role" in item) return `${item.role} · ${item.firstAppearance}`;
  if ("category" in item) return `${item.category} · ${item.firstAppearance}`;
  if ("region" in item) return `${item.region} · ${item.firstAppearance}`;
  return "organização";
}

function getSummary(item: CardItem) {
  if ("summary" in item) return item.summary;
  if ("effects" in item) return item.effects.join(" · ");
  if ("goals" in item) return item.role;
  if ("significance" in item) return item.significance;
  return "";
}

function getContinuity(item: CardItem) {
  if ("continuity" in item) {
    return Array.isArray(item.continuity) ? item.continuity[0] : item.continuity;
  }
  if ("continuities" in item) return item.continuities[0];
  return undefined;
}

export function MediaCard({
  item,
  onOpen
}: {
  item: CardItem;
  onOpen: (item: CardItem) => void;
}) {
  const continuity = getContinuity(item);
  const summary = getSummary(item);

  return (
    <button className="archive-card glitch-card" onClick={() => onOpen(item)}>
      <span className="corner corner-a" />
      <span className="corner corner-b" />
      <div className="card-topline">
        {continuity && <CanonBadge continuity={continuity} />}
        {"threatLevel" in item && <span className="badge badge-red">{item.threatLevel}</span>}
      </div>
      <h3>{getTitle(item)}</h3>
      <p className="card-subtitle">{getSubtitle(item)}</p>
      <p className="card-summary">{summary}</p>
      <div className="card-footer">
        <span>abrir arquivo</span>
        <span>↗</span>
      </div>
    </button>
  );
}
