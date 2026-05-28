import { getFullHistory } from "./fullHistories";
import type { Biohazard, Character, HistoryBlock, Location, MediaItem, Organization, TimelineEvent } from "./types";

export type NarrativeItem = MediaItem | Character | Organization | Biohazard | Location;

const continuityNames: Record<string, string> = {
  "games-canon": "canon dos jogos",
  "cgi-canon": "continuidade CGI próxima aos jogos",
  "live-action-anderson": "continuidade live-action de Paul W. S. Anderson",
  "welcome-to-raccoon-city": "reboot Welcome to Raccoon City",
  "netflix-series": "continuidade alternativa da série Netflix",
  novelization: "continuidade de novelização",
  "comic-manga": "material de HQ/mangá",
  alternate: "continuidade alternativa",
  "non-canon": "material não-canônico",
  uncertain: "continuidade incerta"
};

const mediaTypeNames: Record<string, string> = {
  game: "jogo principal",
  remake: "remake",
  "spin-off": "spin-off",
  dlc: "DLC/expansão",
  "live-action-movie": "filme live-action",
  "cgi-movie": "filme CGI/animação",
  "animated-series": "série animada/CGI",
  "live-action-series": "série live-action",
  novel: "novelização/romance",
  book: "livro/guia",
  comic: "HQ",
  manga: "mangá"
};

const categoryNames: Record<string, string> = {
  game: "evento dos jogos",
  film: "evento dos filmes",
  cgi: "evento CGI",
  series: "evento de série",
  book: "evento literário",
  comic: "evento de HQ/mangá",
  lore: "evento de lore",
  recommended: "rota recomendada"
};

function humanList(values: string[] | undefined, fallback: string) {
  if (!values?.length) return fallback;
  if (values.length === 1) return values[0];
  if (values.length === 2) return `${values[0]} e ${values[1]}`;
  return `${values.slice(0, -1).join(", ")} e ${values[values.length - 1]}`;
}

function continuityText(values: string[] | string | undefined) {
  const list = Array.isArray(values) ? values : values ? [values] : [];
  return humanList(list.map((value) => continuityNames[value] ?? value), "continuidade não classificada");
}

function titleOf(item: NarrativeItem | TimelineEvent) {
  return "name" in item ? item.name : item.title;
}

function canonNoteOf(item: NarrativeItem | TimelineEvent) {
  return "canonNote" in item ? item.canonNote : "Canon não informado no registro.";
}

function continuityOf(item: NarrativeItem | TimelineEvent) {
  if ("continuity" in item) return continuityText(item.continuity);
  if ("continuities" in item) return continuityText(item.continuities);
  return "continuidade não classificada";
}

function attachedHistory(item: NarrativeItem | TimelineEvent) {
  if ("fullHistory" in item && item.fullHistory?.length) return item.fullHistory;
  return getFullHistory(item.id);
}

function isMediaItem(item: NarrativeItem): item is MediaItem {
  return "type" in item && "releaseYear" in item;
}

function isCharacter(item: NarrativeItem): item is Character {
  return "role" in item && "relationships" in item && "affiliations" in item;
}

function isOrganization(item: NarrativeItem): item is Organization {
  return "goals" in item && "role" in item && "type" in item;
}

function isBiohazard(item: NarrativeItem): item is Biohazard {
  return "effects" in item && "threatLevel" in item;
}

function isLocation(item: NarrativeItem): item is Location {
  return "region" in item && "significance" in item;
}

function dossierPrelude(item: NarrativeItem | TimelineEvent): HistoryBlock {
  const title = titleOf(item);
  const continuity = continuityOf(item);
  return {
    title: "Leitura narrativa do arquivo",
    body: `${title} não deve ser lido como uma ficha técnica. Este dossiê abre a porta devagar, com a luz baixa, porque Resident Evil quase nunca começa no monstro: começa antes, na decisão humana que parecia pequena, no memorando assinado tarde demais, no laboratório limpo demais para ser inocente. Dentro da ${continuity}, este registro precisa ser entendido como uma cadeia de causa, trauma e consequência, não como um resumo isolado.`
  };
}

function dossierCoda(item: NarrativeItem | TimelineEvent): HistoryBlock {
  return {
    title: "O que permanece no escuro",
    body: `${canonNoteOf(item)} A separação de canon fica preservada porque cada continuidade tem suas próprias feridas. O arquivo não força filmes, jogos, CGI, romances e HQs a fingirem que pertencem ao mesmo corredor; ele mantém as portas marcadas. Assim, a narrativa pode respirar sem contaminar uma versão com a outra, e cada detalhe continua preso ao pesadelo correto.`
  };
}

function withCuratedFrame(item: NarrativeItem | TimelineEvent, curated: HistoryBlock[]) {
  return [dossierPrelude(item), ...curated, dossierCoda(item)];
}

function mediaNarrative(item: MediaItem): HistoryBlock[] {
  const title = item.title;
  const type = mediaTypeNames[item.type] ?? item.type;
  const continuity = continuityText(item.continuity);
  const release = String(item.releaseYear);
  const loreYear = item.inUniverseYear ? ` O calendário interno aponta para ${item.inUniverseYear}, o que prende o acontecimento a um lugar específico dentro da infecção histórica da franquia.` : "";
  const protagonists = humanList(item.protagonists, "personagens que entram no escuro sem garantia de voltar");
  const antagonists = humanList(item.antagonists, "forças hostis que o arquivo ainda mantém sob cautela");
  const organizations = humanList(item.organizations, "instituições que preferem portas fechadas e relatórios queimados");
  const biohazards = humanList(item.biohazards, "ameaças biológicas catalogadas em anexo");
  const locations = humanList(item.locations, "locais marcados por contaminação, silêncio e perda");
  const differences = item.differencesFromGames?.length ? ` Quando comparado aos jogos, o registro exige atenção para estas mudanças: ${humanList(item.differencesFromGames, "pontos relevantes")}.` : "";
  const relation = item.relationToGames ? ` Sua relação com os jogos é registrada assim: ${item.relationToGames}.` : "";
  const authorship = item.director ? ` A direção atribuída a ${item.director} também pesa no modo como o horror é encenado.` : item.author ? ` A autoria atribuída a ${item.author} marca esta peça como leitura derivada ou editorial da franquia.` : "";
  const baseMedia = item.baseMedia ? ` O material parte de ${item.baseMedia}, mas precisa ser lido com a cautela própria de adaptações e expansões.` : "";
  const importance = item.importance ? ` A importância do arquivo é clara: ${item.importance}.` : " A importância do arquivo está no modo como ele amplia o mapa da ameaça, mesmo quando não ocupa o centro absoluto da timeline.";

  return [
    dossierPrelude(item),
    {
      title: "A porta que se abre",
      body: `${title} entra no arquivo como ${type}, lançado em ${release}, dentro da ${continuity}.${loreYear}${authorship} Não é apenas mais um item em uma lista: é uma porta. Quando ela se abre, o universo de Resident Evil muda de cheiro, de temperatura, de escala. O que parecia um caso isolado deixa marcas em outras salas, outros corpos e outras versões da mesma catástrofe.`
    },
    {
      title: "Quem atravessa o corredor",
      body: `No centro dessa história estão ${protagonists}. Ao redor deles, o arquivo registra ${antagonists}, ${organizations} e a presença de ${biohazards}. Resident Evil raramente usa cenário como decoração: ${locations} funcionam como cicatrizes abertas, lugares onde a ciência deixou de pedir permissão e passou a respirar no escuro.`
    },
    {
      title: "A queda, o sangue e a evidência",
      body: `${item.summary} ${baseMedia}${relation} O importante é acompanhar a história como um rastro: primeiro a promessa de controle, depois a falha, depois a tentativa de esconder a falha, e por fim alguém obrigado a sobreviver dentro dela. Em Resident Evil, quase toda ameaça nasce com linguagem de progresso e termina com unhas batendo do outro lado da porta.`
    },
    {
      title: "Depois dos créditos",
      body: `${importance}${differences} Mesmo quando a narrativa termina, ela não se fecha por completo. Sobra uma amostra perdida, uma corporação menor herdando o trabalho sujo, um sobrevivente que nunca mais dorme igual, uma cidade que vira advertência. É assim que este registro permanece vivo dentro do arquivo: menos como lembrança, mais como contaminação lenta.`
    },
    dossierCoda(item)
  ];
}

function characterNarrative(item: Character): HistoryBlock[] {
  const continuity = continuityText(item.continuities);
  const affiliations = humanList(item.affiliations, "nenhuma afiliação estável");
  const media = humanList(item.relatedMedia, "registros dispersos");
  const relationships = humanList(item.relationships, "vínculos que o arquivo ainda não cruzou por completo");

  return [
    dossierPrelude(item),
    {
      title: "Quando o nome aparece",
      body: `${item.name} não surge como uma linha fria de cadastro. Surge como ${item.role.toLowerCase()}, visto pela primeira vez em ${item.firstAppearance}, dentro da ${continuity}. O nome carrega o peso de corredores que alguém precisou atravessar, portas que não deveriam ter sido abertas e decisões tomadas quando a munição, a luz e a confiança já estavam acabando.`
    },
    {
      title: "A pessoa antes do mito",
      body: `${item.summary} Antes de virar ícone, alvo, agente, vítima ou ameaça, há uma pessoa sendo empurrada para dentro de uma engrenagem maior. A franquia marca seus personagens assim: não apenas pelo que enfrentam, mas pelo que o enfrentamento arranca deles e pelo que nunca devolve.`
    },
    {
      title: "Afiliações, cicatrizes e obediências",
      body: `As aparições ligadas ao registro passam por ${media}. As afiliações dizem muito sobre o mundo em que essa pessoa teve de sobreviver: ${affiliations}. Em Resident Evil, pertencer a uma organização raramente é simples; às vezes é abrigo, às vezes é coleira, às vezes é apenas o nome impresso no uniforme antes de tudo desabar.`
    },
    {
      title: "As pessoas que assombram",
      body: `Nenhum personagem atravessa essa franquia sozinho. O arquivo cruza ${item.name} com ${relationships}, e cada relação funciona como ferida, dívida, ameaça ou promessa. O status atual consta como ${item.status}. O que interessa aqui não é transformar gente em estatística, mas entender que cada sobrevivente carrega sua própria versão de Arklay, Raccoon, Dulvey, Kijuju ou da vila dentro do corpo.`
    },
    dossierCoda(item)
  ];
}

function organizationNarrative(item: Organization): HistoryBlock[] {
  const continuity = continuityText(item.continuity);
  const media = humanList(item.relatedMedia, "registros ainda fragmentados");

  return [
    dossierPrelude(item),
    {
      title: "A instituição como monstro",
      body: `${item.name} aparece no arquivo como ${item.type.toLowerCase()}, registrada desde ${item.firstAppearance}, dentro da ${continuity}. Em Resident Evil, organizações raramente são apenas siglas. Elas têm orçamento, brasões, protocolos, homens armados, cientistas cansados e salas onde alguém decidiu que uma vida humana valia menos que uma amostra bem preservada.`
    },
    {
      title: "O que ela dizia querer",
      body: `O objetivo declarado ou operacional era: ${item.goals} Em papel timbrado, isso talvez parecesse defesa, pesquisa, segurança, lucro ou fé. Na prática, o arquivo sempre pergunta a mesma coisa: quem pagou o preço quando a organização decidiu seguir adiante?`
    },
    {
      title: "O que ela fez de verdade",
      body: `O papel narrativo registrado é este: ${item.role} A organização atravessa ${media}, deixando para trás documentos rasgados, sobreviventes traumatizados e criaturas que continuam obedecendo mesmo depois que executivos, agentes ou sacerdotes fogem pela saída mais próxima.`
    },
    {
      title: "O rastro no chão",
      body: `A história da ${item.name} é a história de uma porta trancada por dentro. Às vezes a organização é uma corporação farmacêutica; às vezes uma agência que deveria proteger; às vezes um culto que chama violência de salvação. O resultado, quase sempre, é o mesmo: alguém chama aquilo de contenção e deixa pessoas do lado errado do vidro.`
    },
    dossierCoda(item)
  ];
}

function locationNarrative(item: Location): HistoryBlock[] {
  const continuity = continuityText(item.continuity);
  const media = humanList(item.relatedMedia, "registros espalhados");

  return [
    dossierPrelude(item),
    {
      title: "O lugar antes do grito",
      body: `${item.name}, em ${item.region}, entra no arquivo a partir de ${item.firstAppearance}, dentro da ${continuity}. Antes de virar mapa, missão ou cenário, todo lugar em Resident Evil parece ter sido comum por um instante: uma cidade com turnos de trabalho, uma casa com jantar na mesa, um navio com corredores encerados, uma vila com sinos e túmulos. A tragédia começa quando essa normalidade é contaminada.`
    },
    {
      title: "O que aconteceu ali",
      body: `${item.significance} Os registros relacionados passam por ${media}. O espaço não é neutro: paredes guardam arranhões, laboratórios guardam mentiras, ruas guardam passos que não chegaram ao fim. Quando alguém retorna mentalmente a esse lugar, não lembra só de portas, mapas e chaves; lembra de como o ambiente parecia observar de volta.`
    },
    {
      title: "Arquitetura do medo",
      body: `A importância de ${item.name} está na maneira como o lugar transforma história em corpo físico. O corredor obriga a escolher. A sala segura deixa de parecer segura. O elevador desce mais do que deveria. A geografia vira suspeita, e cada retorno ao mesmo ponto confirma que a catástrofe aprendeu a ocupar espaço.`
    },
    {
      title: "Por que ainda importa",
      body: `Esse cuidado impede que versões alternativas ocupem o mesmo chão narrativo. Raccoon City dos jogos não é a mesma Raccoon dos filmes; uma mansão de reboot não apaga a Mansão Spencer. Cada lugar tem sua própria sepultura, e o arquivo precisa respeitar onde cada corpo foi enterrado.`
    },
    dossierCoda(item)
  ];
}

function biohazardNarrative(item: Biohazard): HistoryBlock[] {
  const media = humanList(item.relatedMedia, "registros biológicos associados");
  const effects = humanList(item.effects, "efeitos ainda sob análise");
  const cases = humanList(item.knownCases, "casos preservados em anexos restritos");
  const creator = item.creator ? ` O criador ou responsável associado é ${item.creator}.` : "";
  const organization = item.organization ? ` A organização ligada ao caso é ${item.organization}.` : "";
  const transmission = item.transmission ? ` A transmissão registrada envolve ${item.transmission}.` : "";

  return [
    dossierPrelude(item),
    {
      title: "A amostra respira",
      body: `${item.name} é classificado como ${item.category}, visto pela primeira vez em ${item.firstAppearance}. Sua origem é descrita assim: ${item.origin}.${creator}${organization}${transmission} Em um arquivo comum, isso bastaria. Em Resident Evil, é só o início: toda amostra tem uma história de mãos que tremeram, contenções que falharam e relatórios escritos tarde demais.`
    },
    {
      title: "O corpo como campo de batalha",
      body: `Os efeitos conhecidos incluem ${effects}. O nível de ameaça está marcado como ${item.threatLevel}, mas nenhum número traduz o horror real de ver biologia obedecer a uma ordem errada. O corpo deixa de ser casa e vira laboratório; a pele vira fronteira; a vontade, quando ainda existe, vira o último cômodo aceso.`
    },
    {
      title: "Propagação e testemunhas",
      body: `A ameaça aparece ou se conecta a ${media}. Os casos conhecidos passam por ${cases}. Essa trilha importa porque uma arma biológica nunca fica apenas onde foi criada. Ela escapa por sangue, água, esgoto, culto, ambição militar, contrabando ou luto. E quando escapa, cada hospedeiro se torna prova viva de que alguém calculou mal o preço da própria vaidade.`
    },
    {
      title: "A lição que ninguém aprende",
      body: `O arquivo trata cada vírus, parasita, fungo, mutação ou B.O.W. como mais que uma criatura. Cada um é uma decisão humana que ganhou dentes. O monstro pode rugir, rastejar, apodrecer ou implorar; a origem, quase sempre, usava crachá, jaleco, farda ou sermão.`
    },
    dossierCoda(item)
  ];
}

function timelineNarrative(event: TimelineEvent): HistoryBlock[] {
  const continuity = continuityText(event.continuity);
  const category = categoryNames[event.category] ?? event.category;
  const media = humanList(event.mediaIds, "mídias relacionadas preservadas no arquivo");
  const releaseYear = event.releaseYear ? ` O registro de lançamento associado é ${event.releaseYear}.` : "";

  return [
    dossierPrelude(event),
    {
      title: "O ponto da cronologia",
      body: `${event.title} é marcado em ${event.year} como ${category}, dentro da ${continuity}.${releaseYear} Em uma timeline comum, isso seria uma data. Aqui, é um batimento cardíaco no escuro: um antes e depois em que a franquia muda a posição das peças, mesmo quando ninguém dentro da história entende ainda o tamanho do estrago.`
    },
    {
      title: "O acontecimento",
      body: `${event.summary} O arquivo liga este acontecimento a ${media}. A leitura correta não é tratar o evento como ilha, mas como corredor: ele recebe ecos do que veio antes e empurra novas consequências para o que vem depois.`
    },
    {
      title: "A consequência",
      body: `A importância de um acontecimento em Resident Evil raramente aparece só na cena principal. Ela aparece no sobrevivente recrutado anos depois, na amostra que muda de dono, na organização que troca de nome, na criança que cresce carregando um vírus, no cadáver que vira prova e depois desaparece de uma gaveta oficial.`
    },
    dossierCoda(event)
  ];
}

export function getNarrativeForItem(item: NarrativeItem): HistoryBlock[] {
  const curated = attachedHistory(item);

  if (curated.length > 0) {
    return withCuratedFrame(item, curated);
  }

  if (isMediaItem(item)) return mediaNarrative(item);
  if (isCharacter(item)) return characterNarrative(item);
  if (isOrganization(item)) return organizationNarrative(item);
  if (isBiohazard(item)) return biohazardNarrative(item);
  if (isLocation(item)) return locationNarrative(item);
  return [];
}

export function getNarrativeForTimelineEvent(event: TimelineEvent): HistoryBlock[] {
  const curated = attachedHistory(event);
  return curated.length > 0 ? withCuratedFrame(event, curated) : timelineNarrative(event);
}
