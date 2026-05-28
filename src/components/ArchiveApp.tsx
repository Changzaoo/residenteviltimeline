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
import { CommunityHub } from "./CommunityHub";
import { ContinuityTabs, type ContinuityFilter } from "./ContinuityTabs";
import { DetailModal } from "./DetailModal";
import { EncyclopediaSearch } from "./EncyclopediaSearch";
import { MediaCard } from "./MediaCard";
import { MediaLibrary } from "./MediaLibrary";
import { OfficialMarksPanel } from "./OfficialMarksPanel";
import { RemakeComparison } from "./RemakeComparison";
import { SourceCard } from "./SourceCard";
import { TimelineContinuitySelector } from "./TimelineContinuitySelector";
import { AuthStatusButton } from "./AuthStatusButton";

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
  | "comunidade"
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
  { id: "comunidade", label: "Comunidade" },
  { id: "fontes", label: "Fontes" }
];

const gameCanonOrder: Record<string, number> = {
  "re0-2002": 10,
  "re1-remake-2002": 20,
  "re1-1996": 21,
  outbreak: 30,
  "outbreak-file-2": 31,
  "re3-remake-2020": 40,
  "re3-1999": 41,
  "re2-remake-2019": 50,
  "re2-1998": 51,
  "re-survivor": 60,
  "code-veronica": 70,
  "dead-aim": 80,
  "darkside-chronicles": 90,
  "umbrella-chronicles": 100,
  "re4-remake-2023": 110,
  "re4-2005": 111,
  "re4r-separate-ways": 112,
  revelations: 120,
  "re5-lost-in-nightmares": 130,
  "re5-2009": 140,
  "re5-desperate-escape": 141,
  "revelations-2": 150,
  "re6-2012": 160,
  "re7-banned-footage": 170,
  "re7-2017": 171,
  "re7-not-a-hero": 172,
  "re7-end-of-zoe": 173,
  "re-village-2021": 180,
  "village-shadows-of-rose": 190,
  "re-requiem-2026": 700,
  "operation-raccoon-city": 1000,
  resistance: 1010,
  "survivor-2-code-veronica": 1100,
  "resident-evil-gaiden": 1110,
  "mercenaries-3d": 1120,
  reverse: 1130
};

const continuitySortWeight: Record<ContinuityId, number> = {
  "games-canon": 0,
  "cgi-canon": 3000,
  "live-action-anderson": 5000,
  "welcome-to-raccoon-city": 5100,
  "netflix-series": 5200,
  novelization: 6000,
  "comic-manga": 6100,
  uncertain: 7000,
  alternate: 8000,
  "non-canon": 9000
};

function firstLoreYear(item: MediaItem) {
  const match = item.inUniverseYear?.match(/\d{4}/);
  return match ? Number(match[0]) : 9999;
}

function sortGamesByCanon(items: MediaItem[]) {
  return [...items].sort((a, b) => {
    const aOrder = gameCanonOrder[a.id] ?? continuitySortWeight[a.continuity] + firstLoreYear(a);
    const bOrder = gameCanonOrder[b.id] ?? continuitySortWeight[b.continuity] + firstLoreYear(b);
    return aOrder - bOrder || String(a.releaseYear).localeCompare(String(b.releaseYear)) || a.title.localeCompare(b.title);
  });
}

const canonOrderedGameMedia = sortGamesByCanon([...games, ...remakes, ...spinOffs, ...dlcs]);

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

function revealActiveSection(id: TabKey) {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.getElementById(`section-${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    const syncFromHash = () => {
      const id = window.location.hash.replace("#section-", "").replace("#", "") as TabKey;
      if (tabs.some((item) => item.id === id)) {
        setTab(id);
        setMobileMenuOpen(false);
        revealTabButton(id);
        revealActiveSection(id);
      }
    };

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const closeWithEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileMenuOpen(false);
    };

    window.addEventListener("keydown", closeWithEscape);
    return () => window.removeEventListener("keydown", closeWithEscape);
  }, [mobileMenuOpen]);

  function selectTab(id: TabKey) {
    setTab(id);
    setMobileMenuOpen(false);
    revealTabButton(id);
    window.history.replaceState(null, "", `#section-${id}`);
    revealActiveSection(id);
  }

  function renderActiveTab() {
    if (tab === "timeline") return <TimelineView query={query} selected={timelineContinuity} onSelected={setTimelineContinuity} onOpen={openDetail} />;
    if (tab === "jogos") return <MediaLibrary title="Jogos principais, remakes, spin-offs e DLCs" kicker="ordem canonica da lore" items={canonOrderedGameMedia} onOpen={openDetail} continuity={continuity} query={query} />;
    if (tab === "virus") return <BiologicalThreatTable items={filteredBiohazards} onOpen={openDetail} />;
    if (tab === "personagens") return <MediaCards title="Personagens" items={filteredCharacters} onOpen={openDetail} />;
    if (tab === "organizacoes") return <MediaCards title="Organizações" items={filteredOrganizations} onOpen={openDetail} />;
    if (tab === "locais") return <MediaCards title="Locais" items={filteredLocations} onOpen={openDetail} />;
    if (tab === "conexoes") return <ConnectionsView onOpen={openDetail} />;
    if (tab === "dossies") return <DossiersView onOpen={openDetail} />;
    if (tab === "midias") return <MediaLibrary title="Biblioteca de mídias" kicker="jogos, filmes, livros e mais" items={allMedia} onOpen={openDetail} continuity={continuity} query={query} />;
    if (tab === "filmes") return <MediaLibrary title="Filmes live-action" kicker="saga Alice e reboot" items={moviesLiveAction} onOpen={openDetail} continuity={continuity} query={query} />;
    if (tab === "cgi") return <MediaLibrary title="Animações CGI" kicker="canon próximo aos jogos" items={moviesCgi} onOpen={openDetail} continuity={continuity} query={query} />;
    if (tab === "series") return <MediaLibrary title="Séries" kicker="CGI e live-action" items={series} onOpen={openDetail} continuity={continuity} query={query} />;
    if (tab === "livros") return <MediaLibrary title="Livros & Novelizações" kicker="S. D. Perry, guias e derivados" items={booksAndNovels} onOpen={openDetail} continuity={continuity} query={query} />;
    if (tab === "hqs") return <MediaLibrary title="HQs & Mangás" kicker="material licenciado" items={comicsManga} onOpen={openDetail} continuity={continuity} query={query} />;
    if (tab === "continuidades") return <ContinuitiesView />;
    if (tab === "remakes") return <RemakeComparison items={remakeComparisons} />;
    if (tab === "enciclopedia") return <EncyclopediaSearch items={encyclopediaItems} onOpen={openDetail} />;
    if (tab === "comunidade") return <CommunityHub />;
    return <SourcesView />;
  }

  const activeTabLabel = tabs.find((item) => item.id === tab)?.label ?? "Menu";

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
        <div className="topbar-main">
          <div className="brand">
            <span className="brand-mark" aria-hidden="true">
              <Image src="/umbrella-logo.svg" alt="" width={72} height={72} priority />
            </span>
            <div>
              <strong>Umbrella Archive</strong>
              <span>Resident Evil Timeline</span>
            </div>
          </div>
          <AuthStatusButton onOpenCommunity={() => selectTab("comunidade")} />
          <button
            aria-controls="mobile-archive-menu"
            aria-expanded={mobileMenuOpen}
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen((value) => !value)}
            type="button"
          >
            <span className="mobile-menu-lines" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span>Menu</span>
          </button>
        </div>
        <nav className="tab-strip desktop-nav" aria-label="Menu principal">
          {tabs.map((item) => (
            <button className={tab === item.id ? "active" : ""} data-tab-id={item.id} key={item.id} onClick={() => selectTab(item.id)}>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
        {mobileMenuOpen ? <button aria-label="Fechar menu" className="mobile-menu-scrim" onClick={() => setMobileMenuOpen(false)} type="button" /> : null}
        <nav aria-hidden={!mobileMenuOpen} aria-label="Menu mobile" className={`mobile-menu-drawer${mobileMenuOpen ? " open" : ""}`} id="mobile-archive-menu">
          <div className="mobile-menu-head">
            <div>
              <span>Arquivo atual</span>
              <strong>{activeTabLabel}</strong>
            </div>
            <button aria-label="Fechar menu" className="mobile-menu-close" onClick={() => setMobileMenuOpen(false)} type="button">
              X
            </button>
          </div>
          <div className="mobile-menu-list">
            {tabs.map((item) => (
              <button className={tab === item.id ? "active" : ""} key={item.id} onClick={() => selectTab(item.id)} type="button">
                <span>{item.label}</span>
              </button>
            ))}
          </div>
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

      <div className="content-shell" id="archive-content">
        <div className="archive-page-section" id={`section-${tab}`} key={tab}>
          {renderActiveTab()}
        </div>
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
