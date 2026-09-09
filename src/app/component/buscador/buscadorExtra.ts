export const TYPE_LABELS: Record<string, { es: string; en: string }> = {
  landmark: {
    es: 'Buscar POI',
    en: 'Search POI'
  },
  waypoint: {
    es: 'Buscar Waypoint',
    en: 'Search Waypoint'
  },
  vista: {
    es: 'Buscar Vista',
    en: 'Search Vista'
  }
};

export const TYPE_ICONS: Record<string, string> = {
  landmark: 'https://wiki.guildwars2.com/images/thumb/7/70/Point_of_interest_%28map_icon%29.png/30px-Point_of_interest_%28map_icon%29.png',
  waypoint: 'https://wiki.guildwars2.com/images/thumb/d/d2/Waypoint_%28map_icon%29.png/30px-Waypoint_%28map_icon%29.png',
  vista: 'https://wiki.guildwars2.com/images/thumb/f/ff/Vista_%28map_icon%29.png/30px-Vista_%28map_icon%29.png'
};

// https://wiki.guildwars2.com/wiki/Zone
export interface Gw2RegionalMaps {
  [key: string]: {
    region: { es: string; en: string };
    maps: { es: string; en: string }[];
  };
}

export const GW2_REGIONAL_MAPS: Gw2RegionalMaps = {
  "kryta": {
    region: { es: "Kryta", en: "Kryta" },
    maps: [
      { es: "Linde de la Divinidad", en: "Divinity's Reach" },
      { es: "Arco del Leon", en: "Lion's Arch" },
      { es: "Valle de la Reina", en: "Queensdale" },
      { es: "Colinas Kessex", en: "Kessex Hills" },
      { es: "Campos de Gendarran", en: "Gendarran Fields" },
      { es: "Interior Harathi", en: "Harathi Hinterlands" },
      { es: "Costa Mareasangrienta", en: "Bloodtide Coast" },
      { es: "Lago Doric", en: "Lake Doric" },
      { es: "Cala del Sol Austral", en: "Southsun Cove" },
      { es: "Aerodromo de Arco del Leon", en: "Lion's Arch Aerodrome" },
      { es: "Isla Garra", en: "Claw Island" }
      // { es: "Recuerdo de la antigua Arco del Leon", en: "Memory of Old Lion's Arch" },
      // { es: "La Torre de las Pesadillas", en: "The Tower of Nightmares" },
      // { es: "La batalla de Arco del Leon (zona)", en: "The Battle For Lion's Arch" },
      // { es: "El Pabellon de la Corona (zona)", en: "The Crown Pavilion (zone)" }
    ]
  },
  "shiverpeaks": {
    region: { es: "Montañas Picosescalofriantes", en: "Shiverpeak Mountains" },
    maps: [
      { es: "Hoelbrak", en: "Hoelbrak" },
      { es: "Colinas del Caminante", en: "Wayfarer Foothills" },
      { es: "Cumulos de Guaridanieve", en: "Snowden Drifts" },
      { es: "Paso de Lornar", en: "Lornar's Pass" },
      { es: "Acantilados de Guaridadraga", en: "Dredgehaunt Cliffs" },
      { es: "Cataratas de Linarborea", en: "Timberline Falls" },
      { es: "Estrecho de Gorjaescarcha", en: "Frostgorge Sound" },
      { es: "Frontera de Escarchamarga", en: "Bitterfrost Frontier" },
      { es: "Picos del Trueno", en: "Thunderhead Peaks" },
      { es: "Marca de Bjora", en: "Bjora Marches" },
      { es: "Costa de Bosquellovizna", en: "Drizzlewood Coast" },
      { es: "Ojo del Norte", en: "Eye of the North" }
      // { es: "La marioneta retorcida", en: "The Twisted Marionette" },
      // { es: "Tormenta Draconica", en: "Dragonstorm" }
    ]
  },
  "ascalon": {
    region: { es: "Ascalon", en: "Ascalon" },
    maps: [
      { es: "Ciudadela Negra", en: "Black Citadel" },
      { es: "Llanuras de Ashford", en: "Plains of Ashford" },
      { es: "Meseta de Diessa", en: "Diessa Plateau" },
      { es: "Campos de la Ruina", en: "Fields of Ruin" },
      { es: "Estepas Crestafulgurante", en: "Blazeridge Steppes" },
      { es: "Fronteras de Hierro", en: "Iron Marches" },
      { es: "Colina del Corazon de Fuego", en: "Fireheart Rise" },
      { es: "Valle de Grothmar", en: "Grothmar Valley" }
    ]
  },
  "maguuma_jungle": {
    region: { es: "Selva de Maguuma", en: "Maguuma Jungle" },
    maps: [
      { es: "Rata Sum", en: "Rata Sum" },
      { es: "La Arboleda", en: "The Grove" },
      { es: "Bosque de Caledon", en: "Caledon Forest" },
      { es: "Provincia de Metrica", en: "Metrica Province" },
      { es: "Selvas Brisbanas", en: "Brisban Wildlands" },
      { es: "Pantano de las Centellas", en: "Sparkfly Fen" },
      { es: "Monte Voragine", en: "Mount Maelstrom" },
      { es: "Acantilados Laberinticos", en: "Labyrinthine Cliffs" }
    ]
  },
  "heart_of_maguuma": {
    region: { es: "Corazon de Maguuma", en: "Heart of Maguuma" },
    maps: [
      { es: "Umbral Verdeante", en: "Verdant Brink" },
      { es: "Valle Aurico", en: "Auric Basin" },
      { es: "Profundidades Enredadas", en: "Tangled Depths" },
      { es: "Defensa del Dragon", en: "Dragon's Stand" },
      { es: "Pantano de la Hematites", en: "Bloodstone Fen" },
      { es: "Bahia de las Ascuas", en: "Ember Bay" },
      { es: "Precipicio Perdido", en: "Lost Precipice" },
      { es: "Valle Espiritual", en: "Spirit Vale" },
      { es: "Paso de la Salvacion", en: "Salvation Pass" },
      { es: "Fortaleza de los Fieles", en: "Stronghold of the Faithful" },
      { es: "Bastion del Penitente", en: "Bastion of the Penitent" }
      // { es: "Cueva Dorada", en: "Gilded Hollow" },
    ]
  },
  "maguuma_horn": {
    region: { es: "Cuerno de Maguuma", en: "Horn of Maguuma" },
    maps: [
      { es: "Archipielago Vistacielo", en: "Skywatch Archipelago" },
      { es: "Amnytas", en: "Amnytas" },
      { es: "Zona interior de Nayos", en: "Inner Nayos" },
      { es: "La Torre del Brujo", en: "The Wizard's Tower" }
    ]
  },
  "maguuma_wastes": {
    region: { es: "Paramos de Maguuma", en: "Maguuma Wastes" },
    maps: [
      { es: "Cima Seca", en: "Dry Top" },
      { es: "Los Paramos Argentos", en: "The Silverwastes" }
    ]
  },
  "crystal_desert": {
    region: { es: "Desierto de Cristal", en: "Crystal Desert" },
    maps: [
      { es: "Oasis de Cristal", en: "Crystal Oasis" },
      { es: "Tierras Altas del Desierto", en: "Desert Highlands" },
      { es: "La Ribera del Elon", en: "Elon Riverlands" },
      { es: "La Desolacion", en: "The Desolation" },
      { es: "Dominio de Vabbi", en: "Domain of Vabbi" },
      { es: "Dominio de Istan", en: "Domain of Istan" },
      { es: "Dominio de Kourna", en: "Domain of Kourna" },
      { es: "Islas Arenosas", en: "Sandswept Isles" },
      { es: "Acantilados de Jahai", en: "Jahai Bluffs" },
      { es: "Dragoncaido", en: "Dragonfall" },
      { es: "Refugio Venteado", en: "Windswept Haven" },
      // { es: "Sala de las Cadenas", en: "Hall of Chains" },
      // { es: "Tactica del Forjador de Mitos", en: "Mythwright Gambit" },
      { es: "La Llave de Ahdashim", en: "The Key of Ahdashim" }
    ]
  },
  "orr": {
    region: { es: "Ruinas de Orr", en: "Ruins of Orr" },
    maps: [
      { es: "Estrechos de la Devastacion", en: "Straits of Devastation" },
      { es: "Salto de Malchor", en: "Malchor's Leap" },
      { es: "Ribera Maldita", en: "Cursed Shore" },
      { es: "Desembarco de la Sirena", en: "Siren's Landing" }
    ]
  },
  // "halloween": {
  //   region: { es: "Reino del Rey Loco", en: "Mad King's Realm" },
  //   maps: [
  //     { es: "Laberinto del Rey Loco", en: "Mad King's Labyrinth" }
  //   ]
  // },
  // "sab": {
  //   region: { es: "Super Adventure Box", en: "Super Adventure Box" },
  //   maps: [
  //     { es: "Centro", en: "Hub" }
  //   ]
  // },
  // "fractal": {
  //   region: { es: "Fractales de la Niebla", en: "Fractals of the Mists" },
  //   maps: [
  //     { es: "Santuario del Bloqueo de la Niebla", en: "Mistlock Sanctuary" }
  //   ]
  // },
  "cantha": {
    region: { es: "Cantha", en: "Cantha" },
    maps: [
      { es: "Provincia de Seitung", en: "Seitung Province" },
      { es: "Ciudad de Nueva Kaineng", en: "New Kaineng City" },
      { es: "Las Selvas de Echovald", en: "The Echovald Wilds" },
      { es: "Muerte del Dragon", en: "Dragon's End" },
      { es: "Hondonada de Gyala", en: "Gyala Delve" },
      { es: "Piedra Arborea", en: "Arborstone" },
      { es: "Pabellon de los Mil Mares", en: "Thousand Seas Pavilion" },
      { es: "Isla del Reflejo", en: "Isle of Reflection" }
    ]
  },
  "janthir": {
    region: { es: "Janthir", en: "Janthir" },
    maps: [
      { es: "Costas Bajas", en: "Lowland Shore" },
      { es: "Janthir Syntri", en: "Janthir Syntri" },
      { es: "Yermos de Pavesas de Niebla", en: "Mistburned Barrens" },
      { es: "Bava Nisos", en: "Bava Nisos" },
      { es: "Monte Balrior", en: "Mount Balrior" },
      { es: "Convergencia: Monte Balrior (escuadron privado)", en: "Convergence: Mount Balrior (Private Squad)" }
    ]
  },
  "ring_of_fire": {
    region: { es: "Anillo de Fuego", en: "Ring of Fire" },
    maps: [
      { es: "Draconis Mons", en: "Draconis Mons" }
    ]
  },
  "castora": {
    region: { es: "Castora", en: "Castora" },
    maps: [
      { es: "Litoral del Naufragio", en: "Shipwreck Strand" },
      { es: "Bosquezuelo Estelar", en: "Starlit Weald" },
      { es: "Jardin de la Eternidad", en: "Eternity's Garden" }
    ]
  },
  "wvw": {
    region: { es: "Mundo contra Mundo", en: "World vs. World" },
    maps: [
      { es: "Campos de batalla eternos", en: "Eternal Battlegrounds" },
      // { es: "Tierras Fronterizas alpinas azules", en: "Blue Alpine Borderlands" },
      // { es: "Tierras Fronterizas alpinas verdes", en: "Green Alpine Borderlands" },
      { es: "Tierras Fronterizas alpinas", en: "Alpine Borderlands" },
      { es: "Tierras Fronterizas deserticas", en: "Desert Borderlands" },
      { es: "El Borde de la Niebla", en: "Edge of the Mists" }
      // { es: "Sagrario de Obsidiana", en: "Obsidian Sanctum (zone)" },
      // { es: "Bastion del Armisticio", en: "Armistice Bastion" },
      // { es: "Convergencia: Zona exterior de Nayos", en: "Convergence: Outer Nayos" }
    ]
  },
  "pvp": {
    region: { es: "Jugador contra Jugador", en: "Player vs. Player" },
    maps: [
      { es: "Corazon de la Niebla", en: "Heart of the Mists" },
      { es: "La Batalla de Kyhlo", en: "Battle of Kyhlo" },
      { es: "Bosque de Niflhel", en: "Forest of Niflhel" },
      { es: "El Legado del Fuego Enemigo", en: "Legacy of the Foefire" },
      { es: "Templo de la Tormenta Silenciosa", en: "Temple of the Silent Storm" },
      { es: "Vigilancia del Espiritu", en: "Spirit Watch" },
      { es: "Martillo Celestial", en: "Skyhammer" },
      { es: "Patio", en: "Courtyard" },
      { es: "Batalla del Crepusculo del Campeon", en: "Battle of Champion's Dusk" },
      { es: "La Venganza del Capricornio", en: "Revenge of the Capricorn" },
      { es: "Coliseo Eterno", en: "Eternal Coliseum" },
      { es: "Dominio de la Djinn", en: "Djinn's Dominion" }
    ]
  }
};

export function normalizeText(text: string): string {
  return text
    .replace(/^\s*-?\s*/, '') // quitar espacios al inicio y guion si lo hay " - " o " -texto" o " texto"
    .normalize('NFD') // descomponer los caracteres acentuados en su forma base + diacriticos
    .replace(/[\u0300-\u036f]/g, '') // elimina los signos diacriticos
    .toLowerCase();
}

export function quitarEspaciosGuionesAntesText(text: string): string {
  return text
    .replace(/^\s*-?\s*/, '') // quitar espacios al inicio y guion si lo hay " - " o " -texto" o " texto"
}

export const VALID_MAPS_ES = new Set<string>();
export const VALID_MAPS_EN = new Set<string>();

Object.values(GW2_REGIONAL_MAPS).forEach(region => {
  region.maps.forEach(map => {
    VALID_MAPS_ES.add(normalizeText(map.es));
    VALID_MAPS_EN.add(normalizeText(map.en));
  });
});

////////////////////////////////////////////////////
// https://wiki.guildwars2.com/wiki/Chat_link_format

export const CHAT_CODE_HEADERS = {
  // coin: 0x01, // disabled
  // item: 0x02,
  // npc: 0x03, // disabled
  map: 0x04, // waypoints + POIs
  // pvp: 0x05,
  // skill: 0x06,
  // trait: 0x07,
  // user: 0x08, // disabled
  // recipe: 0x09,
  // wardrobe: 0x0A,
  // outfit: 0x0B,
  // wvw: 0x0C,
  // build: 0x0D,
  // achievement: 0x0E, // disabled
  // wardrobeTemplate: 0x0F
} as const;

export type ChatCodeType = keyof typeof CHAT_CODE_HEADERS;

export const HEADER_TO_TYPE = Object.entries(CHAT_CODE_HEADERS)
  .reduce((acc, [key, value]) => {
    acc[value as number] = key as ChatCodeType;
    return acc;
  }, {} as Record<number, ChatCodeType>);

// export const HEADER_TO_TYPE: Record<number, ChatCodeType> = {
// // De otra manera definido manualmente
//   [CHAT_CODE_HEADERS.coin]: 'coin',
//   [CHAT_CODE_HEADERS.item]: 'item',
//   [CHAT_CODE_HEADERS.npc]: 'npc',
//   [CHAT_CODE_HEADERS.map]: 'map',
//   [CHAT_CODE_HEADERS.pvp]: 'pvp',
//   [CHAT_CODE_HEADERS.skill]: 'skill',
//   [CHAT_CODE_HEADERS.trait]: 'trait',
//   [CHAT_CODE_HEADERS.user]: 'user',
//   [CHAT_CODE_HEADERS.recipe]: 'recipe',
//   [CHAT_CODE_HEADERS.wardrobe]: 'wardrobe',
//   [CHAT_CODE_HEADERS.outfit]: 'outfit',
//   [CHAT_CODE_HEADERS.wvw]: 'wvw',
//   [CHAT_CODE_HEADERS.build]: 'build',
//   [CHAT_CODE_HEADERS.achievement]: 'achievement',
//   [CHAT_CODE_HEADERS.wardrobeTemplate]: 'wardrobeTemplate'
// };