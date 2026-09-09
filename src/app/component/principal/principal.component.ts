import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor() { }

  typesOfDiarias: string[] = ['Cámara del brujo', 'Fractales', 'Semanales', 'Más diarias'];
  typesOfHeroes: string[] = ['Héroes Info', 'Infusiones'];
  typesOfCalculadora: string[] = ['Calculadora'];
  typesOfStats: string[] = ['Buscar por stats (atributos)', 'Buscar por prefijo', 'Buscar por nombre arma/armadura'];
  typesOfPoi: string[] = ['Buscar por nombre', 'Buscar por mapa', 'Buscar por código'];
  typesOfEnlaces: string[] = ['Enlaces'];
  typesOfRaid: string[] = ['Limpieza', 'Logro Raid Semanal', 'Daily Raid Bounties'];
  typesOfDungeon: string[] = ['Dungeon'];
  typesOfLegendary: string[] = ['Armadura legendaria Raid', 'Otros legendarios', 'Otros componentes', 'Cartera', 'Precios T6', 'Precios Varios', 'Precios Armas Legendarias'];
  typesOfFestival: string[] = ['Festivales'];
  typesOfHomestead: string[] = ['Precios Huerto', 'Glifos'];
  typesOfAccounts: string[] = ['Accounts'];

  ngOnInit(): void {
  }
  // Mapeo de nombres de pestañas a rutas igual al de diarias
  routeMap: { [key: string]: string } = {
    'Cámara del brujo': 'wizardvault',
    'Fractales': 'fractales',
    'Semanales': 'semanales',
    'Más diarias': 'otros',
    'Héroes Info': 'heroesinfo',
    'Infusiones': 'infusiones',
    'Buscar por stats (atributos)': 'buscarporstats',
    'Buscar por prefijo': 'buscarporprefijo',
    'Buscar por nombre arma/armadura': 'buscarporarma',
    'Buscar por nombre': 'buscarpornombre',
    'Buscar por mapa': 'buscarpormapa',
    'Buscar por código': 'buscarporcodigo',
    'Limpieza': 'limpieza',
    'Logro Raid Semanal': 'weeklyraid',
    'Daily Raid Bounties': 'dailyraidbounties',
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
