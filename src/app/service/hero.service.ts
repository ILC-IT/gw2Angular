import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from "rxjs/operators";
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { apiKey } from './key'

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  apiUrl = "https://api.guildwars2.com/v2/";

  apiKey = apiKey;

  constructor(private httpClient: HttpClient, private messageService: MessageService) { }

  getHeroes(){
    //Devuelve todos los heroes
    const url = `${this.apiUrl}characters?ids=all&access_token=${this.apiKey}`;
    return this.httpClient.get(url);
  }

  getHero(id: any){
    const url = `${this.apiUrl}characters/${id}?access_token=${this.apiKey}&v=latest`;
    return this.httpClient.get(url)
    .pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError('getHero', []))
    );
  }

  getInfoHero(nombre: string){
    let nombreSinEspacios = nombre.replace(/ /g, '%20'); //reemplaza los espacios por %20
    const url = `${this.apiUrl}characters/${nombreSinEspacios}?access_token=${this.apiKey}`;
    return this.httpClient.get(url);
  }

  getLegendaryArmory(){
    const url = `${this.apiUrl}account/legendaryarmory?access_token=${this.apiKey}`;
    return this.httpClient.get(url);
  }

  getMaterials(){
    const url = `${this.apiUrl}account/materials?access_token=${this.apiKey}`;
    return this.httpClient.get(url);
  }

  getBank(){
    const url = `${this.apiUrl}account/bank?access_token=${this.apiKey}`;
    return this.httpClient.get(url);
  }

  getWallet(){
    const url = `${this.apiUrl}account/wallet?access_token=${this.apiKey}`;
    return this.httpClient.get(url);
  }

  getCurrencies(){
    const url = `${this.apiUrl}account/currencies?access_token=${this.apiKey}`;
    return this.httpClient.get(url);
  }

  getProfession(profession: string){
    const url = `${this.apiUrl}professions/${profession}`;
    return this.httpClient.get(url).pipe(map((res: any) => {
      return res.training.filter((eliteEspec: any) => eliteEspec.category === "EliteSpecializations");
    }));
  }

  getItem(id: number){
    const url = `${this.apiUrl}items?id=${id}`;
    return this.httpClient.get(url);
  }

  getSkins(){
    const url = `${this.apiUrl}account/skins?access_token=${this.apiKey}`;
    return this.httpClient.get(url);
  }

    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

}
