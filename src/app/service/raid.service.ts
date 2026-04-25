import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiKeyService } from './api-key.service';
import { DailyRaidBounties, OrdenReferenciaEng } from '../component/raid/raid';

@Injectable({
  providedIn: 'root'
})
export class RaidService {

  constructor(private httpClient: HttpClient, private apiKeyService: ApiKeyService) { }

  apiUrl = "https://api.guildwars2.com/v2/";

  private getApiKey(): string | null {
    return this.apiKeyService.getCurrentKey();
  }

  getRaid(){
    const url = `${this.apiUrl}account/raids?access_token=${this.getApiKey()}`;
    return this.httpClient.get(url);
  }

  getCallOfTheMists(){
    // Returns current number week of double gold raid between 1 and 7
    const givenDate = new Date(); // The date for which you want to determine the week number 'yyyy-mm-dd'
    const valorRaidValeDobleEstaSemana = this.raidValeDobleEstaSemana(givenDate);
    return valorRaidValeDobleEstaSemana;
  }

  raidValeDobleEstaSemana(date: Date){
    // Retorna el numero de semana en la que la raid vale doble
    // La rotacion esa semana empieza en la W3 = week3
    // const startDate = new Date('2023-12-25'); // Start date of the first week, it was week number 3
    // La rotacion esa semana empieza en la W7 = week7
    const startDate = new Date('2025-03-24'); // Start date of the first week, it was week number 7
    const millisecondsPerWeek = 7 * 24 * 60 * 60 * 1000; // Number of milliseconds in a week
  
    const elapsedTime = date.getTime() - startDate.getTime();
    const weekNumber = Math.floor(elapsedTime / millisecondsPerWeek) + 7;
    let weekNumberMod8 = (weekNumber) % 8; // -2 es para que coincida bien entre 1-8 al hacer mod8
    if (weekNumberMod8 === 0) weekNumberMod8 = 8; // Weeks are numbered from 1 to 8
    // console.log("raidValeDobleEstaSemana ", weekNumberMod8)
    return weekNumberMod8;
  }

  getEmboldened(){
    // Returns current number week of emboldened raid between 1 and 7
    const givenDate = new Date(); // The date for which you want to determine the week number 'yyyy-mm-dd'
    const valorRaidEnvalentonadoEstaSemana = this.raidEnvalentonadoEstaSemana(givenDate);
    return valorRaidEnvalentonadoEstaSemana;
  }

  raidEnvalentonadoEstaSemana(date: Date){
    // Retorna el numero de semana en la que la raid esta envalentonada
    // La rotacion esa semana empieza en la W2 = week2
    // const startDate = new Date('2023-12-25'); // Start date of the first week, it was week number 2
    // La rotacion esa semana empieza en la W6 = week6
    const startDate = new Date('2025-03-24'); // Start date of the first week, it was week number 6
    const millisecondsPerWeek = 7 * 24 * 60 * 60 * 1000; // Number of milliseconds in a week
  
    const elapsedTime = date.getTime() - startDate.getTime();
    const weekNumber = Math.floor(elapsedTime / millisecondsPerWeek) + 6;
    let weekNumberMod8 = (weekNumber) % 8; // -2 es para que coincida bien entre 1-8 al hacer mod8
    if (weekNumberMod8 === 0) weekNumberMod8 = 8; // Weeks are numbered from 1 to 8
    // console.log("raidEnvalentonadoEstaSemana ", weekNumberMod8)
    return weekNumberMod8;
  }

  getWeeklyRaidId(){
    // Para sacar el id de las raid semanales
    const url = `${this.apiUrl}achievements/categories/477`;
    return this.httpClient.get(url);
  }

  getWeeklyRaidDone(wekklyIdsS: string){
    const url = `${this.apiUrl}account/achievements?ids=${wekklyIdsS}&access_token=${this.getApiKey()}`;
    return this.httpClient.get<any[]>(url);
  }

  getDailyRaidBounties(dia: Date) {
    // Devuelve los dailyRaidBounties de cada dia, rotando diariamente
    const startDate = new Date(2026, 3, 22); // 22 de abril de 2026 (mes 0-based)
    startDate.setHours(0, 0, 0, 0);
    
    const millisecondsPerDay = 24 * 60 * 60 * 1000;

    const daysSinceStart = Math.floor(
      (dia.getTime() - startDate.getTime()) / millisecondsPerDay
    );

    const pick = (arr: string[], offset = 4) => {
      const index = (daysSinceStart + offset) % arr.length;
      return arr[index];
    };

    return {
      boss1: pick(DailyRaidBounties.boss1),
      boss2: pick(DailyRaidBounties.boss2),
      boss3: pick(DailyRaidBounties.boss3),
      boss4: pick(DailyRaidBounties.boss4),
    };
  }

  getWeeklyRaidBounties(semana: Date) {
    // Devuelve los dailyRaidBounties de cada semana
    const startOfWeek = new Date(semana);
    const day = startOfWeek.getDay(); // 0 domingo, 1 lunes...
    
    // Calcular cuantos dias retroceder para llegar al lunes
    // Si es lunes (1), retroceder 0. Si es domingo (0), retroceder 6 para llegar al lunes anterior
    const daysToSubtract = day === 0 ? 6 : (day - 1);

    startOfWeek.setDate(startOfWeek.getDate() - daysToSubtract);
    startOfWeek.setHours(0, 0, 0, 0);

    const week: any[] = [];
    const usedBosses = new Set<string>();

    for (let i = 0; i < 7; i++) {
      const d = new Date(startOfWeek);
      d.setDate(startOfWeek.getDate() + i);

      const bounties = this.getDailyRaidBounties(d);

      // Calcular y guardar los bosses que aparecen en la semana
      Object.values(bounties).forEach((boss) => usedBosses.add(boss));

      week.push({
        date: d,
        bounties
      });
    }

    // Calcular, ordenar y guardar los bosses que NO aparecen en la semana
    const allBosses = Object.values(DailyRaidBounties).reduce(
      (acc, arr) => acc.concat(arr),
      [] as string[]
    );

    const normalize = (str: string) =>
      str
        ?.trim()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

    const orderMap = new Map(
      OrdenReferenciaEng.map((name, index) => [normalize(name), index])
    );

    const notInWeek = allBosses.filter(
      (boss) => !usedBosses.has(boss)
    ).sort((a, b) => {
      const indexA = orderMap.get(normalize(a)) ?? Number.MAX_SAFE_INTEGER;
      const indexB = orderMap.get(normalize(b)) ?? Number.MAX_SAFE_INTEGER;
      return indexA - indexB;
    });

    return {
      week,
      notInWeek,
    };
  }
  
}
