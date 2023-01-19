import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { DailyService } from "../../service/daily.service";
import { Fractales } from "./fractales";
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.css']
})
export class DailyComponent implements OnInit, AfterViewInit  {

  daily: any; //contiene los ids de las diarias de pve, fractals, mvm, pvp
  //dailyPve: any; //contiene los ids de las diarias de pve
  dailyIds: String = ''; //contiene los ids de las diarias de pve
  dailyIdsF: String = ''; //contiene los ids de las diarias de fractales
  dailyIdsM: String = ''; //contiene los ids de las diarias de wvw
  dailyIdsP: String = ''; //contiene los ids de las diarias de pvp
  dailyIdsS: String = ''; //contiene el id de la diaria de strikes
  dailyStrike: any; //contiene el id de la strike diaria buscando en achievements/categories/250
  dailyStrikeIcon: string = "";
  //dailyInfo: any; //contiene info de las diarias de pve
  dailyInfoF: any = {}; //contiene toda la info de las diarias de pve, fractals, mvm, pvp, strike
  loading: boolean = true;
  loading2: boolean = true;
  pactSupply: string[] = [];
  tokenProviders: string = "Arco.[&BAwEAAA=] Ciudadela.[&BKgDAAA=] VB.[&BN4HAAA=] AB.[&BNYHAAA=] TD.[&BMwHAAA=]";
  anomalia: string = '';
  dailyActivity: string = "";
  llaveSemanal = {
    ok: false,
    message: ""
  };
  dailyCraft: any; //contiene los crafts diarios
  materials: number[]= [];
  dailyCrafting = [
    "Charged quartz crystal",
    "Glob of elder spirit residue",
    "Lump of mithrilium",
    "Spool of silk weaving thread",
    "Spool of thick elonian cord"
  ];
  dailyHeroChoiceChest: any;
  dailyHeroChoiceChesting = [
    "Umbral verdeante (Matri)",
    "Profundidades enredadas (Chak)",
    "Valle áurico (Octohiedra)",
    "Defensa del dragón",
    "Oasis de cristal (Piñata)",
    "Ribera de Elon (Doppelganger)",
    "La desolación (Junundu, Maws)",
    "Vabbi (Perros)",
    "Seitung (Filoetereo)",
    "Nueva Kaineng (Apagón)",
    "Echovald Selva (War)",
    "Dragon's End (Soo-Won Mar de Jade)"
  ]
  //Para completada:
  dailyIdsChecked: boolean[] = [];
  dailyIdsCraftChecked: boolean[] = [];
  dailyIdsHeroChoiceChestChecked: boolean[] = [];
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  //disabled = true;
  dailyIdsDiariasChecked: boolean[] = [];
  panelOpenState = false;
  panelOpenStateR = false;
  panelOpenStateD = false;
  //Para buscar los fractales segun la escala
  fractales = Fractales;
  fractRec: any = [];
  fractDaily1: any = [];
  fractDaily2: any = [];
  fractDaily3: any = [];
  fractDaily4: any = [];
  fractDailys: any = [];
  merged: any = [];
  fractalesRecDailyString: string = "";
  //tablas fractales
  displayedColumns: string[] = ['level', 'tier', 'ar', 'name', 'nameEs', 'idDaily', 'idRec'];
  dataSource = new MatTableDataSource(Fractales);
  dataSourceRec = new MatTableDataSource(this.fractRec);
  dataSourceDaily = new MatTableDataSource(this.merged);
  //Para filtrar en las tablas https://www.freakyjolly.com/angular-material-table-custom-filter-using-select-box/
  filterValues: any = {};
  filterSelectObj: any = [];
  //@ViewChild(MatSort, { static: true }) sort: MatSort = new MatSort();
  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  @ViewChild("sort2", { static: false }) sort2!: MatSort;
  @ViewChild("sort3", { static: false }) sort3!: MatSort;

  constructor(private dailyService: DailyService) { 

    this.filterSelectObj = [
      {
        name: 'LEVEL',
        columnProp: 'level',
        options: []
      }, 
      {
        name: 'TIER',
        columnProp: 'tier',
        options: []
      },
      {
        name: 'AR',
        columnProp: 'ar',
        options: []
      },  
      {
        name: 'NAME',
        columnProp: 'name',
        options: []
      },
      {
        name: 'NOMBRE',
        columnProp: 'nameEs',
        options: []
      },
      {
        name: 'ID DAILY',
        columnProp: 'idDaily',
        options: []
      }, 
      {
        name: 'ID REC',
        columnProp: 'idRec',
        options: []
      }
    ]
    
  }

  async ngOnInit() {
    this.daily = await this.getDaily();
    //console.log(this.daily)
    this.getDailyPve();
    this.getDailyFractals();
    this.getDailyMundo();
    this.getDailyPvP();
    this.pactSupply = this.getPactSupply();
    this.getMaterials();
    this.getDailyCraft();
      setInterval(() => {
        this.getDailyCraft();
      }, 10 * 60 * 1000)
    this.getDailyHeroChoiceChest();
      setInterval(() => {
        this.getDailyHeroChoiceChest();
      }, 10 * 60 * 1000)
    this.anomalia = this.getAnomaly();
      setInterval(() => {
        this.anomalia = this.getAnomaly();
      }, 1 * 60 * 1000)
    this.dailyActivity = this.getDailyActivity();
    this.llaveSemanal = this.getLlaveSemanal();
    console.log(this.dailyInfoF)
    this.dailyStrike = await this.getDailyStrikeId();
    this.getDailyStrike();

    // console.log(this.dailyInfoF)
    //this.searchFractal()
    //console.log(this.pactSupply)

    // this.dataSource.sort = this.sort;
    // this.dataSourceRec.sort = this.sort2;
    // console.log(this.dataSource)
    // console.log(this.dataSourceRec)
    this.filterSelectObj.filter((o: any) => {
      o.options = this.getFilterObject(Fractales, o.columnProp);
      o.options.sort((a: any, b: any) => a> b? 1 : -1);
    });
    this.dataSource.filterPredicate = this.createFilter();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSourceRec.sort = this.sort2;
    this.dataSourceDaily.sort = this.sort3;
  }

  // getDaily(){
  //   this.dailyService.getDaily().subscribe((daily: any) => {
  //     this.daily = daily;
  //   })
  // }

  async getDaily(){
    let response: any;
    return response = await this.dailyService.getDaily().toPromise();
  }

  getDailyPve(){
    // this.dailyService.getDaily().subscribe((dailyPve: any) => {
    //   this.dailyPve = dailyPve.pve;
      let dailyPve = this.daily.pve;
      for (let i = 0; i < dailyPve.length; i++){
        if (dailyPve[i].level.max == 80){
          if (dailyPve[i].hasOwnProperty("required_access")){
            if (dailyPve[i].required_access.condition == "HasAccess"){
              this.dailyIds = this.dailyIds + dailyPve[i].id + ',';
              this.dailyIdsChecked.push(false);
            }
          }else{
            this.dailyIds = this.dailyIds + dailyPve[i].id + ',';
            this.dailyIdsChecked.push(false)
          }
        }
      }
      this.getDailyInfoF(this.dailyIds, "pve");
    //})
  }

  // getDailyInfo(){
  //   this.dailyService.getDailyInfo(this.dailyIds).subscribe((dailyInfo: any) => {
  //     this.dailyInfo = dailyInfo;
  //     //console.log(this.dailyInfo)
  //     this.loading = false;
  //   })
  // }

  getDailyFractals(){
      let dailyFractals = this.daily.fractals;
      for (let i = 0; i < dailyFractals.length; i++){
        this.dailyIdsF = this.dailyIdsF + dailyFractals[i].id + ',';
      }
      this.getDailyInfoF(this.dailyIdsF, "fractals");
  }

  getDailyMundo(){
    let dailyMundo = this.daily.wvw;
    for (let i = 0; i < dailyMundo.length; i++){
      this.dailyIdsM = this.dailyIdsM + dailyMundo[i].id + ',';
    }
    this.getDailyInfoF(this.dailyIdsM, "wvw");
  }

  getDailyPvP(){
    let dailyPvP = this.daily.pvp;
    for (let i = 0; i < dailyPvP.length; i++){
      this.dailyIdsP = this.dailyIdsP + dailyPvP[i].id + ',';
    }
    this.getDailyInfoF(this.dailyIdsP, "pvp");
  }

  getDailyInfoF(ids: String, tipo: String){
    this.dailyService.getDailyInfo(ids).subscribe((dailyInfo: any) => {
      //console.log(dailyInfo)
      if (tipo === "pve"){
        this.dailyInfoF.pve = dailyInfo;
      }
      else if (tipo === "fractals"){
        this.dailyInfoF.fractals = dailyInfo;
        this.searchFractalIds();
      }
      else if (tipo === "wvw"){
        this.dailyInfoF.wvw = dailyInfo;
      }
      else if (tipo === "pvp"){
        this.dailyInfoF.pvp = dailyInfo;
      }
      else if (tipo === "strike"){
        this.dailyInfoF.strike = dailyInfo;
        //metemos en una variable el icono de la strike porque solo lo lleva la de IBS y no la de EoD
        for (let i = 0; i < dailyInfo.length; i++){
          if (dailyInfo[i].hasOwnProperty('icon')){
            this.dailyStrikeIcon = dailyInfo[i].icon;
            break;
          }
        }
        this.loading2 = false;
      }
      this.loading = false;
    })
  }

  getPactSupply(){
    return this.dailyService.getPactSupply();
  }

  getDailyCraft(){
    this.dailyService.getDailyCraft().subscribe((dailyCraft: any) => {
      this.dailyCraft = dailyCraft;
      //console.log(this.dailyCraft)
      
      //Inicializo a false el array
      for(let i = 0; i < 5; i++){
        this.dailyIdsCraftChecked[i] = false;
      }

      if(this.dailyCraft.includes("charged_quartz_crystal")){
        this.dailyIdsCraftChecked[0] = true;
      }
      if (this.dailyCraft.includes("glob_of_elder_spirit_residue")){
        this.dailyIdsCraftChecked[1] = true;
      }
      if(this.dailyCraft.includes("lump_of_mithrilium")){
        this.dailyIdsCraftChecked[2] = true;
      }
      if(this.dailyCraft.includes("spool_of_silk_weaving_thread")){
        this.dailyIdsCraftChecked[3] = true;
      }
      if(this.dailyCraft.includes("spool_of_thick_elonian_cord")){
        this.dailyIdsCraftChecked[4] = true;
      }
      // console.log(this.dailyCraft)
      // for (let i = 0; i < this.dailyIdsCraftChecked.length; i++){
      //   console.log(this.dailyIdsCraftChecked[i])
      // }
    })
  }

  getMaterials(){
    this.dailyService.getMaterials().subscribe((materials: any) => {
      for (let i = 0; i < materials.length; i++){
        if (materials[i].id === 43772){
          this.materials[0] = materials[i].count
        }
        if (materials[i].id === 46744){
          this.materials[1] = materials[i].count
        }
        if (materials[i].id === 46742){
          this.materials[2] = materials[i].count
        }
        if (materials[i].id === 46740){
          this.materials[3] = materials[i].count
        }
        if (materials[i].id === 46745){
          this.materials[4] = materials[i].count
        }
      }
    })
  }

  getDailyHeroChoiceChest(){
    this.dailyService.getDailyHeroChoiceChest().subscribe((dailyHeroChoiceChest: any) => {
      this.dailyHeroChoiceChest = dailyHeroChoiceChest;
      //console.log(this.dailyHeroChoiceChest)

        //Inicializo a false el array
        for(let i = 0; i < 12; i++){
          this.dailyIdsHeroChoiceChestChecked[i] = false;
        }

      if(this.dailyHeroChoiceChest.includes("verdant_brink_heros_choice_chest")){
        this.dailyIdsHeroChoiceChestChecked[0] = true;
      }
      if (this.dailyHeroChoiceChest.includes("tangled_depths_heros_choice_chest")){
        this.dailyIdsHeroChoiceChestChecked[1] = true;
      }
      if(this.dailyHeroChoiceChest.includes("auric_basin_heros_choice_chest")){
        this.dailyIdsHeroChoiceChestChecked[2] = true;
      }
      if(this.dailyHeroChoiceChest.includes("dragons_stand_heros_choice_chest")){
        this.dailyIdsHeroChoiceChestChecked[3] = true;
      }
      if(this.dailyHeroChoiceChest.includes("crystal_oasis_heros_choice_chest")){
        this.dailyIdsHeroChoiceChestChecked[4] = true;
      }
      if(this.dailyHeroChoiceChest.includes("elon_riverlands_heros_choice_chest")){
        this.dailyIdsHeroChoiceChestChecked[5] = true;
      }
      if(this.dailyHeroChoiceChest.includes("the_desolation_heros_choice_chest")){
        this.dailyIdsHeroChoiceChestChecked[6] = true;
      }
      if(this.dailyHeroChoiceChest.includes("domain_of_vabbi_heros_choice_chest")){
        this.dailyIdsHeroChoiceChestChecked[7] = true;
      }
      if(this.dailyHeroChoiceChest.includes("seitung_province_heros_choice_chest")){
        this.dailyIdsHeroChoiceChestChecked[8] = true;
      }
      if(this.dailyHeroChoiceChest.includes("new_kaineng_city_heros_choice_chest")){
        this.dailyIdsHeroChoiceChestChecked[9] = true;
      }
      if(this.dailyHeroChoiceChest.includes("echovald_wilds_heros_choice_chest")){
        this.dailyIdsHeroChoiceChestChecked[10] = true;
      }
      if(this.dailyHeroChoiceChest.includes("dragons_end_heros_choice_chest")){
        this.dailyIdsHeroChoiceChestChecked[11] = true;
      }
      // console.log(this.dailyHeroChoiceChest)
      // for (let i = 0; i < this.dailyIdsHeroChoiceChestChecked.length; i++){
      //   console.log(this.dailyIdsHeroChoiceChestChecked[i])
      // }
    })
  }

  async getDailyStrikeId(){
    let response: any;
    return response = await this.dailyService.getDailyStrikeId().toPromise();
  }

  getDailyStrike(){
    // this.dailyIdsS = this.dailyStrike.achievements[0];
    // this.getDailyInfoF(this.dailyIdsS, "strike");
    let dailyStrike = this.dailyStrike.achievements;
    for (let i = 0; i < dailyStrike.length; i++){
      this.dailyIdsS = this.dailyIdsS + dailyStrike[i] + ',';
    }
    this.getDailyInfoF(this.dailyIdsS, "strike");
  }

  getAnomaly(){
    return this.dailyService.getAnomaliaLey();
  }

  getDailyActivity(){
    return this.dailyService.getDailyActivity();
  }

  getLlaveSemanal(){
    return this.dailyService.getLlaveSemanal();
  }

  searchFractalIds(){
    let obj: any = {}
    //Recomendados
    for (let i = 0; i <= 14; i++){
      if (this.dailyInfoF.fractals[i].name.includes("recomendado")){
        obj = this.fractales.find(o => o.idRec === this.dailyInfoF.fractals[i].id);
        this.fractRec.push(obj);
      }
      else if(this.dailyInfoF.fractals[i].name.includes("rango 1")){
        obj = this.fractales.find(o => o.idDaily === this.dailyInfoF.fractals[i].id);
        this.fractDaily1.push(obj);
      }
      else if(this.dailyInfoF.fractals[i].name.includes("rango 2")){
        obj = this.fractales.find(o => o.idDaily === this.dailyInfoF.fractals[i].id);
        this.fractDaily2.push(obj);
      }
      else if(this.dailyInfoF.fractals[i].name.includes("rango 3")){
        obj = this.fractales.find(o => o.idDaily === this.dailyInfoF.fractals[i].id);
        this.fractDaily3.push(obj);
      }
      else if(this.dailyInfoF.fractals[i].name.includes("rango 4")){
        obj = this.fractales.filter(o => o.idDaily === this.dailyInfoF.fractals[i].id); 
        //filter en vez de find para que devuelva todos los casos porque hay fractales que tienen distintos niveles en el mismo tier y comparten id
        this.fractDaily4.push(obj);
      }
    }
    // for (let i = 0; i <= 2; i++){
    //   obj = this.fractales.find(o => o.idRec === this.dailyInfoF.fractals[i].id);
    // //   console.log('id ', this.dailyInfoF.fractals[i].id)
    // //   console.log('fracc ', obj)
    //   this.fractRec.push(obj)
    // }
    // // console.log('aaa ', this.fractRec)
    // //Daily1
    // for (let i = 3; i <= 6; i++){
    //   obj = this.fractales.filter(o => o.idDaily === this.dailyInfoF.fractals[i].id);
    //   this.fractDaily1.push(obj)
    // }
    // //Daily2
    // for (let i = 7; i <= 10; i++){
    //   obj = this.fractales.filter(o => o.idDaily === this.dailyInfoF.fractals[i].id);
    //   this.fractDaily2.push(obj)
    // }
    // //Daily3
    // for (let i = 11; i <= 14; i++){
    //   obj = this.fractales.filter(o => o.idDaily === this.dailyInfoF.fractals[i].id);
    //   this.fractDaily3.push(obj)
    // }
    //SIN ESTAS DOS LINEAS NO FUNCIONA LA TABLA DE RECOMENDADOS
    this.dataSourceRec = new MatTableDataSource(this.fractRec);
    this.dataSourceRec.sort = this.sort2;
    //SIN ESTAS LINEAS NO FUNCIONA LA TABLA DE DIARIOS
    this.fractDailys = [...this.fractDaily1, ...this.fractDaily2, ...this.fractDaily3, ...this.fractDaily4]
    this.merged = [].concat.apply([], this.fractDailys); //esto es porque fractDailys es un array de arrays y necesito un array
    this.dataSourceDaily = new MatTableDataSource(this.merged);
    this.dataSourceDaily.sort = this.sort3;

    //Meto en un string los recomendados y diarios para el boton copiar
    let fractDailyString: string = "Diarios T4: ";
    let fractRecString: string = "Recomendados: ";
    for(let i = 0; i < this.fractDaily4.length; i++){
      fractDailyString = fractDailyString + this.fractDaily4[i][0].level + " " + this.fractDaily4[i][0].nameEs + ", ";
    }
    for(let i = 0; i < this.fractRec.length; i++){
      fractRecString = fractRecString + this.fractRec[i].level + " " + this.fractRec[i].nameEs + ", ";
    }
    this.fractalesRecDailyString = fractDailyString + "\n" + fractRecString;
    
    // console.log(this.fractRec)
    // console.log(this.fractDaily1)
    // console.log(this.fractDaily2)
    // console.log(this.fractDaily3)
    // console.log(this.fractDailys)
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // Get unique values from columns to build filter
  getFilterObject(fullObj: any, key: any) {
    const uniqChk: any = [];
    fullObj.filter((obj: any) => {
      if (!uniqChk.includes(obj[key])) {
        uniqChk.push(obj[key]);
      }
      return obj;
    });
    return uniqChk;
  }

  // Called on Filter change
  filterChange(filter: any, event: any) {
    //let filterValues = {}
    this.filterValues[filter.columnProp] = event.target.value.trim().toLowerCase()
    this.dataSource.filter = JSON.stringify(this.filterValues)
  }

  // Custom filter method fot Angular Material Datatable
  createFilter() {
    let filterFunction = function (data: any, filter: string): boolean {
      let searchTerms = JSON.parse(filter);
      let isFilterSet = false;
      for (const col in searchTerms) {
        if (searchTerms[col].toString() !== '') {
          isFilterSet = true;
        } else {
          delete searchTerms[col];
        }
      }

      //console.log(searchTerms);

      let nameSearch = () => {
        //let found = false;
        let foundThisField: any = [];
        if (isFilterSet) {
          for (const col in searchTerms) {
            searchTerms[col].trim().toLowerCase().split(' ').forEach((word:any) => {
              if (data[col].toString().toLowerCase().indexOf(word) != -1 
                  //&& data[col].toString().toLowerCase().length === word.length //para que si busco level: 1 no me encuentre los levels que contengan un 1
                  && data[col].toString().toLowerCase().length === searchTerms[col].trim().toLowerCase().length //para que si busco una frase de varias palabras me encuentre solo la frase completa y no cada palabra por separado
                  && isFilterSet) {
                //found = true
                //https://stackoverflow.com/questions/48276404/filtering-specific-column-in-angular-material-table-in-angular-5
                foundThisField.push(1)
              }
              else {
                foundThisField.push(0)
              }
            });
          }
          //return found
          return foundThisField.includes(0)?false:true
        } else {
          return true;
        }
      }
      return nameSearch()
    }
    return filterFunction
  }

  // Reset table filters
  resetFilters() {
    this.filterValues = {}
    this.filterSelectObj.forEach((value: any, key: any) => {
      value.modelValue = undefined;
    })
    this.dataSource.filter = "";
  }

}
