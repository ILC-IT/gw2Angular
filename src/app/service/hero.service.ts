import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { catchError, map, tap, shareReplay } from "rxjs/operators";
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { Gw2DataService } from './gw2-data.service';

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  constructor(private messageService: MessageService, private gw2DataService: Gw2DataService) { }

  // getHeroes() {
  //   //Devuelve todos los heroes
  //   const params = new HttpParams()
  //     .set('ids', 'all')
  //     .set('v', '2024-07-20T01:00:00.000Z');
  //   return this.gw2DataService.getAccount('characters', params);
  // }

  private heroes$?: Observable<any>;
  private ultimaActualizacionHeroes: Date | undefined

  getHeroes(): Observable<any> {

    // Si no hay caché, hacer la llamada
    if (!this.heroes$) {
      console.log('Actualizando datos de la API de Heroes');

      const params = new HttpParams()
        .set('ids', 'all')
        .set('v', '2024-07-20T01:00:00.000Z');

      this.heroes$ = this.gw2DataService
        .get('characters', params)
        .pipe(
          tap(() => {
            // La peticion HTTP ha terminado correctamente
            this.ultimaActualizacionHeroes = new Date();
          }),
          catchError(error => {
            // Si falla, borrar la caché
            this.heroes$ = undefined;
            throw error;
          }),
          // Hace caché, guarda el ultimo valor emitido
          shareReplay(1)
        );
    }

    return this.heroes$;
  }

  refreshHeroes(): void {
    // Invalida la caché. La proxima llamada a getHeroes() hara una nueva peticion HTTP
    this.heroes$ = undefined;
  }

  getUltimaActualizacionHeroes(): Date | undefined {
    return this.ultimaActualizacionHeroes;
  }

  limpiarCacheHeroes() {
    this.heroes$ = undefined;
    this.ultimaActualizacionHeroes = undefined;
  }

  getHero(id: any) {
    const params = new HttpParams()
      .set('ids', id)
      .set('v', '2024-07-20T01:00:00.000Z');
    return this.gw2DataService
      .get('characters', params)
      .pipe(
        tap(_ => this.log(`fetched hero id=${id}`)),
        catchError(this.handleError('getHero', []))
      );
  }

  getInfoHero(nombre: string) {
    let nombreSinEspacios = nombre.replace(/ /g, '%20'); //reemplaza los espacios por %20
    const params = new HttpParams().set('v', '2024-07-20T01:00:00.000Z');
    return this.gw2DataService.get(`characters/${nombreSinEspacios}`, params);
  }

  getLegendaryArmory() {
    return this.gw2DataService.getAccount('legendaryarmory');
  }

  getMaterials() {
    return this.gw2DataService.getAccount('materials');
  }

  getBank() {
    return this.gw2DataService.getAccount('bank');
  }

  getWallet() {
    return this.gw2DataService.getAccount('wallet');
  }

  getCurrencies() {
    return this.gw2DataService.getAccount('currencies');
  }

  getProfession(profession: string) {
    return this.gw2DataService
      .get(`professions/${profession}`)
      .pipe(map((res: any) => {
        return res.training.filter((eliteEspec: any) => eliteEspec.category === "EliteSpecializations");
      }));
  }

  getItem(id: number) {
    const idioma = 'es';
    const params = new HttpParams()
      .set('lang', idioma)
      .set('id', id);
    return this.gw2DataService.get('items', params);
  }

  getItems(ids: string) {
    const idioma = 'es';
    const params = new HttpParams()
      .set('lang', idioma)
      .set('ids', ids);
    return this.gw2DataService.get<any[]>('items', params);
  }

  getSkins() {
    return this.gw2DataService.getAccount<number[]>('skins');
  }

  getAccount() {
    return this.gw2DataService.getAccount('');
  }

  getInventory() {
    // Devuelve inventario compartido
    return this.gw2DataService.getAccount('inventory');
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