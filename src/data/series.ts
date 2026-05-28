import type { MediaItem } from "./types";

export const series: MediaItem[] = [
  {
    id: "infinite-darkness",
    title: "Resident Evil: Infinite Darkness",
    type: "animated-series",
    releaseYear: 2021,
    inUniverseYear: "2006",
    continuity: "cgi-canon",
    protagonists: ["Leon S. Kennedy", "Claire Redfield"],
    antagonists: ["Jason", "Wilson"],
    organizations: ["Governo dos EUA", "TerraSave"],
    biohazards: ["T-Virus", "B.O.W."],
    locations: ["Casa Branca", "Penamstan"],
    summary: "Série CGI com Leon e Claire investigando conspiração após Raccoon City.",
    canonNote: "Série animada/CGI próxima ao canon dos jogos.",
    sourceRefs: ["capcom-history", "re-fandom", "wiki-pt"]
  },
  {
    id: "netflix-live-action-2022",
    title: "Resident Evil",
    originalTitle: "Resident Evil - Netflix",
    type: "live-action-series",
    releaseYear: 2022,
    inUniverseYear: "2022 e 2036",
    continuity: "netflix-series",
    protagonists: ["Jade Wesker", "Billie Wesker"],
    antagonists: ["Albert Wesker da Netflix", "Umbrella Corporation"],
    organizations: ["Umbrella Corporation"],
    biohazards: ["T-Virus da série", "Zombies"],
    locations: ["New Raccoon City"],
    relationToGames: "Usa nomes e conceitos da franquia em continuidade própria.",
    differencesFromGames: ["Wesker, Umbrella e a cronologia são reimaginados"],
    summary: "Série live-action com linha temporal própria centrada nas filhas de Wesker.",
    canonNote: "Continuidade alternativa da Netflix; não é canon dos jogos.",
    sourceRefs: ["wiki-pt", "imdb-films", "re-fandom"]
  }
];
