"use client";

import { useMemo, useState } from "react";
import {
  allMedia,
  biohazards,
  characters,
  comicsManga,
  continuities,
  dlcs,
  games,
  glossary,
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
      </div>
      <div className="terminal-panel scanlines">
        <p className="terminal-green">root@umbrella.archive:~$ separar_continuidades --strict</p>
        <p>canon_jogos != filmes_live_action</p>
        <p>novelizacoes != fonte_unica_de_canon</p>
        <p>reboot_wtrc != saga_alice</p>
        <p className="terminal-green">status: base local verificada por fontes</p>
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
        {items.map((event, index) => (
          <article className="timeline-card" key={event.id}>
            <span className="timeline-index">{String(index + 1).padStart(2, "0")}</span>
            <div>
              <div className="card-topline">
                <CanonBadge continuity={event.continuity as ContinuityId} />
                <span className="badge badge-muted">{event.year}</span>
              </div>
              <h3>{event.title}</h3>
              <p>{event.summary}</p>
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
        ))}
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

  function renderTab() {
    if (tab === "timeline") return <TimelineView query={query} selected={timelineContinuity} onSelected={setTimelineContinuity} onOpen={openDetail} />;
    if (tab === "jogos") return <MediaLibrary title="Jogos principais, remakes, spin-offs e DLCs" kicker="canon e complementos" items={[...games, ...remakes, ...spinOffs, ...dlcs]} onOpen={openDetail} continuity={continuity} query={query} />;
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
    if (tab === "fontes") return <SourcesView />;
  }

  return (
    <main>
      <div className="noise-layer" />
      <header className="topbar">
        <div className="brand">
          <span className="brand-mark">☣</span>
          <div>
            <strong>Umbrella Archive</strong>
            <span>Resident Evil Timeline</span>
          </div>
        </div>
        <nav className="tab-strip">
          {tabs.map((item) => (
            <button className={tab === item.id ? "active" : ""} key={item.id} onClick={() => setTab(item.id)}>
              {item.label}
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

      <div className="content-shell">{renderTab()}</div>

      <footer className="footer">
        <span>Projeto de fã. Resident Evil, Biohazard, personagens e marcas pertencem à Capcom.</span>
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
