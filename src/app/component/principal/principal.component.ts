import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor() { }

  typesOfDiarias: string[] = ['Cámara del brujo', 'Fractales', '+Diarias'];
  typesOfHeroes: string[] = ['Héroes'];
  typesOfCalculadora: string[] = ['Calculadora'];
  typesOfEnlaces: string[] = ['Enlaces'];
  typesOfStats: string[] = ['Buscador Stats'];
  typesOfRaid: string[] = ['Raid'];
  typesOfLegendary: string[] = ['Legendarios'];

  ngOnInit(): void {
  }

}
