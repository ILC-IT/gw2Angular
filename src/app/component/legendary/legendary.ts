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

export interface otrosLegendarios {
    id: number | number[],
    nombre: string,
    tengo: number
    tipo: string,
    modo: string,
    icon: string,
    wiki: string
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

export const idsPreciosVarios = "19976, 19721, 97790, 96347, 96978, 68063, 96088, 96722";

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
        id: [101516, 101462, 101499, 101536, 101501, 101535],
        idSkin: [12063, 12022, 12031, 12056, 12067, 12098],
        idSuffused: [12171, 12136, 12143, 12145, 12162, 12201],
        idSuffusedSkin: [101887, 101929, 101745, 101733, 101747, 101892],
        nombre: "Armadura Obsidiana Ligera",
        tengo: 0,
        tipo: "Armadura",
        modo: "PvE",
        icon: "https://wiki.guildwars2.com/images/b/bc/Obsidian_Light_Crown.png",
        wiki: "https://wiki.guildwars2.com/wiki/Obsidian_armor"
    }
];

export const armaduraMedia = [
    {
        id: [80296, 80145, 80578, 80161, 80252, 80281]
    }
];

export const armaduraMediaPve = [
    {
        id: [101614, 101645, 101556, 101570, 101579, 101602],
        idSkin: [12068, 12082, 12086, 12093, 12078, 12071],
        idSuffused: [12167, 12202, 12168, 12154, 12196, 12186],
        idSuffusedSkin: [101879, 101744, 101899, 101783, 101918, 101815],
        nombre: "Armadura Obsidiana Media",
        tengo: 0,
        tipo: "Armadura",
        modo: "PvE",
        icon: "https://wiki.guildwars2.com/images/5/56/Obsidian_Medium_Mask.png",
        wiki: "https://wiki.guildwars2.com/wiki/Obsidian_armor"
    }
];

export const armaduraPesada = [
    {
        id: [80384, 80435, 80254, 80205, 80277, 80557]
    }
];

export const armaduraPesadaPve = [
    {
        id: [101544, 101551, 101521, 101609, 101568, 101460],
        idSkin: [12030, 12064, 12060, 12090, 12049, 12048],
        idSuffused: [12200, 12155, 12182, 12214, 12212, 12190],
        idSuffusedSkin: [101716, 101884, 101809, 101763, 101825, 101831],
        nombre: "Armadura Obsidiana Pesada",
        tengo: 0,
        tipo: "Armadura",
        modo: "PvE",
        icon: "https://wiki.guildwars2.com/images/e/ee/Obsidian_Heavy_Helmet.png",
        wiki: "https://wiki.guildwars2.com/wiki/Obsidian_armor"
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
        id: 93105,
        nombre: "Confluencia",
        tengo: 0,
        tipo: "Anillo",
        modo: "WvW",
        icon: "https://wiki.guildwars2.com/images/8/85/Conflux.png",
        wiki: "https://wiki.guildwars2.com/wiki/Conflux"
    }
];

export const anilloRaid = [
    {
        id: 91234,
        nombre: "Coalescencia",
        tengo: 0,
        tipo: "Anillo",
        modo: "PvE",
        icon: "https://wiki.guildwars2.com/images/d/d9/Gift_of_Prescience.png",
        wiki: "https://wiki.guildwars2.com/wiki/Coalescence"
    }
];

export const legendaryAccessory = [
    {
        id: 81908,
        nombre: "Aurora",
        tengo: 0,
        tipo: "Accesorio",
        modo: "PvE",
        icon: "https://wiki.guildwars2.com/images/8/89/Aurora.png",
        wiki: "https://wiki.guildwars2.com/wiki/Aurora"
    },
    {
        id: 91048,
        nombre: "Vision",
        tengo: 0,
        tipo: "Accesorio",
        modo: "PvE",
        icon: "https://wiki.guildwars2.com/images/1/18/Vision.png",
        wiki: "https://wiki.guildwars2.com/wiki/Vision"
    }
];

export const amuletoPvE = [
    {
        id: 95380,
        nombre: "Insignia de Campeón Prismático",
        tengo: 0,
        tipo: "Amuleto",
        modo: "PvE",
        icon: "https://wiki.guildwars2.com/images/7/70/Prismatic_Champion%27s_Regalia.png",
        wiki: "https://wiki.guildwars2.com/wiki/Prismatic_Champion%27s_Regalia"
    }
];

export const amuletoPvP = [
    {
        id: 92991,
        nombre: "Transcendencia",
        tengo: 0,
        tipo: "Amuleto",
        modo: "PvP",
        icon: "https://wiki.guildwars2.com/images/8/85/Transcendence.png",
        wiki: "https://wiki.guildwars2.com/wiki/Transcendence"
    }
];

export const legendaryRelic = [
    {
        id: 101582,
        nombre: "Reliquia Legendaria",
        tengo: 0,
        tipo: "Reliquia",
        modo: "PvE",
        icon: "https://wiki.guildwars2.com/images/c/ce/Legendary_Relic.png",
        wiki: "https://wiki.guildwars2.com/wiki/Legendary_Relic"
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
        id: 19675,
        tengo: 0,
        icon: "https://wiki.guildwars2.com/images/7/7c/Mystic_Clover.png"
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
];

export const placaReclamada = [
    {
        id: 74356,
        cantidad: 5,
        icon: "https://render.guildwars2.com/file/AC2729C25DE5C2A3E925083570C2161F52280163/1203052.png"
    }
];

export const huevoChak = [
    {
        id: 72205,
        cantidad: 5,
        icon: "https://render.guildwars2.com/file/4A58480BE6669B605E909F44EAE64896DB030CDD/62389.png"
    }
];

export const montonCristalLuminoso = [
    {
        id: 89271,
        cantidadRuna: 500,
        cantidadSello: 750,
        icon: "https://render.guildwars2.com/file/607AA1A4574FA66006FFB57C0B2DDBAAFDE50CD6/2063471.png"
    }
];

export const talismanBrillantez = [
    {
        id: 89103,
        cantidad: 50,
        icon: "https://render.guildwars2.com/file/E4B016CDF70960156803FD04C425BF9A4C382D95/2063466.png"
    }
];

export const talismanPotencia = [
    {
        id: 89258,
        cantidad: 50,
        icon: "https://render.guildwars2.com/file/2949679FC79B6808EB437A0434B59D5642D86BCC/2063465.png"
    }
];

export const talismanHabilidad = [
    {
        id: 89216,
        cantidad: 50,
        icon: "https://render.guildwars2.com/file/F99BAAD3C841D8AC4E5C621972454E400E3CD85D/2063467.png"
    }
];

export const simboloControl = [
    {
        id: 89098,
        cantidad: 75,
        icon: "https://render.guildwars2.com/file/BF26E2BE4C6F3F0F24194A0B0209800DB9E8D118/2063469.png"
    }
];

export const simboloMejora = [
    {
        id: 89141,
        cantidad: 75,
        icon: "https://render.guildwars2.com/file/2B7554FA80CC0279F807BB66DD15F1D66FDDB6D5/2063468.png"
    }
];

export const simboloDolor = [
    {
        id: 89182,
        cantidad: 75,
        icon: "https://render.guildwars2.com/file/ED0DC52CEEB4A22263EB25EAFDCF570E177F161C/2063464.png"
    }
];

export const monedaMistica = [
    {
        id: 19976,
        icon: "https://render.guildwars2.com/file/AB0317DF5B0E1BA47436A5420248660765154C08/62864.png"
    }
];

export const insigniaFarolero = [
    {
        id: 97790,
        icon: "https://render.guildwars2.com/file/461D091230BAC7A857D77FABD54C3E45685ADCFB/2595114.png"
    }
];

export const ambarGris = [
    {
        id: 96347,
        icon: "https://render.guildwars2.com/file/C113C406281D94BB560701DF350BCA9AF592AFE9/2597025.png"
    }
];

export const vetusta = [
    {
        id: 96978,
        icon: "https://render.guildwars2.com/file/04DDE41E0EF34E2962E9A44CAE609FAA05283A08/2595107.png"
    }
];

export const amalgamada = [
    {
        id: 68063,
        icon: "https://wiki.guildwars2.com/images/c/c3/Amalgamated_Gemstone.png"
    }
];

export const recuerdoAurene = [
    {
        id: 96088,
        icon: "https://wiki.guildwars2.com/images/a/ab/Memory_of_Aurene.png"
    }
];

export const piedraJade = [
    {
        id: 96722,
        icon: "https://wiki.guildwars2.com/images/f/f8/Jade_Runestone.png"
    }
];

export const aspectoMistico = [
    {
        id: 89105,
        cantidad: 50,
        icon: "https://render.guildwars2.com/file/24FD0F0BF29208A1404702FF0D09BE9B0E762578/2063473.png"
    }
];

export const motaMistica = [
    {
        id: 89133,
        cantidad: 75,
        icon: "https://render.guildwars2.com/file/069CC52BA2E635EEF6D115C90F19660B34324B1F/2063472.png"
    }
];

export const piezaAeronave = [
    {
        id: 74494,
        idWallet: 19,
        cantidad: 250,
        icon: "https://render.guildwars2.com/file/524C1CF964A3349003095F17DF4B3A476F073755/1029832.png"
    }
];

export const trozoAurilio = [
    {
        id: 75012,
        idWallet: 22,
        cantidad: 250,
        icon: "https://render.guildwars2.com/file/5D74D6D3D8179FC49D572975CC5E0CC701025508/1206836.png"
    }
];

export const cristalLineaLey = [
    {
        id: 0,
        idWallet: 20,
        cantidad: 250,
        icon: "https://render.guildwars2.com/file/DD02946A3AB4076C500836533F67303EE464A6AC/1206837.png"
    }
];

export const magiaLiberada = [
    {
        idWallet: 32,
        tengoEnCartera: 0,
        icon: "https://wiki.guildwars2.com/images/f/f5/Unbound_Magic.png"
    }
];

export const magiaVolatil = [
    {
        idWallet: 45,
        tengoEnCartera: 0,
        icon: "https://wiki.guildwars2.com/images/5/54/Volatile_Magic.png"
    }
];

export const esenciaDesesperacionT1 = [
    {
        id: 100078,
        idWallet: 78,
        icon: "https://render.guildwars2.com/file/3607B5800CD5F9C279E54E1B2E545FF06717E143/3123731.png",
        tier: 1,
        cantidad: 3000 //por pieza de armadura pve
    }
];

export const esenciaAvariciaT2 = [
    {
        id: 100414,
        idWallet: 80,
        icon: "https://render.guildwars2.com/file/437B00D7059E4B9AFF2EF732B01F6C1F6B34A0F1/3123732.png",
        tier: 2,
        cantidad: 1200 //por pieza de armadura pve
    }
];

export const esenciaTriunfoT3 = [
    {
        id: 100055,
        idWallet: 79,
        icon: "https://render.guildwars2.com/file/67B869ABAF74E20CB5652068F3DB0B060ED3C3E4/3123734.png",
        tier: 3,
        cantidad: 600 //por pieza de armadura pve
    }
];

export const esenciaAmalgamadaKryptis = [
    {
        id: 100930,
        icon: "https://wiki.guildwars2.com/images/c/c0/Amalgamated_Rift_Essence.png",
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

export const armaduraOneiros = [
    {   
        // se fabrica un peso cualquiera y desbloquea todos los demas pesos
        id: [101129, 101208, 101149, 101258, 101165, 101286],
        idSkin: [11922, 11876, 11875, 11900, 11917, 11898],
        // cada una de las 6 piezas:
        cantidadTrebol: 1,
        cantidadEsenciaAmalgamadaKryptis: 1,
        cantidadNotasInvestigacion: 500,
        cantidadCoaguloGritosCongelados: 1,
    }
];

export const notasInvestigacion = [
    {
        idWallet: 61,
        cantidadArmaduraPve: 2500, //por pieza de armadura pve
        tengoEnCartera: 0,
        icon: "https://wiki.guildwars2.com/images/a/a1/Research_Note.png"
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

export const CoaguloGritosCongeladosArmaduraPve = [
    {
        id: 100098,
        // cantidad: 5 //por pieza de armadura pve
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
        precioTpVentaSPre: "",
        precioOrdenable: ""
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
        precioTpVentaSPre: "",
        precioOrdenable: ""
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
        precioTpVentaSPre: "",
        precioOrdenable: ""
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
        precioTpVentaSPre: "",
        precioOrdenable: ""
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
        precioTpVentaSPre: "",
        precioOrdenable: ""
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
        precioTpVentaSPre: "",
        precioOrdenable: ""
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
        precioTpVentaSPre: "",
        precioOrdenable: ""
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
        precioTpVentaSPre: "",
        precioOrdenable: ""
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
        precioTpVentaSPre: "",
        precioOrdenable: ""
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
        precioTpVentaSPre: "",
        precioOrdenable: ""
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
        precioTpVentaSPre: "",
        precioOrdenable: ""
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
        precioTpVentaSPre: "",
        precioOrdenable: ""
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
        precioTpVentaSPre: "",
        precioOrdenable: ""
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
        precioTpVentaSPre: "",
        precioOrdenable: ""
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
        precioTpVentaSPre: "",
        precioOrdenable: ""
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
        precioTpVentaSPre: "",
        precioOrdenable: ""
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
        precioTpVentaSPre: "",
        precioOrdenable: ""
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
        precioTpVentaSPre: "",
        precioOrdenable: ""
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
        precioTpVentaSPre: "",
        precioOrdenable: ""
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
        precioTpVentaSPre: "",
        precioOrdenable: ""
    },
    {
        nombre: "Eternidad",
        id: 30689,
        idWardrobe: 4678,
        tipo: "Mandoble",
        tengo: 0,
        pre: "Amanecer, Crepúsculo",
        preId: 30703, //30704
        icon: "https://wiki-es.guildwars2.com/images/3/31/Eternidad.png",
        wiki: "https://wiki-es.guildwars2.com/wiki/Eternidad",
        wikiPre: "https://wiki.guildwars2.com/wiki/Sunrise",
        precioTpVenta: 0,
        precioTpVentaS: "",
        precioTpVentaPre: 0,
        precioTpVentaSPre: "",
        precioOrdenable: ""
    }
];

export const donExploracion = [
    {
        id: 19677,
        tengoEnBanco: 0,
        icon: "https://render.guildwars2.com/file/B0051EB5FF730C9EF7C2A3781D3F9B732D4D1A55/455857.png"
    }
];

export const donBatalla = [
    {
        id: 19678,
        tengoEnBanco: 0,
        icon: "https://wiki.guildwars2.com/images/2/25/Gift_of_Battle.png"
    }
];

export const legendaryWeapons2 = [
    {
        nombre: "Astralaria",
        id: 76158,
        idWardrobe: 6506,
        tipo: "Hacha",
        tengo: 0,
        pre: "El Mecanismo",
        preId: 71426,
        icon: "https://wiki.guildwars2.com/images/d/df/Astralaria.png",
        wiki: "https://wiki.guildwars2.com/wiki/Astralaria",
        wikiPre: "https://wiki.guildwars2.com/wiki/The_Mechanism",
    },
    {
        nombre: "Chuka y Champawat",
        id: 78556,
        idWardrobe: 6717,
        tipo: "Arco corto",
        tengo: 0,
        pre: "Tigris",
        preId: 78425,
        icon: "https://wiki.guildwars2.com/images/7/74/Chuka_and_Champawat.png",
        wiki: "https://wiki.guildwars2.com/wiki/Chuka_and_Champawat",
        wikiPre: "https://wiki.guildwars2.com/wiki/Tigris",
    },
    {
        nombre: "Garra del Khan-Ur",
        id: 87109,
        idWardrobe: 8051,
        tipo: "Daga",
        tengo: 0,
        pre: "Garra de Resolución",
        preId: 87037,
        icon: "https://wiki.guildwars2.com/images/0/05/Claw_of_the_Khan-Ur.png",
        wiki: "https://wiki.guildwars2.com/wiki/Claw_of_the_Khan-Ur",
        wikiPre: "https://wiki.guildwars2.com/wiki/Claw_of_Resolution",
    },
    {
        nombre: "Eureka",
        id: 79562,
        idWardrobe: 6966,
        tipo: "Maza",
        tengo: 0,
        pre: "Esfuerzo",
        preId: 79570,
        icon: "https://wiki.guildwars2.com/images/b/b2/Eureka.png",
        wiki: "https://wiki.guildwars2.com/wiki/Eureka",
        wikiPre: "https://wiki.guildwars2.com/wiki/Endeavor",
    },
    {
        nombre: "Exordium",
        id: 90551,
        idWardrobe: 8748,
        tipo: "Mandoble",
        tengo: 0,
        pre: "Exitare",
        preId: 90883,
        icon: "https://wiki.guildwars2.com/images/5/54/Exordium.png",
        wiki: "https://wiki.guildwars2.com/wiki/Exordium",
        wikiPre: "https://wiki.guildwars2.com/wiki/Exitare",
    },
    {
        nombre: "Llamas de Guerra",
        id: 81206,
        idWardrobe: 7206,
        tipo: "Antorcha",
        tengo: 0,
        pre: "Liturgia",
        preId: 81022,
        icon: "https://wiki.guildwars2.com/images/2/26/Flames_of_War.png",
        wiki: "https://wiki.guildwars2.com/wiki/Flames_of_War",
        wikiPre: "https://wiki.guildwars2.com/wiki/Liturgy",
    },
    {
        nombre: "Esperanza",
        id: 72713,
        idWardrobe: 6276,
        tipo: "Pistola",
        tengo: 0,
        pre: "Prototipo",
        preId: 76399,
        icon: "https://wiki.guildwars2.com/images/3/31/HOPE.png",
        wiki: "https://wiki.guildwars2.com/wiki/HOPE",
        wikiPre: "https://wiki.guildwars2.com/wiki/Prototype",
    },
    {
        nombre: "Nunca Más",
        id: 71383,
        idWardrobe: 6466,
        tipo: "Báculo",
        tengo: 0,
        pre: "Báculo del cuervo",
        preId: 74068,
        icon: "https://wiki.guildwars2.com/images/2/21/Nevermore.png",
        wiki: "https://wiki.guildwars2.com/wiki/Nevermore",
        wikiPre: "https://wiki.guildwars2.com/wiki/The_Raven_Staff",
    },
    {
        nombre: "Pharus",
        id: 89854,
        idWardrobe: 8576,
        tipo: "Arco largo",
        tengo: 0,
        pre: "Spero",
        preId: 89886,
        icon: "https://wiki.guildwars2.com/images/3/30/Pharus.png",
        wiki: "https://wiki.guildwars2.com/wiki/Pharus",
        wikiPre: "https://wiki.guildwars2.com/wiki/Spero",
    },
    {
        nombre: "Sharur",
        id: 81839,
        idWardrobe: 7337,
        tipo: "Martillo",
        tengo: 0,
        pre: "Poder de Arah",
        preId: 81634,
        icon: "https://wiki.guildwars2.com/images/0/08/Sharur.png",
        wiki: "https://wiki.guildwars2.com/wiki/Sharur",
        wikiPre: "https://wiki.guildwars2.com/wiki/Might_of_Arah",
    },
    {
        nombre: "Shooshadoo",
        id: 79802,
        idWardrobe: 7024,
        tipo: "Escudo",
        tengo: 0,
        pre: "Amistad",
        preId: 79836,
        icon: "https://wiki.guildwars2.com/images/3/35/Shooshadoo.png",
        wiki: "https://wiki.guildwars2.com/wiki/Shooshadoo",
        wikiPre: "https://wiki.guildwars2.com/wiki/Friendship",
    },
    {
        nombre: "La Atadura de Ipos",
        id: 86098,
        idWardrobe: 7907,
        tipo: "Foco",
        tengo: 0,
        pre: "Ars Goetia",
        preId: 86097,
        icon: "https://wiki.guildwars2.com/images/9/9e/The_Binding_of_Ipos.png",
        wiki: "https://wiki.guildwars2.com/wiki/The_Binding_of_Ipos",
        wikiPre: "https://wiki.guildwars2.com/wiki/Ars_Goetia",
    },
    {
        nombre: "El Buque de Su Majestad Divinidad",
        id: 80488,
        idWardrobe: 7078,
        tipo: "Rifle",
        tengo: 0,
        pre: "El Galeón",
        preId: 80135,
        icon: "https://wiki.guildwars2.com/images/c/cc/The_HMS_Divinity.png",
        wiki: "https://wiki.guildwars2.com/wiki/The_HMS_Divinity",
        wikiPre: "https://wiki.guildwars2.com/wiki/Man_o%27_War",
    },
    {
        nombre: "La Hoja Brillante",
        id: 81957,
        idWardrobe: 7300,
        tipo: "Espada",
        tengo: 0,
        pre: "Salve a la Reina",
        preId: 81812,
        icon: "https://wiki.guildwars2.com/images/5/5d/The_Shining_Blade.png",
        wiki: "https://wiki.guildwars2.com/wiki/The_Shining_Blade",
        wikiPre: "https://wiki.guildwars2.com/wiki/Save_the_Queen",
    },
    {
        nombre: "Verdarach",
        id: 87687,
        idWardrobe: 8145,
        tipo: "Cuerno de guerra",
        tengo: 0,
        pre: "Llamada del Vacío",
        preId: 87764,
        icon: "https://wiki.guildwars2.com/images/3/30/Verdarach.png",
        wiki: "https://wiki.guildwars2.com/wiki/Verdarach",
        wikiPre: "https://wiki.guildwars2.com/wiki/Call_of_the_Void",
    },
    {
        nombre: "Xiuquatl",
        id: 88576,
        idWardrobe: 8389,
        tipo: "Cetro",
        tengo: 0,
        pre: "Tlehco",
        preId: 88851,
        icon: "https://wiki.guildwars2.com/images/2/20/Xiuquatl.png",
        wiki: "https://wiki.guildwars2.com/wiki/Xiuquatl",
        wikiPre: "https://wiki.guildwars2.com/wiki/Tlehco",
    }
];

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
        precioTpVentaSPre: "",
        precioOrdenable: ""
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
        precioTpVentaSPre: "",
        precioOrdenable: ""
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
        precioTpVentaSPre: "",
        precioOrdenable: ""
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
        precioTpVentaSPre: "",
        precioOrdenable: ""
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
        precioTpVentaSPre: "",
        precioOrdenable: ""
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
        precioTpVentaSPre: "",
        precioOrdenable: ""
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
        precioTpVentaSPre: "",
        precioOrdenable: ""
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
        precioTpVentaSPre: "",
        precioOrdenable: ""
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
        precioTpVentaSPre: "",
        precioOrdenable: ""
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
        precioTpVentaSPre: "",
        precioOrdenable: ""
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
        precioTpVentaSPre: "",
        precioOrdenable: ""
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
        precioTpVentaSPre: "",
        precioOrdenable: ""
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
        precioTpVentaSPre: "",
        precioOrdenable: ""
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
        precioTpVentaSPre: "",
        precioOrdenable: ""
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
        precioTpVentaSPre: "",
        precioOrdenable: ""
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
        precioTpVentaSPre: "",
        precioOrdenable: ""
    },
];

export const legendaryWeapons3Variants = [
    {
        nombre: "Desgarro de Aurene",
        tipo: "Hacha",
        zhaitan: "Diseño de Desgarro de Zhaitan",
        zhaitanSkinId: 10730,
        zhaitanTengo: 0,
        mordremoth: "Diseño de Desgarro de Mordremoth",
        mordremothSkinId: 10499,
        mordremothTengo: 0,
        kralkatorrik: "Diseño de Desgarro de Kralkatorrik",
        kralkatorrikSkinId: 10676,
        kralkatorrikTengo: 0,
        primordus: "Diseño de Desgarro de Primordus",
        primordusSkinId: 10696,
        primordusTengo: 0,
        jormag: "Diseño de Desgarro de Jormag",
        jormagSkinId: 10390,
        jormagTengo: 0,
        soowon: "Diseño de Desgarro de Soo-Won",
        soowonSkinId: 10623,
        soowonTengo: 0
    },
    {
        nombre: "Garra de Aurene",
        tipo: "Daga",
        zhaitan: "Diseño de Garra de Zhaitan",
        zhaitanSkinId: 10497,
        zhaitanTengo: 0,
        mordremoth: "Diseño de Garra de Mordremoth",
        mordremothSkinId: 10539,
        mordremothTengo: 0,
        kralkatorrik: "Diseño de Garra de Kralkatorrik",
        kralkatorrikSkinId: 10628,
        kralkatorrikTengo: 0,
        primordus: "Diseño de Garra de Primordus",
        primordusSkinId: 10346,
        primordusTengo: 0,
        jormag: "Diseño de Garra de Jormag",
        jormagSkinId: 10363,
        jormagTengo: 0,
        soowon: "Diseño de Garra de Soo-Won",
        soowonSkinId: 10550,
        soowonTengo: 0
    },
    {
        nombre: "Cola de Aurene",
        tipo: "Maza",
        zhaitan: "Diseño de Cola de Zhaitan",
        zhaitanSkinId: 10284,
        zhaitanTengo: 0,
        mordremoth: "Diseño de Cola de Mordremoth",
        mordremothSkinId: 10436,
        mordremothTengo: 0,
        kralkatorrik: "Diseño de Cola de Kralkatorrik",
        kralkatorrikSkinId: 10329,
        kralkatorrikTengo: 0,
        primordus: "Diseño de Cola de Primordus",
        primordusSkinId: 10645,
        primordusTengo: 0,
        jormag: "Diseño de Cola de Jormag",
        jormagSkinId: 10417,
        jormagTengo: 0,
        soowon: "Diseño de Desgarro de Soo-Won",
        soowonSkinId: 10496,
        soowonTengo: 0
    },
    {
        nombre: "Razonamiento de Aurene",
        tipo: "Pistola",
        zhaitan: "Diseño de Razonamiento de Zhaitan",
        zhaitanSkinId: 10729,
        zhaitanTengo: 0,
        mordremoth: "Diseño de Razonamiento de Mordremoth",
        mordremothSkinId: 10353,
        mordremothTengo: 0,
        kralkatorrik: "Diseño de Razonamiento de Kralkatorrik",
        kralkatorrikSkinId: 10394,
        kralkatorrikTengo: 0,
        primordus: "Diseño de Razonamiento de Primordus",
        primordusSkinId: 10513,
        primordusTengo: 0,
        jormag: "Diseño de Razonamiento de Jormag",
        jormagSkinId: 10480,
        jormagTengo: 0,
        soowon: "Diseño de Razonamiento de Soo-Won",
        soowonSkinId: 10448,
        soowonTengo: 0
    },
    {
        nombre: "Sabiduría de Aurene",
        tipo: "Cetro",
        zhaitan: "Diseño de Sabiduría de Zhaitan",
        zhaitanSkinId: 10593,
        zhaitanTengo: 0,
        mordremoth: "Diseño de Sabiduría de Mordremoth",
        mordremothSkinId: 10381,
        mordremothTengo: 0,
        kralkatorrik: "Diseño de Sabiduría de Kralkatorrik",
        kralkatorrikSkinId: 10685,
        kralkatorrikTengo: 0,
        primordus: "Diseño de Sabiduría de Primordus",
        primordusSkinId: 10674,
        primordusTengo: 0,
        jormag: "Diseño de Sabiduría de Jormag",
        jormagSkinId: 10301,
        jormagTengo: 0,
        soowon: "Diseño de Sabiduría de Soo-Won",
        soowonSkinId: 10490,
        soowonTengo: 0
    },
    {
        nombre: "Colmillo de Aurene",
        tipo: "Espada",
        zhaitan: "Diseño de Colmillo de Zhaitan",
        zhaitanSkinId: 10350,
        zhaitanTengo: 0,
        mordremoth: "Diseño de Colmillo de Mordremoth",
        mordremothSkinId: 10358,
        mordremothTengo: 0,
        kralkatorrik: "Diseño de Colmillo de Kralkatorrik",
        kralkatorrikSkinId: 10453,
        kralkatorrikTengo: 0,
        primordus: "Diseño de Colmillo de Primordus",
        primordusSkinId: 10660,
        primordusTengo: 0,
        jormag: "Diseño de Colmillo de Jormag",
        jormagSkinId: 10553,
        jormagTengo: 0,
        soowon: "Diseño de Colmillo de Soo-Won",
        soowonSkinId: 10596,
        soowonTengo: 0
    },
    {
        nombre: "Mirada de Aurene",
        tipo: "Foco",
        zhaitan: "Diseño de Mirada de Zhaitan",
        zhaitanSkinId: 10422,
        zhaitanTengo: 0,
        mordremoth: "Diseño de Mirada de Mordremoth",
        mordremothSkinId: 10481,
        mordremothTengo: 0,
        kralkatorrik: "Diseño de Mirada de Kralkatorrik",
        kralkatorrikSkinId: 10429,
        kralkatorrikTengo: 0,
        primordus: "Diseño de Mirada de Primordus",
        primordusSkinId: 10366,
        primordusTengo: 0,
        jormag: "Diseño de Mirada de Jormag",
        jormagSkinId: 10449,
        jormagTengo: 0,
        soowon: "Diseño de Mirada de Soo-Won",
        soowonSkinId: 10259,
        soowonTengo: 0
    },
    {
        nombre: "Escama de Aurene",
        tipo: "Escudo",
        zhaitan: "Diseño de Escama de Zhaitan",
        zhaitanSkinId: 10738,
        zhaitanTengo: 0,
        mordremoth: "Diseño de Escama de Mordremoth",
        mordremothSkinId: 10537,
        mordremothTengo: 0,
        kralkatorrik: "Diseño de Escama de Kralkatorrik",
        kralkatorrikSkinId: 10632,
        kralkatorrikTengo: 0,
        primordus: "Diseño de Escama de Primordus",
        primordusSkinId: 10579,
        primordusTengo: 0,
        jormag: "Diseño de Escama de Jormag",
        jormagSkinId: 10332,
        jormagTengo: 0,
        soowon: "Diseño de Escama de Soo-Won",
        soowonSkinId: 10324,
        soowonTengo: 0
    },
    {
        nombre: "Aliento de Aurene",
        tipo: "Antorcha",
        zhaitan: "Diseño de Aliento de Zhaitan",
        zhaitanSkinId: 10266,
        zhaitanTengo: 0,
        mordremoth: "Diseño de Aliento de Mordremoth",
        mordremothSkinId: 10541,
        mordremothTengo: 0,
        kralkatorrik: "Diseño de Aliento de Kralkatorrik",
        kralkatorrikSkinId: 10251,
        kralkatorrikTengo: 0,
        primordus: "Diseño de Aliento de Primordus",
        primordusSkinId: 10311,
        primordusTengo: 0,
        jormag: "Diseño de Aliento de Jormag",
        jormagSkinId: 10697,
        jormagTengo: 0,
        soowon: "Diseño de Aliento de Soo-Won",
        soowonSkinId: 10720,
        soowonTengo: 0
    },
    {
        nombre: "Voz de Aurene",
        tipo: "Cuerno de guerra",
        zhaitan: "Diseño de Voz de Zhaitan",
        zhaitanSkinId: 10410,
        zhaitanTengo: 0,
        mordremoth: "Diseño de Voz de Mordremoth",
        mordremothSkinId: 10415,
        mordremothTengo: 0,
        kralkatorrik: "Diseño de Voz de Kralkatorrik",
        kralkatorrikSkinId: 10355,
        kralkatorrikTengo: 0,
        primordus: "Diseño de Voz de Primordus",
        primordusSkinId: 10288,
        primordusTengo: 0,
        jormag: "Diseño de Voz de Jormag",
        jormagSkinId: 10544,
        jormagTengo: 0,
        soowon: "Diseño de Voz de Soo-Won",
        soowonSkinId: 10244,
        soowonTengo: 0
    },
    {
        nombre: "Mordisco de Aurene",
        tipo: "Mandoble",
        zhaitan: "Diseño de Mordisco de Zhaitan",
        zhaitanSkinId: 10739,
        zhaitanTengo: 0,
        mordremoth: "Diseño de Mordisco de Mordremoth",
        mordremothSkinId: 10347,
        mordremothTengo: 0,
        kralkatorrik: "Diseño de Mordisco de Kralkatorrik",
        kralkatorrikSkinId: 10712,
        kralkatorrikTengo: 0,
        primordus: "Diseño de Mordisco de Primordus",
        primordusSkinId: 10345,
        primordusTengo: 0,
        jormag: "Diseño de Mordisco de Jormag",
        jormagSkinId: 10525,
        jormagTengo: 0,
        soowon: "Diseño de Mordisco de Soo-Won",
        soowonSkinId: 10309,
        soowonTengo: 0
    },
    {
        nombre: "Peso de Aurene",
        tipo: "Martillo",
        zhaitan: "Diseño de Peso de Zhaitan",
        zhaitanSkinId: 10515,
        zhaitanTengo: 0,
        mordremoth: "Diseño de Peso de Mordremoth",
        mordremothSkinId: 10711,
        mordremothTengo: 0,
        kralkatorrik: "Diseño de Peso de Kralkatorrik",
        kralkatorrikSkinId: 10693,
        kralkatorrikTengo: 0,
        primordus: "Diseño de Peso de Primordus",
        primordusSkinId: 10532,
        primordusTengo: 0,
        jormag: "Diseño de Peso de Jormag",
        jormagSkinId: 10294,
        jormagTengo: 0,
        soowon: "Diseño de Peso de Soo-Won",
        soowonSkinId: 10716,
        soowonTengo: 0
    },
    {
        nombre: "Vuelo de Aurene",
        tipo: "Arco largo",
        zhaitan: "Diseño de Vuelo de Zhaitan",
        zhaitanSkinId: 10260,
        zhaitanTengo: 0,
        mordremoth: "Diseño de Vuelo de Mordremoth",
        mordremothSkinId: 10552,
        mordremothTengo: 0,
        kralkatorrik: "Diseño de Vuelo de Kralkatorrik",
        kralkatorrikSkinId: 10748,
        kralkatorrikTengo: 0,
        primordus: "Diseño de Vuelo de Primordus",
        primordusSkinId: 10491,
        primordusTengo: 0,
        jormag: "Diseño de Vuelo de Jormag",
        jormagSkinId: 10250,
        jormagTengo: 0,
        soowon: "Diseño de Vuelo de Soo-Won",
        soowonSkinId: 10564,
        soowonTengo: 0
    },
    {
        nombre: "Persuasión de Aurene",
        tipo: "Rifle",
        zhaitan: "Diseño de Persuasión de Zhaitan",
        zhaitanSkinId: 10517,
        zhaitanTengo: 0,
        mordremoth: "Diseño de Persuasión de Mordremoth",
        mordremothSkinId: 10472,
        mordremothTengo: 0,
        kralkatorrik: "Diseño de Persuasión de Kralkatorrik",
        kralkatorrikSkinId: 10437,
        kralkatorrikTengo: 0,
        primordus: "Diseño de Persuasión de Primordus",
        primordusSkinId: 10388,
        primordusTengo: 0,
        jormag: "Diseño de Persuasión de Jormag",
        jormagSkinId: 10343,
        jormagTengo: 0,
        soowon: "Diseño de Persuasión de Soo-Won",
        soowonSkinId: 10570,
        soowonTengo: 0
    },
    {
        nombre: "Ala de Aurene",
        tipo: "Arco corto",
        zhaitan: "Diseño de Ala de Zhaitan",
        zhaitanSkinId: 10601,
        zhaitanTengo: 0,
        mordremoth: "Diseño de Ala de Mordremoth",
        mordremothSkinId: 10630,
        mordremothTengo: 0,
        kralkatorrik: "Diseño de Ala de Kralkatorrik",
        kralkatorrikSkinId: 10583,
        kralkatorrikTengo: 0,
        primordus: "Diseño de Ala de Primordus",
        primordusSkinId: 10287,
        primordusTengo: 0,
        jormag: "Diseño de Ala de Jormag",
        jormagSkinId: 10747,
        jormagTengo: 0,
        soowon: "Diseño de Ala de Soo-Won",
        soowonSkinId: 10511,
        soowonTengo: 0
    },
    {
        nombre: "Reflexión de Aurene",
        tipo: "Báculo",
        zhaitan: "Diseño de Reflexión de Zhaitan",
        zhaitanSkinId: 10678,
        zhaitanTengo: 0,
        mordremoth: "Diseño de Reflexión de Mordremoth",
        mordremothSkinId: 10320,
        mordremothTengo: 0,
        kralkatorrik: "Diseño de Reflexión de Kralkatorrik",
        kralkatorrikSkinId: 10414,
        kralkatorrikTengo: 0,
        primordus: "Diseño de Reflexión de Primordus",
        primordusSkinId: 10252,
        primordusTengo: 0,
        jormag: "Diseño de Reflexión de Jormag",
        jormagSkinId: 10327,
        jormagTengo: 0,
        soowon: "Diseño de Reflexión de Soo-Won",
        soowonSkinId: 10521,
        soowonTengo: 0
    }
];

export const legendaryWeaponsOther = [
    {
        nombre: "Klobjarne Geirr",
        id: 103815,
        idWardrobe: 12703,
        tipo: "Lanza",
        tengo: 0,
        pre: "Nyr_Hrammr",
        preId: 103973,
        icon: "https://wiki.guildwars2.com/images/1/13/Klobjarne_Geirr.png",
        wiki: "https://wiki.guildwars2.com/wiki/Klobjarne_Geirr",
        wikiPre: "https://wiki.guildwars2.com/wiki/Nyr_Hrammr",
        precioTpVenta: 0,
        precioTpVentaS: "",
        precioTpVentaPre: 0,
        precioTpVentaSPre: "",
        modo: "PvE"
    }
];

export const legendaryBack = [
    {
        nombre: "Vientos de Guerra",
        id: 81462,
        idWardrobe: 7272,
        tipo: "Mochila",
        tengo: 0,
        pre: "Warcry",
        preId: 81467,
        icon: "https://wiki.guildwars2.com/images/2/20/Warbringer.png",
        wiki: "https://wiki.guildwars2.com/wiki/Warbringer",
        wikiPre: "https://wiki.guildwars2.com/wiki/Warcry",
        modo: "WvW",
    },
    {
        nombre: "Ad Infinitum",
        id: 74155,
        idWardrobe: 6344,
        tipo: "Mochila",
        tengo: 0,
        pre: "Unbound",
        preId: 72309,
        icon: "https://wiki.guildwars2.com/images/4/4a/Ad_Infinitum.png",
        wiki: "https://wiki.guildwars2.com/wiki/Ad_Infinitum",
        wikiPre: "https://wiki.guildwars2.com/wiki/Unbound",
        modo: "Fractal"
    },
    {
        nombre: "The Ascension",
        id: 77474,
        idWardrobe: 6561,
        tipo: "Mochila",
        tengo: 0,
        pre: "Wings of Ascension",
        preId: 77536,
        icon: "https://wiki.guildwars2.com/images/d/d7/The_Ascension.png",
        wiki: "https://wiki.guildwars2.com/wiki/The_Ascension",
        wikiPre: "https://wiki.guildwars2.com/wiki/Wings_of_Ascension",
        modo: "PvP"
    },
    {
        nombre: "Orrax Manifested",
        id: 104857,
        idWardrobe: 13090,
        tipo: "Mochila",
        tengo: 0,
        pre: "Orrax Contained",
        preId: 104690,
        icon: "https://render.guildwars2.com/file/9C5948587832ACA31FD01298DE081BDE626CC607/3629149.png",
        wiki: "https://wiki.guildwars2.com/wiki/Orrax_Manifested",
        wikiPre: "https://wiki.guildwars2.com/wiki/Orrax_Contained",
        modo: "PvE"
    }
];