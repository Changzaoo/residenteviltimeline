import type { MediaItem } from "./types";

export const comicsManga: MediaItem[] = [
  {
    id: "official-comic-magazine",
    title: "Resident Evil: The Official Comic Magazine",
    type: "comic",
    releaseYear: "1998-1999",
    continuity: "comic-manga",
    baseMedia: "Histórias licenciadas",
    protagonists: ["Chris Redfield", "Jill Valentine", "Leon S. Kennedy", "Claire Redfield"],
    organizations: ["Umbrella Corporation"],
    biohazards: ["T-Virus"],
    summary: "Revista em quadrinhos licenciada com histórias inspiradas nos primeiros jogos.",
    canonNote: "HQ/licenciado; canon variável e não tratado como linha principal.",
    sourceRefs: ["revil-livros", "re-fandom"]
  },
  {
    id: "fire-and-ice",
    title: "Resident Evil: Fire & Ice",
    type: "comic",
    releaseYear: 2000,
    continuity: "comic-manga",
    baseMedia: "História original licenciada",
    protagonists: ["Equipe S.T.A.R.S. Charlie"],
    organizations: ["S.T.A.R.S.", "Umbrella Corporation"],
    biohazards: ["T-Virus", "B.O.W.s"],
    summary: "Minissérie em quadrinhos com equipe original investigando atividades da Umbrella.",
    canonNote: "HQ/mangá licenciado; continuidade complementar/alternativa.",
    sourceRefs: ["revil-livros", "re-fandom"]
  },
  {
    id: "marhawa-desire",
    title: "Resident Evil: Marhawa Desire",
    type: "manga",
    releaseYear: "2012-2013",
    continuity: "comic-manga",
    protagonists: ["Chris Redfield", "Piers Nivans", "Ricky Tozawa"],
    organizations: ["BSAA"],
    biohazards: ["C-Virus", "Zombies"],
    locations: ["Marhawa School"],
    summary: "Mangá ligado ao contexto de RE6 e ao surgimento do C-Virus.",
    canonNote: "Mangá complementar; proximidade com canon dos jogos deve ser marcada como material licenciado.",
    sourceRefs: ["revil-livros", "re-fandom"]
  },
  {
    id: "heavenly-island",
    title: "Resident Evil: Heavenly Island",
    type: "manga",
    releaseYear: "2015-2017",
    continuity: "comic-manga",
    protagonists: ["Claire Redfield", "Inés Diaco", "Marilou Mabou"],
    organizations: ["TerraSave"],
    biohazards: ["T-Virus", "B.O.W.s"],
    locations: ["Ilha Sonido de Tortuga"],
    summary: "Mangá com Claire/TerraSave investigando uma produção televisiva que cruza bioterrorismo.",
    canonNote: "Mangá complementar/licenciado.",
    sourceRefs: ["revil-livros", "re-fandom"]
  },
  {
    id: "biohazard-the-stage",
    title: "Biohazard: The Stage",
    type: "comic",
    releaseYear: 2015,
    continuity: "comic-manga",
    protagonists: ["Rebecca Chambers", "Chris Redfield", "Piers Nivans"],
    organizations: ["BSAA"],
    biohazards: ["T-Virus"],
    locations: ["Filosofia University"],
    summary: "Peça japonesa com versão impressa/material relacionado, situada entre eventos de jogos modernos.",
    canonNote: "Material licenciado/complementar; canon tratado com cautela.",
    sourceRefs: ["revil-livros", "re-fandom"]
  }
];
