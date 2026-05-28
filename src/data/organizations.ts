import type { Organization } from "./types";

function org(
  id: string,
  name: string,
  type: string,
  firstAppearance: string,
  goals: string,
  role: string,
  relatedMedia: string[],
  continuity: Organization["continuity"] = ["games-canon"],
  canonNote = "Canon dos jogos.",
  sourceRefs = ["capcom-history", "re-fandom"]
): Organization {
  return { id, name, type, firstAppearance, goals, role, relatedMedia, continuity, canonNote, sourceRefs };
}

export const organizations: Organization[] = [
  org("umbrella", "Umbrella Corporation", "Megacorporação farmacêutica", "Resident Evil (1996)", "Pesquisa biomédica pública e desenvolvimento secreto de armas biológicas.", "Origem de Arklay, Raccoon City e múltiplas linhagens virais.", ["re1-1996", "re2-1998", "re3-1999", "re0-2002"]),
  org("umbrella-europe", "Umbrella Europe", "Divisão regional", "Resident Evil 3: Nemesis (1999)", "Pesquisa e desenvolvimento avançado de B.O.W.s.", "Ligada ao projeto Nemesis/NE-α.", ["re3-1999"]),
  org("umbrella-usa", "Umbrella USA", "Divisão regional", "Resident Evil (1996)", "Operações e laboratórios nos EUA.", "Mantém instalações como Arklay/NEST.", ["re1-1996", "re2-1998"]),
  org("stars", "S.T.A.R.S.", "Unidade tática policial", "Resident Evil (1996)", "Responder a incidentes especiais em Raccoon City.", "Primeiro grupo a descobrir a Umbrella.", ["re1-1996", "re3-1999"]),
  org("rpd", "R.P.D.", "Departamento de polícia", "Resident Evil 2 (1998)", "Policiamento de Raccoon City.", "Cai durante o surto e vira símbolo do desastre.", ["re2-1998", "re3-1999"]),
  org("ubcs", "U.B.C.S.", "Força paramilitar da Umbrella", "Resident Evil 3: Nemesis (1999)", "Operações de campo e coleta de dados em surtos.", "Atua em Raccoon City sob fachada de resgate.", ["re3-1999"]),
  org("uss", "U.S.S.", "Unidade especial da Umbrella", "Resident Evil 2 (1998)", "Operações clandestinas e recuperação de amostras.", "Entra em conflito com Birkin e espalha eventos do G-Virus.", ["re2-1998"]),
  org("bsaa", "BSAA", "Aliança anti-bioterrorismo", "Resident Evil 5 (2009)", "Combater B.O.W.s e tráfico biológico global.", "Instituição central pós-Umbrella, depois colocada sob suspeita em Village.", ["re5-2009", "re6-2012", "re-village-2021"]),
  org("blue-umbrella", "Blue Umbrella", "Empresa de segurança anti-bioterrorismo", "Resident Evil 7: Biohazard (2017)", "Reparar/combater legado da Umbrella.", "Apoia Chris na crise de Dulvey.", ["re7-2017"]),
  org("tricell", "Tricell", "Conglomerado farmacêutico", "Resident Evil 5 (2009)", "Pesquisa e lucro com biotecnologia/B.O.W.s.", "Financia Uroboros e Wesker.", ["re5-2009"]),
  org("wilpharma", "WilPharma", "Empresa farmacêutica", "Resident Evil: Degeneration (2008)", "Pesquisa médica e vacinas.", "Centro do conflito bioterrorista de Degeneration.", ["degeneration"], ["cgi-canon"], "Continuidade CGI/canon próximo aos jogos."),
  org("los-illuminados", "Los Illuminados", "Culto parasitário", "Resident Evil 4 (2005)", "Domínio por Las Plagas.", "Antagonistas centrais de RE4.", ["re4-2005"]),
  org("connections", "The Connections", "Sindicato bioterrorista", "Resident Evil 7: Biohazard (2017)", "Criar e vender bioarmas baseadas no Mold.", "Desenvolve Eveline e liga RE7 a Requiem em material recente.", ["re7-2017", "re-requiem-2026"]),
  org("neo-umbrella", "Neo-Umbrella", "Facção bioterrorista", "Resident Evil 6 (2012)", "Promover caos global com C-Virus.", "Marca operacional usada por Carla Radames.", ["re6-2012"]),
  org("fbc", "FBC", "Agência federal anti-bioterrorismo", "Resident Evil: Revelations (2012)", "Responder a crises antes da BSAA ganhar protagonismo.", "Envolvida na conspiração Terragrigia/Queen Zenobia.", ["revelations"]),
  org("terrasave", "TerraSave", "ONG de assistência", "Resident Evil: Degeneration (2008)", "Apoiar vítimas de bioterrorismo.", "Liga Claire a Degeneration e Revelations 2.", ["degeneration", "revelations-2"], ["games-canon", "cgi-canon"], "Canon dos jogos/CGI."),
  org("us-government", "Governo dos EUA", "Estado / aparato federal", "Resident Evil 4 (2005)", "Segurança nacional e resposta a bioterrorismo.", "Emprega Leon/DSO e aparece em múltiplas crises.", ["re4-2005", "re6-2012", "infinite-darkness"], ["games-canon", "cgi-canon"], "Canon dos jogos/CGI."),
  org("dso", "DSO", "Agência de operações de segurança", "Resident Evil 6 (2012)", "Responder a ameaças bioterroristas.", "Organização de Leon e Sherry em RE6, com retorno ligado a Requiem em fontes recentes.", ["re6-2012", "vendetta", "re-requiem-2026"], ["games-canon", "cgi-canon"], "Canon dos jogos/CGI."),
  org("hound-wolf", "Hound Wolf Squad", "Esquadrão especial", "Resident Evil Village (2021)", "Operações sob comando de Chris.", "Atua na vila e protege Rose.", ["re-village-2021", "village-shadows-of-rose"]),
  org("veltro", "Veltro", "Grupo terrorista", "Resident Evil: Revelations (2012)", "Uso de T-Abyss como terror biológico.", "Ameaça central de Revelations.", ["revelations"]),
  org("ashford", "Família Ashford", "Linhagem fundadora", "Resident Evil Code: Veronica (2000)", "Manter prestígio e pesquisa aristocrática da Umbrella.", "Origina Alexia, Alfred e o T-Veronica.", ["code-veronica"]),
  org("miranda-cult", "Culto de Mother Miranda", "Culto local", "Resident Evil Village (2021)", "Servir Miranda e seus experimentos de ressurreição.", "Controla a vila, Lordes e Cadou.", ["re-village-2021"]),
  org("film-umbrella", "Umbrella dos filmes / Hive", "Megacorporação cinematográfica", "Resident Evil (filme, 2002)", "Domínio corporativo e experimentação viral.", "Antagonista da saga Alice.", ["film-re-2002", "film-final-chapter"], ["live-action-anderson"], "Continuidade alternativa dos filmes live-action.", ["wiki-pt", "imdb-films"]),
  org("wtrc-umbrella", "Umbrella de Welcome to Raccoon City", "Corporação do reboot", "Welcome to Raccoon City (2021)", "Pesquisa e controle de Raccoon City.", "Antagonista do reboot.", ["film-welcome-raccoon-city"], ["welcome-to-raccoon-city"], "Reboot separado.", ["wiki-pt", "imdb-films"])
];
