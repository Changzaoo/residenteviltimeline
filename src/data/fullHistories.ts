import type { HistoryBlock } from "./types";

type HistoryMap = Record<string, HistoryBlock[]>;

const gameHistories: HistoryMap = {
  "re0-2002": [
    {
      title: "Antes da mansão",
      body: "Resident Evil 0 começa poucas horas antes do incidente da Mansão Spencer. A equipe Bravo da S.T.A.R.S. é enviada para investigar assassinatos canibais nas Montanhas Arklay, mas o helicóptero cai e Rebecca Chambers acaba separada do grupo. Ela encontra o Ecliptic Express, trem de treinamento da Umbrella tomado por passageiros infectados, sanguessugas e criaturas do T-Virus. A investigação revela que a crise não é um acidente isolado: ela está ligada ao passado da própria Umbrella e ao assassinato de James Marcus, um de seus fundadores."
    },
    {
      title: "Rebecca, Billy e James Marcus",
      body: "Rebecca cruza caminho com Billy Coen, ex-fuzileiro condenado por um massacre que ele nega ter cometido. Os dois começam desconfiando um do outro, mas a sobrevivência os obriga a cooperar. Enquanto atravessam o trem, uma instalação de treinamento e laboratórios abandonados, fica claro que Marcus foi traído por Spencer e eliminado por Wesker e Birkin. Suas pesquisas com sanguessugas, no entanto, sobreviveram, e uma entidade formada por elas preserva a memória e a vingança do cientista."
    },
    {
      title: "Encerramento e ligação com RE1",
      body: "No fim, Rebecca e Billy destroem a ameaça principal e se separam. Rebecca permite que Billy desapareça, registrando-o simbolicamente como morto. Ela segue para a Mansão Spencer, o que conecta diretamente o jogo a Resident Evil 1. A importância de RE0 está em mostrar a podridão interna da Umbrella antes de Arklay explodir: Marcus, Spencer, Birkin e Wesker já haviam transformado ciência em arma muito antes dos protagonistas entenderem o tamanho do desastre."
    }
  ],
  "re1-1996": [
    {
      title: "A investigação de Arklay",
      body: "O primeiro Resident Evil acompanha a S.T.A.R.S. investigando assassinatos violentos perto de Raccoon City. A equipe Bravo desaparece, a equipe Alpha é enviada, e os sobreviventes acabam encurralados na Mansão Spencer. O local parece uma mansão isolada, mas funciona como fachada para um complexo de pesquisa da Umbrella. Zumbis, Cerberus, Hunters e outras B.O.W.s revelam que a corporação testava o T-Virus em segredo."
    },
    {
      title: "Traição interna",
      body: "Chris, Jill, Barry e Rebecca descobrem documentos que conectam a mansão à Umbrella, aos experimentos de Arklay e ao Projeto Tyrant. Albert Wesker, capitão da equipe, não está ali apenas para investigar: ele manipula os sobreviventes como dados de campo e planeja roubar informações biológicas. Dependendo da rota, Barry é chantageado, Rebecca auxilia Chris, e Jill enfrenta o peso de descobrir que a operação da S.T.A.R.S. foi sabotada de dentro."
    },
    {
      title: "Tyrant e legado",
      body: "O clímax expõe o Tyrant T-002, tentativa da Umbrella de criar uma arma biológica obediente e poderosa. A mansão é destruída, mas a Umbrella não cai imediatamente. Os sobreviventes deixam Arklay com provas e trauma, iniciando uma guerra pessoal contra a corporação. No remake, Lisa Trevor, Crimson Heads e novas áreas tornam o horror mais trágico, reforçando que a Umbrella destruiu vidas humanas muito antes do surto público de Raccoon City."
    }
  ],
  "re1-remake-2002": [
    {
      title: "Releitura expandida",
      body: "O Remake de Resident Evil mantém a estrutura do incidente da Mansão Spencer, mas amplia o peso humano do laboratório. A mansão deixa de ser apenas um cenário de sobrevivência e passa a parecer um arquivo de crimes corporativos. Lisa Trevor, sequestrada ainda criança com sua família, mostra como a Umbrella usava pessoas por décadas como material experimental."
    },
    {
      title: "Crimson Heads e Lisa Trevor",
      body: "A introdução do V-ACT transforma zumbis mortos em Crimson Heads caso os corpos não sejam destruídos, adicionando uma camada de contenção falha. Lisa Trevor, quase imortal e psicologicamente destruída, conecta Spencer, o arquiteto George Trevor e a pesquisa de parasitas/vírus. A mansão se torna um mausoléu de experimentos, não apenas uma instalação secreta."
    },
    {
      title: "Canon e leitura moderna",
      body: "Para a timeline moderna, o Remake funciona como versão preferencial do primeiro incidente. A traição de Wesker, a destruição do Tyrant e a fuga dos sobreviventes permanecem o núcleo da história, mas as expansões do remake dão mais contexto ao método da Umbrella: sequestrar, silenciar, testar, descartar e apagar evidências."
    }
  ],
  "re2-1998": [
    {
      title: "Chegada ao desastre",
      body: "Resident Evil 2 começa quando Leon S. Kennedy chega para seu primeiro dia no R.P.D. e Claire Redfield entra em Raccoon City procurando Chris. A cidade já está perdida. O T-Virus escapou para a população após a operação da U.S.S. contra William Birkin, e a polícia foi esmagada por zumbis, Lickers e pânico civil. O jogo acompanha dois civis armados de coragem entrando em um desastre que governos e corporações tentam esconder."
    },
    {
      title: "O G-Virus e a família Birkin",
      body: "William Birkin, criador do G-Virus, é baleado por agentes da Umbrella e injeta sua própria criação para sobreviver. O resultado é uma mutação progressiva e obsessiva, que passa a perseguir Sherry Birkin por instinto de reprodução viral. Annette tenta impedir que o G-Virus caia em mãos erradas, mas também participa da lógica científica que destruiu a família. Claire protege Sherry, enquanto Leon se envolve com Ada Wong, que busca uma amostra para seus próprios clientes."
    },
    {
      title: "Fuga, trauma e consequências",
      body: "Leon, Claire e Sherry escapam de Raccoon City pelo laboratório NEST e pelo trem subterrâneo. A cidade continua condenada, mas a sobrevivência deles cria linhas futuras enormes: Leon é absorvido pelo governo, Claire segue investigando a Umbrella, e Sherry cresce sob custódia estatal por causa de sua exposição ao G-Virus. RE2 é o centro emocional do desastre de Raccoon: mostra que o colapso corporativo virou tragédia urbana."
    }
  ],
  "re2-remake-2019": [
    {
      title: "Mesmo desastre, nova encenação",
      body: "O Remake de Resident Evil 2 reconta a crise de Leon, Claire, Ada e Sherry com tom mais realista. A delegacia se torna um ambiente de horror policial, Mr. X passa a perseguir de forma mais constante, e o roteiro reduz a estrutura original de cenários A/B para campanhas mais cinematográficas."
    },
    {
      title: "Mudanças de foco",
      body: "A relação de Claire e Sherry ganha peso emocional maior, o orfanato reforça a crueldade de Brian Irons, e Ada é apresentada como uma operadora mais direta. O remake não substitui cada detalhe do original linha por linha; ele preserva o eixo: T-Virus na cidade, G-Virus em Birkin, fuga por NEST e sobreviventes carregando as consequências."
    },
    {
      title: "Tratamento na timeline",
      body: "Quando original e remake divergem em ordem de cenas, encontros ou rotas, a melhor leitura é marcar como continuidade ajustada por remake. A história canônica essencial permanece: a Umbrella causou o desastre, Birkin virou a ameaça G, Sherry foi salva, Leon entrou no mundo governamental e Claire continuou sua busca por Chris."
    }
  ],
  "re3-1999": [
    {
      title: "A cidade em queda",
      body: "Resident Evil 3 ocorre antes, durante e depois de partes de RE2, mostrando Jill Valentine tentando fugir de Raccoon City. A cidade já virou uma zona de morte: ruas bloqueadas, civis abandonados, mercenários da U.B.C.S. sem informação real e a Umbrella monitorando tudo como experimento de campo. Jill não está apenas fugindo de zumbis; ela está fugindo do esforço deliberado da corporação para eliminar testemunhas."
    },
    {
      title: "Nemesis",
      body: "Nemesis é enviado para caçar membros da S.T.A.R.S. porque eles conhecem a verdade de Arklay. Diferente de um Tyrant comum, ele usa armas, reconhece alvos e se adapta. Carlos Oliveira, um mercenário da U.B.C.S., descobre aos poucos que sua missão de resgate é fachada. Nicholai observa o caos como coletor de dados, representando a frieza corporativa no meio do fim da cidade."
    },
    {
      title: "Destruição de Raccoon City",
      body: "Jill sobrevive à infecção, confronta Nemesis em formas cada vez mais monstruosas e escapa antes do ataque que esteriliza Raccoon City. O fim da cidade acelera processos legais contra a Umbrella, mas também inaugura uma nova era: amostras, dados e ex-funcionários vazam para o mercado negro. RE3 fecha o desastre urbano e mostra que apagar uma cidade não apaga o bioterrorismo."
    }
  ],
  "re3-remake-2020": [
    {
      title: "Raccoon como filme de desastre",
      body: "O Remake de RE3 reestrutura a fuga de Jill com ritmo mais direto e cinematográfico. A cidade aparece como um organismo colapsando em tempo real, e Carlos recebe mais espaço jogável, principalmente no hospital. A perseguição de Nemesis fica mais roteirizada, mas mantém o papel central: eliminar Jill e coletar dados de combate."
    },
    {
      title: "Cortes e expansão",
      body: "Áreas como torre do relógio e parque são reduzidas ou removidas, enquanto o hospital e a dinâmica Jill/Carlos são expandidos. Nicholai permanece como oportunista que lucra com dados e traições. O remake enfatiza que a Umbrella sabe mais do que admite e que a U.B.C.S. está presa entre missão, manipulação e sobrevivência."
    },
    {
      title: "Canon ajustado",
      body: "Na timeline, o remake deve ser lido como uma versão moderna do mesmo evento, não como uma linha separada dos jogos. Quando detalhes entram em conflito com o original, o site marca como divergência de versão. O núcleo permanece intacto: Jill sobrevive, Nemesis falha e Raccoon City é destruída."
    }
  ],
  "code-veronica": [
    {
      title: "Depois de Raccoon",
      body: "Code: Veronica começa quando Claire continua procurando Chris e invade instalações da Umbrella em Paris. Capturada, ela é enviada para Rockfort Island, uma prisão e base controlada por Alfred Ashford. O ataque de Wesker à ilha libera o T-Virus, transformando o local em novo inferno biológico e forçando Claire a fugir com Steve Burnside."
    },
    {
      title: "A tragédia Ashford",
      body: "A história revela Alfred e Alexia Ashford, herdeiros de uma das famílias fundadoras da Umbrella. Alexia, prodígio científica, criou o T-Veronica e entrou em hibernação para controlar melhor o vírus. Alfred, isolado e instável, construiu uma obsessão pela irmã. A linhagem Ashford mostra outro lado da Umbrella: aristocrático, eugenista e tão monstruoso quanto Spencer."
    },
    {
      title: "Wesker retorna",
      body: "Chris chega para salvar Claire e enfrenta Wesker, agora com poderes sobre-humanos após os eventos de RE1. Alexia desperta, Steve é tragicamente infectado e a base antártica vira palco final. Code: Veronica é essencial porque conecta a queda de Raccoon ao arco maior de Wesker, aprofunda os fundadores da Umbrella e mostra que a ameaça viral sobreviveu ao apagamento da cidade."
    }
  ],
  "re4-2005": [
    {
      title: "Leon depois de Raccoon",
      body: "Resident Evil 4 salta para 2004. Leon, agora agente do governo dos EUA, é enviado a uma região rural da Espanha para resgatar Ashley Graham, filha do presidente. O que começa como missão de extração vira descoberta de um culto, Los Illuminados, que usa Las Plagas para controlar pessoas mantendo inteligência, organização e obediência."
    },
    {
      title: "Los Illuminados e Las Plagas",
      body: "Saddler quer usar Ashley como vetor político: infectá-la, devolvê-la aos EUA e manipular poder estatal por dentro. Salazar entrega seu castelo e legado familiar ao culto, Méndez controla a vila, e Krauser conecta a missão ao passado militar de Leon e aos interesses de Wesker. Ada opera em paralelo, perseguindo amostras e objetivos próprios."
    },
    {
      title: "Virada da franquia",
      body: "Leon e Ashley removem seus parasitas e escapam, enquanto Ada impede que Leon fique com a amostra principal. RE4 desloca a série da conspiração da Umbrella para o bioterrorismo global: parasitas, cultos, mercado negro e agentes independentes substituem a megacorporação única como ameaça central. O remake de 2023 torna essa história mais sombria e mais conectada ao trauma de Raccoon."
    }
  ],
  "re4-remake-2023": [
    {
      title: "Reinterpretação de trauma",
      body: "O Remake de RE4 mantém a missão de resgate de Ashley, mas coloca mais peso no trauma de Leon. Ele não é apenas o herói estiloso do original; é alguém moldado por Raccoon City, treinado pelo governo e ainda preso ao custo de sobreviver. Ashley também ganha mais agência, reagindo de forma mais humana ao horror de estar infectada."
    },
    {
      title: "Luis, Ada e Wesker",
      body: "Luis Serra ganha uma ligação mais clara com a pesquisa de Los Illuminados e com o peso de ter colaborado com ciência corrupta. Ada permanece ambígua, mas sua campanha Separate Ways deixa mais evidente o conflito entre cumprir missão para Wesker e impedir uma catástrofe maior. Wesker surge como ameaça futura mais explícita, interessado em converter amostras em projeto global."
    },
    {
      title: "Como ler na cronologia",
      body: "A versão de 2023 é a leitura moderna preferencial do evento, mas não apaga a importância histórica do original de 2005. Na timeline, ambos contam a mesma espinha dorsal: Ashley sequestrada, Plagas como ferramenta de controle, Saddler derrotado, Ada extraindo amostra e Leon saindo com mais uma ferida psíquica."
    }
  ],
  "re5-2009": [
    {
      title: "A era BSAA",
      body: "Resident Evil 5 mostra o mundo pós-Umbrella já dominado por tráfico de B.O.W.s. Chris Redfield, agora na BSAA, viaja a Kijuju com Sheva Alomar para investigar Ricardo Irving e uma rede de armas biológicas. A operação revela Plagas modificadas, envolvimento da Tricell e experimentos herdados diretamente do sonho de Spencer."
    },
    {
      title: "Jill, Spencer e Uroboros",
      body: "Chris carrega o trauma de ter perdido Jill em uma missão anterior contra Spencer. Lost in Nightmares revela que Wesker matou Spencer e capturou Jill, usando-a depois como arma controlada por P30. O plano de Wesker com Uroboros é selecionar geneticamente a humanidade, matando os “indignos” e criando um mundo moldado por sua visão de evolução forçada."
    },
    {
      title: "Queda de Wesker",
      body: "Chris e Sheva libertam Jill, derrubam Excella, destroem o plano Uroboros e enfrentam Wesker dentro de um vulcão. A morte de Wesker encerra um arco iniciado em RE1, mas não encerra seu legado: Alex Wesker, Jake Muller, pesquisas remanescentes e corporações como Tricell mostram que o bioterrorismo já se espalhou muito além da Umbrella original."
    }
  ],
  "re6-2012": [
    {
      title: "Crise em múltiplas frentes",
      body: "Resident Evil 6 cruza campanhas de Leon, Chris, Jake e Ada durante uma crise global do C-Virus. Tall Oaks revive o horror urbano quando o presidente é infectado. Edonia mostra guerra civil, mercenários e uso militar de J'avo. Lanshiang expande a ameaça para escala internacional, com governos, organizações secretas e bioterroristas disputando narrativas e armas."
    },
    {
      title: "Simmons, Carla e Neo-Umbrella",
      body: "Derek Simmons tenta controlar informação e poder por meio de conspirações governamentais. Carla Radames, transformada psicologicamente e fisicamente para se tornar uma cópia de Ada, cria Neo-Umbrella como vingança e instrumento de caos. Jake Muller, filho de Wesker, carrega sangue valioso para uma cura, enquanto Sherry Birkin retorna como agente marcada pelo legado G."
    },
    {
      title: "Impacto na série",
      body: "RE6 mostra o bioterrorismo como normalidade geopolítica. Não há uma mansão ou cidade isolada; há ataques coordenados, aviões contaminados, armas vendidas e campanhas de desinformação. O jogo também deixa cicatrizes emocionais: Chris perde Piers, Leon confronta a corrupção institucional e Ada destrói a cópia que rouba sua identidade."
    }
  ],
  "re7-2017": [
    {
      title: "Horror doméstico e Mold",
      body: "Resident Evil 7 começa com Ethan Winters recebendo uma mensagem de Mia, desaparecida havia anos. Ele vai até Dulvey, Louisiana, e encontra a casa dos Baker tomada por violência, rituais familiares distorcidos e uma infecção fúngica que afeta corpo e mente. O jogo reduz a escala externa para reconstruir terror íntimo: corredores, jantar, porões, perseguição e perda de identidade."
    },
    {
      title: "Eveline e The Connections",
      body: "A causa do desastre é Eveline, bioarma E-Series criada pela The Connections a partir do Mold. Ela deseja uma família e usa controle mental para transformar Mia, os Baker e outros hospedeiros em peças de sua fantasia. Jack, Marguerite e Lucas não são apenas monstros: são vítimas convertidas em extensões da vontade de Eveline, cada um preservando ou distorcendo partes de sua personalidade."
    },
    {
      title: "Ethan e a virada da Saga Winters",
      body: "Ethan sobrevive a ferimentos impossíveis porque também foi infectado pelo Mold. A revelação só ganha peso total em Village, mas RE7 planta a base: ele já não é um humano comum após os primeiros eventos da casa. Chris chega com a Blue Umbrella, Lucas é caçado em Not a Hero, Zoe tem seu destino resolvido em End of Zoe, e a série entra em uma nova mitologia fúngica."
    }
  ],
  "re-village-2021": [
    {
      title: "A família Winters na vila",
      body: "Resident Evil Village começa após RE7, com Ethan e Mia tentando reconstruir a vida. Chris invade a casa, Mia aparentemente é morta e Rose é levada. Ethan desperta em uma vila europeia controlada por Mother Miranda e quatro Lordes: Dimitrescu, Beneviento, Moreau e Heisenberg. Cada domínio transforma a busca por Rose em um tipo diferente de horror: aristocrático, psicológico, corporal e industrial."
    },
    {
      title: "Miranda, Spencer e Megamiceto",
      body: "A verdade por trás da vila é o Megamiceto, organismo fúngico capaz de preservar memórias e remodelar corpos. Miranda perdeu Eva em 1919 e passou décadas procurando um receptáculo para trazê-la de volta. Ela inspirou Spencer em sua obsessão por evolução, conectando retroativamente a origem simbólica da Umbrella à vila. O Cadou, os Lordes e Rose fazem parte dessa busca por substituição impossível."
    },
    {
      title: "Sacrifício de Ethan e suspeita sobre BSAA",
      body: "Ethan descobre que morreu em Dulvey e só continuou existindo por causa do Mold. Mesmo assim, resiste até salvar Rose e se sacrifica para destruir o Megamiceto físico. Chris protege Rose e descobre que a BSAA usou soldados biológicos, abrindo uma crise institucional. Village fecha a jornada de Ethan e deixa duas pontas: o futuro de Rose e a corrupção de quem deveria combater B.O.W.s."
    }
  ],
  "re-requiem-2026": [
    {
      title: "Nova fase confirmada",
      body: "Resident Evil Requiem é o nono jogo principal confirmado pela Capcom e lançado em 27 de fevereiro de 2026. A narrativa envolve Grace Ashcroft, Leon S. Kennedy e um retorno a temas de Raccoon City. Como o jogo é recente dentro do projeto, qualquer detalhe que dependa de finais, arquivos específicos ou interpretação precisa continuar ligado a fonte oficial ou secundária confiável."
    },
    {
      title: "Grace, Alyssa e Raccoon",
      body: "Grace Ashcroft conecta Requiem a Alyssa Ashcroft, personagem de Outbreak. Isso dá peso novo ao material civil de Raccoon City: a catástrofe não foi apenas a história de policiais e agentes especiais, mas também de jornalistas, famílias e sobreviventes comuns. A presença de ruínas e locais como Wrenwood Hotel recoloca o trauma de 1998 no centro da franquia."
    },
    {
      title: "Tratamento editorial",
      body: "No arquivo, Requiem deve ser apresentado como canon dos jogos, mas com cautela. O que é confirmado pela Capcom entra como fato. O que depender de leitura de cena, conexão simbólica ou material ainda em consolidação deve ser marcado como interpretação ou informação recente. Isso evita transformar entusiasmo em dado falso."
    }
  ],
  "re-survivor": [
    {
      title: "Sheena Island",
      body: "Resident Evil Survivor leva o jogador para uma ilha controlada pela Umbrella, onde instalações civis e industriais escondem pesquisas com Tyrants e T-Virus. A história acompanha Ark Thompson em uma investigação marcada por amnésia, manipulação e identidade falsa. Embora menor que os jogos numerados, o título mostra como a Umbrella replicava a lógica de Raccoon em outros territórios."
    },
    {
      title: "Canon complementar",
      body: "O jogo funciona como material complementar: não redefine a linha principal, mas amplia a noção de que a Umbrella tinha laboratórios, executivos e comunidades inteiras sob controle. A ameaça não era local; era uma rede corporativa."
    }
  ],
  "survivor-2-code-veronica": [
    {
      title: "Recontagem arcade",
      body: "Survivor 2 Code: Veronica usa elementos, criaturas e ambientes de Code: Veronica em formato arcade. Ele não deve ser lido como continuação literal do jogo principal. O valor dele no arquivo é histórico: mostra como a Capcom reaproveitou a iconografia de Claire, Steve, Rockfort e Nemesis em uma experiência paralela."
    },
    {
      title: "Status de canon",
      body: "Por funcionar como reinterpretação lúdica e não como evento narrativo central, fica marcado como não-canônico/recontagem."
    }
  ],
  "resident-evil-gaiden": [
    {
      title: "Navio e linha descartada",
      body: "Resident Evil Gaiden coloca Leon e Barry em uma missão envolvendo um navio infectado e uma ameaça biológica própria. A história foi criada para um formato portátil e usa ideias que não foram mantidas como continuidade principal. Alguns conceitos dialogam com horror naval e identidade ambígua, mas não avançam o canon dos jogos."
    },
    {
      title: "Não-canônico",
      body: "O arquivo marca Gaiden como não-canônico para impedir que seu final e suas implicações entrem em conflito com aparições posteriores de Leon e Barry."
    }
  ],
  "outbreak": [
    {
      title: "Raccoon pelos civis",
      body: "Resident Evil Outbreak muda a lente do desastre. Em vez de agentes treinados, acompanha cidadãos tentando sobreviver em bares, hospitais, ruas, hotéis e instalações enquanto a cidade desmorona. Kevin, Alyssa, Cindy, George, Jim, Yoko, David e Mark representam pessoas comuns presas em um evento que a Umbrella e autoridades não conseguem ou não querem conter."
    },
    {
      title: "Importância de Alyssa",
      body: "Alyssa Ashcroft, jornalista, reforça que Raccoon City também foi uma guerra por informação. Com Requiem, a família Ashcroft ganha nova relevância, tornando Outbreak ainda mais importante como memória civil do desastre."
    }
  ],
  "outbreak-file-2": [
    {
      title: "Mais fragmentos da queda",
      body: "Outbreak File #2 expande a visão civil do surto com novos cenários e ameaças. Ele aprofunda a sensação de que Raccoon City era uma cidade inteira morrendo em capítulos simultâneos: zoológico, metrô, delegacia, áreas urbanas e laboratórios funcionam como recortes de uma catástrofe única."
    },
    {
      title: "Canon complementar",
      body: "Assim como o primeiro Outbreak, ele é tratado como canon complementar: importante para escala social, mas sem substituir os eventos centrais de RE2 e RE3."
    }
  ],
  "dead-aim": [
    {
      title: "Bioterrorismo marítimo",
      body: "Dead Aim acompanha Bruce McGivern e Fong Ling em um navio tomado por armas biológicas. O antagonista Morpheus D. Duvall usa amostras virais para transformar sequestro e chantagem em espetáculo bioterrorista. A ambientação naval reforça que, após Raccoon, vírus e B.O.W.s circulam por rotas internacionais."
    },
    {
      title: "Função na timeline",
      body: "É canon complementar: mostra o mercado e a mobilidade da pesquisa viral, mas não altera os arcos principais de Chris, Jill, Leon ou Claire."
    }
  ],
  "umbrella-chronicles": [
    {
      title: "Arquivo da queda da Umbrella",
      body: "The Umbrella Chronicles reconta eventos de RE0, RE1 e RE3 em formato rail shooter, mas também acrescenta episódios que ajudam a visualizar a queda operacional da Umbrella. Wesker aparece como observador e manipulador, enquanto Sergei Vladimir representa uma tentativa final de preservar poder corporativo."
    },
    {
      title: "Recontagem e complemento",
      body: "O jogo mistura reencenação com material complementar. No arquivo, seus trechos inéditos são úteis, mas as versões principais dos eventos continuam sendo os jogos originais/remakes."
    }
  ],
  "darkside-chronicles": [
    {
      title: "Memórias do lado sombrio",
      body: "The Darkside Chronicles reconta RE2 e Code: Veronica pela memória de Leon, com foco no trauma de Raccoon e Rockfort. O episódio Operation Javier liga Leon e Krauser antes de RE4, mostrando uma missão na América do Sul que ajuda a explicar a queda psicológica de Krauser."
    },
    {
      title: "Ponte para RE4",
      body: "A importância do jogo é contextual: ele fortalece a ligação Leon-Krauser e mostra que bioterrorismo já era problema internacional antes de Los Illuminados entrar em cena."
    }
  ],
  "operation-raccoon-city": [
    {
      title: "Perspectiva alternativa",
      body: "Operation Raccoon City imagina agentes da U.S.S. atuando no desastre com liberdade para alterar encontros e destinos conhecidos. O jogo usa Raccoon City como parque de guerra biológica, colocando soldados da Umbrella, policiais e criaturas em conflito direto."
    },
    {
      title: "Continuidade alternativa",
      body: "Como permite cenários que contradizem a linha principal, deve ser tratado como continuidade alternativa. Serve para explorar o ponto de vista da Umbrella, não para reescrever RE2 ou RE3."
    }
  ],
  "revelations": [
    {
      title: "Entre Umbrella e BSAA",
      body: "Revelations se passa em 2005 e acompanha Jill, Chris e Parker em uma conspiração marítima envolvendo o Queen Zenobia, Veltro, FBC e T-Abyss. O jogo mostra uma fase em que a resposta ao bioterrorismo ainda está se organizando e também se corrompendo."
    },
    {
      title: "T-Abyss e crise institucional",
      body: "A ameaça biológica é aquática, mas a história real também é política: Morgan Lansdale manipula terrorismo, pânico e instituições. Revelations fortalece a BSAA como resposta necessária, mas já alerta que agências antiterrorismo também podem mentir e usar crises para consolidar poder."
    }
  ],
  "revelations-2": [
    {
      title: "Alex Wesker e medo",
      body: "Revelations 2 coloca Claire e Moira em uma ilha-prisão usada por Alex Wesker para estudar medo, trauma e transferência de consciência. Barry chega depois procurando Moira e encontra Natalia, criança ligada ao plano de Alex."
    },
    {
      title: "Legado Wesker",
      body: "A história expande o Projeto Wesker além de Albert. Alex quer escapar da morte não por dominação física imediata, mas por continuidade mental. O jogo mistura horror psicológico, herança familiar dos Burton e a ideia de que a obsessão de Spencer produziu múltiplos monstros intelectuais."
    }
  ],
  "mercenaries-3d": [
    {
      title: "Modo extra consolidado",
      body: "The Mercenaries 3D compila o formato de combate cronometrado da franquia. Personagens e criaturas aparecem como seleção lúdica, não como evento narrativo. Seu valor é mecânico e histórico, mostrando a popularidade do modo Mercenaries fora dos jogos principais."
    },
    {
      title: "Não-canônico",
      body: "Não há acontecimento de timeline a extrair; no arquivo ele fica como extra não-canônico."
    }
  ],
  "resistance": [
    {
      title: "Experimentos assimétricos",
      body: "Resident Evil Resistance coloca sobreviventes em instalações de teste comandadas por masterminds. A proposta conversa com a lógica da Umbrella: observar pessoas sob pressão, coletar dados e usar B.O.W.s como instrumentos de laboratório."
    },
    {
      title: "Canon incerto",
      body: "Como sua integração narrativa é limitada e ligada ao pacote de RE3 Remake, o arquivo marca como canon incerto/complementar, evitando transformar sessões multiplayer em eventos oficiais sem confirmação direta."
    }
  ],
  "reverse": [
    {
      title: "Celebração multiplayer",
      body: "Resident Evil Re:Verse reúne personagens clássicos e criaturas em partidas competitivas. O foco é comemoração e combate, não continuidade. Heróis de eras diferentes aparecem juntos sem preocupação narrativa."
    },
    {
      title: "Extra não-canônico",
      body: "Por isso, fica classificado como não-canônico e deve ser visto como material de aniversário/experiência online."
    }
  ],
  "re5-lost-in-nightmares": [
    {
      title: "A noite em que Jill caiu",
      body: "Lost in Nightmares mostra Chris e Jill investigando Spencer antes de RE5. A missão revela Spencer velho, isolado e ainda obcecado por evolução humana. Wesker chega, mata seu antigo patrono e enfrenta Chris e Jill. Para salvar Chris, Jill se lança com Wesker pela janela, evento que leva à sua captura."
    },
    {
      title: "Peça essencial",
      body: "O DLC explica por que Chris acredita ter perdido Jill, como Wesker se livra de Spencer e como Jill se torna peça controlada em RE5. É uma das expansões mais importantes da timeline."
    }
  ],
  "re5-desperate-escape": [
    {
      title: "Fuga paralela",
      body: "Desperate Escape acompanha Jill, recém-liberta do controle de Wesker, e Josh Stone tentando escapar das instalações durante o caos final de RE5. Enquanto Chris e Sheva avançam contra Wesker, Jill precisa sobreviver fisicamente e recuperar agência após anos sendo usada como arma."
    },
    {
      title: "Consequência emocional",
      body: "O DLC não muda o final de RE5, mas dá espaço a Jill depois de sua libertação e mostra que o resgate dela não termina no momento em que o dispositivo é removido."
    }
  ],
  "re7-not-a-hero": [
    {
      title: "Chris contra Lucas",
      body: "Not a Hero continua RE7 com Chris Redfield perseguindo Lucas Baker nas minas de Dulvey. Lucas, diferente de Jack e Marguerite, preserva lucidez suficiente para agir como colaborador da The Connections. O DLC mostra a Blue Umbrella em campo e coloca Chris em uma posição desconfortável: usar recursos de uma marca que carrega o nome Umbrella."
    },
    {
      title: "Fechamento de Lucas",
      body: "A caçada termina com Lucas eliminado e dados recuperados, mas também reforça que The Connections segue como ameaça além de Eveline. O DLC faz a ponte entre horror doméstico e rede bioterrorista maior."
    }
  ],
  "re7-end-of-zoe": [
    {
      title: "O destino de Zoe",
      body: "End of Zoe segue Joe Baker tentando salvar Zoe, que ficou cristalizada/infectada após os eventos principais. O DLC muda o foco para sobrevivência física no pântano e para o que restou da família Baker."
    },
    {
      title: "Último eco dos Baker",
      body: "Joe confronta uma forma remanescente de Jack e consegue curar Zoe. O arco conclui a tragédia da família Baker lembrando que eles foram vítimas de Eveline antes de virarem monstros."
    }
  ],
  "re7-banned-footage": [
    {
      title: "Fitas da casa",
      body: "Banned Footage reúne episódios que mostram vítimas e jogos cruéis dentro da casa dos Baker. Clancy Jarvis aparece como testemunha do sadismo de Lucas, enquanto outros segmentos ampliam a sensação de que a casa foi um laboratório improvisado de medo, controle e entretenimento perverso."
    },
    {
      title: "Valor na timeline",
      body: "Nem todo modo extra tem o mesmo peso narrativo, mas os episódios ajudam a entender a rotina de terror imposta por Eveline e pelos Baker infectados."
    }
  ],
  "village-shadows-of-rose": [
    {
      title: "Rose dentro da memória",
      body: "Shadows of Rose ocorre anos após Village e acompanha Rosemary Winters entrando na consciência do Megamiceto para tentar se livrar de seus poderes. O cenário é uma memória fúngica distorcida, onde rostos, lugares e traumas da Saga Winters reaparecem como símbolos."
    },
    {
      title: "Ethan como legado",
      body: "Rose confronta Eveline, Miranda e a solidão de ser tratada como anomalia. A presença de Ethan, preservada como memória, dá fechamento emocional ao sacrifício dele. O DLC não abre uma guerra global; ele encerra a ferida familiar deixada pelo Mold."
    }
  ],
  "re4r-separate-ways": [
    {
      title: "A missão de Ada",
      body: "Separate Ways acompanha Ada Wong durante os eventos de RE4 Remake. Ela investiga Las Plagas, cruza Leon, manipula rotas e cumpre ordens de Wesker, mas também toma decisões que limitam o dano que a amostra poderia causar."
    },
    {
      title: "Wesker no horizonte",
      body: "O DLC deixa mais claro que Wesker pretende usar o material biológico em escala muito maior que o culto. Ada, apesar de ambígua, percebe que entregar tudo sem filtro seria alimentar um desastre futuro."
    }
  ]
};

const timelineHistories: HistoryMap = {
  "tl-megamycete": [
    {
      title: "Origem fúngica",
      body: "Antes da Umbrella existir, o Megamiceto já estava sob a vila europeia, preservando memórias e alterando corpos. Miranda o encontra após perder Eva e interpreta o organismo como chance de desafiar a morte. Esse evento muda toda a franquia retroativamente: a origem simbólica da Umbrella passa a estar ligada não apenas ao Progenitor, mas também à obsessão de Miranda por ressurreição."
    },
    {
      title: "Efeito dominó",
      body: "O Megamiceto gera Mold, Cadou, Lordes, Eveline, Ethan e Rose como ecos de uma mesma linhagem fúngica. Ele não substitui o Progenitor na história viral da Umbrella, mas cria uma segunda raiz de horror biológico: memória, identidade, família e corpos reescritos."
    }
  ],
  "tl-umbrella-foundation": [
    {
      title: "Spencer transforma mito em corporação",
      body: "Spencer absorve ideias de Miranda sobre evolução e transcendência, mas troca religião e luto por laboratório, capital e hierarquia. Com Ashford e Marcus, funda a Umbrella e usa a fachada farmacêutica para pesquisa viral. O Progenitor se torna a matéria-prima de uma ideologia de seleção humana."
    },
    {
      title: "Fundadores em conflito",
      body: "A Umbrella nasce com três visões competitivas: Spencer quer poder e imortalidade, Marcus quer pesquisa e reconhecimento, Ashford quer prestígio familiar. A traição entre eles antecipa o destino da empresa: toda descoberta vira arma, toda aliança vira disputa, e todo laboratório vira ameaça pública em potencial."
    }
  ],
  "tl-re0": gameHistories["re0-2002"],
  "tl-re1": gameHistories["re1-1996"],
  "tl-raccoon": [
    {
      title: "Colapso urbano completo",
      body: "A queda de Raccoon City é o ponto em que o segredo da Umbrella deixa de caber em laboratórios. O T-Virus chega às ruas, a polícia perde comando, hospitais e abrigos viram zonas de infecção, e a U.S.S. tenta recuperar amostras em vez de salvar pessoas. RE2, RE3 e Outbreak mostram camadas diferentes da mesma catástrofe: protagonistas, testemunhas e civis anônimos."
    },
    {
      title: "G-Virus e Nemesis",
      body: "Enquanto Leon e Claire lidam com Birkin e o G-Virus, Jill é caçada por Nemesis, e civis de Outbreak tentam sobreviver a cenários paralelos. A cidade vira um laboratório de campo para Tyrants, Lickers, Hunters e dados de combate. O governo destrói Raccoon City para conter a infecção, mas amostras e conhecimento já vazaram."
    },
    {
      title: "Consequência mundial",
      body: "O desastre derruba a Umbrella publicamente, mas também inaugura o mercado bioterrorista moderno. Sobreviventes como Leon, Claire, Jill, Sherry e Alyssa carregam a memória da cidade para arcos futuros. Raccoon não é apenas um lugar destruído: é a ferida original da era pós-Umbrella."
    }
  ],
  "tl-code-veronica": gameHistories["code-veronica"],
  "tl-re4": gameHistories["re4-2005"],
  "tl-revelations": gameHistories["revelations"],
  "tl-re5": gameHistories["re5-2009"],
  "tl-re6": gameHistories["re6-2012"],
  "tl-re7": gameHistories["re7-2017"],
  "tl-village": gameHistories["re-village-2021"],
  "tl-rose": gameHistories["village-shadows-of-rose"],
  "tl-requiem": gameHistories["re-requiem-2026"],
  "tl-cgi-degeneration": [
    {
      title: "Aeroporto, WilPharma e G",
      body: "Degeneration acompanha Leon e Claire após Raccoon em um ataque bioterrorista no aeroporto de Harvardville. A crise liga trauma público, indústria farmacêutica e vingança pessoal. WilPharma tenta operar como solução médica, mas a sombra da pesquisa viral e do G-Virus retorna."
    },
    {
      title: "CGI próximo aos jogos",
      body: "A história reforça Claire como ativista da TerraSave e Leon como agente governamental. Ela não substitui nenhum jogo, mas preenche o mundo pós-Raccoon com consequências políticas e corporativas."
    }
  ],
  "tl-cgi-infinite": [
    {
      title: "Casa Branca e Penamstan",
      body: "Infinite Darkness coloca Leon e Claire em uma conspiração envolvendo ataques, trauma de guerra e manipulação estatal. O horror não está apenas no vírus, mas no uso político de veteranos, segredo militar e medo público."
    },
    {
      title: "Continuidade CGI",
      body: "A série funciona como ponte entre eventos de jogos, mostrando Leon dentro do aparato federal e Claire investigando crimes humanitários. É tratada como CGI/canon próximo aos jogos."
    }
  ],
  "tl-cgi-damnation": [
    {
      title: "Plagas como arma de guerra",
      body: "Damnation mostra Las Plagas fora do contexto religioso de RE4, usadas como ferramenta militar em guerra civil. Leon investiga um país em colapso onde B.O.W.s viraram parte de estratégia política."
    },
    {
      title: "Impacto",
      body: "O filme deixa claro que parasitas e B.O.W.s podem ser nacionalizados, vendidos ou incorporados a conflitos locais. O bioterrorismo já é geopolítica."
    }
  ],
  "tl-cgi-vendetta": [
    {
      title: "Vingança viral",
      body: "Vendetta reúne Chris, Leon e Rebecca contra Glenn Arias, que transforma luto e vingança em plano bioterrorista. O A-Virus permite ataques direcionados e reforça a sofisticação das ameaças pós-Umbrella."
    },
    {
      title: "Personagens feridos",
      body: "O filme também mostra desgaste psicológico: Chris por perdas de equipe, Leon por exaustão moral e Rebecca por voltar ao centro de uma crise biológica."
    }
  ],
  "tl-cgi-death-island": [
    {
      title: "Alcatraz e elenco clássico",
      body: "Death Island reúne Chris, Jill, Leon, Claire e Rebecca em uma investigação ligada a Alcatraz. O filme funciona como encontro de sobreviventes de várias fases da franquia, com foco em legado, trauma e continuidade de ameaças biológicas."
    },
    {
      title: "Papel na timeline",
      body: "Ele não reinventa a mitologia, mas reafirma que os personagens clássicos continuam ativos e que o mundo pós-Umbrella segue produzindo ressentimento, armas e ataques."
    }
  ],
  "tl-films-alice": [
    {
      title: "A linha de Alice",
      body: "A saga live-action de Paul W. S. Anderson começa no Hive e se expande para Raccoon City, deserto pós-apocalíptico, clones, instalações da Umbrella e uma explicação própria para Alice. Ela usa nomes como Jill, Carlos, Claire, Chris, Ada, Leon, Wesker e Nemesis, mas reorganiza tudo ao redor de uma protagonista original."
    },
    {
      title: "Separação obrigatória",
      body: "Essa continuidade não é a timeline dos jogos. O T-Virus dos filmes, a Red Queen, a origem de Nemesis e o papel da Umbrella seguem regras próprias. O arquivo mantém tudo separado para não contaminar o canon dos games."
    }
  ],
  "tl-wtrc": [
    {
      title: "Reboot condensado",
      body: "Welcome to Raccoon City adapta elementos de RE1 e RE2 em um único filme, combinando mansão, delegacia, irmãos Redfield, Leon, Jill, Wesker e Birkin em uma linha própria. A proposta é mais próxima visualmente dos jogos que a saga Alice, mas ainda é um reboot separado."
    },
    {
      title: "Como arquivar",
      body: "Personagens e eventos não devem ser usados para explicar os jogos. O valor está em comparar escolhas de adaptação: o que foi condensado, alterado, removido ou reinterpretado."
    }
  ],
  "tl-netflix": [
    {
      title: "Linha da Netflix",
      body: "A série live-action de 2022 cria uma continuidade própria com Jade, Billie, uma versão alternativa de Wesker e uma Umbrella reorganizada. Ela usa elementos reconhecíveis da franquia, mas não se encaixa no canon dos jogos nem nos filmes com Alice."
    },
    {
      title: "Classificação",
      body: "No arquivo, fica como continuidade alternativa da Netflix. Isso permite listar personagens, datas e conceitos sem fundi-los com a história principal."
    }
  ],
  "tl-novels-perry": [
    {
      title: "Romances de S. D. Perry",
      body: "As novelizações de S. D. Perry adaptam RE1, RE2, RE3, Code: Veronica e RE0, além de romances originais como Caliban Cove e Underworld. Elas expandem pensamentos, bastidores e cenas, mas pertencem a uma continuidade literária derivada."
    },
    {
      title: "Regra editorial",
      body: "O arquivo não usa as novelizações para substituir os jogos. Quando elas adicionam detalhes interessantes, eles entram como Novelização ou Continuidade derivada, nunca como canon principal sem confirmação oficial."
    }
  ],
  "tl-comics-manga": [
    {
      title: "Material impresso licenciado",
      body: "HQs e mangás de Resident Evil incluem adaptações, histórias originais e materiais promocionais. Fire & Ice, Official Comic Magazine, Marhawa Desire e Heavenly Island ampliam a franquia por perspectivas diferentes."
    },
    {
      title: "Canon variável",
      body: "Como cada publicação tem relação diferente com a Capcom e com os jogos, o arquivo marca HQ/mangá como material complementar, alternativo ou incerto. O objetivo é preservar a informação sem forçar tudo na timeline dos games."
    }
  ]
};

const biohazardHistories: HistoryMap = {
  progenitor: [
    {
      title: "A raiz viral da Umbrella",
      body: "O Progenitor Virus é a base ideológica e científica da Umbrella. Descoberto a partir de uma linhagem natural rara e transformado em objeto de pesquisa por Spencer, Ashford e Marcus, ele prometia evolução humana, mas na prática virou justificativa para eugenia, armas biológicas e experimentação humana."
    },
    {
      title: "Do milagre à indústria de armas",
      body: "Sozinho, o Progenitor era instável e letal para a maioria dos hospedeiros, mas sua capacidade de alterar células abriu caminho para o T-Virus, G-Virus e pesquisas de Tyrants. Ele é menos lembrado como monstro específico e mais como a semente de quase todo o horror viral da primeira fase da franquia."
    }
  ],
  "t-virus": [
    {
      title: "Função e origem",
      body: "O T-Virus é o agente que transforma pesquisa corporativa em apocalipse urbano. Desenvolvido pela Umbrella a partir de linhagens Progenitor e pesquisas complementares, ele causa necrose, agressividade, mutação e reanimação funcional. Sua utilidade militar vem da capacidade de criar tanto hordas descartáveis quanto B.O.W.s controláveis."
    },
    {
      title: "Arklay e Raccoon",
      body: "Em Arklay, o T-Virus contamina pesquisadores, animais e instalações. Em Raccoon City, atinge escala populacional, criando zumbis, Lickers, Hunters e caos civil. A infecção se espalha por mordidas, fluidos, água, vetores animais e falhas de contenção. O T-Virus não é só uma doença: é a prova de que a Umbrella tratava cidade inteira como dado experimental."
    },
    {
      title: "Legado",
      body: "Mesmo após a queda da Umbrella, o T-Virus continua como referência para armas, vacinas, variantes e mercado negro. Seu legado define a linguagem visual de Resident Evil: zumbis, laboratórios, Tyrants, contenção falha e a fronteira destruída entre medicina e guerra."
    }
  ],
  "g-virus": [
    {
      title: "A obsessão de Birkin",
      body: "O G-Virus é a criação mais pessoal de William Birkin. Diferente do T-Virus, que cria armas replicáveis, o G produz evolução agressiva e individualizada, com regeneração, mutações sucessivas e impulso reprodutivo parasitário. Birkin injeta G em si mesmo para sobreviver à traição da Umbrella, transformando o criador em vetor e monstro."
    },
    {
      title: "Sherry como alvo",
      body: "O G-Birkin persegue Sherry porque busca compatibilidade genética para reprodução por embrião. Isso torna o vírus uma tragédia familiar: a filha vira alvo do pai, Annette tenta conter a própria obra, e Claire precisa salvar uma criança de um projeto científico que seus pais ajudaram a criar."
    },
    {
      title: "Perigo estratégico",
      body: "O G-Virus é apocalíptico porque escapa do modelo de arma obediente. Ele evolui, resiste, reproduz e perde humanidade em camadas. Mesmo quando contido em RE2, sua existência alimenta pesquisas e incidentes posteriores."
    }
  ],
  "t-veronica": [
    {
      title: "Projeto Ashford",
      body: "O T-Veronica nasce da genialidade e arrogância de Alexia Ashford. Ele combina pesquisa viral com características insetoides e exige adaptação lenta por hibernação para que o hospedeiro mantenha controle. Sem esse processo, a mutação tende ao colapso monstruoso."
    },
    {
      title: "Alexia e a colmeia aristocrática",
      body: "Alexia não quer apenas sobreviver; quer reinar. Sua visão do T-Veronica se aproxima de uma colmeia, com ela no centro como rainha. Alfred, Steve e Alexander/Nosferatu mostram os custos físicos e psicológicos dessa linhagem. O vírus é inseparável da decadência Ashford."
    }
  ],
  "nemesis-parasite": [
    {
      title: "Controle sobre Tyrants",
      body: "O NE-α Parasite foi desenvolvido para resolver um problema clássico dos Tyrants: força sem inteligência suficiente. Implantado em um corpo de Tyrant, ele cria Nemesis, arma capaz de reconhecer alvos, cumprir missão e usar equipamentos."
    },
    {
      title: "A caça aos S.T.A.R.S.",
      body: "Em Raccoon City, Nemesis é enviado para exterminar sobreviventes de Arklay. A missão tem valor tático e simbólico: matar testemunhas e testar uma B.O.W. avançada em ambiente real. Sua mutação progressiva mostra que controle corporativo sobre biologia é sempre temporário."
    }
  ],
  "las-plagas": [
    {
      title: "Parasita, religião e controle",
      body: "Las Plagas são parasitas ancestrais redescobertos e usados por Los Illuminados. Diferente de zumbis T-Virus, os Ganados mantêm fala, coordenação e uso de ferramentas, mas perdem autonomia para a hierarquia do culto. O horror vem da obediência consciente: pessoas ainda parecem pessoas, mas suas vontades foram substituídas."
    },
    {
      title: "Uso político e militar",
      body: "Saddler planeja infectar Ashley para alcançar o governo dos EUA. Depois, variantes chegam a Majini, guerra civil e filmes CGI, provando que Plagas são versáteis: culto, exército, milícia e terrorismo podem adaptá-las. O potencial militar é extremo porque combina controle mental com combatentes funcionais."
    }
  ],
  "dominant-plaga": [
    {
      title: "Comando parasitário",
      body: "A Plaga dominante permite que um hospedeiro mantenha autonomia e exerça controle sobre infectados subordinados. Saddler, Salazar e Méndez usam essa hierarquia para transformar religião em rede biológica de comando."
    },
    {
      title: "Risco",
      body: "Seu perigo não está apenas na mutação física, mas na organização social que ela viabiliza. Um único líder dominante pode coordenar comunidades infectadas inteiras."
    }
  ],
  "subordinate-plaga": [
    {
      title: "A massa controlada",
      body: "A Plaga subordinada é a base de Ganados e Majini: hospedeiros obedientes, agressivos e ainda capazes de usar armas, ferramentas e táticas simples. Ela transforma população em força de ocupação."
    },
    {
      title: "Escala",
      body: "Por ser mais aplicável em massa que uma Plaga dominante, é ideal para culto e paramilitarismo. Seu horror é coletivo: aldeias, minas, castelos e zonas inteiras passam a agir como organismo único."
    }
  ],
  "t-abyss": [
    {
      title: "Vírus abissal",
      body: "O T-Abyss combina a agressividade do T-Virus com propriedades de um vírus marinho, gerando mutações aquáticas e deformações adaptadas à pressão. Ele é ideal para ataques envolvendo água, navios e contaminação ambiental marítima."
    },
    {
      title: "Queen Zenobia",
      body: "Em Revelations, o T-Abyss é usado dentro de uma conspiração institucional. A ameaça biológica serve como arma e como justificativa política, mostrando que conter vírus não basta quando agências manipulam o medo."
    }
  ],
  uroboros: [
    {
      title: "Evolução por extermínio",
      body: "Uroboros é a expressão final da visão de Wesker: um agente que seleciona hospedeiros compatíveis e destrói o resto. Em vez de criar exércitos estáveis, ele tenta reescrever a humanidade por triagem genética brutal."
    },
    {
      title: "Falha e monstruosidade",
      body: "Hospedeiros rejeitados viram massas tentaculares instáveis. Isso revela a mentira do projeto: Wesker chama de evolução, mas Uroboros é genocídio biológico travestido de filosofia."
    }
  ],
  "c-virus": [
    {
      title: "Arma global",
      body: "O C-Virus é associado à Neo-Umbrella e Carla Radames, combinando mutação adaptativa, criação de J'avo e crisálidas. Ele foi feito para escala: surtos, guerra, armas específicas e terror internacional."
    },
    {
      title: "Identidade e caos",
      body: "Em RE6, o C-Virus também se liga a roubo de identidade e manipulação política. Carla é transformada em cópia de Ada, e sua vingança vira crise global. O vírus reflete esse tema: corpos mudam de forma como verdades são distorcidas."
    }
  ],
  "a-virus": [
    {
      title: "Vírus de Vendetta",
      body: "O A-Virus aparece em Vendetta como ferramenta de ataque direcionado. Seu uso permite distinguir alvos e controlar quando a infecção explode, tornando-o mais próximo de terrorismo programável que de vazamento acidental."
    },
    {
      title: "Canon CGI",
      body: "Ele fica arquivado como agente da continuidade CGI/canon próximo aos jogos, associado ao plano de Glenn Arias e não como pilar central dos games numerados."
    }
  ],
  mold: [
    {
      title: "Fungo, família e memória",
      body: "O Mold altera corpos e mentes por rede miceliana. Em RE7, ele transforma a casa dos Baker em ambiente de controle emocional, alucinação e regeneração. Eveline usa o Mold para criar a família que deseja, distorcendo afeto em domínio."
    },
    {
      title: "Ethan como caso central",
      body: "Ethan sobrevive porque o Mold o reconstitui. Isso transforma a Saga Winters em história sobre identidade: se o corpo foi refeito, o que ainda é humano? Village responde pela ação, não pela biologia: Ethan continua sendo Ethan porque escolhe proteger Rose."
    }
  ],
  megamycete: [
    {
      title: "Arquivo vivo",
      body: "O Megamiceto é um organismo fúngico capaz de preservar memórias e servir como raiz para Mold e Cadou. Miranda o interpreta como caminho para ressuscitar Eva, mas ele funciona mais como arquivo biológico do que como milagre controlável."
    },
    {
      title: "Ameaça filosófica",
      body: "Seu perigo vai além da mutação: ele embaralha morte, memória e identidade. Rose entra em sua consciência em Shadows of Rose, mostrando que o Megamiceto pode continuar existindo como espaço psíquico mesmo quando sua forma física é atacada."
    }
  ],
  cadou: [
    {
      title: "Parasita de Miranda",
      body: "Cadou é a tentativa de Miranda de transformar o poder do Megamiceto em ferramenta aplicável. Implantado em hospedeiros, pode gerar poderes únicos, deformidades ou falha completa. Os Lordes são casos raros de compatibilidade elevada."
    },
    {
      title: "Seleção cruel",
      body: "A maioria dos experimentos vira lycan, monstro ou cadáver. Alcina, Donna, Moreau e Heisenberg representam sucessos parciais, mas nenhum serve ao objetivo final de Miranda: trazer Eva de volta por Rose."
    }
  ],
  "e-series": [
    {
      title: "Eveline como bioarma",
      body: "A E-Series traduz o Mold em produto militar: uma criança bioarma capaz de infiltração, controle mental e infecção familiar. Eveline parece frágil, mas seu design é estratégico: ela entra em ambientes humanos e converte vínculos afetivos em rede de controle."
    },
    {
      title: "Falha emocional",
      body: "O horror de Eveline é que ela deseja uma família, mas só sabe obtê-la por dominação. The Connections criou uma arma com necessidades emocionais, e Dulvey pagou o preço."
    }
  ],
  zombies: [
    { title: "Primeira face do T-Virus", body: "Zumbis são humanos consumidos pela infecção do T-Virus, com necrose, fome agressiva e perda de identidade. Eles são a forma mais visível de falha de contenção da Umbrella." },
    { title: "Função narrativa", body: "Em massa, representam cidade e laboratório transformados em cemitério ativo. Individualmente, lembram que cada monstro era uma pessoa abandonada por uma corporação." }
  ],
  "crimson-heads": [
    { title: "V-ACT", body: "Crimson Heads surgem quando certos zumbis passam por mutação após aparente morte. O corpo retorna mais rápido, violento e perigoso, punindo o jogador e mostrando que o T-Virus continua evoluindo mesmo depois da neutralização inicial." },
    { title: "No remake", body: "Eles reforçam o terror de contenção: matar não basta, é preciso entender o ciclo biológico da ameaça." }
  ],
  cerberus: [
    { title: "Animais como vetor", body: "Cerberus são cães infectados ou experimentais que mostram como o T-Virus cruza espécies. Eles espalham pânico pela velocidade e pela familiaridade distorcida de um animal doméstico convertido em arma." },
    { title: "Importância", body: "Desde a primeira janela quebrada em RE1, Cerberus estabelece que a infecção não respeita ambiente, espécie ou zona segura." }
  ],
  hunters: [
    { title: "B.O.W. de combate", body: "Hunters são armas biológicas reptilianas criadas para combate direto. Ao contrário de zumbis, são produtos intencionais: fortes, ágeis e projetados para matar." },
    { title: "Legado", body: "Variantes de Hunters aparecem em várias crises, mostrando a busca recorrente por uma B.O.W. replicável e militarmente útil." }
  ],
  lickers: [
    { title: "Mutação exposta", body: "Lickers representam estágio avançado de mutação T-Virus, com cérebro exposto, pele ausente, língua muscular e audição extrema. São menos humanos visualmente que zumbis e mais predatórios." },
    { title: "Raccoon", body: "Em RE2, mostram que a delegacia já não é só tomada por mortos-vivos comuns: a infecção está evoluindo dentro da cidade." }
  ],
  tyrants: [
    { title: "Projeto de super-soldado", body: "Tyrants são a ambição militar clássica da Umbrella: força, obediência e resistência em corpo humanoide. O problema sempre foi compatibilidade e controle." },
    { title: "Símbolo da Umbrella", body: "Do T-002 ao T-00, Tyrants representam a tentativa da corporação de transformar pessoas em produtos de guerra." }
  ],
  "mr-x": [
    { title: "T-00 em campo", body: "Mr. X é um Tyrant enviado a Raccoon City para cumprir objetivos específicos, como eliminar testemunhas e recuperar amostras. Sua presença constante no remake transforma a cidade em perseguição." },
    { title: "Horror de inevitabilidade", body: "Ele é menos expressivo que Nemesis, mas justamente por isso funciona como força corporativa pura: caminha, encontra, elimina." }
  ],
  nemesis: [
    { title: "Tyrant com parasita", body: "Nemesis combina corpo Tyrant com NE-α Parasite, ganhando inteligência, foco e capacidade de usar armas. Seu objetivo é exterminar S.T.A.R.S., especialmente Jill." },
    { title: "Mutação progressiva", body: "Cada derrota rompe mais o controle do projeto. Nemesis começa como caçador tático e termina como massa biológica descontrolada, a própria metáfora da Umbrella perdendo domínio sobre sua criação." }
  ],
  bandersnatch: [
    { title: "B.O.W. de Rockfort", body: "Bandersnatch é uma arma biológica de Code: Veronica com braço extensível e força alta. Ele demonstra que Rockfort não era apenas prisão, mas depósito e laboratório de B.O.W.s." },
    { title: "Função", body: "Sua presença amplia a variedade de armas da Umbrella fora dos EUA." }
  ],
  nosferatu: [
    { title: "Alexander Ashford", body: "Nosferatu é Alexander Ashford transformado por experimentos da própria família. Preso e deformado, ele encarna o fracasso moral dos Ashford." },
    { title: "Tragédia", body: "Mais que monstro de chefe, é uma vítima familiar usada como prova de que a linhagem Ashford destrói até seus patriarcas." }
  ],
  ganados: [
    { title: "Humanos controlados", body: "Ganados são moradores infectados por Las Plagas. Mantêm fala, trabalho e violência organizada, mas suas vontades foram absorvidas pelo culto." },
    { title: "Diferença para zumbis", body: "O horror dos Ganados é social e religioso: uma comunidade inteira funcionando como extensão de Saddler." }
  ],
  regenerators: [
    { title: "Experimentos com Plagas", body: "Regenerators são corpos com múltiplas Plagas internas, capazes de regenerar tecidos de forma assustadora. Eles tornam combate em diagnóstico: é preciso localizar parasitas para encerrar a ameaça." },
    { title: "Terror corporal", body: "São uma das expressões mais fortes de horror biológico em RE4, porque parecem corpos que esqueceram como morrer." }
  ],
  "iron-maidens": [
    { title: "Variante extrema", body: "Iron Maidens são variantes de Regenerators com espinhos e letalidade aumentada. Mantêm regeneração, mas adicionam punição física direta ao contato." },
    { title: "Função", body: "Servem como escalada do laboratório de Plagas, mostrando que a pesquisa do culto não parou no controle mental." }
  ],
  verdugo: [
    { title: "Guarda de Salazar", body: "Verdugo é uma criatura de elite ligada a Salazar, veloz, blindada e quase predatória. Funciona como guarda-costas biológico e prova de que Las Plagas podem criar assassinos especializados." },
    { title: "Ameaça", body: "Sua resistência obriga uso ambiental e estratégia, reforçando que nem toda B.O.W. deve ser enfrentada como inimigo comum." }
  ],
  "el-gigante": [
    { title: "Gigante parasitado", body: "El Gigante é uma mutação colossal criada por Las Plagas, com força bruta e baixa sutileza. Ele representa o uso do parasita para produzir armas de cerco." },
    { title: "Função", body: "É menos sofisticado que Verdugo ou Regenerator, mas militarmente devastador em ambiente aberto." }
  ],
  majini: [
    { title: "Plagas na África", body: "Majini são hospedeiros de variantes de Plagas usadas em Kijuju. Como Ganados, mantêm coordenação e uso de armas, mas em contexto de tráfico bioterrorista e experimentação da Tricell." },
    { title: "Escala", body: "Eles mostram que Las Plagas saiu do culto espanhol e entrou em cadeia global de pesquisa e venda." }
  ],
  "executioner-majini": [
    { title: "Executor", body: "Executioner Majini é uma mutação de elite em RE5, armado e fisicamente intimidador. Ele funciona como terror de multidão: uma unidade pesada cercada por infectados menores." },
    { title: "Papel", body: "Mostra que a Tricell explora Plagas para criar hierarquias de combate." }
  ],
  "uroboros-creatures": [
    { title: "Rejeição do Uroboros", body: "Criaturas Uroboros são hospedeiros incompatíveis convertidos em massas tentaculares. Elas expõem o caráter falho do projeto de Wesker: a maioria não evolui, apenas sofre colapso." },
    { title: "Ameaça", body: "Mesmo rejeitado, o Uroboros é letal, absorvente e difícil de conter." }
  ],
  javo: [
    { title: "Soldados mutáveis", body: "J'avo são infectados pelo C-Virus capazes de manter armas e táticas, regenerando membros em mutações adaptativas. Isso os torna soldados biológicos dinâmicos." },
    { title: "C-Virus em guerra", body: "Eles mostram a intenção militar de Neo-Umbrella: não criar zumbis, mas combatentes mutáveis em campo." }
  ],
  molded: [
    { title: "Corpos do Mold", body: "Molded são criaturas formadas por massa fúngica, muitas vezes sem individualidade humana visível. Eles emergem como extensão ambiental de Eveline e do Mold." },
    { title: "Função em RE7", body: "Aparecem como manifestação física do domínio fúngico sobre a casa, as minas e a memória de Dulvey." }
  ],
  lycans: [
    { title: "Matilha da vila", body: "Lycans são humanos alterados por Cadou/Megamiceto, assumindo traços lupinos e comportamento de matilha. Eles fazem a vila parecer um ecossistema de caça." },
    { title: "Controle", body: "Embora pareçam folclóricos, são resultado de experimentação biológica, reforçando a mistura de mito e laboratório em Village." }
  ],
  soldats: [
    { title: "Soldados de Heisenberg", body: "Soldats são corpos modificados por Heisenberg com Cadou, metal e engenharia mecânica. Eles representam a industrialização do horror fúngico." },
    { title: "Fábrica", body: "Na fábrica, a biologia vira linha de produção: cadáveres, parasitas, metal e energia criam um exército privado contra Miranda." }
  ],
  "dimitrescu-daughters": [
    { title: "Filhas como enxame", body: "Bela, Cassandra e Daniela são entidades criadas por experimentos envolvendo parasitismo/insetos e Mold/Cadou. Elas mantêm forma humana parcial, mas seus corpos se dispersam em enxames." },
    { title: "Limite biológico", body: "A vulnerabilidade ao frio revela que seus poderes dependem de estabilidade ambiental, o que permite a Ethan derrotá-las." }
  ],
  "moreau-mutated": [
    { title: "Mutação de Moreau", body: "Salvatore Moreau é um dos Lordes menos estáveis. Seu Cadou produz deformidade aquática, ácido e dependência emocional de Miranda." },
    { title: "Tragédia", body: "Ele é ameaça extrema, mas também exemplo de compatibilidade cruel: poderoso o bastante para servir, deformado demais para ser amado por Miranda." }
  ],
  "heisenberg-form": [
    { title: "Metal e carne", body: "Heisenberg combina Cadou com magnetismo e engenharia, criando uma forma final que funde corpo e máquina. Sua mutação é extensão direta da fábrica." },
    { title: "Rebelião", body: "Diferente de outros Lordes, ele quer usar seu poder contra Miranda. Isso o torna ameaça e potencial aliado recusado por Ethan." }
  ],
  "mutated-miranda": [
    { title: "Forma final de Miranda", body: "Miranda usa o poder do Megamiceto para mudar de forma, atacar com múltiplas anatomias e tentar completar a substituição de Eva por Rose." },
    { title: "Colapso da obsessão", body: "Sua derrota mostra que conhecimento e poder não superaram o luto: toda a vila foi sacrificada por uma ressurreição impossível." }
  ],
  "film-t-virus": [
    {
      title: "Variante cinematográfica",
      body: "O T-Virus dos filmes começa como criação da Umbrella dentro da continuidade de Alice e assume escala apocalíptica global. Ele se relaciona ao Hive, à Red Queen e à mitologia própria dos filmes."
    },
    {
      title: "Separação",
      body: "Apesar do nome, não deve ser usado para explicar regras do T-Virus dos jogos. É uma variante de continuidade live-action."
    }
  ],
  "film-g-virus": [
    {
      title: "G no reboot",
      body: "O G-Virus de Welcome to Raccoon City aparece dentro da versão condensada do reboot, associado a William Birkin e à Umbrella local."
    },
    {
      title: "Separação",
      body: "Ele é arquivado como variante do reboot, não como substituto do G-Virus de RE2."
    }
  ],
  "film-nemesis": [
    {
      title: "Matt como Nemesis",
      body: "Nos filmes, Nemesis deriva de Matt Addison transformado pela Umbrella. Essa origem é emocionalmente ligada a Alice e não corresponde ao projeto NE-α dos jogos."
    },
    {
      title: "Continuidade alternativa",
      body: "É uma versão cinematográfica separada, útil para comparação, mas fora do canon dos games."
    }
  ]
};

export const fullHistories: HistoryMap = {
  ...gameHistories,
  ...timelineHistories,
  ...biohazardHistories
};

export function getFullHistory(id: string): HistoryBlock[] {
  return fullHistories[id] ?? [];
}
