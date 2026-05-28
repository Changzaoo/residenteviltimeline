"use client";

import type { Biohazard, Character, Location, MediaItem, Organization } from "@/data";
import { MediaCard } from "./MediaCard";

type Entity = MediaItem | Character | Organization | Biohazard | Location;

function searchable(item: Entity) {
  return JSON.stringify(item).toLowerCase();
}

function typeOf(item: Entity) {
  if ("title" in item) return item.type;
  if ("role" in item) return "personagem";
  if ("category" in item) return "ameaça";
  if ("goals" in item) return "organização";
  return "local";
}

export function EncyclopediaSearch({
  items,
  onOpen
}: {
  items: Entity[];
  onOpen: (item: Entity) => void;
}) {
  const buckets = ["todos", "game", "live-action-movie", "cgi-movie", "personagem", "ameaça", "organização", "local"];

  return (
    <section className="section-block">
      <div className="section-title">
        <div>
          <p className="eyebrow">busca cruzada</p>
          <h2>Enciclopédia</h2>
        </div>
        <span className="counter">{items.length} verbetes indexados</span>
      </div>
      <div className="encyclopedia-note">
        Use a busca global no topo para filtrar por mídia, personagem, ameaça, organização, local, continuidade, ano de lançamento ou ano na lore.
      </div>
      <div className="encyclopedia-buckets">
        {buckets.map((bucket) => {
          const count = bucket === "todos" ? items.length : items.filter((item) => typeOf(item) === bucket).length;
          return (
            <div key={bucket}>
              <span>{bucket}</span>
              <strong>{count}</strong>
            </div>
          );
        })}
      </div>
      <div className="card-grid">
        {items.slice(0, 120).map((item) => (
          <MediaCard key={`${typeOf(item)}-${item.id}`} item={item} onOpen={onOpen} />
        ))}
      </div>
      <span className="sr-only">{items.map(searchable).join(" ")}</span>
    </section>
  );
}
