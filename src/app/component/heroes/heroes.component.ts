import { Component, OnInit, ViewChild } from '@angular/core';
import { HeroService } from "../../service/hero.service";
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: any = [];
  displayedColumns: string[] = ['name', 'race', 'profession', 'espec', 'crafting', 'robotJade', 'trophyProtocol', 'diasCumple'];
  dataSource!: MatTableDataSource<any>;
  loading = true;

  constructor(private heroService: HeroService,  private router: Router, private activeRouter: ActivatedRoute) { 
  }

  @ViewChild(MatSort, {static: false}) sort!: MatSort;

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(){
    this.heroService.getHeroes().subscribe((heroes: any) => {
      this.heroes = heroes;
      this.addSpec(this.heroes);
      this.addRobotJade(this.heroes);
      this.addTrophyProtocol(this.heroes);
      this.addBirthday(this.heroes);
      this.dataSource = new MatTableDataSource(this.heroes);
      this.dataSource.sort = this.sort;
      this.loading = false;
    })
  }

  addBirthday(tabla: any){
    //añado campo 'dias hasta cumpleaños' a los datos
    for (let i = 0; i < tabla.length; i++){
      let cumple = tabla[i].created;
      let days = this.daysUntilBirthday(cumple).dias;
      let anos = this.daysUntilBirthday(cumple).numeroAnosCumple;
      tabla[i].diasCumple = days;
      tabla[i].numeroAnosCumple = anos;
    }
    return this.heroes = tabla;
  }

  daysUntilBirthday(creacion: string){
    //calculo los dias que quedan para el cumpleaños del personaje
    //gw2 calcula un dia menos por cada año bisiesto (2012, 2016, 2020, 2024, 2028) y antes del 1 de marzo desde la creacion del personaje
    //Ej. si el personaje es creado en 26-02-2018 y calculo cumpleaños en 2022 me dira que cumple el 25-02
    let d = new Date(creacion);
    let day = d.getDate();
    let month = d.getMonth()+1;
    let year = d.getFullYear();
    //console.log(day, month, year)
    let today: any = new Date();
    let y = today.getFullYear() 
    let next: any = new Date(y, month - 1, day);
    next.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);
    if(today > next) {
      next.setFullYear(y + 1);
    }
    let dias = Math.round((next - today)/8.64e7);
    let numeroAnosCumple = y-year;
    if (numeroAnosCumple === 0) {
      numeroAnosCumple = 1;
    }
    // console.log('ddddddddd ', dias)
    // if ((year < 2021) && (month < 2)){ //si 2020 && (enero o febrero)
    //   dias--;
    //   console.log(dias)
    //   if ((year < 2017) && (month < 2)){
    //     dias--;
    //     if ((year < 2013) && (month < 2)){
    //       dias--;
    //     }
    //   }
    // }
    return {dias, numeroAnosCumple}
  }

  addSpec(tabla: any){
    //añado columna de especializacion a cada heroe
    for (let i = 0; i < tabla.length; i++){
      tabla[i].espec = [];
      //Busco ids y name de las especializaciones de cada profesion
      this.heroService.getProfession(tabla[i].profession).subscribe((profesion: any) => {
        //Busco los datos de cada personaje
        this.heroService.getInfoHero(tabla[i].name).subscribe((infoHero: any) => {
          for (let j = 0; j < profesion.length; j++){
            for (let k = 0; k < infoHero.training.length; k++){
              //comparo y si existe y done  = true escribo la espec
              if ((profesion[j].id === infoHero.training[k].id) && (infoHero.training[k].done)){
                // console.log("name: " + infoHero.name + " espec: " + profesion[j].name);
                tabla[i].espec.push(profesion[j].name)
                break;
              }
            }
          }
        })
      })
    }
    return this.heroes = tabla;
  }

  addRobotJade(tabla: any){
    //añado columna de robot de jade a cada heroe
    for (let i = 0; i < tabla.length; i++){
      //Busco id del robot de jade de cada heroe
      for (let j = 0; j < tabla[i].equipment.length; j++){
        if (tabla[i].equipment[j].slot === "PowerCore"){
          let robotJade = "a";
          //Busco el id en /v2/items?id= para ver su informacion
          this.heroService.getItem(tabla[i].equipment[j].id).subscribe((robot: any) => {
            // Ej: "name": "Núcleo de robot de jade: Rango 10",
            robotJade = robot.name.replace(/^\D+/g, ""); //me quedo con el numero
            tabla[i].robotJade = robotJade;
          })
          break;
        }
      }
    }
    return this.heroes = tabla;
  }

  addTrophyProtocol(tabla: any){
    //añado columna de protocolo de carroñero a cada heroe
    for (let i = 0; i < tabla.length; i++){
      //Busco id del Protocolo de carroñero de cada heroe
      for (let j = 0; j < tabla[i].equipment.length; j++){
        if (tabla[i].equipment[j].slot === "SensoryArray"){
          let trophyProtocol = "a";
          //Busco el id en /v2/items?id= para ver su informacion
          this.heroService.getItem(tabla[i].equipment[j].id).subscribe((trophy: any) => {
            // Ej: "name": "Núcleo de robot de jade: Rango 10",
            // trophyProtocol = trophy.name.replace("Scavenger Protocol: ", "");
            trophyProtocol = trophy.name.replace("Protocolo de carroñero: ", "");
            tabla[i].trophyProtocol = trophyProtocol;
          })
          break;
        }
      }
    }
    return this.heroes = tabla;
  }

  viewHero(hero: any) {
    let route = '/heroes/detail/';
    // this.router.navigate([route], { queryParams: { name: hero.name }, relativeTo: this.activeRouter});
    // this.router.navigate([route + row.name]);
    this.router.navigate([route + hero.name]);
  }

}
