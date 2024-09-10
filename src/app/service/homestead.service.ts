import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiKey } from './key'

@Injectable({
  providedIn: 'root'
})
export class HomesteadService {

  apiUrl = "https://api.guildwars2.com/v2/";

  apiKey = apiKey;

  constructor(private httpClient: HttpClient) { }

  getAccGlyphs(){
    const url = `${this.apiUrl}account/homestead/glyphs?access_token=${this.apiKey}`;
    return this.httpClient.get(url);
  }

  getAccDecoractions(){
    const url = `${this.apiUrl}account/homestead/decorations?access_token=${this.apiKey}`;
    return this.httpClient.get(url);
  }

  getDecoractionsById(id: string){
    const url = `${this.apiUrl}homestead/decorations/${id}`;
    return this.httpClient.get(url);
  }

}
