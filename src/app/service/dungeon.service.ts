import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiKeyService } from './api-key.service';
import { Dungeon, DungeonPath } from 'src/app/component/dungeon/dungeon';

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

  apiUrl = "https://api.guildwars2.com/v2/";

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

  constructor(private httpClient: HttpClient, private apiKeyService: ApiKeyService) { }

  private getApiKey(): string | null {
    return this.apiKeyService.getCurrentKey();
  }

  async getAchievement(id: number, max: number, repeated?: number, bits?: number[]): Promise<Achievement[]> {
    const url = `${this.apiUrl}account/achievements?ids=${id}&access_token=${this.getApiKey()}`;
    try {
      return await this.httpClient.get<Achievement[]>(url).toPromise();
    } catch (error) {
      const fallback: Achievement = {
        id,
        current: 0,
        max,
        done: false,
        ...(repeated !== undefined && { repeated }),
        ...(bits !== undefined && { bits })
      };
      return [fallback];
    }
  }

  getDungeonsNames() {
    // Devuelve array con nombre de dungeons
    const url = `${this.apiUrl}/dungeons`;
    return this.httpClient.get<string[]>(url);
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
    const url = `${this.apiUrl}account/dungeons?access_token=${this.getApiKey()}`;
    return this.httpClient.get<string[]>(url).toPromise();
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
