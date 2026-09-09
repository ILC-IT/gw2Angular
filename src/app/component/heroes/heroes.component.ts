import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { HeroService } from "../../service/hero.service";
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Router, ActivatedRoute } from '@angular/router';
import { Specs } from './specs';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';

interface Equipment {
  infusions?: number[] | string;
}

interface InventoryItem {
  id: number;
  count: number;
  binding?: string;
  infusions?: number[];
}

interface Bag {
  id: number;
  size: number;
  inventory: (InventoryItem | null)[];
}

interface Hero {
  name: string;
  equipment?: Equipment[];
  equipment_tabs?: {
    equipment?: Equipment[];
  }[];
  bags?: (Bag | null)[];
}

interface InfusionPersonaje {
  nombre: string;
  cantidad: number;
}

interface ContainerInfusion {
  ids: number[];
  name: string;
  name_es: string;
}

interface ContainerData {
  id: number;
  icon: string;
  name: string;
  name_es: string;
  options: ContainerInfusion[];
  method: string;
}

interface ContenedorInfo {
  id: number;
  nombre: string;
  nombreEs: string;
  cantidad: number;
  method: string;
  variantes: number;
  cantidadBanco: number;
  cantidadInvComp: number;
  personajes: {
    nombre: string;
    cantidad: number;
  }[];
}

interface InfusionAttribute {
  attribute: string;
  modifier: number;
}

interface MaterialInfo {
  id: number;
  nombre: string;
  cantidad: number;
}

interface InfusionMapData {
  id: number;
  cantidadTotal: number;
  cantidadBanco: number;
  cantidadInvComp: number;
  personajes: Map<string, number>;
  contenedores: Map<number, ContenedorInfo>;
  materiales: Map<number, MaterialInfo>;
}

interface InfusionVarianteGrupo {
  infusion: InfusionData;
  statNombre: string;
  laTengo: boolean;
}

interface InfusionGrupo {
  nombre: string;
  icon: string;
  agonyResistance?: number;
  agonyStatNombre?: string;
  contenedores: ContenedorInfo[];
  variantes: InfusionVarianteGrupo[];
}

interface ContainerDataView {
  id: number;
  nombre: string;
  icon: string;
  cantidadTotal: number;
  cantidadBanco: number;
  cantidadInvComp: number;
  personajes: InfusionPersonaje[];
}

interface InfusionData {
  id: number;
  nombre: string;
  icon: string;
  tipo: string;
  stat: InfusionAttribute[];
  description: string;
  personajesEnLosQueEsta: InfusionPersonaje[];
  cantidadTotal: number;
  cantidadBanco: number;
  cantidadInvComp: number;
  contenedores: ContenedorInfo[];
  materiales: MaterialInfo[];
  // Agrupacion de infusiones que representan la misma opcion
  esContenedor?: boolean;
  idsVariantes?: number[]
}

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit, AfterViewInit {

  heroes: any = [];
  heroesOptions: any[] = [];
  displayedColumns: string[] = ['name', 'race', 'profession', 'espec', 'crafting', 'robotJade', 'trophyProtocol', 'freeSpace', 'diasCumple'];
  dataSource!: MatTableDataSource<any>;
  heroesError = false;
  loading = true;
  loadingExtra = true;
  catalogoError = false;
  containersError = false;
  heroesTabReady = false;

  // Buscador de infusiones
  infusionsData: InfusionData[] = []; // Array para almacenar los datos de infusiones de la cuenta
  private infusionsDataSinAgrupar: InfusionData[] = [];
  infusionSearch = '';
  selectedInfusion: InfusionData | null = null;
  selectedHero = '';
  filteredInfusions: InfusionData[] = [];
  filteredAllInfusions: InfusionData[] = [];
  filteredAllInfusionGroups: InfusionGrupo[] = [];
  mostrarTodasLasInfusiones: boolean = false;
  mostrarTodosLosContenedores: boolean = false;
  infusionsCatalog: InfusionData[] = []; // Array para almacenar los datos de infusiones del juego
  infusionsCatalogMap = new Map<number, InfusionData>();
  allInfusionsData: InfusionData[] = [];
  containersCatalog: ContainerData[] = [];
  containersCatalogMap = new Map<number, ContainerData>();
  containersData: any[] = [];
  selectedStat: string = '';
  statOptions = [
    { value: 'Power', label: 'Potencia' },
    { value: 'Precision', label: 'Precisión' },
    { value: 'Toughness', label: 'Dureza' },
    { value: 'Vitality', label: 'Vitalidad' },
    { value: 'ConditionDamage', label: 'Daño de condición' },
    { value: 'ConditionDuration', label: 'Pericia' },
    { value: 'BoonDuration', label: 'Concentración' },
    { value: 'Healing', label: 'Curación' },
    { value: 'AgonyResistance', label: 'Resistencia a la Agonía' }
  ];
  containerSearch: string = '';
  filteredContainers: ContainerData[] = [];
  selectedContainer: ContainerData | null = null;
  allContainers: ContainerDataView[] = [];
  mostrarBotonArriba = false;
  actualizandoHeroes = false;
  ultimaActualizacionHeroes: Date | undefined;

  // Para las rutas a las pestañas de heroes
  selectedTabIndex: number = 0;
  tabs: string[] = ['Héroes Info', 'Infusiones'];
  routeMap: { [key: string]: string } = {
    'heroesinfo': 'Héroes Info',
    'infusiones': 'Infusiones'
  };

  constructor(private heroService: HeroService, private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  @ViewChild(MatSort)
  set matSort(sort: MatSort) {
    if (sort) {
      this.sort = sort;
      if (this.dataSource) {
        this.sort.disableClear = true;
        this.dataSource.sort = this.sort; // Para que solo haga ascendente o descendente
      }
    }
  }
  sort!: MatSort;

  ngAfterViewInit(): void {
    const appBody = document.querySelector('.app-body');
    const mobileContent = document.querySelector('.mobile-content');
    appBody?.addEventListener('scroll', () => {
      this.comprobarScroll();
    });
    mobileContent?.addEventListener('scroll', () => {
      this.comprobarScroll();
    });
  }

  comprobarScroll(): void {
    const appBody = document.querySelector('.app-body') as HTMLElement | null;
    const mobileContent = document.querySelector('.mobile-content') as HTMLElement | null;
    const scrollTop =
      appBody?.scrollTop ||
      mobileContent?.scrollTop ||
      0;
    this.mostrarBotonArriba = scrollTop > 300;
  }

  subirArriba(): void {
    const appBody = document.querySelector('.app-body') as HTMLElement | null;
    const mobileContent = document.querySelector('.mobile-content') as HTMLElement | null;
    appBody?.scrollTo({ top: 0, behavior: 'smooth' });
    mobileContent?.scrollTo({ top: 0, behavior: 'smooth' });
  }

  ngOnInit(): void {
    // Para hacer el routing a las pestañas de la tabla
    this.route.paramMap.subscribe(params => {
      const tab = params.get('tab');
      if (tab) {
        this.selectedTabIndex = this.getTabIndex(tab);
      }
    });
    this.loadContainersCatalog();
  }

  loadContainersCatalog(): void {
    // Funcion para cargar el archivo de contenedores de infusiones
    this.loading = true;
    this.loadingExtra = true;
    this.containersError = false;

    this.http
      .get<ContainerData[]>('assets/infus/containers.json')
      .subscribe((containers: ContainerData[]) => {
        this.containersCatalog = containers;
        this.containersCatalogMap.clear();
        containers.forEach((container: ContainerData) => {
          this.containersCatalogMap.set(
            container.id,
            container
          );
        });
        // Contenedores ordenados alfabeticamente
        this.filteredContainers = [...containers].sort(
          (a, b) => a.name_es.localeCompare(b.name_es, 'es', {
            sensitivity: 'base'
          })
        );
        this.containersError = false;
        console.log('Catalogo de contenedores cargado:', this.containersCatalog.length);
        // Ahora que esta cargado el catalogo de contenedores, se cargan las infus
        this.loadInfusionsCatalog();
      },
        (error) => {
          console.error('Error cargando el catalogo de contenedores:', error);
          this.loading = false;
          this.loadingExtra = false;
          this.containersError = true;
        }
      );
  }

  loadInfusionsCatalog(): void {
    // Funcion para cargar el archivo de infusiones y enriquecimientos sacados de api/items
    this.loading = true;
    this.loadingExtra = true;
    this.catalogoError = false;

    this.http
      .get<InfusionData[]>('assets/infus/infusions.json')
      .subscribe((infusions: InfusionData[]) => {
        this.infusionsCatalog = infusions;
        this.infusionsCatalogMap.clear();
        infusions.forEach((infusion: InfusionData) => {
          this.infusionsCatalogMap.set(
            infusion.id,
            infusion
          );
        });
        this.catalogoError = false;
        console.log('Catalogo de infusiones cargado:', this.infusionsCatalog.length);
        // Ahora que esta cargado el catalogo de infus, se cargan los personajes
        this.getHeroes();
      },
        (error) => {
          console.error('Error cargando el catalogo de infusiones:', error);
          this.loading = false;
          this.loadingExtra = false;
          this.catalogoError = true;
        }
      );
  }

  getHeroes(esActualizacion = false) {
    // Obtener todos los heroes y sus datos

    // Durante la carga inicial mostrar la barra de carga. Durante una actualizacion mantener la tabla visible
    if (!esActualizacion) {
      this.loading = true;
    }
    this.loadingExtra = true;
    this.heroesError = false;
    this.heroesTabReady = false;

    this.heroService.getHeroes().subscribe((heroes: any) => {

      this.heroes = heroes;
      this.heroesOptions = [...heroes].sort(
        (a, b) => a.name.localeCompare(b.name, 'es', {
          numeric: true,
          sensitivity: 'base'
        })
      );
      console.log('Heroes cargados:', this.heroes.length)

      // Datos que no necesitan peticiones HTTP
      this.addFreeSpace(this.heroes);
      this.addBirthday(this.heroes);
      this.addSpec(this.heroes);

      // Crear la tabla inmediatamente
      // Como las peticiones a la API pueden tardar mucho, se muestra la tabla aunque no este completa, 
      // y se va rellenando a medida que llegan los datos. Por eso no se espera a que terminen todas las 
      // peticiones para mostrar la tabla (se podria hacer un forkjoin pero tardaria mucho segun el numero de heroes)
      this.dataSource = new MatTableDataSource(this.heroes);

      this.loading = false;
      this.actualizandoHeroes = false;
      this.ultimaActualizacionHeroes = this.heroService.getUltimaActualizacionHeroes();

      // Datos que necesitan peticiones HTTP
      this.loadExtraInfo(this.heroes);
    },
      (error) => {
        console.error('Error obteniendo los heroes:', error);
        this.heroesError = true;
        this.loading = false;
        this.loadingExtra = false;
        this.actualizandoHeroes = false;
      });
  }

  addFreeSpace(tabla: any[]) {
    // Añado columna de espacio libre en el inventario a cada heroe
    for (let i = 0; i < tabla.length; i++) {
      let capacidadTotalBolsas = 0; // Suma de los tamaños de las bolsas equipadas
      let espacioOcupadoBolsas = 0; // Suma del espacio ocupado de todas las bolsas
      let espacioVacioBolsas = 0; // Suma del espacio sin ocupar en las bolsas
      // Busco bolsas de inventario con sus capacidades
      for (let j = 0; j < tabla[i].bags.filter(Boolean).length; j++) {
        capacidadTotalBolsas += tabla[i].bags[j].size;
        espacioOcupadoBolsas += tabla[i].bags[j].inventory.filter(Boolean).length;
        // array.filter(Boolean) es para no contar los valores null
        // console.log(tabla[i].name, capacidadTotalBolsas, espacioOcupadoBolsas)
      }
      espacioVacioBolsas = capacidadTotalBolsas - espacioOcupadoBolsas;
      tabla[i].freeSpace = espacioVacioBolsas;
    }
    return this.heroes = tabla;
  }

  addBirthday(tabla: any[]) {
    // Añado campo 'dias hasta siguiente cumpleaños' a los datos
    for (let i = 0; i < tabla.length; i++) {
      let cumple = tabla[i].created;
      const res = this.daysUntilBirthday(cumple);
      tabla[i].diasCumple = res.dias;
      tabla[i].numeroAnosCumple = res.numeroAnosCumple;
      // Hora de creacion en zona local del sistema (ajustada por DST automaticamente)
      try {
        const createdDate = new Date(cumple);
        tabla[i].horaCreacion = createdDate.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit', hour12: false });
        // Fecha local en formato DD-MM-YYYY
        const dd = String(createdDate.getDate()).padStart(2, '0');
        const months = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
        const monthAbbrev = months[createdDate.getMonth()];
        const yyyy = createdDate.getFullYear();
        tabla[i].fechaCreacion = `${dd}-${monthAbbrev}-${yyyy}`;
      } catch (e) {
        tabla[i].horaCreacion = '';
        tabla[i].fechaCreacion = '';
      }
      // Fecha del siguiente cumpleaños (local, con DST segun zona)
      try {
        const nextMs = res.nextTime;
        const nextDateLocal = new Date(nextMs);
        const ddn = String(nextDateLocal.getDate()).padStart(2, '0');
        const months = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
        const monthAbbrev = months[nextDateLocal.getMonth()];
        const yyn = nextDateLocal.getFullYear();
        tabla[i].fechaSigCumple = `${ddn}-${monthAbbrev}-${yyn}`;
      } catch (e) {
        tabla[i].fechaSigCumple = '';
      }
    }
    return this.heroes = tabla;
  }

  daysUntilBirthday(creacion: string) {
    // Los cumpleaños se cuentan cada 365 días, es decir sin tener en cuenta años bisiestos.
    // Por tanto, el proximo cumpleaños es la fecha de creacion + n*365 dias
    // con n minimo estrictamente positivo tal que la fecha resultante > today.
    const d = new Date(creacion);
    const creationUtc = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()));

    const today = new Date();
    const todayUtc = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate()));

    const millisPerDay = 24 * 60 * 60 * 1000;
    const daysSinceCreation = Math.floor((todayUtc.getTime() - creationUtc.getTime()) / millisPerDay);

    let n = Math.floor(daysSinceCreation / 365) + 1;
    if (daysSinceCreation < 0) n = 1; // creacion en el futuro cercano

    let next = new Date(creationUtc.getTime() + n * 365 * millisPerDay);
    while (next.getTime() <= todayUtc.getTime()) {
      n++;
      next = new Date(creationUtc.getTime() + n * 365 * millisPerDay);
    }

    const dias = Math.round((next.getTime() - todayUtc.getTime()) / millisPerDay);
    let numeroAnosCumple = n;

    // Si fue creado este mismo año mostrar 1
    if (creationUtc.getUTCFullYear() === todayUtc.getUTCFullYear()) numeroAnosCumple = 1;

    return { dias, numeroAnosCumple, nextTime: next.getTime() }
  }

  // addSpec(tabla: any){
  //   // Añado columna de especializacion a cada heroe
  //   for (let i = 0; i < tabla.length; i++){
  //     tabla[i].espec = [];
  //     // Busco ids y name de las especializaciones de cada profesion
  //     this.heroService.getProfession(tabla[i].profession).subscribe((profesion: any) => {
  //       // Busco los datos de cada personaje
  //       this.heroService.getInfoHero(tabla[i].name).subscribe((infoHero: any) => {
  //         for (let j = 0; j < profesion.length; j++){
  //           for (let k = 0; k < infoHero.training.length; k++){
  //             // Comparo y si existe y done  = true escribo la espec
  //             if ((profesion[j].id === infoHero.training[k].id) && (infoHero.training[k].done)){
  //               // console.log("name: " + infoHero.name + " espec: " + profesion[j].name);
  //               tabla[i].espec.push(profesion[j].name)
  //               break;
  //             }
  //           }
  //         }
  //       })
  //     })
  //   }
  //   return this.heroes = tabla;
  // }

  // addSpec(tabla: any){
  //   // Añado columna de especializacion pve activa a cada heroe
  //   for (let i = 0; i < tabla.length; i++){
  //     tabla[i].espec = "Core"; // Para cuando no coincida sera especializacion core
  //     // Busco los datos de cada personaje
  //     this.heroService.getInfoHero(tabla[i].name).subscribe((infoHero: any) => {
  //       // Entro en specializations y pve
  //       let specPve = infoHero.specializations.pve;
  //       for (let k = 0; k < specPve.length; k++){
  //         // Comparo si existe y añado columna
  //         for (let j = 0; j < Specs.length; j++){
  //           if ((specPve[k].id === Specs[j].specHot)){
  //             tabla[i].espec = Specs[j].specHotName
  //             k = specPve.length; // Para salir del bucle k y no seguirlo ya que encontré coincidencia
  //             break; // Para salir del bucle j y no seguirlo ya que encontré coincidencia
  //           } else if ((specPve[k].id === Specs[j].specPof)){
  //             tabla[i].espec = Specs[j].specPofName
  //             k = specPve.length;
  //             break;
  //           } else if ((specPve[k].id === Specs[j].specEod)){
  //             tabla[i].espec = Specs[j].specEodName
  //             k = specPve.length;
  //             break;
  //           } else if ((specPve[k].id === Specs[j].specVoe)){
  //             tabla[i].espec = Specs[j].specVoeName
  //             k = specPve.length;
  //             break;
  //           }
  //         }
  //       }
  //     })
  //   }
  //   return this.heroes = tabla;
  // }

  addSpec(tabla: any[]) {
    // Añado columna de especializacion pve activa a cada heroe

    // Procesar cada heroe de forma independiente
    for (const hero of tabla) {

      // Obtener las especializaciones PvE que ya vienen en /characters
      const specPve = hero.specializations?.pve || [];

      // Si no hay coincidencia con una especializacion, sera Core
      hero.espec = 'Core';

      // Buscar la especializacion correspondiente
      for (const spec of specPve) {
        const match = Specs.find(s =>
          s.specHot === spec.id ||
          s.specPof === spec.id ||
          s.specEod === spec.id ||
          s.specVoe === spec.id
        );
        if (match) {
          if (match.specHot === spec.id) {
            hero.espec = match.specHotName;
          } else if (match.specPof === spec.id) {
            hero.espec = match.specPofName;
          } else if (match.specEod === spec.id) {
            hero.espec = match.specEodName;
          } else if (match.specVoe === spec.id) {
            hero.espec = match.specVoeName;
          }
          // Se ha encontrado la especializacion
          break;
        }
      }
    }
    // Actualizar la tabla
    this.heroes = tabla;
  }

  // addRobotJade(tabla: any){
  //   // Añado columna de robot de jade a cada heroe
  //   for (let i = 0; i < tabla.length; i++){
  //     // Valor por defecto si no tiene PowerCore
  //     tabla[i].robotJade = "-";
  //     // Busco id del robot de jade de cada heroe
  //     for (let j = 0; j < tabla[i].equipment.length; j++){
  //       if (tabla[i].equipment[j].slot === "PowerCore"){
  //         let robotJade = "a";
  //         // Busco el id en /v2/items?id= para ver su informacion
  //         this.heroService.getItem(tabla[i].equipment[j].id).subscribe((robot: any) => {
  //           // Ej: "name": "Núcleo de robot de jade: Rango 10"
  //           robotJade = robot.name.replace(/^\D+/g, ""); // Me quedo con el numero
  //           tabla[i].robotJade = robotJade;
  //         })
  //         break;
  //       }
  //     }
  //   }
  //   return this.heroes = tabla;
  // }

  // addTrophyProtocol(tabla: any){
  //   // Añado columna de protocolo de carroñero a cada heroe
  //   for (let i = 0; i < tabla.length; i++){
  //     // valor por defecto si no tiene SensoryArray
  //     tabla[i].trophyProtocol = "-";
  //     // Busco id del Protocolo de carroñero de cada heroe
  //     for (let j = 0; j < tabla[i].equipment.length; j++){
  //       if (tabla[i].equipment[j].slot === "SensoryArray"){
  //         let trophyProtocol = "a";
  //         // Busco el id en /v2/items?id= para ver su informacion
  //         this.heroService.getItem(tabla[i].equipment[j].id).subscribe((trophy: any) => {
  //           // trophyProtocol = trophy.name.replace("Scavenger Protocol: ", "");
  //           trophyProtocol = trophy.name.replace("Protocolo de carroñero: ", "");
  //           tabla[i].trophyProtocol = trophyProtocol;
  //         })
  //         break;
  //       }
  //     }
  //   }
  //   return this.heroes = tabla;
  // }

  addEquipmentInfo(tabla: any[], finished: () => void) {
    // Añado columna de robot de jade y de protocolo de carroñero a cada heroe
    // Buscar todos los PowerCore, SensoryArray y eliminar IDs repetidos para pedir todos los items de una vez,
    // crear un map y rellenar robotJade y trophyProtocol

    // Set para almacenar IDs unicos y evitar duplicados de PowerCore y SensoryArray
    const itemIds = new Set<number>();

    for (const hero of tabla) {
      // Estado inicial mientras llega la respuesta de la API
      hero.robotJade = 'Cargando...';
      hero.trophyProtocol = 'Cargando...';

      for (const equipment of hero.equipment || []) {
        if (equipment.slot === 'PowerCore' || equipment.slot === 'SensoryArray') {
          itemIds.add(equipment.id);
        }
      }
    }

    // Si no hay ningun item que consultar, se termina
    if (itemIds.size === 0) {
      for (const hero of tabla) {
        hero.robotJade = '-';
        hero.trophyProtocol = '-';
      }
      this.dataSource.data = tabla;
      finished();
      return;
    }

    // Convertir los IDs a string separados por comas para la API
    const ids = Array.from(itemIds).join(',');

    // Obtener todos los items en una unica peticion
    this.heroService.getItems(ids).subscribe((items: any) => {
      // Crear un Map para encontrar rapidamente cada item por ID
      const itemsMap = new Map(
        (items as any[]).map(item => [item.id, item])
      );

      // Asignar la informacion de los items a cada heroe
      for (const hero of tabla) {
        // Por defecto, se asume que el heroe no tiene estos items
        hero.robotJade = '-';
        hero.trophyProtocol = '-';
        for (const equipment of hero.equipment || []) {
          const item = itemsMap.get(equipment.id);
          // Obtener el rango del robot de jade
          if (equipment.slot === 'PowerCore' && item) {
            // Ejemplo: "Núcleo de robot de jade: Rango 10"
            hero.robotJade = item.name.replace(/^\D+/g, ''); // Me quedo con el numero
          }
          // Obtener el tipo de protocolo de carroñero
          if (equipment.slot === 'SensoryArray' && item) {
            // hero.trophyProtocol = item.name.replace('Scavenger Protocol: ', '');
            hero.trophyProtocol = item.name.replace('Protocolo de carroñero: ', '');
          }
        }
      }
      // Actualizar la tabla cuando llegan los items
      this.dataSource.data = tabla;
      // Peticion terminada
      finished();
    },
      (error) => {
        // La peticion completa ha fallado, no se puede obtener ningun item
        for (const hero of tabla) {
          hero.robotJade = '-';
          hero.trophyProtocol = '-';
        }
        console.warn('No se ha podido obtener la informacion de powercore ni sensoryarray de los heroes: ', error);
        this.dataSource.data = tabla;
        // Contar el error como terminado
        finished();
      }
    );
  }

  getInfusions(finished: () => void): void {
    // Buscar infus y enriquecimientos: en cada heroe en equipment (campo infusions y campo location: armory),
    // en inventario, en inventario compartido, en el banco y en contenedores
    // Nota: equipment contiene las infus equipadas en la pestaña activa 
    // y ademas las otras de las demas pestañas no activas las pone como location: armory

    const infusionsMap = new Map<number, InfusionMapData>();

    const containersMap = new Map<number, {
      id: number;
      cantidadTotal: number;
      cantidadBanco: number;
      cantidadInvComp: number;
      personajes: Map<string, number>;
    }>();

    // Comprobar si es una infusion
    const esInfusion = (id: number): boolean => {
      return this.infusionsCatalogMap.has(id);
    };

    // Comprobar si es un contenedor
    const esContenedor = (id: number): boolean => {
      return this.containersCatalogMap.has(id);
    };

    // Añadir infusion de un personaje
    const addInfusion = (id: number, cantidad: number, heroName: string) => {

      if (!id || !cantidad || !esInfusion(id)) {
        return;
      }

      let infusion = infusionsMap.get(id);

      if (!infusion) {
        infusion = {
          id: id,
          cantidadTotal: 0,
          cantidadBanco: 0,
          cantidadInvComp: 0,
          personajes: new Map<string, number>(),
          contenedores: new Map<number, ContenedorInfo>(),
          materiales: new Map<number, MaterialInfo>()
        };
        infusionsMap.set(id, infusion);
      }

      // Cantidad total
      infusion.cantidadTotal += cantidad;
      // Cantidad del personaje
      const cantidadPersonaje = infusion.personajes.get(heroName) || 0;

      infusion.personajes.set(
        heroName,
        cantidadPersonaje + cantidad
      );
    };

    // Registrar que se tiene un contenedor y donde esta
    const addContainer = (id: number, cantidad: number, heroName: string) => {

      if (!id || !cantidad || !esContenedor(id)) {
        return;
      }

      let container = containersMap.get(id);

      if (!container) {
        container = {
          id: id,
          cantidadTotal: 0,
          cantidadBanco: 0,
          cantidadInvComp: 0,
          personajes: new Map<string, number>()
        };

        containersMap.set(id, container);
      }

      // Cantidad total
      container.cantidadTotal += cantidad;
      // Cantidad del personaje
      const cantidadPersonaje = container.personajes.get(heroName) || 0;

      container.personajes.set(
        heroName,
        cantidadPersonaje + cantidad
      );
    };

    // Añadir infusiones del banco
    const addInfusionBanco = (id: number, cantidad: number) => {

      if (!id || !cantidad || !esInfusion(id)) {
        return;
      }

      let infusion = infusionsMap.get(id);

      if (!infusion) {
        infusion = {
          id: id,
          cantidadTotal: 0,
          cantidadBanco: 0,
          cantidadInvComp: 0,
          personajes: new Map<string, number>(),
          contenedores: new Map<number, ContenedorInfo>(),
          materiales: new Map<number, MaterialInfo>()
        };
        infusionsMap.set(id, infusion);
      }

      infusion.cantidadTotal += cantidad;
      infusion.cantidadBanco += cantidad;
    };

    // Añadir contenedor del banco
    const addContainerBanco = (id: number, cantidad: number) => {

      if (!id || !cantidad || !esContenedor(id)) {
        return;
      }

      let container = containersMap.get(id);

      if (!container) {
        container = {
          id: id,
          cantidadTotal: 0,
          cantidadBanco: 0,
          cantidadInvComp: 0,
          personajes: new Map<string, number>()
        };

        containersMap.set(id, container);
      }

      container.cantidadTotal += cantidad;
      container.cantidadBanco += cantidad;
    };

    // Añadir infusiones del inventario compartido
    const addInfusionInvComp = (id: number, cantidad: number) => {

      if (!id || !cantidad || !esInfusion(id)) {
        return;
      }

      let infusion = infusionsMap.get(id);

      if (!infusion) {
        infusion = {
          id: id,
          cantidadTotal: 0,
          cantidadBanco: 0,
          cantidadInvComp: 0,
          personajes: new Map<string, number>(),
          contenedores: new Map<number, ContenedorInfo>(),
          materiales: new Map<number, MaterialInfo>()
        };

        infusionsMap.set(id, infusion);
      }

      infusion.cantidadTotal += cantidad;
      infusion.cantidadInvComp += cantidad;
    };

    // Añadir contenedores del inventario compartido
    const addContainerInvComp = (id: number, cantidad: number) => {

      if (!id || !cantidad || !esContenedor(id)) {
        return;
      }

      let container = containersMap.get(id);

      if (!container) {
        container = {
          id: id,
          cantidadTotal: 0,
          cantidadBanco: 0,
          cantidadInvComp: 0,
          personajes: new Map<string, number>()
        };

        containersMap.set(id, container);
      }

      container.cantidadTotal += cantidad;
      container.cantidadInvComp += cantidad;
    };

    //----------------------------------------------------------------------
    // Recorrer personajes
    this.heroes.forEach((hero: Hero) => {

      const heroName = hero.name;
      // Equipment
      // hero.equipment contiene:
      // 1. El equipamiento de la pestaña activa: item.infusions
      // 2. Objetos almacenados en Legendary Armory: location === "Armory"
      if (hero.equipment) {

        hero.equipment.forEach((equipmentItem: any) => {
          // 1. Infusiones insertadas en el equipamiento activo
          if (equipmentItem.infusions) {
            const ids: number[] =
              Array.isArray(equipmentItem.infusions)
                ? equipmentItem.infusions
                : String(equipmentItem.infusions)
                  .split(',')
                  .map((id: string) => Number(id));

            ids.forEach((id: number) => {
              addInfusion(id, 1, heroName);
            });
          }

          // 2. Infusiones guardadas en armory
          if (equipmentItem.location === 'Armory' && esInfusion(equipmentItem.id)) {

            const count = equipmentItem.count || 1;

            addInfusion(equipmentItem.id, count, heroName);
          }

        });
      }

      // Inventario
      if (hero.bags) {

        hero.bags.forEach((bag: Bag | null) => {

          if (!bag || !bag.inventory) {
            return;
          }

          bag.inventory.forEach((inventoryItem: InventoryItem | null) => {

            if (!inventoryItem) {
              return;
            }

            const id = inventoryItem.id;
            const count = inventoryItem.count || 0;

            if (!id) {
              return;
            }

            // 3. La propia infusion esta en el inventario
            if (esInfusion(id)) {
              addInfusion(id, count, heroName);
            }

            if (this.containersCatalogMap.has(id)) {
              addContainer(id, count, heroName);
            }

            // 4. El objeto del inventario contiene infusiones
            if (inventoryItem.infusions) {

              const ids: number[] =
                Array.isArray(inventoryItem.infusions)
                  ? inventoryItem.infusions
                  : String(inventoryItem.infusions)
                    .split(',')
                    .map((id: string) => Number(id));

              ids.forEach((infusionId: number) => {
                // Cada objeto del inventario representa un objeto fisico  
                // Entonces si hay un stack de 3 objetos y cada uno contiene una infusion, tenemos 3 infusiones
                addInfusion(infusionId, count, heroName);
              });
            }

          });

        });

      }

    });

    // Banco + Inventario compartido + Materiales
    forkJoin({
      bank: this.heroService.getBank(),
      inventory: this.heroService.getInventory(),
      materials: this.heroService.getMaterials()
    }).subscribe((result: any) => {

      // Banco
      const bank = result.bank;
      if (bank) {
        bank.forEach((bankItem: any) => {
          if (!bankItem) {
            return;
          }
          const id = bankItem.id;
          const count = bankItem.count || 0;

          if (!id) {
            return;
          }

          if (esInfusion(id)) {
            addInfusionBanco(id, count);
          }

          if (this.containersCatalogMap.has(id)) {
            addContainerBanco(id, count);
          }
        });
      }

      // Inventario compartido
      const inventory = result.inventory;
      if (inventory) {
        inventory.forEach((inventoryItem: any) => {
          if (!inventoryItem) {
            return;
          }
          const id = inventoryItem.id;
          const count = inventoryItem.count || 0;

          if (!id) {
            return;
          }

          // 1. La propia infusion esta en el inventario compartido
          if (esInfusion(id)) {
            addInfusionInvComp(id, count);
          }

          if (this.containersCatalogMap.has(id)) {
            addContainerInvComp(id, count);
          }

          // 2. El objeto contiene infusiones
          if (inventoryItem.infusions) {
            const ids: number[] =
              Array.isArray(inventoryItem.infusions)
                ? inventoryItem.infusions
                : String(inventoryItem.infusions)
                  .split(',')
                  .map((id: string) => Number(id));
            ids.forEach((infusionId: number) => {
              // Cada objeto fisico contiene una infusion
              // Entonces si hay un stack de 3 objetos, son 3 infusiones
              addInfusionInvComp(infusionId, count);
            });
          }
        });
      }

      // Materiales
      const materials = result.materials;

      if (materials) {
        materials.forEach((material: any) => {

          if (!material) {
            return;
          }

          const id = material.id;
          const count = material.count || 0;

          if (!id || !count) {
            return;
          }

          this.addMaterial(id, count, infusionsMap);

        });
      }

      // Ya se tiene banco + inventario compartido +  materiales
      this.asociarContenedoresConInfusiones(infusionsMap, containersMap);
      this.construirInfusionsData(infusionsMap);
      this.allContainers = this.construirAllContainers(containersMap);
      this.heroesTabReady = true;
      this.loadingExtra = false;

      finished();
    },
      (error) => {
        console.error('Error obteniendo banco, inventario compartido o materiales:', error);
        // Aunque falle uno de los tres, mostrar lo que ya se tenga de los personajes
        this.asociarContenedoresConInfusiones(infusionsMap, containersMap);
        this.construirInfusionsData(infusionsMap);
        this.allContainers = this.construirAllContainers(containersMap);
        this.heroesTabReady = true;
        this.loadingExtra = false;

        finished();
      }
    );
  }

  private construirAllContainers(
    /*
    * Construye la vista de todos los contenedores del catalogo,
    * combinando la informacion del catalogo con las cantidades
    * registradas y el desglose de cantidades por personajes.
    *
    * Los contenedores que no tienen datos en `containersMap`
    * se incluyen igualmente con todas sus cantidades a 0
    * y sin personajes.
    *
    * Finalmente, los contenedores se ordenan por nombre,
    * realizando una comparacion alfabetica sensible a numeros.
    */

    containersMap: Map<number, {
      id: number;
      cantidadTotal: number;
      cantidadBanco: number;
      cantidadInvComp: number;
      personajes: Map<string, number>;
    }>
  ): ContainerDataView[] {

    return Array.from(this.containersCatalogMap.values())
      .map(catalogo => {

        const cuenta = containersMap.get(catalogo.id);

        return {
          id: catalogo.id,
          nombre: catalogo.name_es,
          icon: catalogo.icon || '',
          cantidadTotal: cuenta?.cantidadTotal || 0,
          cantidadBanco: cuenta?.cantidadBanco || 0,
          cantidadInvComp: cuenta?.cantidadInvComp || 0,
          personajes:
            cuenta
              ? Array.from(
                cuenta.personajes.entries()
              ).map(([nombre, cantidad]) => ({
                nombre,
                cantidad
              }))
              : []
        };

      })
      .sort((a, b) =>
        a.nombre.localeCompare(b.nombre, 'es', {
          numeric: true,
          sensitivity: 'base'
        })
      );
  }

  private construirInfusionsData(
    /*
    * Construye los datos de las infusiones combinando la informacion
    * almacenada en infusionsMap con los datos del catalogo.
    * 
    * Para cada infusion obtiene sus personajes, contenedores y materiales,
    * ademas de las cantidades registradas. Las infusiones que no existen
    * en el catalogo se descartan.
    
    * Se generan dos versiones:
    
    * 1. infusionsDataSinAgrupar:
    * Contiene todas las infusiones de forma individual con sus datos
    * completos. Se utiliza como fuente para "Todas las infusiones".
    
    * 2. infusionsData:
    * Contiene las infusiones agrupadas por contenedor. Se utiliza
    * como fuente para "Mis infusiones".
    
    
    * Finalmente, filteredInfusions se inicializa a partir de infusionsData
    * y se ordena colocando primero las infusiones que no son de tipo
    * Enrichment y, dentro de cada grupo, alfabeticamente por nombre.
    */
    infusionsMap: Map<number, InfusionMapData>
  ) {

    // CONSTRUIR TODAS LAS INFUSIONES INDIVIDUALES
    const infusionesSinAgrupar: InfusionData[] =
      Array.from(infusionsMap.values())
        .map((infusion) => {

          const item = this.infusionsCatalogMap.get(infusion.id);

          if (!item) {
            return undefined;
          }

          const personajes: InfusionPersonaje[] =
            Array
              .from(infusion.personajes.entries())
              .map(([nombre, cantidad]: [string, number]) => ({
                nombre,
                cantidad
              }))
              .sort((a, b) =>
                a.nombre.localeCompare(
                  b.nombre,
                  'es',
                  {
                    numeric: true,
                    sensitivity: 'base'
                  }
                )
              );

          const contenedores: ContenedorInfo[] =
            Array.from(
              infusion.contenedores.values()
            );

          const materiales: MaterialInfo[] =
            Array.from(
              infusion.materiales.values()
            );

          return {
            id: item.id,
            nombre: item.nombre,
            icon: item.icon,
            tipo: item.tipo,
            stat: item.stat,
            description: item.description,
            personajesEnLosQueEsta: personajes,
            cantidadTotal: infusion.cantidadTotal,
            cantidadBanco: infusion.cantidadBanco,
            cantidadInvComp: infusion.cantidadInvComp,
            contenedores: contenedores,
            materiales: materiales
          } as InfusionData;

        })
        .filter(
          (item): item is InfusionData =>
            item !== undefined
        );

    this.infusionsDataSinAgrupar = infusionesSinAgrupar;
    // console.log('INFUSIONES SIN AGRUPAR:', this.infusionsDataSinAgrupar.length);

    // "MIS INFUSIONES"
    this.infusionsData = this.agruparInfusionesPorContenedor(infusionesSinAgrupar);

    this.filteredInfusions = [...this.infusionsData]
      .sort((a, b) => {

        const enrichmentA =
          a.tipo === 'Enrichment';

        const enrichmentB =
          b.tipo === 'Enrichment';

        if (enrichmentA !== enrichmentB) {
          return enrichmentA ? 1 : -1;
        }

        return a.nombre.localeCompare(b.nombre, 'es',
          {
            numeric: true,
            sensitivity: 'base'
          }
        );

      });
    console.log('Mis Infusiones AGRUPADAS:', this.infusionsData.length);
  }

  private asociarContenedoresConInfusiones(
    /*
    * Asocia cada contenedor con las infusiones que puede contener,
    * utilizando las opciones y los IDs de infusion definidos en el catalogo.
    * 
    * Si una infusion todavia no existe en infusionsMap, se crea con
    * sus valores iniciales. Para cada asociacion se almacena la informacion
    * del contenedor, incluyendo sus cantidades, el numero de infusiones
    * de la opcion (variantes) y los personajes asociados al contenedor.
    */
    infusionsMap: Map<number, InfusionMapData>,
    containersMap: Map<number, {
      id: number;
      cantidadTotal: number;
      cantidadBanco: number;
      cantidadInvComp: number;
      personajes: Map<string, number>;
    }>
  ): void {

    containersMap.forEach((containerData) => {

      const container = this.containersCatalogMap.get(containerData.id);

      if (!container) {
        return;
      }

      container.options.forEach((option: ContainerInfusion) => {

        const variantes = option.ids.length;

        option.ids.forEach((infusionId: number) => {

          let infusion = infusionsMap.get(infusionId);

          if (!infusion) {
            infusion = {
              id: infusionId,
              cantidadTotal: 0,
              cantidadBanco: 0,
              cantidadInvComp: 0,
              personajes: new Map<string, number>(),
              contenedores: new Map<number, ContenedorInfo>(),
              materiales: new Map<number, MaterialInfo>()
            };

            infusionsMap.set(infusionId, infusion);
          }

          const personajes =
            Array
              .from(
                containerData.personajes.entries()
              )
              .map(([nombre, cantidad]) =>
              ({
                nombre,
                cantidad
              })
              );

          infusion.contenedores.set(
            container.id,
            {
              id: container.id,
              nombre: container.name,
              nombreEs: container.name_es,
              cantidad: containerData.cantidadTotal,
              method: container.method,
              variantes: variantes,
              cantidadBanco: containerData.cantidadBanco,
              cantidadInvComp: containerData.cantidadInvComp,
              personajes: personajes
            }
          );

        });

      });

    });
  }

  private agruparInfusionesPorContenedor(
    /*
    * Agrupa las variantes de una misma opcion de un contenedor con
    * method = "choice", evitando mostrar una entrada independiente
    * por cada alternativa de la opcion.
    * 
    * Ejemplo:
    * Un cofre puede permitir elegir entre 8 infusiones distintas.
    * Internamente se mantienen las 8 IDs para poder identificar todas
    * las alternativas y comprobar si el usuario posee alguna de ellas.
    * En la interfaz:
    * 1. Si no posee ninguna variante, se muestra una unica entrada virtual
    * que representa la opcion del contenedor, sin ID, estadisticas,
    * personajes ni cantidades de una infusion concreta.
    * 2. Si posee alguna variante, se muestra unicamente una de las
    * infusiones que posee, manteniendo sus datos (ID, estadisticas,
    * personajes, cantidades, etc.).
    * 
    * En ambos casos se unifican los contenedores de todas las variantes,
    * evitando duplicarlos y conservando la mayor cantidad registrada
    * para cada contenedor.
    * 
    * De esta forma, una opcion con varias infusiones alternativas se
    * representa como una unica entrada en la interfaz, ya que las IDs
    * representan elecciones posibles y no infusiones que el usuario
    * posea simultaneamente.
    */
    infusiones: InfusionData[]
  ): InfusionData[] {

    const resultado: InfusionData[] = [];
    const gruposProcesados = new Set<string>();

    for (const infusion of infusiones) {

      let opcionEncontrada: ContainerInfusion | undefined;
      let containerEncontrado: ContainerData | undefined;

      // Buscar la opcion a la que pertenece
      for (const container of this.containersCatalogMap.values()) {

        for (const option of container.options) {

          if (option.ids.includes(infusion.id)) {
            opcionEncontrada = option;
            containerEncontrado = container;
            break;
          }

        }

        if (opcionEncontrada) {
          break;
        }
      }

      // Infusion normal
      if (!opcionEncontrada || !containerEncontrado) {
        resultado.push(infusion);
        continue;
      }

      const claveGrupo = `${containerEncontrado.id}-${opcionEncontrada.name}`;

      if (gruposProcesados.has(claveGrupo)) {
        continue;
      }

      gruposProcesados.add(claveGrupo);

      // Todas las variantes de esta opcion
      const variantes = infusiones.filter(i =>
        opcionEncontrada!.ids.includes(i.id)
      );

      // Alguna variante existe realmente en personajes/banco/inv.compartido?
      const variantesQuePosee = variantes.filter(i =>
        i.cantidadTotal > 0
      );

      // Si posee alguna variante real: mostrar esa variante y le añadimos los contenedores
      if (variantesQuePosee.length > 0) {

        const variante = variantesQuePosee[0];

        // Unificar los contenedores
        const contenedoresMap = new Map<number, ContenedorInfo>();

        variantes.forEach(i => {

          i.contenedores.forEach(c => {

            const existente = contenedoresMap.get(c.id);

            if (existente) {

              existente.cantidad = Math.max(
                existente.cantidad,
                c.cantidad
              );

            } else {

              contenedoresMap.set(c.id, {
                ...c
              });

            }

          });

        });

        resultado.push({
          ...variante,
          contenedores:
            Array.from(contenedoresMap.values())
        });

      } else {
        // No posee ninguna variante
        // Crear una unica entrada "virtual" para representar la opcion del cofre

        const contenedoresMap = new Map<number, ContenedorInfo>();

        variantes.forEach(i => {

          i.contenedores.forEach(c => {

            const existente = contenedoresMap.get(c.id);

            if (existente) {

              existente.cantidad = Math.max(
                existente.cantidad,
                c.cantidad
              );

            } else {

              contenedoresMap.set(c.id, {
                ...c
              });

            }

          });

        });

        resultado.push({
          // No se mostrara porque es una entrada de contenedor
          id: containerEncontrado.id,
          nombre: opcionEncontrada.name_es,
          icon: variantes[0]?.icon || '',
          tipo: 'Contenedor',
          stat: [],
          description: '',
          personajesEnLosQueEsta: [],
          cantidadTotal: 0,
          cantidadBanco: 0,
          cantidadInvComp: 0,
          contenedores: Array.from(contenedoresMap.values()),
          materiales: [],
          esContenedor: true,
          idsVariantes: opcionEncontrada.ids
        });
      }
    }

    return resultado;
  }

  loadExtraInfo(tabla: any[]): void {

    this.loadingExtra = true;

    let pending = 2; // Numero de funciones a cargar

    const finished = () => {
      pending--;
      if (pending === 0) {
        this.loadingExtra = false;
      }
    };

    // Cargar informacion de las siguientes funciones:
    this.addEquipmentInfo(tabla, finished);
    this.getInfusions(finished);
  }

  viewHero(hero: any) {
    let route = '/heroes/detail/';
    // this.router.navigate([route], { queryParams: { name: hero.name }, relativeTo: this.activeRouter});
    // this.router.navigate([route + row.name]);
    this.router.navigate([route + hero.name]);
  }

  filtrarInfusiones(): void {

    const search = this.infusionSearch
      .trim()
      .toLowerCase();

    this.filteredInfusions = this.infusionsData
      .filter((infusion: InfusionData) => {

        // Buscar por nombre
        const coincideNombre =
          !search ||
          infusion.nombre
            .toLowerCase()
            .includes(search);

        // Buscar por estadistica
        const coincideStat =
          !this.selectedStat ||
          infusion.stat.some(
            (stat: InfusionAttribute) =>
              stat.attribute === this.selectedStat
          );

        // Buscar por personaje
        const coincideHeroe =
          !this.selectedHero ||
          infusion.personajesEnLosQueEsta.some(
            (personaje: InfusionPersonaje) =>
              personaje.nombre === this.selectedHero
          );

        // Buscar por contenedor
        const coincideContenedor =
          !this.selectedContainer ||
          infusion.contenedores.some(
            contenedor =>
              contenedor.id === this.selectedContainer!.id
          );

        return coincideNombre &&
          coincideStat &&
          coincideContenedor &&
          coincideHeroe;
      })
      .sort((a, b) => {
        // 1. Ordenar las infusiones alfabeticamente
        // 2. Ordenar los enriquecimientos alfabeticamente y ponerlos al final
        const enrichmentA = a.tipo === 'Enrichment';
        const enrichmentB = b.tipo === 'Enrichment';

        // Los Enrichment van al final
        if (enrichmentA !== enrichmentB) {
          return enrichmentA ? 1 : -1;
        }

        // Dentro de cada grupo, orden alfabetico
        return a.nombre.localeCompare(b.nombre, 'es', {
          numeric: true,
          sensitivity: 'base'
        });
      })
      .map((infusion: InfusionData) => {

        // Si no hay personaje seleccionado, devolver la infusion completa
        if (!this.selectedHero) {
          return infusion;
        }

        // Buscar la cantidad que tiene el personaje seleccionado
        const personaje = infusion.personajesEnLosQueEsta.find(
          p => p.nombre === this.selectedHero
        );

        return {
          ...infusion,

          // Mostrar solo la cantidad del personaje seleccionado
          cantidadTotal: personaje?.cantidad || 0,

          // Los demas personajes no se muestran
          personajesEnLosQueEsta: personaje
            ? [personaje]
            : []
        };
      });
  }

  private materialesInfusion = new Map<number, string>([
    [49424, 'Infusión de agonía +1'],
    [87528, 'Infusión de natación +10']
  ]);

  private addMaterial(
    /*
    * Añade la cantidad de un material a la infusion asociada.
    * 
    * Solo se procesan los materiales incluidos en materialesInfusion
    * y con una cantidad distinta de 0.
    * 
    * El ID del material coincide con el ID de la infusion, por lo que
    * se utiliza el mismo ID para localizar o crear la entrada correspondiente
    * en infusionsMap.
    * 
    * La cantidad se suma tanto al total de la infusion como al registro
    * especifico del material. Si el material todavia no esta registrado,
    * se crea una nueva entrada con su nombre y cantidad inicial.
    */
    materialId: number,
    cantidad: number,
    infusionsMap: Map<number, InfusionMapData>
  ): void {

    // Comprobar si es uno de los materiales que nos interesan
    if (!this.materialesInfusion.has(materialId) || !cantidad) {
      return;
    }

    // El ID del material es el mismo que el de la infusion
    const infusionId = materialId;

    let infusion = infusionsMap.get(infusionId);

    if (!infusion) {

      infusion = {
        id: infusionId,
        cantidadTotal: 0,
        cantidadBanco: 0,
        cantidadInvComp: 0,
        personajes: new Map<string, number>(),
        contenedores: new Map<number, ContenedorInfo>(),
        materiales: new Map<number, MaterialInfo>()
      };

      infusionsMap.set(infusionId, infusion);
    }

    // Sumar al total
    infusion.cantidadTotal += cantidad;

    const existente = infusion.materiales.get(materialId);

    if (existente) {
      existente.cantidad += cantidad;
    } else {
      infusion.materiales.set(materialId, {
        id: materialId,
        nombre: this.materialesInfusion.get(materialId) || '',
        cantidad: cantidad
      });
    }
  }

  onInfusionSearch(): void {
    this.selectedInfusion = null;
    this.filtrarInfusiones();
  }

  onContainerSearch(): void {

    this.selectedContainer = null;

    const search = this.containerSearch
      .trim()
      .toLowerCase();

    this.filteredContainers =
      Array.from(this.containersCatalogMap.values())
        .filter(container =>
          container.name_es
            ?.toLowerCase()
            .includes(search)
        )
        .sort((a, b) =>
          a.name_es.localeCompare(b.name_es, 'es', {
            numeric: true,
            sensitivity: 'base'
          })
        );
  }

  onHeroChange(): void {
    this.filtrarInfusiones();
  }

  onStatChange(): void {
    this.filtrarInfusiones();
  }

  onInfusionSelected(infusion: InfusionData): void {
    this.selectedInfusion = infusion;
    this.infusionSearch = infusion.nombre;
    this.filtrarInfusiones();
  }

  onContainerSelected(nombre: string): void {

    if (!nombre) {
      this.containerSearch = '';
      this.selectedContainer = null;
      this.filtrarInfusiones();
      return;
    }

    this.containerSearch = nombre;

    this.selectedContainer = this.filteredContainers.find(
      container => container.name_es === nombre
    ) || null;

    this.filtrarInfusiones();
  }

  resetInfusionFilters(): void {
    this.infusionSearch = '';
    this.selectedHero = '';
    this.selectedStat = '';
    this.selectedInfusion = null;
    this.containerSearch = '';
    this.selectedContainer = null;
    this.filtrarInfusiones();
  }

  get filtrosInfusionesDeshabilitados(): boolean {
    return this.mostrarTodasLasInfusiones || this.mostrarTodosLosContenedores;
  }

  mostrarMisInfusiones(): void {
    this.mostrarTodasLasInfusiones = false;
    this.mostrarTodosLosContenedores = false;
    this.filtrarInfusiones();
  }

  mostrarTodas(): void {
    this.mostrarTodasLasInfusiones = true;
    this.mostrarTodosLosContenedores = false;

    const infusionesSinAgrupar = this.infusionsDataSinAgrupar;

    this.filteredAllInfusions = this.infusionsCatalog
      .map((catalogInfusion: any) => {

        // BUSCAR EN LOS DATOS SIN AGRUPAR
        const infusionCuenta =
          infusionesSinAgrupar.find(
            infusion =>
              infusion.id === catalogInfusion.id
          );

        // console.log('============================================');
        // console.log('TODAS - CATALOGO:', catalogInfusion.id, catalogInfusion.nombre);
        // console.log('TODAS - EN DATA SIN AGRUPAR:', infusionCuenta);
        // console.log('TODAS - CONTENEDORES:', infusionCuenta?.contenedores);


        // LA INFUSION EXISTE EN LA CUENTA
        // Devolver la versión SIN AGRUPAR para conservar sus contenedores.
        if (infusionCuenta) {
          return infusionCuenta;
        }

        // LA INFUSION NO ESTA EN LA CUENTA
        // Buscar qué contenedores pueden contenerla.

        // const contenedores: ContenedorInfo[] = [];

        // this.containersCatalogMap.forEach(
        //   (container: ContainerData) => {
        //     container.options.forEach(
        //       (option: ContainerInfusion) => {
        //         if (
        //           option.ids.includes(
        //             catalogInfusion.id
        //           )
        //         ) {
        //           contenedores.push({
        //             id: container.id,
        //             nombre: container.name,
        //             nombreEs: container.name_es,
        //             cantidad: 0,
        //             method: container.method,
        //             variantes: option.ids.length,
        //             cantidadBanco: 0,
        //             cantidadInvComp: 0,
        //             personajes: []
        //           });
        //         }
        //       }
        //     );
        //   }
        // );

        return {
          id: catalogInfusion.id,
          nombre: catalogInfusion.nombre,
          icon: catalogInfusion.icon,
          tipo: catalogInfusion.tipo,
          stat: catalogInfusion.stat || [],
          description: catalogInfusion.description || '',
          personajesEnLosQueEsta: [],
          cantidadTotal: 0,
          cantidadBanco: 0,
          cantidadInvComp: 0,
          contenedores: [],
          materiales: []
        } as InfusionData;

      })
      .sort((a, b) => {

        const enrichmentA =
          a.tipo === 'Enrichment';

        const enrichmentB =
          b.tipo === 'Enrichment';

        if (enrichmentA !== enrichmentB) {
          return enrichmentA ? 1 : -1;
        }

        return a.nombre.localeCompare(
          b.nombre,
          'es',
          {
            numeric: true,
            sensitivity: 'base'
          }
        );

      });

    // AGRUPAR POR NOMBRE
    this.filteredAllInfusionGroups = this.agruparInfusionesPorNombre(this.filteredAllInfusions);

    // ORDENAR VARIANTES POR STAT
    this.filteredAllInfusionGroups.forEach(
      grupo => {

        grupo.variantes.sort((a, b) => {

          const nombreA =
            a.statNombre.replace(
              /^\+\d+\s*/,
              ''
            );

          const nombreB =
            b.statNombre.replace(
              /^\+\d+\s*/,
              ''
            );

          const indexA =
            this.statOptions.findIndex(
              stat =>
                stat.label === nombreA
            );

          const indexB =
            this.statOptions.findIndex(
              stat =>
                stat.label === nombreB
            );

          const ordenA =
            indexA === -1
              ? 999
              : indexA;

          const ordenB =
            indexB === -1
              ? 999
              : indexB;

          return ordenA - ordenB;

        });

      });

  }

  // const idsCuenta = new Set(
  //   this.infusionsData
  //     .filter(i => !i.esContenedor)
  //     .map(i => i.id)
  // );

  // const idsTodas = new Set(
  //   this.filteredAllInfusions.map(i => i.id)
  // );

  // const infusionesCuenta = this.infusionsData.filter(
  //   i => !i.esContenedor
  // );

  // const infusionesFaltantes = this.infusionsData.filter(
  //   i => !i.esContenedor && !idsTodas.has(i.id)
  // );

  // console.log('==============================');
  // console.log('INFUSIONES DE LA CUENTA');
  // console.log('Cantidad:', infusionesCuenta.length);
  // console.log('IDs:', Array.from(idsCuenta));
  // console.log('Infusiones:', infusionesCuenta);

  // console.log('==============================');
  // console.log('TODAS LAS INFUSIONES');
  // console.log('Cantidad:', this.filteredAllInfusions.length);
  // console.log('IDs:', Array.from(idsTodas));

  // console.log('==============================');
  // console.log('LAS TENGO PERO NO APARECEN EN TODAS');
  // console.log('Cantidad:', infusionesFaltantes.length);
  // console.log('IDs:', infusionesFaltantes.map(i => i.id));
  // console.log('Infusiones:', infusionesFaltantes);


  mostrarTodosLosContenedoresModo(): void {

    this.mostrarTodosLosContenedores = !this.mostrarTodosLosContenedores;

    if (this.mostrarTodosLosContenedores) {
      this.mostrarTodasLasInfusiones = false;
    }

  }

  private agruparInfusionesPorNombre(
    /*
    * Agrupa las infusiones por nombre de familia, utilizando
    * obtenerNombreGrupoInfusion() para obtener el nombre comun
    * que se mostrara en la interfaz.
    * 
    * Cada grupo contiene:
    * 1. Las variantes de infusion pertenecientes a esa familia, indicando
    * su stat y si el usuario posee alguna cantidad.
    * 2. Los contenedores asociados a las variantes, evitando duplicados
    * y marcando si el usuario dispone de cada uno.
    * 3. El valor de AgonyResistance, que se considera un atributo comun
    * al grupo. Si varias variantes tienen este atributo, se conserva
    * el primer valor encontrado.
    * 
    * La clave utilizada para agrupar se obtiene a partir del nombre comun
    * en minusculas y se utiliza unicamente para comparar; el nombre original
    * se conserva para mostrarlo en la interfaz.
    */
    infusiones: InfusionData[]
  ): InfusionGrupo[] {

    const grupos = new Map<string, InfusionGrupo>();

    infusiones.forEach(infusion => {

      // Nombre comun de la familia 
      const nombreGrupo = this.obtenerNombreGrupoInfusion(infusion.nombre);
      // Clave unicamente para comparar. No se utiliza para mostrar el nombre 
      const clave = nombreGrupo.toLowerCase();
      // const clave = infusion.nombre.trim().toLowerCase();

      let grupo = grupos.get(clave);

      if (!grupo) {

        grupo = {
          nombre: nombreGrupo,
          icon: infusion.icon,
          variantes: [],
          contenedores: [],
          agonyResistance: undefined
        };

        grupos.set(clave, grupo);
      }

      // Buscar todos los stats de la infusion
      const stats = infusion.stat || [];

      // STAT NORMAL
      // Buscar un stat normal, ignorando AgonyResistance
      const stat = stats.find(
        s => s.attribute !== 'AgonyResistance'
      );

      const statOption = stat
        ? this.statOptions.find(
          option => option.value === stat.attribute
        )
        : undefined;

      const statNombre = stat && statOption
        ? `+${stat.modifier} ${statOption.label}`
        : '';

      // AGONIA
      const agonyStat = stats.find(
        s => s.attribute === 'AgonyResistance'
      );

      // La agonia se guarda como comun al grupo
      // Si varias variantes tienen agonia, se conserva el valor encontrado
      if (agonyStat && grupo.agonyResistance === undefined) {

        grupo.agonyResistance = agonyStat.modifier;

        const agonyOption = this.statOptions.find(
          option => option.value === 'AgonyResistance'
        );

        grupo.agonyStatNombre = agonyOption?.label || '';
      }

      // CONTENEDORES
      // La infusion ya trae los contenedores asociados desde
      // asociarContenedoresConInfusiones().
      // No es necesario volver a buscarlos en el catalogo.

      const contenedores = infusion.contenedores.map(contenedor => ({
        ...contenedor,
        loTengo: contenedor.cantidad > 0
      }));

      contenedores.forEach(contenedor => {

        const existente = grupo!.contenedores.find(
          c => c.id === contenedor.id
        );

        if (!existente) {
          grupo!.contenedores.push(contenedor);
        }

      });

      // VARIANTE
      grupo.variantes.push({
        infusion,
        statNombre,
        laTengo: infusion.cantidadTotal > 0,
      });

    });

    return Array.from(grupos.values());
  }

  private obtenerNombreGrupoInfusion(nombre: string): string {

    // Si la infusion contiene `sufijos` en el nombre, se quitan
    const sufijos = [
      'de duración de bendición',
      'de duración de condición',
      'de daño de condición',
      'de vitalidad',
      'de curación',
      'de dureza',
      'de potencia',
      'de precisión'
    ];

    const nombreOriginal = nombre.trim();
    const nombreMinusculas = nombreOriginal.toLowerCase();

    for (const sufijo of sufijos) {

      if (nombreMinusculas.endsWith(sufijo)) {

        return nombreOriginal
          .substring(
            0,
            nombreOriginal.length - sufijo.length
          )
          .trim();
      }
    }

    // Si no hay sufijo, conservar exactamente el nombre original 
    return nombreOriginal;
  }

  actualizarHeroes(): void {
    if (this.actualizandoHeroes) {
      return;
    }
    this.actualizandoHeroes = true;
    this.heroesError = false;
    this.heroService.refreshHeroes();
    this.getHeroes(true);
  }

  // Devuelve el index de la pestaña de la tabla
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
    this.router.navigate(['/heroes', routeName]);
  }

}
