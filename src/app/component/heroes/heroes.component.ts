import { Component, OnInit, ViewChild } from '@angular/core';
import { HeroService } from "../../service/hero.service";
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Router, ActivatedRoute } from '@angular/router';
import { Specs } from './specs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: any = [];
  displayedColumns: string[] = ['name', 'race', 'profession', 'espec', 'crafting', 'robotJade', 'trophyProtocol', 'freeSpace', 'diasCumple'];
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
      this.addFreeSpace(this.heroes);
      this.addBirthday(this.heroes);
      this.dataSource = new MatTableDataSource(this.heroes);
      this.sort.disableClear = true; //para que solo haga ascendente o descendente
      this.dataSource.sort = this.sort;
      this.loading = false;
    })
  }

  addBirthday(tabla: any){
    // Añado campo 'dias hasta siguiente cumpleaños' a los datos
    for (let i = 0; i < tabla.length; i++){
      let cumple = tabla[i].created;
      const res = this.daysUntilBirthday(cumple);
      tabla[i].diasCumple = res.dias;
      tabla[i].numeroAnosCumple = res.numeroAnosCumple;
      // Hora de creacion en zona local del sistema (ajustada por DST automaticamente)
      try {
        const createdDate = new Date(cumple);
        tabla[i].horaCreacion = createdDate.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit', hour12: false });
        // Fecha local en formato DD-MM-YYYY
        const dd = String(createdDate.getDate()).padStart(2, '0');
        const months = ['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'];
        const monthAbbrev = months[createdDate.getMonth()];
        const yyyy = createdDate.getFullYear();
        tabla[i].fechaCreacion = `${dd}-${monthAbbrev}-${yyyy}`;
      } catch (e) {
        tabla[i].horaCreacion = '';
        tabla[i].fechaCreacion = '';
      }
      // Fecha del siguiente cumpleaños (local, con DST segun zona)
      try {
        const nextMs = res.nextTime;
        const nextDateLocal = new Date(nextMs);
        const ddn = String(nextDateLocal.getDate()).padStart(2, '0');
        const months = ['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'];
        const monthAbbrev = months[nextDateLocal.getMonth()];
        const yyn = nextDateLocal.getFullYear();
        tabla[i].fechaSigCumple = `${ddn}-${monthAbbrev}-${yyn}`;
      } catch (e) {
        tabla[i].fechaSigCumple = '';
      }
    }
    return this.heroes = tabla;
  }

  daysUntilBirthday(creacion: string){
    // Los cumpleaños se cuentan cada 365 días, es decir sin tener en cuenta años bisiestos.
    // Por tanto, el proximo cumpleaños es la fecha de creacion + n*365 dias
    // con n minimo estrictamente positivo tal que la fecha resultante > today.
    const d = new Date(creacion);
    const creationUtc = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()));

    const today = new Date();
    const todayUtc = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate()));

    const millisPerDay = 24 * 60 * 60 * 1000;
    const daysSinceCreation = Math.floor((todayUtc.getTime() - creationUtc.getTime()) / millisPerDay);

    let n = Math.floor(daysSinceCreation / 365) + 1;
    if (daysSinceCreation < 0) n = 1; // creacion en el futuro cercano

    let next = new Date(creationUtc.getTime() + n * 365 * millisPerDay);
    while (next.getTime() <= todayUtc.getTime()) {
      n++;
      next = new Date(creationUtc.getTime() + n * 365 * millisPerDay);
    }

    const dias = Math.round((next.getTime() - todayUtc.getTime()) / millisPerDay);
    let numeroAnosCumple = n;

    // Si fue creado este mismo año mostrar 1
    if (creationUtc.getUTCFullYear() === todayUtc.getUTCFullYear()) numeroAnosCumple = 1;

    return {dias, numeroAnosCumple, nextTime: next.getTime()}
  }

  // addSpec(tabla: any){
  //   // Añado columna de especializacion a cada heroe
  //   for (let i = 0; i < tabla.length; i++){
  //     tabla[i].espec = [];
  //     // Busco ids y name de las especializaciones de cada profesion
  //     this.heroService.getProfession(tabla[i].profession).subscribe((profesion: any) => {
  //       // Busco los datos de cada personaje
  //       this.heroService.getInfoHero(tabla[i].name).subscribe((infoHero: any) => {
  //         for (let j = 0; j < profesion.length; j++){
  //           for (let k = 0; k < infoHero.training.length; k++){
  //             // Comparo y si existe y done  = true escribo la espec
  //             if ((profesion[j].id === infoHero.training[k].id) && (infoHero.training[k].done)){
  //               // console.log("name: " + infoHero.name + " espec: " + profesion[j].name);
  //               tabla[i].espec.push(profesion[j].name)
  //               break;
  //             }
  //           }
  //         }
  //       })
  //     })
  //   }
  //   return this.heroes = tabla;
  // }

  addSpec(tabla: any){
    // Añado columna de especializacion pve activa a cada heroe
    for (let i = 0; i < tabla.length; i++){
      tabla[i].espec = "Core"; // Para cuando no coincida sera especializacion core
      // Busco los datos de cada personaje
      this.heroService.getInfoHero(tabla[i].name).subscribe((infoHero: any) => {
        // Entro en specializations y pve
        let specPve = infoHero.specializations.pve;
        for (let k = 0; k < specPve.length; k++){
          // Comparo si existe y añado columna
          for (let j = 0; j < Specs.length; j++){
            if ((specPve[k].id === Specs[j].specHot)){
              tabla[i].espec = Specs[j].specHotName
              k = specPve.length; // Para salir del bucle k y no seguirlo ya que encontré coincidencia
              break; // Para salir del bucle j y no seguirlo ya que encontré coincidencia
            } else if ((specPve[k].id === Specs[j].specPof)){
              tabla[i].espec = Specs[j].specPofName
              k = specPve.length;
              break;
            } else if ((specPve[k].id === Specs[j].specEod)){
              tabla[i].espec = Specs[j].specEodName
              k = specPve.length;
              break;
            } else if ((specPve[k].id === Specs[j].specVoe)){
              tabla[i].espec = Specs[j].specVoeName
              k = specPve.length;
              break;
            }
          }
        }
      })
    }
    return this.heroes = tabla;
  }

  addRobotJade(tabla: any){
    // Añado columna de robot de jade a cada heroe
    for (let i = 0; i < tabla.length; i++){
      // Valor por defecto si no tiene PowerCore
      tabla[i].robotJade = "-";
      // Busco id del robot de jade de cada heroe
      for (let j = 0; j < tabla[i].equipment.length; j++){
        if (tabla[i].equipment[j].slot === "PowerCore"){
          let robotJade = "a";
          // Busco el id en /v2/items?id= para ver su informacion
          this.heroService.getItem(tabla[i].equipment[j].id).subscribe((robot: any) => {
            // Ej: "name": "Núcleo de robot de jade: Rango 10",
            robotJade = robot.name.replace(/^\D+/g, ""); // Me quedo con el numero
            tabla[i].robotJade = robotJade;
          })
          break;
        }
      }
    }
    return this.heroes = tabla;
  }

  addTrophyProtocol(tabla: any){
    // Añado columna de protocolo de carroñero a cada heroe
    for (let i = 0; i < tabla.length; i++){
      // valor por defecto si no tiene SensoryArray
      tabla[i].trophyProtocol = "-";
      // Busco id del Protocolo de carroñero de cada heroe
      for (let j = 0; j < tabla[i].equipment.length; j++){
        if (tabla[i].equipment[j].slot === "SensoryArray"){
          let trophyProtocol = "a";
          // Busco el id en /v2/items?id= para ver su informacion
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

  addFreeSpace(tabla: any){
    // Añado columna de espacio libre en el inventario a cada heroe
    for (let i = 0; i < tabla.length; i++){
      let capacidadTotalBolsas = 0; // Suma de los tamaños de las bolsas equipadas
      let espacioOcupadoBolsas = 0; // Suma del espacio ocupado de todas las bolsas
      let espacioVacioBolsas = 0; // Suma del espacio sin ocupar en las bolsas
      // Busco bolsas de inventario con sus capacidades
      for (let j = 0; j < tabla[i].bags.filter(Boolean).length; j++){
        capacidadTotalBolsas += tabla[i].bags[j].size;
        espacioOcupadoBolsas += tabla[i].bags[j].inventory.filter(Boolean).length;
        // array.filter(Boolean) es para no contar los valores null
        // console.log(tabla[i].name, capacidadTotalBolsas, espacioOcupadoBolsas)
      }
      espacioVacioBolsas = capacidadTotalBolsas - espacioOcupadoBolsas;
      tabla[i].freeSpace = espacioVacioBolsas;
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
