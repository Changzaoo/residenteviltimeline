export type MediaType =
  | "game"
  | "remake"
  | "spin-off"
  | "dlc"
  | "live-action-movie"
  | "cgi-movie"
  | "animated-series"
  | "live-action-series"
  | "novel"
  | "book"
  | "comic"
  | "manga";

export type ContinuityId =
  | "games-canon"
  | "cgi-canon"
  | "live-action-anderson"
  | "welcome-to-raccoon-city"
  | "netflix-series"
  | "novelization"
  | "comic-manga"
  | "alternate"
  | "non-canon"
  | "uncertain";

export type CanonStatus =
  | "Canon principal"
  | "Canon dos jogos"
  | "Canon complementar"
  | "Continuidade dos filmes live-action"
  | "Continuidade CGI/canon próximo aos jogos"
  | "Novelização"
  | "HQ/mangá"
  | "Reboot"
  | "Não-canônico"
  | "Interpretação"
  | "Continuidade alternativa";

export interface MediaItem {
  id: string;
  title: string;
  originalTitle?: string;
  type: MediaType;
  releaseYear: number | string;
  inUniverseYear?: string;
  continuity: ContinuityId;
  protagonists?: string[];
  antagonists?: string[];
  organizations?: string[];
  biohazards?: string[];
  locations?: string[];
  summary: string;
  canonNote: string;
  sourceRefs: string[];
  director?: string;
  author?: string;
  baseMedia?: string;
  relationToGames?: string;
  differencesFromGames?: string[];
  importance?: string;
  fullHistory?: HistoryBlock[];
}

export interface SourceRef {
  id: string;
  name: string;
  url: string;
  type: "official" | "wiki" | "database" | "fan-wiki" | "news" | "bookstore" | "other";
  reliability: "high" | "medium" | "low";
  notes?: string;
}

export interface Biohazard {
  id: string;
  name: string;
  category: "virus" | "parasite" | "fungus" | "bow" | "mutation" | "weapon" | "other";
  firstAppearance: string;
  origin: string;
  creator?: string;
  organization?: string;
  effects: string[];
  transmission?: string;
  knownCases?: string[];
  relatedMedia: string[];
  threatLevel: "baixo" | "médio" | "alto" | "extremo" | "apocalíptico";
  canonNote: string;
  sourceRefs: string[];
  fullHistory?: HistoryBlock[];
}

export interface Character {
  id: string;
  name: string;
  role: string;
  firstAppearance: string;
  continuities: ContinuityId[];
  affiliations: string[];
  relatedMedia: string[];
  relationships: string[];
  status: string;
  summary: string;
  canonNote: string;
  sourceRefs: string[];
}

export interface Organization {
  id: string;
  name: string;
  type: string;
  continuity: ContinuityId[];
  firstAppearance: string;
  goals: string;
  role: string;
  relatedMedia: string[];
  canonNote: string;
  sourceRefs: string[];
}

export interface Location {
  id: string;
  name: string;
  region: string;
  continuity: ContinuityId[];
  firstAppearance: string;
  relatedMedia: string[];
  significance: string;
  canonNote: string;
  sourceRefs: string[];
}

export interface Continuity {
  id: ContinuityId | "all" | "release-order" | "recommended";
  title: string;
  badge: string;
  description: string;
  includes: string[];
  warning?: string;
  sourceRefs: string[];
}

export interface TimelineEvent {
  id: string;
  title: string;
  year: string;
  releaseYear?: string | number;
  continuity: ContinuityId | "release-order" | "recommended";
  mediaIds: string[];
  category: "game" | "film" | "cgi" | "series" | "book" | "comic" | "lore" | "recommended";
  summary: string;
  canonNote: string;
  sourceRefs: string[];
  fullHistory?: HistoryBlock[];
}

export interface RemakeComparisonItem {
  id: string;
  title: string;
  original: string;
  remake: string;
  storyChanges: string[];
  characterChanges: string[];
  removedContent: string[];
  expandedContent: string[];
  toneChanges: string[];
  timelineTreatment: string;
  canonNote: string;
  sourceRefs: string[];
}

export interface GlossaryTerm {
  id: string;
  term: string;
  category: string;
  definition: string;
  relatedIds: string[];
  sourceRefs: string[];
}

export interface HistoryBlock {
  title: string;
  body: string;
}
