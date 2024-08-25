export const Specs = [
    // https://api.guildwars2.com/v2/professions/`{$profession}`
    // training --- "category": "EliteSpecializations"

    // API BUG: training retrurns empty, so we can see only the current specialization in current equipment (with req. auth) at:
    // https://api.guildwars2.com/v2/characters/:name/specializations/pve and then search the ids at:
    // https://api.guildwars2.com/v2/specializations?id=xx , in "name"
    {        
        profession: "Guardian",
        // specHot: 85,
        specHot: 27,
        specHotName: "Dragonhunter",
        // specPof: 417,
        specPof: 62,
        specPofName: "Firebrand",
        // specEod: 466,
        specEod: 65,
        specEodName: "Willbender"
    },
    {
        profession: "Revenant",
        // specHot: 84,
        specHot: 52,
        specHotName: "Herald",
        // specPof: 410,
        specPof: 63,
        specPofName: "Renegade",
        // specEod: 469,
        specEod: 69,
        specEodName: "Vindicator"
    },
    {
        profession: "Warrior",
        // specHot: 62,
        specHot: 18,
        specHotName: "Berserker",
        // specPof: 415,
        specPof: 61,
        specPofName: "Spellbreaker",
        // specEod: 468,
        specEod: 68,
        specEodName: "Bladesworn"
    },
    {
        profession: "Engineer",
        // specHot: 113,
        specHot: 43,
        specHotName: "Scrapper",
        // specPof: 409,
        specPof: 57,
        specPofName: "Holosmith",
        // specEod: 470,
        specEod: 70,
        specEodName: "Mechanist"
    },
    {
        profession: "Ranger",
        // specHot: 53,
        specHot: 5,
        specHotName: "Druida",
        // specPof: 407,
        specPof: 55,
        specPofName: "Soulbeast",
        // specEod: 471,
        specEod: 72,
        specEodName: "Untamed"
    },
    {
        profession: "Thief",
        // specHot: 106,
        specHot: 7,
        specHotName: "Daredevil",
        // specPof: 404,
        specPof: 58,
        specPofName: "Deadeye",
        // specEod: 472,
        specEod: 71,
        specEodName: "Specter"
    },
    {
        profession: "Elementalist",
        // specHot: 31,
        specHot: 48,
        specHotName: "Tempest",
        // specPof: 416,
        specPof: 56,
        specPofName: "Weaver",
        // specEod: 467,
        specEod: 67,
        specEodName: "Catalyst"
    },
    {
        profession: "Mesmer",
        // specHot: 68,
        specHot: 40,
        specHotName: "Chronomancer",
        // specPof: 405,
        specPof: 59,
        specPofName: "Mirage",
        // specEod: 464,
        specEod: 66,
        specEodName: "Virtuoso"
    },
    {
        profession: "Necromancer",
        // specHot: 108,
        specHot: 34,
        specHotName: "Reaper",
        // specPof: 412,
        specPof: 60,
        specPofName: "Scourge",
        // specEod: 465,
        specEod: 64,
        specEodName: "Harbinger"
    }
]