import type { Continuity } from "./types";

export const continuities: Continuity[] = [
  {
    id: "games-canon",
    title: "Timeline dos jogos",
    badge: "CANON JOGOS",
    description:
      "Continuidade principal dos games: jogos numerados, remakes recentes, Revelations, DLCs centrais e materiais diretamente conectados.",
    includes: ["Jogos principais", "Remakes", "Revelations", "DLCs narrativos", "alguns spin-offs complementares"],
    warning: "Remakes podem ajustar eventos; quando houver conflito, o site marca a diferenca em vez de fundir versoes.",
    sourceRefs: ["capcom-history", "re-fandom"]
  },
  {
    id: "cgi-canon",
    title: "Timeline CGI/canon próximo aos jogos",
    badge: "CGI CANON",
    description:
      "Filmes e serie CGI que orbitam a continuidade dos jogos, normalmente com Leon, Claire, Chris, Jill e organizacoes canonicas.",
    includes: ["Degeneration", "Damnation", "Vendetta", "Death Island", "Infinite Darkness"],
    warning: "E uma continuidade proxima aos jogos; detalhes pontuais devem ser conferidos caso a caso.",
    sourceRefs: ["capcom-history", "re-fandom-timeline"]
  },
  {
    id: "live-action-anderson",
    title: "Filmes live-action de Paul W. S. Anderson",
    badge: "LIVE-ACTION",
    description:
      "Saga cinematografica centrada em Alice. Usa nomes, monstros e ideias dos jogos, mas e uma continuidade alternativa.",
    includes: ["Resident Evil (2002)", "Apocalypse", "Extinction", "Afterlife", "Retribution", "The Final Chapter"],
    warning: "Nao faz parte da timeline principal dos games.",
    sourceRefs: ["wiki-pt", "imdb-films", "rotten-films"]
  },
  {
    id: "welcome-to-raccoon-city",
    title: "Welcome to Raccoon City",
    badge: "REBOOT",
    description:
      "Reboot cinematografico de 2021 que adapta elementos de RE1 e RE2 em uma linha propria.",
    includes: ["Resident Evil: Welcome to Raccoon City"],
    warning: "Separado tanto dos jogos quanto da saga live-action com Alice.",
    sourceRefs: ["wiki-pt", "imdb-films"]
  },
  {
    id: "netflix-series",
    title: "Série Netflix live-action",
    badge: "CONTINUIDADE ALTERNATIVA",
    description:
      "Serie live-action de 2022 com propria estrutura temporal e versao alternativa de Umbrella/Wesker.",
    includes: ["Resident Evil (Netflix, 2022)"],
    warning: "Nao tratar como canon dos jogos.",
    sourceRefs: ["wiki-pt", "imdb-films", "re-fandom"]
  },
  {
    id: "novelization",
    title: "Novelizações",
    badge: "NOVELIZAÇÃO",
    description:
      "Romances de S. D. Perry, novelizacoes de filmes e livros derivados. Servem como adaptacoes ou continuidades derivadas.",
    includes: ["The Umbrella Conspiracy", "Caliban Cove", "City of the Dead", "Underworld", "Nemesis", "Code: Veronica", "Zero Hour"],
    warning: "Nao assumir canon principal salvo confirmacao explicita.",
    sourceRefs: ["revil-livros", "re-fandom"]
  },
  {
    id: "comic-manga",
    title: "HQs e mangás",
    badge: "HQ/MANGÁ",
    description:
      "Material licenciado em quadrinhos e manga, com adaptacoes, historias promocionais e arcos originais.",
    includes: ["The Official Comic Magazine", "Fire & Ice", "Marhawa Desire", "Heavenly Island", "The Stage"],
    warning: "Canon pode variar por publicacao; este site marca como complementar, alternativo ou incerto.",
    sourceRefs: ["revil-livros", "re-fandom", "tokyopop"]
  },
  {
    id: "release-order",
    title: "Ordem de lançamento geral",
    badge: "ORDEM DE LANÇAMENTO",
    description:
      "Organiza jogos, filmes, CGI, series e livros pelo ano em que chegaram ao publico.",
    includes: ["Todos os tipos de midia cadastrados"],
    sourceRefs: ["capcom-history", "wiki-pt", "imdb-films", "revil-livros"]
  },
  {
    id: "recommended",
    title: "Ordem recomendada para consumir a história",
    badge: "ROTA RECOMENDADA",
    description:
      "Sequencia editorial para entender primeiro o canon dos jogos e depois explorar ramificacoes de CGI, filmes, livros e quadrinhos.",
    includes: ["Jogos principais", "CGI", "spin-offs essenciais", "materiais alternativos em blocos separados"],
    warning: "E uma curadoria; nao e uma timeline oficial.",
    sourceRefs: ["capcom-history", "re-fandom-timeline"]
  }
];
