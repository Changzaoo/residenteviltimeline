"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { getVisualAsset, mediaById, sources, sourceById, walkthroughs, type MediaItem, type SourceRef, type WalkthroughGuide } from "@/data";
import { CanonBadge } from "./CanonBadge";
import { NarrationControls } from "./NarrationControls";

function guideSearchText(guide: WalkthroughGuide) {
  const media = mediaById.get(guide.mediaId);
  return [
    guide.title,
    guide.intro,
    guide.continuity,
    guide.difficulty,
    media?.title,
    media?.inUniverseYear,
    ...(media?.protagonists ?? []),
    ...(media?.biohazards ?? []),
    ...(media?.locations ?? []),
    ...guide.recommendedRoute,
    ...guide.preparation,
    ...guide.bossNotes,
    ...guide.completionChecklist,
    ...guide.steps.flatMap((step) => [step.title, step.route, step.bossStrategy, step.completionCheck, ...(step.objectives ?? []), ...(step.hazards ?? []), ...(step.puzzleNotes ?? [])])
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

function narrationText(guide: WalkthroughGuide) {
  const steps = guide.steps
    .map((step, index) => {
      const objectives = step.objectives.length ? `Objetivos: ${step.objectives.join(", ")}.` : "";
      const hazards = step.hazards.length ? `Ameaças: ${step.hazards.join(", ")}.` : "";
      const puzzles = step.puzzleNotes?.length ? `Notas de puzzle: ${step.puzzleNotes.join(" ")}` : "";
      const boss = step.bossStrategy ? `Estratégia de chefe: ${step.bossStrategy}` : "";
      return `Parte ${index + 1}: ${step.title}. ${step.route} ${objectives} ${hazards} ${puzzles} ${boss}`;
    })
    .join(" ");

  return `${guide.title}. ${guide.intro} Preparação: ${guide.preparation.join(" ")} Rota recomendada: ${guide.recommendedRoute.join(", ")}. ${steps} Checklist de conclusão: ${guide.completionChecklist.join(" ")}`;
}

function GuideMeta({ guide, media }: { guide: WalkthroughGuide; media?: MediaItem }) {
  return (
    <div className="walkthrough-meta">
      <span>{media?.type ?? "jogo"}</span>
      <span>{media?.inUniverseYear ?? "ano variavel"}</span>
      <span>{guide.estimatedRun}</span>
      <span>dificuldade {guide.difficulty}</span>
      <span>spoiler {guide.spoilerLevel}</span>
    </div>
  );
}

export function WalkthroughHub({
  query,
  onOpen
}: {
  query: string;
  onOpen: (item: MediaItem) => void;
}) {
  const needle = query.trim().toLowerCase();
  const filteredGuides = useMemo(() => {
    if (!needle) return walkthroughs;
    return walkthroughs.filter((guide) => guideSearchText(guide).includes(needle));
  }, [needle]);

  const [selectedId, setSelectedId] = useState(filteredGuides[0]?.id ?? walkthroughs[0]?.id ?? "");

  const selectedGuide = filteredGuides.find((guide) => guide.id === selectedId) ?? filteredGuides[0] ?? walkthroughs[0];
  const media = selectedGuide ? mediaById.get(selectedGuide.mediaId) : undefined;
  const visual = media ? getVisualAsset(media.id) : undefined;
  const refs = selectedGuide.sourceRefs.map((id) => sourceById.get(id)).filter((source): source is SourceRef => Boolean(source));

  return (
    <section className="section-block walkthrough-section">
      <div className="section-title">
        <div>
          <p className="eyebrow">guia de sobrevivência</p>
          <h2>Walkthroughs dos jogos</h2>
          <p className="section-description">
            Rotas originais em português para zerar campanhas, remakes, spin-offs e DLCs, com separação de canon e fontes de conferência.
          </p>
        </div>
        <span className="counter">{filteredGuides.length} guias</span>
      </div>

      <div className="walkthrough-layout">
        <aside className="walkthrough-index" aria-label="Lista de walkthroughs">
          {filteredGuides.map((guide) => {
            const guideMedia = mediaById.get(guide.mediaId);
            const active = selectedGuide?.id === guide.id;
            return (
              <button className={active ? "active" : ""} key={guide.id} onClick={() => setSelectedId(guide.id)} type="button">
                <span>{guideMedia?.inUniverseYear ?? guideMedia?.releaseYear ?? "arquivo"}</span>
                <strong>{guideMedia?.title ?? guide.title}</strong>
                <small>{guide.difficulty} · {guide.estimatedRun}</small>
              </button>
            );
          })}
        </aside>

        {selectedGuide && (
          <article className="walkthrough-dossier scanlines">
            <div className="walkthrough-hero">
              {visual && (
                <figure className="walkthrough-cover">
                  <Image src={visual.src} alt={visual.title} fill sizes="(max-width: 720px) 100vw, 220px" unoptimized />
                  <figcaption>
                    Imagem: <a href={visual.sourceUrl} target="_blank" rel="noreferrer">{visual.sourceName}</a>
                  </figcaption>
                </figure>
              )}

              <div className="walkthrough-hero-copy">
                <div className="card-topline">
                  <CanonBadge continuity={selectedGuide.continuity} />
                  {media && <span className="badge badge-muted">{media.releaseYear}</span>}
                </div>
                <h3>{selectedGuide.title}</h3>
                <GuideMeta guide={selectedGuide} media={media} />
                <p>{selectedGuide.intro}</p>
                <div className="walkthrough-actions">
                  <NarrationControls text={narrationText(selectedGuide)} title={`Narrar ${selectedGuide.title}`} />
                  {media && (
                    <button className="walkthrough-open-media" onClick={() => onOpen(media)} type="button">
                      Abrir dossiê da mídia
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className="walkthrough-briefing">
              <section>
                <h4>Preparação</h4>
                <ul>
                  {selectedGuide.preparation.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
              <section>
                <h4>Rota recomendada</h4>
                <ol>
                  {selectedGuide.recommendedRoute.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              </section>
            </div>

            <div className="walkthrough-steps">
              {selectedGuide.steps.map((step, index) => (
                <section className="walkthrough-step" key={`${selectedGuide.id}-${step.title}`}>
                  <span className="walkthrough-step-index">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h4>{step.title}</h4>
                    <p>{step.route}</p>
                    <div className="walkthrough-step-grid">
                      <div>
                        <strong>Objetivos</strong>
                        <ul>
                          {step.objectives.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <strong>Ameaças</strong>
                        <ul>
                          {step.hazards.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    {step.puzzleNotes && (
                      <div className="walkthrough-note">
                        <strong>Puzzles e travas</strong>
                        {step.puzzleNotes.map((item) => (
                          <p key={item}>{item}</p>
                        ))}
                      </div>
                    )}
                    {step.bossStrategy && (
                      <div className="walkthrough-note danger">
                        <strong>Chefe / pressão</strong>
                        <p>{step.bossStrategy}</p>
                      </div>
                    )}
                    {step.completionCheck && (
                      <div className="walkthrough-note success">
                        <strong>Checagem</strong>
                        <p>{step.completionCheck}</p>
                      </div>
                    )}
                  </div>
                </section>
              ))}
            </div>

            <div className="walkthrough-briefing">
              <section>
                <h4>Chefes e ameaças</h4>
                <ul>
                  {selectedGuide.bossNotes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
              <section>
                <h4>Checklist para zerar</h4>
                <ul>
                  {selectedGuide.completionChecklist.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
              {selectedGuide.postGame && (
                <section>
                  <h4>Pós-jogo</h4>
                  <ul>
                    {selectedGuide.postGame.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
              )}
            </div>

            <div className="source-mini-list walkthrough-sources">
              <strong>Fontes de conferência do guia</strong>
              {refs.map((source) => (
                <a href={source.url} key={source.id} target="_blank" rel="noreferrer">
                  {source.name}
                </a>
              ))}
              {refs.length === 0 && sources.slice(0, 2).map((source) => (
                <a href={source.url} key={source.id} target="_blank" rel="noreferrer">
                  {source.name}
                </a>
              ))}
            </div>
          </article>
        )}
      </div>
    </section>
  );
}
