import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor() { }

  typesOfDiarias: string[] = ['Cámara del brujo', 'Fractales', 'Más diarias'];
  typesOfHeroes: string[] = ['Héroes'];
  typesOfCalculadora: string[] = ['Calculadora'];
  typesOfEnlaces: string[] = ['Enlaces'];
  typesOfStats: string[] = ['Buscar por stats (atributos)', 'Buscar por prefijo', 'Buscar por nombre arma/armadura'];
  typesOfRaid: string[] = ['Raid'];
  typesOfLegendary: string[] = ['Armadura legendaria Raid/PvE', 'Otros componentes', 'Precios T6', 'Precios Varios', 'Precios Armas Legendarias'];
  typesOfHomestead: string[] = ['Glifos']

  ngOnInit(): void {
  }
  // Mapeo de nombres de pestañas a rutas igual al de diarias
  routeMap: { [key: string]: string } = {
    'Cámara del brujo': 'wizardvault',
    'Fractales': 'fractales',
    'Más diarias': 'otros',
    'Buscar por stats (atributos)': 'buscarporstats',
    'Buscar por prefijo': 'buscarporprefijo',
    'Buscar por nombre arma/armadura': 'buscarporarma',
    'Armadura legendaria Raid/PvE': 'armaduraraid',
    'Otros componentes': 'otros',
    'Precios T6': 'preciost6',
    'Precios Varios': 'preciosvarios',
    'Precios Armas Legendarias': 'preciosarmas'
  };
  // Helper method to convert to route format
  sanitizeRoute(name: string): string {
    return this.routeMap[name] || name.replace(/[^\w-]+/g, '').toLowerCase();
  }

}
