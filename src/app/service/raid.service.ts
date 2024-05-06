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
    // returns current number week of map bonus reward between 1 and 7
    const givenDate = new Date(); // The date for which you want to determine the week number 'yyyy-mm-dd'
    const valorRaidValeDobleEstaSemana = this.raidValeDobleEstaSemana(givenDate);
    return valorRaidValeDobleEstaSemana;
  }

  raidValeDobleEstaSemana(date: Date){
    // retorna el numero de semana en la que la raid vale doble
    // La rotacion esa semana empieza en la W3 = week3
    const startDate = new Date('2023-12-25'); // Start date of the first week, it was week number 3
    const millisecondsPerWeek = 7 * 24 * 60 * 60 * 1000; // Number of milliseconds in a week
  
    const elapsedTime = date.getTime() - startDate.getTime();
    const weekNumber = Math.floor(elapsedTime / millisecondsPerWeek) + 3;
    let weekNumberMod7 = weekNumber % 7;
    if (weekNumberMod7 === 0) weekNumberMod7 = 7; //weeks are numbered from 1 to 7
  
    return weekNumberMod7;
  }

  getEmboldened(){
    // returns current number week of map bonus reward between 1 and 7
    const givenDate = new Date(); // The date for which you want to determine the week number 'yyyy-mm-dd'
    const valorRaidEnvalentonadoEstaSemana = this.raidEnvalentonadoEstaSemana(givenDate);
    return valorRaidEnvalentonadoEstaSemana;
  }

  raidEnvalentonadoEstaSemana(date: Date){
    // retorna el numero de semana en la que la raid vale doble
    // La rotacion esa semana empieza en la W2 = week2
    const startDate = new Date('2023-12-25'); // Start date of the first week, it was week number 2
    const millisecondsPerWeek = 7 * 24 * 60 * 60 * 1000; // Number of milliseconds in a week
  
    const elapsedTime = date.getTime() - startDate.getTime();
    const weekNumber = Math.floor(elapsedTime / millisecondsPerWeek) + 2;
    let weekNumberMod7 = weekNumber % 7;
    if (weekNumberMod7 === 0) weekNumberMod7 = 7; //weeks are numbered from 1 to 7
  
    return weekNumberMod7;
  }
  
}
