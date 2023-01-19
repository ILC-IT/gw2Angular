import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";
import { apiKey } from './key'

@Injectable({
  providedIn: 'root'
})
export class DailyService {

  apiUrl = "https://api.guildwars2.com/v2/";

  apiKey = apiKey;

  plactSupply = [
    ["1.[&BIsHAAA=]  2.[&BDoBAAA=]  3.[&BC0AAAA=]  4.[&BP8DAAA=]  5.[&BIUCAAA=]  6.[&BCECAAA=]"], //Domingo
    ["1.[&BA8CAAA=]  2.[&BKYBAAA=]  3.[&BEwDAAA=]  4.[&BIcHAAA=]  5.[&BNIEAAA=]  6.[&BIMCAAA=]"], //Lunes
    ["1.[&BH8HAAA=]  2.[&BEgAAAA=]  3.[&BBkAAAA=]  4.[&BKgCAAA=]  5.[&BGQCAAA=]  6.[&BIMBAAA=]"], //Martes
    ["1.[&BH4HAAA=]  2.[&BMIBAAA=]  3.[&BKEAAAA=]  4.[&BP0CAAA=]  5.[&BDgDAAA=]  6.[&BPEBAAA=]"], //Miercoles
    ["1.[&BKsHAAA=]  2.[&BF0AAAA=]  3.[&BIMAAAA=]  4.[&BO4CAAA=]  5.[&BF0GAAA=]  6.[&BOQBAAA=]"], //Jueves
    ["1.[&BJQHAAA=]  2.[&BMMCAAA=]  3.[&BNUGAAA=]  4.[&BJsCAAA=]  5.[&BHsBAAA=]  6.[&BNMAAAA=]"], //Viernes
    ["1.[&BH8HAAA=]  2.[&BNMCAAA=]  3.[&BJIBAAA=]  4.[&BBEDAAA=]  5.[&BEICAAA=]  6.[&BBABAAA=]"]  //Sabado
  ];

  dailyActivity = [
    "Barriles Rugby: [&BBEEAAA=]", //Domingo
    "Cangrejos: [&BBEEAAA=]", //Lunes
    "Sprint: [&BBEEAAA=]", //Martes
    "Supervivencia: [&BBEEAAA=]", //Miercoles
    "Cangrejos: [&BBEEAAA=]", //Jueves
    "Sprint: [&BBEEAAA=]", //Viernes
    "Supervivencia: [&BBEEAAA=]" //Sabado
  ];

  anomaliaLey = [
    "Fronteras de hierro: [&BOcBAAA=]", //Iron Marches
    "Gendarrán: [&BOQAAAA=]", //Gendarran Fields
    "Cataratas: [&BEwCAAA=]"  //Timberline Falls
  ];

  llaveSemanal = "RECORDATORIO";

  iron = [3, 4, 9, 10, 15, 16, 21, 22];
  ironInvierno = [2, 3, 8, 9, 14, 15, 20, 21];
  gen = [23, 0, 5, 6, 11, 12, 17, 18];
  genInvierno = [22, 23, 4, 5, 10, 11, 16, 17];
  timber = [1, 2, 7, 8, 13, 14, 19, 20];
  timberInvierno = [0, 1, 6, 7, 12, 13, 18, 19];

  strike: any;

  constructor(private httpClient: HttpClient) { }

  /*
    DAILY:
    https://api.guildwars2.com/v2/achievements/groups/18DB115A-8637-4290-A636-821362A3C4A8
    respuesta: 
    "categories": [
      252, //bosquellovizna
      250, //strike
      264, //Campeones
      234, //Grothmar
      97, //daily
      238, //lws3
      88, //fractals
      243, //lws4
      239, //bjora
      102, //lunar
      207, //cazador de tesoros hundidos
    ]
  */

  getDaily(){
    //INFO: https://wiki.guildwars2.com/wiki/API_talk:2/achievements/daily
    //const url = `${this.apiUrl}achievements/daily?v=2019-05-16T00:00:00.000Z`;
    const url = `${this.apiUrl}achievements/daily?v=latest`;
    return this.httpClient.get(url);
  }

  getDailyInfo(dailyIds: String){
    //https://api.guildwars2.com/v2/achievements?ids=1840,910,2258
    //?ids=5328 guerra fria 5299
    //?ids=5207 voz y garra caidos
    //?ids=5210 susurro
    //?ids=5233 fraenir
    //?ids=5239 paso
    //?ids=5194 pelahuesos
    //?ids=6307 templo cosecha
    //?ids=6353 aetherblade
    //?ids=6327 mirador
    //?ids=6457 chatarreria
    //?ids=5577 semanales eod
    const url = `${this.apiUrl}achievements?ids=${dailyIds}`;
    return this.httpClient.get(url);
  }

  getPactSupply(){
    let d = new Date();
    let n = d.getDay(); //Sunday is 0, Monday is 1, and so on.
    return this.plactSupply[n];
  }

  getDailyActivity(){
    let d = new Date();
    let n = d.getDay(); //Sunday is 0, Monday is 1, and so on.
    return this.dailyActivity[n];
  }

  getLlaveSemanal(){
    let d = new Date();
    let n = d.getDay();
    if (n === 1){ //Si es lunes
      return {
        ok: true,
        message: this.llaveSemanal
      };
    }
    else{
      return {
        ok: false,
        message: ""
      };
    }
  }

  getDailyCraft(){
    const url = `${this.apiUrl}account/dailycrafting?access_token=${this.apiKey}`;
    return this.httpClient.get(url);
  }

  getDailyStrikeId(){ //para sacar el id de la strike diaria
    const url = `${this.apiUrl}achievements/categories/250`;
    return this.httpClient.get(url);
  }

  getDailyHeroChoiceChest(){
    const url = `${this.apiUrl}account/mapchests?access_token=${this.apiKey}`;
    return this.httpClient.get(url);
  }

  getMaterials(){
    const url = `${this.apiUrl}account/materials?access_token=${this.apiKey}`;
    return this.httpClient.get(url);
  }

  esPar(n: number){
    return n % 2 == 0;
  }

  getAnomaliaLey(){
    let d = new Date();
    let h = d.getHours(); //Get the hour (0-23)
    let m = d.getMinutes(); //Get the minute (0-59)
    //Compruebo el intervalo de horas y minutos y devuelvo la anomalia que va a pasar
    if (!this.esHorarioInvierno()){
      if (this.iron.includes(h)){
        if (this.esPar(h)){
          if (m <= 22){
            return `${h % 24}:20 ` + this.anomaliaLey[0];
          }
          else{
            return `${(h + 2) % 24}:20 ` + this.anomaliaLey[1];
          }
        }
        else{
          return `${(h + 1) % 24}:20 ` + this.anomaliaLey[0];
        }
      }else if (this.gen.includes(h)){
        if (this.esPar(h)){
          if (m <= 22){
            return `${h % 24}:20 ` + this.anomaliaLey[1];
          }
          else{
            return `${(h + 2) % 24}:20 ` + this.anomaliaLey[2];  //hago % 24 por si me diera 23 + 2 y escriba 1 en vez de 25
          }
        }
        else{
          return `${((h + 1) % 24) % 24}:20 ` + this.anomaliaLey[1];
        }
      }else if (this.timber.includes(h)){
        if (this.esPar(h)){
          if (m <= 22){
            return `${h % 24}:20 ` + this.anomaliaLey[2];
          }
          else{
            return `${(h + 2) % 24}:20 ` + this.anomaliaLey[0];
          }
        }
        else{
          return `${(h + 1) % 24}:20 ` + this.anomaliaLey[2];
        }
      }
    }else{
      if (this.ironInvierno.includes(h)){
        if (!this.esPar(h)){
          if (m <= 22){
            return `${h % 24}:20 ` + this.anomaliaLey[0];
          }
          else{
            return `${(h + 2) % 24}:20 ` + this.anomaliaLey[1];
          }
        }
        else{
          return `${(h + 1) % 24}:20 ` + this.anomaliaLey[0];
        }
      }else if (this.genInvierno.includes(h)){
        if (!this.esPar(h)){
          if (m <= 22){
            return `${h % 24}:20 ` + this.anomaliaLey[1];
          }
          else{
            return `${(h + 2) % 24}:20 ` + this.anomaliaLey[2];  //hago % 24 por si me diera 23 + 2 y escriba 1 en vez de 25
          }
        }
        else{
          return `${((h + 1) % 24) % 24}:20 ` + this.anomaliaLey[1];
        }
      }else if (this.timberInvierno.includes(h)){
        if (!this.esPar(h)){
          if (m <= 22){
            return `${h % 24}:20 ` + this.anomaliaLey[2];
          }
          else{
            return `${(h + 2) % 24}:20 ` + this.anomaliaLey[0];
          }
        }
        else{
          return `${(h + 1) % 24}:20 ` + this.anomaliaLey[2];
        }
      }      
    }
    return "0"; //para que no dé un warning
  }

  esHorarioInvierno(){
    let arr: any = [];
    for (let i = 0; i < 365; i++) {
      let d = new Date();
      d.setDate(i);
      let newoffset = d.getTimezoneOffset(); //devuelve el offset negativo en minutos: -60, -120...
      arr.push(newoffset);
    }

    let verano = Math.min.apply(null, arr); 
    let invierno = Math.max.apply(null, arr);

    let dd = new Date();
    if (dd.getTimezoneOffset() == verano){
      return false; //Estamos en horario de verano
    }else{
      return true; //Estamos en horario de invierno
    }
  }

}
