import type { GlossaryTerm } from "./types";

export const glossary: GlossaryTerm[] = [
  {
    id: "canon",
    term: "Canon",
    category: "continuidade",
    definition: "Conjunto de eventos tratados como parte da continuidade principal ou de uma continuidade específica.",
    relatedIds: ["games-canon", "cgi-canon"],
    sourceRefs: ["capcom-history", "re-fandom"]
  },
  {
    id: "bow",
    term: "B.O.W.",
    category: "bioterrorismo",
    definition: "Bio Organic Weapon: arma biológica criada por vírus, parasitas, fungos ou engenharia corporativa.",
    relatedIds: ["tyrants", "hunters", "lickers"],
    sourceRefs: ["capcom-history", "re-fandom"]
  },
  {
    id: "remake",
    term: "Remake",
    category: "mídia",
    definition: "Recriação moderna de um jogo anterior, podendo preservar o eixo narrativo e ajustar eventos, tom e conteúdo.",
    relatedIds: ["re1-remake-2002", "re2-remake-2019", "re3-remake-2020", "re4-remake-2023"],
    sourceRefs: ["capcom-history"]
  },
  {
    id: "continuity-alternative",
    term: "Continuidade alternativa",
    category: "continuidade",
    definition: "Linha narrativa separada que usa elementos de Resident Evil sem pertencer ao canon principal dos jogos.",
    relatedIds: ["live-action-anderson", "welcome-to-raccoon-city", "netflix-series"],
    sourceRefs: ["wiki-pt", "imdb-films"]
  },
  {
    id: "novelization",
    term: "Novelização",
    category: "mídia impressa",
    definition: "Adaptação literária de jogo ou filme, ou romance derivado, que não deve ser assumido como canon principal sem confirmação.",
    relatedIds: ["novel-umbrella-conspiracy", "novel-zero-hour"],
    sourceRefs: ["revil-livros", "re-fandom"]
  },
  {
    id: "cgi-canon",
    term: "CGI/canon próximo aos jogos",
    category: "continuidade",
    definition: "Filmes e séries animadas que usam personagens e organizações da linha dos jogos, mas ainda são marcados como bloco próprio.",
    relatedIds: ["degeneration", "damnation", "vendetta", "death-island", "infinite-darkness"],
    sourceRefs: ["capcom-history", "re-fandom"]
  }
];
