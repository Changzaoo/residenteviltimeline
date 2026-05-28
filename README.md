# Resident Evil Timeline - Umbrella Archive

Enciclopedia visual em portugues sobre Resident Evil, estruturada como um dossie secreto da Umbrella.

O projeto cobre jogos principais, remakes, spin-offs, DLCs, filmes live-action, filmes CGI, series, novelizacoes, livros, HQs, mangas, personagens, organizacoes, locais, virus, parasitas, fungos, B.O.W.s e comparacoes de continuidade.

Tambem existe uma area de comunidade com Firebase Auth, perfil embutido, entrada anonima, chat geral, forum por assunto criado por usuarios e upload de imagens via Supabase Storage.

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
  brandAssets.ts
  releaseOrder.ts
  recommendedOrder.ts
  glossary.ts
  fullHistories.ts
  narrativeEngine.ts

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
  AuthStatusButton.tsx
  CommunityHub.tsx

src/lib/
  communityAuth.ts
  firebase.ts
  mediaSafety.ts
  supabase.ts
```

`fullHistories.ts` concentra narrativas longas curadas por `id` para jogos, acontecimentos da timeline e ameaças biológicas. `narrativeEngine.ts` transforma qualquer mídia, personagem, organização, local, ameaça ou acontecimento em uma narrativa editorial completa, com tom de dossiê de terror, separação de canon e texto fora dos componentes.

`brandAssets.ts` lista marcas/logos oficiais apenas como referencias creditadas e slots visuais. O site usa monogramas proprios como fallback e nao redistribui logotipos proprietarios sem permissao/licenca.

## Comunidade, login e Firebase

A aba `Comunidade` usa Firebase no cliente:

- Firebase Authentication para login por e-mail/senha, criacao de conta e entrada anonima.
- Cloud Firestore para perfis, chat geral e topicos de forum.
- `firestore.rules` contem regras sugeridas para leitura publica e escrita apenas por usuarios autenticados.
- O cabecalho mostra `Login / Registrar-se` no canto direito; depois do login, mostra nome publico e foto de perfil.

Ative no Firebase Console:

1. Authentication: provedores `Email/password` e `Anonymous`.
2. Firestore Database: modo producao.
3. Rules: publique o conteudo de `firestore.rules`.

As variaveis publicas ficam em `.env.local` ou na Vercel:

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
```

Nao coloque `sb_secret`, service account private key ou qualquer chave administrativa no frontend. Se uma chave secreta foi exposta, rotacione no painel do provedor.

## Supabase Storage e imagens

O Supabase e usado apenas para arquivos publicos da comunidade:

- Bucket `profile-images`: fotos de perfil.
- Bucket `forum-post-images`: imagens anexadas a posts dos foruns.

Configure na Vercel ou em `.env.local`:

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=
```

Use somente a chave publica/publishable no navegador. Nao use `sb_secret` no app, em commits ou em variaveis `NEXT_PUBLIC_*`.

Para o upload funcionar, crie os buckets no Supabase Storage e publique politicas de leitura/insercao adequadas para o projeto. O arquivo `supabase-storage-policies.sql` traz uma configuracao inicial para leitura publica e upload anonimo, compativel com a autenticacao Firebase usada no app. O codigo usa URLs publicas, entao os buckets precisam permitir leitura publica ou politicas equivalentes.

O filtro de imagens no cliente bloqueia tipos invalidos, tamanho excessivo, nomes de arquivo com termos sensiveis e exige confirmacao explicita de que a imagem nao contem nudez, pornografia, violencia grafica, acidentes, ferimentos, gore, automutilacao ou outros temas delicados. Isso e uma primeira barreira visual. Para moderacao forte em producao, adicione uma Edge Function/Cloud Function com analise server-side antes de liberar a imagem.

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
5. Configure as variaveis `NEXT_PUBLIC_FIREBASE_*` e `NEXT_PUBLIC_SUPABASE_*`.
6. Output: gerenciado automaticamente pelo Next.js.

Nao ha backend proprio no repositorio; a comunidade usa Firebase e Supabase como servicos externos. Nao ha secrets versionados.
