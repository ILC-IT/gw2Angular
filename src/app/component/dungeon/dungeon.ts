export interface Dungeon {
  id: string;
  name: string;
  paths: DungeonPath[];
}

export interface DungeonPath {
  name: string;
  done: boolean;
  freqDone: boolean;
  namePath: string;
}

export interface DungeonAchievementBit {
  dungeon: string;
  path: string; // nombre de la api
  order: number; // numero de camino
  display?: string; // nombre a mostrar
}

export function getDungeonsInfo(): Dungeon[] {
  return [
    {
      id: 'ascalonian_catacombs',
      name: 'Ascalonian Catacombs',
      paths: [
        { name: 'Story', done: false, freqDone: false, namePath: 'Story' },
        { name: 'Hodgins', done: false, freqDone: false, namePath: 'Hodgins (1)' },
        { name: 'Detha', done: false, freqDone: false, namePath: 'Detha (2)' },
        { name: 'Tzark', done: false, freqDone: false, namePath: 'Tzark (3)' }
      ]
    },
    {
      id: 'caudecus_manor',
      name: "Caudecus's Manor",
      paths: [
        { name: 'Story', done: false, freqDone: false, namePath: 'Story' },
        { name: 'Asura', done: false, freqDone: false, namePath: 'Asura (1)' },
        { name: 'Seraph', done: false, freqDone: false, namePath: 'Seraph (2)' },
        { name: 'Butler', done: false, freqDone: false, namePath: 'Butler (3)' }
      ]
    },
    {
      id: 'twilight_arbor',
      name: 'Twilight Arbor',
      paths: [
        { name: 'Story', done: false, freqDone: false, namePath: 'Story' },
        { name: 'Vevina', done: false, freqDone: false, namePath: 'Vevina (Forward)' },
        { name: 'Leurent', done: false, freqDone: false, namePath: 'Leurent (Up)' },
        { name: 'Aetherpath', done: false, freqDone: false, namePath: 'Aetherpath (4)' }
      ]
    },
    {
      id: 'sorrows_embrace',
      name: "Sorrow's Embrace",
      paths: [
        { name: 'Story', done: false, freqDone: false, namePath: 'Story' },
        { name: 'Fergg', done: false, freqDone: false, namePath: 'Fergg (1)' },
        { name: 'Rasalov', done: false, freqDone: false, namePath: 'Rasolov (2)' },
        { name: 'Koptev', done: false, freqDone: false, namePath: 'Koptev (3)' }
      ]
    },
    {
      id: 'citadel_of_flame',
      name: 'Citadel of Flame',
      paths: [
        { name: 'Story', done: false, freqDone: false, namePath: 'Story' },
        { name: 'Ferrah', done: false, freqDone: false, namePath: 'Ferrah (1)' },
        { name: 'Magg', done: false, freqDone: false, namePath: 'Magg (2)' },
        { name: 'Rhiannon', done: false, freqDone: false, namePath: 'Rhiannon (3)' }
      ]
    },
    {
      id: 'honor_of_the_waves',
      name: 'Honor of the Waves',
      paths: [
        { name: 'Story', done: false, freqDone: false, namePath: 'Story' },
        { name: 'Butcher', done: false, freqDone: false, namePath: 'Butcher (1)' },
        { name: 'Plunderer', done: false, freqDone: false, namePath: 'Plunderer (2)' },
        { name: 'Zealot', done: false, freqDone: false, namePath: 'Zealot (3)' }
      ]
    },
    {
      id: 'crucible_of_eternity',
      name: 'Crucible of Eternity',
      paths: [
        { name: 'Story', done: false, freqDone: false, namePath: 'Story' },
        { name: 'Submarine', done: false, freqDone: false, namePath: 'Submarine (1)' },
        { name: 'Teleporter', done: false, freqDone: false, namePath: 'Teleporter (2)' },
        { name: 'Front_Door', done: false, freqDone: false, namePath: 'Front Door (3)' }
      ]
    },
    {
      id: 'ruined_city_of_arah',
      name: 'The Ruined City of Arah',
      paths: [
        { name: 'Story', done: false, freqDone: false, namePath: 'Story' },
        { name: 'Jotun', done: false, freqDone: false, namePath: 'Jotun (1)' },
        { name: 'Mursaat', done: false, freqDone: false, namePath: 'Mursaat (2)' },
        { name: 'Forgotten', done: false, freqDone: false, namePath: 'Forgotten (3)' },
        { name: 'Seer', done: false, freqDone: false, namePath: 'Seer (4)' }
      ]
    }
  ];
}

export const DUNGEON_ACHIEVEMENT_BITS: DungeonAchievementBit[] = [
  { dungeon: 'Crucible of Eternity', path: 'Story', order: 0 },
  { dungeon: 'Crucible of Eternity', path: 'Submarine', order: 1 },
  { dungeon: 'Crucible of Eternity', path: 'Teleporter', order: 2 },
  { dungeon: 'Crucible of Eternity', path: 'Front_Door', order: 3 },

  { dungeon: 'Ascalonian Catacombs', path: 'Story', order: 0 },
  { dungeon: 'Ascalonian Catacombs', path: 'Hodgins', order: 1 },
  { dungeon: 'Ascalonian Catacombs', path: 'Detha', order: 2 },
  { dungeon: 'Ascalonian Catacombs', path: 'Tzark', order: 3 },

  //   { dungeon: 'Ruined City of Arah', path: 'Story', order: 0 },
  { dungeon: 'The Ruined City of Arah', path: 'Jotun', order: 1 },
  { dungeon: 'The Ruined City of Arah', path: 'Mursaat', order: 2 },
  { dungeon: 'The Ruined City of Arah', path: 'Forgotten', order: 3 },
  { dungeon: 'The Ruined City of Arah', path: 'Seer', order: 4 },

  { dungeon: "Caudecus's Manor", path: 'Story', order: 0 },
  { dungeon: "Caudecus's Manor", path: 'Asura', order: 1 },
  { dungeon: "Caudecus's Manor", path: 'Seraph', order: 2 },
  { dungeon: "Caudecus's Manor", path: 'Butler', order: 3 },

  { dungeon: "Sorrow's Embrace", path: 'Story', order: 0 },
  { dungeon: "Sorrow's Embrace", path: 'Fergg', order: 1 },
  { dungeon: "Sorrow's Embrace", path: 'Rasolov', order: 2, display: 'Rasolov' },
  { dungeon: "Sorrow's Embrace", path: 'Koptev', order: 3 },

  { dungeon: 'Twilight Arbor', path: 'Story', order: 0 },
  { dungeon: 'Twilight Arbor', path: 'Leurent', order: 1, display: 'Up' },
  { dungeon: 'Twilight Arbor', path: 'Vevina', order: 2, display: 'Forward' },
  { dungeon: 'Twilight Arbor', path: 'Aetherpath', order: 3 },

  { dungeon: 'Honor of the Waves', path: 'Story', order: 0 },
  { dungeon: 'Honor of the Waves', path: 'Butcher', order: 1 },
  { dungeon: 'Honor of the Waves', path: 'Plunderer', order: 2 },
  { dungeon: 'Honor of the Waves', path: 'Zealot', order: 3 },

  { dungeon: 'Citadel of Flame', path: 'Story', order: 0 },
  { dungeon: 'Citadel of Flame', path: 'Ferrah', order: 1 },
  { dungeon: 'Citadel of Flame', path: 'Magg', order: 2 },
  { dungeon: 'Citadel of Flame', path: 'Rhiannon', order: 3 }
];