import type { WalkthroughGuide } from "./types";

export const walkthroughs: WalkthroughGuide[] = [
  {
    id: "walk-re0-2002",
    mediaId: "re0-2002",
    title: "Resident Evil 0 - Guia de sobrevivência",
    continuity: "games-canon",
    difficulty: "alto",
    estimatedRun: "8 a 12 horas na primeira campanha",
    spoilerLevel: "alto",
    intro:
      "Resident Evil 0 é uma fuga em dueto. O jogo tenta te cansar antes de te matar: inventário dividido, ausência de baús mágicos, corredores que parecem seguros até que um corpo se levante no caminho de volta. Para zerar sem se perder, pense em Rebecca como precisão e química, Billy como força e escudo. A vitória nasce quando você decide, antes de cada porta, quem carrega munição, quem carrega cura e o que fica abandonado no chão como evidência.",
    preparation: [
      "Use Billy na linha de frente sempre que o combate for inevitável; Rebecca deve preservar vida para misturas, puzzles químicos e trechos solo.",
      "Deixe itens grandes perto de salões centrais antes de avançar. O jogo pune colecionismo ansioso.",
      "Economize granadas e molotovs para Eliminators, Hunters e chefes; zumbis comuns podem ser contornados ou derrubados sem finalização.",
      "Quando encontrar fitas e ervas, trate-as como pontos de respiro, não como convite para gastar recursos."
    ],
    recommendedRoute: [
      "Ecliptic Express",
      "Centro de treinamento da Umbrella",
      "Laboratório",
      "Instalação de tratamento",
      "Confronto contra a Rainha Leech"
    ],
    steps: [
      {
        title: "O trem Ecliptic Express",
        route:
          "Abra espaço no inventário, avance vagão por vagão e use a troca entre personagens para resolver portas, escadas e itens separados. O trem é curto, mas é o primeiro teste de disciplina: se você carregar tudo, ficará preso antes do jogo realmente começar.",
        objectives: ["Encontrar a chave do condutor", "Controlar Rebecca e Billy em rotas paralelas", "Preparar o freio de emergência"],
        hazards: ["Zumbis em corredores estreitos", "Cerberus", "Primeiros Leech Zombies"],
        puzzleNotes: ["Anote combinações e deixe itens curativos perto de pontos de retorno.", "No freio, cada personagem precisa cumprir sua parte sem improviso."],
        bossStrategy: "Contra o Stinger, mantenha distância, atire quando ele expuser a frente e não desperdice granadas se ainda estiver confortável de vida.",
        completionCheck: "Saia do trem com pelo menos uma arma forte reservada e alguns itens deixados em área acessível."
      },
      {
        title: "Centro de treinamento",
        route:
          "O centro funciona como a Mansão Spencer em miniatura: portas trancadas, emblemas, estátuas e salas que se conectam por memória espacial. Monte uma base no hall, limpe só corredores inevitáveis e marque mentalmente onde largou crank, tablets e munição.",
        objectives: ["Abrir as alas laterais", "Resolver o puzzle dos animais", "Coletar tablets para acessar o observatório"],
        hazards: ["Mimicry Marcus", "Insetos", "Eliminators"],
        puzzleNotes: ["O puzzle dos animais depende da relação predador/presa; resolva com calma em vez de correr pela sala.", "Leve apenas os itens necessários para cada ala e volte ao hall para reorganizar."],
        bossStrategy: "Contra o Centurion, foque em libertar Rebecca com disparos constantes. Billy deve assumir o risco.",
        completionCheck: "Antes de descer ao laboratório, recupere armas pesadas e deixe itens sem uso para trás."
      },
      {
        title: "Laboratório e instalação de tratamento",
        route:
          "Daqui em diante, o jogo fica mais agressivo. Os corredores deixam de parecer acadêmicos e passam a cheirar a descarte. Use Rebecca para misturas químicas, mantenha Billy armado e atravesse áreas contaminadas com objetivo claro.",
        objectives: ["Produzir compostos químicos", "Acionar elevadores", "Reunir os personagens após separações obrigatórias"],
        hazards: ["Hunters", "Leech Zombies", "Macacos em salas pequenas"],
        puzzleNotes: ["Se Rebecca estiver sozinha, evite confrontos longos; ela resolve mecanismos, Billy resolve carne infectada.", "Não carregue itens de cura nos dois personagens se um trecho obrigar separação curta."],
        completionCheck: "Chegue ao setor final com magnum ou munição explosiva, cura dupla e espaço para itens de objetivo."
      },
      {
        title: "A Rainha Leech",
        route:
          "A parte final é menos sobre matar e mais sobre sobreviver tempo suficiente para que a luz faça o que balas não fazem. Proteja Rebecca enquanto ela abre as comportas e use Billy para atrair a criatura.",
        objectives: ["Sobreviver à mutação final", "Abrir as comportas", "Finalizar a criatura sob luz solar"],
        hazards: ["Investidas amplas", "Dano alto", "Pressão de tempo"],
        bossStrategy: "Use Billy como isca armada. Quando Rebecca operar mecanismos, não tente ser elegante: atire para interromper aproximações e mantenha cura pronta.",
        completionCheck: "Zerado quando o elevador final vira fuga e não mais exploração."
      }
    ],
    bossNotes: ["Stinger exige distância.", "Centurion exige foco em Rebecca.", "Queen Leech exige controle de atenção, não só dano."],
    completionChecklist: ["Salvar ambos", "Evitar gasto excessivo de granadas no trem", "Guardar munição forte para Hunters e chefe final", "Usar o chão como inventário planejado"],
    postGame: ["Revise rotas para Leech Hunter e ranking melhor.", "Uma segunda campanha fica muito mais limpa quando você define depósitos fixos de itens."],
    sourceRefs: ["capcom-history", "strategywiki-resident-evil", "gamefaqs-guides", "re-fandom-walkthroughs"]
  },
  {
    id: "walk-re1-remake-2002",
    mediaId: "re1-remake-2002",
    title: "Resident Evil Remake - Mansão Spencer",
    continuity: "games-canon",
    difficulty: "alto",
    estimatedRun: "10 a 14 horas na primeira campanha",
    spoilerLevel: "alto",
    intro:
      "O Remake é uma casa que aprende seu medo. A mansão parece imóvel, mas cada chave muda a respiração do lugar. Para zerar, aceite que Chris e Jill não jogam da mesma forma: Jill tem conforto e ferramentas; Chris tem resistência e menos espaço. A regra de ouro é simples e cruel: se você derruba um zumbi onde voltará muitas vezes, queime o corpo ou prepare-se para reencontrá-lo pior.",
    preparation: [
      "Escolha Jill para uma primeira campanha mais confortável; escolha Chris para tensão maior e inventário mais severo.",
      "Queime cadáveres em corredores centrais para evitar Crimson Heads.",
      "Use baús como salas de planejamento: leve só chave, arma, cura e um slot livre.",
      "Guarde magnum e munição de granada para Hunters, Tyrant e emergências reais."
    ],
    recommendedRoute: ["Mansão", "Jardim e residência", "Retorno à mansão", "Cavernas e Lisa Trevor", "Laboratório subterrâneo"],
    steps: [
      {
        title: "Primeira varredura da mansão",
        route:
          "Explore o hall como se fosse uma delegacia antes da catástrofe: cada porta trancada é uma promessa, cada corredor seguro é temporário. Priorize mapas, chaves e baús. Não tente limpar tudo; tente criar uma rota respirável entre save rooms.",
        objectives: ["Obter chaves iniciais", "Abrir salas de arte e armadilhas", "Encontrar shotgun sem morrer na armadilha"],
        hazards: ["Zumbis no retorno", "Cães pela janela", "Corredores sem câmera favorável"],
        puzzleNotes: ["Examine todos os objetos girando o modelo.", "Se uma sala ficar vermelha no mapa moderno, ainda há item ou puzzle pendente."],
        completionCheck: "A mansão inicial está sob controle quando você consegue ir do hall a uma save room sem gastar munição."
      },
      {
        title: "Jardim, residência e veneno",
        route:
          "A residência muda o horror de lugar: madeira úmida, água parada, plantas que cresceram com ciência demais. Leve cura contra veneno, resolva a química da V-Jolt se quiser reduzir o custo do combate e trate tubarões como obstáculo, não como duelo.",
        objectives: ["Acessar a residência", "Lidar com Plant 42", "Restaurar rota para voltar à mansão"],
        hazards: ["Cobras", "Neptune", "Planta 42"],
        puzzleNotes: ["V-Jolt reduz risco se você resolver as misturas.", "Drenar água vale mais que tentar matar tudo."],
        bossStrategy: "Contra Plant 42, use granadas/flame rounds com Jill ou mantenha distância com Chris; se V-Jolt foi aplicado, a luta fica mais curta.",
        completionCheck: "Volte à mansão com munição forte guardada; os Hunters vão anunciar a segunda metade do jogo."
      },
      {
        title: "A mansão depois dos Hunters",
        route:
          "Quando os Hunters chegam, a casa deixa de ser labirinto e vira matadouro. Refaça rotas antigas com armas carregadas, recupere emblemas, joias e itens que antes pareciam decorativos.",
        objectives: ["Abrir áreas avançadas", "Resolver puzzles de joias e emblemas", "Sobreviver aos Hunters"],
        hazards: ["Hunters", "Crimson Heads esquecidos", "Armadilhas de sala"],
        bossStrategy: "Yawn deve ser enfrentada com mobilidade; pegue o item, cause dano quando necessário e não transforme veneno em pânico.",
        completionCheck: "Siga para cavernas com cura, arma forte e slots vazios."
      },
      {
        title: "Lisa Trevor e o laboratório",
        route:
          "Lisa não é só chefe; é o arquivo vivo da crueldade da Umbrella. No altar, empurre mecanismos e sobreviva. No laboratório, leia o cenário como sentença: senhas, elevadores, energia e a verdade final sobre Wesker.",
        objectives: ["Resolver o altar de Lisa", "Ativar energia do laboratório", "Libertar companheiro preso quando aplicável", "Enfrentar Tyrant"],
        hazards: ["Lisa Trevor", "Quimeras", "Tyrant T-002"],
        puzzleNotes: ["No laboratório, resolva terminais e libere caminhos antes de gastar munição explorando sem rumo."],
        bossStrategy: "Contra Tyrant, mantenha distância e use armas fortes. Na fuga final, espere a janela certa para usar o lançador.",
        completionCheck: "Final melhor exige salvar aliados e cumprir libertações antes do helicóptero."
      }
    ],
    bossNotes: ["Crimson Heads são punição por pressa.", "Lisa Trevor geralmente pede sobrevivência e puzzle, não execução.", "Tyrant cai com dano alto e posicionamento."],
    completionChecklist: ["Salvar Rebecca/Jill/Chris quando aplicável", "Queimar corpos em corredores centrais", "Resolver V-Jolt se quiser economizar munição", "Libertar o parceiro antes do final"],
    postGame: ["Tente Real Survival quando já souber rotas.", "Invisible Enemy transforma memória espacial em arma principal."],
    sourceRefs: ["capcom-history", "strategywiki-resident-evil", "gamefaqs-guides", "re-fandom-walkthroughs"]
  },
  {
    id: "walk-re1-1996",
    mediaId: "re1-1996",
    title: "Resident Evil 1996 - Rota clássica",
    continuity: "games-canon",
    difficulty: "médio",
    estimatedRun: "7 a 10 horas na primeira campanha",
    spoilerLevel: "alto",
    intro:
      "O original é mais seco, teatral e traiçoeiro. Ele não tem Crimson Heads, mas tem a linguagem bruta de 1996: mira parada, câmera fixa, portas como cortes de filme e sustos que funcionam porque o silêncio dura um segundo a mais. Zerar é aprender quando lutar e quando deixar a mansão guardar seus mortos.",
    preparation: [
      "Jill facilita a primeira vitória pelo inventário maior e lockpick.",
      "Chris exige mais retorno ao baú, mas aguenta mais dano.",
      "Guarde shotgun e magnum para Hunters e chefes.",
      "Use o mapa para separar salas já limpas de salas apenas visitadas."
    ],
    recommendedRoute: ["Mansão", "Casa da guarda", "Retorno com Hunters", "Cavernas", "Laboratório"],
    steps: [
      {
        title: "Mansão e chaves",
        route:
          "Avance coletando chaves e emblemas sem tentar resolver tudo no primeiro giro. A mansão clássica é feita para retorno: portas com símbolos dizem para você ir embora e lembrar delas depois.",
        objectives: ["Encontrar Armor/Sword/Shield keys conforme rota", "Pegar shotgun com segurança", "Abrir acesso ao pátio"],
        hazards: ["Zumbis", "Cerberus", "Armadilha da shotgun"],
        puzzleNotes: ["Examine medalhas e itens de inventário.", "Use ink ribbons com parcimônia, mas salve antes de chefes."]
      },
      {
        title: "Casa da guarda",
        route:
          "Saindo da mansão, o jogo troca mármore por umidade. Pegue itens de veneno, resolva a área da planta e retorne antes que o inventário vire prisão.",
        objectives: ["Resolver Plant 42", "Coletar itens de acesso avançado", "Voltar à mansão"],
        hazards: ["Plantas", "Aranhas", "Tubarão"],
        bossStrategy: "Plant 42 pede munição incendiária ou solução química, dependendo do personagem e da rota."
      },
      {
        title: "Hunters e laboratório",
        route:
          "O retorno à mansão introduz os inimigos que definem a reta final. Evite corredores sem necessidade e avance para cavernas/laboratório com uma rota limpa.",
        objectives: ["Coletar MO disks", "Abrir celas de aliados", "Ativar sistemas do laboratório"],
        hazards: ["Hunters", "Chimeras", "Tyrant"],
        puzzleNotes: ["MO disks são essenciais para finais melhores.", "Leia terminais e memorize códigos encontrados em arquivos."],
        bossStrategy: "Use magnum contra Tyrant e mantenha espaço no heliporto."
      }
    ],
    bossNotes: ["Yawn pode ser contornada parcialmente.", "Plant 42 aceita solução química.", "Tyrant exige arma forte e calma."],
    completionChecklist: ["Salvar aliados", "Usar MO disks", "Chegar ao heliporto com cura e magnum", "Evitar limpar corredores pouco usados"],
    postGame: ["Rejogue com o outro personagem para ver variações.", "Tente reduzir saves após memorizar chaves."],
    sourceRefs: ["capcom-history", "strategywiki-resident-evil", "gamefaqs-guides", "re-fandom-walkthroughs"]
  },
  {
    id: "walk-outbreak",
    mediaId: "outbreak",
    title: "Resident Evil Outbreak - Sobreviventes civis",
    continuity: "games-canon",
    difficulty: "alto",
    estimatedRun: "Cenários de 30 a 70 minutos cada",
    spoilerLevel: "médio",
    intro:
      "Outbreak não é uma aventura de heróis; é uma noite atravessada por gente comum que teve o azar de respirar a cidade errada. Cada cenário tem começo, meio e fuga, e zerar significa entender a função do personagem escolhido, a velocidade da infecção e o peso de ajudar ou abandonar companheiros.",
    preparation: [
      "Escolha Kevin ou Mark para rotas mais diretas de combate; Alyssa e Yoko favorecem exploração e conhecimento.",
      "Não carregue itens sentimentais: chave, cura, arma e peça de puzzle valem mais.",
      "Acompanhe o percentual viral e não transforme cada sala em tiroteio.",
      "Em single-player, use comandos simples para manter IA próxima quando necessário."
    ],
    recommendedRoute: ["Outbreak", "Below Freezing Point", "The Hive", "Hellfire", "Decisions, Decisions"],
    steps: [
      {
        title: "Outbreak e a fuga do bar",
        route:
          "O primeiro cenário ensina a gramática da cidade em colapso: portas barricadas, escadas de incêndio, civis em pânico e uma rua que já não pertence aos vivos.",
        objectives: ["Sair do J's Bar", "Abrir caminho pelos prédios", "Chegar à explosão/rota de evacuação"],
        hazards: ["Zumbis numerosos", "Tempo viral", "IA dispersa"],
        completionCheck: "Fuja sem gastar toda cura; Outbreak recompensa movimento."
      },
      {
        title: "Laboratório congelado e hospital",
        route:
          "Below Freezing Point e The Hive pedem leitura de ambiente. O laboratório tem frio, elevadores e Hunters; o hospital tem corredores apertados e Leech Man pressionando retorno.",
        objectives: ["Restaurar energia", "Resolver acessos laboratoriais", "Produzir rota de saída no hospital"],
        hazards: ["Hunters", "Leech Man", "Zumbis em massa"],
        puzzleNotes: ["Divida itens de acesso entre personagens se estiver em coop.", "No hospital, não brigue longamente com perseguidor se o objetivo está em outra ala."]
      },
      {
        title: "Hotel em chamas e universidade",
        route:
          "Hellfire e Decisions, Decisions fecham a noite como desastre administrativo: fogo, pesquisa, documentos e uma fuga que depende de completar processos enquanto tudo desaba.",
        objectives: ["Escapar do hotel", "Reunir amostras na universidade", "Derrotar Thanatos ou sobreviver à evacuação"],
        hazards: ["Lickers", "Fogo", "Thanatos"],
        bossStrategy: "Contra Thanatos, use explosivos e distância. Ele é menos duelo justo e mais cronômetro com pernas.",
        completionCheck: "Zere cada cenário com pelo menos um sobrevivente; depois busque finais/porcentagem de eventos."
      }
    ],
    bossNotes: ["Leech Man deve ser evitado quando possível.", "Thanatos pune desperdício.", "Chefes de cenário ficam mais controláveis em cooperação."],
    completionChecklist: ["Completar os cinco cenários base", "Testar personagens diferentes", "Priorizar objetivos em vez de limpeza", "Monitorar infecção"],
    postGame: ["Refaça cenários por event checklist e documentos.", "File #2 complementa a queda de Raccoon City com novas rotas."],
    sourceRefs: ["capcom-history", "re-fandom-walkthroughs", "strategywiki-resident-evil"]
  },
  {
    id: "walk-outbreak-file-2",
    mediaId: "outbreak-file-2",
    title: "Resident Evil Outbreak File #2 - Rotas finais de Raccoon",
    continuity: "games-canon",
    difficulty: "alto",
    estimatedRun: "Cenários de 35 a 80 minutos cada",
    spoilerLevel: "médio",
    intro:
      "File #2 parece expansão, mas tem outra textura: zoológico, metrô, delegacia, hospital e corredor de eliminação. É Raccoon City vista por portas laterais, onde nenhum civil sabe que está dentro de uma timeline histórica. Para zerar, pense em cada cenário como um pequeno Resident Evil completo.",
    preparation: [
      "Leve personagem compatível com o cenário: Alyssa ajuda em locks, Kevin facilita combate, Cindy prolonga sobrevivência.",
      "Aprenda atalhos antes de buscar ranqueamento.",
      "Use armas improvisadas para poupar munição real.",
      "Evite separar IA em áreas com inimigos rápidos."
    ],
    recommendedRoute: ["Wild Things", "Underbelly", "Flashback", "Desperate Times", "End of the Road"],
    steps: [
      {
        title: "Zoológico e metrô",
        route:
          "Wild Things troca corredores por jaulas abertas. Underbelly aperta o jogador em plataformas e vagões onde fuga errada custa caro.",
        objectives: ["Restaurar rotas do zoológico", "Evitar ou enfrentar o elefante infectado", "Ligar sistemas do metrô"],
        hazards: ["Animais infectados", "Zumbis em estações", "Espaços abertos sem cobertura"],
        bossStrategy: "Use distância e cenário contra animais grandes; não gaste munição tentando vencer encontros opcionais."
      },
      {
        title: "Hospital e delegacia",
        route:
          "Flashback e Desperate Times são o coração de horror clássico. Leia documentos, resolva fechaduras e trate cada retorno ao corredor como risco calculado.",
        objectives: ["Atravessar hospital abandonado", "Ajudar na defesa do R.P.D.", "Reunir itens de evacuação"],
        hazards: ["Plantas", "Zumbis policiais", "Janelas e corredores bloqueados"],
        puzzleNotes: ["Use personagens com habilidades de lockpick se quiser reduzir voltas.", "Na delegacia, organize itens antes do cerco final."]
      },
      {
        title: "End of the Road",
        route:
          "O último cenário é perseguição laboratorial e fuga militar. Avance como se a cidade já tivesse sido condenada, porque foi.",
        objectives: ["Escapar das instalações", "Sobreviver aos Tyrants", "Chegar ao transporte final"],
        hazards: ["Tyrant", "Hunters", "Tempo viral alto"],
        bossStrategy: "Contra Tyrant, use armas pesadas quando o roteiro obrigar; fora disso, fuga é estratégia legítima.",
        completionCheck: "Concluir End of the Road fecha o pacote narrativo dos civis."
      }
    ],
    bossNotes: ["Animais infectados exigem cenário.", "Tyrants pedem economia de armas pesadas.", "File #2 recompensa conhecimento de mapa."],
    completionChecklist: ["Completar os cinco cenários", "Experimentar personagens por habilidade", "Buscar documentos e event checks depois da primeira vitória"],
    postGame: ["Refaça com dificuldade maior e rotas alternativas.", "Use a aba de personagens para conectar Alyssa ao legado Ashcroft."],
    sourceRefs: ["capcom-history", "re-fandom-walkthroughs", "strategywiki-resident-evil"]
  },
  {
    id: "walk-re3-remake-2020",
    mediaId: "re3-remake-2020",
    title: "Resident Evil 3 Remake - Fuga de Jill",
    continuity: "games-canon",
    difficulty: "médio",
    estimatedRun: "6 a 9 horas na primeira campanha",
    spoilerLevel: "alto",
    intro:
      "RE3 Remake é um filme de desastre com dentes. Jill não investiga Raccoon; ela corre por dentro dela enquanto a cidade apodrece. Para zerar, aceite o ritmo: explore quando o jogo abre quarteirões, avance quando Nemesis entra em cena e nunca transforme perseguição roteirizada em tentativa de limpar mapa.",
    preparation: [
      "Use o dodge perfeito como ferramenta central; treine cedo contra zumbis comuns.",
      "Guarde granadas para interromper Nemesis em ruas abertas.",
      "Com Carlos, aproveite o rifle de assalto para controle de multidão.",
      "Retorne por itens antes de acionar objetivos que avancem grandes eventos."
    ],
    recommendedRoute: ["Apartamento e centro de Raccoon", "Subestação e metrô", "R.P.D. com Carlos", "Hospital", "NEST 2 e fuga final"],
    steps: [
      {
        title: "Centro de Raccoon",
        route:
          "Explore lojas, farmácia e ruas laterais antes de religar sistemas do metrô. A cidade parece aberta, mas cada objetivo fecha uma porta atrás de você.",
        objectives: ["Ativar energia da subestação", "Traçar rota do metrô", "Coletar upgrades de arma"],
        hazards: ["Drain Deimos", "Zumbis em vitrines", "Nemesis em perseguição"],
        puzzleNotes: ["Resolva a rota do metrô com atenção às linhas.", "Antes de sair da área comercial, confira cofres e lockers."],
        bossStrategy: "Uma granada bem usada derruba Nemesis temporariamente e pode render suprimento."
      },
      {
        title: "Carlos no R.P.D. e hospital",
        route:
          "Carlos joga como resposta militar ao mesmo pesadelo. No R.P.D., avance por salas conhecidas com outro olhar. No hospital, defenda posição e use granadas contra Hunters.",
        objectives: ["Investigar delegacia", "Encontrar vacina para Jill", "Defender o saguão do hospital"],
        hazards: ["Lickers", "Hunters Beta", "Cerco de zumbis"],
        completionCheck: "Só avance para NEST 2 depois de varrer o hospital com Jill."
      },
      {
        title: "NEST 2 e Nemesis final",
        route:
          "A reta final tira a cidade de cena e mostra a indústria por baixo dela. Reúna amostras, sintetize a vacina e entre no último confronto com cura sobrando.",
        objectives: ["Criar vacina", "Escapar de Nicholai", "Derrotar Nemesis mutado"],
        hazards: ["Pale Heads", "Nemesis fase final", "Poucos espaços seguros"],
        bossStrategy: "Na forma final, empurre baterias enquanto usa a railgun quando disponível. Derrube pontos fracos para abrir janelas de ação.",
        completionCheck: "Zerado quando Jill deixa Raccoon antes da esterilização."
      }
    ],
    bossNotes: ["Nemesis de rua pode ser interrompido.", "Hunters no hospital pedem granada.", "Nemesis final é puzzle de arena."],
    completionChecklist: ["Pegar upgrades principais", "Abrir cofres/lockers antes de pontos sem retorno", "Dominar dodge", "Criar vacina em NEST 2"],
    postGame: ["Use pontos da loja para dificuldades maiores.", "Nightmare/Inferno mudam spawns e exigem domínio de esquiva."],
    sourceRefs: ["capcom-history", "gamepressure-re3", "re-fandom-walkthroughs"]
  },
  {
    id: "walk-re3-1999",
    mediaId: "re3-1999",
    title: "Resident Evil 3: Nemesis - Última fuga clássica",
    continuity: "games-canon",
    difficulty: "alto",
    estimatedRun: "7 a 11 horas na primeira campanha",
    spoilerLevel: "alto",
    intro:
      "O RE3 original é mais labiríntico e nervoso que sua releitura. Ele pede decisões ao vivo, rotas por ruas quebradas e coragem para encarar Nemesis quando o prêmio compensa. Para zerar, pense em pólvora como futuro, não como presente; cada mistura define que tipo de medo você conseguirá enfrentar depois.",
    preparation: [
      "Aprenda o quick turn e a esquiva, mesmo que ela pareça imprevisível no começo.",
      "Misture pólvoras conforme sua necessidade: shotgun para controle, grenade rounds para chefes.",
      "Nemesis pode ser enfrentado por drops, mas fugir é válido na primeira campanha.",
      "Salve antes de escolhas ao vivo se estiver explorando finais e rotas."
    ],
    recommendedRoute: ["Ruas de Raccoon", "Bonde", "Torre do relógio", "Hospital e parque", "Dead Factory"],
    steps: [
      {
        title: "Ruas e peças do bonde",
        route:
          "Raccoon City é um inventário espalhado por bairros. Pegue ferramentas, mangueira, fusíveis e óleo sem gastar tudo em cada esquina.",
        objectives: ["Reunir peças para o bonde", "Sobreviver aos encontros com Nemesis", "Abrir atalhos urbanos"],
        hazards: ["Zumbis em massa", "Cães", "Nemesis"],
        puzzleNotes: ["Combine ferramentas com objetos do cenário.", "Anote portas que exigem lockpick ou chave futura."]
      },
      {
        title: "Torre do relógio",
        route:
          "A Torre é o respiro falso: música, engrenagens e vitrais, até Nemesis lembrar que perseguição também atravessa arquitetura bonita.",
        objectives: ["Resolver engrenagens e música", "Acionar o sino", "Enfrentar Nemesis no pátio"],
        hazards: ["Aranhas", "Nemesis com tentáculos", "Veneno"],
        bossStrategy: "Use grenade rounds e mantenha distância. Se estiver fraco, priorize cura antes de dano."
      },
      {
        title: "Carlos, hospital e Dead Factory",
        route:
          "Carlos busca vacina enquanto Jill paga o preço da infecção. Depois, a fábrica final expõe o descarte industrial da Umbrella.",
        objectives: ["Produzir vacina", "Atravessar parque", "Ativar sistemas da fábrica", "Escolher destino final de Nemesis"],
        hazards: ["Hunters", "Grave Digger", "Nemesis final"],
        puzzleNotes: ["No hospital, faça rotas curtas: Hunters punem hesitação.", "Na fábrica, resolva água/energia antes de gastar munição explorando."],
        bossStrategy: "No canhão final, posicione Nemesis para receber dano ambiental e finalize quando ele estiver vulnerável."
      }
    ],
    bossNotes: ["Grave Digger pode ser vencido com cenário e munição controlada.", "Nemesis rende itens se derrubado, mas cobra caro.", "A forma final é arena de posicionamento."],
    completionChecklist: ["Reparar bonde", "Criar vacina", "Chegar à fábrica com munição explosiva", "Escolher final e escapar da cidade"],
    postGame: ["Mercenaries libera economia para extras.", "Rejogue escolhendo respostas diferentes nos eventos ao vivo."],
    sourceRefs: ["capcom-history", "strategywiki-resident-evil", "gamefaqs-guides", "re-fandom-walkthroughs"]
  },
  {
    id: "walk-re2-remake-2019",
    mediaId: "re2-remake-2019",
    title: "Resident Evil 2 Remake - R.P.D. e NEST",
    continuity: "games-canon",
    difficulty: "médio",
    estimatedRun: "8 a 12 horas na primeira campanha",
    spoilerLevel: "alto",
    intro:
      "RE2 Remake é sobre atravessar uma delegacia que virou organismo. O R.P.D. respira por corredores, engole munição e devolve passos pesados de Mr. X quando você acha que entendeu tudo. Para zerar, não mate cada zumbi; decida quais corredores merecem paz e quais podem continuar assombrados.",
    preparation: [
      "Escolha Leon ou Claire; depois faça a segunda rota para fechar a experiência.",
      "Use tábuas nas janelas de corredores que você revisita muito.",
      "Acompanhe cores do mapa: vermelho ainda tem item ou puzzle; azul está resolvido.",
      "Guarde granadas/flashbangs para Lickers, G-mutants e emergências com Mr. X."
    ],
    recommendedRoute: ["R.P.D. inicial", "Medalhões e passagem secreta", "Estacionamento/orfanato", "Esgotos", "NEST"],
    steps: [
      {
        title: "R.P.D. e os três medalhões",
        route:
          "O primeiro objetivo real é abrir a estátua central. Vá por alas, colete cadernos e símbolos, destranque atalhos e transforme o hall em base de operações.",
        objectives: ["Encontrar os três medalhões", "Pegar shotgun/lançador de granadas", "Abrir cofres e lockers úteis"],
        hazards: ["Zumbis persistentes", "Lickers", "Janelas abertas"],
        puzzleNotes: ["Use pistas dos documentos para estátuas.", "Examine objetos: algumas chaves e botões escondem interação no modelo."],
        completionCheck: "Antes de descer, garanta arma especial do personagem e hip pouches acessíveis."
      },
      {
        title: "Mr. X e a segunda varredura",
        route:
          "Quando Mr. X entra, o R.P.D. deixa de ser mapa e vira perseguição sonora. Ande quando puder, evite tiros desnecessários e use salas seguras para quebrar linha de perseguição.",
        objectives: ["Coletar peças eletrônicas", "Resolver cela/porta eletrônica", "Concluir rota de Ada ou Sherry"],
        hazards: ["Mr. X", "Lickers combinados com Tyrant", "Cães no estacionamento"],
        puzzleNotes: ["Peças eletrônicas têm orientação; observe o circuito antes de girar tudo."],
        bossStrategy: "Contra Birkin nas primeiras fases, use arena: derrube, reposicione, ataque olho exposto."
      },
      {
        title: "Esgotos e NEST",
        route:
          "Os esgotos são o teste de nojo e inventário; o laboratório é o teste de método. Guarde plugues, resolva o xadrez das portas e entre no NEST com espaço para amostras e upgrades.",
        objectives: ["Resolver plugues de xadrez", "Obter pulseira/acessos do NEST", "Sintetizar herbicida ou concluir setor final"],
        hazards: ["G-Adults", "Ivy Zombies", "Birkin final"],
        puzzleNotes: ["Os plugues têm lógica por posição e pistas próximas.", "No laboratório, elimine ou neutralize Ivy com fogo quando possível."],
        bossStrategy: "Nas formas finais de Birkin, use armas pesadas e granadas quando os olhos aparecem. Não descarregue tudo enquanto ele está protegido.",
        completionCheck: "Faça a segunda rota para ver final verdadeiro."
      }
    ],
    bossNotes: ["Lickers reagem a barulho.", "Mr. X é controle de rota, não chefe comum.", "Birkin exige foco nos olhos."],
    completionChecklist: ["Concluir rota A e rota B", "Pegar arma especial do personagem", "Resolver plugues", "Sair do NEST antes da autodestruição"],
    postGame: ["Busque Mr. Raccoon, ranking S e modos 4th Survivor/Tofu.", "A segunda rota muda ritmo e confirma o final."],
    sourceRefs: ["capcom-history", "gamewith-re2", "pcgamer-re2-guide", "re-fandom-walkthroughs"]
  },
  {
    id: "walk-re2-1998",
    mediaId: "re2-1998",
    title: "Resident Evil 2 1998 - Campanhas A e B",
    continuity: "games-canon",
    difficulty: "médio",
    estimatedRun: "8 a 12 horas para primeira dupla A/B",
    spoilerLevel: "alto",
    intro:
      "O clássico de 1998 é um díptico: uma campanha abre feridas, a outra mostra o que sangrou por trás. Leon e Claire cruzam a mesma cidade por ângulos diferentes. Para zerar direito, não pare no primeiro final; Resident Evil 2 só fecha quando a segunda campanha responde à primeira.",
    preparation: [
      "Escolha uma rota A e depois jogue a B correspondente.",
      "Guarde munição forte para Birkin, Mr. X e laboratório.",
      "Use baús com disciplina; o jogo é generoso em retorno, mas cruel com desperdício.",
      "Salve antes de chefes e depois de grandes puzzles."
    ],
    recommendedRoute: ["Ruas", "R.P.D.", "Esgotos", "Laboratório", "Cenário B e final verdadeiro"],
    steps: [
      {
        title: "Ruas e delegacia",
        route:
          "Chegue ao R.P.D. evitando confrontos inúteis nas ruas. Dentro da delegacia, colete chaves por símbolos e abra atalhos antes de acumular itens de puzzle.",
        objectives: ["Entrar no R.P.D.", "Resolver medalhões/estátuas conforme versão", "Abrir áreas trancadas"],
        hazards: ["Zumbis", "Lickers", "Cães"],
        puzzleNotes: ["Leia arquivos para senhas e combinações.", "Não carregue todos os plugs/itens antes de saber onde usá-los."]
      },
      {
        title: "Esgotos e laboratório",
        route:
          "A cidade desce para o que a Umbrella enterrou. Esgotos pedem controle de veneno e espaço; laboratório pede cartões, energia e munição pesada.",
        objectives: ["Reunir plugs", "Ajudar Ada/Sherry", "Ativar trem ou elevadores", "Confrontar Birkin"],
        hazards: ["Aranhas", "Ivy", "Mr. X no B"],
        bossStrategy: "Birkin muda de alcance a cada mutação. Use armas fortes quando ele expuser vulnerabilidade e evite gastar munição comum a longa distância."
      },
      {
        title: "Cenário B",
        route:
          "A segunda campanha reorganiza ameaças. Mr. X entra como cobrança constante e o laboratório ganha peso de final verdadeiro.",
        objectives: ["Concluir a rota complementar", "Derrotar Tyrant/Mr. X", "Fechar a fuga de Leon, Claire e Sherry"],
        hazards: ["Mr. X", "Birkin final", "Autodestruição"],
        completionCheck: "O jogo está realmente zerado quando você vê o final completo após a rota B."
      }
    ],
    bossNotes: ["Mr. X no cenário B não merece munição fora de momentos obrigatórios.", "Birkin pede armas fortes guardadas.", "Lickers podem ser evitados com rota limpa."],
    completionChecklist: ["Fazer A+B", "Salvar Sherry", "Concluir laboratório", "Escapar do trem final"],
    postGame: ["Desbloqueie 4th Survivor e Tofu com rankings melhores.", "Teste a ordem oposta de campanhas para variações."],
    sourceRefs: ["capcom-history", "strategywiki-resident-evil", "gamefaqs-guides", "re-fandom-walkthroughs"]
  },
  {
    id: "walk-re-survivor",
    mediaId: "re-survivor",
    title: "Resident Evil Survivor - Sheena Island",
    continuity: "games-canon",
    difficulty: "médio",
    estimatedRun: "3 a 5 horas",
    spoilerLevel: "médio",
    intro:
      "Survivor é curto, estranho e direto, mas ainda carrega o cheiro da Umbrella: uma ilha corporativa, uma identidade quebrada e corredores onde o tiro em primeira pessoa não elimina a sensação de estar cercado.",
    preparation: [
      "Acerte tiros na cabeça para economizar munição.",
      "Explore ramificações, mas aceite que algumas rotas são mutuamente exclusivas.",
      "Guarde armas fortes para Hunters e Tyrants.",
      "Use movimento lateral para evitar ataques previsíveis."
    ],
    recommendedRoute: ["Cidade da ilha", "Instalações da Umbrella", "Áreas de criação", "Fuga final"],
    steps: [
      {
        title: "Acordar sem memória",
        route: "Avance pela ilha coletando documentos para entender Ark, Vincent e o experimento social ao redor.",
        objectives: ["Encontrar armas básicas", "Abrir rotas urbanas", "Coletar cartões de acesso"],
        hazards: ["Zumbis", "Cães", "Corredores sem recuo"]
      },
      {
        title: "Instalações e produção de B.O.W.s",
        route: "Entre nas áreas industriais com munição forte pronta. O jogo acelera encontros e reduz espaço seguro.",
        objectives: ["Atravessar laboratórios", "Encontrar sobreviventes", "Chegar ao setor final"],
        hazards: ["Hunters", "Tyrants", "Zumbis armados"],
        bossStrategy: "Contra Tyrants, mire em janelas de recuperação e use armas pesadas sem tentar economizar demais."
      }
    ],
    bossNotes: ["Chefes pedem distância e tiro constante.", "Hunters são mais perigosos que zumbis pela velocidade."],
    completionChecklist: ["Descobrir identidade de Ark", "Confrontar Vincent", "Escapar da ilha"],
    postGame: ["Rejogue por rotas alternativas e arquivos não vistos."],
    sourceRefs: ["capcom-history", "re-fandom-walkthroughs", "strategywiki-resident-evil"]
  },
  {
    id: "walk-code-veronica",
    mediaId: "code-veronica",
    title: "Code: Veronica - Rockfort e Antártida",
    continuity: "games-canon",
    difficulty: "extremo",
    estimatedRun: "12 a 16 horas na primeira campanha",
    spoilerLevel: "alto",
    intro:
      "Code: Veronica é uma travessia longa e vingativa. Claire começa presa em uma ilha e termina arrastando a família Ashford para fora do retrato. O jogo pode travar jogadores descuidados: itens deixados no personagem errado voltam como fantasma. Para zerar, salve em blocos separados e pense no futuro antes de cada troca de protagonista.",
    preparation: [
      "Mantenha saves alternados para evitar soft lock por item mal distribuído.",
      "Não entregue todas as armas fortes a Claire antes de mudanças longas de personagem.",
      "Guarde BOW Gas Rounds e explosive arrows para chefes difíceis.",
      "Evite gastar munição em zumbis que podem ser contornados."
    ],
    recommendedRoute: ["Prisão de Rockfort", "Mansão Ashford", "Base militar", "Antártida com Claire", "Chris e confronto final"],
    steps: [
      {
        title: "Rockfort Island",
        route:
          "A ilha é uma instalação de classe e crueldade. Avance entre prisão, mansão e treinamento militar coletando emblemas, cartões e alavancas sem encher inventário com peças sem uso imediato.",
        objectives: ["Escapar da prisão", "Abrir mansão e instalações", "Ajudar Steve", "Preparar fuga aérea"],
        hazards: ["Zumbis", "Bandersnatch", "Cães", "Tyrant no avião"],
        puzzleNotes: ["Deposite armas fortes antes de trechos de troca.", "Leia pistas da família Ashford para puzzles de retrato e música."],
        bossStrategy: "No Tyrant do avião, cause dano suficiente e use o mecanismo de carga no momento certo."
      },
      {
        title: "Base antártica",
        route:
          "A Antártida é isolamento com máquinas antigas. Claire precisa avançar, mas Chris herdará consequências. Não esvazie o arsenal em encontros comuns.",
        objectives: ["Restaurar energia", "Resolver áreas congeladas", "Sobreviver a Nosferatu"],
        hazards: ["Poison", "Aranhas", "Nosferatu"],
        bossStrategy: "Contra Nosferatu, use rifle/sniper com calma e leve blue herbs. Veneno pode matar depois da luta."
      },
      {
        title: "Chris, Wesker e Alexia",
        route:
          "Chris reabre os locais como investigador tardio de uma tragédia familiar. Recupere itens, salve Claire quando possível e entre no confronto final com armas especiais.",
        objectives: ["Explorar Rockfort revisitada", "Salvar Claire", "Ativar autodestruição", "Derrotar Alexia"],
        hazards: ["Hunters", "Alexia", "Wesker como ameaça narrativa"],
        bossStrategy: "Alexia exige explosivos e movimento. Na fase final, use a arma linear quando a janela abrir.",
        completionCheck: "Zerado quando os Redfield escapam e o retorno de Wesker fica estabelecido."
      }
    ],
    bossNotes: ["Tyrant no avião é teste de timing.", "Nosferatu pune falta de antídoto.", "Alexia exige recursos guardados."],
    completionChecklist: ["Não prender itens essenciais com personagem errado", "Salvar antes de trocas", "Guardar explosive arrows", "Chegar ao final com cura contra veneno"],
    postGame: ["Battle Game abre desafios extras.", "Rejogue para ranking melhor só depois de memorizar transições."],
    sourceRefs: ["capcom-history", "re-fandom-walkthroughs", "strategywiki-resident-evil", "gamefaqs-guides"]
  },
  {
    id: "walk-survivor-2-code-veronica",
    mediaId: "survivor-2-code-veronica",
    title: "Survivor 2 Code: Veronica - Simulação arcade",
    continuity: "non-canon",
    difficulty: "médio",
    estimatedRun: "1 a 2 horas por rota",
    spoilerLevel: "baixo",
    intro:
      "Survivor 2 não é a história de Claire: é uma máquina de pesadelo usando Code: Veronica como pele. Zerar significa sobreviver a fases cronometradas, aceitar o ritmo arcade e tratar Nemesis como punição por demora.",
    preparation: [
      "Mantenha movimento constante.",
      "Priorize alvos que bloqueiam passagem.",
      "Pegue munição sem desviar muito da rota.",
      "Use armas fortes quando inimigos grandes segurarem o avanço."
    ],
    recommendedRoute: ["Prisão", "Palácio", "Instalações", "Fuga arcade"],
    steps: [
      {
        title: "Rotas cronometradas",
        route: "Avance por fases inspiradas em Rockfort sem buscar leitura canon. O objetivo é eficiência, pontuação e sobrevivência.",
        objectives: ["Chegar ao fim do estágio", "Evitar estouro de tempo", "Derrotar bloqueios"],
        hazards: ["Nemesis como perseguidor", "Bandersnatch", "Grupos de zumbis"]
      }
    ],
    bossNotes: ["Nemesis aparece como pressão de tempo.", "Chefes são barreiras de dano, não puzzles narrativos."],
    completionChecklist: ["Concluir estágios", "Manter tempo sob controle", "Rejogar por pontuação"],
    postGame: ["Funciona melhor como curiosidade de arcade e não como fonte de canon."],
    sourceRefs: ["capcom-history", "strategywiki-resident-evil", "re-fandom"]
  },
  {
    id: "walk-resident-evil-gaiden",
    mediaId: "resident-evil-gaiden",
    title: "Resident Evil Gaiden - Starlight",
    continuity: "non-canon",
    difficulty: "médio",
    estimatedRun: "4 a 6 horas",
    spoilerLevel: "médio",
    intro:
      "Gaiden é um Resident Evil de bolso, com Leon e Barry presos em uma continuidade que a série deixou à margem. Ele troca susto de câmera por gerenciamento simples e combate rítmico. Para zerar, entenda o navio como uma grade de recursos.",
    preparation: [
      "Domine o sistema de tiro por timing.",
      "Use cura só após dano real; recursos são limitados.",
      "Explore cabines para chaves antes de avançar ao próximo deck.",
      "Mantenha munição forte para o B.O.W. principal."
    ],
    recommendedRoute: ["Entrada no Starlight", "Decks de passageiros", "Áreas técnicas", "Confronto final"],
    steps: [
      {
        title: "Navio infectado",
        route: "Varra decks por chaves e cartões, abrindo atalhos antes de entrar em áreas técnicas.",
        objectives: ["Localizar Leon/Barry conforme trecho", "Coletar passes", "Descer às áreas críticas"],
        hazards: ["Zumbis", "B.O.W. infiltrado", "Poucos espaços de cura"],
        bossStrategy: "No B.O.W., preserve munição forte e ataque quando o sistema de timing estiver favorável."
      }
    ],
    bossNotes: ["O chefe final é economia de munição e precisão de timing."],
    completionChecklist: ["Encontrar rotas de deck", "Guardar cura", "Escapar do navio"],
    postGame: ["Trate como continuidade alternativa ao consultar personagens."],
    sourceRefs: ["capcom-history", "strategywiki-resident-evil", "re-fandom"]
  },
  {
    id: "walk-dead-aim",
    mediaId: "dead-aim",
    title: "Resident Evil: Dead Aim - Spencer Rain",
    continuity: "games-canon",
    difficulty: "médio",
    estimatedRun: "4 a 7 horas",
    spoilerLevel: "médio",
    intro:
      "Dead Aim é um cruzeiro sem glamour, onde cada salão parece amplo até o primeiro inimigo cortar a distância. Bruce e Fong Ling atravessam bioterrorismo de corredor marítimo. Para zerar, alternar mira precisa e movimento importa mais que despejar munição.",
    preparation: [
      "Mire em pontos críticos para economizar munição.",
      "Explore cabines por chaves e documentos.",
      "Guarde armas fortes para Morpheus e mutações.",
      "Use câmera de movimento para reposicionar antes de mirar."
    ],
    recommendedRoute: ["Convés e cabines", "Laboratórios do navio", "Instalações submersas", "Morpheus final"],
    steps: [
      {
        title: "O navio Spencer Rain",
        route: "Abra cabines, colete cartões e trate o navio como uma mansão horizontal. Cada setor libera o próximo.",
        objectives: ["Restaurar acessos", "Encontrar Fong Ling", "Descer aos laboratórios"],
        hazards: ["Zumbis", "Hunters aquáticos", "Corredores estreitos"]
      },
      {
        title: "Morpheus e T+G",
        route: "A reta final mistura laboratório e espetáculo. Entre com armas fortes e cura, porque Morpheus é rápido e pune mira lenta.",
        objectives: ["Impedir plano de Morpheus", "Escapar da instalação", "Vencer mutações finais"],
        hazards: ["Morpheus eletrificado", "B.O.W.s finais"],
        bossStrategy: "Mantenha distância, ataque após investidas e use munição pesada quando o chefe desacelerar."
      }
    ],
    bossNotes: ["Morpheus é velocidade e dano alto.", "Não gaste munição especial em zumbis comuns."],
    completionChecklist: ["Abrir setores do navio", "Chegar aos laboratórios", "Derrotar Morpheus", "Escapar"],
    postGame: ["Rejogue por arquivos e melhor eficiência de munição."],
    sourceRefs: ["capcom-history", "strategywiki-resident-evil", "re-fandom"]
  },
  {
    id: "walk-umbrella-chronicles",
    mediaId: "umbrella-chronicles",
    title: "The Umbrella Chronicles - Queda da Umbrella",
    continuity: "games-canon",
    difficulty: "médio",
    estimatedRun: "6 a 9 horas",
    spoilerLevel: "alto",
    intro:
      "Umbrella Chronicles é um arquivo disparado em trilhos. Ele reconta incidentes e abre frestas novas, principalmente no caminho de Wesker e na queda final da corporação. Para zerar, jogue como atirador e arquivista: destrua ameaças, mas também procure documentos e objetos quebráveis.",
    preparation: [
      "Ajuste sensibilidade para tiros precisos.",
      "Recarregue em intervalos seguros.",
      "Priorize projéteis e inimigos que saltam.",
      "Rejogue capítulos para rank e arquivos."
    ],
    recommendedRoute: ["Train Derailment", "Mansion Incident", "Raccoon's Destruction", "Umbrella's End", "Cenários de Wesker"],
    steps: [
      {
        title: "Recontagens principais",
        route: "Atravesse RE0, RE1 e RE3 em capítulos de tiro, reconhecendo que a rota é condensada.",
        objectives: ["Concluir capítulos base", "Derrotar chefes reencenados", "Coletar arquivos"],
        hazards: ["Inimigos surgindo fora de quadro", "Chefes com pontos fracos temporários"],
        bossStrategy: "Mire em pontos brilhantes ou expostos e guarde sub-armas para ondas grandes."
      },
      {
        title: "Umbrella's End",
        route: "Os capítulos finais levam Chris e Jill ao golpe contra a Umbrella e dão a Wesker sua própria sombra operacional.",
        objectives: ["Invadir instalação russa", "Derrotar B.O.W.s de Sergei", "Fechar a queda da Umbrella"],
        hazards: ["Tyrants", "Ataques em massa", "Bosses resistentes"],
        completionCheck: "Concluir cenários extras amplia contexto canon complementar."
      }
    ],
    bossNotes: ["Rail shooters recompensam memorização.", "Sub-armas são solução para grupos, não para cada inimigo."],
    completionChecklist: ["Fechar capítulos principais", "Abrir extras", "Coletar arquivos", "Melhorar ranks"],
    postGame: ["Volte para documentos e caminhos destrutíveis."],
    sourceRefs: ["capcom-history", "strategywiki-resident-evil", "re-fandom"]
  },
  {
    id: "walk-darkside-chronicles",
    mediaId: "darkside-chronicles",
    title: "The Darkside Chronicles - Memórias de Leon",
    continuity: "games-canon",
    difficulty: "médio",
    estimatedRun: "6 a 9 horas",
    spoilerLevel: "alto",
    intro:
      "Darkside Chronicles é memória armada. Ele reconta RE2 e Code: Veronica como lembrança instável e acrescenta Operation Javier, a cicatriz que explica Leon e Krauser antes de RE4. Para zerar, aceite o balanço da câmera como parte do medo e mire com antecedência.",
    preparation: [
      "Use tiros de precisão em cabeça e pontos fracos.",
      "Melhore armas entre capítulos.",
      "Guarde granadas/sub-armas para chefes.",
      "Rejogue por documentos e notas de contexto."
    ],
    recommendedRoute: ["Memories of a Lost City", "Game of Oblivion", "Operation Javier"],
    steps: [
      {
        title: "RE2 e Code: Veronica recontados",
        route: "Passe pelas versões condensadas de Raccoon e Rockfort, priorizando defesa de parceiro e coleta de arquivos.",
        objectives: ["Sobreviver a ondas", "Derrubar Birkin/Alexia reencenados", "Coletar arquivos"],
        hazards: ["Câmera instável", "Inimigos rápidos", "Chefes com fases múltiplas"]
      },
      {
        title: "Operation Javier",
        route: "A campanha inédita coloca Leon e Krauser na América do Sul. Mantenha dano constante, porque a missão escala para bioarmas grandes e arena apertada.",
        objectives: ["Investigar Javier Hidalgo", "Proteger Manuela", "Derrotar ameaça T-Veronica"],
        hazards: ["Criaturas aquáticas", "B.O.W.s grandes", "Ataques laterais"],
        bossStrategy: "Use upgrades e sub-armas nas fases finais; poupar demais só prolonga a luta."
      }
    ],
    bossNotes: ["Operation Javier é o bloco mais importante para lore.", "Chefes pedem leitura de ponto fraco."],
    completionChecklist: ["Concluir três arcos", "Abrir arquivos", "Entender a origem da relação Leon/Krauser"],
    postGame: ["Rejogue com upgrades e foco em ranks."],
    sourceRefs: ["capcom-history", "strategywiki-resident-evil", "re-fandom"]
  },
  {
    id: "walk-re4-remake-2023",
    mediaId: "re4-remake-2023",
    title: "Resident Evil 4 Remake - Resgate de Ashley",
    continuity: "games-canon",
    difficulty: "médio",
    estimatedRun: "14 a 20 horas na primeira campanha",
    spoilerLevel: "alto",
    intro:
      "RE4 Remake é uma procissão armada por vilarejos, castelos e metal industrial. Leon já sobreviveu a Raccoon, mas aqui o horror aprendeu a obedecer ordens. Para zerar, domine parry, posicionamento e economia com o Mercador. O jogo é generoso com armas, mas cruel com quem compra sem plano.",
    preparation: [
      "Escolha uma pistola principal e invista nela em vez de espalhar dinheiro demais.",
      "Use faca para parry, finalização e escapar de agarrões; repare sempre que possível.",
      "Venda tesouros com gemas combinadas para multiplicar valor.",
      "Guarde rifle para Plagas expostas, Regeneradores e alvos distantes."
    ],
    recommendedRoute: ["Vilarejo", "Casa do chefe e lago", "Castelo", "Ilha", "Saddler e fuga"],
    steps: [
      {
        title: "Vilarejo e sobrevivência inicial",
        route:
          "A primeira vila é teste de pânico. Corra, chute escadas, use casas como funis e não tente matar todos como se fosse arena limpa.",
        objectives: ["Sobreviver ao ataque inicial", "Resgatar Luis", "Derrotar Del Lago", "Abrir caminho ao castelo"],
        hazards: ["Ganados", "Dr. Salvador", "Colmillos", "El Gigante"],
        puzzleNotes: ["Explore santuários e pedidos do Mercador antes de pontos sem retorno."],
        bossStrategy: "Contra El Gigante, ataque a Plaga exposta e use ajuda/cenário quando disponível."
      },
      {
        title: "Castelo Salazar",
        route:
          "O castelo é teatro de culto. Proteja Ashley, resolva salas ornamentadas e trate monges com escudos como quebra-cabeças de posicionamento.",
        objectives: ["Reunir peças de acesso", "Proteger Ashley", "Derrotar Garrador, Verdugo e Salazar"],
        hazards: ["Cultistas", "Garradores", "Armaduras", "Novistadores"],
        puzzleNotes: ["Use som contra Garrador com cuidado; ele pune disparos ansiosos.", "Com Ashley, a ordem é reduzir risco antes de coletar luxo."],
        bossStrategy: "Verdugo pode ser congelado antes de receber dano pesado; Salazar exige mobilidade e tiros no corpo vulnerável."
      },
      {
        title: "Ilha e Saddler",
        route:
          "A ilha troca liturgia por laboratório militar. Regeneradores pedem escopo térmico, Krauser pede leitura de faca e Saddler pede tudo que você guardou.",
        objectives: ["Remover parasita", "Derrotar Krauser", "Salvar Ashley", "Finalizar Saddler"],
        hazards: ["Soldados Ganados", "Regeneradores", "Krauser", "Saddler"],
        puzzleNotes: ["Use rifle térmico para parasitas internos.", "Faça upgrades finais antes de atravessar para o confronto decisivo."],
        bossStrategy: "Contra Krauser, use parry e janelas curtas. Contra Saddler, ataque olhos expostos e use a arma especial quando Ada entregar a virada.",
        completionCheck: "A fuga de jet ski fecha a campanha; tesouros pendentes ficam para NG+."
      }
    ],
    bossNotes: ["Parry muda a sobrevivência.", "Regenerador sem escopo térmico vira desperdício.", "Krauser testa faca e calma."],
    completionChecklist: ["Concluir pedidos importantes", "Combinar tesouros com gemas", "Salvar Ashley", "Derrotar Saddler", "Escapar da ilha"],
    postGame: ["NG+ permite armas especiais e Professional.", "Busque castelões mecânicos e rank S+ com rota memorizada."],
    sourceRefs: ["capcom-history", "game8-re4-remake", "re-fandom-walkthroughs"]
  },
  {
    id: "walk-re4-2005",
    mediaId: "re4-2005",
    title: "Resident Evil 4 2005 - A rota do agente",
    continuity: "games-canon",
    difficulty: "médio",
    estimatedRun: "12 a 18 horas na primeira campanha",
    spoilerLevel: "alto",
    intro:
      "O RE4 original é ação de sobrevivência com febre de culto. Ele quer que você se sinta competente, depois joga uma motosserra na porta. Para zerar, domine a cadência: atire na perna, chute, reposicione, recarregue longe da multidão.",
    preparation: [
      "Invista em pistola, shotgun, rifle e uma magnum/arma forte para chefes.",
      "Organize a maleta para não abandonar recursos.",
      "Use granadas flash contra Plagas expostas.",
      "Venda tesouros depois de combinar peças."
    ],
    recommendedRoute: ["Vilarejo", "Castelo", "Ilha", "Fuga"],
    steps: [
      {
        title: "Vilarejo",
        route: "Sobreviva ao ataque inicial, resgate Luis/Ashley e atravesse lago, igreja e chefe da vila com upgrades básicos.",
        objectives: ["Sobreviver ao cerco", "Derrotar Del Lago", "Resgatar Ashley", "Vencer Mendez"],
        hazards: ["Ganados", "Dr. Salvador", "Del Lago", "Bitores Mendez"],
        bossStrategy: "Mendez pede uso de distância e dano pesado quando o corpo se divide."
      },
      {
        title: "Castelo",
        route: "Proteja Ashley, resolva chaves ornamentadas e avance por salões com cultistas até Salazar.",
        objectives: ["Passar por Garrador", "Atravessar salão de água", "Derrotar Verdugo/Salazar"],
        hazards: ["Cultistas", "Garrador", "Novistadores", "Armadilhas"],
        puzzleNotes: ["Armaduras e mecanismos do castelo exigem observar o cenário antes de atirar."]
      },
      {
        title: "Ilha",
        route: "Enfrente soldados, Regeneradores e Krauser. Use thermal scope nos parasitas e guarde magnum para chefes.",
        objectives: ["Remover Plaga", "Derrotar Krauser", "Finalizar Saddler"],
        hazards: ["Regeneradores", "JJ", "Krauser", "Saddler"],
        bossStrategy: "Krauser é vulnerável à faca no original; Saddler cai atacando olhos e usando rocket final."
      }
    ],
    bossNotes: ["Flash grenades destroem Plagas expostas.", "Faca é surpreendentemente forte contra Krauser.", "Rocket launcher pode resolver chefes se comprado."],
    completionChecklist: ["Salvar Ashley", "Remover parasita", "Derrotar Saddler", "Escapar da ilha"],
    postGame: ["Separate Ways, Assignment Ada e Mercenaries expandem extras.", "Professional exige melhor economia."],
    sourceRefs: ["capcom-history", "strategywiki-resident-evil", "re-fandom-walkthroughs"]
  },
  {
    id: "walk-re4r-separate-ways",
    mediaId: "re4r-separate-ways",
    title: "Separate Ways Remake - Arquivo Ada",
    continuity: "games-canon",
    difficulty: "médio",
    estimatedRun: "4 a 7 horas",
    spoilerLevel: "alto",
    intro:
      "Separate Ways é RE4 visto por uma lente vermelha, silenciosa e desconfiada. Ada não atravessa a missão de Leon; ela costura os buracos dela. Para zerar, use mobilidade, gancho e precisão. A campanha é menor, mas cobra resposta rápida.",
    preparation: [
      "Use o gancho para reposicionamento e ataques contextuais.",
      "Invista em pistola/SMG e rifle para ameaças especiais.",
      "Faça pedidos do Mercador quando estiverem no caminho.",
      "Guarde recursos para Pesanta, Krauser e Saddler."
    ],
    recommendedRoute: ["Vilarejo paralelo", "Castelo", "Ilha", "Amostra e fuga"],
    steps: [
      {
        title: "Sombra no vilarejo",
        route: "Avance por áreas conhecidas com rotas novas, buscando informações e mantendo distância emocional e tática.",
        objectives: ["Encontrar Luis", "Recuperar pistas", "Sobreviver a Pesanta"],
        hazards: ["Ganados", "Pesanta", "Plagas"],
        bossStrategy: "Pesanta pede leitura de ataques e dano em janelas curtas; não descarregue munição durante invulnerabilidade."
      },
      {
        title: "Castelo e ilha",
        route: "Use o gancho para atravessar arenas, cubra lacunas da rota de Leon e avance até a coleta da amostra.",
        objectives: ["Apoiar eventos de bastidor", "Confrontar Krauser", "Garantir amostra", "Escapar"],
        hazards: ["Cultistas", "Krauser", "Soldados", "Saddler"],
        completionCheck: "A campanha termina quando Ada escolhe o que fazer com a amostra e deixa Wesker em espera."
      }
    ],
    bossNotes: ["Mobilidade é defesa.", "Ada depende de burst damage e distância.", "A campanha recompensa upgrades focados."],
    completionChecklist: ["Concluir todos os capítulos", "Fazer pedidos úteis", "Sobreviver a Pesanta", "Obter a amostra"],
    postGame: ["Busque ranking e desafios com armas liberadas."],
    sourceRefs: ["capcom-history", "game8-re4-remake", "re-fandom"]
  },
  {
    id: "walk-revelations",
    mediaId: "revelations",
    title: "Resident Evil: Revelations - Queen Zenobia",
    continuity: "games-canon",
    difficulty: "médio",
    estimatedRun: "8 a 12 horas",
    spoilerLevel: "alto",
    intro:
      "Revelations volta ao terror de corredor dentro de um navio que range como se estivesse doente. Jill investiga conspiração, mas o jogo é sobre portas estanques, scanners e munição escondida sob ferrugem.",
    preparation: [
      "Use Genesis Scanner em salas recém-limpas para munição e ervas.",
      "Faça upgrades de armas conforme estilo: pistola confiável, shotgun defensiva, rifle para chefes.",
      "Economize choque/granadas para Ooze especiais.",
      "Leia episódios como blocos; revise antes de voltar após pausa."
    ],
    recommendedRoute: ["Queen Zenobia", "Flashbacks de Terragrigia", "Laboratórios do navio", "Conspiração FBC/Veltro"],
    steps: [
      {
        title: "Navio fantasma",
        route: "Explore cabines e salões usando scanner. O navio dobra sobre si mesmo, então abra atalhos e memorize elevadores.",
        objectives: ["Encontrar Chris", "Restaurar acessos", "Atravessar áreas inundadas"],
        hazards: ["Ooze", "Scagdead", "Água e emboscadas"],
        puzzleNotes: ["Scanner revela itens que tornam chefes mais baratos."],
        bossStrategy: "Scagdead pede distância, obstáculos e dano pesado no momento seguro."
      },
      {
        title: "Veltro e o laboratório",
        route: "A conspiração se fecha entre navio, satélite e vírus T-Abyss. Leve armas melhoradas para a reta final.",
        objectives: ["Revelar Morgan Lansdale", "Confrontar Norman", "Encerrar ameaça T-Abyss"],
        hazards: ["Hunters", "Ooze avançados", "Norman"],
        bossStrategy: "Norman usa teleporte/ilusões; observe o corpo real e ataque o ponto vulnerável quando exposto."
      }
    ],
    bossNotes: ["Scanner é economia de munição.", "Norman pune tiros precipitados.", "Raid Mode é pós-jogo, não rota canon."],
    completionChecklist: ["Concluir episódios", "Usar scanner regularmente", "Derrotar Norman", "Entender FBC/BSAA"],
    postGame: ["Raid Mode prolonga progressão de armas.", "Infernal muda distribuição de ameaças."],
    sourceRefs: ["capcom-history", "strategywiki-resident-evil", "re-fandom"]
  },
  {
    id: "walk-re5-lost-in-nightmares",
    mediaId: "re5-lost-in-nightmares",
    title: "Lost in Nightmares - Mansão de Spencer",
    continuity: "games-canon",
    difficulty: "médio",
    estimatedRun: "1 a 2 horas",
    spoilerLevel: "alto",
    intro:
      "Lost in Nightmares é memória ruim com carpete caro. Chris e Jill entram na mansão de Spencer sabendo que aquilo é armadilha, mas não sabendo o tamanho do preço. Para zerar, jogue como clássico: investigue, resolva e só lute quando o corredor fechar.",
    preparation: ["Explore antes de acionar eventos.", "Economize munição para Guardiões.", "Use cooperação para girar mecanismos e cobrir parceiro."],
    recommendedRoute: ["Mansão", "Prisões subterrâneas", "Confronto com Wesker"],
    steps: [
      {
        title: "Mansão e prisão",
        route: "Resolva emblemas e passagens até a área subterrânea. Nas prisões, evite Guardiões quando possível e use armadilhas do cenário.",
        objectives: ["Abrir rota subterrânea", "Sobreviver aos Guardiões", "Chegar a Spencer"],
        hazards: ["Guardião", "Pouca munição", "Escuridão"],
        bossStrategy: "Contra Wesker, sobreviva e ataque em janelas específicas; a cena é mais duelo roteirizado que combate comum."
      }
    ],
    bossNotes: ["Guardiões podem ser evitados.", "Wesker exige timing."],
    completionChecklist: ["Encontrar Spencer", "Sobreviver ao confronto", "Entender captura de Jill"],
    postGame: ["Rejogue em coop para rank e emblemas."],
    sourceRefs: ["capcom-history", "re-fandom"]
  },
  {
    id: "walk-re5-2009",
    mediaId: "re5-2009",
    title: "Resident Evil 5 - Kijuju e Uroboros",
    continuity: "games-canon",
    difficulty: "médio",
    estimatedRun: "10 a 14 horas",
    spoilerLevel: "alto",
    intro:
      "RE5 é luz forte sobre horror industrial. Chris e Sheva entram em Kijuju com treinamento militar, mas a missão cresce até encarar a mitologia inteira de Wesker. Para zerar, cooperação é arma: dividir munição, curar rápido e decidir quem carrega rifle, shotgun e cura.",
    preparation: [
      "Em coop ou solo, organize inventário dos dois personagens antes de cada capítulo.",
      "Venda tesouros e invista em poucas armas boas.",
      "Guarde granadas incendiárias contra Uroboros.",
      "Use melee após stun para economizar munição."
    ],
    recommendedRoute: ["Kijuju", "Pântanos e refinaria", "Ruínas", "Navio/laboratório Tricell", "Vulcão"],
    steps: [
      {
        title: "Kijuju e Majini",
        route:
          "A abertura é cerco. Segure posições, use barris e aprenda a controlar multidão com tiros em pernas/cabeça seguidos de melee.",
        objectives: ["Sobreviver ao ataque público", "Atravessar bairros", "Derrotar Executioner e motos"],
        hazards: ["Majini", "Executioner", "Chainsaw Majini"],
        bossStrategy: "Use cenário explosivo contra grupos e armas fortes contra minibosses."
      },
      {
        title: "Pântanos, ruínas e Jill",
        route:
          "A missão troca favela por ruína e depois por conspiração. Colete emblemas/chaves sem separar demais os parceiros.",
        objectives: ["Investigar Irving", "Atravessar ruínas", "Descobrir Jill", "Remover dispositivo de controle"],
        hazards: ["Lickers", "Majini armados", "Jill controlada"],
        bossStrategy: "Contra Jill, não tente matá-la. Segure, atire no dispositivo quando seguro e coordene aproximações."
      },
      {
        title: "Tricell, Uroboros e Wesker",
        route:
          "A reta final é laboratório, navio e delírio de superioridade. Entre com magnum/rifle e cura compartilhada.",
        objectives: ["Impedir plano Uroboros", "Derrotar Wesker", "Escapar no vulcão"],
        hazards: ["Uroboros", "Wesker", "Lickers Beta"],
        bossStrategy: "Use foguete contra Wesker em momento correto; no vulcão, atire pontos vulneráveis e mantenha distância de golpes amplos.",
        completionCheck: "A campanha termina quando Chris e Sheva encerram Wesker."
      }
    ],
    bossNotes: ["Incendiários destroem Uroboros.", "Jill é resgate, não execução.", "Wesker exige script e dano alto."],
    completionChecklist: ["Melhorar armas principais", "Dividir cura", "Remover controle de Jill", "Derrotar Wesker"],
    postGame: ["Mercenaries e New Game+ sustentam upgrades.", "Professional pede cooperação real."],
    sourceRefs: ["capcom-history", "re-fandom-walkthroughs", "strategywiki-resident-evil"]
  },
  {
    id: "walk-re5-desperate-escape",
    mediaId: "re5-desperate-escape",
    title: "Desperate Escape - Fuga de Jill e Josh",
    continuity: "games-canon",
    difficulty: "médio",
    estimatedRun: "1 a 2 horas",
    spoilerLevel: "médio",
    intro:
      "Desperate Escape é o corredor paralelo do final de RE5: Jill volta a si e precisa transformar culpa em movimento. O DLC é combate, pressão e cooperação.",
    preparation: ["Use cobertura e melee.", "Divida munição entre Jill e Josh.", "Guarde armas fortes para o cerco final."],
    recommendedRoute: ["Instalação Tricell", "Elevadores e docas", "Cerco final"],
    steps: [
      {
        title: "Fuga sob fogo",
        route: "Avance por arenas de Majini armados, acione mecanismos em dupla e não fique parado quando reforços chegarem.",
        objectives: ["Abrir portões", "Sobreviver a ondas", "Chegar ao helicóptero"],
        hazards: ["Majini armados", "Executioners", "Reforços contínuos"],
        bossStrategy: "No cerco final, use granadas e armas pesadas nos inimigos grandes enquanto mantém perímetro limpo."
      }
    ],
    bossNotes: ["Controle de multidão vale mais que precisão bonita."],
    completionChecklist: ["Escapar com Josh", "Sobreviver ao cerco", "Conectar com o final de RE5"],
    postGame: ["Rejogue por pontuação e dificuldade maior."],
    sourceRefs: ["capcom-history", "re-fandom"]
  },
  {
    id: "walk-revelations-2",
    mediaId: "revelations-2",
    title: "Resident Evil: Revelations 2 - Ilha de Alex Wesker",
    continuity: "games-canon",
    difficulty: "médio",
    estimatedRun: "8 a 12 horas",
    spoilerLevel: "alto",
    intro:
      "Revelations 2 é horror em duplas quebradas. Claire e Moira sobrevivem ao presente; Barry e Natalia caminham por ecos do que sobrou. Para zerar bem, use as habilidades complementares: uma mira, a outra encontra; um protege, a outra enxerga o perigo antes da porta.",
    preparation: [
      "Alterne personagens sempre: Moira encontra itens e cega inimigos; Natalia detecta ameaças.",
      "Economize munição usando furtividade com Barry quando possível.",
      "Procure peças de upgrade e caixas com personagens secundárias.",
      "Suas ações afetam final; trate momentos críticos com atenção."
    ],
    recommendedRoute: ["Episódio 1", "Episódio 2", "Episódio 3", "Episódio 4 e final"],
    steps: [
      {
        title: "Claire e Moira",
        route:
          "Avance por prisão, vila e instalações usando Moira para luz, pé de cabra e busca. Claire deve gastar munição só quando fuga não basta.",
        objectives: ["Escapar da prisão", "Encontrar TerraSave", "Sobreviver às experiências de medo"],
        hazards: ["Afflicted", "Revenants", "Armadilhas"],
        puzzleNotes: ["Use Moira para detectar brilho de itens.", "Caixas trancadas rendem upgrades essenciais."]
      },
      {
        title: "Barry e Natalia",
        route:
          "Barry revisita áreas depois do desastre. Natalia é radar vivo: pare antes de portas e veja inimigos através de paredes.",
        objectives: ["Rastrear Moira", "Explorar instalações antigas", "Confrontar Alex Wesker"],
        hazards: ["Revenants", "Invisible bugs", "Glasp"],
        bossStrategy: "Contra inimigos invisíveis, Natalia aponta direção; Barry atira quando a ameaça se revela."
      },
      {
        title: "Alex Wesker",
        route:
          "O final depende de coragem anterior e execução atual. Entre com armas melhoradas e use ambos os tempos da narrativa a seu favor.",
        objectives: ["Chegar à torre", "Derrotar Alex", "Garantir final desejado"],
        hazards: ["Alex mutada", "Áreas estreitas", "Dano alto"],
        bossStrategy: "Mire pontos vulneráveis e use munição pesada na fase final. Não fique preso em cantos.",
        completionCheck: "O melhor final depende da decisão correta no momento crucial de Moira."
      }
    ],
    bossNotes: ["Natalia é ferramenta contra invisíveis.", "Moira é utilidade, não peso.", "Alex exige recursos guardados."],
    completionChecklist: ["Completar quatro episódios", "Buscar caixas e upgrades", "Escolher ação que libera melhor final", "Derrotar Alex"],
    postGame: ["Raid Mode e capítulos extras expandem replay.", "Rejogue para emblemas e documentos."],
    sourceRefs: ["capcom-history", "re-fandom-walkthroughs"]
  },
  {
    id: "walk-re6-2012",
    mediaId: "re6-2012",
    title: "Resident Evil 6 - Campanhas cruzadas",
    continuity: "games-canon",
    difficulty: "médio",
    estimatedRun: "20 a 30 horas para todas as campanhas",
    spoilerLevel: "alto",
    intro:
      "RE6 é uma crise global contada em estilhaços. Leon vive conspiração presidencial, Chris atravessa trauma militar, Jake carrega sangue de Wesker, Ada costura a mentira por baixo. Para zerar, não procure uma única cadência: cada campanha muda o tipo de Resident Evil que está jogando.",
    preparation: [
      "Complete Leon, Chris, Jake e Ada para entender a história inteira.",
      "Compre skills que reforcem dano, defesa e drop de munição.",
      "Use melee, counters e quick shots; o jogo foi balanceado para ação constante.",
      "Em coop, divida papéis durante chefes e perseguições."
    ],
    recommendedRoute: ["Leon", "Chris", "Jake", "Ada"],
    steps: [
      {
        title: "Leon e Helena",
        route:
          "Comece pela campanha mais próxima do horror: Tall Oaks, catacumbas e conspiração. Ela ensina C-Virus sem abandonar totalmente a linguagem clássica.",
        objectives: ["Escapar de Tall Oaks", "Investigar Simmons", "Chegar a Lanshiang"],
        hazards: ["Zumbis C-Virus", "Lepotitsa", "Simmons"],
        bossStrategy: "Simmons tem várias formas; use armas fortes nos pontos expostos e aproveite itens de arena."
      },
      {
        title: "Chris e Piers",
        route:
          "Chris é guerra urbana e memória quebrada. Use cobertura, rifles e coordenação contra J'avo armados.",
        objectives: ["Sobreviver a Edonia", "Recuperar memória", "Confrontar Neo-Umbrella"],
        hazards: ["J'avo", "Ogroman", "Haos"],
        bossStrategy: "Haos é fuga e dano em fases. Não lute quando o jogo manda correr."
      },
      {
        title: "Jake, Sherry e Ada",
        route:
          "Jake e Sherry equilibram perseguição de Ustanak e fuga. Ada revela bastidores e fecha lacunas.",
        objectives: ["Escapar de Ustanak", "Proteger anticorpos de Jake", "Expor Carla/Simmons"],
        hazards: ["Ustanak", "Neo-Umbrella", "Armadilhas solo de Ada"],
        puzzleNotes: ["Ada tem trechos solo com puzzles e crossbow; use silêncio e precisão."],
        completionCheck: "RE6 está zerado narrativamente quando as quatro campanhas terminam."
      }
    ],
    bossNotes: ["Ustanak é perseguidor recorrente.", "Simmons e Haos são finais de escala alta.", "Melee economiza munição em todas as campanhas."],
    completionChecklist: ["Concluir quatro campanhas", "Comprar skills úteis", "Usar counters", "Entender cruzamentos de cenas"],
    postGame: ["Mercenaries e dificuldades maiores são o verdadeiro domínio mecânico."],
    sourceRefs: ["capcom-history", "re-fandom-walkthroughs"]
  },
  {
    id: "walk-re7-banned-footage",
    mediaId: "re7-banned-footage",
    title: "Banned Footage - Fitas da casa Baker",
    continuity: "games-canon",
    difficulty: "médio",
    estimatedRun: "30 minutos a 2 horas por fita/modo",
    spoilerLevel: "médio",
    intro:
      "Banned Footage parece material extra, mas funciona como caixa preta da casa Baker. Cada fita é uma regra cruel inventada por Lucas ou pela própria infecção.",
    preparation: ["Leia objetivo da fita antes de agir.", "Em Bedroom, observe posição de objetos.", "Em Nightmare, pense em economia de scrap e ondas."],
    recommendedRoute: ["Bedroom", "Nightmare", "21", "Daughters", "Extras lúdicos"],
    steps: [
      {
        title: "Fitas narrativas",
        route: "Bedroom é escape room sob vigilância; Daughters mostra a queda da família antes do horror virar rotina.",
        objectives: ["Escapar sem alertar Marguerite", "Ver a origem da noite Baker"],
        hazards: ["Marguerite", "Puzzles de observação", "Escolhas de rota"],
        puzzleNotes: ["Em Bedroom, recoloque objetos exatamente como estavam antes de Marguerite voltar."]
      },
      {
        title: "Modos de sobrevivência",
        route: "Nightmare e 21 são jogos de Lucas: um testa ondas, outro testa leitura de risco.",
        objectives: ["Sobreviver até o fim", "Administrar recursos", "Vencer apostas mortais"],
        hazards: ["Molded", "Armadilhas", "Dano acumulado"]
      }
    ],
    bossNotes: ["O inimigo principal é regra desconhecida; observe antes de correr."],
    completionChecklist: ["Concluir Bedroom", "Concluir Daughters", "Experimentar Nightmare/21", "Separar canon de modos lúdicos"],
    postGame: ["Volte para finais/variações de Daughters."],
    sourceRefs: ["capcom-history", "gamepressure-re7", "re-fandom"]
  },
  {
    id: "walk-re7-2017",
    mediaId: "re7-2017",
    title: "Resident Evil 7 - Casa dos Baker",
    continuity: "games-canon",
    difficulty: "alto",
    estimatedRun: "9 a 13 horas na primeira campanha",
    spoilerLevel: "alto",
    intro:
      "RE7 começa como desaparecimento doméstico e termina como relatório de arma biológica. Ethan não é soldado; por isso cada bala parece pessoal. Para zerar, avance como invasor em casa alheia: escute, feche portas, guarde recursos e aceite que a família Baker volta quando você acha que a cena acabou.",
    preparation: [
      "Bloqueie ataques; defesa reduz dano e salva cura.",
      "Use psychostimulants quando estiver em área grande com muitos itens.",
      "Guarde munição enhanced para chefes e Molded fortes.",
      "Separe fitas VHS como treinos de puzzle antes da versão real."
    ],
    recommendedRoute: ["Guest House", "Main House", "Old House", "Testing Area", "Boat House", "Wrecked Ship", "Salt Mine"],
    steps: [
      {
        title: "Guest House e Main House",
        route:
          "O começo é invasão íntima: Mia, jantar, Jack e o primeiro circuito de chaves. Abra a Main House por objetivos curtos e transforme save rooms em abrigo psicológico.",
        objectives: ["Sobreviver a Mia", "Escapar do jantar", "Pegar dog heads", "Derrotar Jack na garagem e necrotério"],
        hazards: ["Mia infectada", "Jack Baker", "Molded"],
        puzzleNotes: ["Shadow puzzles pedem alinhar silhueta, não força bruta.", "Scorpion key e shotgun exigem troca/observação."],
        bossStrategy: "Contra Jack, use motosserra/arma da arena quando disponível e bloqueie investidas."
      },
      {
        title: "Old House, Marguerite e Lucas",
        route:
          "A casa velha é inseto, madeira e febre. Depois, Lucas transforma sobrevivência em programa de auditório sádico.",
        objectives: ["Encontrar braço/soro", "Derrotar Marguerite", "Resolver festa de Lucas", "Chegar ao boat house"],
        hazards: ["Insetos", "Marguerite", "Armadilhas explosivas"],
        puzzleNotes: ["Queime ninhos para abrir rotas.", "Na festa de Lucas, resolva a sequência evitando repetir o destino da fita."],
        bossStrategy: "Marguerite mutada pede fogo e atenção aos buracos/parede de onde surge."
      },
      {
        title: "Navio, Eveline e mina",
        route:
          "A história abre a verdade de Mia e Eveline. No navio, recupere fitas e fusíveis; na mina, gaste o arsenal que guardou.",
        objectives: ["Restaurar elevador do navio", "Criar necrotoxin", "Atravessar mina", "Confrontar Eveline"],
        hazards: ["Molded fortes", "Fat Molded", "Eveline"],
        bossStrategy: "Na mina, use neuro rounds e munição forte. Contra Eveline, avance quando o jogo permitir e atire no clímax.",
        completionCheck: "A escolha do soro muda cena, mas a rota canon posterior considera Mia sobrevivente."
      }
    ],
    bossNotes: ["Bloqueio salva vida.", "Jack e Marguerite têm arenas com ferramentas.", "Lucas é puzzle e armadilha antes de combate."],
    completionChecklist: ["Coletar dog heads", "Criar soro", "Completar navio", "Produzir necrotoxin", "Derrotar Eveline"],
    postGame: ["Madhouse muda itens e fitas, exigindo nova rota.", "Not a Hero e End of Zoe fecham pontas."],
    sourceRefs: ["capcom-history", "gamepressure-re7", "re-fandom-walkthroughs"]
  },
  {
    id: "walk-re7-not-a-hero",
    mediaId: "re7-not-a-hero",
    title: "Not a Hero - Operação Chris",
    continuity: "games-canon",
    difficulty: "médio",
    estimatedRun: "1 a 2 horas",
    spoilerLevel: "médio",
    intro:
      "Not a Hero troca a vulnerabilidade de Ethan pela entrada tática de Chris, mas Lucas ainda escreve as regras com explosivos e veneno.",
    preparation: ["Use munição RAMROD contra Molded especiais.", "Observe fios e armadilhas.", "Volte às ramificações quando conseguir filtros/equipamentos."],
    recommendedRoute: ["Mina central", "Filtros e chaves", "Lucas final"],
    steps: [
      {
        title: "Mina de sal",
        route: "Use a área central como hub, recupere equipamentos para atravessar gás e portas travadas, e não confie em cadáver limpo demais.",
        objectives: ["Resgatar soldados", "Obter filtro de alto grau", "Perseguir Lucas"],
        hazards: ["Molded blindados", "Gás", "Bombas de Lucas"],
        bossStrategy: "Contra Lucas mutado, acerte pontos vulneráveis e recarregue oxigênio quando a arena permitir."
      }
    ],
    bossNotes: ["RAMROD é recurso para alvo específico.", "Armadilhas causam mais dano que muitos inimigos."],
    completionChecklist: ["Obter filtros", "Encontrar Lucas", "Derrotar mutação", "Encerrar evidências da Connections"],
    postGame: ["Dificuldade Professional pede memorização de armadilhas."],
    sourceRefs: ["capcom-history", "gamepressure-re7", "re-fandom"]
  },
  {
    id: "walk-re7-end-of-zoe",
    mediaId: "re7-end-of-zoe",
    title: "End of Zoe - Punhos no pântano",
    continuity: "games-canon",
    difficulty: "médio",
    estimatedRun: "1 a 2 horas",
    spoilerLevel: "médio",
    intro:
      "End of Zoe é Resident Evil pantanoso e bruto. Joe Baker não entra com arsenal, entra com punhos, comida e teimosia familiar.",
    preparation: ["Use combos corpo a corpo.", "Coma insetos/itens para cura quando necessário.", "Guarde lanças e recursos especiais para Molded grandes."],
    recommendedRoute: ["Pântano", "Barcos e cabanas", "Confronto final"],
    steps: [
      {
        title: "Salvar Zoe",
        route: "Carregue Zoe entre trechos, atravesse o pântano e use combate corpo a corpo para abrir passagem.",
        objectives: ["Encontrar cura", "Proteger Zoe", "Enfrentar Jack calcificado"],
        hazards: ["Molded", "Jacarés", "Jack mutado"],
        bossStrategy: "Use luva AMG quando disponível; esquive, ataque em combos e cure entre fases."
      }
    ],
    bossNotes: ["A campanha recompensa agressividade controlada.", "Jack exige timing de esquiva."],
    completionChecklist: ["Levar Zoe até a cura", "Sobreviver ao pântano", "Derrotar Jack final"],
    postGame: ["Extreme Challenges mudam ritmo para pontuação."],
    sourceRefs: ["capcom-history", "gamepressure-re7", "re-fandom"]
  },
  {
    id: "walk-re-village-2021",
    mediaId: "re-village-2021",
    title: "Resident Evil Village - Quatro Lordes",
    continuity: "games-canon",
    difficulty: "médio",
    estimatedRun: "10 a 15 horas na primeira campanha",
    spoilerLevel: "alto",
    intro:
      "Village é conto de fadas contaminado por laboratório. Ethan atravessa uma vila que parece antiga demais para ser inocente: castelo, boneca, água podre, fábrica. Para zerar, siga os Lordes como capítulos de um pesadelo; cada domínio tem regra própria.",
    preparation: [
      "Venda tesouros combináveis só depois de completar conjuntos.",
      "Cace animais para melhorias permanentes do Duke.",
      "Invista em pistola/shotgun e guarde magnum para chefes.",
      "Volte à vila entre Lordes para abrir caminhos com novas chaves."
    ],
    recommendedRoute: ["Ataque inicial da vila", "Castelo Dimitrescu", "Casa Beneviento", "Reservatório Moreau", "Fábrica Heisenberg", "Miranda"],
    steps: [
      {
        title: "Vila e Castelo Dimitrescu",
        route:
          "Sobreviva ao ataque inicial sem tentar vencer a aldeia inteira. No castelo, explore por chaves, máscaras e janelas de fuga enquanto as filhas e Alcina pressionam.",
        objectives: ["Sobreviver aos Lycans", "Obter quatro máscaras", "Derrotar as filhas", "Vencer Dimitrescu"],
        hazards: ["Lycans", "Filhas Dimitrescu", "Alcina"],
        puzzleNotes: ["Use frio/janelas contra as filhas.", "Máscaras fecham o ciclo do castelo."],
        bossStrategy: "Contra Dimitrescu, mire o corpo exposto sobre a criatura e use rifle quando ela se afastar."
      },
      {
        title: "Beneviento e Moreau",
        route:
          "Beneviento remove armas para atacar nervos; Moreau devolve armas e afoga o mapa. Em ambos, observe antes de correr.",
        objectives: ["Resolver puzzle da boneca", "Escapar do bebê", "Drenar reservatório", "Derrotar Moreau"],
        hazards: ["Perseguição sem combate", "Peixes/Moreau", "Ácido"],
        puzzleNotes: ["Na casa Beneviento, cada parte da boneca aponta para senha/rota.", "No reservatório, acione plataformas na ordem segura."],
        bossStrategy: "Contra Moreau, ataque quando ele expõe o corpo humano e use cobertura contra ácido."
      },
      {
        title: "Fábrica e Miranda",
        route:
          "A fábrica é o estômago industrial da vila. Soldats pedem tiros em núcleos, elevadores viram atalhos e Heisenberg troca horror por metal em fúria.",
        objectives: ["Subir a fábrica", "Derrotar Sturm", "Enfrentar Heisenberg", "Chegar a Miranda"],
        hazards: ["Soldats", "Sturm", "Heisenberg", "Miranda"],
        bossStrategy: "Use rifle/shotgun nos núcleos dos Soldats. Contra Miranda, guarde magnum e minas para fases mais agressivas.",
        completionCheck: "A história fecha quando Ethan salva Rose e Chris descobre o problema da BSAA."
      }
    ],
    bossNotes: ["Cada Lorde tem regra própria.", "Duke é economia e progressão.", "Miranda exige arsenal final."],
    completionChecklist: ["Pegar frascos de Rose", "Abrir tesouros entre capítulos", "Melhorar Ethan com comida", "Derrotar Miranda"],
    postGame: ["Village of Shadows exige NG+ e armas melhoradas.", "Mercenaries e Shadows of Rose expandem pós-jogo."],
    sourceRefs: ["capcom-history", "gamespot-village-guide", "gamefaqs-guides", "re-fandom-walkthroughs"]
  },
  {
    id: "walk-village-shadows-of-rose",
    mediaId: "village-shadows-of-rose",
    title: "Shadows of Rose - Memória do Megamiceto",
    continuity: "games-canon",
    difficulty: "médio",
    estimatedRun: "2 a 4 horas",
    spoilerLevel: "alto",
    intro:
      "Shadows of Rose é uma descida para dentro de memória viva. Rose não atravessa lugares; atravessa versões corrompidas do que o Megamiceto guardou.",
    preparation: ["Use poderes para travar núcleos e abrir caminhos.", "Economize munição para Molded especiais.", "Leia o ambiente: ele muda como lembrança instável."],
    recommendedRoute: ["Castelo distorcido", "Casa Beneviento", "Núcleo final"],
    steps: [
      {
        title: "Castelo e bonecas",
        route: "Use poderes de Rose para limpar obstáculos e sobreviva a versões deformadas dos domínios de Village.",
        objectives: ["Encontrar cristais/máscaras", "Escapar da perseguição das bonecas", "Aceitar poderes"],
        hazards: ["Molded", "Bonecas", "Armadilhas de memória"],
        puzzleNotes: ["Poderes funcionam como chave e defesa; não tente resolver tudo com munição."]
      },
      {
        title: "Miranda na consciência",
        route: "A reta final confronta Rose com a tentativa de Miranda de possuir o futuro.",
        objectives: ["Chegar ao núcleo", "Usar poderes completos", "Derrotar Miranda"],
        hazards: ["Miranda", "Ataques de arena", "Pouca margem de erro"],
        bossStrategy: "Use poderes defensivos/ofensivos conforme tutorial final e ataque nas janelas após padrões."
      }
    ],
    bossNotes: ["Poderes de Rose substituem parte da lógica de armas.", "Miranda é confronto emocional e mecânico."],
    completionChecklist: ["Completar domínios de memória", "Desbloquear poderes", "Derrotar Miranda", "Fechar Saga Winters"],
    postGame: ["Rejogue para colecionáveis e leitura completa de documentos."],
    sourceRefs: ["capcom-history", "gamespot-village-guide", "re-fandom"]
  },
  {
    id: "walk-re-requiem-2026",
    mediaId: "re-requiem-2026",
    title: "Resident Evil Requiem - Retorno a Raccoon",
    continuity: "games-canon",
    difficulty: "alto",
    estimatedRun: "12 a 18 horas, conforme exploração",
    spoilerLevel: "alto",
    intro:
      "Requiem volta a Raccoon City como quem retorna a uma cena de crime depois de décadas: a poeira assentou, mas a culpa não. Grace Ashcroft joga pelo medo e pela análise; Leon entra carregando ação e dívida histórica. Este guia trata a campanha em macro-rota para evitar copiar soluções externas e marca a seção como spoiler alto.",
    preparation: [
      "Use Grace com mentalidade de survival horror: observe, economize, resolva puzzles antes de criar barulho.",
      "Com Leon, aceite ritmo mais agressivo, mas não desperdice munição em inimigos que o cenário permite contornar.",
      "Colete moedas, lockpicks e documentos antes de atravessar pontos de transição.",
      "Faça saves manuais antes de escolhas de final e grandes puzzles."
    ],
    recommendedRoute: ["Rhodes Hill Care Center", "Wrenwood/rotas de investigação", "Ruínas de Raccoon City", "R.P.D.", "Escolha final ligada a Elpis"],
    steps: [
      {
        title: "Rhodes Hill Care Center",
        route:
          "A clínica é o primeiro grande labirinto: cartões de ala, caixas de puzzle, portas simbólicas e uma criatura que transforma corredor em sentença. Avance por alas, colete chaves e só enfrente quando fuga deixar de ser opção.",
        objectives: ["Encontrar fusível", "Obter keycards das alas", "Resolver caixas/puzzles principais", "Escapar da clínica"],
        hazards: ["Perseguidor humanoide", "Portas de segurança", "Recursos escassos"],
        puzzleNotes: ["Revise documentos da própria clínica; a maioria das soluções é ensinada pelo ambiente.", "Antes de sair da ala oeste/leste, confira lockpicks e colecionáveis."],
        completionCheck: "A clínica está vencida quando Grace deixa de apenas sobreviver e passa a entender o padrão do caso."
      },
      {
        title: "Raccoon City e R.P.D.",
        route:
          "A cidade em ruínas é geografia e ferida. Procure peças de detonação, combustível, containers e acessos antes de entrar no R.P.D.; lá dentro, a nostalgia funciona como armadilha para quem para de olhar o mapa.",
        objectives: ["Reunir peças de detonação", "Abrir containers/atalhos", "Explorar R.P.D.", "Resolver caças e cofres opcionais"],
        hazards: ["Infectados urbanos", "Áreas destruídas", "Easter eggs que desviam da rota principal"],
        puzzleNotes: ["Use o mapa para separar objetivo principal de caça opcional.", "Cofres e Mr. Raccoons ajudam progressão, mas não substituem munição economizada."]
      },
      {
        title: "Elpis e finais",
        route:
          "A reta final pede decisão. Antes de escolher, salve em arquivo separado, revise documentos e entre com armas fortes distribuídas entre estilos de Grace e Leon.",
        objectives: ["Chegar ao núcleo do caso", "Tomar decisão final", "Ver variação de encerramento"],
        hazards: ["Chefes finais", "Spoilers de personagem", "Escolha irreversível sem save separado"],
        bossStrategy: "Use recursos fortes apenas quando o chefe expõe janela real de dano. Em perseguições, correr certo vale mais que atirar bonito.",
        completionCheck: "Para ver tudo, refaça a decisão final a partir de save separado."
      }
    ],
    bossNotes: ["Grace favorece fuga, puzzle e conservação.", "Leon sustenta arenas mais agressivas.", "A escolha final deve ser preservada com save dedicado."],
    completionChecklist: ["Escapar do Care Center", "Investigar Raccoon City", "Explorar R.P.D.", "Salvar antes de Elpis", "Ver os finais principais"],
    postGame: ["Volte para cofres, Mr. Raccoons, moedas e rotas alternativas.", "Use fontes atualizadas quando buscar soluções milimétricas de colecionáveis."],
    sourceRefs: ["capcom-requiem", "capcom-requiem-stats", "gamesradar-requiem-guide", "re-fandom"]
  },
  {
    id: "walk-operation-raccoon-city",
    mediaId: "operation-raccoon-city",
    title: "Operation Raccoon City - Wolfpack",
    continuity: "alternate",
    difficulty: "médio",
    estimatedRun: "6 a 9 horas",
    spoilerLevel: "médio",
    intro:
      "Operation Raccoon City é uma realidade alternativa com botas da Umbrella no asfalto. Para zerar, jogue como shooter cooperativo: classe, cobertura, habilidade e foco de alvo importam mais que horror clássico.",
    preparation: [
      "Escolha classe conforme equipe: médico, assault, recon e demolição mudam ritmo.",
      "Use habilidades ativas em cooldown, não guarde para uma emergência que talvez não venha.",
      "Priorize soldados inimigos antes de zumbis se ambos atacarem.",
      "Em coop, marque B.O.W.s e flanqueie."
    ],
    recommendedRoute: ["Containment", "Corruption", "Lights Out", "Gone Rogue", "Expendable", "Redemption", "End of the Line"],
    steps: [
      {
        title: "Operações da Umbrella",
        route: "Avance por missões limpando objetivos militares, destruindo evidências e cruzando eventos conhecidos por ângulo alternativo.",
        objectives: ["Cumprir objetivos de missão", "Neutralizar forças Spec Ops", "Sobreviver a B.O.W.s"],
        hazards: ["Soldados", "Zumbis", "Lickers", "Nemesis"],
        bossStrategy: "Contra B.O.W.s, mantenha distância e use explosivos/armas pesadas coordenadas."
      }
    ],
    bossNotes: ["A dificuldade cai com cooperação real.", "Fogo cruzado militar mata mais rápido que zumbis."],
    completionChecklist: ["Concluir campanhas USS/Spec Ops quando disponíveis", "Usar classes complementares", "Tratar como continuidade alternativa"],
    postGame: ["Rejogue por dificuldade, colecionáveis e multiplayer."],
    sourceRefs: ["capcom-history", "re-fandom-walkthroughs"]
  },
  {
    id: "walk-mercenaries-3d",
    mediaId: "mercenaries-3d",
    title: "The Mercenaries 3D - Guia de pontuação",
    continuity: "non-canon",
    difficulty: "médio",
    estimatedRun: "Sessões de 5 a 15 minutos",
    spoilerLevel: "baixo",
    intro:
      "Mercenaries 3D não se zera como campanha; domina-se. O objetivo é sobreviver, manter combo e entender cada arena como relógio de inimigos.",
    preparation: [
      "Escolha personagem pelo loadout, não só preferência.",
      "Memorize bônus de tempo.",
      "Mantenha combo vivo com inimigos fracos.",
      "Use armas fortes para minibosses."
    ],
    recommendedRoute: ["Missões tutorial", "Arenas intermediárias", "Arenas avançadas", "Busca por ranks"],
    steps: [
      {
        title: "Combos e tempo",
        route: "Corra por bônus de tempo primeiro, depois estabilize uma rota circular para inimigos.",
        objectives: ["Estender cronômetro", "Manter combo", "Sobreviver a minibosses"],
        hazards: ["Chainsaw", "Executioner", "Majini/Ganados em massa"],
        bossStrategy: "Use granadas e armas fortes em minibosses para não quebrar combo."
      }
    ],
    bossNotes: ["Combo é mais importante que matar rápido sem ordem."],
    completionChecklist: ["Abrir arenas", "Experimentar personagens", "Buscar ranks altos"],
    postGame: ["Rejogue até memorizar spawns."],
    sourceRefs: ["capcom-history", "strategywiki-resident-evil", "re-fandom"]
  },
  {
    id: "walk-resistance",
    mediaId: "resistance",
    title: "Resident Evil Resistance - Sobreviventes e Mastermind",
    continuity: "uncertain",
    difficulty: "médio",
    estimatedRun: "Partidas de 10 a 20 minutos",
    spoilerLevel: "baixo",
    intro:
      "Resistance é experimento multiplayer: quatro cobaias contra uma mente que monta o laboratório em tempo real. Não existe final canon robusto; existe extração.",
    preparation: [
      "Como sobrevivente, cumpra objetivo antes de caçar inimigos.",
      "Como Mastermind, desgaste tempo com armadilhas, portas e pressão em pontos-chave.",
      "Compre recursos entre áreas.",
      "Fique com a equipe; isolamento alimenta o experimento."
    ],
    recommendedRoute: ["Área 1 - chaves", "Área 2 - segurança", "Área 3 - biocores"],
    steps: [
      {
        title: "Extração",
        route: "Avance em equipe, encontre objetivos e evite gastar tempo em combates sem ganho.",
        objectives: ["Coletar chaves", "Derrubar segurança", "Destruir biocores", "Escapar"],
        hazards: ["Armadilhas", "Zumbis controlados", "Tyrant/B.O.W. do Mastermind"],
        bossStrategy: "Quando o Mastermind invocar B.O.W., kite e cumpra objetivo se possível; matar nem sempre é necessário."
      }
    ],
    bossNotes: ["Tempo é barra de vida da equipe.", "Mastermind vence atrasando decisões."],
    completionChecklist: ["Escapar como sobrevivente", "Vencer como Mastermind", "Aprender mapas"],
    postGame: ["Progressão depende de partidas e builds."],
    sourceRefs: ["capcom-history", "re-fandom"]
  },
  {
    id: "walk-reverse",
    mediaId: "reverse",
    title: "Resident Evil Re:Verse - Arena de aniversário",
    continuity: "non-canon",
    difficulty: "baixo",
    estimatedRun: "Partidas curtas",
    spoilerLevel: "baixo",
    intro:
      "Re:Verse é celebração de arena, não capítulo de lore. Para 'zerar', pense em completar desafios, aprender personagens e aceitar que morrer vira parte da ofensiva.",
    preparation: ["Aprenda arma e habilidade de cada personagem.", "Pegue cápsulas virais para mutações melhores.", "Use transformação pós-morte para virar o placar."],
    recommendedRoute: ["Treino", "Partidas online", "Desafios/eventos"],
    steps: [
      {
        title: "Ciclo humano/B.O.W.",
        route: "Cause dano como personagem, colete vírus e use mutação para confirmar eliminações.",
        objectives: ["Somar pontos", "Controlar power-ups", "Usar B.O.W. com agressividade"],
        hazards: ["Outros jogadores", "Tempo de partida", "Mapas pequenos"]
      }
    ],
    bossNotes: ["Não há chefes canon; há transformações temporárias."],
    completionChecklist: ["Testar elenco", "Completar desafios", "Separar modo de qualquer timeline canon"],
    postGame: ["Jogue por eventos e cosméticos se disponíveis."],
    sourceRefs: ["capcom-history", "re-fandom"]
  }
];

export const walkthroughByMediaId = new Map(walkthroughs.map((guide) => [guide.mediaId, guide]));
