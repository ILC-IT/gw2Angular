import { Component, OnInit, AfterViewInit, ViewChild, OnDestroy } from '@angular/core';
import { Achievement, DailyService } from "../../service/daily.service";
import { reliquiaFractal, reliquiaFractalPristina, ufe, astralAcclaim } from '../legendary/legendary';
import { Fractales, FractalesCm, InestabCm, InstabilityDetail } from "./fractales";
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ToastNotificationInitializer, DialogLayoutDisplay, ToastUserViewTypeEnum, ToastProgressBarEnum, DisappearanceAnimation, AppearanceAnimation, ToastPositionEnum } from '@costlydeveloper/ngx-awesome-popup';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdenReferenciaEsp } from '../raid/raid';
import { RefreshService } from 'src/app/service/refresh.service';

const CONVERGENCIAS_ACHIEVEMENTS = {
  convergenciaSotoWeekly: { id: 7706, max: 3, description: 'Convergencia Soto Weekly' },
  convergenciaJwWeekly: { id: 8448, max: 3, description: 'Convergencia JW Weekly' },
  convergenciaSoto100: { id: 7668, max: 100, description: 'Convergencia Soto 100' },
  convergenciaSoto150: { id: 7720, max: 150, repeated: 0, description: 'Convergencia Soto 150' },
  convergenciaJw50: { id: 8456, max: 50, description: 'Convergencia JW 50' },
  convergenciaJw50Rep: { id: 8440, max: 50, repeated: 0, description: 'Convergencia JW 50 Repetible' }
};

const QUICKPLAY_WEEKLY_ACHIEVEMENTS = {
  fractalInfiniteRecursion: { id: 8814, max: 150, repeated: 0, description: 'Fractal Infinite Recursion' },
  weeklyFractalQuickplay: { id: 8815, max: 5, description: 'Weekly Fractal Quickplay' },
  weeklyQuickplayRaidEncounter: { id: 9123, max: 10, description: 'Weekly Quickplay Raid Encounter' }
};

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.css']
})
export class DailyComponent implements OnInit, AfterViewInit, OnDestroy {

  // daily: any; //contiene los ids de las diarias de pve, fractals, mvm, pvp
  // dailyIds: string = ''; //contiene los ids de las diarias de pve
  // dailyIdsM: string = ''; //contiene los ids de las diarias de wvw
  // dailyIdsP: string = ''; //contiene los ids de las diarias de pvp
  dailyIdsF: string = ''; //contiene los ids de las diarias de fractales
  dailyIdsW: string = ''; //contiene los ids de las diarias de la camara del brujo
  dailyIdsS: string = ''; //contiene el id de la diaria de strikes
  dailyStrike: any; //contiene el id de las strikes diarias buscando en achievements/categories/250
  dailyFractalsId: any; //contiene los ids de los fractales diarios buscando en achievements/categories/88
  wizardVault: any; //contiene wizardvault buscando en /wizardsvault
  fechaFormateada: string = ""; //contiene la fecha formateada segun el timezone local
  dailyWizardVault: any; //contiene wizardvault diaria buscando en account/wizardsvault/daily
  weeklyWizardVault: any; //contiene wizardvault semanal buscando en account/wizardsvault/weekly
  specialWizardVault: any; //contiene wizardvault especial buscando en account/wizardsvault/special
  dailyStrikeIcon: string = "";
  dailyStrikeDoneIds: Set<number> = new Set();
  dailyInfoF: any = {}; //contiene toda la info de las diarias de pve, fractals, mvm, pvp, strike
  loading: boolean = true;
  loading2: boolean = true;
  loadingDailyWizard: boolean = true;
  loadingWeeklyWizard: boolean = true;
  loadingSpecialWizard: boolean = true;
  pactSupply: string[] = [];
  pactSupplyUpdate: string = "";
  mapBonusRewardweekNumber = 1;
  bestWeek = 1;
  tokenSupply: string[][] = [];
  anomalia: string = '';
  fractalIncursion: string = '';
  weeklyFractalQuickplay: any = [];
  fractalInfiniteRecursion: any = [];
  weeklyQuickplayRaidEncounter: any = [];
  convergenciaSoto: string = '';
  convergenciaJw: string = '';
  convergenciaSotoWeekly: any = [];
  convergenciaJwWeekly: any = [];
  convergenciaCopy: string = '';
  convergenciaSoto100: any = [];
  convergenciaSoto150: any = [];
  convergenciaJw50: any = [];
  convergenciaJw50Rep: any = [];
  // loadingConvergenciaSoto100: boolean = true;
  // loadingConvergenciaJw50: boolean = true;
  // loadingConvergenciaJw50Rep: boolean = true;
  // loadingConvergenciaSoto150: boolean = true;
  loadingConvergencias: boolean = true;
  loadingQuickplayWeekly = true;
  dailyActivity: string = "";
  dailyOrnateKey: any = [];
  recordatorio = {
    ok: false,
    message: ""
  };
  dailyCraft: any; //contiene los crafts diarios
  materials: number[] = [];
  dailyCrafting = [
    "Charged quartz crystal",
    "Glob of elder spirit residue",
    "Lump of mithrilium",
    "Spool of silk weaving thread",
    "Spool of thick elonian cord"
  ];
  dailyHeroChoiceChest: any;
  dailyHeroChoiceChesting = [
    "Umbral verdeante (Matri)",
    "Profundidades enredadas (Chak)",
    "Valle áurico (Octohiedra)",
    "Defensa del dragón",
    "Oasis de cristal (Piñata)",
    "Ribera de Elon (Doppelganger)",
    "La desolación (Junundu, Maws)",
    "Vabbi (Perros)",
    "Seitung (Filoetereo)",
    "Nueva Kaineng (Apagón)",
    "Echovald Selva (War)",
    "Dragon's End (Soo-Won Mar de Jade)",
    "Gyala Delve",
    "Archipielago Vistacielo (Skywatch)",
    "Amnytas",
    "Inner Nayos (Ignaxious/Knaebelag)",
    "Citadel of Zakiros Nayos (Charybda)",
    "Janthir Syntri (Titans)"
  ]
  dailyWorldBoss: any;
  dailyWorldBossing = [
    "Jefe chamán Svanir",
    "Elemental de fuego",
    "Behemot de las sombras",
    "Gran sierpe de la selva",
    "Ulgoth modniir",
    "Taidha Covington",
    "El asolador",
    "Megadestructor",
    "Gólem de la Inquisa serie II",
    "Garra of Jormag",
    "Problema x3",
    "Reina karka",
    "Tequatl el Sombrío",
    "Drakkar",
    "Janthir Syntri"
  ]
  dailyHeroChoiceConvergenceChesting = "Convergencia diaria"
  reliquiaFractal = reliquiaFractal;
  reliquiaFractalPristina = reliquiaFractalPristina;
  ufe = ufe;
  astralAcclaim = astralAcclaim;
  //Para completada:
  dailyIdsChecked: boolean[] = [];
  dailyIdsCraftChecked: boolean[] = [];
  dailyIdsHeroChoiceChestChecked: boolean[] = [];
  dailyIdsWorldBossChecked: boolean[] = [];
  dailyIdsHeroChoiceChestConvergenceChecked: boolean = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  //disabled = true;
  dailyIdsDiariasChecked: boolean[] = [];
  panelOpenState = false;
  panelOpenStateR = false;
  panelOpenStateD = false;
  panelOpenStateCm = false;
  //Para buscar los fractales segun la escala
  fractales = Fractales;
  fractalesCm = FractalesCm;
  inestabCm = InestabCm;
  fractRec: any = [];
  fractDaily1: any = [];
  fractDaily2: any = [];
  fractDaily3: any = [];
  fractDaily4: any = [];
  fractDailys: any = [];
  merged: any = [];
  fractalesRecDailyString: string = "";
  dailyRaidBountiesString: string = "";
  fractDailyInestabilidadCmEng: string[] = [];
  fractDailyInestabilidadCmEsp: string[] = [];
  fractalRank: any;
  errorCargaFractales = false;
  errorCargaStrikes = false;
  mensajeErrorFractales = '';
  mensajeErrorStrikes = '';
  errorInestabilidadCm = false;
  //tablas fractales
  displayedColumns: string[] = ['level', 'done', 'tier', 'ar', 'name', 'nameEs', 'idDaily', 'idRec'];
  displayedColumnsCm: string[] = ['level', 'tier', 'ar', 'name', 'nameEs', 'inestab1', 'inestab2', 'inestab3'];
  dataSource = new MatTableDataSource(Fractales);
  dataSourceCm = new MatTableDataSource(this.fractalesCm);
  dataSourceRec = new MatTableDataSource(this.fractRec);
  dataSourceDaily = new MatTableDataSource(this.merged);
  renderedData: any[] = [];
  isNewTier(index: number): boolean {
    // Devuelve true si el indice es 0 o si el tier del elemento actual es diferente al del elemento anterior
    if (index === 0 || !this.renderedData[index] || !this.renderedData[index - 1]) {
      return false;
    }
    return this.renderedData[index].tier !== this.renderedData[index - 1].tier;
  }
  updateRenderedData(): void {
    // Guarda los datos en el orden actual de visualizacion de la tabla (incluyendo sort)
    const sort = this.dataSourceDaily.sort;
    if (sort) {
      this.renderedData = this.dataSourceDaily.sortData(
        this.dataSourceDaily.filteredData,
        sort
      );
    } else {
      this.renderedData = this.dataSourceDaily.data;
    }
  }
  //Para filtrar en las tablas https://www.freakyjolly.com/angular-material-table-custom-filter-using-select-box/
  filterValues: any = {};
  filterSelectObj: any = [];
  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  @ViewChild("sort2", { static: false }) sort2!: MatSort;
  @ViewChild("sort3", { static: false }) sort3!: MatSort;
  @ViewChild("sort4", { static: false }) sort4!: MatSort;

  // Para las rutas a las pestañas de diarias
  selectedTabIndex: number = 0;
  tabs: string[] = ['Cámara del brujo', 'Fractales', 'Semanales', 'Más diarias'];
  routeMap: { [key: string]: string } = {
    'wizardvault': 'Cámara del brujo',
    'fractales': 'Fractales',
    'semanales': 'Semanales',
    'otros': 'Más diarias'
  };

  // Para declarar los setIntervals y borrarlos
  intervalIds: ReturnType<typeof setInterval>[] = [];
  // Para declarar los setTimeouts y borrarlos
  timeoutIds: ReturnType<typeof setTimeout>[] = [];

  // Weekly
  STRIKE_NAMES_EOD = ['AH', 'XJJ', 'KO', 'HT', 'OLC'];
  STRIKE_NAMES_SOTO = ['CO', 'Febe'];
  SOTO_CONVERGENCIA = ['Caballero demonio / Demon Knight', 'Tristeza / Sorrow', 'Hermana del infierno / Hell Sister', 'Alaterrible / Dreadwing', 'Umbriel'];
  JW_CONVERGENCIA = ['Decima', 'Greer', 'Ura'];
  RAID_ENCOUNTERS = ['SP', 'Fraenir', 'Twins', 'Whisper', 'Boneskinner', 'CW', 'AH', 'XJJ', 'KO', 'HT', 'CO', 'Febe', 'OLC', 'Kela'];
  weeklyEoDStrikes: { index: number, name: string }[] = [];
  weeklyEoDStrikesDoneIds: Set<number> = new Set();
  weeklySotoStrikes: { index: number, name: string }[] = [];
  weeklySotoStrikesDoneIds: Set<number> = new Set();
  weeklySotoCMConvergencia: { index: number, name: string }[] = [];
  weeklySotoCMConvergenciaDoneIds: Set<number> = new Set();
  weeklyJWCMConvergencia: { index: number, name: string }[] = [];
  weeklyJWCMConvergenciaDoneIds: Set<number> = new Set();
  weeklyWvW: { id: number, name: string; current: number; max: number; done: boolean }[] = [];
  wvwRank: any;
  weeklyRiftHuntingSoto: { id: number, name: string; current: number; max: number; done: boolean }[] = [];
  weeklyRiftHuntingJw: { id: number, name: string; current: number; max: number; done: boolean }[] = [];
  weeklyRiftHuntingVoe: { id: number, name: string; current: number; max: number; done: boolean }[] = [];
  weeklyRaidEncounters: { index: number, name: string }[] = [];
  weeklyRaidEncountersDoneIds: Set<number> = new Set();

  copiados: Record<string, boolean> = {};

  convergenciasAchievements = new Map<number, Achievement>();
  quickplayWeeklyAchievements = new Map<number, Achievement>();

  constructor(private dailyService: DailyService, private route: ActivatedRoute, private router: Router, private refreshService: RefreshService) {

    this.filterSelectObj = [
      {
        name: 'LEVEL',
        columnProp: 'level',
        options: []
      },
      {
        name: 'TIER',
        columnProp: 'tier',
        options: []
      },
      {
        name: 'AR',
        columnProp: 'ar',
        options: []
      },
      {
        name: 'NAME',
        columnProp: 'name',
        options: []
      },
      {
        name: 'NOMBRE',
        columnProp: 'nameEs',
        options: []
      },
      {
        name: 'ID DAILY',
        columnProp: 'idDaily',
        options: []
      },
      {
        name: 'ID REC',
        columnProp: 'idRec',
        options: []
      }
    ]

  }

  async ngOnInit() {

    // Para hacer el routing a las pestañas de la tabla
    this.route.paramMap.subscribe(params => {
      const tab = params.get('tab');
      if (tab) {
        this.selectedTabIndex = this.getTabIndex(tab);
      }
    });

    this.getWallet();

    // Wizard's Vault
    this.loadWizardVault();
    this.loadDailyWizardVault();
    this.loadWeeklyWizardVault();
    this.loadSpecialWizardVault();

    // Fractales
    this.loadDailyFractals();

    this.pactSupply = this.getPactSupply();
    this.programarActualizacionPsnaDiaria();
    this.bestWeek = this.dailyService.bestMapBonusRewardWeekNumber;
    this.mapBonusRewardweekNumber = this.getMapBonusRewardWeekNumber(); //numero de semana de map bonus reward entre 1-8

    this.tokenSupply = this.getTokenSupply();
    this.dailyActivity = this.getDailyActivity();
    this.getDailyOrnateKey();
    this.recordatorio = this.getRecordatorio();

    this.anomalia = this.getAnomaly();
    this.fractalIncursion = this.getFractalIncursion();
    const id1 = setInterval(() => {
      this.anomalia = this.getAnomaly();
      this.fractalIncursion = this.getFractalIncursion();
    }, 1 * 60 * 1000)
    this.intervalIds.push(id1);

    this.getMaterials();
    this.getDailyCraft();
    const id2 = setInterval(() => {
      this.getMaterials();
      this.getDailyCraft();
    }, 10 * 60 * 1000)
    this.intervalIds.push(id2);

    this.getDailyHeroChoiceChest();
    this.getDailyWorldBoss();
    const id3 = setInterval(() => {
      this.getDailyHeroChoiceChest();
      this.getDailyWorldBoss();
    }, 10 * 60 * 1000)
    this.intervalIds.push(id3);

    // Daily Raid Bounty
    const dailyStrikesCompleted = await this.loadDailyStrike();
    if (!dailyStrikesCompleted) {
      const id5 = setInterval(async () => {
        const completed = await this.loadDailyStrike();
        if (completed) {
          clearInterval(id5);
          this.intervalIds = this.intervalIds.filter(id => id !== id5);
        }
      }, 10 * 60 * 1000);
      this.intervalIds.push(id5);
    }

    // Weekly
    this.getWeeklyRaidEncounters();
    this.loadQuickplayWeeklyAchievements();
    this.loadWeeklyWvW();
    this.loadWeeklyRiftHuntingSoto();
    this.loadWeeklyRiftHuntingJw();
    this.loadWeeklyRiftHuntingVoe();

    // Convergencias
    this.actualizarConvergencias();
    const id4 = setInterval(() => {
      this.actualizarConvergencias();
    }, 2 * 60 * 1000)
    this.intervalIds.push(id4);
    await this.loadConvergenciasAchievements();
    this.loadWeeklyConvergenciaCMSoto();
    this.loadWeeklyConvergenciaCMJW();

    // Ver fractales y raids diarias
    console.log('Daily Fractal-Raid:', this.dailyInfoF)

    this.filterSelectObj.filter((o: any) => {
      o.options = this.getFilterObject(Fractales, o.columnProp);
      o.options.sort((a: any, b: any) => a > b ? 1 : -1);
    });
    this.dataSource.filterPredicate = this.createFilter();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSourceRec.sort = this.sort2;
    this.dataSourceDaily.sort = this.sort3;
    this.updateRenderedData();
    this.dataSourceCm.sort = this.sort4;
  }

  ngOnDestroy() {
    this.intervalIds.forEach(id => clearInterval(id));
    this.timeoutIds.forEach(id => clearTimeout(id));
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
    this.router.navigate(['/diaria', routeName]);
  }

  async loadDailyFractals() {
    this.loading = true;
    this.errorCargaFractales = false;
    this.mensajeErrorFractales = '';

    try {
      this.dailyFractalsId = await this.dailyService.getDailyFractalsId().toPromise();
      this.getDailyFractals();
    } catch (error) {
      console.error('Error obteniendo los IDs de fractales:', error);
      this.loading = false;
      this.errorCargaFractales = true;
      this.mensajeErrorFractales = 'No se han podido obtener los fractales diarios de la API.';
    }
  }

  getDailyFractals() {
    this.dailyIdsF = '';
    const dailyFractals = this.dailyFractalsId.achievements;
    this.dailyIdsF = dailyFractals.join(',');
    this.getDailyInfoF(this.dailyIdsF, "fractals");
  }

  async loadWizardVault() {
    this.wizardVault = await this.dailyService.getWizardVault().toPromise();
    this.fechaFormateada = this.formatFechaSegunTimezone(this.wizardVault.end, false);
  }

  async loadDailyWizardVault() {
    try {
      this.dailyWizardVault = await this.dailyService.getDailyWizardVault().toPromise();
      console.log('Daily Wizard:', this.dailyWizardVault);
    } catch (error) {
      console.error('Error cargando Daily Wizard Vault:', error);
    } finally {
      this.loadingDailyWizard = false;
    }
  }

  async loadWeeklyWizardVault() {
    try {
      this.weeklyWizardVault = await this.dailyService.getWeeklyWizardVault().toPromise();
      console.log('Weekly Wizard:', this.weeklyWizardVault);
    } catch (error) {
      console.error('Error cargando Weekly Wizard Vault:', error);
    } finally {
      this.loadingWeeklyWizard = false;
    }
  }

  async loadSpecialWizardVault() {
    try {
      this.specialWizardVault = await this.dailyService.getSpecialWizardVault().toPromise();
      console.log('Special Wizard:', this.specialWizardVault);
    } catch (error) {
      console.error('Error cargando Special Wizard Vault:', error);
    } finally {
      this.loadingSpecialWizard = false;
    }
  }

  getDailyInfoF(ids: string, tipo: string) {
    this.dailyService.getDailyInfo(ids).subscribe((dailyInfo: any) => {
      //console.log(dailyInfo)
      if (tipo === "fractals") {
        this.dailyInfoF.fractals = dailyInfo;
        this.searchFractalIds();
        this.getDailyInestabilidadCm();
        // FIX para cuando fractal 95 no esta en API y es diario
        // if (this.dailyInfoF.fractals.length === 11){
        //   ids = ids + "8784,8736,8729,8739";
        // }
        this.getFractalsDone(ids);
        this.getFractalRank();
        this.loading = false;
      }
      else if (tipo === "strike") {
        this.dailyInfoF.strike = dailyInfo;
        // //metemos en una variable el icono de la strike porque solo lo lleva la de IBS y no la de EoD
        // for (let i = 0; i < dailyInfo.length; i++){
        //   if (dailyInfo[i].hasOwnProperty('icon')){
        //     this.dailyStrikeIcon = dailyInfo[i].icon;
        //     break;
        //   }
        // }

        // Me quedo con el nombre de la strike quitando el prefijo
        this.dailyInfoF.strike = this.dailyInfoF.strike.map((s: any) => ({
          ...s,
          name: s.name?.split(':')[1]?.trim() || ''
        }));
        // Ordeno por id
        // this.dailyInfoF.strike = this.dailyInfoF.strike.sort((a: any, b: any) => a.id - b.id);
        // Ordeno por alas
        const normalize = (str: string) =>
          str
            ?.trim()
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
        const orderMap = new Map(
          OrdenReferenciaEsp.map((name, index) => [normalize(name), index])
        );
        this.dailyInfoF.strike = this.dailyInfoF.strike.sort((a: any, b: any) => {
          const indexA = orderMap.get(normalize(a.name)) ?? Number.MAX_SAFE_INTEGER;
          const indexB = orderMap.get(normalize(b.name)) ?? Number.MAX_SAFE_INTEGER;
          return indexA - indexB;
        });

        this.dailyRaidBountiesString = "Daily Raid Bounties: " + this.dailyInfoF.strike.map((s: any) => s.name).join(', ');

        this.loading2 = false;
      }
    },
      (error) => {
        console.error(`Error obteniendo información diaria (${tipo}):`, error);
        if (tipo === 'fractals') {
          this.errorCargaFractales = true;
          this.mensajeErrorFractales = 'No se han podido cargar los datos de fractales.';
          this.loading = false;
        }
        if (tipo === 'strike') {
          this.errorCargaStrikes = true;
          this.mensajeErrorStrikes = 'No se han podido cargar los datos de las strikes.';
          this.loading2 = false;
        }
      })
  }

  getPactSupply() {
    this.pactSupplyUpdate = this.dailyService.esHorarioInvierno()
      ? "*Location updates automatically every day at 9.00 UTC+1."
      : "*Location updates automatically every day at 10.00 UTC+2.";
    return this.dailyService.getPactSupply();
  }

  getTokenSupply() {
    return this.dailyService.getTokenSupply();
  }

  getDailyCraft() {
    this.dailyService.getDailyCraft().subscribe((dailyCraft: any) => {
      this.dailyCraft = dailyCraft;
      //console.log(this.dailyCraft)

      //Inicializo a false el array
      for (let i = 0; i < 5; i++) {
        this.dailyIdsCraftChecked[i] = false;
      }

      if (this.dailyCraft.includes("charged_quartz_crystal")) {
        this.dailyIdsCraftChecked[0] = true;
      }
      if (this.dailyCraft.includes("glob_of_elder_spirit_residue")) {
        this.dailyIdsCraftChecked[1] = true;
      }
      if (this.dailyCraft.includes("lump_of_mithrilium")) {
        this.dailyIdsCraftChecked[2] = true;
      }
      if (this.dailyCraft.includes("spool_of_silk_weaving_thread")) {
        this.dailyIdsCraftChecked[3] = true;
      }
      if (this.dailyCraft.includes("spool_of_thick_elonian_cord")) {
        this.dailyIdsCraftChecked[4] = true;
      }
      // console.log(this.dailyCraft)
      // for (let i = 0; i < this.dailyIdsCraftChecked.length; i++){
      //   console.log(this.dailyIdsCraftChecked[i])
      // }
    })
  }

  getMaterials() {
    this.dailyService.getMaterials().subscribe((materials: any) => {

      const ChargedQuartzCrystal = 43772;
      const GlobOfElderSpiritResidue = 46744;
      const LumpOfMithrilium = 46742;
      const SpoolOfSilkWeavingThread = 46740;
      const SpoolOfThickElonianCord = 46745;

      for (let i = 0; i < materials.length; i++) {
        if (materials[i].id === ChargedQuartzCrystal) {
          this.materials[0] = materials[i].count
        }
        if (materials[i].id === GlobOfElderSpiritResidue) {
          this.materials[1] = materials[i].count
        }
        if (materials[i].id === LumpOfMithrilium) {
          this.materials[2] = materials[i].count
        }
        if (materials[i].id === SpoolOfSilkWeavingThread) {
          this.materials[3] = materials[i].count
        }
        if (materials[i].id === SpoolOfThickElonianCord) {
          this.materials[4] = materials[i].count
        }
      }
    })
  }

  getDailyHeroChoiceChest() {
    this.dailyService.getDailyHeroChoiceChest().subscribe((dailyHeroChoiceChest: any) => {
      this.dailyHeroChoiceChest = dailyHeroChoiceChest;

      //Inicializo a false el array
      for (let i = 0; i < this.dailyHeroChoiceChesting.length; i++) {
        this.dailyIdsHeroChoiceChestChecked[i] = false;
      }
      this.dailyIdsHeroChoiceChestConvergenceChecked = false;

      // Compruebo si los cofres estan hechos
      if (this.dailyHeroChoiceChest.includes("verdant_brink_heros_choice_chest")) {
        this.dailyIdsHeroChoiceChestChecked[0] = true;
      }
      if (this.dailyHeroChoiceChest.includes("tangled_depths_heros_choice_chest")) {
        this.dailyIdsHeroChoiceChestChecked[1] = true;
      }
      if (this.dailyHeroChoiceChest.includes("auric_basin_heros_choice_chest")) {
        this.dailyIdsHeroChoiceChestChecked[2] = true;
      }
      if (this.dailyHeroChoiceChest.includes("dragons_stand_heros_choice_chest")) {
        this.dailyIdsHeroChoiceChestChecked[3] = true;
      }
      if (this.dailyHeroChoiceChest.includes("crystal_oasis_heros_choice_chest")) {
        this.dailyIdsHeroChoiceChestChecked[4] = true;
      }
      if (this.dailyHeroChoiceChest.includes("elon_riverlands_heros_choice_chest")) {
        this.dailyIdsHeroChoiceChestChecked[5] = true;
      }
      if (this.dailyHeroChoiceChest.includes("the_desolation_heros_choice_chest")) {
        this.dailyIdsHeroChoiceChestChecked[6] = true;
      }
      if (this.dailyHeroChoiceChest.includes("domain_of_vabbi_heros_choice_chest")) {
        this.dailyIdsHeroChoiceChestChecked[7] = true;
      }
      if (this.dailyHeroChoiceChest.includes("seitung_province_heros_choice_chest")) {
        this.dailyIdsHeroChoiceChestChecked[8] = true;
      }
      if (this.dailyHeroChoiceChest.includes("new_kaineng_city_heros_choice_chest")) {
        this.dailyIdsHeroChoiceChestChecked[9] = true;
      }
      if (this.dailyHeroChoiceChest.includes("echovald_wilds_heros_choice_chest")) {
        this.dailyIdsHeroChoiceChestChecked[10] = true;
      }
      if (this.dailyHeroChoiceChest.includes("dragons_end_heros_choice_chest")) {
        this.dailyIdsHeroChoiceChestChecked[11] = true;
      }
      if (this.dailyHeroChoiceChest.includes("gyala_delve_heros_choice_chest")) {
        this.dailyIdsHeroChoiceChestChecked[12] = true;
      }
      if (this.dailyHeroChoiceChest.includes("skywatch_archipelago_heros_choice_chest")) {
        this.dailyIdsHeroChoiceChestChecked[13] = true;
      }
      if (this.dailyHeroChoiceChest.includes("amnytas_heros_choice_chest")) {
        this.dailyIdsHeroChoiceChestChecked[14] = true;
      }
      if (this.dailyHeroChoiceChest.includes("inner_nayos_heros_choice_chest")) {
        this.dailyIdsHeroChoiceChestChecked[15] = true;
      }
      if (this.dailyHeroChoiceChest.includes("citadel_of_zakiros_heros_choice_chest")) {
        this.dailyIdsHeroChoiceChestChecked[16] = true;
      }
      if (this.dailyHeroChoiceChest.includes("wild_island_heros_choice_chest")) {
        this.dailyIdsHeroChoiceChestChecked[17] = true;
      }
      if (this.dailyHeroChoiceChest.includes("convergence_heros_choice_chest")) {
        this.dailyIdsHeroChoiceChestConvergenceChecked = true;
      }
      // console.log(this.dailyHeroChoiceChest)
      // for (let i = 0; i < this.dailyIdsHeroChoiceChestChecked.length; i++){
      //   console.log(this.dailyIdsHeroChoiceChestChecked[i])
      // }
    })
  }

  getDailyWorldBoss() {
    this.dailyService.getDailyWorldBoss().subscribe((dailyWB: any) => {
      this.dailyWorldBoss = dailyWB;

      // Lista de IDs de bosses en el mismo orden que dailyWorldBossing
      const bossIds = [
        "svanir_shaman_chief",
        "fire_elemental",
        "shadow_behemoth",
        "great_jungle_wurm",
        "modniir_ulgoth",
        "admiral_taidha_covington",
        "the_shatterer",
        "megadestroyer",
        "inquest_golem_mark_ii",
        "claw_of_jormag",
        "triple_trouble_wurm",
        "karka_queen",
        "tequatl_the_sunless",
        "drakkar",
        "mists_and_monsters_titans"
      ];

      // Detectar bosses desconocidos que vengan de la api
      const unknownBosses = this.dailyWorldBoss.filter(
        (bossName: string) => !bossIds.includes(bossName)
      );

      // Si hay alguno, se agrega
      unknownBosses.forEach((bossName: string) => {
        console.warn(`World Boss desconocido detectado: ${bossName}`);
        bossIds.push(bossName);
        this.dailyWorldBossing.push(bossName);
      });

      //Inicializo a false el array
      this.dailyIdsWorldBossChecked = this.dailyWorldBossing.map(() => false);

      // Compruebo si los bosses estan hechos
      bossIds.forEach((bossName, index) => {
        if (this.dailyWorldBoss.includes(bossName)) {
          this.dailyIdsWorldBossChecked[index] = true;
        }
      });

      // console.log(this.dailyWorldBoss)
      // this.dailyWorldBossing.forEach((boss, i) => {
      //   console.log(`${boss}: ${this.dailyIdsWorldBossChecked[i]}`);
      // });
    })
  }

  async loadDailyStrike(): Promise<boolean> {
    try {
      this.dailyStrike = await this.getDailyRaidBountiesId();
      await this.getDailyStrike();
      return this.dailyStrikeDoneIds.size === 4;
    } catch (err) {
      console.warn('getDailyRaidBountiesId failed or not found:', err);
      this.dailyStrike = null;
      await this.getDailyStrike();
      return false;
    }
  }

  async getDailyRaidBountiesId() {
    return await this.dailyService.getDailyRaidBountiesId().toPromise();
  }

  async getDailyStrikeDone(allStrikeIds: string): Promise<void> {
    try {
      const data = await this.dailyService
        .getDailyStrikeDone(allStrikeIds)
        .toPromise();
      // Guardamos solo los IDs que estan completados (done: true)
      const doneIds = data.filter(ach => ach.done).map(ach => ach.id);
      this.dailyStrikeDoneIds = new Set(doneIds);

    } catch {
      // Fallback: lista vacia (nadie marcado)
      console.warn('Raid Bounties diarios sin hacer')
      this.dailyStrikeDoneIds = new Set();
    }
  }

  async getDailyStrike() {
    // Proteger contra llamadas cuando `dailyStrike` no existe (404 o error previo)
    if (!this.dailyStrike || !Array.isArray(this.dailyStrike.achievements)) {
      console.warn("'raid encounter' no disponible, omitiendo getDailyStrike()");
      this.dailyIdsS = '';
      this.dailyStrikeIcon = '';
      this.dailyStrikeDoneIds = new Set();
      return;
    }

    // Resetear ids antes de concatenar para evitar duplicados en reintentos
    this.dailyIdsS = '';
    const dailyStrike = this.dailyStrike.achievements;
    this.dailyIdsS = dailyStrike.join(',');
    this.getDailyInfoF(this.dailyIdsS, "strike");
    this.dailyStrikeIcon = this.dailyStrike.icon || '';
    await this.getDailyStrikeDone(this.dailyIdsS);
  }

  getAnomaly() {
    return this.dailyService.getAnomaliaLey();
  }

  getFractalIncursion() {
    return this.dailyService.getFractalIncursion();
  }

  actualizarConvergencias() {
    this.convergenciaSoto = this.getConvergenciaSoto();
    this.convergenciaJw = this.getConvergenciaJw();
    this.convergenciaCopy = this.convergenciaSoto + "\n" + this.convergenciaJw;
  }

  getConvergenciaSoto() {
    return this.dailyService.getConvergenciaSoto();
  }

  getConvergenciaJw() {
    return this.dailyService.getConvergenciaJw();
  }

  async loadConvergenciasAchievements() {
    try {
      const achievements = await this.dailyService.getAchievements(
        Object.values(CONVERGENCIAS_ACHIEVEMENTS)
      );

      this.convergenciasAchievements = new Map(
        achievements.map(a => [a.id, a])
      );

      const sotoWeekly = this.convergenciasAchievements.get(
        CONVERGENCIAS_ACHIEVEMENTS.convergenciaSotoWeekly.id
      );
      this.convergenciaSotoWeekly = sotoWeekly ? [sotoWeekly] : [];

      const jwWeekly = this.convergenciasAchievements.get(
        CONVERGENCIAS_ACHIEVEMENTS.convergenciaJwWeekly.id
      );
      this.convergenciaJwWeekly = jwWeekly ? [jwWeekly] : [];

      const soto100 = this.convergenciasAchievements.get(
        CONVERGENCIAS_ACHIEVEMENTS.convergenciaSoto100.id
      );
      this.convergenciaSoto100 = soto100 ? [soto100] : [];

      const soto150 = this.convergenciasAchievements.get(
        CONVERGENCIAS_ACHIEVEMENTS.convergenciaSoto150.id
      );
      this.convergenciaSoto150 = soto150 ? [soto150] : [];

      const jw50 = this.convergenciasAchievements.get(
        CONVERGENCIAS_ACHIEVEMENTS.convergenciaJw50.id
      );
      this.convergenciaJw50 = jw50 ? [jw50] : [];

      const jw50Rep = this.convergenciasAchievements.get(
        CONVERGENCIAS_ACHIEVEMENTS.convergenciaJw50Rep.id
      );
      this.convergenciaJw50Rep = jw50Rep ? [jw50Rep] : [];

    } finally {
      this.loadingConvergencias = false;
    }
  }

  async loadQuickplayWeeklyAchievements() {
    try {
      const achievements = await this.dailyService.getAchievements(
        Object.values(QUICKPLAY_WEEKLY_ACHIEVEMENTS)
      );

      this.quickplayWeeklyAchievements = new Map(
        achievements.map(a => [a.id, a])
      );

      const fir = this.quickplayWeeklyAchievements.get(
        QUICKPLAY_WEEKLY_ACHIEVEMENTS.fractalInfiniteRecursion.id
      );
      this.fractalInfiniteRecursion = fir ? [fir] : [];

      const fq = this.quickplayWeeklyAchievements.get(
        QUICKPLAY_WEEKLY_ACHIEVEMENTS.weeklyFractalQuickplay.id
      );
      this.weeklyFractalQuickplay = fq ? [fq] : [];

      const qre = this.quickplayWeeklyAchievements.get(
        QUICKPLAY_WEEKLY_ACHIEVEMENTS.weeklyQuickplayRaidEncounter.id
      );
      this.weeklyQuickplayRaidEncounter = qre ? [qre] : [];

    } finally {
      this.loadingQuickplayWeekly = false;
    }
  }

  // async loadConvergencias() {
  //   await Promise.all([
  //     this.loadConvergenciaSotoWeekly(),
  //     this.loadConvergenciaJwWeekly(),
  //     this.loadConvergenciaSoto100(),
  //     this.loadConvergenciaSoto150(),
  //     this.loadConvergenciaJw50(),
  //     this.loadConvergenciaJw50Rep()
  //   ]);
  // }

  // async loadConvergenciaSotoWeekly() {
  //   this.convergenciaSotoWeekly = await this.dailyService.getConvergenciaSotoWeekly();
  // }

  // async loadConvergenciaJwWeekly() {
  //   this.convergenciaJwWeekly = await this.dailyService.getConvergenciaJwWeekly();
  // }

  // async loadConvergenciaSoto100() {
  //   try {
  //     this.convergenciaSoto100 = await this.dailyService.getConvergenciaSoto100();
  //   } finally {
  //     this.loadingConvergenciaSoto100 = false;
  //   }
  // }

  // async loadConvergenciaSoto150() {
  //   try {
  //     this.convergenciaSoto150 = await this.dailyService.getConvergenciaSoto150();
  //   } finally {
  //     this.loadingConvergenciaSoto150 = false;
  //   }
  // }

  // async loadConvergenciaJw50() {
  //   try {
  //     this.convergenciaJw50 = await this.dailyService.getConvergenciaJw50();
  //   } finally {
  //     this.loadingConvergenciaJw50 = false;
  //   }
  // }

  // async loadConvergenciaJw50Rep() {
  //   try {
  //     this.convergenciaJw50Rep = await this.dailyService.getConvergenciaJw50Rep();
  //   } finally {
  //     this.loadingConvergenciaJw50Rep = false;
  //   }
  // }

  // async loadWeeklyQuickplayRaidEncounter(){
  //   this.weeklyQuickplayRaidEncounter = await this.dailyService.getWeeklyQuickplayRaidEncounter();
  // }

  // async loadWeeklyFractalQuickplay(){
  //   this.weeklyFractalQuickplay = await this.dailyService.getWeeklyFractalQuickplay();
  // }

  // async loadFractalInfiniteRecursion(){
  //   this.fractalInfiniteRecursion = await this.dailyService.getFractalInfiniteRecursion();
  // }

  getDailyActivity() {
    return this.dailyService.getDailyActivity();
  }

  async getDailyOrnateKey() {
    this.dailyOrnateKey = await this.dailyService.getDailyOrnateKey();
  }

  getRecordatorio() {
    return this.dailyService.getRecordatorio();
  }

  searchFractalIds() {
    let obj: any = {}
    //Recomendados
    for (let i = 0; i < this.dailyInfoF.fractals.length; i++) {
      if (this.dailyInfoF.fractals[i].name.includes("recomendado")) {
        obj = this.fractales.find(o => o.idRec === this.dailyInfoF.fractals[i].id);
        this.fractRec.push(obj);
      }
      else if (this.dailyInfoF.fractals[i].name.includes("rango 1")) {
        obj = this.fractales.filter(o => o.idDaily === this.dailyInfoF.fractals[i].id);
        this.fractDaily1.push(obj);
      }
      else if (this.dailyInfoF.fractals[i].name.includes("rango 2")) {
        obj = this.fractales.filter(o => o.idDaily === this.dailyInfoF.fractals[i].id);
        this.fractDaily2.push(obj);
      }
      else if (this.dailyInfoF.fractals[i].name.includes("rango 3")) {
        obj = this.fractales.filter(o => o.idDaily === this.dailyInfoF.fractals[i].id);
        this.fractDaily3.push(obj);
      }
      else if (this.dailyInfoF.fractals[i].name.includes("rango 4")) {
        obj = this.fractales.filter(o => o.idDaily === this.dailyInfoF.fractals[i].id);
        //filter en vez de find para que devuelva todos los casos porque hay fractales que tienen distintos niveles en el mismo tier y comparten id
        this.fractDaily4.push(obj);
      }
    }

    // FIX para cuando fractal 95 no esta en API y es diario
    // if (this.dailyInfoF.fractals.length === 11){
    //   obj = this.fractales.filter(o => o.idDaily === 8784);
    //   this.fractDaily1.push(obj);
    //   obj = this.fractales.filter(o => o.idDaily === 8736);
    //   this.fractDaily2.push(obj);
    //   obj = this.fractales.filter(o => o.idDaily === 8729);
    //   this.fractDaily3.push(obj);
    //   obj = this.fractales.filter(o => o.idDaily === 8739);
    //   this.fractDaily4.push(obj);
    // }

    // for (let i = 0; i <= 2; i++){
    //   obj = this.fractales.find(o => o.idRec === this.dailyInfoF.fractals[i].id);
    // //   console.log('id ', this.dailyInfoF.fractals[i].id)
    // //   console.log('fracc ', obj)
    //   this.fractRec.push(obj)
    // }
    // // console.log('aaa ', this.fractRec)
    // //Daily1
    // for (let i = 3; i <= 6; i++){
    //   obj = this.fractales.filter(o => o.idDaily === this.dailyInfoF.fractals[i].id);
    //   this.fractDaily1.push(obj)
    // }
    // //Daily2
    // for (let i = 7; i <= 10; i++){
    //   obj = this.fractales.filter(o => o.idDaily === this.dailyInfoF.fractals[i].id);
    //   this.fractDaily2.push(obj)
    // }
    // //Daily3
    // for (let i = 11; i <= 14; i++){
    //   obj = this.fractales.filter(o => o.idDaily === this.dailyInfoF.fractals[i].id);
    //   this.fractDaily3.push(obj)
    // }

    //SIN ESTAS DOS LINEAS NO FUNCIONA LA TABLA DE RECOMENDADOS
    this.dataSourceRec = new MatTableDataSource(this.fractRec);
    this.dataSourceRec.sort = this.sort2;
    //SIN ESTAS LINEAS NO FUNCIONA LA TABLA DE DIARIOS
    this.fractDailys = [...this.fractDaily1, ...this.fractDaily2, ...this.fractDaily3, ...this.fractDaily4]
    this.merged = [].concat.apply([], this.fractDailys); //esto es porque fractDailys es un array de arrays y necesito un array
    this.dataSourceDaily = new MatTableDataSource(this.merged);
    this.dataSourceDaily.sort = this.sort3;
    this.updateRenderedData();

    //Meto en un string los recomendados y diarios para el boton copiar
    let fractDailyString: string = "Diarios T4: ";
    let fractRecString: string = "Recomendados: ";
    if (this.fractDaily4.length > 0) {
      fractDailyString += this.fractDaily4
        .sort((a: any, b: any) => b[0].level - a[0].level) // descendente
        .map((f: any) => `${f[0].level} ${f[0].nameEs}`)
        .join(", ") + ". ";
    }
    if (this.fractRec.length > 0) {
      fractRecString += this.fractRec
        .sort((a: any, b: any) => b.level - a.level) // descendente
        .map((f: any) => `${f.level} ${f.nameEs}`)
        .join(", ") + ".";
    }
    this.fractalesRecDailyString = fractDailyString + "\n" + fractRecString;

    // console.log(this.fractRec)
    // console.log(this.fractDaily1)
    // console.log(this.fractDaily2)
    // console.log(this.fractDaily3)
    // console.log(this.fractDailys)
  }

  getDailyInestabilidadCm() {
    // Busco las inestabilidades diarias de los cms
    this.dailyService.getInestabilidadCm().subscribe((inestabilidadCm: any) => {
      const ahora = new Date();
      // Determinar el dia efectivo segun el corte horario: 1:00 en invierno, 2:00 en verano
      // Construir un objeto `cutoff` con hora y minutos para comparar hora + minutos correctamente
      const corteHora = this.dailyService.esHorarioInvierno() ? 1 : 2;
      const cutoff = new Date(ahora.getFullYear(), ahora.getMonth(), ahora.getDate(), corteHora, 0, 0);
      let fechaEfectiva = new Date(ahora);
      // Si la hora actual (incluyendo minutos) es anterior al cutoff, usar el dia anterior
      // Restar un dia mediante milisegundos evita ambigüedades con setDate
      if (ahora.getTime() < cutoff.getTime()) {
        fechaEfectiva = new Date(ahora.getTime() - 24 * 60 * 60 * 1000);
      }
      const diaNum = Math.floor(this.diaNumeroAño(fechaEfectiva)) - 1; // 0-based (dia del año)

      const inst = inestabilidadCm["instabilities"];
      const nombres: InstabilityDetail[] = inestabilidadCm["instability_details"];

      // Segun la API: el indice es 0-365 (longitud array 366) y en años no bisiestos
      // hay que "saltar" el indice 59 (29-feb). Por tanto:
      const sample = inst["95"] || [];
      // Comprobar si el año de la fecha efectiva es bisiesto
      const isLeap = this.leapYear(fechaEfectiva.getFullYear());
      let apiIndex = diaNum;
      if (!isLeap && diaNum >= 59) {
        apiIndex = diaNum + 1; // mapear la posicion tras 28-feb al indice que incluye 29-feb
      }

      // Clamp: limitar apiIndex al rango valido [0, sample.length-1]
      // Esto evita accesos fuera de limites si la API no tiene suficientes entradas
      // (por ejemplo datos incompletos o errores en la fuente)
      apiIndex = Math.max(0, Math.min(sample.length - 1, apiIndex));

      // Cojo info de 95 96 97 98 99 100 usando apiIndex
      const hecatombe = inst["95"][apiIndex];
      const pesadilla = inst["96"][apiIndex];
      const observatorio = inst["97"][apiIndex];
      const sunqua = inst["98"][apiIndex];
      const oleaje = inst["99"][apiIndex];
      const torre = inst["100"][apiIndex];

      // Devuelve array de (numero_de_cms x 3) posiciones
      this.fractDailyInestabilidadCmEng = this.buscarInestabilidadCmNombre(nombres, hecatombe, pesadilla, observatorio, sunqua, oleaje, torre, 'en');
      this.fractDailyInestabilidadCmEsp = this.buscarInestabilidadCmNombre(nombres, hecatombe, pesadilla, observatorio, sunqua, oleaje, torre, 'es');
      this.getFractalesCm();
    },
      (error) => {
        console.error("Error al obtener inestabilidad cm: ", error);
        this.errorInestabilidadCm = true;
        // Mostrar igualmente la tabla CM
        this.dataSourceCm = new MatTableDataSource(this.fractalesCm);
        this.dataSourceCm.sort = this.sort4;
      })
  }

  getFractalesCm() {
    // Traduccion inestabilidades (ya no hace falta)
    // this.traduccionInestabCm(this.fractDailyInestabilidadCmEng);

    // Actualizo la info de cms con las inestabilidades diarias del idioma requerido
    this.actualizofractalesCmInestabCmEsp();
    // this.actualizofractalesCmInestabCmEng();

    //SIN ESTAS DOS LINEAS NO FUNCIONA LA TABLA DE CMs
    this.dataSourceCm = new MatTableDataSource(this.fractalesCm);
    this.dataSourceCm.sort = this.sort4;
  }

  traduccionInestabCm(inestabCmEng: string[]) {
    // Busco la traduccion de las inestabilidades
    let obj: any = {}
    for (let i = 0; i < inestabCmEng.length; i++) {
      obj = this.inestabCm.find(o => o.nameEng === inestabCmEng[i]);
      this.fractDailyInestabilidadCmEsp[i] = obj.nameEsp;
    }
  }

  actualizofractalesCmInestabCmEsp() {
    // Actualizo la info de cms con las inestabilidades diarias en español
    let j = 0;
    for (let i = 0; i < this.fractalesCm.length; i++) {
      this.fractalesCm[i].inestab1 = this.fractDailyInestabilidadCmEsp[j];
      j++
      this.fractalesCm[i].inestab2 = this.fractDailyInestabilidadCmEsp[j];
      j++
      this.fractalesCm[i].inestab3 = this.fractDailyInestabilidadCmEsp[j];
      j++
    }
  }

  actualizofractalesCmInestabCmEng() {
    // Actualizo la info de cms con las inestabilidades diarias en ingles
    let j = 0;
    for (let i = 0; i < this.fractalesCm.length; i++) {
      this.fractalesCm[i].inestab1 = this.fractDailyInestabilidadCmEng[j];
      j++
      this.fractalesCm[i].inestab2 = this.fractDailyInestabilidadCmEng[j];
      j++
      this.fractalesCm[i].inestab3 = this.fractDailyInestabilidadCmEng[j];
      j++
    }
  }

  getFractalsDone(ids: string) {
    // Devuelve si el fractal esta done = true/false
    this.dailyService.getFractalsDone(ids).subscribe({
      next: (apiResults: any[]) => {
        // Crear un Map para acceder rapidamente por id
        const doneMap = new Map(apiResults.map(d => [d.id, d.done]));

        // Actualizar el done del array de fractales recomendados
        this.fractRec = this.fractRec.map((fractal: { idRec: any; done: any; }) => {
          // Si el ID viene en la respuesta, actualiza done, si no, deja false
          const done = doneMap.get(fractal.idRec);
          return {
            ...fractal,
            done: done !== undefined ? done : false
          };
        });

        // Actualizar el done del array de fractales diarios
        this.merged = this.merged.map((fractal: { idDaily: any; done: any; }) => {
          // Si el ID viene en la respuesta, actualiza done, si no, deja false
          const done = doneMap.get(fractal.idDaily);
          return {
            ...fractal,
            done: done !== undefined ? done : false
          };
        });

        // Actualizar el done del array de fractales todos
        this.fractales = this.fractales.map(fractal => {
          const id = fractal.idDaily ?? fractal.idRec; // usar el que exista
          const done = doneMap.get(id);
          return {
            ...fractal,
            done: done !== undefined ? done : false
          };
        });

        // Actualizar datasources para las tablas
        this.dataSourceRec = new MatTableDataSource(this.fractRec);
        this.dataSourceRec.sort = this.sort2;
        this.dataSourceDaily = new MatTableDataSource(this.merged);
        this.dataSourceDaily.sort = this.sort3;
        this.updateRenderedData();
        this.dataSource = new MatTableDataSource(this.fractales);
        this.dataSource.sort = this.sort;
        this.dataSource.filterPredicate = this.createFilter();
      },
      error: (err) => {
        console.warn('Fractales diarios sin hacer');
        // Si falla, deja el estado actual (done = false por defecto)
        this.dataSourceRec = new MatTableDataSource(this.fractRec);
        this.dataSourceRec.sort = this.sort2;
        this.dataSourceDaily = new MatTableDataSource(this.merged);
        this.dataSourceDaily.sort = this.sort3;
        this.updateRenderedData();
        this.dataSource = new MatTableDataSource(this.fractales);
        this.dataSource.sort = this.sort;
        this.dataSource.filterPredicate = this.createFilter();
      }
    })
  }

  getFractalRank() {
    // Devuelve el rango del fractal maximo alcanzado por la cuenta
    this.dailyService.getFractalRank().subscribe({
      next: (data: any) => {
        this.fractalRank = data?.fractal_level ?? null;
      },
      error: (err) => {
        console.warn('Rango max de fractal no disponible');
        this.fractalRank = null;
      }
    });
  }

  diaNumeroAño(date: Date) {
    // Devuelve el numero del dia (1 - 366) del año
    const msDiff = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(date.getFullYear(), 0, 0);
    const dayMilliseconds = 1000 * 60 * 60 * 24;
    return msDiff / dayMilliseconds;
  }

  leapYear(year: number) {
    // devuelve si year es año bisiesto o no
    return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
  }

  buscarInestabilidadCmNombre(nombres: InstabilityDetail[], fractal95: number[], fractal96: number[], fractal97: number[], fractal98: number[], fractal99: number[], fractal100: number[], idioma: 'en' | 'es' | 'fr' | 'de') {
    let fractalInest = [
      nombres[fractal95[0]].name[idioma], nombres[fractal95[1]].name[idioma], nombres[fractal95[2]].name[idioma],
      nombres[fractal96[0]].name[idioma], nombres[fractal96[1]].name[idioma], nombres[fractal96[2]].name[idioma],
      nombres[fractal97[0]].name[idioma], nombres[fractal97[1]].name[idioma], nombres[fractal97[2]].name[idioma],
      nombres[fractal98[0]].name[idioma], nombres[fractal98[1]].name[idioma], nombres[fractal98[2]].name[idioma],
      nombres[fractal99[0]].name[idioma], nombres[fractal99[1]].name[idioma], nombres[fractal99[2]].name[idioma],
      nombres[fractal100[0]].name[idioma], nombres[fractal100[1]].name[idioma], nombres[fractal100[2]].name[idioma]
    ];
    return fractalInest;
  }

  getMapBonusRewardWeekNumber() {
    return this.dailyService.getMapBonusRewardWeekNumber();
  }

  ////////////////////////////////////// WEEKLY
  getWeeklyEoDStrikes() {
    this.dailyService.getWeeklyEoDStrikes().subscribe({
      next: (data: any) => {
        // Prepara lista visual
        this.weeklyEoDStrikes = this.STRIKE_NAMES_EOD.map((name, index) => ({
          index: index,
          name: name
        }));

        // Si no hay data, considera como no hechos
        if (!data || data.length === 0) {
          this.weeklyEoDStrikesDoneIds = new Set(); // todos como no hechos
          return;
        }

        const result = data[0];

        if (result.done === true) {
          // Todos hechos: incluir todos los indices en el Set
          this.weeklyEoDStrikesDoneIds = new Set(this.weeklyEoDStrikes.map(s => s.index));
        } else {
          // Solo los que esten en bits
          this.weeklyEoDStrikesDoneIds = new Set(result.bits || []);
        }
      },
      error: (err) => {
        this.weeklyEoDStrikes = this.STRIKE_NAMES_EOD.map((name, index) => ({
          index: index,
          name: name
        }));
        this.weeklyEoDStrikesDoneIds = new Set(); // todos no hechos
        console.warn('Weekly EoD strikes sin hacer');
      }
    });
  }

  getWeeklySotoStrikes() {
    this.dailyService.getWeeklySotoStrikes().subscribe({
      next: (data: any) => {
        // Prepara lista visual
        this.weeklySotoStrikes = this.STRIKE_NAMES_SOTO.map((name, index) => ({
          index: index,
          name: name
        }));

        // Si no hay data, considera como no hechos
        if (!data || data.length === 0) {
          this.weeklySotoStrikesDoneIds = new Set(); // todos como no hechos
          return;
        }

        const result = data[0];

        if (result.done === true) {
          // Todos hechos: incluir todos los indices en el Set
          this.weeklySotoStrikesDoneIds = new Set(this.weeklySotoStrikes.map(s => s.index));
        } else {
          // Solo los que esten en bits
          this.weeklySotoStrikesDoneIds = new Set(result.bits || []);
        }
      },
      error: (err) => {
        this.weeklySotoStrikes = this.STRIKE_NAMES_SOTO.map((name, index) => ({
          index: index,
          name: name
        }));
        this.weeklySotoStrikesDoneIds = new Set(); // todos no hechos
        console.warn('Weekly soto strikes sin hacer');
      }
    });
  }

  loadWeeklyWvW() {
    // Paso 1: Obtener los IDs de los logros de la categoria "Weekly WvW"
    this.dailyService.getWeeklyWvWId().subscribe({
      next: (categoryData: any) => {
        const idsArray: number[] = categoryData.achievements || [];
        // Si no hay logros, salir y dejar la lista vacia
        if (idsArray.length === 0) {
          this.weeklyWvW = [];
          return;
        }

        const ids = idsArray.join(','); // Convertir a string separados por coma para la API

        // Paso 2: Obtener informacion basica de los logros (nombre, tiers, etc.)
        this.dailyService.getAchievementsByIds(ids).subscribe({
          next: (basicAchievements: any[]) => {

            // Paso 3: Obtener el progreso del jugador para esos logros
            this.dailyService.getWeeklyWvW(ids).subscribe({
              next: (progressData: any[]) => {
                // Mapeamos los datos de progreso por id para facil acceso
                const progressMap = new Map<number, any>();
                progressData.forEach(p => progressMap.set(p.id, p));

                // Combinamos datos basicos y de progreso en un solo objeto
                this.weeklyWvW = basicAchievements.map(b => {
                  const progress = progressMap.get(b.id);
                  return {
                    id: b.id,
                    name: this.removePrefix(b.name),
                    current: progress?.current ?? 0,
                    max: progress?.max ?? (b.tiers?.[0]?.count ?? 0),
                    done: progress?.done ?? false
                  };
                });
              },
              error: (err) => {
                // Si la API devuelve 404 (no hay progreso del jugador para esos logros),
                // mostramos la info basica con progreso = 0
                if (err.status === 404) {
                  console.warn('Weekly WvW sin hacer');
                  this.weeklyWvW = basicAchievements.map(b => ({
                    id: b.id,
                    name: this.removePrefix(b.name),
                    current: 0,
                    max: b.tiers?.[0]?.count ?? 0,
                    done: false
                  }));
                } else {
                  console.error('Error obteniendo progreso WvW:', err);
                  this.weeklyWvW = [];
                }
              }
            });

          },
          error: (err) => {
            // Error al obtener info basica de los logros
            console.error('Error al obtener info básica WvW:', err);
            this.weeklyWvW = [];
          }
        });
      },
      error: (err) => {
        // Error al obtener los IDs de los logros de la categoria
        console.error('Error al obtener ids WvW:', err);
        this.weeklyWvW = [];
      }
    });
    this.dailyService.getWvWRank().subscribe({
      // Devuelve el rango de WvW de la cuenta
      next: (data: any) => {
        this.wvwRank = data?.wvw_rank ?? null;
      },
      error: (err) => {
        console.warn('Rango WvW no disponible');
        this.wvwRank = null;
      }
    });
  }

  loadWeeklyRiftHuntingSoto() {
    // this.dailyService.getWeeklyRiftHuntingSotoId().subscribe({
    //   next: (categoryData: any) => {
    //     const idsArray: number[] = categoryData.achievements || [];

    this.dailyService.getWeeklyRiftSotoInfo().subscribe({
      next: (manualIds: any) => {
        const idsArray: number[] = manualIds || [];

        if (idsArray.length === 0) {
          this.weeklyRiftHuntingSoto = [];
          return;
        }
        const ids = idsArray.join(',');

        this.dailyService.getAchievementsByIds(ids).subscribe({
          next: (basicAchievements: any[]) => {
            // Reordeno segun el orden de idsArray para que salgan los tres de soto arriba
            basicAchievements.sort(
              (a, b) => idsArray.indexOf(a.id) - idsArray.indexOf(b.id)
            );

            this.dailyService.getWeeklyRiftHuntingSoto(ids).subscribe({
              next: (progressData: any[]) => {
                const progressMap = new Map<number, any>();
                progressData.forEach(p => progressMap.set(p.id, p));
                // Reordeno
                progressData.sort(
                  (a, b) => idsArray.indexOf(a.id) - idsArray.indexOf(b.id)
                );

                this.weeklyRiftHuntingSoto = basicAchievements.map(b => {
                  const progress = progressMap.get(b.id);
                  return {
                    id: b.id,
                    name: this.cleanName(b.name),
                    current: progress?.current ?? 0,
                    max: progress?.max ?? (b.tiers?.[b.tiers.length - 1]?.count ?? 5),
                    done: progress?.done ?? false
                  };
                });
              },
              error: (err) => {
                if (err.status === 404) {
                  console.warn('Weekly rift soto sin hacer');
                  this.weeklyRiftHuntingSoto = basicAchievements.map(b => ({
                    id: b.id,
                    name: this.cleanName(b.name),
                    current: 0,
                    max: (b.tiers?.[b.tiers.length - 1]?.count ?? 5),
                    done: false
                  }));
                } else {
                  console.error('Error obteniendo progreso soto:', err);
                  this.weeklyRiftHuntingSoto = [];
                }
              }
            });

          },
          error: (err) => {
            console.error('Error obteniendo info básica soto:', err);
            this.weeklyRiftHuntingSoto = [];
          }
        });
      },
      error: (err) => {
        console.error('Error obteniendo ids soto:', err);
        this.weeklyRiftHuntingSoto = [];
      }
    });
  }

  loadWeeklyRiftHuntingJw() {
    this.dailyService.getWeeklyRiftHuntingJWId().subscribe({
      next: (categoryData: any) => {
        const idsArray: number[] = categoryData.achievements || [];

        if (idsArray.length === 0) {
          this.weeklyRiftHuntingJw = [];
          return;
        }

        const ids = idsArray.join(',');

        this.dailyService.getAchievementsByIds(ids).subscribe({
          next: (basicAchievements: any[]) => {

            this.dailyService.getWeeklyRiftHuntingJW(ids).subscribe({
              next: (progressData: any[]) => {
                const progressMap = new Map<number, any>();
                progressData.forEach(p => progressMap.set(p.id, p));

                this.weeklyRiftHuntingJw = basicAchievements.map(b => {
                  const progress = progressMap.get(b.id);
                  return {
                    id: b.id,
                    name: this.cleanName(b.name),
                    current: progress?.current ?? 0,
                    max: progress?.max ?? (b.tiers?.[b.tiers.length - 1]?.count ?? 5),
                    done: progress?.done ?? false
                  };
                });
              },
              error: (err) => {
                if (err.status === 404) {
                  console.warn('Weekly rift jw sin hacer');
                  this.weeklyRiftHuntingJw = basicAchievements.map(b => ({
                    id: b.id,
                    name: this.cleanName(b.name),
                    current: 0,
                    max: (b.tiers?.[b.tiers.length - 1]?.count ?? 5),
                    done: false
                  }));
                } else {
                  console.error('Error obteniendo progreso jw:', err);
                  this.weeklyRiftHuntingJw = [];
                }
              }
            });

          },
          error: (err) => {
            console.error('Error obteniendo info básica jw:', err);
            this.weeklyRiftHuntingJw = [];
          }
        });
      },
      error: (err) => {
        console.error('Error obteniendo ids jw:', err);
        this.weeklyRiftHuntingJw = [];
      }
    });
  }

  loadWeeklyRiftHuntingVoe() {
    this.dailyService.getWeeklyRiftHuntingVoeId().subscribe({
      next: (categoryData: any) => {
        const idsArray: number[] = categoryData.achievements || [];

        if (idsArray.length === 0) {
          this.weeklyRiftHuntingVoe = [];
          return;
        }

        const ids = idsArray.join(',');

        this.dailyService.getAchievementsByIds(ids).subscribe({
          next: (basicAchievements: any[]) => {

            this.dailyService.getWeeklyRiftHuntingVoe(ids).subscribe({
              next: (progressData: any[]) => {
                const progressMap = new Map<number, any>();
                progressData.forEach(p => progressMap.set(p.id, p));

                this.weeklyRiftHuntingVoe = basicAchievements.map(b => {
                  const progress = progressMap.get(b.id);
                  return {
                    id: b.id,
                    name: this.cleanName(b.name),
                    current: progress?.current ?? 0,
                    max: progress?.max ?? (b.tiers?.[b.tiers.length - 1]?.count ?? 5),
                    done: progress?.done ?? false
                  };
                });
              },
              error: (err) => {
                if (err.status === 404) {
                  console.warn('Weekly rift voe sin hacer');
                  this.weeklyRiftHuntingVoe = basicAchievements.map(b => ({
                    id: b.id,
                    name: this.cleanName(b.name),
                    current: 0,
                    max: (b.tiers?.[b.tiers.length - 1]?.count ?? 5),
                    done: false
                  }));
                } else {
                  console.error('Error obteniendo progreso voe:', err);
                  this.weeklyRiftHuntingVoe = [];
                }
              }
            });

          },
          error: (err) => {
            console.error('Error obteniendo info básica voe:', err);
            this.weeklyRiftHuntingVoe = [];
          }
        });
      },
      error: (err) => {
        console.error('Error obteniendo ids voe:', err);
        this.weeklyRiftHuntingVoe = [];
      }
    });
  }

  loadWeeklyConvergenciaCMSoto() {
    this.dailyService.getConvergenciaSotoWeeklyCM().subscribe({
      next: (data: any) => {
        // Prepara lista visual
        this.weeklySotoCMConvergencia = this.SOTO_CONVERGENCIA.map((name, index) => ({
          index: index,
          name: name
        }));

        // Si no hay data, considera como no hechos
        if (!data || data.length === 0) {
          this.weeklySotoCMConvergenciaDoneIds = new Set(); // todos como no hechos
          return;
        }

        const result = data[0];

        if (result.done === true) {
          // Todos hechos: incluir todos los indices en el Set
          this.weeklySotoCMConvergenciaDoneIds = new Set(this.weeklySotoCMConvergencia.map(s => s.index));
        } else {
          // Solo los que esten en bits
          this.weeklySotoCMConvergenciaDoneIds = new Set(result.bits || []);
        }
      },
      error: (err) => {
        this.weeklySotoCMConvergencia = this.SOTO_CONVERGENCIA.map((name, index) => ({
          index: index,
          name: name
        }));
        this.weeklySotoCMConvergenciaDoneIds = new Set(); // todos no hechos
        console.warn('Weekly SOTO CM convergencias sin hacer');
      }
    });
  }

  loadWeeklyConvergenciaCMJW() {
    this.dailyService.getConvergenciaJwWeeklyCM().subscribe({
      next: (data: any) => {
        // Prepara lista visual
        this.weeklyJWCMConvergencia = this.JW_CONVERGENCIA.map((name, index) => ({
          index: index,
          name: name
        }));

        // Si no hay data, considera como no hechos
        if (!data || data.length === 0) {
          this.weeklyJWCMConvergenciaDoneIds = new Set(); // todos como no hechos
          return;
        }

        const result = data[0];

        if (result.done === true) {
          // Todos hechos: incluir todos los indices en el Set
          this.weeklyJWCMConvergenciaDoneIds = new Set(this.weeklyJWCMConvergencia.map(s => s.index));
        } else {
          // Solo los que esten en bits
          this.weeklyJWCMConvergenciaDoneIds = new Set(result.bits || []);
        }
      },
      error: (err) => {
        this.weeklyJWCMConvergencia = this.JW_CONVERGENCIA.map((name, index) => ({
          index: index,
          name: name
        }));
        this.weeklyJWCMConvergenciaDoneIds = new Set(); // todos no hechos
        console.warn('Weekly JW CM convergencias sin hacer');
      }
    });
  }

  getWeeklyRaidEncounters() {
    this.dailyService.getWeeklyRaidEncounters().subscribe({
      next: (data: any) => {
        // Prepara lista visual
        this.weeklyRaidEncounters = this.RAID_ENCOUNTERS.map((name, index) => ({
          index: index,
          name: name
        }));

        // Si no hay data, considera como no hechos
        if (!data || data.length === 0) {
          this.weeklyRaidEncountersDoneIds = new Set(); // todos como no hechos
          return;
        }

        const result = data[0];

        if (result.done === true) {
          // Todos hechos: incluir todos los indices en el Set
          this.weeklyRaidEncountersDoneIds = new Set(this.weeklyRaidEncounters.map(s => s.index));
        } else {
          // Solo los que esten en bits
          this.weeklyRaidEncountersDoneIds = new Set(result.bits || []);
        }
      },
      error: (err) => {
        this.weeklyRaidEncounters = this.RAID_ENCOUNTERS.map((name, index) => ({
          index: index,
          name: name
        }));
        this.weeklyRaidEncountersDoneIds = new Set(); // todos no hechos
        console.warn('Weekly Raid Encounters sin hacer');
      }
    });
  }

  getWallet() {
    this.dailyService.getWallet().subscribe((wallet: any) => {
      this.reliquiaFractal[0].tengo = wallet.find((o: { id: number; value: number }) => o.id === this.reliquiaFractal[0].idWallet)?.value ?? 0;
      this.reliquiaFractalPristina[0].tengo = wallet.find((o: { id: number; value: number }) => o.id === this.reliquiaFractalPristina[0].idWallet)?.value ?? 0;
      this.ufe[0].tengo = wallet.find((o: { id: number; value: number }) => o.id === this.ufe[0].idWallet)?.value ?? 0;
      this.astralAcclaim[0].tengo = wallet.find((o: { id: number; value: number }) => o.id === this.astralAcclaim[0].idWallet)?.value ?? 0;
    })
  }

  removePrefix(name: string): string {
    return name.replace(/^\([^)]*\)\s*/, '');
  }

  cleanName(name: string): string {
    // Español - remover prefijos al inicio
    name = name.replace(/^Incursiones (a la|a las|a los|al|a|en la|en las|en los|en el|en|del) /i, '');

    // Ingles - remover "Incursions" al final
    name = name.replace(/ Incursions$/i, '');

    // Capitalizar primera letra (solo si hay texto)
    return name.charAt(0).toUpperCase() + name.slice(1).trim();
  }

  openLink(url: string): void {
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  formatFechaSegunTimezone(fechaUTC: string, mesCompleto: boolean = false): string {
    // Devuelve la fecha segun el formato local de la maquina

    if (!fechaUTC) return '';

    // UTC a Date local
    const fecha = new Date(fechaUTC);

    // Idioma: español por defecto
    const locale = navigator.language || 'es-ES';

    // Texto segun idioma
    const esEspanol = locale.startsWith('es');
    const prefijo = esEspanol ? 'Acaba el' : 'End:';

    // Formato con dia, mes en letra y año
    const formatter = new Intl.DateTimeFormat(locale, {
      day: '2-digit',
      month: mesCompleto ? 'long' : 'short', // mes completo o abreviado
      year: 'numeric'
    });

    // Devolver la fecha con guiones, eliminando puntos si los hay
    let fechaFormateada = formatter
      .format(fecha)
      .replace(/\./g, '')   // elimina puntos de abreviaturas
      .replace(/\s+/g, '-'); // reemplaza espacios por guion

    return `${prefijo} ${fechaFormateada}`;
  }

  marcarCopiado(id: string) {
    this.copiados[id] = true;

    setTimeout(() => {
      this.copiados[id] = false;
    }, 1500);
  }

  programarActualizacionPsnaDiaria() {
    // Hora objetivo UTC
    // Verano: 10:00 UTC+2 = 08:00 UTC
    // Invierno: 09:00 UTC+1 = 08:00 UTC
    const psnaTimer = this.refreshService.programarActualizacion(8, 0, 5, () => {

      // El timeout ya se ha ejecutado, lo quitamos de la lista
      this.timeoutIds = this.timeoutIds.filter(id => id !== psnaTimer);

      this.pactSupply = this.getPactSupply();
      this.programarActualizacionPsnaDiaria();
    });
    this.timeoutIds.push(psnaTimer);
  }

  ///////////////////////////////// FILTER

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // Get unique values from columns to build filter
  getFilterObject(fullObj: any, key: any) {
    const uniqChk: any = [];
    fullObj.filter((obj: any) => {
      if (!uniqChk.includes(obj[key])) {
        uniqChk.push(obj[key]);
      }
      return obj;
    });
    return uniqChk;
  }

  // Called on Filter change
  filterChange(filter: any, event: any) {
    //let filterValues = {}
    this.filterValues[filter.columnProp] = event.target.value.trim().toLowerCase()
    this.dataSource.filter = JSON.stringify(this.filterValues)
  }

  // Custom filter method for Angular Material Datatable
  createFilter() {
    let filterFunction = function (data: any, filter: string): boolean {
      let searchTerms = JSON.parse(filter);
      let isFilterSet = false;
      for (const col in searchTerms) {
        if (searchTerms[col].toString() !== '') {
          isFilterSet = true;
        } else {
          delete searchTerms[col];
        }
      }

      //console.log(searchTerms);

      let nameSearch = () => {
        //let found = false;
        let foundThisField: any = [];
        if (isFilterSet) {
          for (const col in searchTerms) {
            searchTerms[col].trim().toLowerCase().split(' ').forEach((word: any) => {
              if (data[col].toString().toLowerCase().indexOf(word) != -1
                //&& data[col].toString().toLowerCase().length === word.length //para que si busco level: 1 no me encuentre los levels que contengan un 1
                && data[col].toString().toLowerCase().length === searchTerms[col].trim().toLowerCase().length //para que si busco una frase de varias palabras me encuentre solo la frase completa y no cada palabra por separado
                && isFilterSet) {
                //found = true
                //https://stackoverflow.com/questions/48276404/filtering-specific-column-in-angular-material-table-in-angular-5
                foundThisField.push(1)
              }
              else {
                foundThisField.push(0)
              }
            });
          }
          //return found
          return foundThisField.includes(0) ? false : true
        } else {
          return true;
        }
      }
      return nameSearch()
    }
    return filterFunction
  }

  // Reset table filters
  resetFilters() {
    this.filterValues = {}
    this.filterSelectObj.forEach((value: any, key: any) => {
      value.modelValue = undefined;
    })
    this.dataSource.filter = "";
  }

  // Toast notification (para enseñar mensaje de la moneda mistica diaria)
  toastNotificationMonedaMistica() {
    const newToastNotification = new ToastNotificationInitializer();

    newToastNotification.setTitle('Diaria PvE');
    newToastNotification.setMessage('MONEDA MÍSTICA');

    // Choose layout color type
    newToastNotification.setConfig({
      // autoCloseDelay: 5000, // optional
      textPosition: 'center', // optional
      layoutType: DialogLayoutDisplay.WARNING, // SUCCESS | INFO | NONE | DANGER | WARNING
      progressBar: ToastProgressBarEnum.INCREASE, // INCREASE | DECREASE | NONE
      toastUserViewType: ToastUserViewTypeEnum.SIMPLE, // STANDARD | SIMPLE
      animationIn: AppearanceAnimation.BOUNCE_IN, // BOUNCE_IN | SWING | ZOOM_IN | ZOOM_IN_ROTATE | ELASTIC | JELLO | FADE_IN | SLIDE_IN_UP | SLIDE_IN_DOWN | SLIDE_IN_LEFT | SLIDE_IN_RIGHT | NONE
      animationOut: DisappearanceAnimation.BOUNCE_OUT, // BOUNCE_OUT | ZOOM_OUT | ZOOM_OUT_WIND | ZOOM_OUT_ROTATE | FLIP_OUT | SLIDE_OUT_UP | SLIDE_OUT_DOWN | SLIDE_OUT_LEFT | SLIDE_OUT_RIGHT | NONE
      // TOP_LEFT | TOP_CENTER | TOP_RIGHT | TOP_FULL_WIDTH | BOTTOM_LEFT | BOTTOM_CENTER | BOTTOM_RIGHT | BOTTOM_FULL_WIDTH
      toastPosition: ToastPositionEnum.TOP_RIGHT,
      // buttonPosition: 'right', // optional 
    });

    newToastNotification.setButtonLabels('ok', '');

    // Simply open the toast
    newToastNotification.openToastNotification$();
  }

}
