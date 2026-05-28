import type { ContinuityId } from "./types";
import { visualAssets } from "./visualAssets";

export type CharacterOutfitKind = "campanha" | "cgi" | "remake" | "extra" | "alternativa";

export interface CharacterOutfit {
  id: string;
  characterId: string;
  label: string;
  mediaTitle: string;
  mediaId?: string;
  era: string;
  sortYear: number;
  continuity: ContinuityId;
  kind: CharacterOutfitKind;
  src: string;
  sourceName: string;
  sourceUrl: string;
  note: string;
}

const fandom = "Resident Evil Wiki/Fandom";

function outfit(
  id: string,
  characterId: string,
  label: string,
  mediaTitle: string,
  era: string,
  sortYear: number,
  continuity: ContinuityId,
  kind: CharacterOutfitKind,
  src: string,
  sourceUrl: string,
  note: string,
  mediaId?: string
): CharacterOutfit {
  return {
    id,
    characterId,
    label,
    mediaTitle,
    mediaId,
    era,
    sortYear,
    continuity,
    kind,
    src,
    sourceName: fandom,
    sourceUrl,
    note
  };
}

export const characterOutfits: CharacterOutfit[] = [
  outfit("chris-re1-remake", "chris-redfield", "S.T.A.R.S. Alpha", "Resident Evil / Remake", "Incidente da Mansao - 1998", 1998, "games-canon", "remake", "https://static.wikia.nocookie.net/residentevil/images/8/86/Chris_Full_RE1make.png/revision/latest?cb=20201201130135", "https://residentevil.fandom.com/wiki/Chris_Redfield", "Uniforme de campo de Arklay, antes de Chris virar simbolo global contra B.O.W.s.", "re1-remake-2002"),
  outfit("chris-code-veronica", "chris-redfield", "Busca por Claire", "Resident Evil CODE: Veronica", "Rockfort / Antartica - 1998", 1998.2, "games-canon", "campanha", "https://static.wikia.nocookie.net/residentevil/images/d/da/Chris_RE2.jpg/revision/latest?cb=20100527215037", "https://residentevil.fandom.com/wiki/Chris_Redfield", "Visual associado ao periodo em que Chris persegue a trilha da Umbrella e encara Wesker de novo.", "code-veronica"),
  outfit("chris-revelations", "chris-redfield", "BSAA maritima", "Resident Evil: Revelations", "Operacao Queen Zenobia - 2005", 2005, "games-canon", "campanha", "https://static.wikia.nocookie.net/residentevil/images/9/96/Chris_Redfield_Revelations_profile.png/revision/latest?cb=20200213111137", "https://residentevil.fandom.com/wiki/Chris_Redfield", "A fase em que Chris ja opera como agente BSAA, mas ainda carrega o peso pessoal de Arklay.", "revelations"),
  outfit("chris-re5-bsaa", "chris-redfield", "BSAA Kijuju", "Resident Evil 5", "Kijuju - 2009", 2009, "games-canon", "campanha", "https://static.wikia.nocookie.net/residentevil/images/0/09/Chris_Redfield_%28BSAA%29.png/revision/latest?cb=20200612032838", "https://residentevil.fandom.com/wiki/Chris_Redfield", "O Chris mais militarizado: colete pesado, doutrina BSAA e uma guerra que deixou de ser local.", "re5-2009"),
  outfit("chris-re6-bsaa", "chris-redfield", "Capitao BSAA", "Resident Evil 6", "Edonia / Lanshiang - 2012-2013", 2012, "games-canon", "campanha", "https://static.wikia.nocookie.net/residentevil/images/7/75/Chris_Re6.jpg/revision/latest?cb=20120410161633", "https://residentevil.fandom.com/wiki/Chris_Redfield", "A roupa de comando de um homem quebrado por perdas, alcool, culpa e uma missao grande demais.", "re6-2012"),
  outfit("chris-death-island", "chris-redfield", "Operacao Alcatraz", "Resident Evil: Death Island", "Alcatraz - 2015", 2015, "cgi-canon", "cgi", "https://static.wikia.nocookie.net/residentevil/images/a/a4/Chris_-_DI_Render.png/revision/latest?cb=20230706084559", "https://residentevil.fandom.com/wiki/Chris_Redfield", "Registro CGI proximo ao canon dos jogos, ja com Chris como veterano de crises sucessivas.", "death-island"),
  outfit("chris-re7-blue-umbrella", "chris-redfield", "Blue Umbrella", "Resident Evil 7: Not a Hero", "Dulvey - 2017", 2017, "games-canon", "campanha", "https://static.wikia.nocookie.net/residentevil/images/a/a8/Chris_RE7.jpg/revision/latest?cb=20170125204512", "https://residentevil.fandom.com/wiki/Chris_Redfield", "Visual controverso da fase Blue Umbrella, quando confiar no emblema virou parte do horror.", "re7-not-a-hero"),
  outfit("chris-village-hound-wolf", "chris-redfield", "Hound Wolf", "Resident Evil Village", "Europa Oriental - 2021", 2021, "games-canon", "campanha", "https://static.wikia.nocookie.net/residentevil/images/d/d8/ChrisBFull.png/revision/latest?cb=20231222181841", "https://residentevil.fandom.com/wiki/Chris_Redfield", "Operador sombrio, quase fantasma militar, guiando a crise Winters sob segredo e desgaste.", "re-village-2021"),

  outfit("jill-re1-remake", "jill-valentine", "S.T.A.R.S. Alpha", "Resident Evil / Remake", "Incidente da Mansao - 1998", 1998, "games-canon", "remake", "https://static.wikia.nocookie.net/residentevil/images/c/c2/Jill_Full_RE1make.png/revision/latest?cb=20201201130206", "https://residentevil.fandom.com/wiki/Jill_Valentine", "Uniforme de Arklay, ainda policial, ainda humana diante de um laboratorio que parecia impossivel.", "re1-remake-2002"),
  outfit("jill-re3-classic", "jill-valentine", "Fuga de Raccoon", "Resident Evil 3: Nemesis", "Raccoon City - 1998", 1998.8, "games-canon", "campanha", "https://static.wikia.nocookie.net/residentevil/images/2/2c/JillRE3-2.jpg/revision/latest?cb=20080812060339", "https://residentevil.fandom.com/wiki/Jill_Valentine", "O visual classico da sobrevivente perseguida por Nemesis no meio de uma cidade em colapso.", "re3-1999"),
  outfit("jill-re3-remake", "jill-valentine", "Sobrevivente urbana", "Resident Evil 3 Remake", "Raccoon City - 1998", 1998.9, "games-canon", "remake", "https://static.wikia.nocookie.net/residentevil/images/8/8b/Jill_Full_RE3make.png/revision/latest?cb=20200411154658", "https://residentevil.fandom.com/wiki/Jill_Valentine", "Remake com roupa mais funcional, fadiga visivel e uma Jill que parece ter dormido pouco ha semanas.", "re3-remake-2020"),
  outfit("jill-revelations", "jill-valentine", "BSAA Queen Zenobia", "Resident Evil: Revelations", "Mediterraneo - 2005", 2005, "games-canon", "campanha", "https://static.wikia.nocookie.net/residentevil/images/1/19/Jill_Valentine_Render_Revelations.png/revision/latest?cb=20240626203756", "https://residentevil.fandom.com/wiki/Jill_Valentine", "Equipamento de infiltracao maritima da fase BSAA, quando Jill volta a entrar em labirintos fechados.", "revelations"),
  outfit("jill-re5-bsaa", "jill-valentine", "BSAA", "Resident Evil 5", "Kijuju - 2009", 2009, "games-canon", "campanha", "https://static.wikia.nocookie.net/residentevil/images/5/5d/Jill_Valentine_%28BSAA%29.png/revision/latest?cb=20200612033350", "https://residentevil.fandom.com/wiki/Jill_Valentine", "Registro da Jill recuperada do controle de Wesker, com a imagem de agente ainda marcada por trauma.", "re5-2009"),
  outfit("jill-re5-battlesuit", "jill-valentine", "Battlesuit", "Resident Evil 5", "Controle de Wesker - 2009", 2009.1, "games-canon", "campanha", "https://static.wikia.nocookie.net/residentevil/images/e/ec/Jill_Valentine_%28Battlesuit%29.png/revision/latest?cb=20200612033400", "https://residentevil.fandom.com/wiki/Jill_Valentine", "Visual da fase mais sombria de Jill: corpo usado como arma, vontade roubada, memoria em estilhaços.", "re5-2009"),
  outfit("jill-death-island", "jill-valentine", "Operacao Alcatraz", "Resident Evil: Death Island", "Alcatraz - 2015", 2015, "cgi-canon", "cgi", "https://static.wikia.nocookie.net/residentevil/images/0/0e/Jill_-_Death_Island_Render.png/revision/latest?cb=20230706214935", "https://residentevil.fandom.com/wiki/Jill_Valentine", "Aparencia CGI recente, aproximando Jill de sua fase pos-trauma sem apagar Raccoon do rosto.", "death-island"),

  outfit("leon-re2-classic", "leon-kennedy", "R.P.D. novato", "Resident Evil 2", "Raccoon City - 1998", 1998, "games-canon", "campanha", "https://static.wikia.nocookie.net/residentevil/images/f/f2/Leon-RE2.jpeg/revision/latest?cb=20190707022939", "https://residentevil.fandom.com/wiki/Leon_Scott_Kennedy", "Primeiro uniforme de Leon: a inocencia de um policial novo entrando tarde demais na cidade errada.", "re2-1998"),
  outfit("leon-re2-remake", "leon-kennedy", "R.P.D. remake", "Resident Evil 2 Remake", "Raccoon City - 1998", 1998.1, "games-canon", "remake", "https://static.wikia.nocookie.net/residentevil/images/1/1d/LeonRE2RemakeRender.png/revision/latest?cb=20240316223204", "https://residentevil.fandom.com/wiki/Leon_Scott_Kennedy", "O remake aumenta o peso fisico do uniforme: sangue, chuva, couro e choque de realidade.", "re2-remake-2019"),
  outfit("leon-re4-agent", "leon-kennedy", "Agente presidencial", "Resident Evil 4", "Europa rural - 2004", 2004, "games-canon", "campanha", "https://static.wikia.nocookie.net/residentevil/images/2/22/LeonRE4.jpg/revision/latest?cb=20120203133739", "https://residentevil.fandom.com/wiki/Leon_Scott_Kennedy", "Ja nao e novato; o casaco e a postura denunciam anos de treinamento e coisas nao ditas.", "re4-2005"),
  outfit("leon-re4-remake", "leon-kennedy", "Agente presidencial remake", "Resident Evil 4 Remake", "Europa rural - 2004", 2004.1, "games-canon", "remake", "https://static.wikia.nocookie.net/residentevil/images/8/86/Leon_Kennedy_%28RE4make%29.png/revision/latest?cb=20260330193233", "https://residentevil.fandom.com/wiki/Leon_Scott_Kennedy", "Versao RE Engine: o mesmo agente, mas com um cansaço mais humano por baixo da frieza.", "re4-remake-2023"),
  outfit("leon-degeneration", "leon-kennedy", "Agente federal", "Resident Evil: Degeneration", "Harvardville - 2005", 2005, "cgi-canon", "cgi", "https://static.wikia.nocookie.net/residentevil/images/5/5c/Leon-Degeneration.jpg/revision/latest?cb=20100701093257", "https://residentevil.fandom.com/wiki/Leon_Scott_Kennedy", "Leon entre Raccoon e o bioterrorismo global, ja tratado como especialista em desastre impossivel.", "degeneration"),
  outfit("leon-damnation", "leon-kennedy", "Operacao Leste Europeu", "Resident Evil: Damnation", "Republica Eslava Oriental - 2011", 2011, "cgi-canon", "cgi", "https://static.wikia.nocookie.net/residentevil/images/e/ea/Leon_Damnation1.jpg/revision/latest?cb=20120831194135", "https://residentevil.fandom.com/wiki/Leon_Scott_Kennedy", "Fase de espionagem suja: sem glamour, sem saida limpa, cercado por guerra e B.O.W.s.", "damnation"),
  outfit("leon-re6-dso", "leon-kennedy", "DSO", "Resident Evil 6", "Tall Oaks / Lanshiang - 2012-2013", 2012, "games-canon", "campanha", "https://static.wikia.nocookie.net/residentevil/images/d/d3/LeonHandgunRE6.png/revision/latest?cb=20121227061026", "https://residentevil.fandom.com/wiki/Leon_Scott_Kennedy", "Traje de agente em uma crise em escala presidencial, onde segredo de Estado vira epidemia.", "re6-2012"),
  outfit("leon-infinite-darkness", "leon-kennedy", "Casa Branca", "Resident Evil: Infinite Darkness", "Washington / Penamstan - 2006", 2006, "cgi-canon", "cgi", "https://static.wikia.nocookie.net/residentevil/images/1/13/Leon_Scott_Kennedy_Infinite_Darkness_%28Full_Render%29.png/revision/latest?cb=20230624180432", "https://residentevil.fandom.com/wiki/Leon_Scott_Kennedy", "Leon em modo agente politico: terno, arma escondida e uma corrupcao que nao veste monstro.", "infinite-darkness"),
  outfit("leon-death-island", "leon-kennedy", "Operacao Alcatraz", "Resident Evil: Death Island", "Alcatraz - 2015", 2015, "cgi-canon", "cgi", "https://static.wikia.nocookie.net/residentevil/images/2/25/Leon_-_DI_Render.png/revision/latest?cb=20230706084632", "https://residentevil.fandom.com/wiki/Leon_Scott_Kennedy", "Veterano CGI: a jaqueta volta, mas a leveza de 1998 ficou enterrada em Raccoon.", "death-island"),
  outfit("leon-requiem", "leon-kennedy", "DSO Requiem", "Resident Evil Requiem", "Requiem - 2026", 2026, "games-canon", "campanha", "https://static.wikia.nocookie.net/residentevil/images/7/7d/RE9_-_Leon_Render.png/revision/latest?cb=20251212111407", "https://residentevil.fandom.com/wiki/Leon_Scott_Kennedy/gallery#Resident_Evil_Requiem", "Leon retorna mais velho, mais pesado e menos disposto a fingir que Raccoon ficou no passado.", "re-requiem-2026"),

  outfit("claire-re2-classic", "claire-redfield", "Made in Heaven", "Resident Evil 2", "Raccoon City - 1998", 1998, "games-canon", "campanha", "https://static.wikia.nocookie.net/residentevil/images/9/92/ClaireGunRE2.jpg/revision/latest?cb=20080812063002", "https://residentevil.fandom.com/wiki/Claire_Redfield/gallery#Resident_Evil_2_(1998)", "Jaqueta vermelha, moto e teimosia: Claire entra em Raccoon procurando Chris e encontra o fim do mundo.", "re2-1998"),
  outfit("claire-re2-remake", "claire-redfield", "Jaqueta classica remake", "Resident Evil 2 Remake", "Raccoon City - 1998", 1998.1, "games-canon", "remake", "https://static.wikia.nocookie.net/residentevil/images/b/b2/Claire_Classic_Jacket_remake.jpg/revision/latest?cb=20200302175209", "https://residentevil.fandom.com/wiki/Claire_Redfield", "O remake conserva o vermelho, mas troca o iconico por uma sobrevivencia mais tensa e tatil.", "re2-remake-2019"),
  outfit("claire-code-veronica", "claire-redfield", "Rockfort", "Resident Evil CODE: Veronica", "Rockfort / Antartica - 1998", 1998.2, "games-canon", "campanha", "https://static.wikia.nocookie.net/residentevil/images/c/c5/Claire_%28the_Darkside_Chronicles_Code_Veronica%29.jpg/revision/latest?cb=20100530160911", "https://residentevil.fandom.com/wiki/Claire_Redfield", "Claire deixa de ser apenas sobrevivente de Raccoon e vira alvo direto da Umbrella.", "code-veronica"),
  outfit("claire-degeneration", "claire-redfield", "TerraSave", "Resident Evil: Degeneration", "Harvardville - 2005", 2005, "cgi-canon", "cgi", "https://static.wikia.nocookie.net/residentevil/images/a/a7/Claire_Degeneration.jpg/revision/latest?cb=20080801021954", "https://residentevil.fandom.com/wiki/Claire_Redfield", "A jaqueta da sobrevivente da lugar ao trabalho humanitario, mas o bioterrorismo a encontra de novo.", "degeneration"),
  outfit("claire-revelations-2", "claire-redfield", "TerraSave capturada", "Resident Evil: Revelations 2", "Ilha de Sushestvovanie - 2011", 2011, "games-canon", "campanha", "https://static.wikia.nocookie.net/residentevil/images/f/f5/Claire_Redfield_Revelations_2_-_6_Months_Leap.png/revision/latest?cb=20160106142929", "https://residentevil.fandom.com/wiki/Claire_Redfield", "Visual de cativeiro e resistencia, com Claire presa num experimento que mede medo.", "revelations-2"),
  outfit("claire-death-island", "claire-redfield", "Operacao Alcatraz", "Resident Evil: Death Island", "Alcatraz - 2015", 2015, "cgi-canon", "cgi", "https://static.wikia.nocookie.net/residentevil/images/9/9e/Claire_-_Death_Island_Render.png/revision/latest?cb=20230703033607", "https://residentevil.fandom.com/wiki/Claire_Redfield", "Claire mais madura, ainda atravessando laboratorios como quem sabe que toda porta mente.", "death-island"),

  outfit("rebecca-zero", "rebecca-chambers", "S.T.A.R.S. Bravo", "Resident Evil 0", "Ecliptic Express - 1998", 1998, "games-canon", "campanha", "https://static.wikia.nocookie.net/residentevil/images/8/8b/Rebecca_Chambers_RE0HD_Render.png/revision/latest?cb=20150712221747", "https://residentevil.fandom.com/wiki/Rebecca_Chambers", "A medica novata antes da mansao, cercada por cadaveres, parasitas e silencio ferroviario.", "re0-2002"),
  outfit("rebecca-re1", "rebecca-chambers", "Mansao Spencer", "Resident Evil / Remake", "Arklay - 1998", 1998.1, "games-canon", "remake", "https://static.wikia.nocookie.net/residentevil/images/c/cb/Rebecca_Chambers_%28S.T.A.R.S.%29.png/revision/latest?cb=20200612041212", "https://residentevil.fandom.com/wiki/Rebecca_Chambers", "Rebecca depois do trem, ainda de pe, ainda tentando salvar quem da.", "re1-remake-2002"),
  outfit("rebecca-vendetta", "rebecca-chambers", "Pesquisadora", "Resident Evil: Vendetta", "Nova York - 2014", 2014, "cgi-canon", "cgi", "https://static.wikia.nocookie.net/residentevil/images/6/6e/Rebecca_Chambers_-_Vendetta.png/revision/latest?cb=20161215021324", "https://residentevil.fandom.com/wiki/Rebecca_Chambers", "A sobrevivente vira cientista, trocando corredor de mansao por laboratorio anti-bioterror.", "vendetta"),
  outfit("rebecca-death-island", "rebecca-chambers", "Operacao Alcatraz", "Resident Evil: Death Island", "Alcatraz - 2015", 2015, "cgi-canon", "cgi", "https://static.wikia.nocookie.net/residentevil/images/5/51/Rebecca_render_-_Death_Island.png/revision/latest?cb=20230703034451", "https://residentevil.fandom.com/wiki/Rebecca_Chambers", "Registro CGI recente da Rebecca que sobreviveu cedo demais e nunca ficou distante da ciencia.", "death-island"),

  outfit("ada-re2", "ada-wong", "Espia em Raccoon", "Resident Evil 2", "Raccoon City - 1998", 1998, "games-canon", "campanha", "https://static.wikia.nocookie.net/residentevil/images/2/25/Ada_Wong_2.jpg/revision/latest?cb=20080813062202", "https://residentevil.fandom.com/wiki/Ada_Wong/gallery#Resident_Evil_2_(1998)", "Ada entra como mentira bem vestida: agente, amante falsa, ladra de amostras.", "re2-1998"),
  outfit("ada-re2-remake-coat", "ada-wong", "Investigadora encoberta", "Resident Evil 2 Remake", "Raccoon City - 1998", 1998.1, "games-canon", "remake", "https://static.wikia.nocookie.net/residentevil/images/9/94/AdaRE2Remake_Coat_%28NoBackground%29.png/revision/latest?cb=20210826190706", "https://residentevil.fandom.com/wiki/Ada_Wong", "O sobretudo do remake transforma Ada numa sombra federal que talvez nunca tenha existido.", "re2-remake-2019"),
  outfit("ada-re4", "ada-wong", "Separate Ways", "Resident Evil 4", "Europa rural - 2004", 2004, "games-canon", "campanha", "https://static.wikia.nocookie.net/residentevil/images/b/ba/Ada_Wong_re4.png/revision/latest?cb=20230802190438", "https://residentevil.fandom.com/wiki/Ada_Wong", "Vermelho em territorio de culto: Ada observa Leon, Wesker e a Plaga como quem escolhe qual segredo vender.", "re4-2005"),
  outfit("ada-damnation", "ada-wong", "Vestido diplomatico", "Resident Evil: Damnation", "Republica Eslava Oriental - 2011", 2011, "cgi-canon", "cgi", "https://static.wikia.nocookie.net/residentevil/images/6/63/Ada_Wong_-_Damnation_%282012%29.png/revision/latest?cb=20230623012946", "https://residentevil.fandom.com/wiki/Ada_Wong", "Ada em modo diplomata fantasma, usando cargo e elegancia como disfarce operacional.", "damnation"),
  outfit("ada-re6", "ada-wong", "Agente solitaria", "Resident Evil 6", "Lanshiang - 2013", 2013, "games-canon", "campanha", "https://static.wikia.nocookie.net/residentevil/images/a/a7/Ada_Wong_RE6_render.png/revision/latest?cb=20260116014956", "https://residentevil.fandom.com/wiki/Ada_Wong", "O visual de uma Ada perseguida pela propria imagem, quando Carla transforma identidade em arma.", "re6-2012"),
  outfit("ada-re4-remake", "ada-wong", "Separate Ways remake", "Resident Evil 4 Remake", "Europa rural - 2004", 2004.1, "games-canon", "remake", "https://static.wikia.nocookie.net/residentevil/images/1/18/Ada_Wong_%28RE4make%29.png/revision/latest?cb=20260330184814", "https://residentevil.fandom.com/wiki/Ada_Wong", "Releitura RE Engine do vermelho operacional, menos teatro e mais infiltracao.", "re4r-separate-ways"),

  outfit("barry-re1", "barry-burton", "S.T.A.R.S. Alpha", "Resident Evil / Remake", "Arklay - 1998", 1998, "games-canon", "remake", "https://static.wikia.nocookie.net/residentevil/images/1/1f/RE_Remake_Barry.png/revision/latest?cb=20191224194913", "https://residentevil.fandom.com/wiki/Barry_Burton/gallery#Resident_Evil_(2002)", "Veterano armado ate os dentes, mas preso a chantagem da Umbrella e a culpa por Jill.", "re1-remake-2002"),
  outfit("barry-revelations-2", "barry-burton", "Resgate de Moira", "Resident Evil: Revelations 2", "Ilha de Sushestvovanie - 2011", 2011, "games-canon", "campanha", "https://static.wikia.nocookie.net/residentevil/images/f/f1/Barry_2_.jpg/revision/latest?cb=20141202135124", "https://residentevil.fandom.com/wiki/Barry_Burton", "Barry mais velho, carregando arma, lanterna e a culpa de um pai que chegou tarde.", "revelations-2"),

  outfit("carlos-re3-classic", "carlos-oliveira", "U.B.C.S.", "Resident Evil 3: Nemesis", "Raccoon City - 1998", 1998, "games-canon", "campanha", "https://static.wikia.nocookie.net/residentevil/images/7/75/Carlos_Oliveira_RE3_Nemesis_render.png/revision/latest?cb=20200531180245", "https://residentevil.fandom.com/wiki/Carlos_Oliveira", "Mercenario que entra como peca da Umbrella e termina como uma das poucas pessoas decentes no inferno.", "re3-1999"),
  outfit("carlos-re3-remake", "carlos-oliveira", "U.B.C.S. remake", "Resident Evil 3 Remake", "Raccoon City - 1998", 1998.1, "games-canon", "remake", "https://static.wikia.nocookie.net/residentevil/images/f/fc/Resident_evil_3_Carlos_render.jpg/revision/latest?cb=20200229212433", "https://residentevil.fandom.com/wiki/Carlos_Oliveira/gallery#Resident_Evil_3_(2020)", "Releitura mais robusta e humana, com Carlos parecendo um soldado cansado de ordens podres.", "re3-remake-2020"),

  outfit("sherry-re2-child", "sherry-birkin", "Crianca sobrevivente", "Resident Evil 2", "Raccoon City - 1998", 1998, "games-canon", "campanha", "https://static.wikia.nocookie.net/residentevil/images/d/d2/Sherry_re2_render.png/revision/latest?cb=20200131153139", "https://residentevil.fandom.com/wiki/Sherry_Birkin", "Sherry antes de ser agente, quando o horror era o pai mutado chamando por ela nos esgotos.", "re2-1998"),
  outfit("sherry-re2-remake", "sherry-birkin", "Orfanato", "Resident Evil 2 Remake", "Raccoon City - 1998", 1998.1, "games-canon", "remake", "https://static.wikia.nocookie.net/residentevil/images/3/3f/Sherry_Re2_remake_render.png/revision/latest?cb=20200131152730", "https://residentevil.fandom.com/wiki/Sherry_Birkin", "A releitura infantil reforca o terror domestico: a cidade cai, mas o medo de Sherry comeca em casa.", "re2-remake-2019"),
  outfit("sherry-re6", "sherry-birkin", "Agente DSO", "Resident Evil 6", "Edonia / Lanshiang - 2012-2013", 2012, "games-canon", "campanha", "https://static.wikia.nocookie.net/residentevil/images/e/e6/Sherry_Birkin_-_RE6_%282012%29.png/revision/latest?cb=20230623015254", "https://residentevil.fandom.com/wiki/Sherry_Birkin", "Sherry adulta transforma o passado G em trabalho de campo, mas o virus nunca deixa de ser sobrenome.", "re6-2012"),
  outfit("sherry-requiem", "sherry-birkin", "Apoio DSO", "Resident Evil Requiem", "Requiem - 2026", 2026, "games-canon", "campanha", "https://static.wikia.nocookie.net/residentevil/images/b/b5/Sherry_Birkin_Requiem_Render.png/revision/latest?cb=20260228144957", "https://residentevil.fandom.com/wiki/Sherry_Birkin/gallery#Resident_Evil_Requiem", "Sherry aparece como agente adulta, carregando o sobrenome Birkin para uma nova investigacao ligada a Raccoon.", "re-requiem-2026"),

  outfit("sheva-re5-bsaa", "sheva-alomar", "BSAA Africa", "Resident Evil 5", "Kijuju - 2009", 2009, "games-canon", "campanha", "https://static.wikia.nocookie.net/residentevil/images/a/a6/Sheva_Alomar_%28BSAA%29.png/revision/latest?cb=20200612033154", "https://residentevil.fandom.com/wiki/Sheva_Alomar", "Sheva veste a BSAA como resposta a perdas antigas causadas pelo mercado de armas biologicas.", "re5-2009"),
  outfit("sheva-extra", "sheva-alomar", "Traje alternativo", "Resident Evil 5", "Modo extra - 2009", 2009.1, "games-canon", "extra", "https://static.wikia.nocookie.net/residentevil/images/3/3e/Sheva_alomar_resident_evil_5_alternative_costume.jpg/revision/latest?cb=20140716003725", "https://residentevil.fandom.com/wiki/Sheva_Alomar", "Registro extra de jogo, separado da leitura principal da campanha.", "re5-2009"),

  outfit("ethan-re7", "ethan-winters", "Civil em Dulvey", "Resident Evil 7: Biohazard", "Dulvey - 2017", 2017, "games-canon", "campanha", "https://static.wikia.nocookie.net/residentevil/images/6/64/Ethan_Winters_RE7_Avatar.png/revision/latest?cb=20171222063727", "https://residentevil.fandom.com/wiki/Ethan_Winters", "Ethan quase sem imagem, porque RE7 transforma o corpo dele em ponto de vista e ferida.", "re7-2017"),
  outfit("ethan-village", "ethan-winters", "Pai em guerra", "Resident Evil Village", "Europa Oriental - 2021", 2021, "games-canon", "campanha", "https://static.wikia.nocookie.net/residentevil/images/4/4f/Ethan_Village_Render.png/revision/latest?cb=20210203080824", "https://residentevil.fandom.com/wiki/Ethan_Winters", "O casaco de inverno vira armadura improvisada para um homem que ja devia estar morto.", "re-village-2021"),

  outfit("mia-re7", "mia-winters", "Fita de Dulvey", "Resident Evil 7: Biohazard", "Dulvey - 2014-2017", 2017, "games-canon", "campanha", "https://static.wikia.nocookie.net/residentevil/images/4/46/Mia_video_Fullscreen-Capcom.png/revision/latest?cb=20200823094816", "https://residentevil.fandom.com/wiki/Mia_Winters", "Mia aparece como pedido de socorro e como segredo: esposa, agente e portadora de uma culpa enorme.", "re7-2017"),
  outfit("mia-village", "mia-winters", "Casa Winters", "Resident Evil Village", "Europa - 2021", 2021, "games-canon", "campanha", "https://static.wikia.nocookie.net/residentevil/images/6/66/Mia_Winters_%28Village_-_Full%29.png/revision/latest?cb=20210523133746", "https://residentevil.fandom.com/wiki/Mia_Winters", "Mia em fase domestica, onde a normalidade e uma mascara fina demais para o Megamiceto.", "re-village-2021"),

  outfit("rose-village", "rose-winters", "Bebe Winters", "Resident Evil Village", "Europa - 2021", 2021, "games-canon", "campanha", "https://static.wikia.nocookie.net/residentevil/images/0/09/BabyRose.png/revision/latest?cb=20210523144337", "https://residentevil.fandom.com/wiki/Rosemary_Winters", "Rose como heranca viva do Mold, ainda sem voz, mas ja no centro de planos monstruosos.", "re-village-2021"),
  outfit("rose-shadows", "rose-winters", "Shadows of Rose", "Resident Evil Village: Shadows of Rose", "Consciência do Megamiceto - 2037", 2037, "games-canon", "campanha", "https://static.wikia.nocookie.net/residentevil/images/0/07/Street_Wolf_Rose.jpg/revision/latest?cb=20220722075038", "https://residentevil.fandom.com/wiki/Rosemary_Winters/gallery", "A adolescente tentando arrancar de si a heranca biologica que todos tratam como arma.", "village-shadows-of-rose"),

  outfit("grace-requiem", "grace-ashcroft", "Analista do FBI", "Resident Evil Requiem", "Wrenwood / Raccoon - 2026", 2026, "games-canon", "campanha", "https://static.wikia.nocookie.net/residentevil/images/0/0a/Graceashcroftrender.png/revision/latest?cb=20251215183542", "https://residentevil.fandom.com/wiki/Grace_Ashcroft/gallery#Resident_Evil_Requiem", "Grace entra em Requiem como investigadora lancada para dentro de uma ferida que sua familia nunca fechou.", "re-requiem-2026"),
  outfit("alyssa-requiem", "alyssa-ashcroft", "Arquivo Ashcroft", "Resident Evil Requiem", "Wrenwood / memoria de Raccoon - 2026", 2026, "games-canon", "campanha", "https://static.wikia.nocookie.net/residentevil/images/9/95/RE9_Alyssa_Ashcroft_Render-crop.png/revision/latest?cb=20250916190913", "https://residentevil.fandom.com/wiki/Alyssa_Ashcroft/gallery#Resident_Evil_Requiem", "Alyssa retorna como cicatriz familiar de Outbreak, ligando jornalismo, memoria civil e o novo caso de Grace.", "re-requiem-2026"),

  outfit("wesker-stars", "albert-wesker", "Capitao S.T.A.R.S.", "Resident Evil / Remake", "Arklay - 1998", 1998, "games-canon", "remake", "https://static.wikia.nocookie.net/residentevil/images/5/53/Albert_Wesker_%28S.T.A.R.S.%29.png/revision/latest?cb=20200612033434", "https://residentevil.fandom.com/wiki/Albert_Wesker", "A mascara perfeita: uniforme de resgate por cima de uma traicao que ja estava escrita.", "re1-remake-2002"),
  outfit("wesker-code-veronica", "albert-wesker", "Traidor revelado", "Resident Evil CODE: Veronica", "Rockfort / Antartica - 1998", 1998.2, "games-canon", "campanha", "https://static.wikia.nocookie.net/residentevil/images/5/52/Wesker_CV_ConceptArt.png/revision/latest?cb=20190514200249", "https://residentevil.fandom.com/wiki/Albert_Wesker", "O Wesker pos-morte encenada, mais rapido, mais frio e menos preocupado em parecer humano.", "code-veronica"),
  outfit("wesker-re5", "albert-wesker", "Uroboros", "Resident Evil 5", "Kijuju - 2009", 2009, "games-canon", "campanha", "https://static.wikia.nocookie.net/residentevil/images/4/4f/Albert_Wesker_%28Midnight%29.png/revision/latest?cb=20200612033420", "https://residentevil.fandom.com/wiki/Albert_Wesker", "Couro preto, controle absoluto e o delirio de transformar evolucao em ditadura biologica.", "re5-2009"),

  outfit("hunk-re2", "hunk", "U.S.S. gas mask", "Resident Evil 2", "Raccoon City - 1998", 1998, "games-canon", "campanha", "https://static.wikia.nocookie.net/residentevil/images/6/6a/HUNK_CGI_cutscene_RE2_1998.png/revision/latest?cb=20200520161202", "https://residentevil.fandom.com/wiki/HUNK", "O visual de HUNK e quase uma ausencia de rosto: Umbrella reduzida a mascara, arma e amostra.", "re2-1998"),
  outfit("hunk-re2-remake", "hunk", "Quarto Sobrevivente", "Resident Evil 2 Remake", "Raccoon City - 1998", 1998.1, "games-canon", "remake", "https://static.wikia.nocookie.net/residentevil/images/0/0b/HUNK_model_RE2make.png/revision/latest?cb=20200520160434", "https://residentevil.fandom.com/wiki/HUNK", "Remake com o mesmo anonimato brutal, agora com textura de equipamento pesado e morte limpa.", "re2-remake-2019"),

  outfit("ashley-re4", "ashley-graham", "Sequestrada", "Resident Evil 4", "Europa rural - 2004", 2004, "games-canon", "campanha", "https://static.wikia.nocookie.net/residentevil/images/f/f5/Ashley_RE4_.png/revision/latest?cb=20190903193653", "https://residentevil.fandom.com/wiki/Ashley_Graham", "Ashley no original: uma civil presa entre culto, controle parasitario e a politica do proprio sobrenome.", "re4-2005"),
  outfit("ashley-re4-remake", "ashley-graham", "Sequestrada remake", "Resident Evil 4 Remake", "Europa rural - 2004", 2004.1, "games-canon", "remake", "https://static.wikia.nocookie.net/residentevil/images/7/70/Ashley_Graham_%28RE4make%29.png/revision/latest?cb=20260330184553", "https://residentevil.fandom.com/wiki/Ashley_Graham", "Remake com Ashley mais ativa, ainda vulneravel, mas menos tratada como objeto de escolta.", "re4-remake-2023"),

  outfit("piers-re6", "piers-nivans", "Atirador BSAA", "Resident Evil 6", "Mar da China - 2012-2013", 2012, "games-canon", "campanha", "https://static.wikia.nocookie.net/residentevil/images/5/54/Piers_Nivans_-_RE6.png/revision/latest?cb=20241231062108", "https://residentevil.fandom.com/wiki/Piers_Nivans", "Piers aparece como disciplina e futuro possivel para Chris, ate a missao cobrar tudo.", "re6-2012"),
  outfit("helena-re6", "helena-harper", "Agente do Servico Secreto", "Resident Evil 6", "Tall Oaks - 2012-2013", 2012, "games-canon", "campanha", "https://static.wikia.nocookie.net/residentevil/images/b/bf/Helena_Harper_render.png/revision/latest?cb=20260109030543", "https://residentevil.fandom.com/wiki/Helena_Harper", "Helena veste a formalidade do governo, mas carrega uma chantagem familiar por baixo.", "re6-2012"),
  outfit("jake-re6", "jake-muller", "Mercenario", "Resident Evil 6", "Edonia / Lanshiang - 2012-2013", 2012, "games-canon", "campanha", "https://static.wikia.nocookie.net/residentevil/images/a/a4/Jake.jpg/revision/latest?cb=20111014193852", "https://residentevil.fandom.com/wiki/Jake_Muller", "Jake nao parece heroi: parece alguem que aprendeu cedo a vender sobrevivencia.", "re6-2012"),
  outfit("moira-revelations-2", "moira-burton", "TerraSave capturada", "Resident Evil: Revelations 2", "Ilha de Sushestvovanie - 2011", 2011, "games-canon", "campanha", "https://static.wikia.nocookie.net/residentevil/images/3/3f/Moira_Burton_Render_2_Profile.png/revision/latest?cb=20140911142028", "https://residentevil.fandom.com/wiki/Moira_Burton", "Moira entra como raiva adolescente e sai marcada por medo, culpa e escolha.", "revelations-2"),
  outfit("natalia-revelations-2", "natalia-korda", "Receptaculo", "Resident Evil: Revelations 2", "Ilha de Sushestvovanie - 2011", 2011, "games-canon", "campanha", "https://static.wikia.nocookie.net/residentevil/images/d/da/Natalia_korda.png/revision/latest?cb=20150522214116", "https://residentevil.fandom.com/wiki/Natalia_Korda", "Natalia e pequena demais para o laboratorio que a cerca, e isso torna tudo mais cruel.", "revelations-2"),
  outfit("parker-revelations", "parker-luciani", "BSAA / FBC", "Resident Evil: Revelations", "Queen Zenobia - 2005", 2005, "games-canon", "campanha", "https://static.wikia.nocookie.net/residentevil/images/f/ff/Parker_Luciani_Revelations_render.png/revision/latest?cb=20200214161457", "https://residentevil.fandom.com/wiki/Parker_Luciani", "Parker veste a transicao entre FBC e BSAA, um homem tentando escolher o lado menos podre.", "revelations"),
  outfit("billy-zero", "billy-coen", "Ex-fuzileiro fugitivo", "Resident Evil 0", "Ecliptic Express - 1998", 1998, "games-canon", "campanha", "https://static.wikia.nocookie.net/residentevil/images/9/95/Billy.png/revision/latest?cb=20100802112338", "https://residentevil.fandom.com/wiki/Billy_Coen", "Billy aparece como condenado, mas a roupa militar rasgada conta uma historia mais suja que o processo.", "re0-2002")
];

export function getCharacterOutfits(characterId: string): CharacterOutfit[] {
  const curated = characterOutfits.filter((item) => item.characterId === characterId);

  if (curated.length > 0) {
    return [...curated].sort((a, b) => a.sortYear - b.sortYear);
  }

  const fallback = visualAssets[characterId];
  if (!fallback || fallback.category !== "character") return [];

  return [
    {
      id: `${characterId}-visual-principal`,
      characterId,
      label: "Arquivo visual principal",
      mediaTitle: fallback.title,
      era: "Registro visual disponivel",
      sortYear: 9999,
      continuity: "uncertain",
      kind: "campanha",
      src: fallback.src,
      sourceName: fallback.sourceName,
      sourceUrl: fallback.sourceUrl,
      note: "Registro visual vinculado ao dossie enquanto nao ha uma curadoria de trajes por epoca para este personagem."
    }
  ];
}
