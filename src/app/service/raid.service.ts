import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiKey } from './key'

@Injectable({
  providedIn: 'root'
})
export class RaidService {

  constructor(private httpClient: HttpClient) { }

  apiUrl = "https://api.guildwars2.com/v2/";

  apiKey = apiKey;

  getRaid(){
    const url = `${this.apiUrl}account/raids?access_token=${this.apiKey}`;
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
  
}
