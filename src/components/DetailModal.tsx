"use client";

import Image from "next/image";
import { getCharacterOutfits, getNarrativeForItem, getVisualAsset, type Biohazard, type Character, type Location, type MediaItem, type Organization, type SourceRef } from "@/data";
import { CanonBadge, getCanonStatus } from "./CanonBadge";
import { CharacterOutfitCarousel } from "./CharacterOutfitCarousel";

type DetailItem = MediaItem | Character | Organization | Biohazard | Location;

function titleOf(item: DetailItem) {
  return "title" in item ? item.title : item.name;
}

function continuityOf(item: DetailItem) {
  if ("continuity" in item) return Array.isArray(item.continuity) ? item.continuity : [item.continuity];
  if ("continuities" in item) return item.continuities;
  return [];
}

function canonNoteOf(item: DetailItem) {
  return "canonNote" in item ? item.canonNote : "";
}

function sourceRefsOf(item: DetailItem) {
  return "sourceRefs" in item ? item.sourceRefs : [];
}

function summaryOf(item: DetailItem) {
  if ("summary" in item) return item.summary;
  if ("effects" in item) return item.effects.join(" · ");
  if ("goals" in item) return `${item.goals} ${item.role}`;
  if ("significance" in item) return item.significance;
  return "";
}

function listSection(title: string, values?: string[]) {
  if (!values?.length) return null;
  return (
    <div className="detail-section">
      <strong>{title}</strong>
      <div className="chip-list">
        {values.map((value) => (
          <span className="chip" key={value}>
            {value}
          </span>
        ))}
      </div>
    </div>
  );
}

function narrativeLabel(item: DetailItem) {
  if ("type" in item && "releaseYear" in item) return "Dossiê narrativo da mídia";
  if ("role" in item && "relationships" in item) return "Registro narrativo do personagem";
  if ("effects" in item && "threatLevel" in item) return "Relatório narrativo da amostra";
  if ("goals" in item && "role" in item) return "Memorando narrativo da organização";
  if ("region" in item && "significance" in item) return "Cena narrativa do local";
  return "Registro narrativo";
}

export function DetailModal({
  item,
  sources,
  onClose
}: {
  item: DetailItem | null;
  sources: SourceRef[];
  onClose: () => void;
}) {
  if (!item) return null;
  const continuities = continuityOf(item);
  const refs = sourceRefsOf(item)
    .map((id) => sources.find((source) => source.id === id))
    .filter(Boolean) as SourceRef[];
  const narrative = getNarrativeForItem(item);
  const visual = getVisualAsset(item.id);
  const isCharacter = "relationships" in item && "affiliations" in item;
  const outfits = isCharacter ? getCharacterOutfits(item.id) : [];
  const hasHeroVisual = outfits.length > 0 || Boolean(visual);

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true">
      <article className="detail-modal scanlines">
        <button className="modal-close" onClick={onClose} aria-label="Fechar detalhes">
          ×
        </button>
        <div className="modal-header">
          <div>
            <p className="eyebrow">arquivo detalhado</p>
            <h2>{titleOf(item)}</h2>
          </div>
          <div className="badge-stack">
            {continuities.map((continuity) => (
              <CanonBadge key={continuity} continuity={continuity} />
            ))}
          </div>
        </div>

        <div className={hasHeroVisual ? "modal-hero-grid" : "modal-hero-grid no-visual"}>
          {outfits.length > 0 ? (
            <CharacterOutfitCarousel key={item.id} outfits={outfits} variant="hero" />
          ) : visual ? (
            <figure className={`modal-visual visual-${visual.category}`}>
              <Image src={visual.src} alt={visual.title} fill sizes="(max-width: 720px) 100vw, 420px" unoptimized />
              <figcaption>
                Imagem: <a href={visual.sourceUrl} target="_blank" rel="noreferrer">{visual.sourceName}</a>
              </figcaption>
            </figure>
          ) : null}

          <div className="modal-text-column">
            <p className="modal-summary">{summaryOf(item)}</p>

            {narrative.length > 0 && (
              <div className="full-history">
                <strong>{narrativeLabel(item)}</strong>
                {narrative.map((block) => (
                  <section key={block.title}>
                    <h3>{block.title}</h3>
                    <p>{block.body}</p>
                  </section>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="modal-grid">
          {"protagonists" in item && listSection("Protagonistas", item.protagonists)}
          {"supportingCharacters" in item && listSection("Personagens de apoio", item.supportingCharacters)}
          {"antagonists" in item && listSection("Antagonistas", item.antagonists)}
          {"organizations" in item && listSection("Organizações", item.organizations)}
          {"biohazards" in item && listSection("Ameaças biológicas", item.biohazards)}
          {"locations" in item && listSection("Locais", item.locations)}
          {"relatedMedia" in item && listSection("Mídias relacionadas", item.relatedMedia)}
          {"relationships" in item && listSection("Relações", item.relationships)}
          {"affiliations" in item && listSection("Afiliações", item.affiliations)}
          {"effects" in item && listSection("Efeitos", item.effects)}
          {"knownCases" in item && listSection("Casos conhecidos", item.knownCases)}
        </div>

        <div className="canon-note">
          <strong>Nota de canon</strong>
          <p>{canonNoteOf(item)}</p>
          {continuities[0] && <small>{getCanonStatus(continuities[0])}</small>}
        </div>

        <div className="source-mini-list">
          <strong>Fontes ligadas</strong>
          {refs.map((source) => (
            <a key={source.id} href={source.url} target="_blank" rel="noreferrer">
              {source.name}
            </a>
          ))}
        </div>
      </article>
    </div>
  );
}
