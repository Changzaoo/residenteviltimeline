"use client";

import Image from "next/image";
import { getVisualAsset, type Biohazard, type Character, type Location, type MediaItem, type Organization } from "@/data";
import { CanonBadge } from "./CanonBadge";

type CardItem = MediaItem | Character | Organization | Biohazard | Location;

function getTitle(item: CardItem) {
  if ("title" in item) return item.title;
  if ("name" in item) return item.name;
  return "Arquivo sem título";
}

function getSubtitle(item: CardItem) {
  if ("type" in item && "releaseYear" in item) return `${item.type} · ${item.releaseYear}`;
  if ("goals" in item) return `${item.type} · ${item.firstAppearance}`;
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

function getFileClass(item: CardItem) {
  if ("category" in item) return "amostra";
  if ("goals" in item) return "organizacao";
  if ("role" in item) return "pessoa";
  if ("region" in item) return "local";
  if ("type" in item) return item.type;
  return "arquivo";
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
  const fileClass = getFileClass(item);
  const visual = getVisualAsset(item.id);

  return (
    <button className={`archive-card glitch-card has-visual visual-${visual?.category ?? fileClass}`} onClick={() => onOpen(item)}>
      <span className="folder-tab">{fileClass}</span>
      <span className="corner corner-a" />
      <span className="corner corner-b" />
      <div className="card-file-layout">
        <span className="card-visual" aria-hidden="true">
          {visual ? (
            <Image src={visual.src} alt="" fill sizes="(max-width: 560px) 8rem, 9rem" unoptimized />
          ) : (
            <span className="visual-fallback-mark">{getTitle(item).slice(0, 2)}</span>
          )}
          <span className="visual-scan" />
        </span>
        <span className="card-text-stack">
          <span className="card-topline">
            {continuity && <CanonBadge continuity={continuity} />}
            {"threatLevel" in item && <span className="badge badge-red">{item.threatLevel}</span>}
          </span>
          <h3>{getTitle(item)}</h3>
          <span className="card-subtitle">{getSubtitle(item)}</span>
          <span className="card-summary">{summary}</span>
        </span>
      </div>
      <div className="card-footer">
        <span>abrir arquivo</span>
        <span>↗</span>
      </div>
    </button>
  );
}
