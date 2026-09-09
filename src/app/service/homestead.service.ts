import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiKeyService } from './api-key.service';

@Injectable({
  providedIn: 'root'
})
export class HomesteadService {

  apiUrl = "https://api.guildwars2.com/v2/";

  constructor(private httpClient: HttpClient, private apiKeyService: ApiKeyService) { }

  private getApiKey(): string | null {
    return this.apiKeyService.getCurrentKey();
  }

  getAccGlyphs() {
    const url = `${this.apiUrl}account/homestead/glyphs?access_token=${this.getApiKey()}`;
    return this.httpClient.get(url);
  }

  getAccDecoractions() {
    const url = `${this.apiUrl}account/homestead/decorations?access_token=${this.getApiKey()}`;
    return this.httpClient.get(url);
  }

  getDecoractionsById(id: string) {
    const url = `${this.apiUrl}homestead/decorations/${id}`;
    return this.httpClient.get(url);
  }

  getMaterials() {
    const url = `${this.apiUrl}account/materials?access_token=${this.getApiKey()}`;
    return this.httpClient.get(url);
  }

  getCommercePrices(ids: string) {
    const url = `${this.apiUrl}commerce/prices?ids=${ids}`;
    return this.httpClient.get(url);
  }

}
