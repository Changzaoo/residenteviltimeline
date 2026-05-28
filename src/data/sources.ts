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
    id: "re-fandom-walkthroughs",
    name: "Resident Evil Wiki - Walkthroughs",
    url: "https://residentevil.fandom.com/wiki/Category:Walkthroughs",
    type: "fan-wiki",
    reliability: "medium",
    notes: "Indice de walkthroughs e subpaginas usado para conferir estrutura geral de cenarios, chefes e progresso por jogo."
  },
  {
    id: "strategywiki-resident-evil",
    name: "StrategyWiki - Resident Evil series",
    url: "https://strategywiki.org/wiki/Category:Resident_Evil",
    type: "wiki",
    reliability: "medium",
    notes: "Guias comunitarios de estrategia usados como conferencia secundaria de rotas, capitulos e categorias de jogos."
  },
  {
    id: "gamefaqs-guides",
    name: "GameFAQs - Resident Evil Guides",
    url: "https://gamefaqs.gamespot.com/search?game=resident%20evil",
    type: "database",
    reliability: "medium",
    notes: "Acervo historico de FAQs, mapas e walkthroughs; usado como referencia de apoio para jogos classicos e rotas alternativas."
  },
  {
    id: "gamepressure-re3",
    name: "GamePressure - Resident Evil 3 Remake Walkthrough",
    url: "https://www.gamepressure.com/resident-evil-3-remake/walkthrough/z8d121",
    type: "other",
    reliability: "medium",
    notes: "Indice moderno de walkthrough usado para conferir macroestrutura do remake de RE3."
  },
  {
    id: "gamepressure-re7",
    name: "GamePressure - Resident Evil 7 Walkthrough",
    url: "https://www.gamepressure.com/residentevil7/walkthrough/z69607",
    type: "other",
    reliability: "medium",
    notes: "Indice de campanha de RE7 usado para conferir ordem de areas como Guest House, Main House, Old House, Testing Area, Wrecked Ship e Salt Mine."
  },
  {
    id: "gamewith-re2",
    name: "GameWith - Resident Evil 2 Remake Guide",
    url: "https://gamewith.net/residentevil2/",
    type: "other",
    reliability: "medium",
    notes: "Guia moderno usado como conferencia secundaria de estrutura, codigos, armas e progresso do remake de RE2."
  },
  {
    id: "pcgamer-re2-guide",
    name: "PC Gamer - Resident Evil 2 Remake Guide",
    url: "https://www.pcgamer.com/resident-evil-2-remake-guide/",
    type: "news",
    reliability: "medium",
    notes: "Guia editorial usado como apoio para dicas gerais do remake de RE2, como uso do mapa, janelas e gerenciamento de Mr. X."
  },
  {
    id: "game8-re4-remake",
    name: "Game8 - Resident Evil 4 Remake Walkthrough",
    url: "https://game8.co/games/Resident-Evil-4-Remake/archives/407070",
    type: "other",
    reliability: "medium",
    notes: "Indice de capitulos usado para conferir progressao geral de RE4 Remake e Separate Ways sem copiar solucoes."
  },
  {
    id: "gamespot-village-guide",
    name: "GameSpot - Resident Evil Village Walkthrough",
    url: "https://www.gamespot.com/articles/resident-evil-village-walkthrough-spoiler-free/1100-6491078/",
    type: "news",
    reliability: "medium",
    notes: "Guia spoiler-free usado como conferencia de macro-rota de Village e dominios principais."
  },
  {
    id: "gamesradar-requiem-guide",
    name: "GamesRadar+ - Resident Evil Requiem Guide",
    url: "https://www.gamesradar.com/resident-evil-9-requiem/",
    type: "news",
    reliability: "medium",
    notes: "Hub pos-lancamento usado para conferir que Requiem possui guias de Rhodes Hill, Raccoon City, R.P.D., cofres, colecionaveis e finais."
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
