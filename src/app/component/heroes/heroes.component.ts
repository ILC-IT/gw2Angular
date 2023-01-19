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
  displayedColumns: string[] = ['name', 'race', 'profession', 'crafting', 'diasCumple'];
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
      // console.log(this.heroes);
      //this.addSpec(this.heroes);
      this.addBirthday(this.heroes);
      this.dataSource = new MatTableDataSource(this.heroes);
      this.dataSource.sort = this.sort;
      this.loading = false;
      console.log(this.heroes);
    })
  }

  // getSpecHeroes(){
  //   for (let i = 0; i < this.heroes.length; i++){

  //   }
  // }

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

  }

  viewHero(hero: any) {
    let route = '/heroes/detail/';
    // this.router.navigate([route], { queryParams: { name: hero.name }, relativeTo: this.activeRouter});
    // this.router.navigate([route + row.name]);
    this.router.navigate([route + hero.name]);
  }

}
