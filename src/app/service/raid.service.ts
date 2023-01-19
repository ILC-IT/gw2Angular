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
  
}
