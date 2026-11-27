import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Dungeon, DungeonPath } from 'src/app/component/dungeon/dungeon';
import { Gw2DataService } from './gw2-data.service';

export interface Achievement {
  id: number;
  current: number;
  max: number;
  done: boolean;
  repeated?: number;
  bits?: number[];
}

@Injectable({
  providedIn: 'root'
})
export class DungeonService {

  private readonly dungeonNames: { [key: string]: string } = {
    ascalonian_catacombs: 'Ascalonian Catacombs',
    caudecus_manor: "Caudecus's Manor",
    twilight_arbor: 'Twilight Arbor',
    sorrows_embrace: "Sorrow's Embrace",
    citadel_of_flame: 'Citadel of Flame',
    honor_of_the_waves: 'Honor of the Waves',
    crucible_of_eternity: 'Crucible of Eternity',
    ruined_city_of_arah: 'The Ruined City of Arah'
  };

  private readonly prefixes: { [key: string]: string } = {
    'Ascalonian Catacombs': 'ac',
    "Caudecus's Manor": 'cm',
    'Twilight Arbor': 'ta',
    "Sorrow's Embrace": 'se',
    'Citadel of Flame': 'cof',
    'Honor of the Waves': 'hotw',
    'Crucible of Eternity': 'coe',
    'The Ruined City of Arah': 'arah'
  };

  constructor(private gw2DataService: Gw2DataService) { }

  async getAchievement(id: number, max: number, repeated?: number, bits?: number[]): Promise<Achievement[]> {
    const params = new HttpParams().set('ids', id);

    try {
      return await this.gw2DataService.getAccount<Achievement[]>('achievements', params).toPromise();
    } catch (error) {
      return [
        this.createFallback(id, max, repeated, bits)
      ];
    }
  }

  private createFallback(id: number, max: number, repeated?: number, bits?: number[]): Achievement {
    return {
      id,
      current: 0,
      max,
      done: false,
      ...(repeated !== undefined && { repeated }),
      ...(bits !== undefined && { bits })
    };
  }

  getDungeonsNames() {
    // Devuelve array con nombre de dungeons
    return this.gw2DataService.get<string[]>('dungeons');
  }

  private readonly lowercaseWords = ['of', 'the', 'and'];
  formatDungeonName(name: string): string {
    // Devuelve nombre formateado sin guion y la primera letra en mayuscula menos lowercaseWords
    return name
      .split('_')
      .map(word =>
        this.lowercaseWords.includes(word)
          ? word
          : word.charAt(0).toUpperCase() + word.slice(1)
      )
      .join(' ');
  }

  formalDungeonName(name: string): string {
    // Devuelve nombre bien escrito
    return this.dungeonNames[name] ?? name;
  }

  normalizePathName(value: string): string {
    return value
      .toLowerCase()
      .trim()
      .replace('rasalov', 'rasolov') // porque la api viene mal
      .replace(/_/g, ''); // quita guion bajo entre palabras
  }

  getDailyPathId(dungeon: Dungeon, path: DungeonPath): string {

    const pathName = path.name.toLowerCase();

    // Story usa prefijo
    if (pathName === 'story') {
      return `${this.prefixes[dungeon.name]}_story`;
    }

    // Resto de caminos no llevan prefijo
    return pathName;
  }

  getDungeonsDailyDone(): Promise<string[]> {
    // Devuelve unicamente los caminos de mazmorra completados desde el ultimo reinicio diario
    return this.gw2DataService.getAccount<string[]>('dungeons').toPromise();
  }

  async getDungeonFrequenter(): Promise<Achievement[]> {
    // Devuelve logro de frequenter de dungeons
    return this.getAchievement(2963, 8, 0, []);
  }

  async getDungeonHobbyExplorer(): Promise<Achievement[]> {
    // Devuelve logro de hobby explorer de dungeons
    return this.getAchievement(123, 5, 0);
  }
}
