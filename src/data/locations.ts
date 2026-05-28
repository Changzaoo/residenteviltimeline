import type { Location } from "./types";

function loc(
  id: string,
  name: string,
  region: string,
  firstAppearance: string,
  relatedMedia: string[],
  significance: string,
  continuity: Location["continuity"] = ["games-canon"],
  canonNote = "Canon dos jogos.",
  sourceRefs = ["capcom-history", "re-fandom"]
): Location {
  return { id, name, region, firstAppearance, relatedMedia, significance, continuity, canonNote, sourceRefs };
}

export const locations: Location[] = [
  loc("raccoon-city", "Raccoon City", "EUA, meio-oeste", "Resident Evil 2 (1998)", ["re2-1998", "re3-1999", "outbreak"], "Epicentro do surto de 1998 e símbolo máximo da queda da Umbrella."),
  loc("arklay", "Arklay Mountains", "Arredores de Raccoon City", "Resident Evil (1996)", ["re1-1996", "re0-2002"], "Região do incidente da mansão e do Ecliptic Express."),
  loc("spencer-mansion", "Spencer Mansion", "Arklay Mountains", "Resident Evil (1996)", ["re1-1996", "re1-remake-2002"], "Mansão-laboratório onde S.T.A.R.S. descobre a Umbrella."),
  loc("nest", "NEST", "Subsolo de Raccoon City", "Resident Evil 2 (1998)", ["re2-1998", "re2-remake-2019"], "Laboratório subterrâneo do G-Virus."),
  loc("rpd", "R.P.D.", "Raccoon City", "Resident Evil 2 (1998)", ["re2-1998", "re3-1999"], "Delegacia transformada em cenário de sobrevivência."),
  loc("orphanage", "Raccoon City Orphanage", "Raccoon City", "Resident Evil 2 Remake (2019)", ["re2-remake-2019"], "Local expandido no remake ligado a Brian Irons e Sherry."),
  loc("rockfort", "Rockfort Island", "Atlântico Sul", "Resident Evil Code: Veronica (2000)", ["code-veronica"], "Instalação/prisão da Umbrella e dos Ashford."),
  loc("antarctic-base", "Antarctic Base", "Antártica", "Resident Evil Code: Veronica (2000)", ["code-veronica"], "Base Ashford e palco da revelação de Alexia."),
  loc("rural-spain", "Espanha rural", "Europa", "Resident Evil 4 (2005)", ["re4-2005", "re4-remake-2023"], "Vila controlada por Los Illuminados e Las Plagas."),
  loc("castle-salazar", "Castle Salazar", "Espanha", "Resident Evil 4 (2005)", ["re4-2005", "re4-remake-2023"], "Domínio de Ramon Salazar e laboratório de Plagas."),
  loc("queen-zenobia", "Queen Zenobia", "Mediterrâneo", "Resident Evil: Revelations (2012)", ["revelations"], "Navio de cruzeiro palco do T-Abyss."),
  loc("kijuju", "Kijuju", "África Ocidental", "Resident Evil 5 (2009)", ["re5-2009"], "Zona da operação BSAA contra Tricell/Uroboros."),
  loc("lanshiang", "Lanshiang", "China", "Resident Evil 6 (2012)", ["re6-2012"], "Centro da crise do C-Virus em RE6."),
  loc("tall-oaks", "Tall Oaks", "EUA", "Resident Evil 6 (2012)", ["re6-2012"], "Cidade atacada no início da campanha de Leon."),
  loc("edonia", "Edonia", "Europa Oriental", "Resident Evil 6 (2012)", ["re6-2012"], "Zona de guerra onde Jake e Chris cruzam o C-Virus."),
  loc("dulvey", "Dulvey, Louisiana", "EUA", "Resident Evil 7: Biohazard (2017)", ["re7-2017"], "Região rural da família Baker."),
  loc("baker-house", "Casa dos Baker", "Dulvey", "Resident Evil 7: Biohazard (2017)", ["re7-2017"], "Residência dominada por Eveline e pelo Mold."),
  loc("salt-mine", "Mina de sal", "Dulvey", "Resident Evil 7: Biohazard (2017)", ["re7-2017", "re7-not-a-hero"], "Instalação subterrânea ligada ao Mold/Eveline."),
  loc("village", "Vila europeia de RE Village", "Leste Europeu", "Resident Evil Village (2021)", ["re-village-2021"], "Comunidade moldada por Miranda e pelo Megamiceto."),
  loc("castle-dimitrescu", "Castelo Dimitrescu", "Vila", "Resident Evil Village (2021)", ["re-village-2021"], "Domínio de Alcina e suas filhas."),
  loc("beneviento-house", "Casa Beneviento", "Vila", "Resident Evil Village (2021)", ["re-village-2021"], "Cenário psicológico ligado a Donna e Angie."),
  loc("moreau-reservoir", "Reservatório Moreau", "Vila", "Resident Evil Village (2021)", ["re-village-2021"], "Área aquática de Salvatore Moreau."),
  loc("heisenberg-factory", "Fábrica Heisenberg", "Vila", "Resident Evil Village (2021)", ["re-village-2021"], "Fábrica de Soldats e domínio de Karl Heisenberg."),
  loc("miranda-lab", "Laboratório de Miranda", "Vila", "Resident Evil Village (2021)", ["re-village-2021"], "Arquivo de pesquisas de Miranda e elo com Spencer."),
  loc("megamycete-mind", "Consciência do Megamiceto", "Plano de memória fúngica", "Shadows of Rose (2022)", ["village-shadows-of-rose"], "Espaço mental explorado por Rose."),
  loc("hive", "The Hive", "Raccoon City dos filmes", "Resident Evil (filme, 2002)", ["film-re-2002", "film-final-chapter"], "Complexo subterrâneo da Umbrella nos filmes.", ["live-action-anderson"], "Continuidade alternativa dos filmes live-action.", ["wiki-pt", "imdb-films"]),
  loc("film-raccoon", "Raccoon City dos filmes", "EUA", "Resident Evil: Apocalypse (2004)", ["film-apocalypse", "film-final-chapter"], "Versão cinematográfica da cidade.", ["live-action-anderson"], "Continuidade alternativa dos filmes live-action.", ["wiki-pt", "imdb-films"]),
  loc("wtrc-raccoon", "Raccoon City de Welcome to Raccoon City", "EUA", "Welcome to Raccoon City (2021)", ["film-welcome-raccoon-city"], "Reboot que combina mansão e delegacia.", ["welcome-to-raccoon-city"], "Reboot separado.", ["wiki-pt", "imdb-films"]),
  loc("wrenwood", "Wrenwood Hotel", "Próximo às ruínas de Raccoon City", "Resident Evil Requiem (2026)", ["re-requiem-2026"], "Local recente associado a Grace Ashcroft em material de Requiem.", ["games-canon"], "Canon dos jogos; detalhes recentes devem ser conferidos.", ["capcom-requiem", "capcom-requiem-stats", "capcom-portal", "re-fandom"])
];
