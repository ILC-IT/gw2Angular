import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiKey } from './key'

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
    "Fronteras de hierro: [&BOcBAAA=]", //Iron Marches
    "Gendarrán: [&BOQAAAA=]", //Gendarran Fields
    "Cataratas: [&BEwCAAA=]"  //Timberline Falls
  ];

  recordatorio = "Llave semanal \n Vetustas \n Tréboles (raid + fract) \n Moneda Mística (Soto) \n Cofre Strikes";

  iron = [3, 4, 9, 10, 15, 16, 21, 22];
  ironInvierno = [2, 3, 8, 9, 14, 15, 20, 21];
  gen = [23, 0, 5, 6, 11, 12, 17, 18];
  genInvierno = [22, 23, 4, 5, 10, 11, 16, 17];
  timber = [1, 2, 7, 8, 13, 14, 19, 20];
  timberInvierno = [0, 1, 6, 7, 12, 13, 18, 19];

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

  async getConvergenciaJw50(){
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

  getWeeklyEoDStrikes(){ // para sacar el id de las strikes semanales de EoD
    const url = `${this.apiUrl}account/achievements?ids=5577&access_token=${this.apiKey}`;
    return this.httpClient.get(url);
  }

  getWeeklySotoStrikes(){ //para sacar el id de las strikes semanales de Soto
    const url = `${this.apiUrl}account/achievements?ids=7155&access_token=${this.apiKey}`;
    return this.httpClient.get(url);
  }

  getFractalsDone(ids: string){
    const url = `${this.apiUrl}account/achievements?ids=${ids}&access_token=${this.apiKey}`;
    return this.httpClient.get<any[]>(url);
  }

}