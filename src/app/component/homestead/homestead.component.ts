import { Component, OnInit } from '@angular/core';
import { HomesteadService } from "../../service/homestead.service";
import {MatTableModule} from '@angular/material/table';

export interface Glifos {
  category: string;
  name: string;
}

const GLIFO: Glifos[] = [
  {category: "Harvesting", name: ''},
  {category: "Logging", name: ''},
  {category: "Mining", name: ''},
];

@Component({
  selector: 'app-homestead',
  templateUrl: './homestead.component.html',
  styleUrls: ['./homestead.component.css']
})
export class HomesteadComponent implements OnInit {

  //tabla glifos
  displayedColumnsGlyphs: string[] = ['category', 'name'];
  dataSourceGlyphs = GLIFO;

  constructor(private homesteadService: HomesteadService) { }

  ngOnInit(): void {
    this.getAccGlyphs();
  }

  getAccGlyphs(){
    this.homesteadService.getAccGlyphs().subscribe((glifo: any) => {
      for (let i = 0; i < glifo.length; i++){
        if (glifo[i].includes("harvesting")){
          GLIFO[0].name = this.capitalizeFirstLetter(glifo[i].split("_harvesting")[0]);
        } else if (glifo[i].includes("logging")){
          GLIFO[1].name = this.capitalizeFirstLetter(glifo[i].split("_logging")[0]);
        } else if (glifo[i].includes("mining")){
          GLIFO[2].name = this.capitalizeFirstLetter(glifo[i].split("_mining")[0]);
        }
      }
      this.dataSourceGlyphs = GLIFO;
    })
  }

  capitalizeFirstLetter(cadena: string) {
    return cadena.charAt(0).toUpperCase() + cadena.slice(1);
}

}
