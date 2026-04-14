import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { HomesteadService } from "../../service/homestead.service";
import { Huerto, Glifos } from "./homestead";
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-homestead',
  templateUrl: './homestead.component.html',
  styleUrls: ['./homestead.component.css']
})

export class HomesteadComponent implements OnInit, AfterViewInit {

  // GLIFOS
  GLIFO: Glifos[] = [
    {category: "Harvesting", name: '-'},
    {category: "Logging", name: '-'},
    {category: "Mining", name: '-'},
  ];

  // Tabla glifos
  displayedColumnsGlyphs: string[] = ['category', 'name'];
  dataSourceGlyphs = this.GLIFO;

  // Huerto
  alcachofa: Huerto = {
    id: 12512,
    nombre: "Alcachofa",
    tengo: 0,
    icon: "https://wiki-es.guildwars2.com/images/b/b7/Alcachofa.png",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: "",
    precioOrdenableTpCompra: "",
    precioOrdenableTpVenta: ""
  };
  esparragoReal: Huerto = {
    id: 12505,
    nombre: "Espárrago",
    tengo: 0,
    icon: "https://wiki-es.guildwars2.com/images/b/be/Esp%C3%A1rrago.png",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: "",
    precioOrdenableTpCompra: "",
    precioOrdenableTpVenta: ""
  };
  hojaDeLaurel: Huerto = {
    id: 12247,
    nombre: "Hoja de laurel",
    tengo: 0,
    icon: "https://wiki-es.guildwars2.com/images/f/f7/Hoja_de_laurel.png",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: "",
    precioOrdenableTpCompra: "",
    precioOrdenableTpVenta: ""
  };
  remolacha: Huerto = {
    id: 12161,
    nombre: "Remolacha",
    tengo: 0,
    icon: "https://wiki-es.guildwars2.com/images/3/39/Remolacha.png",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: "",
    precioOrdenableTpCompra: "",
    precioOrdenableTpVenta: ""
  };
  granoDePimientaNegra: Huerto = {
    id: 12236,
    nombre: "Grano de pimienta negra",
    tengo: 0,
    icon: "https://wiki-es.guildwars2.com/images/f/f8/Grano_de_pimienta_negra.png",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: "",
    precioOrdenableTpCompra: "",
    precioOrdenableTpVenta: ""
  };
  mora: Huerto = {
    id: 12537,
    nombre: "Mora",
    tengo: 0,
    icon: "https://wiki-es.guildwars2.com/images/2/2d/Mora.png",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: "",
    precioOrdenableTpCompra: "",
    precioOrdenableTpVenta: ""
  };
  arandano: Huerto = {
    id: 12255,
    nombre: "Arándano",
    tengo: 0,
    icon: "https://wiki-es.guildwars2.com/images/a/a9/Ar%C3%A1ndano.png",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: "",
    precioOrdenableTpCompra: "",
    precioOrdenableTpVenta: ""
  };
  calabazaMoscada: Huerto = {
    id: 12511,
    nombre: "Calabaza moscada",
    tengo: 0,
    icon: "https://wiki-es.guildwars2.com/images/6/60/Calabaza_moscada.png",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: "",
    precioOrdenableTpCompra: "",
    precioOrdenableTpVenta: ""
  };
  zanahoria: Huerto = {
    id: 12134,
    nombre: "Zanahoria",
    tengo: 0,
    icon: "https://wiki-es.guildwars2.com/images/3/31/Zanahoria.png",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: "",
    precioOrdenableTpCompra: "",
    precioOrdenableTpVenta: ""
  };
  raizDeYuca: Huerto = {
    id: 73113,
    nombre: "Raíz de yuca",
    tengo: 0,
    icon: "https://wiki-es.guildwars2.com/images/6/62/Ra%C3%ADz_de_yuca.png",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: "",
    precioOrdenableTpCompra: "",
    precioOrdenableTpVenta: ""
  };
  pimientaDeCayena: Huerto = {
    id: 12504,
    nombre: "Pimienta de Cayena",
    tengo: 0,
    icon: "https://wiki-es.guildwars2.com/images/5/5c/Pimienta_de_Cayena.png",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: "",
    precioOrdenableTpCompra: "",
    precioOrdenableTpVenta: ""
  };
  chile: Huerto = {
    id: 12331,
    nombre: "Chile",
    tengo: 0,
    icon: "https://wiki-es.guildwars2.com/images/f/fa/Chile.png",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: "",
    precioOrdenableTpCompra: "",
    precioOrdenableTpVenta: ""
  };
  clavo: Huerto = {
    id: 12534,
    nombre: "Clavo",
    tengo: 0,
    icon: "https://wiki-es.guildwars2.com/images/7/71/Clavo.png",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: "",
    precioOrdenableTpCompra: "",
    precioOrdenableTpVenta: ""
  };
  semillaDeCilantro: Huerto = {
    id: 12531,
    nombre: "Semilla de cilantro",
    tengo: 0,
    icon: "https://wiki-es.guildwars2.com/images/d/d3/Semilla_de_cilantro.png",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: "",
    precioOrdenableTpCompra: "",
    precioOrdenableTpVenta: ""
  };
  ramaDeEneldo: Huerto = {
    id: 12336,
    nombre: "Rama de eneldo",
    tengo: 0,
    icon: "https://wiki-es.guildwars2.com/images/4/43/Rama_de_eneldo.png",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: "",
    precioOrdenableTpCompra: "",
    precioOrdenableTpVenta: ""
  };
  uva: Huerto = {
    id: 12341,
    nombre: "Uva",
    tengo: 0,
    icon: "https://wiki-es.guildwars2.com/images/b/b5/Uva.png",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: "",
    precioOrdenableTpCompra: "",
    precioOrdenableTpVenta: ""
  };
  puñadoDeLentejasRojas: Huerto = {
    id: 82866,
    nombre: "Puñado de lentejas rojas",
    tengo: 0,
    icon: "https://wiki-es.guildwars2.com/images/2/2b/Pu%C3%B1ado_de_lentejas_rojas.png",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: "",
    precioOrdenableTpCompra: "",
    precioOrdenableTpVenta: ""
  };
  repollo: Huerto = {
    id: 12332,
    nombre: "Repollo",
    tengo: 0,
    icon: "https://wiki-es.guildwars2.com/images/4/46/Repollo.png",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: "",
    precioOrdenableTpCompra: "",
    precioOrdenableTpVenta: ""
  };
  coliflor: Huerto = {
    id: 12532,
    nombre: "Coliflor",
    tengo: 0,
    icon: "https://wiki-es.guildwars2.com/images/4/47/Coliflor.png",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: "",
    precioOrdenableTpCompra: "",
    precioOrdenableTpVenta: ""
  };
  cabezaDeAjo: Huerto = {
    id: 12163,
    nombre: "Cabeza de ajo",
    tengo: 0,
    icon: "https://wiki-es.guildwars2.com/images/e/ed/Cabeza_de_ajo.png",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: "",
    precioOrdenableTpCompra: "",
    precioOrdenableTpVenta: ""
  };
  lechuga: Huerto = {
    id: 12238,
    nombre: "Lechuga",
    tengo: 0,
    icon: "https://wiki-es.guildwars2.com/images/6/6b/Lechuga.png",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: "",
    precioOrdenableTpCompra: "",
    precioOrdenableTpVenta: ""
  };
  hojaDeColRizada: Huerto = {
    id: 12333,
    nombre: "Hoja de col rizada",
    tengo: 0,
    icon: "https://wiki-es.guildwars2.com/images/6/65/Hoja_de_col_rizada.png",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: "",
    precioOrdenableTpCompra: "",
    precioOrdenableTpVenta: ""
  };
  puerro: Huerto = {
    id: 12508,
    nombre: "Puerro",
    tengo: 0,
    icon: "https://wiki-es.guildwars2.com/images/4/42/Puerro.png",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: "",
    precioOrdenableTpCompra: "",
    precioOrdenableTpVenta: ""
  };
  limoncillo: Huerto = {
    id: 12546,
    nombre: "Limoncillo",
    tengo: 0,
    icon: "https://wiki-es.guildwars2.com/images/3/36/Limoncillo.png",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: "",
    precioOrdenableTpCompra: "",
    precioOrdenableTpVenta: ""
  };
  hojaDeMenta: Huerto = {
    id: 12536,
    nombre: "Hoja de menta",
    tengo: 0,
    icon: "https://wiki-es.guildwars2.com/images/5/58/Hoja_de_menta.png",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: "",
    precioOrdenableTpCompra: "",
    precioOrdenableTpVenta: ""
  };
  champiñon: Huerto = {
    id: 12147,
    nombre: "Champiñón",
    tengo: 0,
    icon: "https://wiki-es.guildwars2.com/images/2/24/Champi%C3%B1%C3%B3n.png",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: "",
    precioOrdenableTpCompra: "",
    precioOrdenableTpVenta: ""
  };
  nopalito: Huerto = {
    id: 66524,
    nombre: "Nopalito (50% cactus)",
    tengo: 0,
    icon: "https://wiki-es.guildwars2.com/images/a/ae/Nopalito.png",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: "",
    precioOrdenableTpCompra: "",
    precioOrdenableTpVenta: ""
  };
  cebolla: Huerto = {
    id: 12142,
    nombre: "Cebolla",
    tengo: 0,
    icon: "https://wiki-es.guildwars2.com/images/3/3d/Cebolla.png",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: "",
    precioOrdenableTpCompra: "",
    precioOrdenableTpVenta: ""
  };
  hojaDeOregano: Huerto = {
    id: 12244,
    nombre: "Hoja de orégano",
    tengo: 0,
    icon: "https://wiki-es.guildwars2.com/images/f/f5/Hoja_de_or%C3%A9gano.png",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: "",
    precioOrdenableTpCompra: "",
    precioOrdenableTpVenta: ""
  };
  hojaDePerejil: Huerto = {
    id: 12246,
    nombre: "Hoja de perejil",
    tengo: 0,
    icon: "https://wiki-es.guildwars2.com/images/3/3f/Hoja_de_perejil.png",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: "",
    precioOrdenableTpCompra: "",
    precioOrdenableTpVenta: ""
  };
  chirivia: Huerto = {
    id: 12507,
    nombre: "Chirivía",
    tengo: 0,
    icon: "https://wiki-es.guildwars2.com/images/9/90/Chiriv%C3%ADa.png",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: "",
    precioOrdenableTpCompra: "",
    precioOrdenableTpVenta: ""
  };
  maracuya: Huerto = {
    id: 36731,
    nombre: "Maracuyá",
    tengo: 0,
    icon: "https://wiki-es.guildwars2.com/images/7/78/Maracuy%C3%A1.png",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: "",
    precioOrdenableTpCompra: "",
    precioOrdenableTpVenta: ""
  };
  montonDeBayasDePimientaDulce: Huerto = {
    id: 73096,
    nombre: "Montón de bayas de pimienta dulce",
    tengo: 0,
    icon: "https://wiki-es.guildwars2.com/images/c/cb/Mont%C3%B3n_de_bayas_de_pimienta_dulce.png",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: "",
    precioOrdenableTpCompra: "",
    precioOrdenableTpVenta: ""
  };
  champiñonPortobello: Huerto = {
    id: 12334,
    nombre: "Champiñón Portobello",
    tengo: 0,
    icon: "https://wiki-es.guildwars2.com/images/d/dc/Champi%C3%B1%C3%B3n_Portobello.png",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: "",
    precioOrdenableTpCompra: "",
    precioOrdenableTpVenta: ""
  };
  patata: Huerto = {
    id: 12135,
    nombre: "Patata",
    tengo: 0,
    icon: "https://wiki-es.guildwars2.com/images/2/29/Patata.png",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: "",
    precioOrdenableTpCompra: "",
    precioOrdenableTpVenta: ""
  };
  chumbera: Huerto = {
    id: 66522,
    nombre: "Chumbera (50% cactus)",
    tengo: 0,
    icon: "https://wiki-es.guildwars2.com/images/f/f6/Chumbera.png",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: "",
    precioOrdenableTpCompra: "",
    precioOrdenableTpVenta: ""
  };
  frambuesa: Huerto = {
    id: 12254,
    nombre: "Frambuesa",
    tengo: 0,
    icon: "https://wiki-es.guildwars2.com/images/3/31/Frambuesa.png",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: "",
    precioOrdenableTpCompra: "",
    precioOrdenableTpVenta: ""
  };
  ramaDeRomero: Huerto = {
    id: 12335,
    nombre: "Rama de romero",
    tengo: 0,
    icon: "https://wiki-es.guildwars2.com/images/c/cf/Rama_de_romero.png",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: "",
    precioOrdenableTpCompra: "",
    precioOrdenableTpVenta: ""
  };
  colinabo: Huerto = {
    id: 12535,
    nombre: "Colinabo",
    tengo: 0,
    icon: "https://wiki-es.guildwars2.com/images/6/67/Colinabo.png",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: "",
    precioOrdenableTpCompra: "",
    precioOrdenableTpVenta: ""
  };
  hebraDeAzafran: Huerto = {
    id: 12547,
    nombre: "Hebra de azafrán",
    tengo: 0,
    icon: "https://wiki-es.guildwars2.com/images/8/89/Hebra_de_azafr%C3%A1n.png",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: "",
    precioOrdenableTpCompra: "",
    precioOrdenableTpVenta: ""
  };
  hojaDeSalvia: Huerto = {
    id: 12243,
    nombre: "Hoja de salvia",
    tengo: 0,
    icon: "https://wiki-es.guildwars2.com/images/2/25/Hoja_de_salvia.png",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: "",
    precioOrdenableTpCompra: "",
    precioOrdenableTpVenta: ""
  };
  neolentinus: Huerto = {
    id: 73504,
    nombre: "Neolentinus",
    tengo: 0,
    icon: "https://wiki-es.guildwars2.com/images/9/95/Neolentinus.png",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: "",
    precioOrdenableTpCompra: "",
    precioOrdenableTpVenta: ""
  };
  semillaDeSesamo: Huerto = {
    id: 12342,
    nombre: "Semilla de sésamo",
    tengo: 0,
    icon: "https://wiki-es.guildwars2.com/images/1/18/Semilla_de_s%C3%A9samo.png",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: "",
    precioOrdenableTpCompra: "",
    precioOrdenableTpVenta: ""
  };
  hojaDeEspinaca: Huerto = {
    id: 12241,
    nombre: "Hoja de espinaca",
    tengo: 0,
    icon: "https://wiki-es.guildwars2.com/images/f/f6/Hoja_de_espinaca.png",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: "",
    precioOrdenableTpCompra: "",
    precioOrdenableTpVenta: ""
  };
  fresa: Huerto = {
    id: 12253,
    nombre: "Fresa",
    tengo: 0,
    icon: "https://wiki-es.guildwars2.com/images/b/b8/Fresa.png",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: "",
    precioOrdenableTpCompra: "",
    precioOrdenableTpVenta: ""
  };
  calabazaDulce : Huerto = {
    id: 12538,
    nombre: "Calabaza dulce",
    tengo: 0,
    icon: "https://wiki-es.guildwars2.com/images/5/58/Calabaza_dulce.png",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: "",
    precioOrdenableTpCompra: "",
    precioOrdenableTpVenta: ""
  };
  hojasDeEstragon : Huerto = {
    id: 12506,
    nombre: "Hojas de estragón ",
    tengo: 0,
    icon: "https://wiki-es.guildwars2.com/images/6/61/Hojas_de_estrag%C3%B3n.png",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: "",
    precioOrdenableTpCompra: "",
    precioOrdenableTpVenta: ""
  };
  hojaDeTomillo : Huerto = {
    id: 12248,
    nombre: "Hoja de tomillo",
    tengo: 0,
    icon: "https://wiki-es.guildwars2.com/images/0/0a/Hoja_de_tomillo.png",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: "",
    precioOrdenableTpCompra: "",
    precioOrdenableTpVenta: ""
  };
  nabo : Huerto = {
    id: 12162,
    nombre: "Nabo ",
    tengo: 0,
    icon: "https://wiki-es.guildwars2.com/images/0/0d/Nabo.png",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: "",
    precioOrdenableTpCompra: "",
    precioOrdenableTpVenta: ""
  };
  vainaDeVainilla : Huerto = {
    id: 12234,
    nombre: "Vaina de vainilla",
    tengo: 0,
    icon: "https://wiki-es.guildwars2.com/images/6/6e/Vaina_de_vainilla.png",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: "",
    precioOrdenableTpCompra: "",
    precioOrdenableTpVenta: ""
  };
  boniato : Huerto = {
    id: 12329,
    nombre: "Boniato",
    tengo: 0,
    icon: "https://wiki-es.guildwars2.com/images/9/9f/Boniato.png",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: "",
    precioOrdenableTpCompra: "",
    precioOrdenableTpVenta: ""
  };
  calabacin : Huerto = {
    id: 12330,
    nombre: "Calabacín",
    tengo: 0,
    icon: "https://wiki-es.guildwars2.com/images/5/52/Calabac%C3%ADn.png",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: "",
    precioOrdenableTpCompra: "",
    precioOrdenableTpVenta: ""
  };
  hojaDeCilantroCultivado : Huerto = {
    id: 91715,
    nombre: "*Hoja de cilantro cultivado*",
    tengo: 0,
    icon: "https://wiki-es.guildwars2.com/images/7/78/Hoja_de_cilantro_cultivado.png",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: "",
    precioOrdenableTpCompra: "",
    precioOrdenableTpVenta: ""
  };
  clavoCultivado : Huerto = {
    id: 91796,
    nombre: "*Clavo cultivado*",
    tengo: 0,
    icon: "https://wiki-es.guildwars2.com/images/c/cf/Clavo_cultivado.png",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: "",
    precioOrdenableTpCompra: "",
    precioOrdenableTpVenta: ""
  };
  hojaDeMentaCultivada : Huerto = {
    id: 91793,
    nombre: "*Hoja de menta cultivada*",
    tengo: 0,
    icon: "https://wiki-es.guildwars2.com/images/3/36/Hoja_de_menta_cultivada.png",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: "",
    precioOrdenableTpCompra: "",
    precioOrdenableTpVenta: ""
  };
  granoDePimientaCultivada : Huerto = {
    id: 91869,
    nombre: "*Grano de pimienta cultivada*",
    tengo: 0,
    icon: "https://wiki-es.guildwars2.com/images/1/1e/Grano_de_pimienta_cultivada.png",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: "",
    precioOrdenableTpCompra: "",
    precioOrdenableTpVenta: ""
  };
  semillaDeSesamoCultivado : Huerto = {
    id: 91701,
    nombre: "*Semilla de sésamo cultivado*",
    tengo: 0,
    icon: "https://wiki-es.guildwars2.com/images/d/da/Semilla_de_s%C3%A9samo_cultivado.png",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: "",
    precioOrdenableTpCompra: "",
    precioOrdenableTpVenta: ""
  };

  materialesHuerto: Huerto[] = [
    this.alcachofa,
    this.arandano,
    this.boniato,
    this.cabezaDeAjo,
    this.calabacin,
    this.calabazaDulce,
    this.calabazaMoscada,
    this.cebolla,
    this.chile,
    this.chirivia,
    this.champiñon,
    this.champiñonPortobello,
    this.chumbera,
    this.clavo,
    this.coliflor,
    this.colinabo,
    this.esparragoReal,
    this.frambuesa,
    this.fresa,
    this.granoDePimientaNegra,
    this.hebraDeAzafran,
    this.hojaDeColRizada,
    this.hojaDeEspinaca,
    this.hojaDeLaurel,
    this.hojaDeMenta,
    this.hojaDeOregano,
    this.hojaDePerejil,
    this.hojaDeSalvia,
    this.hojaDeTomillo,
    this.hojasDeEstragon,
    this.lechuga,
    this.limoncillo,
    this.maracuya,
    this.montonDeBayasDePimientaDulce,
    this.mora,
    this.nabo,
    this.neolentinus,
    this.nopalito,
    this.patata,
    this.pimientaDeCayena,
    this.puerro,
    this.puñadoDeLentejasRojas,
    this.raizDeYuca,
    this.ramaDeEneldo,
    this.ramaDeRomero,
    this.remolacha,
    this.repollo,
    this.semillaDeCilantro,
    this.semillaDeSesamo,
    this.uva,
    this.vainaDeVainilla,
    this.zanahoria,
    this.hojaDeCilantroCultivado,
    this.clavoCultivado,
    this.hojaDeMentaCultivada,
    this.granoDePimientaCultivada,
    this.semillaDeSesamoCultivado
  ];

  idsHuerto: string = "";

  // Tabla huerto
  displayedColumnsMaterialesHuerto: string[] = ['icon', 'tengo', 'nombre', 'precioTpCompraS', 'precioTpVentaS'];
  dataSourceMaterialesHuerto = new MatTableDataSource(this.materialesHuerto);
  @ViewChild("sort1", { static: false }) sort1!: MatSort;

  // Para las rutas a las pestañas de homestead
  selectedTabIndex: number = 0;
  tabs: string[] = ['Precios Huerto', 'Glifos'];
  routeMap: { [key: string]: string } = {
    'precioshuerto': 'Precios Huerto',
    'glifos': 'Glifos'
  };
  /////////////////////////////////////////////////////////

  constructor(private homesteadService: HomesteadService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // Para hacer el routing a las pestañas de la tabla
    this.route.paramMap.subscribe(params => {
      const tab = params.get('tab');
      if (tab) {
        this.selectedTabIndex = this.getTabIndex(tab);
      }
    });
    this.getAccGlyphs();
    this.getMaterialesHuertoTengo();
    this.getMaterialesHuertoPrices();
  }

  ngAfterViewInit() {
    this.sort1.disableClear = true; //para que solo haga ascendente o descendente
    this.dataSourceMaterialesHuerto.sort = this.sort1;
  }

    // devuelve el index de la pestaña de la tabla
  getTabIndex(tab: string): number {
    const tabName = this.routeMap[tab] || tab;
    return this.tabs.indexOf(tabName);
  }

  sanitizeRoute(name: string): string {
    return name.replace(/[^\w-]+/g, '').toLowerCase();
  }

  onTabChange(event: any) {
    const selectedTab = this.tabs[event.index];
    const routeName = Object.keys(this.routeMap).find(key => this.routeMap[key] === selectedTab) || this.sanitizeRoute(selectedTab);
    this.router.navigate(['/homestead', routeName]);
  }

  getAccGlyphs(){
    this.homesteadService.getAccGlyphs().subscribe((glifo: any) => {
      for (let i = 0; i < glifo.length; i++){
        if (glifo[i].includes("harvesting")){
          this.GLIFO[0].name = this.capitalizeFirstLetter(glifo[i].split("_harvesting")[0]);
        } else if (glifo[i].includes("logging")){
          this.GLIFO[1].name = this.capitalizeFirstLetter(glifo[i].split("_logging")[0]);
        } else if (glifo[i].includes("mining")){
          this.GLIFO[2].name = this.capitalizeFirstLetter(glifo[i].split("_mining")[0]);
        }
      }
      this.dataSourceGlyphs = this.GLIFO;
    })
  }

  capitalizeFirstLetter(cadena: string) {
    return cadena.charAt(0).toUpperCase() + cadena.slice(1);
  }

  getMaterialesHuertoTengo(){
    this.homesteadService.getMaterials().subscribe((materials: any) => {
      for (let j = 0; j < this.materialesHuerto.length; j++){
        for (let i = 0; i < materials.length; i++){
          if (materials[i].id === this.materialesHuerto[j].id){
            this.materialesHuerto[j].tengo = materials[i].count;
            break;
          }
        }
      }
      this.dataSourceMaterialesHuerto = new MatTableDataSource(this.materialesHuerto);
      this.dataSourceMaterialesHuerto.sort = this.sort1;
    })
  }

  getMaterialesHuertoPrices(){
    // Saco los ids de los materiales separados por comas
    this.idsHuerto = this.materialesHuerto.map(m => m.id).join(',');

    //consulto precios en el bazar
    this.homesteadService.getCommercePrices(this.idsHuerto).subscribe((prices: any) => {
      for(let j = 0; j < this.materialesHuerto.length; j++){
        for(let i = 0; i < prices.length; i++){
          if (prices[i].id == this.materialesHuerto[j].id){
            this.materialesHuerto[j].precioTpCompra = prices[i].buys.unit_price;
            this.materialesHuerto[j].precioTpVenta = prices[i].sells.unit_price;
            this.materialesHuerto[j].precioTpCompraS = this.getPriceSplit(this.materialesHuerto[j].precioTpCompra);
            this.materialesHuerto[j].precioTpVentaS = this.getPriceSplit(this.materialesHuerto[j].precioTpVenta);
            this.materialesHuerto[j].precioOrdenableTpCompra = this.padPrecio(this.materialesHuerto[j].precioTpCompraS);
            this.materialesHuerto[j].precioOrdenableTpVenta = this.padPrecio(this.materialesHuerto[j].precioTpVentaS);
            break;
          }
        }
      }
      this.dataSourceMaterialesHuerto = new MatTableDataSource(this.materialesHuerto);
      this.dataSourceMaterialesHuerto.sort = this.sort1;
    })
  }

  getPriceSplit(cantidad: number){
    // Le paso el numero y me devuelve una string en oro, plata, cobre
    // let sss = (""+cantidad).split('').map(Number); // array de numeros
    let sss = (""+cantidad).split(''); // array de char
    // console.log(sss)
    let cobre = "";
    let plata = "";
    let oro = "";
    let resFinal = "";

    if (sss.length === 1){
      cobre = sss[0] + "c"; // 1 cifra
      resFinal = cobre;
    }else if(sss.length === 2){
      cobre = sss[0] + sss[1] + "c"; // 2 cifras
      resFinal = cobre;
    }else if(sss.length === 3){ // 3 cifras
      cobre = sss[1] + sss[2] + "c";
      plata = sss[0] + "s";
      resFinal = plata + " " + cobre;
    }else if(sss.length === 4){ // 4 cifras
      cobre = sss[2] + sss[3] + "c";
      plata = sss[0] + sss[1] + "s";
      resFinal = plata + " " + cobre;
    }else if(sss.length > 4){ // >= 5 cifras
      cobre = sss[sss.length-2] + sss[sss.length-1] + "c";
      plata = sss[sss.length-4] + sss[sss.length-3] + "s";
      for (let i = (sss.length - 5); i >= 0; i--){
        oro = sss[i] + oro;
      }
      oro = oro + "g";
      resFinal = oro + " " + plata + " " + cobre;
    }
    // console.log(resFinal);
    return resFinal
  }

  padPrecio(precioStr: string | null | undefined): string {
    // convierte la cadena del precio en [5 dígitos]g [2 dígitos]s [2 dígitos]c. Si por ej. es 99g 8p 5c lo convierte en 00099g 08p 05c para ordenar bien
    if (!precioStr || typeof precioStr !== 'string') {
      // Si no hay precio, lo mandamos al fondo del ordenamiento
      return '00000g 00s 00c';
    }

    const oroMatch = precioStr.match(/(\d+)g/);
    const plataMatch = precioStr.match(/(\d+)s/);
    const cobreMatch = precioStr.match(/(\d+)c/);

    const g = oroMatch ? oroMatch[1].padStart(5, '0') : '00000';
    const s = plataMatch ? plataMatch[1].padStart(2, '0') : '00';
    const c = cobreMatch ? cobreMatch[1].padStart(2, '0') : '00';

    return `${g}g ${s}s ${c}c`;
  }

}
