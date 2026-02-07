import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor() { }

  typesOfDiarias: string[] = ['Cámara del brujo', 'Fractales', 'Semanales', 'Más diarias'];
  typesOfHeroes: string[] = ['Héroes'];
  typesOfCalculadora: string[] = ['Calculadora'];
  typesOfStats: string[] = ['Buscar por stats (atributos)', 'Buscar por prefijo', 'Buscar por nombre arma/armadura'];
  typesOfEnlaces: string[] = ['Enlaces'];
  typesOfRaid: string[] = ['Limpieza', 'Logro Raid Semanal'];
  typesOfLegendary: string[] = ['Armadura legendaria Raid', 'Otros legendarios', 'Otros componentes', 'Cartera', 'Precios T6', 'Precios Varios', 'Precios Armas Legendarias'];
  typesOfHomestead: string[] = ['Precios Huerto', 'Glifos']
  typesOfFestival: string[] = ['Festival']

  ngOnInit(): void {
  }
  // Mapeo de nombres de pestañas a rutas igual al de diarias
  routeMap: { [key: string]: string } = {
    'Cámara del brujo': 'wizardvault',
    'Fractales': 'fractales',
    'Semanales': 'semanales',
    'Más diarias': 'otros',
    'Buscar por stats (atributos)': 'buscarporstats',
    'Buscar por prefijo': 'buscarporprefijo',
    'Buscar por nombre arma/armadura': 'buscarporarma',
    'Limpieza': 'limpieza',
    'Logro Raid Semanal': 'weeklyraid',
    'Armadura legendaria Raid': 'armaduraraid',
    'Otros legendarios': 'otroslegendarios',
    'Otros componentes': 'otros',
    'Cartera': 'cartera',
    'Precios T6': 'preciost6',
    'Precios Varios': 'preciosvarios',
    'Precios Armas Legendarias': 'preciosarmas',
    'Precios Huerto': 'precioshuerto',
    'Glifos': 'glifos'
  };
  // Helper method to convert to route format
  sanitizeRoute(name: string): string {
    return this.routeMap[name] || name.replace(/[^\w-]+/g, '').toLowerCase();
  }

}
