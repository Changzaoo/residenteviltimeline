"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import {
  allMedia,
  biohazards,
  brandAssets,
  characters,
  comicsManga,
  continuities,
  dlcs,
  games,
  glossary,
  getNarrativeForTimelineEvent,
  locations,
  mediaById,
  moviesCgi,
  moviesLiveAction,
  novels,
  books,
  organizations,
  recommendedOrder,
  releaseOrder,
  remakeComparisons,
  remakes,
  series,
  sources,
  spinOffs,
  timelineEvents,
  type Biohazard,
  type Character,
  type ContinuityId,
  type Location,
  type MediaItem,
  type Organization
} from "@/data";
import { BiologicalThreatTable } from "./BiologicalThreatTable";
import { CanonBadge } from "./CanonBadge";
import { ComparisonTable } from "./ComparisonTable";
import { ContinuityTabs, type ContinuityFilter } from "./ContinuityTabs";
import { DetailModal } from "./DetailModal";
import { EncyclopediaSearch } from "./EncyclopediaSearch";
import { MediaCard } from "./MediaCard";
import { MediaLibrary } from "./MediaLibrary";
import { OfficialMarksPanel } from "./OfficialMarksPanel";
import { RemakeComparison } from "./RemakeComparison";
import { SourceCard } from "./SourceCard";
import { TimelineContinuitySelector } from "./TimelineContinuitySelector";

type Entity = MediaItem | Character | Organization | Biohazard | Location;
type TabKey =
  | "timeline"
  | "jogos"
  | "virus"
  | "personagens"
  | "organizacoes"
  | "locais"
  | "conexoes"
  | "dossies"
  | "midias"
  | "filmes"
  | "cgi"
  | "series"
  | "livros"
  | "hqs"
  | "continuidades"
  | "remakes"
  | "enciclopedia"
  | "fontes";

const tabs: { id: TabKey; label: string }[] = [
  { id: "timeline", label: "Timeline" },
  { id: "jogos", label: "Jogos" },
  { id: "virus", label: "Vírus" },
  { id: "personagens", label: "Personagens" },
  { id: "organizacoes", label: "Organizações" },
  { id: "locais", label: "Locais" },
  { id: "conexoes", label: "Conexões" },
  { id: "dossies", label: "Dossiês" },
  { id: "midias", label: "Mídias" },
  { id: "filmes", label: "Filmes" },
  { id: "cgi", label: "Animações CGI" },
  { id: "series", label: "Séries" },
  { id: "livros", label: "Livros & Novelizações" },
  { id: "hqs", label: "HQs & Mangás" },
  { id: "continuidades", label: "Continuidades" },
  { id: "remakes", label: "Remakes vs Originais" },
  { id: "enciclopedia", label: "Enciclopédia" },
  { id: "fontes", label: "Fontes" }
];

function includesQuery(item: unknown, query: string) {
  if (!query.trim()) return true;
  return JSON.stringify(item).toLowerCase().includes(query.trim().toLowerCase());
}

function canonBucket(item: Entity | MediaItem) {
  const serialized = JSON.stringify(item).toLowerCase();
  if (serialized.includes("não-canônico") || serialized.includes("non-canon")) return "nao-canonico";
  if (serialized.includes("incerto") || serialized.includes("interpretação") || serialized.includes("uncertain")) return "incerto";
  if (serialized.includes("alternativa") || serialized.includes("reboot") || serialized.includes("live-action")) return "alternativo";
  if (serialized.includes("complementar") || serialized.includes("novelização") || serialized.includes("hq")) return "complementar";
  return "principal";
}

function itemContinuities(item: Entity): ContinuityId[] {
  if ("continuity" in item) return Array.isArray(item.continuity) ? item.continuity : [item.continuity];
  if ("continuities" in item) return item.continuities;
  return [];
}

function filterEntities<T extends Entity>(items: T[], query: string, continuity: ContinuityFilter, canon: string) {
  return items.filter((item) => {
    const matchesQuery = includesQuery(item, query);
    const continuitiesForItem = itemContinuities(item);
    const matchesContinuity = continuity === "all" || continuitiesForItem.includes(continuity);
    const matchesCanon = canon === "all" || canonBucket(item) === canon;
    return matchesQuery && matchesContinuity && matchesCanon;
  });
}

function revealTabButton(id: TabKey) {
  requestAnimationFrame(() => {
    document.querySelector<HTMLButtonElement>(`[data-tab-id="${id}"]`)?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    });
  });
}

function SectionIntro() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <div className="stamp-row">
          <span className="stamp stamp-red">Dossiê Secreto</span>
          <span className="stamp stamp-green">ACCESS GRANTED</span>
        </div>
        <h1>
          Resident Evil
          <span>Umbrella Archive</span>
        </h1>
        <p>
          Enciclopédia visual em português com jogos, remakes, spin-offs, DLCs, filmes, CGI, séries,
          novelizações, HQs, mangás, personagens, organizações, locais e ameaças biológicas.
        </p>
        <div className="case-file-strip" aria-label="metadados do caso">
          <span>CASO: BIOHAZARD</span>
          <span>EVIDENCIA LACRADA</span>
          <span>PASTAS UMBRELLA</span>
        </div>
      </div>
    </section>
  );
}

function TimelineView({
  query,
  selected,
  onSelected,
  onOpen
}: {
  query: string;
  selected: string;
  onSelected: (value: string) => void;
  onOpen: (item: Entity) => void;
}) {
  const selectedContinuity = continuities.find((item) => item.id === selected);

  if (selected === "release-order") {
    const releaseItems = releaseOrder.map((id) => mediaById.get(id)).filter(Boolean) as MediaItem[];
    return <MediaLibrary title="Ordem de lançamento geral" kicker="franquia completa" items={releaseItems} onOpen={onOpen} query={query} />;
  }

  if (selected === "recommended") {
    return (
      <section className="section-block">
        <div className="section-title">
          <div>
            <p className="eyebrow">rota editorial</p>
            <h2>Ordem recomendada para consumir a história</h2>
          </div>
        </div>
        <div className="recommended-list">
          {recommendedOrder.map((block) => (
            <article className="archive-card" key={block.block}>
              <h3>{block.block}</h3>
              <p>{block.note}</p>
              <div className="chip-list">
                {block.ids.map((id) => {
                  const media = mediaById.get(id);
                  return media ? (
                    <button className="chip chip-button" key={id} onClick={() => onOpen(media)}>
                      {media.title}
                    </button>
                  ) : null;
                })}
              </div>
            </article>
          ))}
        </div>
      </section>
    );
  }

  const items = timelineEvents.filter((event) => event.continuity === selected && includesQuery(event, query));

  return (
    <section className="section-block">
      <div className="section-title">
        <div>
          <p className="eyebrow">cronologia separada</p>
          <h2>{selectedContinuity?.title ?? "Timeline"}</h2>
          <p className="section-description">{selectedContinuity?.description}</p>
          {selectedContinuity?.warning && <p className="warning-copy">{selectedContinuity.warning}</p>}
        </div>
        <TimelineContinuitySelector continuities={continuities} value={selected} onChange={onSelected} />
      </div>
      <div className="timeline-list">
        {items.map((event, index) => {
          const narrative = getNarrativeForTimelineEvent(event);
          return (
            <article className="timeline-card" key={event.id}>
              <span className="timeline-index">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <div className="card-topline">
                  <CanonBadge continuity={event.continuity as ContinuityId} />
                  <span className="badge badge-muted">{event.year}</span>
                </div>
                <h3>{event.title}</h3>
                <p>{event.summary}</p>
                {narrative.length > 0 && (
                  <details className="timeline-history">
                    <summary>Narrativa completa do acontecimento</summary>
                    {narrative.map((block) => (
                      <section key={block.title}>
                        <h4>{block.title}</h4>
                        <p>{block.body}</p>
                      </section>
                    ))}
                  </details>
                )}
                <div className="chip-list">
                  {event.mediaIds.map((id) => {
                    const media = mediaById.get(id);
                    return media ? (
                      <button className="chip chip-button" key={id} onClick={() => onOpen(media)}>
                        {media.title}
                      </button>
                    ) : null;
                  })}
                </div>
                <p className="canon-note-inline">{event.canonNote}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function ContinuitiesView() {
  return (
    <section className="section-block">
      <div className="section-title">
        <div>
          <p className="eyebrow">arquitetura de canon</p>
          <h2>Continuidades separadas</h2>
        </div>
      </div>
      <div className="card-grid two">
        {continuities.map((continuity) => (
          <article className="archive-card" key={continuity.id}>
            <div className="card-topline">
              <span className="badge badge-blue">{continuity.badge}</span>
            </div>
            <h3>{continuity.title}</h3>
            <p>{continuity.description}</p>
            {continuity.warning && <p className="warning-copy">{continuity.warning}</p>}
            <div className="chip-list">
              {continuity.includes.map((item) => (
                <span className="chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ConnectionsView({ onOpen }: { onOpen: (item: Entity) => void }) {
  const connections = [
    ["Mother Miranda", "Oswell E. Spencer", "inspiração ideológica"],
    ["Progenitor Virus", "T-Virus", "derivação viral"],
    ["T-Virus", "Raccoon City", "surto urbano"],
    ["G-Virus", "Sherry Birkin", "legado Birkin"],
    ["Las Plagas", "Los Illuminados", "controle parasitário"],
    ["Mold / Mutamycete", "Rosemary Winters", "herança fúngica"],
    ["Alyssa Ashcroft", "Grace Ashcroft", "ponte Outbreak/Requiem"]
  ];
  return (
    <section className="section-block">
      <div className="section-title">
        <div>
          <p className="eyebrow">grafo da lore</p>
          <h2>Conexões principais</h2>
        </div>
      </div>
      <div className="connection-list">
        {connections.map(([from, to, relation]) => (
          <article className="connection-card" key={`${from}-${to}`}>
            <strong>{from}</strong>
            <span>→</span>
            <strong>{to}</strong>
            <em>{relation}</em>
          </article>
        ))}
      </div>
      <ComparisonTable media={allMedia} />
      <button className="hidden-action" onClick={() => onOpen(allMedia[0])}>abrir referência</button>
    </section>
  );
}

function DossiersView({ onOpen }: { onOpen: (item: Entity) => void }) {
  const dossiers = [...characters.slice(0, 8), ...biohazards.slice(0, 8), ...organizations.slice(0, 6)];
  return (
    <section className="section-block">
      <div className="section-title">
        <div>
          <p className="eyebrow">arquivos confidenciais</p>
          <h2>Dossiês</h2>
        </div>
      </div>
      <div className="card-grid">
        {dossiers.map((item) => (
          <MediaCard key={item.id} item={item} onOpen={onOpen} />
        ))}
      </div>
    </section>
  );
}

export function ArchiveApp() {
  const [tab, setTab] = useState<TabKey>("timeline");
  const [query, setQuery] = useState("");
  const [continuity, setContinuity] = useState<ContinuityFilter>("all");
  const [canon, setCanon] = useState("all");
  const [timelineContinuity, setTimelineContinuity] = useState("games-canon");
  const [detail, setDetail] = useState<Entity | null>(null);

  const filteredCharacters = useMemo(() => filterEntities(characters, query, continuity, canon), [query, continuity, canon]);
  const filteredOrganizations = useMemo(() => filterEntities(organizations, query, continuity, canon), [query, continuity, canon]);
  const filteredBiohazards = useMemo(() => filterEntities(biohazards, query, continuity, canon), [query, continuity, canon]);
  const filteredLocations = useMemo(() => filterEntities(locations, query, continuity, canon), [query, continuity, canon]);
  const filteredMedia = useMemo(() => filterEntities(allMedia, query, continuity, canon), [query, continuity, canon]);
  const encyclopediaItems = useMemo(
    () => [...filteredMedia, ...filteredCharacters, ...filteredBiohazards, ...filteredOrganizations, ...filteredLocations],
    [filteredMedia, filteredCharacters, filteredBiohazards, filteredOrganizations, filteredLocations]
  );

  const booksAndNovels = [...books, ...novels];
  const openDetail = (item: Entity) => setDetail(item);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const activeEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        const activeId = activeEntry?.target.id.replace("section-", "") as TabKey | undefined;
        if (activeId) {
          setTab((current) => {
            if (current !== activeId) revealTabButton(activeId);
            return activeId;
          });
        }
      },
      { rootMargin: "-22% 0px -64% 0px", threshold: [0.08, 0.2, 0.42] }
    );

    tabs.forEach((item) => {
      const section = document.getElementById(`section-${item.id}`);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const syncFromHash = () => {
      const id = window.location.hash.replace("#section-", "") as TabKey;
      if (tabs.some((item) => item.id === id)) {
        setTab(id);
        revealTabButton(id);
      }
    };

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  function scrollToSection(id: TabKey) {
    setTab(id);
    revealTabButton(id);
    window.history.replaceState(null, "", `#section-${id}`);
    document.getElementById(`section-${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const archiveSections = [
    {
      id: "timeline" as const,
      chapter: "CAPITULO 03 - TIMELINE",
      content: <TimelineView query={query} selected={timelineContinuity} onSelected={setTimelineContinuity} onOpen={openDetail} />
    },
    {
      id: "jogos" as const,
      chapter: "CAPITULO 04 - JOGOS",
      content: <MediaLibrary title="Jogos principais, remakes, spin-offs e DLCs" kicker="canon e complementos" items={[...games, ...remakes, ...spinOffs, ...dlcs]} onOpen={openDetail} continuity={continuity} query={query} />
    },
    {
      id: "virus" as const,
      chapter: "CAPITULO 05 - AMEACAS BIOLOGICAS",
      content: <BiologicalThreatTable items={filteredBiohazards} onOpen={openDetail} />
    },
    {
      id: "personagens" as const,
      chapter: "CAPITULO 06 - PERSONAGENS",
      content: <MediaCards title="Personagens" items={filteredCharacters} onOpen={openDetail} />
    },
    {
      id: "organizacoes" as const,
      chapter: "CAPITULO 07 - ORGANIZACOES",
      content: <MediaCards title="Organizações" items={filteredOrganizations} onOpen={openDetail} />
    },
    {
      id: "locais" as const,
      chapter: "CAPITULO 08 - LOCAIS",
      content: <MediaCards title="Locais" items={filteredLocations} onOpen={openDetail} />
    },
    {
      id: "conexoes" as const,
      chapter: "CAPITULO 09 - CONEXOES",
      content: <ConnectionsView onOpen={openDetail} />
    },
    {
      id: "dossies" as const,
      chapter: "CAPITULO 10 - DOSSIES",
      content: <DossiersView onOpen={openDetail} />
    },
    {
      id: "midias" as const,
      chapter: "CAPITULO 11 - BIBLIOTECA DE MIDIAS",
      content: <MediaLibrary title="Biblioteca de mídias" kicker="jogos, filmes, livros e mais" items={allMedia} onOpen={openDetail} continuity={continuity} query={query} />
    },
    {
      id: "filmes" as const,
      chapter: "CAPITULO 12 - FILMES",
      content: <MediaLibrary title="Filmes live-action" kicker="saga Alice e reboot" items={moviesLiveAction} onOpen={openDetail} continuity={continuity} query={query} />
    },
    {
      id: "cgi" as const,
      chapter: "CAPITULO 13 - ANIMACOES CGI",
      content: <MediaLibrary title="Animações CGI" kicker="canon próximo aos jogos" items={moviesCgi} onOpen={openDetail} continuity={continuity} query={query} />
    },
    {
      id: "series" as const,
      chapter: "CAPITULO 14 - SERIES",
      content: <MediaLibrary title="Séries" kicker="CGI e live-action" items={series} onOpen={openDetail} continuity={continuity} query={query} />
    },
    {
      id: "livros" as const,
      chapter: "CAPITULO 15 - LIVROS E NOVELIZACOES",
      content: <MediaLibrary title="Livros & Novelizações" kicker="S. D. Perry, guias e derivados" items={booksAndNovels} onOpen={openDetail} continuity={continuity} query={query} />
    },
    {
      id: "hqs" as const,
      chapter: "CAPITULO 16 - HQS E MANGAS",
      content: <MediaLibrary title="HQs & Mangás" kicker="material licenciado" items={comicsManga} onOpen={openDetail} continuity={continuity} query={query} />
    },
    {
      id: "continuidades" as const,
      chapter: "CAPITULO 17 - CONTINUIDADES",
      content: <ContinuitiesView />
    },
    {
      id: "remakes" as const,
      chapter: "CAPITULO 18 - REMAKES VS ORIGINAIS",
      content: <RemakeComparison items={remakeComparisons} />
    },
    {
      id: "enciclopedia" as const,
      chapter: "CAPITULO 19 - ENCICLOPEDIA",
      content: <EncyclopediaSearch items={encyclopediaItems} onOpen={openDetail} />
    },
    {
      id: "fontes" as const,
      chapter: "CAPITULO 20 - FONTES",
      content: <SourcesView />
    }
  ];

  return (
    <main>
      <div className="noise-layer" />
      <div className="crime-scene-layer" aria-hidden="true">
        <div className="crime-tape crime-tape-a">
          {Array.from({ length: 8 }).map((_, index) => (
            <span key={`tape-a-${index}`}>CENA DO CRIME - EVIDENCIA BIOHAZARD - ARQUIVO UMBRELLA</span>
          ))}
        </div>
        <div className="crime-tape crime-tape-b">
          {Array.from({ length: 8 }).map((_, index) => (
            <span key={`tape-b-${index}`}>ACESSO RESTRITO - CASO LACRADO - NAO CRUZAR</span>
          ))}
        </div>
      </div>
      <header className="topbar">
        <div className="brand">
          <span className="brand-mark" aria-hidden="true">
            <Image src="/umbrella-logo.svg" alt="" width={72} height={72} priority />
          </span>
          <div>
            <strong>Umbrella Archive</strong>
            <span>Resident Evil Timeline</span>
          </div>
        </div>
        <nav className="tab-strip">
          {tabs.map((item, index) => (
            <button className={tab === item.id ? "active" : ""} data-tab-id={item.id} key={item.id} onClick={() => scrollToSection(item.id)}>
              <span className="tab-number">{String(index + 1).padStart(2, "0")}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </header>

      <SectionIntro />

      <section className="control-deck">
        <div className="search-box">
          <span>⌕</span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar jogo, filme, personagem, vírus, organização, local, ano ou continuidade..." />
        </div>
        <ContinuityTabs continuities={continuities} value={continuity} onChange={setContinuity} />
        <div className="selector-panel">
          <label htmlFor="canon-filter">Canon</label>
          <select id="canon-filter" value={canon} onChange={(event) => setCanon(event.target.value)}>
            <option value="all">Tudo</option>
            <option value="principal">Canon principal</option>
            <option value="complementar">Complementar</option>
            <option value="alternativo">Alternativo</option>
            <option value="nao-canonico">Não-canônico</option>
            <option value="incerto">Incerto</option>
          </select>
        </div>
      </section>

      <div className="content-shell">
        {archiveSections.map((section) => (
          <div className="archive-page-section" data-chapter={section.chapter} id={`section-${section.id}`} key={section.id}>
            {section.content}
          </div>
        ))}
      </div>

      <footer className="footer">
        <span>Projeto de fa nao oficial e nao comercial. Resident Evil, Biohazard, personagens, logos e marcas pertencem a Capcom.</span>
        <span>{allMedia.length} mídias · {characters.length} personagens · {biohazards.length} ameaças · {sources.length} fontes</span>
      </footer>

      <DetailModal item={detail} sources={sources} onClose={() => setDetail(null)} />
    </main>
  );
}

function MediaCards({ title, items, onOpen }: { title: string; items: Entity[]; onOpen: (item: Entity) => void }) {
  return (
    <section className="section-block">
      <div className="section-title">
        <div>
          <p className="eyebrow">arquivo indexado</p>
          <h2>{title}</h2>
        </div>
        <span className="counter">{items.length} registros</span>
      </div>
      <div className="card-grid">
        {items.map((item) => (
          <MediaCard key={item.id} item={item} onOpen={onOpen} />
        ))}
      </div>
    </section>
  );
}

function SourcesView() {
  return (
    <section className="section-block">
      <div className="section-title">
        <div>
          <p className="eyebrow">referências externas</p>
          <h2>Fontes usadas</h2>
          <p className="section-description">
            As páginas abaixo foram usadas para conferência de títulos, datas, personagens, organizações, mídias derivadas e separação de continuidades.
          </p>
        </div>
      </div>
      <div className="card-grid two">
        {sources.map((source) => (
          <SourceCard key={source.id} source={source} />
        ))}
      </div>
      <OfficialMarksPanel assets={brandAssets} />
      <div className="glossary-panel">
        <h3>Glossário editorial</h3>
        <div className="card-grid two">
          {glossary.map((term) => (
            <article className="archive-card" key={term.id}>
              <span className="badge badge-muted">{term.category}</span>
              <h3>{term.term}</h3>
              <p>{term.definition}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
