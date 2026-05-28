"use client";

import type { MediaItem } from "@/data";
import { CanonBadge } from "./CanonBadge";

export function ComparisonTable({ media }: { media: MediaItem[] }) {
  const games = media.filter((item) => item.continuity === "games-canon").slice(0, 8);
  const films = media.filter((item) => item.continuity === "live-action-anderson").slice(0, 8);

  return (
    <section className="section-block">
      <div className="section-title">
        <div>
          <p className="eyebrow">comparação de continuidades</p>
          <h2>Jogos vs filmes</h2>
        </div>
      </div>
      <div className="comparison-grid">
        <div className="comparison-column">
          <CanonBadge continuity="games-canon" />
          <h3>Canon dos jogos</h3>
          {games.map((item) => (
            <div className="mini-row" key={item.id}>
              <strong>{item.title}</strong>
              <span>{item.inUniverseYear ?? item.releaseYear}</span>
            </div>
          ))}
        </div>
        <div className="comparison-column">
          <CanonBadge continuity="live-action-anderson" />
          <h3>Saga Alice</h3>
          {films.map((item) => (
            <div className="mini-row" key={item.id}>
              <strong>{item.title}</strong>
              <span>{item.releaseYear}</span>
            </div>
          ))}
        </div>
      </div>
      <p className="warning-copy">
        Os filmes usam nomes e conceitos dos jogos, mas a protagonista Alice, a estrutura do Hive e o apocalipse global pertencem a uma continuidade alternativa.
      </p>
    </section>
  );
}
