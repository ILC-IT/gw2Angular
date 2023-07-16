import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LegendaryService {

  apiUrl = "https://api.guildwars2.com/v2/";

  constructor(private httpClient: HttpClient) { }

  getCommercePrices(ids: string){
    const url = `${this.apiUrl}commerce/prices?ids=${ids}`;
    return this.httpClient.get(url);
  }

  getMapBonusRewardWeekNumber(){
    // returns current number week of map bonus reward between 1 and 8
    const givenDate = new Date(); // new Date('2023-07-10'); // The date for which you want to determine the week number 'yyyy-mm-dd'
    const mapBonusRewardWeek = this.mapBonusRewardweekNumber(givenDate);
    return mapBonusRewardWeek;
  }

  mapBonusRewardweekNumber(date: Date){
    const startDate = new Date('2023-07-07'); // Start date of the first week, it was week number 5
    const millisecondsPerWeek = 7 * 24 * 60 * 60 * 1000; // Number of milliseconds in a week
  
    const elapsedTime = date.getTime() - startDate.getTime();
    const weekNumber = Math.floor(elapsedTime / millisecondsPerWeek) + 5;
    let weekNumberMod8 = weekNumber % 8;
    if (weekNumberMod8 === 0) weekNumberMod8 = 8; //weeks are numbered from 1 to 8
  
    return weekNumberMod8;
  }
}
