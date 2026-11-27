import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { CommercePrice } from 'src/app/component/legendary/legendary';
import { Gw2DataService } from './gw2-data.service';

@Injectable({
  providedIn: 'root'
})
export class LegendaryService {

  constructor(private gw2DataService: Gw2DataService) { }

  getCommercePrices(ids: string) {
    const params = new HttpParams().set('ids', ids);
    return this.gw2DataService.get<CommercePrice[]>('commerce/prices', params);
  }

  getPriceSplit(cantidad: number) {
    // Le paso el numero y me devuelve una string en oro, plata, cobre
    // let sss = (""+cantidad).split('').map(Number); // array de numeros
    let sss = ("" + cantidad).split(''); // array de char
    // console.log(sss)
    let cobre = "";
    let plata = "";
    let oro = "";
    let resFinal = "";

    if (sss.length === 1) {
      cobre = sss[0] + "c"; // 1 cifra
      resFinal = cobre;
    } else if (sss.length === 2) {
      cobre = sss[0] + sss[1] + "c"; // 2 cifras
      resFinal = cobre;
    } else if (sss.length === 3) { // 3 cifras
      cobre = sss[1] + sss[2] + "c";
      plata = sss[0] + "s";
      resFinal = plata + " " + cobre;
    } else if (sss.length === 4) { // 4 cifras
      cobre = sss[2] + sss[3] + "c";
      plata = sss[0] + sss[1] + "s";
      resFinal = plata + " " + cobre;
    } else if (sss.length > 4) { // >= 5 cifras
      cobre = sss[sss.length - 2] + sss[sss.length - 1] + "c";
      plata = sss[sss.length - 4] + sss[sss.length - 3] + "s";
      for (let i = (sss.length - 5); i >= 0; i--) {
        oro = sss[i] + oro;
      }
      oro = oro + "g";
      resFinal = oro + " " + plata + " " + cobre;
    }
    // console.log(resFinal);
    return resFinal
  }

  padPrecio(precioStr: string | null | undefined): string {
    // convierte la cadena del precio en [5 digitos]g [2 digitos]s [2 digitos]c. Si por ej. es 99g 8p 5c lo convierte en 00099g 08p 05c para ordenar bien

    // // Funciona solo si tiene las tres partes ( g s c)
    // // const match = precioStr.match(/(\d+)g\s+(\d+)s\s+(\d+)c/);
    // // if (!match) return '';
    // // const [, g, s, c] = match;
    // // return `${g.padStart(5, '0')}g ${s.padStart(2, '0')}s ${c.padStart(2, '0')}c`;

    // Esta funcion funciona aunque falte alguna parte del precio:
    if (!precioStr || typeof precioStr !== 'string') {
      // Si no hay precio, lo mandamos al fondo del ordenamiento
      return '00000g 00s 00c';
    }

    const oroMatch = precioStr.match(/(\d+)g/);
    const plataMatch = precioStr.match(/(\d+)s/);
    const cobreMatch = precioStr.match(/(\d+)c/);

    const g = oroMatch ? oroMatch[1].padStart(5, '0') : '00000';
    const s = plataMatch ? plataMatch[1].padStart(2, '0') : '00';
    const c = cobreMatch ? cobreMatch[1].padStart(2, '0') : '00';

    return `${g}g ${s}s ${c}c`;
  }

  formatearValorOro(valor: string): string {
    if (!valor) {
      return '';
    }

    return valor
      .replace(/(\d+)g/g, '$1 <img src="assets/img/oro.png" class="moneda-icon" alt="Oro">')
      .replace(/(\d+)s/g, '$1 <img src="assets/img/plata.png" class="moneda-icon" alt="Plata">')
      .replace(/(\d+)c/g, '$1 <img src="assets/img/cobre.png" class="moneda-icon" alt="Cobre">');
  }

  formatearCantidad(cantidad: number): string {
    // Para visualizar la cantidad formateada con separador de miles
    return cantidad.toLocaleString('es-ES');  //con es-ES pone separador a partir de 5 digitos
  }

  formatearValor(element: any, propiedad: string): string {
    // Para visualizar element.propiedad formateado con separador de miles

    const valor = Number(element[propiedad]);

    // Si es oroMoneda, mostrar como oro, plata y cobre
    if (element.id === 1) {

      const cobres = valor % 100;
      const platas = Math.floor(valor / 100) % 100;
      const oros = Math.floor(valor / 10000);

      const partes: string[] = [];

      if (oros > 0) {
        partes.push(`
          ${oros.toLocaleString('es-ES')}
          <img src="assets/img/oro.png" class="moneda-icon">
        `);
      }

      if (platas > 0) {
        partes.push(`
          ${platas}
          <img src="assets/img/plata.png" class="moneda-icon">
        `);
      }

      if (cobres > 0 || partes.length === 0) {
        partes.push(`
          ${cobres}
          <img src="assets/img/cobre.png" class="moneda-icon">
        `);
      }

      return partes.join(' ');
    }

    // Si NO es oroMoneda, mostrar separador
    return this.formatearCantidad(valor);
  }

}
