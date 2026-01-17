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
    gw2bltc: "https://www.gw2bltc.com/es/item/68646-sobre-de-la-suerte-divino",
    precioTpCompra: 0,
    precioTpCompraS: "",
    precioTpVenta: 0,
    precioTpVentaS: ""
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
    gw2bltc: "https://www.gw2bltc.com/es/item/43319-trozo-de-zhaitamelo",
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
    gw2bltc: "https://www.gw2bltc.com/es/item/43320-jorcamelo",
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
    gw2bltc: "https://www.gw2bltc.com/es/item/36041-trozo-de-caramelo",
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
    gw2bltc: "https://www.gw2bltc.com/es/item/47909-barra-de-caramelo",
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
    gw2bltc: "https://www.gw2bltc.com/es/item/36038-saco-de-halloween",
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
    gw2bltc: "https://www.gw2bltc.com/es/item/86601-copo-de-nieve",
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
    gw2bltc: "https://www.gw2bltc.com/es/item/86627-diamante-de-nieve",
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
    this.diamanteDeNieve
  ];
  monedas: FestivalMonedas[] = [
    this.burbujaDeCachivaches,
    this.valeDelDestival
  ];
  lunar: FestivalDivisas[] = [
    this.sobreDeLaSuerteDivino
  ];
  sab: FestivalMonedas[] = [
    this.burbujaDeCachivaches
  ];
  dragonBash: FestivalDivisas[] = [
    this.zhaitamelo,
    this.jorcamelo
  ];
  fourWinds: FestivalMonedas[] = [
    this.valeDelDestival
  ];
  halloween: FestivalDivisas[] = [
    this.trozoDeCaramelo,
    this.barraDeCaramelo,
    this.sacoDeHalloween
  ];
  wintersday: FestivalDivisas[] = [
    this.copoDeNieve,
    this.diamanteDeNieve
  ];

  idsDivisas: string = "";
  idsMonedas: string = "";
  idsLunar: string = "";
  idsSab: string = "";
  idsDragonBash: string = "";
  idsFourWinds: string = "";
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
  // Tabla dragonBash
  displayedColumnsDragonBash: string[] = ['icon', 'tengo', 'nombre', 'precioTpCompraS', 'precioTpVentaS'];
  dataSourceDragonBash = new MatTableDataSource(this.dragonBash);
  // Tabla fourWinds
  displayedColumnsFourWinds: string[] = ['icon', 'tengo', 'nombre'];
  dataSourceFourWinds = new MatTableDataSource(this.fourWinds);
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

  getConsumiblesTengoWallet(){
    this.festivalService.getWallet().subscribe((wallet: any) => {
      this.valeDelDestival.tengo = wallet.find((o: { id: number; value: number}) => o.id === this.valeDelDestival.id)?.value ?? 0;
    })
  }

  getConsumiblesTengoBank(){
    this.festivalService.getMaterials().subscribe((bank: any) => {

      for (let i = 0; i < bank.length; i++){
        if (bank[i].id === this.zhaitamelo.id){
          this.zhaitamelo.tengo = bank[i].count;
        }
        if (bank[i].id === this.jorcamelo.id){
          this.jorcamelo.tengo = bank[i].count;
        }
        if (bank[i].id === this.trozoDeCaramelo.id){
          this.trozoDeCaramelo.tengo = bank[i].count;
        }
        if (bank[i].id === this.barraDeCaramelo.id){
          this.barraDeCaramelo.tengo = bank[i].count;
        }
        if (bank[i].id === this.copoDeNieve.id){
          this.copoDeNieve.tengo = bank[i].count;
        }
        if (bank[i].id === this.diamanteDeNieve.id){
          this.diamanteDeNieve.tengo = bank[i].count;
        }
      }

      this.actualizarTablas();

    })
  }

  getConsumiblesPrices(){
    // Saco los ids de cada festival separados por comas
    this.idsLunar = this.lunar.map(m => m.id).join(',');
    this.idsSab = this.sab.map(m => m.id).join(',');
    this.idsDragonBash = this.dragonBash.map(m => m.id).join(',');
    this.idsHalloween = this.halloween.map(m => m.id).join(',');
    this.idsWintersday = this.wintersday.map(m => m.id).join(',');
    // Junto todos los IDs en uno solo
    const allIdsArray: number[] =[
      ...this.lunar.map(m => m.id),
      ...this.sab.map(m => m.id),
      ...this.dragonBash.map(m => m.id),
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
        [this.diamanteDeNieve.id]: this.diamanteDeNieve
      };
      if (Array.isArray(prices)){
        prices.forEach(price => {
          const obj = idToObjetoMap[price.id];
          if (obj) {
            obj.precioTpCompra = price.buys.unit_price;
            obj.precioTpVenta = price.sells.unit_price;
            obj.precioTpCompraS = this.getPriceSplit(obj.precioTpCompra);
            obj.precioTpVentaS = this.getPriceSplit(obj.precioTpVenta);
          }
        });
      } else{
        console.error('Error festival component: prices no es un array', prices)
      }

      this.actualizarPrecios(this.dragonBash, this.zhaitamelo, this.jorcamelo);
      this.actualizarPrecios(this.halloween, this.trozoDeCaramelo, this.barraDeCaramelo);
      this.actualizarPrecios(this.wintersday, this.copoDeNieve, this.diamanteDeNieve);

      this.actualizarTablas();

    });
  }

  actualizarPrecios(lista: FestivalDivisas[], base: FestivalDivisas, productoFinal: FestivalDivisas) {

    // Calcula la diferencia de precio entre item x1 y x1000 para saber cual es mas barato para comprar/vender
    lista.forEach(item => {
      const baseCompra = base.precioTpCompra * 1000;
      const baseVenta = base.precioTpVenta * 1000 * 0.85;
      const finalCompra = productoFinal.precioTpCompra;
      const finalVenta = productoFinal.precioTpVenta * 0.85;

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
      if ((element.nombre === "Trozo de zhaitamelo") || (element.nombre === "Trozo de caramelo") || (element.nombre === "Copo de nieve")){
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
      if ((element.nombre === "Trozo de zhaitamelo") || (element.nombre === "Trozo de caramelo") || (element.nombre === "Copo de nieve")){
        return `Venta recomendada para 1000 por la derecha`;
      } else {
        return `Venta recomendada por la derecha`;
      }
    } else {
      return ``;
    }
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

  actualizarTablas(){
    this.dataSourceLunar = new MatTableDataSource(this.lunar);
    this.dataSourceSab = new MatTableDataSource(this.sab);
    this.dataSourceDragonBash = new MatTableDataSource(this.dragonBash);
    this.dataSourceFourWinds = new MatTableDataSource(this.fourWinds);
    this.dataSourceHalloween = new MatTableDataSource(this.halloween);
    this.dataSourceWintersday = new MatTableDataSource(this.wintersday);
  }

}
