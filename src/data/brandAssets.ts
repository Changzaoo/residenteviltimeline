export interface BrandAssetRef {
  id: string;
  name: string;
  category: "publisher" | "franchise" | "organization" | "location" | "continuity";
  mark: string;
  referenceUrl: string;
  sourceRefs: string[];
  usageNote: string;
  assetSlot?: string;
}

export const brandAssets: BrandAssetRef[] = [
  {
    id: "capcom",
    name: "Capcom",
    category: "publisher",
    mark: "CAPCOM",
    referenceUrl: "https://www.capcom-games.com/",
    sourceRefs: ["capcom-portal", "capcom-video-policy", "capcom-fan-content-guidelines"],
    usageNote: "Editora e detentora da franquia. O arquivo usa credito textual e link oficial, sem incorporar logotipo proprietario.",
    assetSlot: "/brand-assets/capcom.svg"
  },
  {
    id: "resident-evil",
    name: "Resident Evil",
    category: "franchise",
    mark: "RE",
    referenceUrl: "https://game.capcom.com/residentevil/en/",
    sourceRefs: ["capcom-portal", "capcom-history"],
    usageNote: "Marca principal da franquia. Representada no site por composicao tipografica propria e referencia oficial externa.",
    assetSlot: "/brand-assets/resident-evil.svg"
  },
  {
    id: "biohazard",
    name: "Biohazard",
    category: "franchise",
    mark: "BH",
    referenceUrl: "https://game.capcom.com/residentevil/",
    sourceRefs: ["capcom-portal", "capcom-history"],
    usageNote: "Titulo japones da franquia. Mantido como referencia de marca e continuidade editorial.",
    assetSlot: "/brand-assets/biohazard.svg"
  },
  {
    id: "umbrella-corporation",
    name: "Umbrella Corporation",
    category: "organization",
    mark: "U",
    referenceUrl: "https://residentevil.fandom.com/wiki/Umbrella_Corporation",
    sourceRefs: ["re-fandom"],
    usageNote: "Marca ficcional central da lore. O site usa um monograma de arquivo, nao o emblema oficial extraido dos jogos.",
    assetSlot: "/umbrella-logo.svg"
  },
  {
    id: "stars",
    name: "S.T.A.R.S.",
    category: "organization",
    mark: "ST",
    referenceUrl: "https://residentevil.fandom.com/wiki/Special_Tactics_and_Rescue_Service",
    sourceRefs: ["re-fandom"],
    usageNote: "Unidade policial de Raccoon City. Slot preparado para asset autorizado, com fallback textual.",
    assetSlot: "/brand-assets/stars.svg"
  },
  {
    id: "rpd",
    name: "R.P.D.",
    category: "organization",
    mark: "RPD",
    referenceUrl: "https://residentevil.fandom.com/wiki/Raccoon_Police_Department",
    sourceRefs: ["re-fandom"],
    usageNote: "Departamento de policia de Raccoon City. Usado como referencia de lore e nao como marca comercial oficial.",
    assetSlot: "/brand-assets/rpd.svg"
  },
  {
    id: "bsaa",
    name: "BSAA",
    category: "organization",
    mark: "BS",
    referenceUrl: "https://residentevil.fandom.com/wiki/Bioterrorism_Security_Assessment_Alliance",
    sourceRefs: ["re-fandom"],
    usageNote: "Organizacao anti-bioterrorismo. O card usa monograma proprio do dossie.",
    assetSlot: "/brand-assets/bsaa.svg"
  },
  {
    id: "blue-umbrella",
    name: "Blue Umbrella",
    category: "organization",
    mark: "BU",
    referenceUrl: "https://residentevil.fandom.com/wiki/Blue_Umbrella",
    sourceRefs: ["re-fandom"],
    usageNote: "Reaproveitamento narrativo do legado Umbrella. Representacao visual segura, sem emblema oficial extraido.",
    assetSlot: "/brand-assets/blue-umbrella.svg"
  },
  {
    id: "tricell",
    name: "Tricell",
    category: "organization",
    mark: "TR",
    referenceUrl: "https://residentevil.fandom.com/wiki/Tricell",
    sourceRefs: ["re-fandom"],
    usageNote: "Conglomerado ligado a RE5 e Uroboros. Credito e referencia externa preservados.",
    assetSlot: "/brand-assets/tricell.svg"
  },
  {
    id: "los-illuminados",
    name: "Los Illuminados",
    category: "organization",
    mark: "LI",
    referenceUrl: "https://residentevil.fandom.com/wiki/Los_Iluminados",
    sourceRefs: ["re-fandom"],
    usageNote: "Culto de RE4 ligado a Las Plagas. O site usa linguagem de selo documental, nao arte oficial.",
    assetSlot: "/brand-assets/los-illuminados.svg"
  },
  {
    id: "raccoon-city",
    name: "Raccoon City",
    category: "location",
    mark: "RC",
    referenceUrl: "https://residentevil.fandom.com/wiki/Raccoon_City",
    sourceRefs: ["re-fandom", "capcom-history"],
    usageNote: "Local central da franquia. Tratado como identificador de caso e fonte de pesquisa.",
    assetSlot: "/brand-assets/raccoon-city.svg"
  },
  {
    id: "live-action-films",
    name: "Filmes live-action",
    category: "continuity",
    mark: "LA",
    referenceUrl: "https://www.imdb.com/find/?q=Resident%20Evil",
    sourceRefs: ["imdb-films", "rotten-films"],
    usageNote: "Continuidade alternativa dos filmes. Dados conferidos por bases de cinema, separados do canon dos jogos.",
    assetSlot: "/brand-assets/live-action.svg"
  }
];
