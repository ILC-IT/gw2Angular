import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { DailyRaidBounties, OrdenReferenciaEng } from '../component/raid/raid';
import { Gw2DataService } from "./gw2-data.service";

@Injectable({
  providedIn: 'root'
})
export class RaidService {

  constructor(private gw2DataService: Gw2DataService) { }

  getRaid() {
    return this.gw2DataService.getAccount('raids');
  }

  getCallOfTheMists() {
    // Returns current number week of double gold raid between 1 and 7
    const givenDate = new Date(); // The date for which you want to determine the week number 'yyyy-mm-dd'
    const valorRaidValeDobleEstaSemana = this.raidValeDobleEstaSemana(givenDate);
    return valorRaidValeDobleEstaSemana;
  }

  raidValeDobleEstaSemana(date: Date) {
    // Retorna el numero de semana en la que la raid vale doble
    // La rotacion esa semana empieza en la W3 = week3
    // const startDate = new Date('2023-12-25'); // Start date of the first week, it was week number 3
    // La rotacion esa semana empieza en la W7 = week7
    const startDate = new Date('2025-03-24'); // Start date of the first week, it was week number 7
    const millisecondsPerWeek = 7 * 24 * 60 * 60 * 1000; // Number of milliseconds in a week

    const elapsedTime = date.getTime() - startDate.getTime();
    const weekNumber = Math.floor(elapsedTime / millisecondsPerWeek) + 7;
    let weekNumberMod8 = (weekNumber) % 8;
    if (weekNumberMod8 === 0) weekNumberMod8 = 8; // Weeks are numbered from 1 to 8
    // console.log("raidValeDobleEstaSemana ", weekNumberMod8)
    return weekNumberMod8;
  }

  getEmboldened() {
    // Returns current number week of emboldened raid between 1 and 7
    const givenDate = new Date(); // The date for which you want to determine the week number 'yyyy-mm-dd'
    const valorRaidEnvalentonadoEstaSemana = this.raidEnvalentonadoEstaSemana(givenDate);
    return valorRaidEnvalentonadoEstaSemana;
  }

  raidEnvalentonadoEstaSemana(date: Date) {
    // Retorna el numero de semana en la que la raid esta envalentonada
    // La rotacion esa semana empieza en la W2 = week2
    // const startDate = new Date('2023-12-25'); // Start date of the first week, it was week number 2
    // La rotacion esa semana empieza en la W6 = week6
    const startDate = new Date('2025-03-24'); // Start date of the first week, it was week number 6
    const millisecondsPerWeek = 7 * 24 * 60 * 60 * 1000; // Number of milliseconds in a week

    const elapsedTime = date.getTime() - startDate.getTime();
    const weekNumber = Math.floor(elapsedTime / millisecondsPerWeek) + 6;
    let weekNumberMod8 = (weekNumber) % 8;
    if (weekNumberMod8 === 0) weekNumberMod8 = 8; // Weeks are numbered from 1 to 8
    // console.log("raidEnvalentonadoEstaSemana ", weekNumberMod8)
    return weekNumberMod8;
  }

  getWeeklyRaidId() {
    // Para sacar el id de las raid semanales
    return this.gw2DataService.get('achievements/categories/477');
  }

  getWeeklyRaidDone(wekklyIdsS: string) {
    const params = new HttpParams().set('ids', wekklyIdsS);
    return this.gw2DataService.getAccount<any[]>('achievements', params);
  }

  getDailyRaidBounties(dia: Date) {
    // Devuelve los dailyRaidBounties de cada dia, rotando diariamente, ajustados al reset del juego (00:00 UTC)

    // Fecha de inicio fija (22 de abril de 2026) (mes 0-based) normalizada a medianoche local. No cambiar.
    const startDateUTC = Date.UTC(2026, 3, 22);

    // Obtener la fecha efectiva del servidor en UTC
    const userDateUTC = Date.UTC(
      dia.getUTCFullYear(),
      dia.getUTCMonth(),
      dia.getUTCDate()
    );

    const millisecondsPerDay = 24 * 60 * 60 * 1000;
    let daysSinceStart = Math.floor(
      (userDateUTC - startDateUTC) / millisecondsPerDay
    );

    // La rotacion contempla el 29 de febrero.
    // Si un año NO es bisiesto, se salta la rotacion que corresponderia al 29 de febrero
    // Se cuentan los años no bisiestos posteriores a la fecha inicial.
    const startYear = new Date(startDateUTC).getUTCFullYear();
    const targetYear = dia.getUTCFullYear();
    for (let year = startYear; year <= targetYear; year++) {
      const isLeapYear = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);

      if (!isLeapYear) {
        const march1 = Date.UTC(year, 2, 1);

        if (startDateUTC < march1 && userDateUTC >= march1) {
          daysSinceStart++;
        }
      }
    }

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

  getWeeklyRaidBounties(semana: Date = new Date()) {
    // Devuelve los dailyRaidBounties de cada semana ajustados al reset del juego (00:00 UTC)

    const effectiveToday = this.getEffectiveGameDate(semana);
    const startOfWeek = new Date(effectiveToday);
    const day = startOfWeek.getUTCDay(); // 0 domingo, 1 lunes...

    // Calcular cuantos dias retroceder para llegar al lunes
    // Si es lunes (1), retroceder 0. Si es domingo (0), retroceder 6 para llegar al lunes anterior
    const daysToSubtract = day === 0 ? 6 : (day - 1);

    startOfWeek.setUTCDate(startOfWeek.getUTCDate() - daysToSubtract);

    const week: any[] = [];
    const usedBosses = new Set<string>();

    for (let i = 0; i < 7; i++) {
      const d = new Date(startOfWeek);
      d.setUTCDate(startOfWeek.getUTCDate() + i);

      const bounties = this.getDailyRaidBounties(d);

      // Calcular y guardar los bosses que aparecen en la semana
      Object.values(bounties).forEach((boss) => usedBosses.add(boss));

      week.push({
        date: d,
        dayName: d.toLocaleDateString('es-ES', { weekday: 'long', timeZone: 'UTC' }),
        bounties
      });
    }

    // Calcular, ordenar y guardar los bosses que NO aparecen en la semana
    const allBosses = Object.values(DailyRaidBounties).reduce(
      (acc, arr) => acc.concat(arr),
      [] as string[]
    );

    const orderMap = new Map(
      OrdenReferenciaEng.map((name, index) => [this.normalizeName(name), index])
    );

    const notInWeek = allBosses.filter(
      (boss) => !usedBosses.has(boss)
    ).sort((a, b) => {
      const indexA = orderMap.get(this.normalizeName(a)) ?? Number.MAX_SAFE_INTEGER;
      const indexB = orderMap.get(this.normalizeName(b)) ?? Number.MAX_SAFE_INTEGER;
      return indexA - indexB;
    });

    return {
      week,
      notInWeek,
    };
  }

  getEffectiveGameDate(dia: Date = new Date()): Date {
    /*
    * Calcula la fecha efectiva del juego basada en el servidor (UTC).
    * Alinea el cambio de dia exactamente con el reset diario (00:00 UTC),
    * lo que equivale a la 1:00 AM (invierno) o 2:00 AM (verano) en España,
    * evitando que la tabla o los boses cambien antes de tiempo durante la madrugada.
    */

    // Copiar la fecha
    const d = new Date(dia.getTime());

    // El reset del juego es siempre a las 00:00 UTC.
    // Si en UTC la hora es menor que 0 (es decir, comprobar la fecha UTC pura),
    // el propio objeto UTC ya maneja el dia anterior. 
    // Pero para asegurar que la hora local de España (1:00 / 2:00) cruza exacto con las 00:00 UTC:

    // Obtener el timestamp exacto restando el offset del reset UTC
    // (o usar directamente los componentes UTC de la fecha):
    const utcYear = d.getUTCFullYear();
    const utcMonth = d.getUTCMonth();
    const utcDate = d.getUTCDate();

    // Como el servidor cambia de dia a las 00:00 UTC, la fecha del servidor es la fecha UTC actual
    const effectiveServerDate = new Date(Date.UTC(utcYear, utcMonth, utcDate));

    return effectiveServerDate;
  }

  normalizeName(str: string): string {
    return str
      ?.trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

}
