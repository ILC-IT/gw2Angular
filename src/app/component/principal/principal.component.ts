import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor() { }

  typesOfDiarias: string[] = ['Pve', 'Fractales', 'McM / WvW', 'PvP', '+Diarias'];
  typesOfHeroes: string[] = ['Heroes'];
  typesOfCalculadora: string[] = ['Calculadora'];
  typesOfEnlaces: string[] = ['Enlaces'];
  typesOfStats: string[] = ['Buscador Stats'];
  typesOfRaid: string[] = ['Raid'];
  typesOfLegendary: string[] = ['Legendarios'];

  ngOnInit(): void {
  }

}
