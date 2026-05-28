"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { CharacterOutfit } from "@/data";
import { CanonBadge } from "./CanonBadge";

export function CharacterOutfitCarousel({
  outfits,
  variant = "panel"
}: {
  outfits: CharacterOutfit[];
  variant?: "panel" | "hero";
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const hasMany = outfits.length > 1;

  useEffect(() => {
    if (!hasMany) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % outfits.length);
    }, 3600);

    return () => window.clearInterval(timer);
  }, [hasMany, outfits.length]);

  const normalizedIndex = outfits.length > 0 ? activeIndex % outfits.length : 0;
  const active = outfits[normalizedIndex] ?? outfits[0];
  if (!active) return null;

  function move(direction: number) {
    setActiveIndex((current) => (current + direction + outfits.length) % outfits.length);
  }

  if (variant === "hero") {
    return (
      <figure className="modal-visual visual-character outfit-hero-carousel" aria-label="Carrossel de trajes por epoca">
        <Image
          key={active.id}
          src={active.src}
          alt={`${active.label} - ${active.mediaTitle}`}
          fill
          sizes="(max-width: 720px) 100vw, 420px"
          unoptimized
        />

        {hasMany && (
          <div className="outfit-hero-strip" role="list" aria-label="Selecionar visual do personagem">
            {outfits.map((outfit, index) => (
              <button
                className={index === normalizedIndex ? "outfit-hero-thumb active" : "outfit-hero-thumb"}
                key={outfit.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Abrir ${outfit.label}`}
                aria-current={index === normalizedIndex}
                role="listitem"
              >
                <Image src={outfit.src} alt="" fill sizes="56px" unoptimized />
              </button>
            ))}
          </div>
        )}

        {hasMany && (
          <div className="outfit-hero-controls" aria-label="Controles do carrossel">
            <button type="button" onClick={() => move(-1)} aria-label="Traje anterior">
              {"<"}
            </button>
            <button type="button" onClick={() => move(1)} aria-label="Proximo traje">
              {">"}
            </button>
          </div>
        )}

        <div className="outfit-hero-meta">
          <span>{active.era}</span>
          <strong>{active.label}</strong>
          <small>{active.mediaTitle}</small>
        </div>

        <figcaption>
          Imagem: <a href={active.sourceUrl} target="_blank" rel="noreferrer">{active.sourceName}</a>
        </figcaption>
      </figure>
    );
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
            <span>{normalizedIndex + 1}/{outfits.length}</span>
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
              className={index === normalizedIndex ? "outfit-thumb active" : "outfit-thumb"}
              key={outfit.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Abrir ${outfit.label}`}
              aria-current={index === normalizedIndex}
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
