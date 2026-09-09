import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommercePrice } from 'src/app/component/legendary/legendary';

@Injectable({
  providedIn: 'root'
})
export class LegendaryService {

  apiUrl = "https://api.guildwars2.com/v2/";

  constructor(private httpClient: HttpClient) { }

  getCommercePrices(ids: string) {
    const url = `${this.apiUrl}commerce/prices?ids=${ids}`;
    return this.httpClient.get<CommercePrice[]>(url);
  }

}
