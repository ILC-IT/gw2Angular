import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiKey } from './key'
import { of } from 'rxjs';

interface Achievement {
  id: number;
  current: number;
  max: number;
  done: boolean;
  repeated?: number;
}

@Injectable({
  providedIn: 'root'
})
export class DailyService {

  apiUrl = "https://api.guildwars2.com/v2/";

  apiKey = apiKey;

  public readonly bestMapBonusRewardWeekNumber: number = 5; // Variable a cambiar segun cambie la mejor zona

  riftSoto = [
    // https://wiki.guildwars2.com/wiki/Weekly_Rift_Hunting
    [
        {"id": 7067, "nombre": "Straits of Devastation"},
        {"id": 7060, "nombre": "Elon Riverlands"},
        {"id": 7028, "nombre": "Domain of Istan"}
    ],
    [
        {"id": 7247, "nombre": "Sparkfly Fen"},
        {"id": 6996, "nombre": "Tangled Depths"},
        {"id": 7181, "nombre": "Sandswept Isles"}
    ],
    [
        {"id": 7109, "nombre": "Bloodtide Coast"},
        {"id": 7108, "nombre": "Lake Doric"},
        {"id": 7023, "nombre": "Domain of Vabbi"}
    ],
    [
        {"id": 7620, "nombre": "Frostgorge Sound"},
        {"id": 7628, "nombre": "Ember Bay"},
        {"id": 7634, "nombre": "Seitung Province"}
    ],
    [
        {"id": 7607, "nombre": "Iron Marches"},
        {"id": 7602, "nombre": "Verdant Brink"},
        {"id": 7618, "nombre": "Bitterfrost Frontier"}
    ],
    [
        {"id": 7061, "nombre": "Mount Maelstrom"},
        {"id": 7704, "nombre": "Jahai Bluffs"},
        {"id": 7662, "nombre": "New Kaineng"}
    ],
    [
        {"id": 7713, "nombre": "Malchor's Leap"},
        {"id": 7692, "nombre": "Bloodstone Fen"},
        {"id": 7659, "nombre": "Desert Highlands"}
    ],
    [
        {"id": 7660, "nombre": "Fireheart Rise"},
        {"id": 7679, "nombre": "Dry Top"},
        {"id": 7663, "nombre": "Auric Basin"}
    ],
    [
        {"id": 7168, "nombre": "Cursed Shore"},
        {"id": 7040, "nombre": "Southsun Cove"},
        {"id": 7088, "nombre": "Crystal Oasis"}
    ],
    [
        {"id": 7061, "nombre": "Mount Maelstrom"},
        {"id": 7108, "nombre": "Lake Doric"},
        {"id": 7023, "nombre": "Domain of Vabbi"}
    ],
    [
        {"id": 7064, "nombre": "Timberline Falls"},
        {"id": 7078, "nombre": "Thunderhead Peaks"},
        {"id": 7044, "nombre": "Echovald Wilds"}
    ]
  ];

  pactSupply = [
    ["1.[&BIsHAAA=]  \n2.[&BDoBAAA=]  \n3.[&BC0AAAA=]  \n4.[&BP8DAAA=]  \n5.[&BIUCAAA=]  \n6.[&BCECAAA=]"], //Domingo
    ["1.[&BA8CAAA=]  \n2.[&BKYBAAA=]  \n3.[&BEwDAAA=]  \n4.[&BIcHAAA=]  \n5.[&BNIEAAA=]  \n6.[&BIMCAAA=]"], //Lunes
    ["1.[&BH8HAAA=]  \n2.[&BEgAAAA=]  \n3.[&BBkAAAA=]  \n4.[&BKgCAAA=]  \n5.[&BGQCAAA=]  \n6.[&BIMBAAA=]"], //Martes
    ["1.[&BH4HAAA=]  \n2.[&BMIBAAA=]  \n3.[&BKEAAAA=]  \n4.[&BP0CAAA=]  \n5.[&BDgDAAA=]  \n6.[&BPEBAAA=]"], //Miercoles
    ["1.[&BKsHAAA=]  \n2.[&BF0AAAA=]  \n3.[&BIMAAAA=]  \n4.[&BO4CAAA=]  \n5.[&BF0GAAA=]  \n6.[&BOQBAAA=]"], //Jueves
    ["1.[&BJQHAAA=]  \n2.[&BMMCAAA=]  \n3.[&BNUGAAA=]  \n4.[&BJsCAAA=]  \n5.[&BHsBAAA=]  \n6.[&BNMAAAA=]"], //Viernes
    ["1.[&BH8HAAA=]  \n2.[&BNMCAAA=]  \n3.[&BJIBAAA=]  \n4.[&BBEDAAA=]  \n5.[&BEICAAA=]  \n6.[&BBABAAA=]"]  //Sabado
  ];

  tokenSupply = [
    ["Arco del León [&BAwEAAA=]  <p>Ciudadela negra [&BKgDAAA=]</p>  <p>Umbral verdeante [&BN4HAAA=]</p>  <p>Valle áurico [&BNYHAAA=]</p>  <p>Profundidades Ogro [&BMwHAAA=]</p>"],
    ["Arco.[&BAwEAAA=] Ciudadela.[&BKgDAAA=] VB.[&BN4HAAA=] AB.[&BNYHAAA=] TD.[&BMwHAAA=]"]
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
    "Fronteras de Hierro: [&BOcBAAA=]", //Iron Marches
    "Campos de Gendarrán: [&BOQAAAA=]", //Gendarran Fields
    "Cataratas de Linarbórea: [&BEwCAAA=]"  //Timberline Falls
  ];

  fractalIncursion = [
    "Meseta de Diessa: [&BN0AAAA=]", //Diessa Plateau
    "Selvas Brisbanas: [&BHUAAAA=]", //Brisban Wildlands
    "Cúmulos de Guaridanieve: [&BLQAAAA=]", //Snowden Drifts
    "Colinas Kessex: [&BBIAAAA=]"  //Kessex Hills
  ];

  recordatorio = "Llave semanal \n Vetustas \n Tréboles (raid + fract) \n Moneda Mística (Soto) \n Cofre Strikes IBS \n Corazones, esquirlas JW";

  iron = [3, 4, 9, 10, 15, 16, 21, 22];
  ironInvierno = [2, 3, 8, 9, 14, 15, 20, 21];
  gen = [23, 0, 5, 6, 11, 12, 17, 18];
  genInvierno = [22, 23, 4, 5, 10, 11, 16, 17];
  timber = [1, 2, 7, 8, 13, 14, 19, 20];
  timberInvierno = [0, 1, 6, 7, 12, 13, 18, 19];

  diessa = [3, 7, 11, 15, 19, 23];
  diessaInvierno = [2, 6, 10, 14, 18, 22];
  brisban = [0, 4, 8, 12, 16, 20];
  brisbanInvierno = [3, 7, 11, 15, 19, 23];
  snowden = [1, 5, 9, 13, 17, 21];
  snowdenInvierno = [0, 4, 8, 12, 16, 20];
  kessex = [2, 6, 10, 14, 18, 22];
  kessexInvierno = [1, 5, 9, 13, 17, 21];

  strike: any;

  convergenciaSotoWp = ["Torre del brujo: [&BB8OAAA=]"];
  convergenciaSoto = [0, 3, 6, 9, 12, 15, 18, 21, 24];
  convergenciaSotoInvierno = [2, 5, 8, 11, 14, 17, 20, 23];
  convergenciaJwWp = ["Costas bajas: [&BK4OAAA=]"];
  convergenciaJw = [2, 5, 8, 11, 14, 17, 20, 23];
  convergenciaJwInvierno = [1, 4, 7, 10, 13, 16, 19, 22];

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

  getDailyInfo(dailyIds: string){
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
    //?ids=7154 febe/cerus
    //?ids=7130 observatorio/dagda
    const url = `${this.apiUrl}achievements?ids=${dailyIds}`;
    return this.httpClient.get(url);
  }

  getPactSupply(){ //el dia empieza a las 10am UTC+2 o 9am UTC+1
    let d = new Date();
    let n = d.getDay(); //Sunday is 0, Monday is 1, and so on.
    let h = d.getHours();
    let fechaCambiaVerano = new Date(d.getFullYear(), d.getMonth(), d.getDay(), 10, 0, 0); //10am
    let fechaCambiaInvierno = new Date(d.getFullYear(), d.getMonth(), d.getDay(), 9, 0, 0); //9am

    if (!this.esHorarioInvierno()){ //es verano
      if ( h >= fechaCambiaVerano.getHours()){ //h cambia a las 10am (UTC + 2)
        return this.pactSupply[n];
      }
      else{
        if(n !== 0){
          return this.pactSupply[n-1];
        }
        else{
          return this.pactSupply[this.pactSupply.length - 1];
        }
      }
    }
    else{ //es invierno
      if ( h >= fechaCambiaInvierno.getHours()){ //h cambia a las 9am (UTC + 1)
        return this.pactSupply[n];
      }
      else{
        if(n !== 0){
          return this.pactSupply[n-1];
        }
        else{
          return this.pactSupply[this.pactSupply.length - 1];
        }
      }
    }
  }

  getTokenSupply(){
    return this.tokenSupply;
  }

  getDailyActivity(){
    let d = new Date();
    let n = d.getDay(); //Sunday is 0, Monday is 1, and so on.
    return this.dailyActivity[n];
  }

  getRecordatorio(){
    let d = new Date();
    let n = d.getDay();
    if (n === 1){ //Si es lunes
      return {
        ok: true,
        message: this.recordatorio
      };
    }
    else{
      return {
        ok: false,
        message: ""
      };
    }
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

  getWeeklyRiftSotoInfo(){
    // returns current array of ids of current weekly rift soto
    const givenDate = new Date(); // new Date('2025-11-03'); // The date for which you want to determine the week number 'yyyy-mm-dd'
    const riftSotoWeek = this.riftSotoWeekNumber(givenDate);
    const ids = this.riftSoto[riftSotoWeek-1].map(item => item.id);
    ids.unshift(7072, 7075, 7655); // añado al principio amnytas, skywatch, inner nayos porque siempre salen
    return of(ids);
  }

  riftSotoWeekNumber(date: Date){
    const startDate = new Date('2025-11-03'); // Start date of the first week, it was week number 6
    const millisecondsPerWeek = 7 * 24 * 60 * 60 * 1000; // Number of milliseconds in a week
  
    const elapsedTime = date.getTime() - startDate.getTime();
    const weekNumber = Math.floor(elapsedTime / millisecondsPerWeek) + 6;
    let weekNumberMod11 = weekNumber % 11;
    if (weekNumberMod11 === 0) weekNumberMod11 = 11; //weeks are numbered from 1 to 11
  
    return weekNumberMod11;
  }

  getWallet(){
    const url = `${this.apiUrl}account/wallet?access_token=${this.apiKey}`;
    return this.httpClient.get(url);
  }
  
  getDailyCraft(){
    const url = `${this.apiUrl}account/dailycrafting?access_token=${this.apiKey}`;
    return this.httpClient.get(url);
  }

  getDailyStrikeId(){ //para sacar el id de las strikes diarias
    const url = `${this.apiUrl}achievements/categories/250`;
    return this.httpClient.get(url);
  }

  getDailyFractalsId(){ //para sacar el id de los fractales diarios
    const url = `${this.apiUrl}achievements/categories/88`;
    return this.httpClient.get(url);
  }

  getWizardVault(){
    const url = `${this.apiUrl}/wizardsvault`;
    return this.httpClient.get(url);
  }

  getDailyWizardVault(){
    // const url = `${this.apiUrl}achievements/categories/367`;
    const url = `${this.apiUrl}account/wizardsvault/daily?access_token=${this.apiKey}`;
    return this.httpClient.get(url);
  }

  getWeeklyWizardVault(){
    // const url = `${this.apiUrl}achievements/categories/363`;
    const url = `${this.apiUrl}account/wizardsvault/weekly?access_token=${this.apiKey}`;
    return this.httpClient.get(url);
  }

  getSpecialWizardVault(){
    // const url = `${this.apiUrl}achievements/categories/359`;
    const url = `${this.apiUrl}account/wizardsvault/special?access_token=${this.apiKey}`;
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

  getFractalIncursion(){
    let d = new Date();
    let h = d.getHours(); //Get the hour (0-23)
    let m = d.getMinutes(); //Get the minute (0-59)

    const esInvierno = this.esHorarioInvierno();

    const diessa = esInvierno ? this.diessaInvierno : this.diessa;
    const brisban = esInvierno ? this.brisbanInvierno : this.brisban;
    const snowden = esInvierno ? this.snowdenInvierno : this.snowden;
    const kessex = esInvierno ? this.kessexInvierno : this.kessex;

    const zonas = [
      { nombre: this.fractalIncursion[0], horas: diessa },
      { nombre: this.fractalIncursion[1], horas: brisban },
      { nombre: this.fractalIncursion[2], horas: snowden },
      { nombre: this.fractalIncursion[3], horas: kessex }
    ];

    // Compruebo el intervalo de horas y minutos y devuelvo la incursion de fractal que va a pasar
    for (const zona of zonas) {
      if (zona.horas.includes(h) && m <= 1) {
        return `${h % 24}:00 ${zona.nombre}`;
      }
    }

    // Buscar la próxima incursion en la siguiente hora
    const nextHour = (h + 1) % 24;
    for (const zona of zonas) {
      if (zona.horas.includes(nextHour)) {
        return `${nextHour}:00 ${zona.nombre}`;
      }
    }

    // Si no encuentra ninguna coincidencia
    return "0";
  }

  getConvergenciaSoto(){
    let d = new Date();
    let h = d.getHours(); //Get the hour (0-23)
    let m = d.getMinutes(); //Get the minute (0-59)
    //Compruebo el intervalo de horas y minutos y devuelvo la convergencia que va a pasar
    if (this.esHorarioInvierno()){
      if (this.convergenciaSotoInvierno.includes(h)){
        if (m <= 39){ //10 min para entrar
          return `${h % 24}:30 ` + this.convergenciaSotoWp[0];
        }else{
          return `${(h + 3)% 24}:30 ` + this.convergenciaSotoWp[0];
        }
      }else{
        let horaMasCercana = this.convergenciaSotoInvierno.reduce(function(prev, curr) {
          return (Math.abs(curr - h) < Math.abs(prev - h) ? curr : prev);
        });
        if (horaMasCercana <= h){
          return `${(horaMasCercana + 3) % 24}:30 ` + this.convergenciaSotoWp[0];
        }else{
          return `${(horaMasCercana) % 24}:30 ` + this.convergenciaSotoWp[0];
        }
      }
    }else{ 
      if (this.convergenciaSoto.includes(h)){
        if (m <= 39){ //10 min para entrar
          return `${h % 24}:30 ` + this.convergenciaSotoWp[0];
        }else{
          return `${(h + 3)% 24}:30 ` + this.convergenciaSotoWp[0];
        }
      }else{
        let horaMasCercana = this.convergenciaSoto.reduce(function(prev, curr) {
          return (Math.abs(curr - h) < Math.abs(prev - h) ? curr : prev);
        });
        if (horaMasCercana <= h){
          return `${(horaMasCercana + 3) % 24}:30 ` + this.convergenciaSotoWp[0];
        }else{
          return `${(horaMasCercana) % 24}:30 ` + this.convergenciaSotoWp[0];
        }
      }
    }
  }

  getConvergenciaJw(){
    let d = new Date();
    let h = d.getHours(); //Get the hour (0-23)
    let m = d.getMinutes(); //Get the minute (0-59)
    //Compruebo el intervalo de horas y minutos y devuelvo la convergencia que va a pasar
    if (this.esHorarioInvierno()){
      if (this.convergenciaJwInvierno.includes(h)){
        if (m <= 9){ //10 min para entrar
          return `${h % 24}:00 ` + this.convergenciaJwWp[0];
        }else{
          return `${(h + 3)% 24}:00 ` + this.convergenciaJwWp[0];
        }
      }else{
        let horaMasCercana = this.convergenciaJwInvierno.reduce(function(prev, curr) {
          return (Math.abs(curr - h) < Math.abs(prev - h) ? curr : prev);
        });
        if (horaMasCercana <= h){
          return `${(horaMasCercana + 3) % 24}:00 ` + this.convergenciaJwWp[0];
        }else{
          return `${(horaMasCercana) % 24}:00 ` + this.convergenciaJwWp[0];
        }
      }
    }else{ 
      if (this.convergenciaJw.includes(h)){
        if (m <= 9){ //10 min para entrar
          return `${h % 24}:00 ` + this.convergenciaJwWp[0];
        }else{
          return `${(h + 3)% 24}:00 ` + this.convergenciaJwWp[0];
        }
      }else{
        let horaMasCercana = this.convergenciaJw.reduce(function(prev, curr) {
          return (Math.abs(curr - h) < Math.abs(prev - h) ? curr : prev);
        });
        if (horaMasCercana <= h){
          return `${(horaMasCercana + 3) % 24}:00 ` + this.convergenciaJwWp[0];
        }else{
          return `${(horaMasCercana) % 24}:00 ` + this.convergenciaJwWp[0];
        }
      }
    }
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

  getInestabilidadCm(){
    // devuelve json con "instabilities" diarias de un año de fractal 76 a 100 y "instability_details" con su info
    const url = "https://raw.githubusercontent.com/Invisi/gw2-fotm-instabilities/refs/heads/master/instabilities.json";
    return this.httpClient.get(url);
  }

  getQuaggans(name: string){
    // devuelve imagenes de quaggans con valores {id, url}
    // EJ. https://api.guildwars2.com/v2/quaggans/404
    const url = `${this.apiUrl}quaggans/${name}`;
    return this.httpClient.get(url);
  }

  async getConvergenciaSoto100(): Promise<Achievement[]>{
    // devuelve logro de hacer 100 convergencias de soto
    return this.getAchievement(7668, 100);
  }

  async getConvergenciaSoto150(): Promise<Achievement[]>{
    // devuelve logro de hacer 150 convergencias de soto repetible
    return this.getAchievement(7720, 150, 0);
  }

  async getConvergenciaSotoWeekly(): Promise<Achievement[]> {
    // devuelve logro semanal de hacer 3 convergencias de soto
    return this.getAchievement(7706, 3);
  }

  getConvergenciaSotoWeeklyCM() {
    // devuelve logro semanal de hacer 5 convergencias cm de soto
    const url = `${this.apiUrl}account/achievements?ids=8464&access_token=${this.apiKey}`;
    return this.httpClient.get(url);
  }

  async getConvergenciaJw50(): Promise<Achievement[]>{
    // devuelve logro de hacer 50 convergencias de jw
    return this.getAchievement(8456, 50);
  }

  // async getConvergenciaJw50Rep(): Promise<any> {
  //   // devuelve logro de hacer 50 convergencias repetible
  //   const url = `${this.apiUrl}account/achievements?ids=8440&access_token=${this.apiKey}`;
  //   try {
  //     return await this.httpClient.get(url).toPromise();
  //   } catch (error) {
  //     return [
  //       {
  //         id: 8440,
  //         current: 0,
  //         max: 50,
  //         done: false
  //         // "repeated": 0
  //       }
  //     ];
  //   }
  // }

  async getConvergenciaJw50Rep(): Promise<Achievement[]> {
    // devuelve logro de hacer 50 convergencias de jw repetible
    return this.getAchievement(8440, 50, 0);
  }

  async getConvergenciaJwWeekly(): Promise<Achievement[]> {
    // devuelve logro semanal de hacer 3 convergencias de jw
    return this.getAchievement(8448, 3);
  }

  getConvergenciaJwWeeklyCM() {
    // devuelve logro semanal de hacer 3 convergencias cm de jw
    const url = `${this.apiUrl}account/achievements?ids=8776&access_token=${this.apiKey}`;
    return this.httpClient.get(url);
  }

  async getAchievement(id: number, max: number, repeated?: number): Promise<Achievement[]> {
    const url = `${this.apiUrl}account/achievements?ids=${id}&access_token=${this.apiKey}`;
    try {
      return await this.httpClient.get<Achievement[]>(url).toPromise();
    } catch (error) {
        const fallback: Achievement = {
          id,
          current: 0,
          max,
          done: false,
          ...(repeated !== undefined && { repeated })
      };
      return [fallback];
    }
  }

  getDailyStrikeDone(dailyIdsS: string){
    const url = `${this.apiUrl}account/achievements?ids=${dailyIdsS}&access_token=${this.apiKey}`;
    return this.httpClient.get<Achievement[]>(url);
  }

  getAchievementsByIds(ids: string) {
    const url = `${this.apiUrl}achievements?ids=${ids}`;
    return this.httpClient.get<any[]>(url);
  }

  getWeeklyWvWId(){
    const url = `${this.apiUrl}achievements/categories/346`;
    return this.httpClient.get<any>(url);
  }

  getWeeklyWvW(ids: string) {
    const url = `${this.apiUrl}account/achievements?ids=${ids}&access_token=${this.apiKey}`;
    return this.httpClient.get<any[]>(url);
  }

  getWeeklyRiftHuntingJWId(){
    const url = `${this.apiUrl}achievements/categories/423`;
    return this.httpClient.get<any>(url);
  }

  getWeeklyRiftHuntingJW(ids: string){
    const url = `${this.apiUrl}account/achievements?ids=${ids}&access_token=${this.apiKey}`;
    return this.httpClient.get<any[]>(url);
  }

  getWeeklyRiftHuntingSotoId(){
    const url = `${this.apiUrl}achievements/categories/365`;
    return this.httpClient.get<any>(url);
  }

  getWeeklyRiftHuntingSoto(ids: string){
    const url = `${this.apiUrl}account/achievements?ids=${ids}&access_token=${this.apiKey}`;
    return this.httpClient.get<any[]>(url);
  }

  getWeeklyEoDStrikes(){ 
    // para sacar el id de las strikes semanales de EoD
    const url = `${this.apiUrl}account/achievements?ids=5577&access_token=${this.apiKey}`;
    return this.httpClient.get(url);
  }

  getWeeklySotoStrikes(){ 
    // para sacar el id de las strikes semanales de Soto
    const url = `${this.apiUrl}account/achievements?ids=7155&access_token=${this.apiKey}`;
    return this.httpClient.get(url);
  }

  getFractalsDone(ids: string){
    const url = `${this.apiUrl}account/achievements?ids=${ids}&access_token=${this.apiKey}`;
    return this.httpClient.get<any[]>(url);
  }

  async getWeeklyFractalQuickplay(): Promise<Achievement[]> {
    // devuelve logro de hacer 5 fractales quickplay semanales
    return this.getAchievement(8815, 5);
  }

  async getFractalInfiniteRecursion(): Promise<Achievement[]> {
    // devuelve logro de hacer 150 polvo fractalino en fractal quickplay repetible
    return this.getAchievement(8814, 150, 0);
  }

  getWeeklyRiftHuntingVoeId(){
    const url = `${this.apiUrl}achievements/categories/464`;
    return this.httpClient.get<any>(url);
  }

  getWeeklyRiftHuntingVoe(ids: string){
    const url = `${this.apiUrl}account/achievements?ids=${ids}&access_token=${this.apiKey}`;
    return this.httpClient.get<any[]>(url);
  }

  getDailyWorldBoss(){
    const url = `${this.apiUrl}account/worldbosses?access_token=${this.apiKey}`;
    return this.httpClient.get(url);
  }

  async getWeeklyQuickplayRaidEncounter(): Promise<Achievement[]> {
    // devuelve logro de hacer 10 raid encounters quickplay semanales
    return this.getAchievement(9123, 10);
  }

  getWeeklyRaidEncounters(){ 
    // para sacar el id de los raid encounters semanales (antiguas strikes)
    const url = `${this.apiUrl}account/achievements?ids=9125&access_token=${this.apiKey}`;
    return this.httpClient.get(url);
  }

  getDailyRaidBountiesId(){
    // para sacar el id de las raid bounties diarias
    const url = `${this.apiUrl}achievements/categories/475`;
    return this.httpClient.get(url);
  }

}