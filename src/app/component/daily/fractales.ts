//Lista de fractales: level, ar, name

// interface Test {
//     level: string;
//     ar: string;
//     name: string;
//     nameEs: string;
//     idDaily: Number[];
//     idRec0: Number;
//     idRec1: Number;
//     idRec2: Number
// }

// export const Fractales: Test[] = [
const FractalesInfo = [
    // {
    //     level: "1",
    //     ar: "0",
    //     name: "Volcanic",
    //     nameEs: "Volcánico",
    //     idRec0: 0,
    //     idRec2: 0,
    //     idRec1: 2297,
    //     idDaily: [0]
    // },
    {
        level: "1, 19, 28, 52, 92",
        ar: "0, 0, 22, 65, 136",
        name: "Volcanic",
        nameEs: "Volcánico",
        idRec1: 2297,
        idRec0: 2492,
        idRec2: 0,
        idDaily: [2911, 2908, 2890, 2989]
    },
    {
        level: "2, 36, 44, 62, 79, 91",
        ar: "0, 36, 50, 83, 113, 134",
        name: "Uncategorized",
        nameEs: "Sin Clasificar",
        idDaily: [2940, 2902, 2925, 2939],
        idRec1: 2309,
        idRec2: 3213,
        idRec0: 2477
    },
    {
        level: "3, 27, 51, 68, 86, 93",
        ar: "0, 20, 63, 93, 125, 138",
        name: "Snowblind",
        nameEs: "Ceguera de la Nieve",
        idDaily: [2916, 2949, 2918, 2952],
        idRec1: 2239,
        idRec2: 3187
    },
    {
        level: "4, 31, 57, 66, 85",
        ar: "0, 27, 74, 90, 123",
        name: "Urban Battleground",
        nameEs: "Campo de Batalla Urbano",
        idRec2: 3184,
        idDaily: [2896, 2907, 2897, 2941],
        idRec1: 2533,
        idRec0: 2405
    },
    {
        level: "5, 17, 32, 56, 77, 89",
        ar: "0, 0, 29, 72, 109, 131",
        name: "Swampland",
        nameEs: "Cenagal",
        idRec1: 2363,
        idDaily: [2935, 2961, 2972, 2892],
        idRec0: 2316
    },
    {
        level: "6, 21, 47, 69, 94",
        ar: "0, 10, 56, 95, 139",
        name: "Cliffside",
        nameEs: "Despeñadero",
        idRec0: 2229,
        idDaily: [2977, 2958, 2926, 2930],
        idRec2: 3219
    },
    {
        level: "7, 26, 61, 76",
        ar: "0, 18, 81, 107",
        name: "Aquatic Ruins",
        nameEs: "Ruinas Acuáticas",
        idRec2: 3198,
        idDaily: [2900, 2898, 2964, 2956]
    },
    {
        level: "8, 29, 53, 81",
        ar: "0, 24, 67, 116",
        name: "Underground Facility",
        nameEs: "Instalación Subterránea",
        idDaily: [2929, 2889, 2950, 2947],
        idRec2: 3277,
        idRec0: 2422
    },
    {
        level: "9, 22, 39, 58, 83",
        ar: "0, 11, 42, 75, 120",
        name: "Molten Furnace",
        nameEs: "Fragua Fundida",
        idRec2: 3192,
        idDaily: [2976, 2955, 2944, 2903],
        idRec1: 2591
    },
    {
        level: "10, 40, 70, 90",
        ar: "0, 43, 97, 132",
        name: "Molten Boss",
        nameEs: "Jefes Fundidos",
        idRec0: 2560,
        idDaily: [2979, 2985, 2934, 2966]
    },
    {
        level: "11, 33, 67, 84",
        ar: "0, 31, 91, 122",
        name: "Deepstone",
        nameEs: "Rocahonda",
        idDaily: [4244, 4218, 4210, 4224],
        idRec0: 2153
    },
    {
        level: "12, 37, 54, 78",
        ar: "0, 38, 68, 111",
        name: "Siren's Reef",
        nameEs: "Arrecife de la Sirena",
        idRec1: 2377,
        idDaily: [4551, 4496, 4526, 4494],
        idRec0: 2597,
        idRec2: 3185
    },
    {
        level: "13, 30, 38, 63, 88, 97",
        ar: "0, 26, 40, 84, 129, 145",
        name: "Chaos",
        nameEs: "Caos",
        idDaily: [3063, 3044, 3045, 3038],
        idRec1: 2330,
    },
    {
        level: "14, 46, 65, 71, 96",
        ar: "0, 54, 88, 99, 143",
        name: "Aetherblade",
        nameEs: "Filoetéreo",
        idDaily: [2927, 2909, 2928, 2948],
        idRec2: 3189
    },
    {
        level: "15, 34, 43, 55, 64, 82",
        ar: "0, 33, 49, 70, 86, 118",
        name: "Thaumanova Reactor",
        nameEs: "Reactor Taumanova",
        idDaily: [2981, 2991, 2895, 2967],
        idRec0: 2238,
        idRec2: 3215
    },
    {
        level: "16, 41, 59, 87",
        ar: "0, 45, 77, 127",
        name: "Twilight Oasis",
        nameEs: "Oasis del Crepúsculo",
        idDaily: [4028, 4006, 4030, 3973],
        idRec1: 2598,
        idRec2: 3228,
        idRec0: 2308
    },
    {
        level: "18, 42, 72, 95",
        ar: "0, 47, 100, 141",
        name: "Captain Mai Trin Boss",
        nameEs: "Mai Trin",
        idRec0: 2467,
        idRec1: 2394,
        idDaily: [2978, 2899, 2962, 2932]
    },
    {
        level: "20, 35, 45, 60, 80",
        ar: "8, 34, 52, 79, 115",
        name: "Solid Ocean",
        nameEs: "Océano Sólido",
        idDaily: [2954, 2971, 2986, 2923],
        idRec2: 3172,
        idRec1: 2266
    },
    {
        level: "23, 48, 73, 98",
        ar: "13, 58, 102, 147",
        name: "Nightmare",
        nameEs: "Pesadilla",
        idDaily: [3229, 3196, 3175, 3177],
        idRec1: 2337
    },
    {
        level: "24, 49, 74, 99",
        ar: "15, 59, 104, 148",
        name: "Shattered Observatory",
        nameEs: "Observatorio Asolado",
        idRec0: 2245,
        idDaily: [3509, 3478, 3464, 3458]
    },
    {
        level: "25, 50, 75, 100",
        ar: "17, 61, 106, 150",
        name: "Sunqua Peak",
        nameEs: "Pico de Sunqua",
        idRec0: 2473,
        idDaily: [5447, 5449, 5437, 5446]
    }
]

export const Fractales = [
    //Volcanico
    {
        level: 1,
        ar: 0,
        name: "Volcanic",
        nameEs: "Volcánico",
        idDaily: 2911,
        idRec: 0,
        tier: "T1"
    },
    {
        level: 19,
        ar: 0,
        name: "Volcanic",
        nameEs: "Volcánico",
        idRec: 2492,
        idDaily: 2911,
        tier: "T1"
    },
    {
        level: 28,
        ar: 22,
        name: "Volcanic",
        nameEs: "Volcánico",
        idRec: 2297,
        idDaily: 2908,
        tier: "T2"
    },
    {
        level: 52,
        ar: 65,
        name: "Volcanic",
        nameEs: "Volcánico",
        idDaily: 2890,
        idRec: 0,
        tier: "T3"
    },
    {
        level: 92,
        ar: 136,
        name: "Volcanic",
        nameEs: "Volcánico",
        idDaily: 2989,
        idRec: 0,
        tier: "T4"
    },
    //Sin clasificar
    {
        level: 2,
        ar: 0,
        name: "Uncategorized",
        nameEs: "Sin Clasificar",
        idDaily: 2940,
        idRec: 2477,
        tier: "T1"
    },
    {
        level: 36,
        ar: 36,
        name: "Uncategorized",
        nameEs: "Sin Clasificar",
        idDaily: 2902,
        idRec: 2309,
        tier: "T2"
    },
    {
        level: 44,
        ar: 50,
        name: "Uncategorized",
        nameEs: "Sin Clasificar",
        idDaily: 2902,
        idRec: 0,
        tier: "T2"
    },
    {
        level: 62,
        ar: 83,
        name: "Uncategorized",
        nameEs: "Sin Clasificar",
        idDaily: 2925,
        idRec: 3213,
        tier: "T3"
    },
    {
        level: 79,
        ar: 113,
        name: "Uncategorized",
        nameEs: "Sin Clasificar",
        idDaily: 2939,
        idRec: 0,
        tier: "T4"
    },
    {
        level: 91,
        ar: 134,
        name: "Uncategorized",
        nameEs: "Sin Clasificar",
        idDaily: 2939,
        idRec: 0,
        tier: "T4"
    },
    //Ceguera
    {
        level: 3,
        ar: 0,
        name: "Snowblind",
        nameEs: "Ceguera de la Nieve",
        idDaily: 2916,
        idRec: 0,
        tier: "T1"
    },
    {
        level: 27,
        ar: 20,
        name: "Snowblind",
        nameEs: "Ceguera de la Nieve",
        idDaily: 2949,
        idRec: 2239,
        tier: "T2"
    },
    {
        level: 51,
        ar: 63,
        name: "Snowblind",
        nameEs: "Ceguera de la Nieve",
        idDaily: 2918,
        idRec: 0,
        tier: "T3"
    },
    {
        level: 68,
        ar: 93,
        name: "Snowblind",
        nameEs: "Ceguera de la Nieve",
        idDaily: 2918,
        idRec: 3187,
        tier: "T3"
    },
    {
        level: 86,
        ar: 125,
        name: "Snowblind",
        nameEs: "Ceguera de la Nieve",
        idDaily: 2952,
        idRec: 0,
        tier: "T4"
    },
    {
        level: 93,
        ar: 138,
        name: "Snowblind",
        nameEs: "Ceguera de la Nieve",
        idDaily: 2952,
        idRec: 0,
        tier: "T4"
    },
    //Campo batalla urbano
    {
        level: 4,
        ar: 0,
        name: "Urban Battleground",
        nameEs: "Campo de Batalla Urbano",
        idDaily: 2896,
        idRec: 2405,
        tier: "T1"
    },
    {
        level: 31,
        ar: 27,
        name: "Urban Battleground",
        nameEs: "Campo de Batalla Urbano",
        idDaily: 2907,
        idRec: 2533,
        tier: "T2"
    },
    {
        level: 57,
        ar: 74,
        name: "Urban Battleground",
        nameEs: "Campo de Batalla Urbano",
        idDaily: 2907,
        idRec: 0,
        tier: "T3"
    },
    {
        level: 66,
        ar: 90,
        name: "Urban Battleground",
        nameEs: "Campo de Batalla Urbano",
        idRec: 3184,
        idDaily: 2897,
        tier: "T3"
    },
    {
        level: 85,
        ar: 123,
        name: "Urban Battleground",
        nameEs: "Campo de Batalla Urbano",
        idDaily: 2941,
        idRec: 0,
        tier: "T4"
    },
    //Cenagal
    {
        level: 5,
        ar: 0,
        name: "Swampland",
        nameEs: "Cenagal",
        idDaily: 2935,
        idRec: 2316,
        tier: "T1"
    },
    {
        level: 17,
        ar: 0,
        name: "Swampland",
        nameEs: "Cenagal",
        idDaily: 2935,
        idRec: 0,
        tier: "T1"
    },
    {
        level: 32,
        ar: 29,
        name: "Swampland",
        nameEs: "Cenagal",
        idRec: 2363,
        idDaily: 2961,
        tier: "T2"
    },
    {
        level: 56,
        ar: 72,
        name: "Swampland",
        nameEs: "Cenagal",
        idDaily: 2972,
        idRec: 0,
        tier: "T3"

    },
    {
        level: 77,
        ar: 109,
        name: "Swampland",
        nameEs: "Cenagal",
        idDaily: 2892,
        idRec: 0,
        tier: "T4"
    },
    {
        level: 89,
        ar: 131,
        name: "Swampland",
        nameEs: "Cenagal",
        idDaily: 2892,
        idRec: 0,
        tier: "T4"
    },
    //Despeñadero
    {
        level: 6,
        ar: 0,
        name: "Cliffside",
        nameEs: "Despeñadero",
        idRec: 2229,
        idDaily: 2977,
        tier: "T1"
    },
    {
        level: 21,
        ar: 10,
        name: "Cliffside",
        nameEs: "Despeñadero",
        idDaily: 2977,
        idRec: 0,
        tier: "T1"
    },
    {
        level: 47,
        ar: 56,
        name: "Cliffside",
        nameEs: "Despeñadero",
        idDaily: 2958,
        idRec: 0,
        tier: "T2"
    },
    {
        level: 69,
        ar: 95,
        name: "Cliffside",
        nameEs: "Despeñadero",
        idDaily: 2926,
        idRec: 3219,
        tier: "T3"
    },
    {
        level: 94,
        ar: 139,
        name: "Cliffside",
        nameEs: "Despeñadero",
        idDaily: 2930,
        idRec: 0,
        tier: "T4"
    },
    //Ruinas acuaticas
    {
        level: 7,
        ar: 0,
        name: "Aquatic Ruins",
        nameEs: "Ruinas Acuáticas",
        idDaily: 2900,
        idRec: 0,
        tier: "T1"
    },
    {
        level: 26,
        ar: 18,
        name: "Aquatic Ruins",
        nameEs: "Ruinas Acuáticas",
        idDaily: 2898,
        idRec: 0,
        tier: "T2"
    },
    {
        level: 61,
        ar: 81,
        name: "Aquatic Ruins",
        nameEs: "Ruinas Acuáticas",
        idRec: 3198,
        idDaily: 2964,
        tier: "T3"
    },
    {
        level: 76,
        ar: 107,
        name: "Aquatic Ruins",
        nameEs: "Ruinas Acuáticas",
        idDaily: 2956,
        idRec: 0,
        tier: "T4"
    },
    //Instalacion sub
    {
        level: 8,
        ar: 0,
        name: "Underground Facility",
        nameEs: "Instalación Subterránea",
        idDaily: 2929,
        idRec: 2422,
        tier: "T1"
    },
    {
        level: 29,
        ar: 24,
        name: "Underground Facility",
        nameEs: "Instalación Subterránea",
        idDaily: 2889,
        idRec: 0,
        tier: "T2"
    },
    {
        level: 53,
        ar: 67,
        name: "Underground Facility",
        nameEs: "Instalación Subterránea",
        idDaily: 2950,
        idRec: 3237,
        tier: "T3"
    },
    {
        level: 81,
        ar: 116,
        name: "Underground Facility",
        nameEs: "Instalación Subterránea",
        idDaily: 2947,
        idRec: 0,
        tier: "T4"
    },
    //Fragua
    {
        level: 9,
        ar: 0,
        name: "Molten Furnace",
        nameEs: "Fragua Fundida",
        idDaily: 2976,
        idRec: 0,
        tier: "T1"
    },
    {
        level: 22,
        ar: 11,
        name: "Molten Furnace",
        nameEs: "Fragua Fundida",
        idDaily: 2976,
        idRec: 0,
        tier: "T1"
    },
    {
        level: 39,
        ar: 42,
        name: "Molten Furnace",
        nameEs: "Fragua Fundida",
        idDaily: 2955,
        idRec: 2591,
        tier: "T2"
    },
    {
        level: 58,
        ar: 75,
        name: "Molten Furnace",
        nameEs: "Fragua Fundida",
        idDaily: 2944,
        idRec: 3192,
        tier: "T3"
    },
    {
        level: 83,
        ar: 120,
        name: "Molten Furnace",
        nameEs: "Fragua Fundida",
        idDaily: 2903,
        idRec: 0,
        tier: "T4"
    },
    //Jefes
    {
        level: 10,
        ar: 0,
        name: "Molten Boss",
        nameEs: "Jefes Fundidos",
        idRec: 2560,
        idDaily: 2979,
        tier: "T1"
    },
    {
        level: 40,
        ar: 43,
        name: "Molten Boss",
        nameEs: "Jefes Fundidos",
        idDaily: 2985,
        idRec: 2171,
        tier: "T2"
    },
    {
        level: 70,
        ar: 97,
        name: "Molten Boss",
        nameEs: "Jefes Fundidos",
        idDaily: 2934,
        idRec: 0,
        tier: "T3"
    },
    {
        level: 90,
        ar: 132,
        name: "Molten Boss",
        nameEs: "Jefes Fundidos",
        idDaily: 2966,
        idRec: 0,
        tier: "T4"
    },
    //Rocahonda
    {
        level: 11,
        ar: 0,
        name: "Deepstone",
        nameEs: "Rocahonda",
        idDaily: 4244,
        idRec: 2153,
        tier: "T1"
    },
    {
        level: 33,
        ar: 31,
        name: "Deepstone",
        nameEs: "Rocahonda",
        idDaily: 4218,
        idRec: 0,
        tier: "T2"
    },
    {
        level: 67,
        ar: 91,
        name: "Deepstone",
        nameEs: "Rocahonda",
        idDaily: 4210,
        idRec: 3201,
        tier: "T3"
    },
    {
        level: 84,
        ar: 122,
        name: "Deepstone",
        nameEs: "Rocahonda",
        idDaily: 4224,
        idRec: 0,
        tier: "T4"
    },
    //Arrecife
    {
        level: 12,
        ar: 0,
        name: "Siren's Reef",
        nameEs: "Arrecife de la Sirena",
        idDaily: 4551,
        idRec: 2597,
        tier: "T1"
    },
    {
        level: 37,
        ar: 38,
        name: "Siren's Reef",
        nameEs: "Arrecife de la Sirena",
        idRec: 2377,
        idDaily: 4496,
        tier: "T2"
    },
    {
        level: 54,
        ar: 68,
        name: "Siren's Reef",
        nameEs: "Arrecife de la Sirena",
        idDaily: 4526,
        idRec: 3185,
        tier: "T3"
    },
    {
        level: 78,
        ar: 111,
        name: "Siren's Reef",
        nameEs: "Arrecife de la Sirena",
        idDaily: 4494,
        idRec: 0,
        tier: "T4"
    },
    //Caos
    {
        level: 13,
        ar: 0,
        name: "Chaos",
        nameEs: "Caos",
        idDaily: 3063,
        idRec: 0,
        tier: "T1"
    },
    {
        level: 30,
        ar: 26,
        name: "Chaos",
        nameEs: "Caos",
        idDaily: 3044,
        idRec: 2330,
        tier: "T2"
    },
    {
        level: 38,
        ar: 40,
        name: "Chaos",
        nameEs: "Caos",
        idDaily: 3044,
        idRec: 0,
        tier: "T2"
    },
    {
        level: 63,
        ar: 84,
        name: "Chaos",
        nameEs: "Caos",
        idDaily: 3045,
        idRec: 0,
        tier: "T3"
    },
    {
        level: 88,
        ar: 129,
        name: "Chaos",
        nameEs: "Caos",
        idDaily: 3038,
        idRec: 0,
        tier: "T4"
    },
    {
        level: 97,
        ar: 145,
        name: "Chaos",
        nameEs: "Caos",
        idDaily: 3038,
        idRec: 0,
        tier: "T4"
    },
    //Filoetereo
    {
        level: 14,
        ar: 0,
        name: "Aetherblade",
        nameEs: "Filoetéreo",
        idRec: 2327,
        idDaily: 2927,
        tier: "T1"
    },
    {
        level: 46,
        ar: 54,
        name: "Aetherblade",
        nameEs: "Filoetéreo",
        idDaily: 2909,
        idRec: 0,
        tier: "T2"
    },
    {
        level: 65,
        ar: 88,
        name: "Aetherblade",
        nameEs: "Filoetéreo",
        idDaily: 2928,
        idRec: 3189,
        tier: "T3"
    },
    {
        level: 71,
        ar: 99,
        name: "Aetherblade",
        nameEs: "Filoetéreo",
        idDaily: 2928,
        idRec: 0,
        tier: "T3"
    },
    {
        level: 96,
        ar: 143,
        name: "Aetherblade",
        nameEs: "Filoetéreo",
        idDaily: 2948,
        idRec: 0,
        tier: "T4"
    },
    //Taumanova
    {
        level: 15,
        ar: 0,
        name: "Thaumanova Reactor",
        nameEs: "Reactor Taumanova",
        idDaily: 2981,
        idRec: 2238,
        tier: "T1"
    },
    {
        level: 34,
        ar: 33,
        name: "Thaumanova Reactor",
        nameEs: "Reactor Taumanova",
        idDaily: 2991,
        idRec: 2592,
        tier: "T2"
    },
    {
        level: 43,
        ar: 49,
        name: "Thaumanova Reactor",
        nameEs: "Reactor Taumanova",
        idDaily: 2991,
        idRec: 0,
        tier: "T2"
    },
    {
        level: 55,
        ar: 70,
        name: "Thaumanova Reactor",
        nameEs: "Reactor Taumanova",
        idDaily: 2895,
        idRec: 0,
        tier: "T3"
    },
    {
        level: 64,
        ar: 86,
        name: "Thaumanova Reactor",
        nameEs: "Reactor Taumanova",
        idDaily: 2895,
        idRec: 3215,
        tier: "T3"
    },
    {
        level: 82,
        ar: 118,
        name: "Thaumanova Reactor",
        nameEs: "Reactor Taumanova",
        idDaily: 2967,
        idRec: 0,
        tier: "T4"
    },
    //Oasis
    {
        level: 16,
        ar: 0,
        name: "Twilight Oasis",
        nameEs: "Oasis del Crepúsculo",
        idDaily: 4028,
        idRec: 2308,
        tier: "T1"
    },
    {
        level: 41,
        ar: 45,
        name: "Twilight Oasis",
        nameEs: "Oasis del Crepúsculo",
        idDaily: 4006,
        idRec: 2598,
        tier: "T2"
    },
    {
        level: 59,
        ar: 77,
        name: "Twilight Oasis",
        nameEs: "Oasis del Crepúsculo",
        idDaily: 4030,
        idRec: 3228,
        tier: "T3"
    },
    {
        level: 87,
        ar: 127,
        name: "Twilight Oasis",
        nameEs: "Oasis del Crepúsculo",
        idDaily: 3973,
        idRec: 0,
        tier: "T4"
    },
    //Mai Trin
    {
        level: 18,
        ar: 0,
        name: "Captain Mai Trin Boss",
        nameEs: "Mai Trin",
        idRec: 2467,
        idDaily: 2978,
        tier: "T1"
    },
    {
        level: 42,
        ar: 47,
        name: "Captain Mai Trin Boss",
        nameEs: "Mai Trin",
        idRec: 2394,
        idDaily: 2899,
        tier: "T2"
    },
    {
        level: 72,
        ar: 100,
        name: "Captain Mai Trin Boss",
        nameEs: "Mai Trin",
        idRec: 0,
        idDaily: 2962,
        tier: "T3"
    },
    {
        level: 95,
        ar: 141,
        name: "Captain Mai Trin Boss",
        nameEs: "Mai Trin",
        idRec: 0,
        idDaily: 2932,
        tier: "T4"
    },
    //Oceano
    {
        level: 20,
        ar: 8,
        name: "Solid Ocean",
        nameEs: "Océano Sólido",
        idDaily: 2954,
        idRec: 0,
        tier: "T1"
    },
    {
        level: 35,
        ar: 34,
        name: "Solid Ocean",
        nameEs: "Océano Sólido",
        idDaily: 2971,
        idRec: 2266,
        tier: "T2"
    },
    {
        level: 45,
        ar: 52,
        name: "Solid Ocean",
        nameEs: "Océano Sólido",
        idDaily: 2971,
        idRec: 0,
        tier: "T2"
    },
    {
        level: 60,
        ar: 79,
        name: "Solid Ocean",
        nameEs: "Océano Sólido",
        idDaily: 2986,
        idRec: 3172,
        tier: "T3"
    },
    {
        level: 80,
        ar: 115,
        name: "Solid Ocean",
        nameEs: "Océano Sólido",
        idDaily: 2923,
        idRec: 0,
        tier: "T4"
    },
    //Pesadilla
    {
        level: 23,
        ar: 13,
        name: "Nightmare",
        nameEs: "Pesadilla",
        idDaily: 3229,
        idRec: 0,
        tier: "T1"
    },
    {
        level: 48,
        ar: 58,
        name: "Nightmare",
        nameEs: "Pesadilla",
        idDaily: 3196,
        idRec: 2337,
        tier: "T2"
    },
    {
        level: 73,
        ar: 102,
        name: "Nightmare",
        nameEs: "Pesadilla",
        idDaily: 3175,
        idRec: 0,
        tier: "T3"
    },
    {
        level: 98,
        ar: 147,
        name: "Nightmare",
        nameEs: "Pesadilla",
        idDaily: 3177,
        idRec: 0,
        tier: "T4"
    },
    //Observatorio
    {
        level: 24,
        ar: 15,
        name: "Shattered Observatory",
        nameEs: "Observatorio Asolado",
        idRec: 2245,
        idDaily: 3509,
        tier: "T1"
    },
    {
        level: 49,
        ar: 59,
        name: "Shattered Observatory",
        nameEs: "Observatorio Asolado",
        idDaily: 3478,
        idRec: 0,
        tier: "T2"
    },
    {
        level: 74,
        ar: 104,
        name: "Shattered Observatory",
        nameEs: "Observatorio Asolado",
        idDaily: 3464,
        idRec: 0,
        tier: "T3"
    },
    {
        level: 99,
        ar: 148,
        name: "Shattered Observatory",
        nameEs: "Observatorio Asolado",
        idDaily: 3458,
        idRec: 0,
        tier: "T4"
    },
    //Sunqua
    {
        level: 25,
        ar: 17,
        name: "Sunqua Peak",
        nameEs: "Pico de Sunqua",
        idRec: 2473,
        idDaily: 5447,
        tier: "T1"
    },
    {
        level: 50,
        ar: 61,
        name: "Sunqua Peak",
        nameEs: "Pico de Sunqua",
        idDaily: 5449,
        idRec: 0,
        tier: "T2"
    },
    {
        level: 75,
        ar: 106,
        name: "Sunqua Peak",
        nameEs: "Pico de Sunqua",
        idRec: 3238,
        idDaily: 5437,
        tier: "T3"
    },
    {
        level: 100,
        ar: 150,
        name: "Sunqua Peak",
        nameEs: "Pico de Sunqua",
        idDaily: 5446,
        idRec: 0,
        tier: "T4"
    }
]