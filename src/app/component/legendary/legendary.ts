export interface t6 {
    id: number,
    nombre: string,
    cantidad: number,
    tengo: number,
    necesito: number,
    icon: string,
    precioTpCompra: number,
    precioTpCompraS: string,
    precioTpVenta: number,
    precioTpVentaS: string,
    precioStackCompra: number,
    precioStackCompraS: string,
    precioStackVenta: number
    precioStackVentaS: string,
    precioStackVenta90: number,
    precioStackVentaS90: string
};

export interface legendarios {
    nombre: string,
    cantidad: number,
    tengo: number,
    wiki: string,
    totalVales: number,
    totalTreboles: number,
    totalLi: number,
    totalT6: number,
    totalEctoplasma: number,
    totalObsidiana: number
};

export interface otrosComponentes {
    nombre: string,
    id: number,
    icon: string,
    cantidad: number,
    tengo: number,
    gaste: number,
    necesito: number
}

export interface preciosVarios {
    id: number,
    nombre: string,
    tengo: number,
    icon: string,
    precioTpCompra: number,
    precioTpCompraS: string,
    precioTpVenta: number,
    precioTpVentaS: string,
    precioStackCompra: number,
    precioStackCompraS: string,
    precioStackVenta: number
    precioStackVentaS: string,
    precioStackVenta90: number,
    precioStackVentaS90: string
};

export const idsT6 = "24295,24358,24351,24277,24357,24289,24300,24283";

export const idsPreciosVarios = "19976, 19721";

export const vales = 50;

export const liArmadura = 50;

export const liAnilloRaid = 150;

export const trebolArmadura = 15;

export const trebolArmaduraPve = 9;

export const trebolSello = 30;

export const trebolRuna = 20;

export const trebolAnilloRaid = 77;

export const t6ArmaduraSelloRuna = 100;

export const t6AnilloRaid = 200;

export const ectoplasmaArmaduraPve = 600;

export const ectoplasmaRuna = 100;

export const ectoplasmaSello = 150;

export const obsidianaArmadura = 50;

export const obsidianaArmaduraPve = 50;

export const obsidianaRuna = 50;

export const obsidianaSello = 75;

export const cantidadArmadura = 6;

export const cantidadArmaduraPve = 6;

export const cantidadRunas = 7;

export const cantidadSellos = 8;

export const armaduraLigera = [
    {
        id: [80248, 80131, 80190, 80111, 80356, 80399]
    }
];

export const armaduraLigeraPve = [
    {
        id: []
    }
];

export const armaduraMedia = [
    {
        id: [80296, 80145, 80578, 80161, 80252, 80281]
    }
];

export const armaduraMediaPve = [
    {
        id: []
    }
];

export const armaduraPesada = [
    {
        id: [80384, 80435, 80254, 80205, 80277, 80557]
    }
];

export const armaduraPesadaPve = [
    {
        id: []
    }
];

export const runa = [
    {
        id: 91536
    }
];

export const sello = [
    {
        id: 91505
    }
];

export const anilloMundo = [
    {
        id: 93105
    }
];

export const anilloRaid = [
    {
        id: 91234
    }
];

export const valeId = [
    {
        id: 88926,
        idWallet: 29
    }
];

export const trebolId = [
    {
        id: 19675
    }
];

export const liId = [
    {
        id: 98327,
        idWallet: 70
    }
];

export const ectoplasmaId = [
    {
        id: 19721,
        icon: "https://render.guildwars2.com/file/18CE5D78317265000CF3C23ED76AB3CEE86BA60E/65941.png"
    }
];

export const obsidianaId = [
    {
        id: 19925
    }
];

export const lingoteAurico = [
    {
        id: 73537,
        cantidad: 5,
        icon: "https://render.guildwars2.com/file/19D0522B1EEF07A6FD94285167F14CD1AC6FCE6B/1202988.png"
    }
]

export const placaReclamada = [
    {
        id: 74356,
        cantidad: 5,
        icon: "https://render.guildwars2.com/file/AC2729C25DE5C2A3E925083570C2161F52280163/1203052.png"
    }
]

export const huevoChak = [
    {
        id: 72205,
        cantidad: 5,
        icon: "https://render.guildwars2.com/file/4A58480BE6669B605E909F44EAE64896DB030CDD/62389.png"
    }
]

export const montonCristalLuminoso = [
    {
        id: 89271,
        cantidadRuna: 500,
        cantidadSello: 750,
        icon: "https://render.guildwars2.com/file/607AA1A4574FA66006FFB57C0B2DDBAAFDE50CD6/2063471.png"
    }
]

export const talismanBrillantez = [
    {
        id: 89103,
        cantidad: 50,
        icon: "https://render.guildwars2.com/file/E4B016CDF70960156803FD04C425BF9A4C382D95/2063466.png"
    }
]

export const talismanPotencia = [
    {
        id: 89258,
        cantidad: 50,
        icon: "https://render.guildwars2.com/file/2949679FC79B6808EB437A0434B59D5642D86BCC/2063465.png"
    }
]

export const talismanHabilidad = [
    {
        id: 89216,
        cantidad: 50,
        icon: "https://render.guildwars2.com/file/F99BAAD3C841D8AC4E5C621972454E400E3CD85D/2063467.png"
    }
]

export const simboloControl = [
    {
        id: 89098,
        cantidad: 75,
        icon: "https://render.guildwars2.com/file/BF26E2BE4C6F3F0F24194A0B0209800DB9E8D118/2063469.png"
    }
]

export const simboloMejora = [
    {
        id: 89141,
        cantidad: 75,
        icon: "https://render.guildwars2.com/file/2B7554FA80CC0279F807BB66DD15F1D66FDDB6D5/2063468.png"
    }
]

export const simboloDolor = [
    {
        id: 89182,
        cantidad: 75,
        icon: "https://render.guildwars2.com/file/ED0DC52CEEB4A22263EB25EAFDCF570E177F161C/2063464.png"
    }
]

export const monedaMistica = [
    {
        id: 19976,
        icon: "https://render.guildwars2.com/file/AB0317DF5B0E1BA47436A5420248660765154C08/62864.png"
    }
]

export const aspectoMistico = [
    {
        id: 89105,
        cantidad: 50,
        icon: "https://render.guildwars2.com/file/24FD0F0BF29208A1404702FF0D09BE9B0E762578/2063473.png"
    }
]

export const motaMistica = [
    {
        id: 89133,
        cantidad: 75,
        icon: "https://render.guildwars2.com/file/069CC52BA2E635EEF6D115C90F19660B34324B1F/2063472.png"
    }
]

export const piezaAeronave = [
    {
        id: 74494,
        idWallet: 19,
        cantidad: 250,
        icon: "https://render.guildwars2.com/file/524C1CF964A3349003095F17DF4B3A476F073755/1029832.png"
    }
]

export const trozoAurilio = [
    {
        id: 75012,
        idWallet: 22,
        cantidad: 250,
        icon: "https://render.guildwars2.com/file/5D74D6D3D8179FC49D572975CC5E0CC701025508/1206836.png"
    }
]

export const cristalLineaLey = [
    {
        id: 0,
        idWallet: 20,
        cantidad: 250,
        icon: "https://render.guildwars2.com/file/DD02946A3AB4076C500836533F67303EE464A6AC/1206837.png"
    }
];

export const esenciaDesesperacionT1 = [
    {
        id: 100078,
        tier: 1,
        cantidad: 3000 //por pieza de armadura pve
    }
];

export const esenciaAvariciaT2 = [
    {
        id: 100414,
        tier: 2,
        cantidad: 1200 //por pieza de armadura pve
    }
];

export const esenciaTriunfoT3 = [
    {
        id: 100055,
        tier: 3,
        cantidad: 600 //por pieza de armadura pve
    }
];

export const esenciaAmalgamadaKryptis = [
    {
        id: 100930,
        cantidad: 12, //por pieza de armadura pve
        cantidadt1: 250,
        cantidadt2: 100,
        cantidadt3: 50,
        cantidadectos: 50
    }
];

export const armaduraAstral = [
    {   
        // se fabrica un peso cualquiera y desbloquea todos los demas pesos
        id: [100026, 100282, 100349, 100459, 100162, 100392],
        idSkin: [11755, 11637, 11742, 11722, 11694, 11692],
        // cada una de las 6 piezas:
        cantidadTrebol: 1,
        cantidadEsenciaAmalgamadaKryptis: 1,
        cantidadNotasInvestigacion: 500,
        cantidadCajaRelampagosCapturados: 2, // solo 3 piezas: botas, guantes, hombreras
        cantidadMorralPolvoEstrellas: 2 // solo 3 piezas: pecho, cabeza, pantalones
    }
];

export const notasInvestigacionArmaduraPve = [
    {
        idWallet: 61,
        cantidad: 2500 //por pieza de armadura pve
    }
];

export const CajaRelampagosCapturadosArmaduraPve = [
    {
        id: 100267,
        cantidad: 5 //por pieza de armadura pve
    }
];

export const MorralPolvoEstrellasArmaduraPve = [
    {
        id: 99964,
        cantidad: 5 //por pieza de armadura pve
    }
];

export const donArchipielago = [
    {
        id: 100544,
        cantidad: 1 //por pieza de armadura pve
    }
];

export const donAmnytas = [
    {
        id: 100798,
        cantidad: 1 //por pieza de armadura pve
    }
];

export const legendaryWeapons1 = [
    {
        nombre: "Colmilloescarcha",
        id: 30684,
        idWardrobe: 4674,
        tipo: "Hacha",
        tengo: 0,
        pre: "Diente de Colmilloescarcha",
        preId: 29166,
        icon: "https://wiki.guildwars2.com/images/1/18/Frostfang.png",
        wiki: "https://wiki.guildwars2.com/wiki/Frostfang",
        wikiPre: "https://wiki.guildwars2.com/wiki/Tooth_of_Frostfang",
        precioTpVenta: 0,
        precioTpVentaS: "",
        precioTpVentaPre: 0,
        precioTpVentaSPre: ""
    },
    {
        nombre: "Incineradora",
        id: 30687,
        idWardrobe: 4682,
        tipo: "Daga",
        tengo: 0,
        pre: "Chispa",
        preId: 29167,
        icon: "https://wiki.guildwars2.com/images/5/5b/Incinerator.png",
        wiki: "https://wiki.guildwars2.com/wiki/Incinerator",
        wikiPre: "https://wiki.guildwars2.com/wiki/Spark_(weapon)",
        precioTpVenta: 0,
        precioTpVentaS: "",
        precioTpVentaPre: 0,
        precioTpVentaSPre: ""
    },
    {
        nombre: "El Festín",
        id: 30692,
        idWardrobe: 4670,
        tipo: "Maza",
        tengo: 0,
        pre: "El Energizador",
        preId: 29173,
        icon: "https://wiki.guildwars2.com/images/3/36/The_Moot.png",
        wiki: "https://wiki.guildwars2.com/wiki/The_Moot",
        wikiPre: "https://wiki.guildwars2.com/wiki/The_Energizer",
        precioTpVenta: 0,
        precioTpVentaS: "",
        precioTpVentaPre: 0,
        precioTpVentaSPre: ""
    },
    {
        nombre: "Gracia",
        id: 30693,
        idWardrobe: 4668,
        tipo: "Pistola",
        tengo: 0,
        pre: "Pistola del Caos",
        preId: 29174,
        icon: "https://wiki.guildwars2.com/images/e/e7/Quip.png",
        wiki: "https://wiki.guildwars2.com/wiki/Quip",
        wikiPre: "https://wiki.guildwars2.com/wiki/Chaos_Gun",
        precioTpVenta: 0,
        precioTpVentaS: "",
        precioTpVentaPre: 0,
        precioTpVentaSPre: ""
    },
    {
        nombre: "Meteorlógico",
        id: 30695,
        idWardrobe: 4673,
        tipo: "Cetro",
        tengo: 0,
        pre: "Tormenta",
        preId: 29176,
        icon: "https://wiki.guildwars2.com/images/5/59/Meteorlogicus.png",
        wiki: "https://wiki.guildwars2.com/wiki/Meteorlogicus",
        wikiPre: "https://wiki.guildwars2.com/wiki/Storm",
        precioTpVenta: 0,
        precioTpVentaS: "",
        precioTpVentaPre: 0,
        precioTpVentaSPre: ""
    },
    {
        nombre: "Haz",
        id: 30699,
        idWardrobe: 4684,
        tipo: "Espada",
        tengo: 0,
        pre: "Zas",
        preId: 29181,
        icon: "https://wiki.guildwars2.com/images/8/8e/Bolt.png",
        wiki: "https://wiki.guildwars2.com/wiki/Bolt",
        wikiPre: "https://wiki.guildwars2.com/wiki/Zap",
        precioTpVenta: 0,
        precioTpVentaS: "",
        precioTpVentaPre: 0,
        precioTpVentaSPre: ""
    },
    {
        nombre: "El Juglar",
        id: 30688,
        idWardrobe: 4672,
        tipo: "Foco",
        tengo: 0,
        pre: "El Bardo",
        preId: 29168,
        icon: "https://wiki.guildwars2.com/images/7/74/The_Minstrel.png",
        wiki: "https://wiki.guildwars2.com/wiki/The_Minstrel",
        wikiPre: "https://wiki.guildwars2.com/wiki/The_Bard",
        precioTpVenta: 0,
        precioTpVentaS: "",
        precioTpVentaPre: 0,
        precioTpVentaSPre: ""
    },
    {
        nombre: "Las Profecías del Buscador de la Llama",
        id: 30696,
        idWardrobe: 4675,
        tipo: "Escudo",
        tengo: 0,
        pre: "El Elegido",
        preId: 29177,
        icon: "https://wiki.guildwars2.com/images/e/e7/The_Flameseeker_Prophecies.png",
        wiki: "https://wiki.guildwars2.com/wiki/The_Flameseeker_Prophecies",
        wikiPre: "https://wiki.guildwars2.com/wiki/The_Chosen",
        precioTpVenta: 0,
        precioTpVentaS: "",
        precioTpVentaPre: 0,
        precioTpVentaSPre: ""
    },
    {
        nombre: "Rodgort",
        id: 30700,
        idWardrobe: 4665,
        tipo: "Antorcha",
        tengo: 0,
        pre: "Llama de Rodgort",
        preId: 29182,
        icon: "https://wiki.guildwars2.com/images/0/0e/Rodgort.png",
        wiki: "https://wiki.guildwars2.com/wiki/Rodgort",
        wikiPre: "https://wiki.guildwars2.com/wiki/Rodgort%27s_Flame",
        precioTpVenta: 0,
        precioTpVentaS: "",
        precioTpVentaPre: 0,
        precioTpVentaSPre: ""
    },
    {
        nombre: "Aullador",
        id: 30702,
        idWardrobe: 4667,
        tipo: "Cuerno de guerra",
        tengo: 0,
        pre: "Aullido",
        preId: 29184,
        icon: "https://wiki.guildwars2.com/images/e/e4/Howler.png",
        wiki: "https://wiki.guildwars2.com/wiki/Howler",
        wikiPre: "https://wiki.guildwars2.com/wiki/Howl",
        precioTpVenta: 0,
        precioTpVentaS: "",
        precioTpVentaPre: 0,
        precioTpVentaSPre: ""
    },
    {
        nombre: "Amanecer",
        id: 30703,
        idWardrobe: 4679,
        tipo: "Mandoble",
        tengo: 0,
        pre: "Alba",
        preId: 29169,
        icon: "https://wiki.guildwars2.com/images/7/79/Sunrise.png",
        wiki: "https://wiki.guildwars2.com/wiki/Sunrise",
        wikiPre: "https://wiki.guildwars2.com/wiki/Dawn",
        precioTpVenta: 0,
        precioTpVentaS: "",
        precioTpVentaPre: 0,
        precioTpVentaSPre: ""
    },
    {
        nombre: "Crepúsculo",
        id: 30704,
        idWardrobe: 4680,
        tipo: "Mandoble",
        tengo: 0,
        pre: "Anochecer",
        preId: 29185,
        icon: "https://wiki.guildwars2.com/images/d/d9/Twilight.png",
        wiki: "https://wiki.guildwars2.com/wiki/Twilight",
        wikiPre: "https://wiki.guildwars2.com/wiki/Dusk",
        precioTpVenta: 0,
        precioTpVentaS: "",
        precioTpVentaPre: 0,
        precioTpVentaSPre: ""
    },
    {
        nombre: "El Juggernaut",
        id: 30690,
        idWardrobe: 4681,
        tipo: "Martillo",
        tengo: 0,
        pre: "El Coloso",
        preId: 29170,
        icon: "https://wiki.guildwars2.com/images/b/b6/The_Juggernaut.png",
        wiki: "https://wiki.guildwars2.com/wiki/The_Juggernaut",
        wikiPre: "https://wiki.guildwars2.com/wiki/The_Colossus",
        precioTpVenta: 0,
        precioTpVentaS: "",
        precioTpVentaPre: 0,
        precioTpVentaSPre: ""
    },
    {
        nombre: "Kudzu",
        id: 30685,
        idWardrobe: 4676,
        tipo: "Arco largo",
        tengo: 0,
        pre: "Hoja de Kudzu",
        preId: 29172,
        icon: "https://wiki.guildwars2.com/images/1/17/Kudzu.png",
        wiki: "https://wiki.guildwars2.com/wiki/Kudzu",
        wikiPre: "https://wiki.guildwars2.com/wiki/Leaf_of_Kudzu",
        precioTpVenta: 0,
        precioTpVentaS: "",
        precioTpVentaPre: 0,
        precioTpVentaSPre: ""
    },
    {
        nombre: "El Depredador",
        id: 30694,
        idWardrobe: 4677,
        tipo: "Rifle",
        tengo: 0,
        pre: "El Cazador",
        preId: 29175,
        icon: "https://wiki.guildwars2.com/images/2/2e/The_Predator.png",
        wiki: "https://wiki.guildwars2.com/wiki/The_Predator",
        wikiPre: "https://wiki.guildwars2.com/wiki/The_Hunter",
        precioTpVenta: 0,
        precioTpVentaS: "",
        precioTpVentaPre: 0,
        precioTpVentaSPre: ""
    },
    {
        nombre: "El Soñador",
        id: 30686,
        idWardrobe: 4669,
        tipo: "Arco corto",
        tengo: 0,
        pre: "El Amante",
        preId: 29178,
        icon: "https://wiki.guildwars2.com/images/f/f3/The_Dreamer.png",
        wiki: "https://wiki.guildwars2.com/wiki/The_Dreamer",
        wikiPre: "https://wiki.guildwars2.com/wiki/The_Lover",
        precioTpVenta: 0,
        precioTpVentaS: "",
        precioTpVentaPre: 0,
        precioTpVentaSPre: ""
    },
    {
        nombre: "El Bifrost",
        id: 30698,
        idWardrobe: 4683,
        tipo: "Báculo",
        tengo: 0,
        pre: "La Leyenda",
        preId: 29180,
        icon: "https://wiki.guildwars2.com/images/8/8b/The_Bifrost.png",
        wiki: "https://wiki.guildwars2.com/wiki/The_Bifrost",
        wikiPre: "https://wiki.guildwars2.com/wiki/The_Legend",
        precioTpVenta: 0,
        precioTpVentaS: "",
        precioTpVentaPre: 0,
        precioTpVentaSPre: ""
    },
    {
        nombre: "Frenesí",
        id: 30697,
        idWardrobe: 4664,
        tipo: "Arpón",
        tengo: 0,
        pre: "Rabia",
        preId: 29179,
        icon: "https://wiki.guildwars2.com/images/f/f1/Frenzy.png",
        wiki: "https://wiki.guildwars2.com/wiki/Frenzy",
        wikiPre: "https://wiki.guildwars2.com/wiki/Rage_(weapon)",
        precioTpVenta: 0,
        precioTpVentaS: "",
        precioTpVentaPre: 0,
        precioTpVentaSPre: ""
    },
    {
        nombre: "Kamohoali'i Kotaki",
        id: 30691,
        idWardrobe: 4671,
        tipo: "Lanza",
        tengo: 0,
        pre: "Carcharias",
        preId: 29171,
        icon: "https://wiki.guildwars2.com/images/a/a8/Kamohoali%27i_Kotaki.png",
        wiki: "https://wiki.guildwars2.com/wiki/Kamohoali%27i_Kotaki",
        wikiPre: "https://wiki.guildwars2.com/wiki/Carcharias",
        precioTpVenta: 0,
        precioTpVentaS: "",
        precioTpVentaPre: 0,
        precioTpVentaSPre: ""
    },
    {
        nombre: "Kraitkin",
        id: 30701,
        idWardrobe: 4666,
        tipo: "Tridente",
        tengo: 0,
        pre: "Veneno",
        preId: 29183,
        icon: "https://wiki.guildwars2.com/images/0/07/Kraitkin.png",
        wiki: "https://wiki.guildwars2.com/wiki/Kraitkin",
        wikiPre: "https://wiki.guildwars2.com/wiki/Venom_(weapon)",
        precioTpVenta: 0,
        precioTpVentaS: "",
        precioTpVentaPre: 0,
        precioTpVentaSPre: ""
    },
];

export const donExploracion = [
    {
        id: 19677,
        tengoEnBanco: 0,
        icon: "https://render.guildwars2.com/file/B0051EB5FF730C9EF7C2A3781D3F9B732D4D1A55/455857.png"
    }
]

export const legendaryWeapons3 = [
    {
        nombre: "Voz de Aurene",
        id: 97783,
        idWardrobe: 10479,
        tipo: "Cuerno de guerra",
        tengo: 0,
        pre: "Voz Dracónica",
        preId: 97513,
        icon: "https://wiki.guildwars2.com/images/a/a0/Aurene%27s_Voice.png",
        wiki: "https://wiki.guildwars2.com/wiki/Aurene%27s_Voice",
        wikiPre: "https://wiki.guildwars2.com/wiki/Dragon%27s_Voice",
        precioTpVenta: 0,
        precioTpVentaS: "",
        precioTpVentaPre: 0,
        precioTpVentaSPre: ""
    },
    {
        nombre: "Mirada de Aurene",
        id: 97165,
        idWardrobe: 10464,
        tipo: "Foco",
        tengo: 0,
        pre: "Mirada Dracónica",
        preId: 96303,
        icon: "https://wiki.guildwars2.com/images/4/4e/Aurene%27s_Gaze.png",
        wiki: "https://wiki.guildwars2.com/wiki/Aurene%27s_Gaze",
        wikiPre: "https://wiki.guildwars2.com/wiki/Dragon%27s_Gaze",
        precioTpVenta: 0,
        precioTpVentaS: "",
        precioTpVentaPre: 0,
        precioTpVentaSPre: ""
    },
    {
        nombre: "Desgarro de Aurene",
        id: 96937,
        idWardrobe: 10745,
        tipo: "Hacha",
        tengo: 0,
        pre: "Desgarro Dracónico",
        preId: 97449,
        icon: "https://wiki.guildwars2.com/images/8/85/Aurene%27s_Rending.png",
        wiki: "https://wiki.guildwars2.com/wiki/Aurene%27s_Rending",
        wikiPre: "https://wiki.guildwars2.com/wiki/Dragon%27s_Rending",
        precioTpVenta: 0,
        precioTpVentaS: "",
        precioTpVentaPre: 0,
        precioTpVentaSPre: ""
    },
    {
        nombre: "Garra de Aurene",
        id: 96203,
        idWardrobe: 10334,
        tipo: "Daga",
        tengo: 0,
        pre: "Garra Dracónica",
        preId: 95967,
        icon: "https://wiki.guildwars2.com/images/a/ac/Aurene%27s_Claw.png",
        wiki: "https://wiki.guildwars2.com/wiki/Aurene%27s_Claw",
        wikiPre: "https://wiki.guildwars2.com/wiki/Dragon%27s_Claw_(weapon)",
        precioTpVenta: 0,
        precioTpVentaS: "",
        precioTpVentaPre: 0,
        precioTpVentaSPre: ""
    },
    {
        nombre: "Cola de Aurene",
        id: 95612,
        idWardrobe: 10322,
        tipo: "Maza",
        tengo: 0,
        pre: "Cola Dracónica",
        preId: 96827,
        icon: "https://wiki.guildwars2.com/images/d/d3/Aurene%27s_Tail.png",
        wiki: "https://wiki.guildwars2.com/wiki/Aurene%27s_Tail",
        wikiPre: "https://wiki.guildwars2.com/wiki/Dragon%27s_Tail",
        precioTpVenta: 0,
        precioTpVentaS: "",
        precioTpVentaPre: 0,
        precioTpVentaSPre: ""
    },
    {
        nombre: "Razonamiento de Aurene",
        id: 95808,
        idWardrobe: 10328,
        tipo: "Pistola",
        tengo: 0,
        pre: "Razonamiento Dracónico",
        preId: 96915,
        icon: "https://wiki.guildwars2.com/images/2/29/Aurene%27s_Argument.png",
        wiki: "https://wiki.guildwars2.com/wiki/Aurene%27s_Argument",
        wikiPre: "https://wiki.guildwars2.com/wiki/Dragon%27s_Argument",
        precioTpVenta: 0,
        precioTpVentaS: "",
        precioTpVentaPre: 0,
        precioTpVentaSPre: ""
    },
    {
        nombre: "Sabiduría de Aurene",
        id: 96221,
        idWardrobe: 10276,
        tipo: "Cetro",
        tengo: 0,
        pre: "Sabiduría Dracónica",
        preId: 96193,
        icon: "https://wiki.guildwars2.com/images/4/4d/Aurene%27s_Wisdom.png",
        wiki: "https://wiki.guildwars2.com/wiki/Aurene%27s_Wisdom",
        wikiPre: "https://wiki.guildwars2.com/wiki/Dragon%27s_Wisdom",
        precioTpVenta: 0,
        precioTpVentaS: "",
        precioTpVentaPre: 0,
        precioTpVentaSPre: ""
    },
    {
        nombre: "Colmillo de Aurene",
        id: 95675,
        idWardrobe: 10702,
        tipo: "Espada",
        tengo: 0,
        pre: "Colmillo Dracónico",
        preId: 95994,
        icon: "https://wiki.guildwars2.com/images/2/26/Aurene%27s_Fang.png",
        wiki: "https://wiki.guildwars2.com/wiki/Aurene%27s_Fang",
        wikiPre: "https://wiki.guildwars2.com/wiki/Dragon%27s_Fang",
        precioTpVenta: 0,
        precioTpVentaS: "",
        precioTpVentaPre: 0,
        precioTpVentaSPre: ""
    },
    {
        nombre: "Escama de Aurene",
        id: 96028,
        idWardrobe: 10652,
        tipo: "Escudo",
        tengo: 0,
        pre: "Escama Dracónica",
        preId: 97691,
        icon: "https://wiki.guildwars2.com/images/d/da/Aurene%27s_Scale.png",
        wiki: "https://wiki.guildwars2.com/wiki/Aurene%27s_Scale",
        wikiPre: "https://wiki.guildwars2.com/wiki/Dragon%27s_Scale",
        precioTpVenta: 0,
        precioTpVentaS: "",
        precioTpVentaPre: 0,
        precioTpVentaSPre: ""
    },
    {
        nombre: "Aliento de Aurene",
        id: 97099,
        idWardrobe: 10756,
        tipo: "Antorcha",
        tengo: 0,
        pre: "Aliento Dracónico",
        preId: 96925,
        icon: "https://wiki.guildwars2.com/images/c/c9/Aurene%27s_Breath.png",
        wiki: "https://wiki.guildwars2.com/wiki/Aurene%27s_Breath",
        wikiPre: "https://wiki.guildwars2.com/wiki/Dragon%27s_Breath",
        precioTpVenta: 0,
        precioTpVentaS: "",
        precioTpVentaPre: 0,
        precioTpVentaSPre: ""
    },
    {
        nombre: "Mordisco de Aurene",
        id: 96356,
        idWardrobe: 10289,
        tipo: "Mandoble",
        tengo: 0,
        pre: "Mordisco Dracónico",
        preId: 96357,
        icon: "https://wiki.guildwars2.com/images/e/e0/Aurene%27s_Bite.png",
        wiki: "https://wiki.guildwars2.com/wiki/Aurene%27s_Bite",
        wikiPre: "https://wiki.guildwars2.com/wiki/Dragon%27s_Bite",
        precioTpVenta: 0,
        precioTpVentaS: "",
        precioTpVentaPre: 0,
        precioTpVentaSPre: ""
    },
    {
        nombre: "Peso de Aurene",
        id: 95684,
        idWardrobe: 10572,
        tipo: "Martillo",
        tengo: 0,
        pre: "Peso Dracónico",
        preId: 95920,
        icon: "https://wiki.guildwars2.com/images/9/95/Aurene%27s_Weight.png",
        wiki: "https://wiki.guildwars2.com/wiki/Aurene%27s_Weight",
        wikiPre: "https://wiki.guildwars2.com/wiki/Dragon%27s_Weight",
        precioTpVenta: 0,
        precioTpVentaS: "",
        precioTpVentaPre: 0,
        precioTpVentaSPre: ""
    },
    {
        nombre: "Vuelo de Aurene",
        id: 97590,
        idWardrobe: 10599,
        tipo: "Arco largo",
        tengo: 0,
        pre: "Vuelo Dracónico",
        preId: 95834,
        icon: "https://wiki.guildwars2.com/images/f/f3/Aurene%27s_Flight.png",
        wiki: "https://wiki.guildwars2.com/wiki/Aurene%27s_Flight",
        wikiPre: "https://wiki.guildwars2.com/wiki/Dragon%27s_Flight",
        precioTpVenta: 0,
        precioTpVentaS: "",
        precioTpVentaPre: 0,
        precioTpVentaSPre: ""
    },
    {
        nombre: "Persuasión de Aurene",
        id: 97377,
        idWardrobe: 10413,
        tipo: "Rifle",
        tengo: 0,
        pre: "Persuasión Dracónica",
        preId: 97267,
        icon: "https://wiki.guildwars2.com/images/b/b8/Aurene%27s_Persuasion.png",
        wiki: "https://wiki.guildwars2.com/wiki/Aurene%27s_Persuasion",
        wikiPre: "https://wiki.guildwars2.com/wiki/Dragon%27s_Persuasion",
        precioTpVenta: 0,
        precioTpVentaS: "",
        precioTpVentaPre: 0,
        precioTpVentaSPre: ""
    },
    {
        nombre: "Ala de Aurene",
        id: 97077,
        idWardrobe: 10581,
        tipo: "Arco corto",
        tengo: 0,
        pre: "Ala Dracónica",
        preId: 96330,
        icon: "https://wiki.guildwars2.com/images/a/af/Aurene%27s_Wing.png",
        wiki: "https://wiki.guildwars2.com/wiki/Aurene%27s_Wing",
        wikiPre: "https://wiki.guildwars2.com/wiki/Dragon%27s_Wing",
        precioTpVenta: 0,
        precioTpVentaS: "",
        precioTpVentaPre: 0,
        precioTpVentaSPre: ""
    },
    {
        nombre: "Reflexión de Aurene",
        id: 96652,
        idWardrobe: 10536,
        tipo: "Báculo",
        tengo: 0,
        pre: "Reflexión Dracónica",
        preId: 95814,
        icon: "https://wiki.guildwars2.com/images/c/cf/Aurene%27s_Insight.png",
        wiki: "https://wiki.guildwars2.com/wiki/Aurene%27s_Insight",
        wikiPre: "https://wiki.guildwars2.com/wiki/Dragon%27s_Insight",
        precioTpVenta: 0,
        precioTpVentaS: "",
        precioTpVentaPre: 0,
        precioTpVentaSPre: ""
    },
]