# Resident Evil Timeline - Umbrella Archive

Enciclopedia visual em portugues sobre Resident Evil, estruturada como um dossie secreto da Umbrella.

O projeto cobre jogos principais, remakes, spin-offs, DLCs, filmes live-action, filmes CGI, series, novelizacoes, livros, HQs, mangas, personagens, organizacoes, locais, virus, parasitas, fungos, B.O.W.s e comparacoes de continuidade.

## Separacao de continuidades

O site nao mistura tudo como uma unica linha do tempo. Cada item recebe uma nota de canon:

- Canon dos jogos
- Continuidade CGI/canon proximo aos jogos
- Continuidade dos filmes live-action
- Reboot
- Serie Netflix / continuidade alternativa
- Novelizacao
- HQ/manga
- Nao-canonico
- Incerto ou interpretacao

Exemplo editorial: os filmes live-action com Alice sao uma continuidade alternativa inspirada nos jogos, mas nao fazem parte da timeline principal dos games.

## Midias cobertas

- Jogos principais: RE1 a Resident Evil Requiem
- Remakes: RE1, RE2, RE3 e RE4
- Spin-offs: Survivor, Outbreak, Dead Aim, Chronicles, Revelations, Resistance, Re:Verse e outros
- DLCs: Lost in Nightmares, Desperate Escape, Not a Hero, End of Zoe, Shadows of Rose e Separate Ways
- Filmes live-action: saga Paul W. S. Anderson e Welcome to Raccoon City
- CGI/animações: 4D-Executer, Degeneration, Damnation, Vendetta, Death Island
- Séries: Infinite Darkness e Resident Evil Netflix 2022
- Livros e novelizações: ciclo S. D. Perry, novelizações dos filmes e guias/lore books
- HQs/mangás: Official Comic Magazine, Fire & Ice, Marhawa Desire, Heavenly Island e materiais relacionados

## Fontes usadas

- Capcom - Resident Evil History: https://game.capcom.com/residentevil/sp/en/re-history.html
- Resident Evil Portal / Capcom: https://game.capcom.com/residentevil/en/
- Capcom IR - Resident Evil Requiem: https://www.capcom.co.jp/ir/english/news/html/e250609.html
- Resident Evil.Net / Requiem: https://game.capcom.com/residentevil/en/requiemstats.html
- Wikipédia PT - Resident Evil: https://pt.wikipedia.org/wiki/Resident_Evil
- Resident Evil Wiki / Fandom: https://residentevil.fandom.com/wiki/Resident_Evil_Wiki
- Resident Evil Wiki - Timeline by media: https://residentevil.fandom.com/wiki/Timeline_by_media
- REVIL: https://residentevil.com.br/
- IMDb: https://www.imdb.com/find/?q=Resident%20Evil
- Rotten Tomatoes: https://www.rottentomatoes.com/search?search=resident%20evil

As fontes secundarias sao usadas para conferencia e organizacao. Quando uma informacao e incerta, derivada ou alternativa, ela e marcada no campo `canonNote`.

## Estrutura

```text
src/data/
  timeline.ts
  games.ts
  remakes.ts
  spinOffs.ts
  dlcs.ts
  moviesLiveAction.ts
  moviesCgi.ts
  series.ts
  novels.ts
  books.ts
  comicsManga.ts
  characters.ts
  organizations.ts
  biohazards.ts
  locations.ts
  continuities.ts
  sources.ts
  releaseOrder.ts
  recommendedOrder.ts
  glossary.ts
  fullHistories.ts

src/components/
  MediaLibrary.tsx
  ContinuityTabs.tsx
  MediaCard.tsx
  SourceCard.tsx
  CanonBadge.tsx
  DetailModal.tsx
  ComparisonTable.tsx
  EncyclopediaSearch.tsx
  RemakeComparison.tsx
  BiologicalThreatTable.tsx
  TimelineContinuitySelector.tsx
```

`fullHistories.ts` concentra narrativas longas por `id` para jogos, acontecimentos da timeline e ameaças biológicas. O modal de detalhes e os cards de timeline renderizam esses blocos como "História completa", mantendo texto editorial fora dos componentes.

## Como rodar

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Lint e build

```bash
npm run lint
npm run build
```

## Deploy na Vercel

1. Envie o repositorio para o GitHub.
2. Importe o projeto na Vercel.
3. Use as configuracoes padrao de Next.js.
4. Build command: `npm run build`.
5. Output: gerenciado automaticamente pelo Next.js.

Nao ha backend, banco de dados, API externa em runtime ou secrets.
