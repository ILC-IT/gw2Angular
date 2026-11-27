import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { HomesteadService } from "../../service/homestead.service";
import { Huerto, glyphs, GlifosTP, GLIFO, ItemConPrecios } from "./homestead";
import { CommercePrice } from "../../component/legendary/legendary";
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroService } from 'src/app/service/hero.service';
import { LegendaryService } from 'src/app/service/legendary.service';

@Component({
  selector: 'app-homestead',
  templateUrl: './homestead.component.html',
  styleUrls: ['./homestead.component.css']
})

export class HomesteadComponent implements OnInit, AfterViewInit {

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
  calabazaDulce: Huerto = {
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
  hojasDeEstragon: Huerto = {
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
  hojaDeTomillo: Huerto = {
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
  nabo: Huerto = {
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
  vainaDeVainilla: Huerto = {
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
  boniato: Huerto = {
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
  calabacin: Huerto = {
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
  hojaDeCilantroCultivado: Huerto = {
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
  clavoCultivado: Huerto = {
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
  hojaDeMentaCultivada: Huerto = {
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
  granoDePimientaCultivada: Huerto = {
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
  semillaDeSesamoCultivado: Huerto = {
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

  // Tabla huerto
  idsHuerto: string = "";
  displayedColumnsMaterialesHuerto: string[] = ['icon', 'tengo', 'nombre', 'precioTpCompraS', 'precioTpVentaS'];
  dataSourceMaterialesHuerto = new MatTableDataSource(this.materialesHuerto);
  @ViewChild("sort1", { static: false }) sort1!: MatSort;

  // Tabla glifos
  displayedColumnsGlyphs: string[] = ['category', 'nombre'];
  dataSourceGlyphs = GLIFO;

  // Tabla glifosTP
  isExpandedRow = (index: number, glifo: GlifosTP) => true;
  expandedGlyphs: GlifosTP[] = [];
  toggleGlyph(glifo: GlifosTP) {
    const index = this.expandedGlyphs.indexOf(glifo);

    if (index === -1) {
      this.expandedGlyphs.push(glifo);
    } else {
      this.expandedGlyphs.splice(index, 1);
    }
  }
  isGlyphExpanded(glifo: GlifosTP): boolean {
    return this.expandedGlyphs.includes(glifo);
  }
  idsGlyphs: string = "";
  displayedColumnsGlyphsTP: string[] = ['icon', 'nombre', 'description', 'enlace', 'precioTpCompraS', 'precioTpVentaS'];
  dataSourceGlyphsTP = new MatTableDataSource(glyphs);
  @ViewChild("sort2", { static: false }) sort2!: MatSort;

  // Para las rutas a las pestañas de homestead
  selectedTabIndex: number = 0;
  tabs: string[] = ['Precios Huerto', 'Glifos'];
  routeMap: { [key: string]: string } = {
    'precioshuerto': 'Precios Huerto',
    'glifos': 'Glifos'
  };
  /////////////////////////////////////////////////////////

  constructor(private homesteadService: HomesteadService, private heroService: HeroService, private legendaryService: LegendaryService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // Para hacer el routing a las pestañas de la tabla
    this.route.paramMap.subscribe(params => {
      const tab = params.get('tab');
      if (tab) {
        this.selectedTabIndex = this.getTabIndex(tab);
      }
    });

    this.getAccGlyphs();
    this.getInfoGlyphs();
    this.getMaterialesHuertoTengo();
    this.cargarTodosLosPrecios();
  }

  ngAfterViewInit() {
    this.sort1.disableClear = true; //para que solo haga ascendente o descendente
    this.dataSourceMaterialesHuerto.sort = this.sort1;
    this.sort2.disableClear = true; //para que solo haga ascendente o descendente
    this.dataSourceGlyphsTP.sort = this.sort2;
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

  getAccGlyphs() {
    this.homesteadService.getAccGlyphs().subscribe((glifo: any) => {
      for (let i = 0; i < glifo.length; i++) {
        if (glifo[i].includes("harvesting")) {
          GLIFO[0].category = "Cosecha";
          GLIFO[0].nombre = this.capitalizeFirstLetter(glifo[i].split("_harvesting")[0]);
        } else if (glifo[i].includes("logging")) {
          GLIFO[1].category = "Tala";
          GLIFO[1].nombre = this.capitalizeFirstLetter(glifo[i].split("_logging")[0]);
        } else if (glifo[i].includes("mining")) {
          GLIFO[2].category = "Minería";
          GLIFO[2].nombre = this.capitalizeFirstLetter(glifo[i].split("_mining")[0]);
        }
      }
      this.dataSourceGlyphs = GLIFO;
    })
  }

  capitalizeFirstLetter(cadena: string) {
    return cadena.charAt(0).toUpperCase() + cadena.slice(1);
  }

  getInfoGlyphs() {
    this.idsGlyphs = glyphs.map(g => g.id).join(',');

    this.heroService.getItems(this.idsGlyphs).subscribe((items: any[]) => {

      for (const glifo of glyphs) {

        const itemApi = items.find(item => item.id === glifo.id);

        if (itemApi) {
          // Actualizo el nombre si es diferente
          if (glifo.nombre !== itemApi.name) {
            glifo.nombre = itemApi.name;
          }
          glifo.icon = itemApi.icon;
          glifo.description = this.limpiarDescripcion(itemApi.description);
        }
        glifo.enlace = this.generarEnlace(glifo.id, glifo.nombre);
      }

      this.dataSourceGlyphsTP.data = [...glyphs];

    });
  }

  generarEnlace(id: number, nombre: string): string {
    const nombreLimpio = nombre
      .replace(/[()]/g, '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/ñ/gi, 'n')
      .trim()
      .replace(/\s+/g, '-');

    return `https://www.gw2bltc.com/es/item/${id}-${nombreLimpio}`;
  }

  getMaterialesHuertoTengo() {
    this.heroService.getMaterials().subscribe((materials: any) => {
      for (let j = 0; j < this.materialesHuerto.length; j++) {
        for (let i = 0; i < materials.length; i++) {
          if (materials[i].id === this.materialesHuerto[j].id) {
            this.materialesHuerto[j].tengo = materials[i].count;
            break;
          }
        }
      }

      this.dataSourceMaterialesHuerto.data = [...this.materialesHuerto];
    })
  }

  cargarTodosLosPrecios(): void {
    // Unir todos los IDs en una unica lista
    this.idsHuerto = this.materialesHuerto.map(m => m.id).join(',');
    this.idsGlyphs = glyphs.map(g => g.id).join(',');

    const todosLosIds = [
      this.idsHuerto,
      this.idsGlyphs
    ]
      .join(",")
      .split(",")
      .filter(id => id !== "");

    // Eliminar IDs duplicados
    const idsUnicos = [...new Set(todosLosIds)];

    this.legendaryService.getCommercePrices(idsUnicos.join(",")).subscribe({
      next: prices => {
        const pricesMap = new Map<number, CommercePrice>(
          prices.map(price => [price.id, price])
        );

        this.actualizarPrecios(this.materialesHuerto, pricesMap, this.dataSourceMaterialesHuerto);
        this.actualizarPrecios(glyphs, pricesMap, this.dataSourceGlyphsTP);
      },
      error: error => {
        console.error('Error al consultar los precios de heredad:', error);
      }
    });
  }

  actualizarPrecios<T extends ItemConPrecios>(
    elementos: T[],
    pricesMap: Map<number, CommercePrice>,
    dataSource: MatTableDataSource<T>
  ): void {

    elementos.forEach(elemento => {

      const price = pricesMap.get(elemento.id);

      if (!price) {
        this.limpiarPrecios(elemento);
        return;
      }

      // Precio compra
      elemento.precioTpCompra = price.buys.unit_price;
      elemento.precioTpCompraS = this.legendaryService.getPriceSplit(elemento.precioTpCompra);
      elemento.precioTpCompraSF = this.legendaryService.formatearValorOro(elemento.precioTpCompraS);
      elemento.precioOrdenableTpCompra = this.legendaryService.padPrecio(elemento.precioTpCompraS);

      // Precio venta
      elemento.precioTpVenta = price.sells.unit_price;
      elemento.precioTpVentaS = this.legendaryService.getPriceSplit(elemento.precioTpVenta);
      elemento.precioTpVentaSF = this.legendaryService.formatearValorOro(elemento.precioTpVentaS);
      elemento.precioOrdenableTpVenta = this.legendaryService.padPrecio(elemento.precioTpVentaS);

    });

    // Actualizar tabla
    dataSource.data = [...elementos];
  }

  limpiarPrecios(elemento: ItemConPrecios): void {
    elemento.precioTpCompra = 0;
    elemento.precioTpCompraS = '-';
    elemento.precioTpCompraSF = '-';
    elemento.precioOrdenableTpCompra = this.legendaryService.padPrecio('');

    elemento.precioTpVenta = 0;
    elemento.precioTpVentaS = '-';
    elemento.precioTpVentaSF = '-';
    elemento.precioOrdenableTpVenta = this.legendaryService.padPrecio('');
  }

  limpiarDescripcion(description: string): string {
    return description.replace(
      /^Haz doble clic para vincular este glifo a tu cuenta\.\s*/i,
      ''
    ).trim();
  }

}
