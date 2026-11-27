
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Gw2DataService {

  private readonly apiUrl = 'https://api.guildwars2.com/v2/';

  constructor(private http: HttpClient) { }

  // GET sin API Key
  public get<T = any>(endpoint: string, params?: HttpParams) {
    return this.http.get<T>(`${this.apiUrl}${endpoint}`, { params });
  }

  // GET con API Key
  // La autenticacion es gestionada por el interceptor, por lo que no es necesario añadir la API Key manualmente en cada peticion
  public getAccount<T = any>(endpoint: string, params?: HttpParams) {
    const url = endpoint ? `account/${endpoint}` : 'account';
    return this.get<T>(url, params);
  }

  // GET a una URL externa
  public getExternal<T = any>(url: string, params?: HttpParams) {
    return this.http.get<T>(url, { params });
  }

}
