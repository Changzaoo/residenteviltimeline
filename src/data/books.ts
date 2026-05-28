import type { MediaItem } from "./types";

export const books: MediaItem[] = [
  {
    id: "biohazard-the-true-story",
    title: "Biohazard: The True Story Behind Biohazard",
    type: "book",
    releaseYear: 1997,
    continuity: "novelization",
    author: "Hiroyuki Ariga",
    baseMedia: "Resident Evil",
    protagonists: ["Chris Redfield", "Jill Valentine"],
    organizations: ["S.T.A.R.S.", "Umbrella Corporation"],
    biohazards: ["T-Virus"],
    locations: ["Raccoon City", "Spencer Mansion"],
    summary: "Livro promocional/japonês ligado ao primeiro jogo, com material narrativo e bastidores.",
    canonNote: "Material complementar/derivado; usar como referência histórica, não canon principal isolado.",
    sourceRefs: ["revil-livros", "re-fandom"]
  },
  {
    id: "wesker-report",
    title: "Wesker's Report",
    type: "book",
    releaseYear: 2001,
    continuity: "games-canon",
    author: "Capcom",
    baseMedia: "Material promocional",
    protagonists: ["Albert Wesker"],
    organizations: ["Umbrella Corporation"],
    biohazards: ["Progenitor Virus", "T-Virus", "G-Virus"],
    locations: ["Raccoon City"],
    summary: "Relatorio promocional que organiza eventos dos primeiros jogos pela perspectiva de Wesker.",
    canonNote: "Material oficial complementar; detalhes podem refletir a fase editorial da epoca.",
    sourceRefs: ["capcom-history", "re-fandom"]
  },
  {
    id: "archives",
    title: "Resident Evil Archives",
    type: "book",
    releaseYear: 2005,
    continuity: "games-canon",
    author: "Capcom",
    baseMedia: "Guia/lore book",
    organizations: ["Umbrella Corporation", "S.T.A.R.S."],
    biohazards: ["T-Virus", "G-Virus"],
    locations: ["Raccoon City", "Arklay Mountains"],
    summary: "Livro de referencia com resumos, personagens e material de lore dos jogos iniciais.",
    canonNote: "Fonte oficial/secundaria de consulta; usar para contexto, não para criar eventos novos sem confirmação.",
    sourceRefs: ["capcom-history", "revil-livros"]
  },
  {
    id: "archives-ii",
    title: "Resident Evil Archives II",
    type: "book",
    releaseYear: 2011,
    continuity: "games-canon",
    author: "Capcom",
    baseMedia: "Guia/lore book",
    organizations: ["Los Illuminados", "Tricell", "BSAA"],
    biohazards: ["Las Plagas", "Uroboros"],
    locations: ["Espanha rural", "Kijuju"],
    summary: "Segundo volume de referencia cobrindo jogos posteriores.",
    canonNote: "Fonte oficial/secundaria de consulta.",
    sourceRefs: ["capcom-history", "revil-livros"]
  }
];
