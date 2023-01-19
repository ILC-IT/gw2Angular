import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/service/hero.service';
import { legendarios, armaduraLigera, armaduraMedia, armaduraPesada, runa, sello, anilloRaid, t6, idsT6, vales, cantidadArmadura, cantidadRunas, cantidadSellos, valeId, trebolId, liId, ectoplasmaId, liArmadura, trebolArmadura, trebolRuna, trebolSello, trebolAnilloRaid, t6ArmaduraSelloRuna, ectoplasmaRuna, ectoplasmaSello, liAnilloRaid, t6AnilloRaid, obsidianaArmadura, obsidianaRuna, obsidianaSello, obsidianaId, otrosComponentes, lingoteAurico, placaReclamada, huevoChak, piezaAeronave, trozoAurilio, cristalLineaLey, montonCristalLuminoso, aspectoMistico, talismanBrillantez, talismanPotencia, talismanHabilidad, motaMistica, simboloControl, simboloMejora, simboloDolor, monedaMistica} from './legendary';

@Component({
  selector: 'app-legendary',
  templateUrl: './legendary.component.html',
  styleUrls: ['./legendary.component.css']
})
export class LegendaryComponent implements OnInit {

  //////////////////// T6 ////////////////////
  vialDeSangrePoderosa: t6 = {
    id: 24295,
    nombre: "Vial de sangre poderosa",
    cantidad: 0,
    tengo: 0,
    necesito: 0,
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: "",
    precioStackCompra: 0,
    precioStackCompraS: "",
    precioStackVenta: 0,
    precioStackVentaS: "",
    precioStackVenta90: 0,
    precioStackVentaS90: ""
  };
  huesoAntiguo: t6 = {
    id: 24358,
    nombre: "Hueso antiguo",
    cantidad: 0,
    tengo: 0,
    necesito: 0,
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: "",
    precioStackCompra: 0,
    precioStackCompraS: "",
    precioStackVenta: 0,
    precioStackVentaS: "",
    precioStackVenta90: 0,
    precioStackVentaS90: ""
  };
  garraDespiadada: t6 = {
    id: 24351,
    nombre: "Garra despiadada",
    cantidad: 0,
    tengo: 0,
    necesito: 0,
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: "",
    precioStackCompra: 0,
    precioStackCompraS: "",
    precioStackVenta: 0,
    precioStackVentaS: "",
    precioStackVenta90: 0,
    precioStackVentaS90: ""
  };
  montonDePolvoCristalino: t6 = {
    id: 24277,
    nombre: "Monton de polvo cristalino",
    cantidad: 0,
    tengo: 0,
    necesito: 0,
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: "",
    precioStackCompra: 0,
    precioStackCompraS: "",
    precioStackVenta: 0,
    precioStackVentaS: "",
    precioStackVenta90: 0,
    precioStackVentaS90: ""
  };
  colmilloFeroz: t6 = {
    id: 24357,
    nombre: "Colmillo feroz",
    cantidad: 0,
    tengo: 0,
    necesito: 0,
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: "",
    precioStackCompra: 0,
    precioStackCompraS: "",
    precioStackVenta: 0,
    precioStackVentaS: "",
    precioStackVenta90: 0,
    precioStackVentaS90: ""
  };
  escamaBlindada: t6 = {
    id: 24289,
    nombre: "Escama blindada",
    cantidad: 0,
    tengo: 0,
    necesito: 0,
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: "",
    precioStackCompra: 0,
    precioStackCompraS: "",
    precioStackVenta: 0,
    precioStackVentaS: "",
    precioStackVenta90: 0,
    precioStackVentaS90: ""
  };
  totemElaborado: t6 = {
    id: 24300,
    nombre: "Totem elaborado",
    cantidad: 0,
    tengo: 0,
    necesito: 0,
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: "",
    precioStackCompra: 0,
    precioStackCompraS: "",
    precioStackVenta: 0,
    precioStackVentaS: "",
    precioStackVenta90: 0,
    precioStackVentaS90: ""
  };
  vesiculaDeVenenoPoderoso: t6 = {
    id: 24283,
    nombre: "Vesicula de veneno poderoso",
    cantidad: 0,
    tengo: 0,
    necesito: 0,
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: "",
    precioStackCompra: 0,
    precioStackCompraS: "",
    precioStackVenta: 0,
    precioStackVentaS: "",
    precioStackVenta90: 0,
    precioStackVentaS90: ""
  };
  materialesT6: t6[] = [
    this.vialDeSangrePoderosa,
    this.huesoAntiguo,
    this.garraDespiadada,
    this.montonDePolvoCristalino,
    this.colmilloFeroz,
    this.escamaBlindada,
    this.totemElaborado,
    this.vesiculaDeVenenoPoderoso
  ];
  // tabla t6 compra-venta TP
  displayedColumnsT6: string[] = ['nombre', 'id', 'cantidad', 'tengo', 'necesito', 'precioTpCompraS', 'precioTpVentaS', 'precioStackCompraS', 'precioStackVentaS', 'precioStackVentaS90'];
  dataSourceT6 = this.materialesT6;

  //////////////////// Armaduras, sellos, runas ////////////////////
  armaduraLigeraCount: number = 0;
  armaduraMediaCount: number = 0;
  armaduraPesadaCount: number = 0;
  anilloRaidCount: number = 0;
  runaCount: number = 0;
  selloCount: number = 0;
  valeCount: number = 0;
  trebolCount: number = 0;
  liCount: number = 0;
  ectoplasmaCount: number = 0;
  obsidianaCount: number = 0;
  armaduraLigeraDatos: legendarios = {
    nombre: "Armadura Ligera",
    cantidad: cantidadArmadura,
    tengo: 0,
    totalVales: vales * cantidadArmadura,
    totalTreboles: trebolArmadura * cantidadArmadura,
    totalLi:  liArmadura * cantidadArmadura,
    totalT6: t6ArmaduraSelloRuna * cantidadArmadura,
    totalEctoplasma: 0,
    totalObsidiana: obsidianaArmadura * cantidadArmadura
  };
  armaduraMediaDatos: legendarios = {
    nombre: "Armadura Media",
    cantidad: cantidadArmadura,
    tengo: 0,
    totalVales: vales * cantidadArmadura,
    totalTreboles: trebolArmadura * cantidadArmadura,
    totalLi:  liArmadura * cantidadArmadura,
    totalT6: t6ArmaduraSelloRuna * cantidadArmadura,
    totalEctoplasma: 0,
    totalObsidiana: obsidianaArmadura * cantidadArmadura
  };
  armaduraPesadaDatos: legendarios = {
    nombre: "Armadura Pesada",
    cantidad: cantidadArmadura,
    tengo: 0,
    totalVales: vales * cantidadArmadura,
    totalTreboles: trebolArmadura * cantidadArmadura,
    totalLi:  liArmadura * cantidadArmadura,
    totalT6: t6ArmaduraSelloRuna * cantidadArmadura,
    totalEctoplasma: 0,
    totalObsidiana: obsidianaArmadura * cantidadArmadura
  };
  anilloRaidDatos: legendarios = {
    nombre: "Coalescencia anillo",
    cantidad: 1,
    tengo: 0,
    totalVales: 0,
    totalTreboles: trebolAnilloRaid,
    totalLi:  liAnilloRaid,
    totalT6: t6AnilloRaid,
    totalEctoplasma: 0,
    totalObsidiana: 0
  };
  runaDatos: legendarios = {
    nombre: "Runas",
    cantidad: cantidadRunas,
    tengo: 0,
    totalVales: vales * cantidadRunas,
    totalTreboles: trebolRuna * cantidadRunas,
    totalLi:  0,
    totalT6: t6ArmaduraSelloRuna * cantidadRunas,
    totalEctoplasma: ectoplasmaRuna * cantidadRunas,
    totalObsidiana: obsidianaRuna * cantidadRunas
  };
  selloDatos: legendarios = {
    nombre: "Sellos",
    cantidad: cantidadSellos,
    tengo: 0,
    totalVales: vales * cantidadSellos,
    totalTreboles: trebolSello * cantidadSellos,
    totalLi:  0,
    totalT6: t6ArmaduraSelloRuna * cantidadSellos,
    totalEctoplasma: ectoplasmaSello * cantidadSellos,
    totalObsidiana: obsidianaSello * cantidadSellos
  };
  totalesDatos: legendarios = {
    nombre: "Total",
    cantidad: this.armaduraLigeraDatos.cantidad + this.armaduraMediaDatos.cantidad + this.armaduraPesadaDatos.cantidad + this.anilloRaidDatos.cantidad + this.runaDatos.cantidad + this.selloDatos.cantidad,
    tengo: this.armaduraLigeraDatos.tengo + this.armaduraMediaDatos.tengo + this.armaduraPesadaDatos.tengo + this.anilloRaidDatos.tengo + this.runaDatos.tengo+ this.selloDatos.tengo,
    totalVales: this.armaduraLigeraDatos.totalVales + this.armaduraMediaDatos.totalVales + this.armaduraPesadaDatos.totalVales + this.anilloRaidDatos.totalVales + this.runaDatos.totalVales + this.selloDatos.totalVales,
    totalTreboles: this.armaduraLigeraDatos.totalTreboles + this.armaduraMediaDatos.totalTreboles + this.armaduraPesadaDatos.totalTreboles + this.anilloRaidDatos.totalTreboles + this.runaDatos.totalTreboles+ this.selloDatos.totalTreboles,
    totalLi: this.armaduraLigeraDatos.totalLi + this.armaduraMediaDatos.totalLi + this.armaduraPesadaDatos.totalLi + this.anilloRaidDatos.totalLi + this.runaDatos.totalLi + this.selloDatos.totalLi,
    totalT6: this.armaduraLigeraDatos.totalT6 + this.armaduraMediaDatos.totalT6 + this.armaduraPesadaDatos.totalT6 + this.anilloRaidDatos.totalT6 + this.runaDatos.totalT6 + this.selloDatos.totalT6,
    totalEctoplasma: this.armaduraLigeraDatos.totalEctoplasma + this.armaduraMediaDatos.totalEctoplasma + this.armaduraPesadaDatos.totalEctoplasma + this.anilloRaidDatos.totalEctoplasma + this.runaDatos.totalEctoplasma + this.selloDatos.totalEctoplasma,
    totalObsidiana: this.armaduraLigeraDatos.totalObsidiana + this.armaduraMediaDatos.totalObsidiana + this.armaduraPesadaDatos.totalObsidiana + this.runaDatos.totalObsidiana + this.selloDatos.totalObsidiana
  };
  tengoDatos: legendarios = {
    nombre: "Tengo",
    cantidad: 0,
    tengo: 0,
    totalVales: this.armaduraLigeraDatos.totalVales + this.armaduraMediaDatos.totalVales + this.armaduraPesadaDatos.totalVales + this.anilloRaidDatos.totalVales + this.runaDatos.totalVales + this.selloDatos.totalVales,
    totalTreboles: this.armaduraLigeraDatos.totalTreboles + this.armaduraMediaDatos.totalTreboles + this.armaduraPesadaDatos.totalTreboles + this.anilloRaidDatos.totalTreboles + this.runaDatos.totalTreboles+ this.selloDatos.totalTreboles,
    totalLi: this.armaduraLigeraDatos.totalLi + this.armaduraMediaDatos.totalLi + this.armaduraPesadaDatos.totalLi + this.anilloRaidDatos.totalLi + this.runaDatos.totalLi + this.selloDatos.totalLi,
    totalT6: this.armaduraLigeraDatos.totalT6 + this.armaduraMediaDatos.totalT6 + this.armaduraPesadaDatos.totalT6 + this.anilloRaidDatos.totalT6 + this.runaDatos.totalT6 + this.selloDatos.totalT6,
    totalEctoplasma: this.armaduraLigeraDatos.totalEctoplasma + this.armaduraMediaDatos.totalEctoplasma + this.armaduraPesadaDatos.totalEctoplasma + this.anilloRaidDatos.totalT6 + this.runaDatos.totalEctoplasma + this.selloDatos.totalEctoplasma,
    totalObsidiana: this.armaduraLigeraDatos.totalObsidiana + this.armaduraMediaDatos.totalObsidiana + this.armaduraPesadaDatos.totalObsidiana + this.runaDatos.totalObsidiana + this.selloDatos.totalObsidiana
  }
  gasteDatos: legendarios = {
    nombre: "Gasté",
    cantidad: 0,
    tengo: 0,
    totalVales: this.armaduraLigeraDatos.totalVales + this.armaduraMediaDatos.totalVales + this.armaduraPesadaDatos.totalVales + this.anilloRaidDatos.totalVales + this.runaDatos.totalVales+ this.selloDatos.totalVales,
    totalTreboles: this.armaduraLigeraDatos.totalTreboles + this.armaduraMediaDatos.totalTreboles + this.armaduraPesadaDatos.totalTreboles + this.anilloRaidDatos.totalTreboles + this.runaDatos.totalTreboles+ this.selloDatos.totalTreboles,
    totalLi: this.armaduraLigeraDatos.totalLi + this.armaduraMediaDatos.totalLi + this.armaduraPesadaDatos.totalLi + this.anilloRaidDatos.totalLi + this.runaDatos.totalLi + this.selloDatos.totalLi,
    totalT6: this.armaduraLigeraDatos.totalT6 + this.armaduraMediaDatos.totalT6 + this.armaduraPesadaDatos.totalT6 + this.anilloRaidDatos.totalT6 + this.runaDatos.totalT6+ this.selloDatos.totalT6,
    totalEctoplasma: this.armaduraLigeraDatos.totalEctoplasma + this.armaduraMediaDatos.totalEctoplasma + this.armaduraPesadaDatos.totalEctoplasma + this.anilloRaidDatos.totalEctoplasma + this.runaDatos.totalEctoplasma+ this.selloDatos.totalEctoplasma,
    totalObsidiana: this.armaduraLigeraDatos.totalObsidiana + this.armaduraMediaDatos.totalObsidiana + this.armaduraPesadaDatos.totalObsidiana + this.runaDatos.totalObsidiana + this.selloDatos.totalObsidiana
  }
  necesitoDatos: legendarios = {
    nombre: "Necesito",
    cantidad: 0,
    tengo: 0,
    totalVales: this.armaduraLigeraDatos.totalVales + this.armaduraMediaDatos.totalVales + this.armaduraPesadaDatos.totalVales + this.anilloRaidDatos.totalVales + this.runaDatos.totalVales + this.selloDatos.totalVales,
    totalTreboles: this.armaduraLigeraDatos.totalTreboles + this.armaduraMediaDatos.totalTreboles + this.armaduraPesadaDatos.totalTreboles + this.anilloRaidDatos.totalTreboles + this.runaDatos.totalTreboles+ this.selloDatos.totalTreboles,
    totalLi: this.armaduraLigeraDatos.totalLi + this.armaduraMediaDatos.totalLi + this.armaduraPesadaDatos.totalLi + this.anilloRaidDatos.totalLi + this.runaDatos.totalLi + this.selloDatos.totalLi,
    totalT6: this.armaduraLigeraDatos.totalT6 + this.armaduraMediaDatos.totalT6 + this.armaduraPesadaDatos.totalT6 + this.anilloRaidDatos.totalT6 + this.runaDatos.totalT6 + this.selloDatos.totalT6,
    totalEctoplasma: this.armaduraLigeraDatos.totalEctoplasma + this.armaduraMediaDatos.totalEctoplasma + this.armaduraPesadaDatos.totalEctoplasma + this.anilloRaidDatos.totalEctoplasma + this.runaDatos.totalEctoplasma + this.selloDatos.totalEctoplasma,
    totalObsidiana: this.armaduraLigeraDatos.totalObsidiana + this.armaduraMediaDatos.totalObsidiana + this.armaduraPesadaDatos.totalObsidiana + this.runaDatos.totalObsidiana + this.selloDatos.totalObsidiana
  }
  filaEnBLanco: legendarios = {
    nombre: "",
    cantidad: 0,
    tengo: 0,
    totalVales: 0,
    totalTreboles: 0,
    totalLi: 0,
    totalT6: 0,
    totalEctoplasma: 0,
    totalObsidiana: 0
  }
  legendariosDatos: legendarios[] = [
    this.armaduraLigeraDatos,
    this.armaduraMediaDatos,
    this.armaduraPesadaDatos,
    this.anilloRaidDatos,
    this.runaDatos,
    this.selloDatos,
    this.filaEnBLanco,
    this.totalesDatos,
    this.tengoDatos,
    this.gasteDatos,
    this.necesitoDatos
  ];
  // tablas legendarias y lo que piden
  displayedColumnsLegen: string[] = ['nombre', 'cantidad', 'tengo', 'totalVales', 'totalTreboles', 'totalLi', 'totalT6', 'totalEctoplasma', 'totalObsidiana'];
  dataSourceLegen = this.legendariosDatos;

  //////////////////// Otros componentes ////////////////////
  lingoteAurico: otrosComponentes = {
    nombre: "Lingote Áurico",
    id: lingoteAurico[0].id,
    cantidad: lingoteAurico[0].cantidad * (this.armaduraLigeraDatos.cantidad + this.armaduraMediaDatos.cantidad + this.armaduraPesadaDatos.cantidad),
    tengo: 0,
    gaste: 0,
    necesito: 0
  }
  placaReclamada: otrosComponentes = {
    nombre: "Placa reclamada",
    id: placaReclamada[0].id,
    cantidad: placaReclamada[0].cantidad * (this.armaduraLigeraDatos.cantidad + this.armaduraMediaDatos.cantidad + this.armaduraPesadaDatos.cantidad),
    tengo: 0,
    gaste: 0,
    necesito: 0
  }
  huevoChak: otrosComponentes = {
    nombre: "Huevo de Chak",
    id: huevoChak[0].id,
    cantidad: huevoChak[0].cantidad * (this.armaduraLigeraDatos.cantidad + this.armaduraMediaDatos.cantidad + this.armaduraPesadaDatos.cantidad),
    tengo: 0,
    gaste: 0,
    necesito: 0
  }
  trozoAurilio: otrosComponentes = {
    nombre: "Trozo de aurilio",
    id: trozoAurilio[0].idWallet,
    cantidad: trozoAurilio[0].cantidad * (this.armaduraLigeraDatos.cantidad + this.armaduraMediaDatos.cantidad + this.armaduraPesadaDatos.cantidad),
    tengo: 0,
    gaste: 0,
    necesito: 0
  }
  piezaAeronave: otrosComponentes = {
    nombre: "Pieza de aeronave",
    id: piezaAeronave[0].idWallet,
    cantidad: piezaAeronave[0].cantidad * (this.armaduraLigeraDatos.cantidad + this.armaduraMediaDatos.cantidad + this.armaduraPesadaDatos.cantidad),
    tengo: 0,
    gaste: 0,
    necesito: 0
  }
  cristalLineaLey: otrosComponentes = {
    nombre: "Cristal de línea ley",
    id: cristalLineaLey[0].idWallet,
    cantidad: cristalLineaLey[0].cantidad * (this.armaduraLigeraDatos.cantidad + this.armaduraMediaDatos.cantidad + this.armaduraPesadaDatos.cantidad),
    tengo: 0,
    gaste: 0,
    necesito: 0
  }
  montonCristalLuminoso: otrosComponentes = {
    nombre: "Montón de cristal luminoso",
    id: montonCristalLuminoso[0].id,
    cantidad: montonCristalLuminoso[0].cantidadRuna * this.runaDatos.cantidad + montonCristalLuminoso[0].cantidadSello * this.selloDatos.cantidad,
    tengo: 0,
    gaste: 0,
    necesito: 0
  }
  aspectoMistico: otrosComponentes = {
    nombre: "Aspecto místico",
    id: aspectoMistico[0].id,
    cantidad: aspectoMistico[0].cantidad * this.runaDatos.cantidad,
    tengo: 0,
    gaste: 0,
    necesito: 0
  }
  talismanBrillantez: otrosComponentes = {
    nombre: "Talismán de brillantez",
    id: talismanBrillantez[0].id,
    cantidad: talismanBrillantez[0].cantidad * this.runaDatos.cantidad,
    tengo: 0,
    gaste: 0,
    necesito: 0
  }
  talismanPotencia: otrosComponentes = {
    nombre: "Talismán de potencia",
    id: talismanPotencia[0].id,
    cantidad: talismanPotencia[0].cantidad * this.runaDatos.cantidad,
    tengo: 0,
    gaste: 0,
    necesito: 0
  }
  talismanHabilidad: otrosComponentes = {
    nombre: "Talismán de habilidad",
    id: talismanHabilidad[0].id,
    cantidad: talismanHabilidad[0].cantidad * this.runaDatos.cantidad,
    tengo: 0,
    gaste: 0,
    necesito: 0
  }
  motaMistica: otrosComponentes = {
    nombre: "Mota mística",
    id: motaMistica[0].id,
    cantidad: motaMistica[0].cantidad * this.selloDatos.cantidad,
    tengo: 0,
    gaste: 0,
    necesito: 0
  }
  simboloControl: otrosComponentes = {
    nombre: "Símbolo de control",
    id: simboloControl[0].id,
    cantidad: simboloControl[0].cantidad * this.selloDatos.cantidad,
    tengo: 0,
    gaste: 0,
    necesito: 0
  }
  simboloMejora: otrosComponentes = {
    nombre: "Símbolo de mejora",
    id: simboloMejora[0].id,
    cantidad: simboloMejora[0].cantidad * this.selloDatos.cantidad,
    tengo: 0,
    gaste: 0,
    necesito: 0
  }
  simboloDolor: otrosComponentes = {
    nombre: "Símbolo de dolor",
    id: simboloDolor[0].id,
    cantidad: simboloDolor[0].cantidad * this.selloDatos.cantidad,
    tengo: 0,
    gaste: 0,
    necesito: 0
  }
  monedaMistica: otrosComponentes = {
    nombre: "Moneda Mística",
    id: monedaMistica,
    cantidad: 0,
    tengo: 0,
    gaste: 0,
    necesito: 0
  }
  filaEnBlancoOtros: otrosComponentes = {
    nombre: "",
    id: 0,
    cantidad: 0,
    tengo: 0,
    gaste: 0,
    necesito: 0
  }
  otros: otrosComponentes[] = [
    this.lingoteAurico,
    this.placaReclamada,
    this.huevoChak,
    this.trozoAurilio,
    this.piezaAeronave,
    this.cristalLineaLey,
    this.filaEnBlancoOtros,
    this.montonCristalLuminoso,
    // this.aspectoMistico,
    this.talismanBrillantez,
    this.talismanPotencia,
    this.talismanHabilidad,
    this.filaEnBlancoOtros,
    // this.motaMistica,
    this.simboloControl,
    this.simboloMejora,
    this.simboloDolor,
    this.filaEnBlancoOtros,
    this.monedaMistica
  ]
    // tabla otros componentes
  displayedColumnsOtros: string[] = ['nombre', 'id', 'cantidad', 'tengo', 'gaste', 'necesito'];
  dataSourceOtros = this.otros;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getT6Tengo(); //cuantos t6 tengo de cada tipo y otros tengo
    this.getLegendaryTengo(); //cuantas piezas de armadura, anillo, sellos, runas tengo
    this.getT6Prices(); //el precio del bazar de cada t6
  }

  getT6Tengo(){
    this.heroService.getMaterials().subscribe((materials: any) => {
      for (let i = 0; i < materials.length; i++){
        //t6
        if (materials[i].id === this.vialDeSangrePoderosa.id){
          this.vialDeSangrePoderosa.tengo = materials[i].count;
        }
        if (materials[i].id === this.huesoAntiguo.id){
          this.huesoAntiguo.tengo = materials[i].count;
        }
        if (materials[i].id === this.garraDespiadada.id){
          this.garraDespiadada.tengo = materials[i].count;
        }
        if (materials[i].id === this.montonDePolvoCristalino.id){
          this.montonDePolvoCristalino.tengo = materials[i].count;
        }
        if (materials[i].id === this.colmilloFeroz.id){
          this.colmilloFeroz.tengo = materials[i].count;
        }
        if (materials[i].id === this.escamaBlindada.id){
          this.escamaBlindada.tengo = materials[i].count;
        }
        if (materials[i].id === this.totemElaborado.id){
          this.totemElaborado.tengo = materials[i].count;
        }
        if (materials[i].id === this.vesiculaDeVenenoPoderoso.id){
          this.vesiculaDeVenenoPoderoso.tengo = materials[i].count;
        }
        //otros
        if (materials[i].id === lingoteAurico[0].id){
          this.lingoteAurico.tengo = materials[i].count;
        }
        if (materials[i].id === placaReclamada[0].id){
          this.placaReclamada.tengo = materials[i].count;
        }
        if (materials[i].id === huevoChak[0].id){
          this.huevoChak.tengo = materials[i].count;
        }
        if (materials[i].id === trozoAurilio[0].id){
          this.trozoAurilio.tengo = materials[i].count;
        }
        if (materials[i].id === piezaAeronave[0].id){
          this.piezaAeronave.tengo = materials[i].count;
        }
        if (materials[i].id === cristalLineaLey[0].id){
          this.cristalLineaLey.tengo = materials[i].count;
        }
        if (materials[i].id === montonCristalLuminoso[0].id){
          this.montonCristalLuminoso.tengo = materials[i].count;
        }
        if (materials[i].id === aspectoMistico[0].id){
          this.aspectoMistico.tengo = materials[i].count;
        }
        if (materials[i].id === talismanBrillantez[0].id){
          this.talismanBrillantez.tengo = materials[i].count;
        }
        if (materials[i].id === talismanPotencia[0].id){
          this.talismanPotencia.tengo = materials[i].count;
        }
        if (materials[i].id === talismanHabilidad[0].id){
          this.talismanHabilidad.tengo = materials[i].count;
        }
        if (materials[i].id === motaMistica[0].id){
          this.motaMistica.tengo = materials[i].count;
        }
        if (materials[i].id === simboloControl[0].id){
          this.simboloControl.tengo = materials[i].count;
        }
        if (materials[i].id === simboloMejora[0].id){
          this.simboloMejora.tengo = materials[i].count;
        }
        if (materials[i].id === simboloDolor[0].id){
          this.simboloDolor.tengo = materials[i].count;
        }
        if (materials[i].id === monedaMistica){
          this.monedaMistica.tengo = materials[i].count;
        }
      }
      //Actualizo totales t6 para armaduras, anillo, runas y sellos
      this.vialDeSangrePoderosa.cantidad = this.totalesDatos.totalT6;
      this.huesoAntiguo.cantidad = this.totalesDatos.totalT6;
      this.garraDespiadada.cantidad = this.totalesDatos.totalT6;
      this.montonDePolvoCristalino.cantidad = this.totalesDatos.totalT6;
      this.colmilloFeroz.cantidad = this.totalesDatos.totalT6;
      this.escamaBlindada.cantidad = this.totalesDatos.totalT6;
      this.totemElaborado.cantidad = this.totalesDatos.totalT6;
      this.vesiculaDeVenenoPoderoso.cantidad = this.totalesDatos.totalT6;
    })
  }

  getLegendaryTengo(){
    this.heroService.getLegendaryArmory().subscribe((legendary: any) => {
      for (let i = 0; i < legendary.length; i++){
        for (let j = 0; j < armaduraLigera[0].id.length; j++){
          if (legendary[i].id === armaduraLigera[0].id[j]){
            this.armaduraLigeraCount++;
          }
        }
        for (let j = 0; j < armaduraMedia[0].id.length; j++){
          if (legendary[i].id === armaduraMedia[0].id[j]){
            this.armaduraMediaCount++;
          }
        }
        for (let j = 0; j < armaduraPesada[0].id.length; j++){
          if (legendary[i].id === armaduraPesada[0].id[j]){
            this.armaduraPesadaCount++;
          }
        }
        if (legendary[i].id === anilloRaid[0].id){
          this.anilloRaidCount++;
        }
        if (legendary[i].id === runa[0].id){
          this.runaCount = legendary[i].count;
        }
        if (legendary[i].id === sello[0].id){
          this.selloCount = legendary[i].count;
        }
      }

      //Actualizo datos con los valores encontrados
      this.armaduraLigeraDatos.tengo = this.armaduraLigeraCount;
      this.armaduraMediaDatos.tengo = this.armaduraMediaCount;
      this.armaduraPesadaDatos.tengo = this.armaduraPesadaCount;
      this.anilloRaidDatos.tengo = this.anilloRaidCount;
      this.runaDatos.tengo = this.runaCount;
      this.selloDatos.tengo = this.selloCount;
      this.totalesDatos.tengo = this.armaduraLigeraDatos.tengo + this.armaduraMediaDatos.tengo + this.armaduraPesadaDatos.tengo + this.anilloRaidDatos.tengo + this.runaDatos.tengo + this.selloDatos.tengo;
      this.tengoDatos.cantidad =  this.armaduraLigeraDatos.tengo + this.armaduraMediaDatos.tengo + this.armaduraPesadaDatos.tengo + this.anilloRaidDatos.tengo + this.runaDatos.tengo + this.selloDatos.tengo;

      this.getMatsTengo(); //cuantos vales, treboles, lis, ectoplasma tengo
    })
  }

  getMatsTengo(){
    this.heroService.getMaterials().subscribe((mats: any) => {
      for (let i = 0; i < mats.length; i++){
        if (mats[i].id === trebolId[0].id){
          this.tengoDatos.totalTreboles = mats[i].count;
          this.trebolCount++;
        }
        if (mats[i].id === ectoplasmaId[0].id){
          this.tengoDatos.totalEctoplasma = mats[i].count;
          this.ectoplasmaCount++;
        }
        if (mats[i].id === obsidianaId[0].id){
          this.tengoDatos.totalObsidiana = mats[i].count;
          this.obsidianaCount++;
        }
      }

      let minimo = 0;
      minimo = Math.min.apply(Math, this.materialesT6.map(function(o) { return o.tengo; }))
      // minimo = Math.min(...this.materialesT6.map(o => o.tengo));
      this.tengoDatos.totalT6 = minimo;

      this.heroService.getWallet().subscribe((wallet: any) => {
        this.valeCount = wallet.find((o: { id: number; value: number}) => o.id === valeId[0].idWallet).value;
        this.liCount = wallet.find((o: { id: number; value: number}) => o.id === liId[0].idWallet).value;
        this.tengoDatos.totalVales = this.valeCount;
        this.tengoDatos.totalLi = this.liCount;
        //otros
        this.trozoAurilio.tengo = wallet.find((o: { id: number; value: number}) => o.id === trozoAurilio[0].idWallet).value;
        this.piezaAeronave.tengo = wallet.find((o: { id: number; value: number}) => o.id === piezaAeronave[0].idWallet).value;
        this.cristalLineaLey.tengo = wallet.find((o: { id: number; value: number}) => o.id === cristalLineaLey[0].idWallet).value;

        this.getMatsGaste(); //cuantos vales, treboles, lis, ectoplasma gasté ya
        this.getOtrosGaste(); //cuantos otros gasté ya
      })
    });

  }

  getMatsGaste(){
    let valesGastados = vales * (this.armaduraLigeraCount + this.armaduraMediaCount + this.armaduraPesadaCount + this.selloCount + this.runaCount);
    let trebolesGastados = trebolArmadura * (this.armaduraLigeraCount + this.armaduraMediaCount + this.armaduraPesadaCount) + trebolAnilloRaid * this.anilloRaidCount + trebolRuna * this.runaCount + trebolArmadura * this.selloCount;
    let liGastados = liArmadura * (this.armaduraLigeraCount + this.armaduraMediaCount + this.armaduraPesadaCount) + liAnilloRaid * this.anilloRaidCount;
    let t6Gastados = t6ArmaduraSelloRuna * (this.armaduraLigeraCount + this.armaduraMediaCount + this.armaduraPesadaCount + this.selloCount + this.runaCount) + t6AnilloRaid * this.anilloRaidCount;
    let ectoplasmaGastados = ectoplasmaRuna * this.runaCount + ectoplasmaSello * this.selloCount;
    let obsidianaGastados = obsidianaArmadura * (this.armaduraLigeraCount + this.armaduraMediaCount + this.armaduraPesadaCount) + obsidianaRuna * this.runaCount + obsidianaSello * this.selloCount;
    //Actualizo datos con los valores encontrados
    this.gasteDatos.totalVales = valesGastados;
    this.gasteDatos.totalTreboles = trebolesGastados;
    this.gasteDatos.totalLi = liGastados;
    this.gasteDatos.totalT6 = t6Gastados;
    this.gasteDatos.totalEctoplasma = ectoplasmaGastados;
    this.gasteDatos.totalObsidiana = obsidianaGastados;

    this.getMatsNecesito();
  }

  getMatsNecesito(){
    this.necesitoDatos.cantidad = this.totalesDatos.cantidad - this.tengoDatos.cantidad;
    // this.necesitoDatos.tengo = this.tengoDatos.tengo - this.totalesDatos.tengo;
    this.necesitoDatos.totalVales = this.totalesDatos.totalVales - this.tengoDatos.totalVales - this.gasteDatos.totalVales;
    this.necesitoDatos.totalTreboles = this.totalesDatos.totalTreboles - this.tengoDatos.totalTreboles - this.gasteDatos.totalTreboles;
    this.necesitoDatos.totalLi = this.totalesDatos.totalLi - this.tengoDatos.totalLi - this.gasteDatos.totalLi;
    this.necesitoDatos.totalT6 = this.totalesDatos.totalT6 - this.tengoDatos.totalT6 - this.gasteDatos.totalT6;
    this.necesitoDatos.totalEctoplasma = this.totalesDatos.totalEctoplasma - this.tengoDatos.totalEctoplasma - this.gasteDatos.totalEctoplasma;
    this.necesitoDatos.totalObsidiana = this.totalesDatos.totalObsidiana - this.tengoDatos.totalObsidiana - this.gasteDatos.totalObsidiana;

    this.getNecesitoT6Prices();  //actualiza columna necesito de la tabla Precios T6
  }
  getOtrosGaste(){
    this.lingoteAurico.gaste = lingoteAurico[0].cantidad * (this.armaduraLigeraDatos.tengo + this.armaduraMediaDatos.tengo + this.armaduraPesadaDatos.tengo);
    this.placaReclamada.gaste = placaReclamada[0].cantidad * (this.armaduraLigeraDatos.tengo + this.armaduraMediaDatos.tengo + this.armaduraPesadaDatos.tengo);
    this.huevoChak.gaste = huevoChak[0].cantidad * (this.armaduraLigeraDatos.tengo + this.armaduraMediaDatos.tengo + this.armaduraPesadaDatos.tengo);
    this.trozoAurilio.gaste = trozoAurilio[0].cantidad * (this.armaduraLigeraDatos.tengo + this.armaduraMediaDatos.tengo + this.armaduraPesadaDatos.tengo);
    this.cristalLineaLey.gaste = cristalLineaLey[0].cantidad * (this.armaduraLigeraDatos.tengo + this.armaduraMediaDatos.tengo + this.armaduraPesadaDatos.tengo);
    this.piezaAeronave.gaste = piezaAeronave[0].cantidad * (this.armaduraLigeraDatos.tengo + this.armaduraMediaDatos.tengo + this.armaduraPesadaDatos.tengo);
 
    this.montonCristalLuminoso.gaste = montonCristalLuminoso[0].cantidadRuna * this.runaDatos.tengo + montonCristalLuminoso[0].cantidadSello * this.selloDatos.tengo - (montonCristalLuminoso[0].cantidadRuna * this.aspectoMistico.tengo + montonCristalLuminoso[0].cantidadSello * this.motaMistica.tengo);

    //this.aspectoMistico.gaste = aspectoMistico[0].cantidad * this.runaDatos.tengo;
    this.talismanBrillantez.gaste = talismanBrillantez[0].cantidad * this.runaDatos.tengo;
    this.talismanPotencia.gaste = talismanPotencia[0].cantidad * this.runaDatos.tengo;
    this.talismanHabilidad.gaste = talismanHabilidad[0].cantidad * this.runaDatos.tengo;

    //this.motaMistica.gaste = motaMistica[0].cantidad * this.selloDatos.tengo;
    this.simboloControl.gaste = simboloControl[0].cantidad * this.selloDatos.tengo;
    this.simboloMejora.gaste = simboloMejora[0].cantidad * this.selloDatos.tengo;
    this.simboloDolor.gaste = simboloDolor[0].cantidad * this.selloDatos.tengo;

    this.getOtrosNecesito();
  }

  getOtrosNecesito(){
    this.lingoteAurico.necesito = this.lingoteAurico.cantidad - this.lingoteAurico.tengo- this.lingoteAurico.gaste;
    this.placaReclamada.necesito = this.placaReclamada.cantidad - this.placaReclamada.tengo - this.placaReclamada.gaste;
    this.huevoChak.necesito = this.huevoChak.cantidad - this.huevoChak.tengo - this.huevoChak.gaste;
    this.trozoAurilio.necesito = this.trozoAurilio.cantidad - this.trozoAurilio.tengo - this.trozoAurilio.gaste;
    this.cristalLineaLey.necesito = this.cristalLineaLey.cantidad - this.cristalLineaLey.tengo - this.cristalLineaLey.gaste;
    this.piezaAeronave.necesito = this.piezaAeronave.cantidad - this.piezaAeronave.tengo - this.piezaAeronave.gaste;
    this.montonCristalLuminoso.necesito = this.montonCristalLuminoso.cantidad - this.montonCristalLuminoso.tengo - this.montonCristalLuminoso.gaste;
    //this.aspectoMistico.necesito = this.aspectoMistico.cantidad - this.aspectoMistico.tengo - this.aspectoMistico.gaste;
    this.talismanBrillantez.necesito = this.talismanBrillantez.cantidad - this.talismanBrillantez.tengo - this.talismanBrillantez.gaste - this.aspectoMistico.tengo * talismanBrillantez[0] .cantidad;
    this.talismanPotencia.necesito = this.talismanPotencia.cantidad - this.talismanPotencia.tengo - this.talismanPotencia.gaste - this.aspectoMistico.tengo * talismanPotencia[0] .cantidad;
    this.talismanHabilidad.necesito = this.talismanHabilidad.cantidad - this.talismanHabilidad.tengo - this.talismanHabilidad.gaste - this.aspectoMistico.tengo * talismanHabilidad[0] .cantidad;
    //this.motaMistica.necesito = this.motaMistica.cantidad - this.motaMistica.tengo - this.motaMistica.gaste;
    this.simboloControl.necesito = this.simboloControl.cantidad - this.simboloControl.tengo - this.simboloControl.gaste - this.motaMistica.tengo * simboloControl[0] .cantidad;
    this.simboloMejora.necesito = this.simboloMejora.cantidad - this.simboloMejora.tengo - this.motaMistica.tengo * simboloMejora[0] .cantidad;
    this.simboloDolor.necesito = this.simboloDolor.cantidad - this.simboloDolor.tengo - this.motaMistica.tengo * simboloDolor[0] .cantidad;
  }

  getT6Prices(){
    this.heroService.getCommercePrices(idsT6).subscribe((prices: any) => {
      for(let i = 0; i < prices.length; i++){
        if (prices[i].id == 24295){
          this.vialDeSangrePoderosa.precioTpCompra = prices[i].buys.unit_price;
          this.vialDeSangrePoderosa.precioTpVenta = prices[i].sells.unit_price;
          this.vialDeSangrePoderosa.precioStackCompra = prices[i].buys.unit_price * 250;
          this.vialDeSangrePoderosa.precioStackVenta = prices[i].sells.unit_price * 250;
          this.vialDeSangrePoderosa.precioStackVenta90 = prices[i].sells.unit_price * 250 * 0.9;
          this.vialDeSangrePoderosa.precioTpCompraS = this.getPriceSplit(this.vialDeSangrePoderosa.precioTpCompra);
          this.vialDeSangrePoderosa.precioTpVentaS = this.getPriceSplit(this.vialDeSangrePoderosa.precioTpVenta);
          this.vialDeSangrePoderosa.precioStackCompraS = this.getPriceSplit(this.vialDeSangrePoderosa.precioStackCompra);
          this.vialDeSangrePoderosa.precioStackVentaS = this.getPriceSplit(this.vialDeSangrePoderosa.precioStackVenta);
          this.vialDeSangrePoderosa.precioStackVentaS90 = this.getPriceSplit(this.vialDeSangrePoderosa.precioStackVenta90);
        }
        if (prices[i].id == 24358){
          this.huesoAntiguo.precioTpCompra = prices[i].buys.unit_price;
          this.huesoAntiguo.precioTpVenta = prices[i].sells.unit_price;
          this.huesoAntiguo.precioStackCompra = prices[i].buys.unit_price * 250;
          this.huesoAntiguo.precioStackVenta = prices[i].sells.unit_price * 250;
          this.huesoAntiguo.precioStackVenta90 = prices[i].sells.unit_price * 250 * 0.9;
          this.huesoAntiguo.precioTpCompraS = this.getPriceSplit(this.huesoAntiguo.precioTpCompra);
          this.huesoAntiguo.precioTpVentaS = this.getPriceSplit(this.huesoAntiguo.precioTpVenta);
          this.huesoAntiguo.precioStackCompraS = this.getPriceSplit(this.huesoAntiguo.precioStackCompra);
          this.huesoAntiguo.precioStackVentaS = this.getPriceSplit(this.huesoAntiguo.precioStackVenta);
          this.huesoAntiguo.precioStackVentaS90 = this.getPriceSplit(this.huesoAntiguo.precioStackVenta90);
        }
        if (prices[i].id == 24351){
          this.garraDespiadada.precioTpCompra = prices[i].buys.unit_price;
          this.garraDespiadada.precioTpVenta = prices[i].sells.unit_price;
          this.garraDespiadada.precioStackCompra = prices[i].buys.unit_price * 250;
          this.garraDespiadada.precioStackVenta = prices[i].sells.unit_price * 250;
          this.garraDespiadada.precioStackVenta90 = prices[i].sells.unit_price * 250 * 0.9;
          this.garraDespiadada.precioTpCompraS = this.getPriceSplit(this.garraDespiadada.precioTpCompra);
          this.garraDespiadada.precioTpVentaS = this.getPriceSplit(this.garraDespiadada.precioTpVenta);
          this.garraDespiadada.precioStackCompraS = this.getPriceSplit(this.garraDespiadada.precioStackCompra);
          this.garraDespiadada.precioStackVentaS = this.getPriceSplit(this.garraDespiadada.precioStackVenta);
          this.garraDespiadada.precioStackVentaS90 = this.getPriceSplit(this.garraDespiadada.precioStackVenta90);
        }
        if (prices[i].id == 24277){
          this.montonDePolvoCristalino.precioTpCompra = prices[i].buys.unit_price;
          this.montonDePolvoCristalino.precioTpVenta = prices[i].sells.unit_price;
          this.montonDePolvoCristalino.precioStackCompra = prices[i].buys.unit_price * 250;
          this.montonDePolvoCristalino.precioStackVenta = prices[i].sells.unit_price * 250;
          this.montonDePolvoCristalino.precioStackVenta90 = prices[i].sells.unit_price * 250 * 0.9;
          this.montonDePolvoCristalino.precioTpCompraS = this.getPriceSplit(this.montonDePolvoCristalino.precioTpCompra);
          this.montonDePolvoCristalino.precioTpVentaS = this.getPriceSplit(this.montonDePolvoCristalino.precioTpVenta);
          this.montonDePolvoCristalino.precioStackCompraS = this.getPriceSplit(this.montonDePolvoCristalino.precioStackCompra);
          this.montonDePolvoCristalino.precioStackVentaS = this.getPriceSplit(this.montonDePolvoCristalino.precioStackVenta);
          this.montonDePolvoCristalino.precioStackVentaS90 = this.getPriceSplit(this.montonDePolvoCristalino.precioStackVenta90);
        }
        if (prices[i].id == 24357){
          this.colmilloFeroz.precioTpCompra = prices[i].buys.unit_price;
          this.colmilloFeroz.precioTpVenta = prices[i].sells.unit_price;
          this.colmilloFeroz.precioStackCompra = prices[i].buys.unit_price * 250;
          this.colmilloFeroz.precioStackVenta = prices[i].sells.unit_price * 250;
          this.colmilloFeroz.precioStackVenta90 = prices[i].sells.unit_price * 250 * 0.9;
          this.colmilloFeroz.precioTpCompraS = this.getPriceSplit(this.colmilloFeroz.precioTpCompra);
          this.colmilloFeroz.precioTpVentaS = this.getPriceSplit(this.colmilloFeroz.precioTpVenta);
          this.colmilloFeroz.precioStackCompraS = this.getPriceSplit(this.colmilloFeroz.precioStackCompra);
          this.colmilloFeroz.precioStackVentaS = this.getPriceSplit(this.colmilloFeroz.precioStackVenta);
          this.colmilloFeroz.precioStackVentaS90 = this.getPriceSplit(this.colmilloFeroz.precioStackVenta90);
        }
        if (prices[i].id == 24289){
          this.escamaBlindada.precioTpCompra = prices[i].buys.unit_price;
          this.escamaBlindada.precioTpVenta = prices[i].sells.unit_price;
          this.escamaBlindada.precioStackCompra = prices[i].buys.unit_price * 250;
          this.escamaBlindada.precioStackVenta = prices[i].sells.unit_price * 250;
          this.escamaBlindada.precioStackVenta90 = prices[i].sells.unit_price * 250 * 0.9;
          this.escamaBlindada.precioTpCompraS = this.getPriceSplit(this.escamaBlindada.precioTpCompra);
          this.escamaBlindada.precioTpVentaS = this.getPriceSplit(this.escamaBlindada.precioTpVenta);
          this.escamaBlindada.precioStackCompraS = this.getPriceSplit(this.escamaBlindada.precioStackCompra);
          this.escamaBlindada.precioStackVentaS = this.getPriceSplit(this.escamaBlindada.precioStackVenta);
          this.escamaBlindada.precioStackVentaS90 = this.getPriceSplit(this.escamaBlindada.precioStackVenta90);
        }
        if (prices[i].id == 24300){
          this.totemElaborado.precioTpCompra = prices[i].buys.unit_price;
          this.totemElaborado.precioTpVenta = prices[i].sells.unit_price;
          this.totemElaborado.precioStackCompra = prices[i].buys.unit_price * 250;
          this.totemElaborado.precioStackVenta = prices[i].sells.unit_price * 250;
          this.totemElaborado.precioStackVenta90 = prices[i].sells.unit_price * 250 * 0.9;
          this.totemElaborado.precioTpCompraS = this.getPriceSplit(this.totemElaborado.precioTpCompra);
          this.totemElaborado.precioTpVentaS = this.getPriceSplit(this.totemElaborado.precioTpVenta);
          this.totemElaborado.precioStackCompraS = this.getPriceSplit(this.totemElaborado.precioStackCompra);
          this.totemElaborado.precioStackVentaS = this.getPriceSplit(this.totemElaborado.precioStackVenta);
          this.totemElaborado.precioStackVentaS90 = this.getPriceSplit(this.totemElaborado.precioStackVenta90);
        }
        if (prices[i].id == 24283){
          this.vesiculaDeVenenoPoderoso.precioTpCompra = prices[i].buys.unit_price;
          this.vesiculaDeVenenoPoderoso.precioTpVenta = prices[i].sells.unit_price;
          this.vesiculaDeVenenoPoderoso.precioStackCompra = prices[i].buys.unit_price * 250;
          this.vesiculaDeVenenoPoderoso.precioStackVenta = prices[i].sells.unit_price * 250;
          this.vesiculaDeVenenoPoderoso.precioStackVenta90 = prices[i].sells.unit_price * 250 * 0.9;
          this.vesiculaDeVenenoPoderoso.precioTpCompraS = this.getPriceSplit(this.vesiculaDeVenenoPoderoso.precioTpCompra);
          this.vesiculaDeVenenoPoderoso.precioTpVentaS = this.getPriceSplit(this.vesiculaDeVenenoPoderoso.precioTpVenta);
          this.vesiculaDeVenenoPoderoso.precioStackCompraS = this.getPriceSplit(this.vesiculaDeVenenoPoderoso.precioStackCompra);
          this.vesiculaDeVenenoPoderoso.precioStackVentaS = this.getPriceSplit(this.vesiculaDeVenenoPoderoso.precioStackVenta);
          this.vesiculaDeVenenoPoderoso.precioStackVentaS90 = this.getPriceSplit(this.vesiculaDeVenenoPoderoso.precioStackVenta90);
        }
      }
      // console.log(this.vialDeSangrePoderosa)
      // console.log(this.huesoAntiguo)
      // console.log(this.garraDespiadada)
      // console.log(this.montonDePolvoCristalino)
      // console.log(this.colmilloFeroz)
      // console.log(this.escamaBlindada)
      // console.log(this.totemElaborado)
      // console.log(this.vesiculaDeVenenoPoderoso)
      this.dataSourceT6 = this.materialesT6;

    })
  }

  getNecesitoT6Prices(){
    this.vialDeSangrePoderosa.necesito = this.totalesDatos.totalT6 - this.vialDeSangrePoderosa.tengo - this.gasteDatos.totalT6;
    this.huesoAntiguo.necesito = this.totalesDatos.totalT6 - this.huesoAntiguo.tengo - this.gasteDatos.totalT6;
    this.garraDespiadada.necesito = this.totalesDatos.totalT6 - this.garraDespiadada.tengo - this.gasteDatos.totalT6;
    this.montonDePolvoCristalino.necesito = this.totalesDatos.totalT6 - this.montonDePolvoCristalino.tengo - this.gasteDatos.totalT6;
    this.colmilloFeroz.necesito = this.totalesDatos.totalT6 - this.colmilloFeroz.tengo - this.gasteDatos.totalT6;
    this.escamaBlindada.necesito = this.totalesDatos.totalT6 - this.escamaBlindada.tengo - this.gasteDatos.totalT6;
    this.totemElaborado.necesito = this.totalesDatos.totalT6 - this.totemElaborado.tengo - this.gasteDatos.totalT6;
    this.vesiculaDeVenenoPoderoso.necesito = this.totalesDatos.totalT6 - this.vesiculaDeVenenoPoderoso.tengo - this.gasteDatos.totalT6;
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

  getTotalPrecioStackCompra() {
    // return this.dataSourceT6.map(t => t.precioStackCompra).reduce((acc, value) => acc + value, 0);
    return this.dataSourceT6.reduce((acc, value) => acc + value.precioStackCompra, 0);
  }

  getTotalPrecioStackCompraS() {
    // return this.dataSourceT6.map(t => t.precioStackCompra).reduce((acc, value) => acc + value, 0);
    return this.getPriceSplit(this.dataSourceT6.reduce((acc, value) => acc + value.precioStackCompra, 0));
  }

  getTotalPrecioStackVenta() {
    // return this.dataSourceT6.map(t => t.precioStackVenta).reduce((acc, value) => acc + value, 0);
    return this.dataSourceT6.reduce((acc, value) => acc + value.precioStackVenta, 0);
  }

  getTotalPrecioStackVentaS() {
    // return this.dataSourceT6.map(t => t.precioStackVenta).reduce((acc, value) => acc + value, 0);
    return this.getPriceSplit(this.dataSourceT6.reduce((acc, value) => acc + value.precioStackVenta, 0));
  }

  getTotalPrecioStackVenta90(){
    return this.dataSourceT6.reduce((acc, value) => acc + value.precioStackVenta90, 0);
  }

  getTotalPrecioStackVentaS90(){
    return this.getPriceSplit(this.dataSourceT6.reduce((acc, value) => acc + value.precioStackVenta90, 0));
  }

  getTotalTotalVales(){
    return this.dataSourceLegen.reduce((acc, value) => acc + value.totalVales, 0);
  }

  getTotalTotalTreboles(){
    return this.dataSourceLegen.reduce((acc, value) => acc + value.totalTreboles, 0);
  }

  getTotalTotalLi(){
    return this.dataSourceLegen.reduce((acc, value) => acc + value.totalLi, 0);
  }

  getTotalTotalT6(){
    return this.dataSourceLegen.reduce((acc, value) => acc + value.totalT6, 0);
  }

  getTotalTotalEctoplasma(){
    return this.dataSourceLegen.reduce((acc, value) => acc + value.totalEctoplasma, 0);
  }

}
