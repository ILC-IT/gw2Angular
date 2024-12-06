export interface Raid {
    name: string;
    wing: string;
    boss: string[];
    bossOk: string[];
    bossCompletado: boolean[];
    tokenCount: number[];
    callOfTheMists: string,
    emboldened: string
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
        ura: 103996
    }
]

export const RaidsInfo = [
    // https://api.guildwars2.com/v2/raids/forsaken_thicket
    {
        name: 'Spirit Vale', //spirit_vale
        wing: 'W1',
        boss: ['vale_guardian', 'spirit_woods', 'gorseval', 'sabetha'],
        bossOk: ['Vale Guardian', 'Spirit Woods', 'Gorseval', 'Sabetha'],
        bossCompletado: [false, false, false, false],
        tokenCount: [0, 0, 0, 0],
        callOfTheMists: "",
        emboldened: ""
    },
    {
        name: 'Salvation Pass', //salvation_pass
        wing: 'W2',
        boss: ['slothasor', 'bandit_trio', 'matthias'],
        bossOk: ['Slothasor', 'Bandit Trio', 'Matthias Gabrel'],
        bossCompletado: [false, false, false],
        tokenCount: [0, 0, 0],
        callOfTheMists: "",
        emboldened: ""
    },
    {
        name: 'Stronghold of the Faithful', //stronghold_of_the_faithful
        wing: 'W3',
        boss: ['escort', 'keep_construct', 'twisted_castle', 'xera'],
        bossOk: ['Escort Glenna', 'Keep Construct', 'Twisted Castle', 'Xera'],
        bossCompletado: [false, false, false, false],
        tokenCount: [0, 0, 0, 0],
        callOfTheMists: "",
        emboldened: ""
    },
    
    // https://api.guildwars2.com/v2/raids/bastion_of_the_penitent
    {
        name: 'Bastion of the Penitent', //bastion_of_the_penitent
        wing: 'W4',
        boss: ['cairn', 'mursaat_overseer', 'samarog', 'deimos'],
        bossOk: ['Cairn', 'Mursaat Overseer', 'Samarog', 'Deimos'],
        bossCompletado: [false, false, false, false],
        tokenCount: [0, 0, 0, 0],
        callOfTheMists: "",
        emboldened: ""
    },

    // https://api.guildwars2.com/v2/raids/hall_of_chains
    {
        name: 'Hall of Chains', //hall_of_chains
        wing: 'W5',
        boss: ['soulless_horror', 'river_of_souls', 'statues_of_grenth', 'voice_in_the_void'],
        bossOk: ['Soulless Horror', 'River of Souls', 'Statues of Grenth', 'Dhuum'],
        bossCompletado: [false, false, false, false],
        tokenCount: [0, 0, 0, 0],
        callOfTheMists: "",
        emboldened: ""
    },

    // https://api.guildwars2.com/v2/raids/mythwright_gambit
    {
        name: 'Mythwright Gambit', //mythwright_gambit
        wing: 'W6',
        boss: ['conjured_amalgamate', 'twin_largos', 'qadim'],
        bossOk: ['Conjured Amalgamate', 'Twin Largos', 'Q1 Qadim'],
        bossCompletado: [false, false, false],
        tokenCount: [0, 0, 0],
        callOfTheMists: "",
        emboldened: ""
    },

    // https://api.guildwars2.com/v2/raids/the_key_of_ahdashim
    {
        name: 'The Key of Ahdashim', //the_key_of_ahdashim
        wing: 'W7',
        boss: ['gate', 'adina', 'sabir', 'qadim_the_peerless'],
        bossOk: ['Gate', 'Adina', 'Sabir', 'Q2 Qadim The Peerless'],
        bossCompletado: [false, false, false, false],
        tokenCount: [0, 0, 0, 0],
        callOfTheMists: "",
        emboldened: ""
    },

    // https://api.guildwars2.com/v2/raids/mount_balrior
    {
        name: 'Mount Balrior', //mount_balrior
        wing: 'W8',
        boss: ['camp', 'decima', 'greer', 'ura'],
        bossOk: ['Camp', 'Decima', 'Greer', 'Ura'],
        bossCompletado: [false, false, false, false],
        tokenCount: [0, 0, 0, 0],
        callOfTheMists: "",
        emboldened: ""
    }
]