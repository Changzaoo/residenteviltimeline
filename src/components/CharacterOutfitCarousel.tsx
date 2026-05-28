"use client";

import { useState } from "react";
import Image from "next/image";
import type { CharacterOutfit } from "@/data";
import { CanonBadge } from "./CanonBadge";

export function CharacterOutfitCarousel({ outfits }: { outfits: CharacterOutfit[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  if (outfits.length === 0) return null;

  const active = outfits[activeIndex] ?? outfits[0];
  const hasMany = outfits.length > 1;

  function move(direction: number) {
    setActiveIndex((current) => (current + direction + outfits.length) % outfits.length);
  }

  return (
    <section className="outfit-carousel" aria-label="Arquivo visual de trajes por epoca">
      <div className="outfit-carousel-head">
        <div>
          <p className="eyebrow">linha visual do personagem</p>
          <h3>Trajes por epoca</h3>
        </div>
        {hasMany && (
          <div className="outfit-controls" aria-label="Controles do carrossel">
            <button type="button" onClick={() => move(-1)} aria-label="Traje anterior">
              {"<"}
            </button>
            <span>{activeIndex + 1}/{outfits.length}</span>
            <button type="button" onClick={() => move(1)} aria-label="Proximo traje">
              {">"}
            </button>
          </div>
        )}
      </div>

      <div className="outfit-stage">
        <figure className="outfit-image-frame">
          <Image
            src={active.src}
            alt={`${active.label} - ${active.mediaTitle}`}
            fill
            sizes="(max-width: 720px) 100vw, 360px"
            unoptimized
          />
          <figcaption>
            Imagem: <a href={active.sourceUrl} target="_blank" rel="noreferrer">{active.sourceName}</a>
          </figcaption>
        </figure>

        <div className="outfit-info">
          <div className="badge-stack">
            <CanonBadge continuity={active.continuity} />
            <span className={`outfit-kind outfit-kind-${active.kind}`}>{active.kind}</span>
          </div>
          <p className="outfit-era">{active.era}</p>
          <h4>{active.label}</h4>
          <strong>{active.mediaTitle}</strong>
          <p>{active.note}</p>
        </div>
      </div>

      {hasMany && (
        <div className="outfit-strip" role="list" aria-label="Selecionar traje">
          {outfits.map((outfit, index) => (
            <button
              className={index === activeIndex ? "outfit-thumb active" : "outfit-thumb"}
              key={outfit.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Abrir ${outfit.label}`}
              aria-current={index === activeIndex}
              role="listitem"
            >
              <Image src={outfit.src} alt="" fill sizes="80px" unoptimized />
              <span>{outfit.era.split(" - ")[0]}</span>
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
