export interface Raid {
    name: string;
    wing: string;
    boss: string[];
    bossOk: string[];
    bossCompletado: boolean[];
    bossWeekly: string[];
    bossWeeklyCompletado: boolean[];
    weeklyId: number;
    tokenCount: number[];
    callOfTheMists: string;
    emboldened: string;
    url: string;
};

export interface Strike {
    wing: string;
    bossOk: string[];
};

export const LegendariaRaidId = [
    {
        // armaduraLigera = [80248, 80131, 80190, 80111, 80356, 80399];
        // armaduraMedia = [80296, 80145, 80578, 80161, 80252, 80281];
        // armaduraPesada = [80384, 80435, 80254, 80205, 80277, 80557];
        armadura: [80248, 80131, 80190, 80111, 80356, 80399, 80296, 80145, 80578, 80161, 80252, 80281, 80384, 80435, 80254, 80205, 80277, 80557],
        anillo: 91234
    }
];

export const TokenId = [
    {
        vale_guardian: 77705,
        gorseval: 77751,
        sabetha: 77728,
        slothasor: 77706,
        matthias: 77679,
        escort: 78873,
        keep_construct: 78902,
        xera: 78942,
        cairn: 80623,
        mursaat_overseer: 80269,
        samarog: 80087,
        deimos: 80542,
        soulless_horror: 85993,
        river_of_souls: 85785,
        statues_of_grenth: 85800,
        voice_in_the_void: 85633,
        conjured_amalgamate: 88543,
        twin_largos: 88860,
        qadim: 88645,
        adina: 91246,
        sabir: 91270,
        qadim_the_peerless: 91175,
        decima: 103754,
        greer: 104047,
        ura: 103996,
        kela: 106994
    }
];

export const RaidsInfo = [
    // https://api.guildwars2.com/v2/raids/forsaken_thicket
    {
        name: 'Spirit Vale', //spirit_vale
        wing: 'W1',
        boss: ['vale_guardian', 'spirit_woods', 'gorseval', 'sabetha'],
        bossOk: ['Vale Guardian', 'Spirit Woods', 'Gorseval', 'Sabetha'],
        bossCompletado: [false, false, false, false],
        bossWeekly: ['Vale Guardian', 'Spirit Woods', 'Gorseval', 'Cull bandits', 'Sabetha'],
        bossWeeklyCompletado: [false, false, false, false, false],
        weeklyId: 9128,
        tokenCount: [0, 0, 0, 0],
        callOfTheMists: "",
        emboldened: "",
        url: "https://wiki.guildwars2.com/wiki/Spirit_Vale"
    },
    {
        name: 'Salvation Pass', //salvation_pass
        wing: 'W2',
        boss: ['slothasor', 'bandit_trio', 'matthias'],
        bossOk: ['Slothasor', 'Bandit Trio', 'Matthias Gabrel'],
        bossCompletado: [false, false, false],
        bossWeekly: ['Slothasor', 'Bandit Trio', 'Cull bandits', 'Matthias Gabrel'],
        bossWeeklyCompletado: [false, false, false, false],
        weeklyId: 9147,
        tokenCount: [0, 0, 0],
        callOfTheMists: "",
        emboldened: "",
        url: "https://wiki.guildwars2.com/wiki/Salvation_Pass"
    },
    {
        name: 'Stronghold of the Faithful', //stronghold_of_the_faithful
        wing: 'W3',
        boss: ['escort', 'keep_construct', 'twisted_castle', 'xera'],
        bossOk: ['Escort Glenna', 'Keep Construct', 'Twisted Castle', 'Xera'],
        bossCompletado: [false, false, false, false],
        bossWeekly: ['Escort Glenna', 'Kill McLeod', 'Keep Construct', 'Twisted Castle', 'Xera'],
        bossWeeklyCompletado: [false, false, false, false, false],
        weeklyId: 9182,
        tokenCount: [0, 0, 0, 0],
        callOfTheMists: "",
        emboldened: "",
        url: "https://wiki.guildwars2.com/wiki/Stronghold_of_the_Faithful"
    },

    // https://api.guildwars2.com/v2/raids/bastion_of_the_penitent
    {
        name: 'Bastion of the Penitent', //bastion_of_the_penitent
        wing: 'W4',
        boss: ['cairn', 'mursaat_overseer', 'samarog', 'deimos'],
        bossOk: ['Cairn', 'Mursaat Overseer', 'Samarog', 'Deimos'],
        bossCompletado: [false, false, false, false],
        bossWeekly: ['Cairn', 'Mursaat Overseer', 'Samarog', 'Deimos'],
        bossWeeklyCompletado: [false, false, false, false],
        weeklyId: 9144,
        tokenCount: [0, 0, 0, 0],
        callOfTheMists: "",
        emboldened: "",
        url: "https://wiki.guildwars2.com/wiki/Bastion_of_the_Penitent"
    },

    // https://api.guildwars2.com/v2/raids/hall_of_chains
    {
        name: 'Hall of Chains', //hall_of_chains
        wing: 'W5',
        boss: ['soulless_horror', 'river_of_souls', 'statues_of_grenth', 'voice_in_the_void'],
        bossOk: ['Soulless Horror', 'River of Souls', 'Statues of Grenth', 'Dhuum'],
        bossCompletado: [false, false, false, false],
        bossWeekly: ['Soulless Horror', 'River of Souls', 'Statue of Ice', 'Statue of Death and Resurrection', 'Statue of Darkness (Eyes)', 'Dhuum'],
        bossWeeklyCompletado: [false, false, false, false, false, false],
        weeklyId: 9111,
        tokenCount: [0, 0, 0, 0],
        callOfTheMists: "",
        emboldened: "",
        url: "https://wiki.guildwars2.com/wiki/Hall_of_Chains"
    },

    // https://api.guildwars2.com/v2/raids/mythwright_gambit
    {
        name: 'Mythwright Gambit', //mythwright_gambit
        wing: 'W6',
        boss: ['conjured_amalgamate', 'twin_largos', 'qadim'],
        bossOk: ['Conjured Amalgamate', 'Twin Largos', 'Q1 Qadim'],
        bossCompletado: [false, false, false],
        bossWeekly: ['Conjured Amalgamate', 'Ectoplasm / Megapets, Shark', 'Twin Largos', 'Clear path to Q1', 'Q1 Qadim'],
        bossWeeklyCompletado: [false, false, false, false, false],
        weeklyId: 9120,
        tokenCount: [0, 0, 0],
        callOfTheMists: "",
        emboldened: "",
        url: "https://wiki.guildwars2.com/wiki/Mythwright_Gambit"
    },

    // https://api.guildwars2.com/v2/raids/the_key_of_ahdashim
    {
        name: 'The Key of Ahdashim', //the_key_of_ahdashim
        wing: 'W7',
        boss: ['gate', 'adina', 'sabir', 'qadim_the_peerless'],
        bossOk: ['Gate', 'Adina', 'Sabir', 'Q2 Qadim The Peerless'],
        bossCompletado: [false, false, false, false],
        bossWeekly: ['Gate', 'Adina', 'Sabir', 'Q2 Qadim The Peerless'],
        bossWeeklyCompletado: [false, false, false, false],
        weeklyId: 9156,
        tokenCount: [0, 0, 0, 0],
        callOfTheMists: "",
        emboldened: "",
        url: "https://wiki.guildwars2.com/wiki/The_Key_of_Ahdashim"
    },

    // https://api.guildwars2.com/v2/raids/mount_balrior
    {
        name: 'Mount Balrior', //mount_balrior
        wing: 'W8',
        boss: ['camp', 'decima', 'greer', 'ura'],
        bossOk: ['Camp', 'Decima', 'Greer', 'Ura'],
        bossCompletado: [false, false, false, false],
        bossWeekly: ['Camp', 'Pre Decima', 'Pre Greer', 'Decima', 'Greer', 'Ura'],
        bossWeeklyCompletado: [false, false, false, false, false, false],
        weeklyId: 9181,
        tokenCount: [0, 0, 0, 0],
        callOfTheMists: "",
        emboldened: "",
        url: "https://wiki.guildwars2.com/wiki/Mount_Balrior"
    }
];

export const StrikesInfo = [
    {
        wing: "IBS",
        bossOk: ["Shiverpeaks", "Voice of the Fallen", "Fraenir of Jormag", "Whisper of Jormag", "Boneskinner", "Cold War"]
    },
    {
        wing: "EoD",
        bossOk: ["Aetherblade Hideout", "Xunlai Jade Junkyard", "Kaineng Overlook", "Harvest Temple", "Old Lion's Court"]
    },
    {
        wing: "SotO",
        bossOk: ["Cosmic Observatory", "Temple of Febe"]
    },
    {
        wing: "VoE",
        bossOk: ["Kela"]
    }
];

export const BossBountyWing = {
    // Raids
    "Gorseval": "W1",
    "Vale Guardian": "W1",
    "Sabetha": "W1",

    "Slothasor": "W2",
    "Matthias": "W2",

    "Keep Construct": "W3",
    "Xera": "W3",

    "Cairn": "W4",
    "Mursaat Overseer": "W4",
    "Samarog": "W4",
    "Deimos": "W4",

    "Soulless Horror": "W5",
    "Dhuum": "W5",

    "Conjured Amalgamate": "W6",
    "Twin Largos": "W6",
    "Qadim": "W6",

    "Cardinal Adina": "W7",
    "Cardinal Sabir": "W7",
    "Qadim the Peerless": "W7",

    "Decima": "W8",
    "Greer": "W8",
    "Ura": "W8",

    // Strikes IBS
    "Shiverpeaks": "IBS",
    "Voice of the Fallen": "IBS",
    "Fraenir of Jormag": "IBS",
    "Whisper of Jormag": "IBS",
    "Boneskinner": "IBS",
    "Cold War": "IBS",

    // Strikes EoD
    "Aetherblade Hideout": "EoD",
    "Xunlai Jade Junkyard": "EoD",
    "Kaineng Overlook": "EoD",
    "Harvest Temple": "EoD",
    "Old Lion's Court": "EoD",

    // Strikes SotO
    "Cosmic Observatory": "SotO",
    "Temple of Febe": "SotO",

    // Strikes VoE
    "Kela": "VoE"
};

export const bsToken = [
    {
        id: 93781,
        name: 'Boneskinner Token'
    }
];

export const DailyRaidBounties = {
    // https://wiki.guildwars2.com/wiki/Daily_Raid_Bounties
    boss1: [
        "Shiverpeaks",
        "Voice of the Fallen",
        "Fraenir of Jormag",
        "Gorseval",
        "Cairn",
        "Mursaat Overseer",
    ],
    boss2: [
        "Aetherblade Hideout",
        "Cardinal Sabir",
        "Whisper of Jormag",
        "Vale Guardian",
        "Cosmic Observatory",
        "Cold War",
        "Boneskinner",
        "Sabetha",
        "Xunlai Jade Junkyard",
        "Temple of Febe",
        "Keep Construct",
        "Kela"
    ],
    boss3: [
        "Slothasor",
        "Matthias",
        "Xera",
        "Samarog",
        "Conjured Amalgamate",
        "Twin Largos",
        "Decima",
        "Cardinal Adina",
        "Old Lion's Court",
        "Ura",
        "Kaineng Overlook",
        "Deimos"
    ],
    boss4: [
        "Qadim",
        "Qadim the Peerless",
        "Soulless Horror",
        "Harvest Temple",
        "Dhuum",
        "Greer"
    ]
};

export const OrdenReferenciaEng = ["Vale Guardian", "Gorseval", "Sabetha", "Slothasor", "Matthias", "Keep Construct", "Xera", "Cairn", "Mursaat Overseer", "Samarog", "Deimos", "Soulless Horror", "Dhuum", "Conjured Amalgamate", "Twin Largos", "Qadim", "Cardinal Adina", "Cardinal Sabir", "Qadim The Peerless", "Decima", "Greer", "Ura", "Shiverpeaks", "Voice of the Fallen", "Fraenir of Jormag", "Whisper of Jormag", "Boneskinner", "Cold War", "Aetherblade Hideout", "Xunlai Jade Junkyard", "Kaineng Overlook", "Harvest Temple", "Old Lion's Court", "Cosmic Observatory", "Temple of Febe", "Kela"];

export const OrdenReferenciaEsp = ["Guardián del valle", "Gorseval", "Sabetha", "Perezón", "Matías", "Ensamblaje de la Fortaleza", "Xera", "Cairn", "Dirigente mursaat", "Samarog", "Deimos", "Horror sin alma", "Dhuum", "Amalgamado conjurado", "Largos gemelos", "Qadim", "Cardenal Adina", "Cardenal Sabir", "Qadim el Simpar", "Decima", "Greer", "Ura", "Paso de las Picosescalofriantes", "Voz y Garra de los Caídos", "Fraenir de Jormag", "Susurro de Jormag", "Pelahuesos", "Guerra fría", "Escondite Filoetéreo", "Chatarrería de Xunlai Jade", "Mirador de Kaineng", "Templo de la Cosecha", "Vieja Corte del León", "Cosmic Observatory", "Temple de Febe", "Kela"];