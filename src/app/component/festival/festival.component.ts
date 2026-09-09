import { Component, OnInit } from '@angular/core';
import { FestivalService } from 'src/app/service/festival.service';
import { FestivalDivisas, FestivalMonedas } from './festival';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-festival',
  templateUrl: './festival.component.html',
  styleUrls: ['./festival.component.css']
})

export class FestivalComponent implements OnInit {
  sobreDeLaSuerteDivino: FestivalDivisas = {
    id: 68646,
    nombre: "Sobre de la suerte divino",
    // tengo: 0,
    icon: "https://wiki-es.guildwars2.com/images/b/b4/Sobre_de_la_suerte_divino.png",
    gw2bltc: "https://www.gw2bltc.com/es/item/68646-Sobre-de-la-suerte-divino",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: ""
  };
  cachivaches: FestivalMonedas = {
    id: 39752,
    nombre: "Cachivache",
    // tengo: 0,
    icon: "https://wiki-es.guildwars2.com/images/f/f9/Cachivache.png"
  };
  burbujaDeCachivaches: FestivalMonedas = {
    id: 41886,
    nombre: "Burbuja de cachivaches",
    // tengo: 0,
    icon: "https://wiki-es.guildwars2.com/images/7/71/Burbuja_de_cachivaches.png"
  };
  zhaitamelo: FestivalDivisas = {
    id: 43319,
    nombre: "Trozo de zhaitamelo",
    tengo: 0,
    icon: "https://wiki-es.guildwars2.com/images/4/43/Trozo_de_zhaitamelo.png",
    gw2bltc: "https://www.gw2bltc.com/es/item/43319-Trozo-de-zhaitamelo",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: ""
  };
  jorcamelo: FestivalDivisas = {
    id: 43320,
    nombre: "Jorcamelo",
    tengo: 0,
    icon: "https://wiki-es.guildwars2.com/images/6/62/Jorcamelo.png",
    gw2bltc: "https://www.gw2bltc.com/es/item/43320-Jorcamelo",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: ""
  };
  valeDelDestival: FestivalMonedas = {
    id: 50, // wallet
    nombre: "Vale del Festival",
    tengo: 0,
    icon: "https://wiki-es.guildwars2.com/images/b/b5/Vale_del_festival.png"
  };
  trozoDeCaramelo: FestivalDivisas = {
    id: 36041,
    nombre: "Trozo de caramelo",
    tengo: 0,
    icon: "https://wiki-es.guildwars2.com/images/6/60/Trozo_de_caramelo.png",
    gw2bltc: "https://www.gw2bltc.com/es/item/36041-Trozo-de-caramelo",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: ""
  };
  barraDeCaramelo: FestivalDivisas = {
    id: 47909,
    nombre: "Barra de caramelo",
    tengo: 0,
    icon: "https://wiki-es.guildwars2.com/images/c/c6/Barra_de_caramelo.png",
    gw2bltc: "https://www.gw2bltc.com/es/item/47909-Barra-de-caramelo",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: ""
  };
  sacoDeHalloween: FestivalDivisas = {
    id: 36038,
    nombre: "Saco de Halloween",
    // tengo: 0,
    icon: "https://wiki-es.guildwars2.com/images/c/cc/Saco_de_Halloween.png",
    gw2bltc: "https://www.gw2bltc.com/es/item/36038-Saco-de-halloween",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: ""
  };
  copoDeNieve: FestivalDivisas = {
    id: 86601,
    nombre: "Copo de nieve",
    tengo: 0,
    icon: "https://wiki-es.guildwars2.com/images/0/00/Copo_de_nieve.png",
    gw2bltc: "https://www.gw2bltc.com/es/item/86601-Copo-de-nieve",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: ""
  };
  diamanteDeNieve: FestivalDivisas = {
    id: 86627,
    nombre: "Diamante de nieve",
    tengo: 0,
    icon: "https://wiki-es.guildwars2.com/images/1/17/Diamante_de_nieve.png",
    gw2bltc: "https://www.gw2bltc.com/es/item/86627-Diamante-de-nieve",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: ""
  };
  farolDelComerciante: FestivalDivisas = {
    id: 106991,
    nombre: "Cofre de farol del comerciante",
    // tengo: 0,
    icon: "https://wiki.guildwars2.com/images/5/52/Lantern_Chest.png",
    gw2bltc: "https://www.gw2bltc.com/es/item/106991-Cofre-de-farol-del-comerciante",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: ""
  };
  afortunadoDelComerciante: FestivalDivisas = {
    id: 104195,
    nombre: "Cofre afortunado de comerciante",
    // tengo: 0,
    icon: "https://wiki.guildwars2.com/images/b/b4/Fortunate_Chest.png",
    gw2bltc: "https://www.gw2bltc.com/es/item/104195-Cofre-afortunado-de-comerciante",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: ""
  };
  supersacoDeBotin: FestivalDivisas = {
    id: 97982,
    nombre: "Supersaco de botín",
    // tengo: 0,
    icon: "https://wiki.guildwars2.com/images/4/4a/Super_Loot_Bag.png",
    gw2bltc: "https://www.gw2bltc.com/es/item/97982-Supersaco-de-botin",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: ""
  };
  superarcoiris: FestivalDivisas = {
    id: 108959,
    nombre: "Armario de armas de nube del superarcoíris",
    // tengo: 0,
    icon: "https://wiki.guildwars2.com/images/9/9b/Super_Rainbow_Cloud_Weapons_Locker.png",
    gw2bltc: "https://www.gw2bltc.com/es/item/108959-Armario-de-armas-de-nube-del-superarcoiris",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: ""
  };
  fulminagolemsDeComerciante: FestivalDivisas = {
    id: 104633,
    nombre: "Armario de armas fulminagólems de comerciante",
    // tengo: 0,
    icon: "https://wiki.guildwars2.com/images/0/09/Golem-Buster_Weapons_Locker.png",
    gw2bltc: "https://www.gw2bltc.com/es/item/104633-Armario-de-armas-fulminagolems-de-comerciante",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: ""
  };
  generacionDelComerciante: FestivalDivisas = {
    id: 99575,
    nombre: "Cofre de generación del comerciante",
    // tengo: 0,
    icon: "https://wiki.guildwars2.com/images/7/79/Generation_One_Chest.png",
    gw2bltc: "https://www.gw2bltc.com/es/item/99575-Cofre-de-generacion-del-comerciante",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: ""
  };
  cofreDelDragon: FestivalDivisas = {
    id: 43357,
    nombre: "Cofre del dragón",
    // tengo: 0,
    icon: "https://wiki-es.guildwars2.com/images/a/a6/Cofre_del_drag%C3%B3n.png",
    gw2bltc: "https://www.gw2bltc.com/es/item/43357-Cofre-del-dragon",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: ""
  };
  cuervoDelComerciante: FestivalDivisas = {
    id: 109815,
    nombre: "Cofre de cuervo sagrado del comerciante",
    // tengo: 0,
    icon: "https://wiki.guildwars2.com/images/7/78/Sacred_Raven%27s_Chest.png",
    gw2bltc: "https://www.gw2bltc.com/es/item/109815-Cofre-de-cuervo-sagrado-del-comerciante",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: ""
  };
  cristalDelComerciante: FestivalDivisas = {
    id: 104836,
    nombre: "Cofre de cristal sagrado del comerciante",
    // tengo: 0,
    icon: "https://wiki.guildwars2.com/images/7/73/Sacred_Crystal_Chest.png",
    gw2bltc: "https://www.gw2bltc.com/es/item/104836-Cofre-de-cristal-sagrado-del-comerciante",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: ""
  };
  destrozadragonesDelComerciante: FestivalDivisas = {
    id: 102002,
    nombre: "Cofre del Destrozadragones del comerciante",
    // tengo: 0,
    icon: "https://wiki.guildwars2.com/images/b/b7/Dragonrender_Chest.png",
    gw2bltc: "https://www.gw2bltc.com/es/item/102002-Cofre-del-Destrozadragones-del-comerciante",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: ""
  };
  huesoLeviatanDelComerciante: FestivalDivisas = {
    id: 109888,
    nombre: "Cofre de hueso de Leviatán del comerciante",
    // tengo: 0,
    icon: "https://wiki.guildwars2.com/images/d/d3/Leviathan_Bone_Chest.png",
    gw2bltc: "https://www.gw2bltc.com/es/item/109888-Cofre-de-hueso-de-Leviatan-del-comerciante",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: ""
  };
  arenosoDelComerciante: FestivalDivisas = {
    id: 105086,
    nombre: "Cofre arenoso del comerciante",
    // tengo: 0,
    icon: "https://wiki.guildwars2.com/images/f/f0/Sandswept_Chest.png",
    gw2bltc: "https://www.gw2bltc.com/es/item/105086-Cofre-arenoso-del-comerciante",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: ""
  };
  creadoAlSolDelComerciante: FestivalDivisas = {
    id: 102175,
    nombre: "Cofre creado al sol de comerciante",
    // tengo: 0,
    icon: "https://wiki.guildwars2.com/images/4/40/Watchwork_Chest.png",
    gw2bltc: "https://www.gw2bltc.com/es/item/102175-Cofre-creado-al-sol-de-comerciante",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: ""
  };
  carameloDelComerciante: FestivalDivisas = {
    id: 105376,
    nombre: "Cofre de núcleo de caramelo de comerciante",
    // tengo: 0,
    icon: "https://wiki.guildwars2.com/images/e/e8/Candy_Core_Chest.png",
    gw2bltc: "https://www.gw2bltc.com/es/item/105376-Cofre-de-nucleo-de-caramelo-de-comerciante",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: ""
  };
  maquinaMacabraDelComerciante: FestivalDivisas = {
    id: 103702,
    nombre: "Cofre de máquina macabra de comerciante",
    // tengo: 0,
    icon: "https://wiki.guildwars2.com/images/8/87/Grim_Machine_Chest.png",
    gw2bltc: "https://www.gw2bltc.com/es/item/103702-Cofre-de-maquina-macabra-de-comerciante",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: ""
  };
  regaloDelDiaInvernal: FestivalDivisas = {
    id: 77604,
    nombre: "Regalo del Día Invernal",
    // tengo: 0,
    icon: "https://wiki-es.guildwars2.com/images/7/76/Regalo_del_D%C3%ADa_Invernal.png",
    gw2bltc: "https://www.gw2bltc.com/es/item/77604-Regalo-del-Dia-Invernal",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: ""
  };
  pelucheDelComerciante: FestivalDivisas = {
    id: 106848,
    nombre: "Cofre de peluche de comerciante",
    // tengo: 0,
    icon: "https://wiki.guildwars2.com/images/3/31/Plush_Chest.png",
    gw2bltc: "https://www.gw2bltc.com/es/item/106848-Cofre-de-peluche-de-comerciante",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: ""
  };
  solsticioSagradoDelComerciante: FestivalDivisas = {
    id: 104132,
    nombre: "Cofre de solsticio sagrado de comerciante",
    // tengo: 0,
    icon: "https://wiki.guildwars2.com/images/1/10/Sacred_Solstice_Chest.png",
    gw2bltc: "https://www.gw2bltc.com/es/item/104132-Cofre-de-solsticio-sagrado-de-comerciante",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: ""
  };

  divisas: FestivalDivisas[] = [
    this.sobreDeLaSuerteDivino,
    this.zhaitamelo,
    this.jorcamelo,
    this.trozoDeCaramelo,
    this.barraDeCaramelo,
    this.sacoDeHalloween,
    this.copoDeNieve,
    this.diamanteDeNieve,
    this.farolDelComerciante,
    this.afortunadoDelComerciante,
    this.supersacoDeBotin,
    this.superarcoiris,
    this.fulminagolemsDeComerciante,
    this.generacionDelComerciante,
    this.cofreDelDragon,
    this.cuervoDelComerciante,
    this.cristalDelComerciante,
    this.destrozadragonesDelComerciante,
    this.huesoLeviatanDelComerciante,
    this.arenosoDelComerciante,
    this.creadoAlSolDelComerciante,
    this.carameloDelComerciante,
    this.maquinaMacabraDelComerciante,
    this.regaloDelDiaInvernal,
    this.pelucheDelComerciante,
    this.solsticioSagradoDelComerciante
  ];
  monedas: FestivalMonedas[] = [
    this.cachivaches,
    this.burbujaDeCachivaches,
    this.valeDelDestival
  ];
  lunar: FestivalDivisas[] = [
    this.sobreDeLaSuerteDivino,
    this.farolDelComerciante,
    this.afortunadoDelComerciante
  ];
  sab: FestivalMonedas[] = [
    this.cachivaches,
    this.burbujaDeCachivaches
  ];
  sabCofres: FestivalDivisas[] = [
    this.supersacoDeBotin,
    this.superarcoiris,
    this.fulminagolemsDeComerciante,
    this.generacionDelComerciante
  ];
  dragonBash: FestivalDivisas[] = [
    this.zhaitamelo,
    this.jorcamelo,
    this.cofreDelDragon,
    this.cuervoDelComerciante,
    this.cristalDelComerciante,
    this.destrozadragonesDelComerciante
  ];
  fourWinds: FestivalMonedas[] = [
    this.valeDelDestival
  ];
  fourWindsCofres: FestivalDivisas[] = [
    this.huesoLeviatanDelComerciante,
    this.arenosoDelComerciante,
    this.creadoAlSolDelComerciante
  ];
  halloween: FestivalDivisas[] = [
    this.trozoDeCaramelo,
    this.barraDeCaramelo,
    this.sacoDeHalloween,
    this.carameloDelComerciante,
    this.maquinaMacabraDelComerciante
  ];
  wintersday: FestivalDivisas[] = [
    this.copoDeNieve,
    this.diamanteDeNieve,
    this.regaloDelDiaInvernal,
    this.pelucheDelComerciante,
    this.solsticioSagradoDelComerciante
  ];

  idsDivisas: string = "";
  idsMonedas: string = "";
  idsLunar: string = "";
  idsSab: string = "";
  idsSabCofres: string = "";
  idsDragonBash: string = "";
  idsFourWinds: string = "";
  idsFourWindsCofres: string = "";
  idsHalloween: string = "";
  idsWintersday: string = "";

  // Tabla divisas
  displayedColumnsDivisas: string[] = ['icon', 'nombre', 'precioTpCompraS', 'precioTpVentaS'];
  dataSourceDivisas = new MatTableDataSource(this.divisas);
  // Tabla monedas
  displayedColumnsMonedas: string[] = ['icon', 'nombre'];
  dataSourceMonedas = new MatTableDataSource(this.monedas);
  // Tabla lunar
  displayedColumnsLunar: string[] = ['icon', 'nombre', 'precioTpCompraS', 'precioTpVentaS'];
  dataSourceLunar = new MatTableDataSource(this.lunar);
  // Tabla sab
  displayedColumnsSab: string[] = ['icon', 'nombre'];
  dataSourceSab = new MatTableDataSource(this.sab);
  // Tabla sabCofres
  displayedColumnsSabCofres: string[] = ['icon', 'nombre', 'precioTpCompraS', 'precioTpVentaS'];
  dataSourceSabCofres = new MatTableDataSource(this.sabCofres);
  // Tabla dragonBash
  displayedColumnsDragonBash: string[] = ['icon', 'tengo', 'nombre', 'precioTpCompraS', 'precioTpVentaS'];
  dataSourceDragonBash = new MatTableDataSource(this.dragonBash);
  // Tabla fourWinds
  displayedColumnsFourWinds: string[] = ['icon', 'tengo', 'nombre'];
  dataSourceFourWinds = new MatTableDataSource(this.fourWinds);
  // Tabla fourWindsCofres
  displayedColumnsFourWindsCofres: string[] = ['icon', 'nombre', 'precioTpCompraS', 'precioTpVentaS'];
  dataSourceFourWindsCofres = new MatTableDataSource(this.fourWindsCofres);
  // Tabla halloween
  displayedColumnsHalloween: string[] = ['icon', 'tengo', 'nombre', 'precioTpCompraS', 'precioTpVentaS'];
  dataSourceHalloween = new MatTableDataSource(this.halloween);
  // Tabla wintersday
  displayedColumnsWintersday: string[] = ['icon', 'tengo', 'nombre', 'precioTpCompraS', 'precioTpVentaS'];
  dataSourceWintersday = new MatTableDataSource(this.wintersday);

  constructor(private festivalService: FestivalService) { }

  ngOnInit(): void {
    this.getConsumiblesTengoWallet();
    this.getConsumiblesTengoBank();
    this.getConsumiblesPrices();
  }

  getConsumiblesTengoWallet() {
    this.festivalService.getWallet().subscribe((wallet: any) => {
      this.valeDelDestival.tengo = wallet.find((o: { id: number; value: number }) => o.id === this.valeDelDestival.id)?.value ?? 0;
    })
  }

  getConsumiblesTengoBank() {
    this.festivalService.getMaterials().subscribe((bank: any) => {

      for (let i = 0; i < bank.length; i++) {
        if (bank[i].id === this.zhaitamelo.id) {
          this.zhaitamelo.tengo = bank[i].count;
        }
        if (bank[i].id === this.jorcamelo.id) {
          this.jorcamelo.tengo = bank[i].count;
        }
        if (bank[i].id === this.trozoDeCaramelo.id) {
          this.trozoDeCaramelo.tengo = bank[i].count;
        }
        if (bank[i].id === this.barraDeCaramelo.id) {
          this.barraDeCaramelo.tengo = bank[i].count;
        }
        if (bank[i].id === this.copoDeNieve.id) {
          this.copoDeNieve.tengo = bank[i].count;
        }
        if (bank[i].id === this.diamanteDeNieve.id) {
          this.diamanteDeNieve.tengo = bank[i].count;
        }
      }

      this.actualizarTablas();

    })
  }

  getConsumiblesPrices() {
    // Saco los ids de cada festival separados por comas
    this.idsLunar = this.lunar.map(m => m.id).join(',');
    this.idsSabCofres = this.sabCofres.map(m => m.id).join(',');
    this.idsDragonBash = this.dragonBash.map(m => m.id).join(',');
    this.idsFourWindsCofres = this.fourWindsCofres.map(m => m.id).join(',');
    this.idsHalloween = this.halloween.map(m => m.id).join(',');
    this.idsWintersday = this.wintersday.map(m => m.id).join(',');
    // Junto todos los IDs en uno solo
    const allIdsArray: number[] = [
      ...this.lunar.map(m => m.id),
      ...this.sabCofres.map(m => m.id),
      ...this.dragonBash.map(m => m.id),
      ...this.fourWindsCofres.map(m => m.id),
      ...this.halloween.map(m => m.id),
      ...this.wintersday.map(m => m.id)
    ];
    const uniqueIds = [...new Set(allIdsArray)]; // elimino duplicados
    const allIds = uniqueIds.join(','); // y separo por comas

    // Consulto precios en el bazar
    this.festivalService.getCommercePrices(allIds).subscribe((prices: any) => {
      // Creo un mapa para acceder rapido a cada objeto por id
      const idToObjetoMap: { [key: number]: FestivalDivisas } = {
        [this.sobreDeLaSuerteDivino.id]: this.sobreDeLaSuerteDivino,
        [this.zhaitamelo.id]: this.zhaitamelo,
        [this.jorcamelo.id]: this.jorcamelo,
        [this.trozoDeCaramelo.id]: this.trozoDeCaramelo,
        [this.barraDeCaramelo.id]: this.barraDeCaramelo,
        [this.sacoDeHalloween.id]: this.sacoDeHalloween,
        [this.copoDeNieve.id]: this.copoDeNieve,
        [this.diamanteDeNieve.id]: this.diamanteDeNieve,
        [this.farolDelComerciante.id]: this.farolDelComerciante,
        [this.afortunadoDelComerciante.id]: this.afortunadoDelComerciante,
        [this.supersacoDeBotin.id]: this.supersacoDeBotin,
        [this.superarcoiris.id]: this.superarcoiris,
        [this.fulminagolemsDeComerciante.id]: this.fulminagolemsDeComerciante,
        [this.generacionDelComerciante.id]: this.generacionDelComerciante,
        [this.cofreDelDragon.id]: this.cofreDelDragon,
        [this.cuervoDelComerciante.id]: this.cuervoDelComerciante,
        [this.cristalDelComerciante.id]: this.cristalDelComerciante,
        [this.destrozadragonesDelComerciante.id]: this.destrozadragonesDelComerciante,
        [this.huesoLeviatanDelComerciante.id]: this.huesoLeviatanDelComerciante,
        [this.arenosoDelComerciante.id]: this.arenosoDelComerciante,
        [this.creadoAlSolDelComerciante.id]: this.creadoAlSolDelComerciante,
        [this.carameloDelComerciante.id]: this.carameloDelComerciante,
        [this.maquinaMacabraDelComerciante.id]: this.maquinaMacabraDelComerciante,
        [this.regaloDelDiaInvernal.id]: this.regaloDelDiaInvernal,
        [this.pelucheDelComerciante.id]: this.pelucheDelComerciante,
        [this.solsticioSagradoDelComerciante.id]: this.solsticioSagradoDelComerciante
      };
      if (Array.isArray(prices)) {
        prices.forEach(price => {
          const obj = idToObjetoMap[price.id];
          if (obj) {
            obj.precioTpCompra = price.buys.unit_price;
            obj.precioTpVenta = price.sells.unit_price;
            obj.precioTpCompraS = this.getPriceSplit(obj.precioTpCompra);
            obj.precioTpVentaS = this.getPriceSplit(obj.precioTpVenta);
          }
        });
      } else {
        console.error('Error festival component: prices no es un array', prices)
      }

      this.actualizarPrecios(this.dragonBash, this.zhaitamelo, this.jorcamelo);
      this.actualizarPrecios(this.halloween, this.trozoDeCaramelo, this.barraDeCaramelo);
      this.actualizarPrecios(this.wintersday, this.copoDeNieve, this.diamanteDeNieve);

      this.actualizarTablas();

    });
  }

  actualizarPrecios(lista: FestivalDivisas[], base: FestivalDivisas, productoFinal: FestivalDivisas) {

    // Calcula la diferencia de precio entre item x1 y x1000 para saber cual es mas barato para comprar/vender teniendo en cuenta el impuesto del bazar.
    const impuestoBazar = 15 / 100; // 15% de impuesto en el bazar
    lista.forEach(item => {
      const baseCompra = base.precioTpCompra * 1000;
      const baseVenta = base.precioTpVenta * 1000 * (1 - impuestoBazar);
      const finalCompra = productoFinal.precioTpCompra;
      const finalVenta = productoFinal.precioTpVenta * (1 - impuestoBazar);

      if (item.id === base.id) {
        item.isBarataCompra = baseCompra <= finalCompra;
        item.isBarataVenta = baseVenta > finalVenta;
      } else if (item.id === productoFinal.id) {
        item.isBarataCompra = baseCompra > finalCompra;
        item.isBarataVenta = baseVenta <= finalVenta;
      } else {
        item.isBarataCompra = false;
        item.isBarataVenta = false;
      }

      // console.log(item.nombre, "Compra:", item.isBarataCompra);
      // console.log(item.nombre, "Venta:", item.isBarataVenta);
    });
  }

  getTooltipTextCompra(element: FestivalDivisas): string {
    if (element.isBarataCompra) {
      if ((element.nombre === "Trozo de zhaitamelo") || (element.nombre === "Trozo de caramelo") || (element.nombre === "Copo de nieve")) {
        return `Compra recomendada para 1000 por la izquierda`;
      } else {
        return `Compra recomendada por la izquierda`;
      }
    } else {
      return ``;
    }
  }

  getTooltipTextVenta(element: FestivalDivisas): string {
    if (element.isBarataVenta) {
      if ((element.nombre === "Trozo de zhaitamelo") || (element.nombre === "Trozo de caramelo") || (element.nombre === "Copo de nieve")) {
        return `Venta recomendada para 1000 por la derecha`;
      } else {
        return `Venta recomendada por la derecha`;
      }
    } else {
      return ``;
    }
  }

  getPriceSplit(cantidad: number) {
    // Le paso el numero y me devuelve una string en oro, plata, cobre
    // let sss = (""+cantidad).split('').map(Number); // array de numeros
    let sss = ("" + cantidad).split(''); // array de char
    // console.log(sss)
    let cobre = "";
    let plata = "";
    let oro = "";
    let resFinal = "";

    if (sss.length === 1) {
      cobre = sss[0] + "c"; // 1 cifra
      resFinal = cobre;
    } else if (sss.length === 2) {
      cobre = sss[0] + sss[1] + "c"; // 2 cifras
      resFinal = cobre;
    } else if (sss.length === 3) { // 3 cifras
      cobre = sss[1] + sss[2] + "c";
      plata = sss[0] + "s";
      resFinal = plata + " " + cobre;
    } else if (sss.length === 4) { // 4 cifras
      cobre = sss[2] + sss[3] + "c";
      plata = sss[0] + sss[1] + "s";
      resFinal = plata + " " + cobre;
    } else if (sss.length > 4) { // >= 5 cifras
      cobre = sss[sss.length - 2] + sss[sss.length - 1] + "c";
      plata = sss[sss.length - 4] + sss[sss.length - 3] + "s";
      for (let i = (sss.length - 5); i >= 0; i--) {
        oro = sss[i] + oro;
      }
      oro = oro + "g";
      resFinal = oro + " " + plata + " " + cobre;
    }
    // console.log(resFinal);
    return resFinal
  }

  actualizarTablas() {
    this.dataSourceLunar = new MatTableDataSource(this.lunar);
    this.dataSourceSab = new MatTableDataSource(this.sab);
    this.dataSourceSabCofres = new MatTableDataSource(this.sabCofres);
    this.dataSourceDragonBash = new MatTableDataSource(this.dragonBash);
    this.dataSourceFourWinds = new MatTableDataSource(this.fourWinds);
    this.dataSourceFourWindsCofres = new MatTableDataSource(this.fourWindsCofres);
    this.dataSourceHalloween = new MatTableDataSource(this.halloween);
    this.dataSourceWintersday = new MatTableDataSource(this.wintersday);
  }

}
