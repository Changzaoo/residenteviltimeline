import type { Biohazard } from "./types";

function biohazard(
  id: string,
  name: string,
  category: Biohazard["category"],
  firstAppearance: string,
  origin: string,
  effects: string[],
  threatLevel: Biohazard["threatLevel"],
  relatedMedia: string[],
  canonNote: string,
  extra: Partial<Biohazard> = {}
): Biohazard {
  return {
    id,
    name,
    category,
    firstAppearance,
    origin,
    effects,
    threatLevel,
    relatedMedia,
    canonNote,
    sourceRefs: extra.sourceRefs ?? ["capcom-history", "re-fandom"],
    ...extra
  };
}

export const biohazards: Biohazard[] = [
  biohazard("progenitor", "Progenitor Virus", "virus", "Lore de Umbrella / RE5", "Flor Stairway e pesquisas dos fundadores", ["Mutação celular extrema", "base para linhagens virais da Umbrella"], "alto", ["re5-2009", "re0-2002"], "Canon dos jogos.", { creator: "Oswell E. Spencer, Edward Ashford e James Marcus", organization: "Umbrella Corporation" }),
  biohazard("t-virus", "T-Virus", "virus", "Resident Evil (1996)", "Derivado de pesquisas Progenitor/Marcus", ["Necrose", "reanimação", "criação de B.O.W.s"], "extremo", ["re1-1996", "re2-1998", "re3-1999", "outbreak"], "Canon dos jogos.", { creator: "Umbrella Corporation", organization: "Umbrella Corporation", transmission: "fluidos, mordidas, contaminação ambiental" }),
  biohazard("g-virus", "G-Virus", "virus", "Resident Evil 2 (1998)", "Pesquisa de William Birkin", ["Regeneração agressiva", "mutações sucessivas", "reprodução por embriões G"], "apocalíptico", ["re2-1998", "degeneration"], "Canon dos jogos.", { creator: "William Birkin", organization: "Umbrella Corporation" }),
  biohazard("t-veronica", "T-Veronica", "virus", "Resident Evil Code: Veronica (2000)", "Pesquisa de Alexia Ashford", ["Mutações insetoides", "calor extremo", "adaptação por hibernação"], "extremo", ["code-veronica"], "Canon dos jogos.", { creator: "Alexia Ashford", organization: "Família Ashford" }),
  biohazard("nemesis-parasite", "NE-α Parasite / Nemesis Parasite", "parasite", "Resident Evil 3: Nemesis (1999)", "Pesquisa Umbrella Europe", ["Controle de Tyrants", "maior inteligência e obediência"], "extremo", ["re3-1999", "re3-remake-2020"], "Canon dos jogos.", { organization: "Umbrella Europe" }),
  biohazard("las-plagas", "Las Plagas", "parasite", "Resident Evil 4 (2005)", "Parasitas ancestrais sob domínio dos Salazar/Los Illuminados", ["Controle mental", "coordenação coletiva", "mutações de combate"], "extremo", ["re4-2005", "damnation"], "Canon dos jogos.", { organization: "Los Illuminados", transmission: "implante/ingestão/inoculação" }),
  biohazard("dominant-plaga", "Plaga dominante", "parasite", "Resident Evil 4 (2005)", "Variante de comando de Las Plagas", ["Controle sobre subordinados", "mutações de elite"], "extremo", ["re4-2005", "re4-remake-2023"], "Canon dos jogos.", { organization: "Los Illuminados" }),
  biohazard("subordinate-plaga", "Plaga subordinada", "parasite", "Resident Evil 4 (2005)", "Variante usada em Ganados/Majini", ["Obediência", "perda de autonomia", "mutações parasitárias"], "alto", ["re4-2005", "re5-2009"], "Canon dos jogos.", { organization: "Los Illuminados / Tricell" }),
  biohazard("t-abyss", "T-Abyss", "virus", "Resident Evil: Revelations (2012)", "Combinação de T-Virus e Abyss Virus", ["Mutações aquáticas", "adaptação à pressão", "deformação extrema"], "extremo", ["revelations"], "Canon dos jogos.", { organization: "Veltro / FBC" }),
  biohazard("uroboros", "Uroboros", "virus", "Resident Evil 5 (2009)", "Plano de Wesker/Tricell a partir de pesquisas Progenitor", ["Seleção genética brutal", "massa tentacular", "rejeição letal"], "apocalíptico", ["re5-2009", "revelations-2"], "Canon dos jogos.", { creator: "Albert Wesker / Tricell", organization: "Tricell" }),
  biohazard("c-virus", "C-Virus", "virus", "Resident Evil 6 (2012)", "Neo-Umbrella / Carla Radames", ["Transformação em J'avo", "crisálidas", "B.O.W.s variados"], "apocalíptico", ["re6-2012", "marhawa-desire"], "Canon dos jogos.", { creator: "Carla Radames", organization: "Neo-Umbrella" }),
  biohazard("a-virus", "A-Virus", "virus", "Resident Evil: Vendetta (2017)", "Agente viral do filme CGI Vendetta", ["Zumbificação direcionada", "ativação por gatilho", "controle operacional"], "alto", ["vendetta"], "Continuidade CGI/canon próximo aos jogos.", { creator: "Glenn Arias", sourceRefs: ["capcom-history", "re-fandom"] }),
  biohazard("mold", "Mold / Mutamycete", "fungus", "Resident Evil 7: Biohazard (2017)", "Derivado do Megamiceto", ["Rede miceliana", "controle psíquico", "regeneração", "memória biológica"], "apocalíptico", ["re7-2017", "re-village-2021"], "Canon dos jogos.", { organization: "The Connections" }),
  biohazard("megamycete", "Megamycete / Megamiceto", "fungus", "Resident Evil Village (2021)", "Organismo fúngico ancestral da vila", ["Armazenamento de consciência", "raiz do Mold", "mutação via Cadou"], "apocalíptico", ["re-village-2021", "village-shadows-of-rose"], "Canon dos jogos.", { organization: "Culto de Mother Miranda" }),
  biohazard("cadou", "Cadou", "parasite", "Resident Evil Village (2021)", "Parasita criado por Miranda a partir do Megamiceto", ["Mutação individual", "vínculo ao Megamiceto", "habilidades únicas"], "extremo", ["re-village-2021"], "Canon dos jogos.", { creator: "Mother Miranda", organization: "Culto de Mother Miranda" }),
  biohazard("e-series", "E-Series / Eveline", "weapon", "Resident Evil 7: Biohazard (2017)", "Bioarma baseada no Mold", ["Controle mental", "alucinações", "infecção fúngica"], "apocalíptico", ["re7-2017"], "Canon dos jogos.", { creator: "The Connections", organization: "The Connections" }),

  biohazard("zombies", "Zombies", "bow", "Resident Evil (1996)", "Hospedeiros humanos infectados pelo T-Virus", ["Necrose", "fome agressiva", "propagação por mordida"], "alto", ["re1-1996", "re2-1998", "re3-1999"], "Canon dos jogos."),
  biohazard("crimson-heads", "Crimson Heads", "mutation", "Resident Evil Remake (2002)", "Mutação V-ACT de zumbis infectados pelo T-Virus", ["Velocidade aumentada", "agressividade", "garras"], "alto", ["re1-remake-2002"], "Canon dos jogos/remake."),
  biohazard("cerberus", "Cerberus", "bow", "Resident Evil (1996)", "Cães infectados/experimentais da Umbrella", ["Agressividade", "mobilidade", "contágio"], "médio", ["re1-1996", "re2-1998"], "Canon dos jogos."),
  biohazard("hunters", "Hunters", "bow", "Resident Evil (1996)", "B.O.W.s reptilianos da Umbrella", ["Força", "saltos", "decapitação", "obediência limitada"], "alto", ["re1-1996", "re3-1999", "outbreak"], "Canon dos jogos."),
  biohazard("lickers", "Lickers", "bow", "Resident Evil 2 (1998)", "Mutação avançada de infectados T-Virus", ["Audição apurada", "língua cortante", "mobilidade em paredes"], "alto", ["re2-1998", "degeneration"], "Canon dos jogos."),
  biohazard("tyrants", "Tyrants", "bow", "Resident Evil (1996)", "Linha de super-soldados T-Virus", ["Força extrema", "obediência", "resistência"], "extremo", ["re1-1996", "re2-1998"], "Canon dos jogos."),
  biohazard("mr-x", "Mr. X / T-00", "bow", "Resident Evil 2 (1998)", "Tyrant enviado a Raccoon City", ["Perseguição persistente", "força extrema"], "extremo", ["re2-1998", "re2-remake-2019"], "Canon dos jogos."),
  biohazard("nemesis", "Nemesis", "bow", "Resident Evil 3: Nemesis (1999)", "Tyrant modificado com NE-α Parasite", ["Inteligência tática", "uso de armas", "perseguição S.T.A.R.S."], "apocalíptico", ["re3-1999", "re3-remake-2020"], "Canon dos jogos."),
  biohazard("bandersnatch", "Bandersnatch", "bow", "Resident Evil Code: Veronica (2000)", "B.O.W. da Umbrella em Rockfort", ["Braço extensível", "força bruta"], "alto", ["code-veronica"], "Canon dos jogos."),
  biohazard("nosferatu", "Nosferatu", "mutation", "Resident Evil Code: Veronica (2000)", "Alexander Ashford infectado", ["Veneno", "mutações grotescas"], "alto", ["code-veronica"], "Canon dos jogos."),
  biohazard("ganados", "Ganados", "mutation", "Resident Evil 4 (2005)", "Humanos controlados por Las Plagas", ["Coordenação", "uso de ferramentas", "fanatismo induzido"], "alto", ["re4-2005", "re4-remake-2023"], "Canon dos jogos."),
  biohazard("regenerators", "Regenerators", "bow", "Resident Evil 4 (2005)", "Experimentos com múltiplas Plagas", ["Regeneração", "resistência", "ataques elásticos"], "extremo", ["re4-2005", "re4-remake-2023"], "Canon dos jogos."),
  biohazard("iron-maidens", "Iron Maidens", "bow", "Resident Evil 4 (2005)", "Variante de Regenerator", ["Espinhos", "regeneração", "letalidade elevada"], "extremo", ["re4-2005", "re4-remake-2023"], "Canon dos jogos."),
  biohazard("verdugo", "Verdugo", "bow", "Resident Evil 4 (2005)", "Guarda mutado de Salazar", ["Velocidade", "blindagem", "garras"], "extremo", ["re4-2005", "re4-remake-2023"], "Canon dos jogos."),
  biohazard("el-gigante", "El Gigante", "bow", "Resident Evil 4 (2005)", "Gigante criado por Las Plagas", ["Força colossal", "resistência"], "alto", ["re4-2005", "re4-remake-2023"], "Canon dos jogos."),
  biohazard("majini", "Majini", "mutation", "Resident Evil 5 (2009)", "Hospedeiros infectados por Plagas tipo 2/3", ["Obediência", "coordenação", "agressividade"], "alto", ["re5-2009"], "Canon dos jogos."),
  biohazard("executioner-majini", "Executioner Majini", "mutation", "Resident Evil 5 (2009)", "Majini de elite", ["Força bruta", "arma pesada", "resistência"], "alto", ["re5-2009"], "Canon dos jogos."),
  biohazard("uroboros-creatures", "Uroboros creatures", "mutation", "Resident Evil 5 (2009)", "Hospedeiros rejeitados pelo Uroboros", ["Massa tentacular", "absorção", "colapso físico"], "extremo", ["re5-2009"], "Canon dos jogos."),
  biohazard("javo", "J'avo", "mutation", "Resident Evil 6 (2012)", "Humanos infectados pelo C-Virus", ["Regeneração parcial", "mutação adaptativa", "uso de armas"], "alto", ["re6-2012"], "Canon dos jogos."),
  biohazard("molded", "Molded", "bow", "Resident Evil 7: Biohazard (2017)", "Criaturas formadas pelo Mold", ["Massa fúngica", "agressividade", "regeneração"], "alto", ["re7-2017"], "Canon dos jogos."),
  biohazard("lycans", "Lycans", "mutation", "Resident Evil Village (2021)", "Humanos mutados por Cadou/Megamiceto", ["Comportamento lupino", "força", "matilha"], "alto", ["re-village-2021"], "Canon dos jogos."),
  biohazard("soldats", "Soldats", "bow", "Resident Evil Village (2021)", "Corpos modificados por Heisenberg e Cadou", ["Cibernética", "metalurgia", "armas integradas"], "alto", ["re-village-2021"], "Canon dos jogos.", { creator: "Karl Heisenberg" }),
  biohazard("dimitrescu-daughters", "Dimitrescu daughters", "mutation", "Resident Evil Village (2021)", "Experimentos de Alcina/Miranda", ["Enxame de insetos", "vulnerabilidade ao frio", "regeneração"], "alto", ["re-village-2021"], "Canon dos jogos."),
  biohazard("moreau-mutated", "Moreau", "mutation", "Resident Evil Village (2021)", "Salvatore Moreau afetado por Cadou", ["Mutação aquática", "ácido", "massa corporal extrema"], "extremo", ["re-village-2021"], "Canon dos jogos."),
  biohazard("heisenberg-form", "Heisenberg forms", "mutation", "Resident Evil Village (2021)", "Karl Heisenberg e Cadou", ["Magnetismo", "fusão com metal", "massa mecânica"], "extremo", ["re-village-2021"], "Canon dos jogos."),
  biohazard("mutated-miranda", "Mutated Miranda", "mutation", "Resident Evil Village (2021)", "Mother Miranda ligada ao Megamiceto", ["Metamorfose", "controle fúngico", "ataques múltiplos"], "apocalíptico", ["re-village-2021"], "Canon dos jogos."),

  biohazard("film-t-virus", "T-Virus dos filmes", "virus", "Resident Evil (filme, 2002)", "Continuidade live-action da Umbrella", ["Zumbificação", "mutação", "apocalipse global na saga Alice"], "apocalíptico", ["film-re-2002", "film-apocalypse", "film-extinction"], "Variante da continuidade dos filmes; não misturar com canon dos jogos.", { sourceRefs: ["wiki-pt", "imdb-films", "re-fandom"], organization: "Umbrella Corporation dos filmes" }),
  biohazard("film-g-virus", "G-Virus dos filmes", "virus", "Welcome to Raccoon City (2021)", "Reboot cinematográfico", ["Mutação de William Birkin", "ameaça localizada"], "extremo", ["film-welcome-raccoon-city"], "Variante do reboot; continuidade separada.", { sourceRefs: ["wiki-pt", "imdb-films"] }),
  biohazard("film-nemesis", "Nemesis dos filmes", "bow", "Resident Evil: Apocalypse (2004)", "Matt Addison transformado pela Umbrella dos filmes", ["Força extrema", "armamento pesado", "traços de memória"], "extremo", ["film-apocalypse"], "Continuidade alternativa dos filmes.", { sourceRefs: ["wiki-pt", "imdb-films"] })
];
