import { games } from "./games";
import { remakes, remakeComparisons } from "./remakes";
import { spinOffs } from "./spinOffs";
import { dlcs } from "./dlcs";
import { moviesLiveAction } from "./moviesLiveAction";
import { moviesCgi } from "./moviesCgi";
import { series } from "./series";
import { novels } from "./novels";
import { books } from "./books";
import { comicsManga } from "./comicsManga";
import { characters } from "./characters";
import { organizations } from "./organizations";
import { biohazards } from "./biohazards";
import { locations } from "./locations";
import { continuities } from "./continuities";
import { sources } from "./sources";
import { timelineEvents } from "./timeline";
import { releaseOrder } from "./releaseOrder";
import { recommendedOrder } from "./recommendedOrder";
import { glossary } from "./glossary";
import type { MediaItem } from "./types";

export * from "./types";
export {
  games,
  remakes,
  remakeComparisons,
  spinOffs,
  dlcs,
  moviesLiveAction,
  moviesCgi,
  series,
  novels,
  books,
  comicsManga,
  characters,
  organizations,
  biohazards,
  locations,
  continuities,
  sources,
  timelineEvents,
  releaseOrder,
  recommendedOrder,
  glossary
};

export const allMedia: MediaItem[] = [
  ...games,
  ...remakes,
  ...spinOffs,
  ...dlcs,
  ...moviesLiveAction,
  ...moviesCgi,
  ...series,
  ...novels,
  ...books,
  ...comicsManga
];

export const mediaById = new Map(allMedia.map((item) => [item.id, item]));
export const sourceById = new Map(sources.map((source) => [source.id, source]));
