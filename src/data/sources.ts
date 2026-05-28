import type { SourceRef } from "./types";

export const sources: SourceRef[] = [
  {
    id: "capcom-history",
    name: "Capcom - Resident Evil History",
    url: "https://game.capcom.com/residentevil/sp/en/re-history.html",
    type: "official",
    reliability: "high",
    notes: "Linha historica oficial usada para conferir jogos principais, remakes, DLCs e ordem de franquia."
  },
  {
    id: "capcom-portal",
    name: "Resident Evil Portal - CAPCOM",
    url: "https://game.capcom.com/residentevil/en/",
    type: "official",
    reliability: "high",
    notes: "Portal oficial da franquia, noticias e materiais recentes, incluindo Requiem."
  },
  {
    id: "capcom-requiem",
    name: "Capcom IR - Resident Evil Requiem",
    url: "https://www.capcom.co.jp/ir/english/news/html/e250609.html",
    type: "official",
    reliability: "high",
    notes: "Comunicado oficial que anunciou Resident Evil Requiem e sua data de lançamento em 27 de fevereiro de 2026."
  },
  {
    id: "capcom-requiem-stats",
    name: "Resident Evil Portal - Requiem / Resident Evil.Net",
    url: "https://game.capcom.com/residentevil/en/requiemstats.html",
    type: "official",
    reliability: "high",
    notes: "Página oficial pós-lançamento usada para confirmar que Requiem já está ativo no ecossistema Resident Evil.Net."
  },
  {
    id: "capcom-video-policy",
    name: "Capcom Video Policy",
    url: "https://www.capcomusa.com/video-policy/",
    type: "official",
    reliability: "high",
    notes: "Diretrizes oficiais da Capcom para conteudo de fans em video; usadas para reforcar aviso de projeto nao oficial, nao comercial e sem redistribuicao de assets proprietarios."
  },
  {
    id: "capcom-fan-content-guidelines",
    name: "Capcom Fan Content Guidelines",
    url: "https://www.capcom-games.com/en/fan-content-guidelines/",
    type: "official",
    reliability: "high",
    notes: "Pagina oficial de diretrizes de conteudo criado por fans, referenciada pelo rodape da politica de video da Capcom."
  },
  {
    id: "wiki-pt",
    name: "Wikipedia PT - Resident Evil",
    url: "https://pt.wikipedia.org/wiki/Resident_Evil",
    type: "wiki",
    reliability: "medium",
    notes: "Visao geral em portugues, listas de jogos, filmes e derivados."
  },
  {
    id: "re-fandom",
    name: "Resident Evil Wiki / Fandom",
    url: "https://residentevil.fandom.com/wiki/Resident_Evil_Wiki",
    type: "fan-wiki",
    reliability: "medium",
    notes: "Conferencia cruzada de personagens, organizacoes, midias, criaturas e cronologias por continuidade."
  },
  {
    id: "re-fandom-timeline",
    name: "Resident Evil Wiki - Timeline by media",
    url: "https://residentevil.fandom.com/wiki/Timeline_by_media",
    type: "fan-wiki",
    reliability: "medium",
    notes: "Base de separacao entre eventos de jogos, CGI, filmes, livros e mangas."
  },
  {
    id: "revil-livros",
    name: "REVIL - Livros, HQs, mangas e novelizacoes",
    url: "https://residentevil.com.br/",
    type: "other",
    reliability: "medium",
    notes: "Referencia brasileira para material impresso, lancamentos e contextualizacao editorial."
  },
  {
    id: "imdb-films",
    name: "IMDb - Resident Evil film series",
    url: "https://www.imdb.com/find/?q=Resident%20Evil",
    type: "database",
    reliability: "medium",
    notes: "Usado apenas para conferir filmes, diretores, elenco e anos de lancamento."
  },
  {
    id: "rotten-films",
    name: "Rotten Tomatoes - Resident Evil movies",
    url: "https://www.rottentomatoes.com/search?search=resident%20evil",
    type: "database",
    reliability: "medium",
    notes: "Referencia secundaria para ordem de filmes e dados de lancamento."
  },
  {
    id: "tokyopop",
    name: "TOKYOPOP / paginas de produto",
    url: "https://www.tokyopop.com/",
    type: "bookstore",
    reliability: "medium",
    notes: "Conferencia editorial de mangas/HQs licenciados quando pagina de produto existe."
  }
];
