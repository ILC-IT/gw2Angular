import { Component, HostListener, OnInit } from '@angular/core';
import { RaidService } from 'src/app/service/raid.service';
import { HeroService } from 'src/app/service/hero.service';
import { Raid, RaidsInfo, Strike, StrikesInfo, BossBountyWing, LegendariaRaidId, TokenId, DailyRaidBounties, OrdenReferenciaEng } from './raid'
import { ActivatedRoute, Router } from '@angular/router';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-raid',
  templateUrl: './raid.component.html',
  styleUrls: ['./raid.component.css']
})

export class RaidComponent implements OnInit {

  raid: any = [];
  raidDoble = 1;
  raidEnvalentonado = 1;
  liTengo: number = 0;
  liUsada: number = 0;
  armaduraRaidCount = 0;
  anilloRaidCount = 0;
  magnetitas: number = 0;
  gaets: number = 0;
  numberOfBossesRaids = 0;
  totalWeeklyBosses = 0;
  completedWeeklyBosses = 0;
  cols: number = 4;
  rowHeight: string = '5:1';

  raidWings: Raid[] = [
    {
      name: RaidsInfo[0]['name'],
      wing: RaidsInfo[0]['wing'],
      boss: RaidsInfo[0]['boss'],
      bossOk: RaidsInfo[0]['bossOk'],
      bossCompletado: RaidsInfo[0]['bossCompletado'],
      bossWeekly: RaidsInfo[0]['bossWeekly'],
      bossWeeklyCompletado: RaidsInfo[0]['bossWeeklyCompletado'],
      weeklyId: RaidsInfo[0]['weeklyId'],
      tokenCount: RaidsInfo[0]['tokenCount'],
      callOfTheMists: RaidsInfo[0]['callOfTheMists'],
      emboldened: RaidsInfo[0]['emboldened'],
      url: RaidsInfo[0]['url']
    },
    {
      name: RaidsInfo[1]['name'],
      wing: RaidsInfo[1]['wing'],
      boss: RaidsInfo[1]['boss'],
      bossOk: RaidsInfo[1]['bossOk'],
      bossCompletado: RaidsInfo[1]['bossCompletado'],
      bossWeeklyCompletado: RaidsInfo[1]['bossWeeklyCompletado'],
      bossWeekly: RaidsInfo[1]['bossWeekly'],
      weeklyId: RaidsInfo[1]['weeklyId'],
      tokenCount: RaidsInfo[1]['tokenCount'],
      callOfTheMists: RaidsInfo[1]['callOfTheMists'],
      emboldened: RaidsInfo[1]['emboldened'],
      url: RaidsInfo[1]['url']
    },
    {
      name: RaidsInfo[2]['name'],
      wing: RaidsInfo[2]['wing'],
      boss: RaidsInfo[2]['boss'],
      bossOk: RaidsInfo[2]['bossOk'],
      bossCompletado: RaidsInfo[2]['bossCompletado'],
      bossWeeklyCompletado: RaidsInfo[2]['bossWeeklyCompletado'],
      bossWeekly: RaidsInfo[2]['bossWeekly'],
      weeklyId: RaidsInfo[2]['weeklyId'],
      tokenCount: RaidsInfo[2]['tokenCount'],
      callOfTheMists: RaidsInfo[2]['callOfTheMists'],
      emboldened: RaidsInfo[2]['emboldened'],
      url: RaidsInfo[2]['url']
    },
    {
      name: RaidsInfo[3]['name'],
      wing: RaidsInfo[3]['wing'],
      boss: RaidsInfo[3]['boss'],
      bossOk: RaidsInfo[3]['bossOk'],
      bossCompletado: RaidsInfo[3]['bossCompletado'],
      bossWeeklyCompletado: RaidsInfo[3]['bossWeeklyCompletado'],
      bossWeekly: RaidsInfo[3]['bossWeekly'],
      weeklyId: RaidsInfo[3]['weeklyId'],
      tokenCount: RaidsInfo[3]['tokenCount'],
      callOfTheMists: RaidsInfo[3]['callOfTheMists'],
      emboldened: RaidsInfo[3]['emboldened'],
      url: RaidsInfo[3]['url']
    },
    {
      name: RaidsInfo[4]['name'],
      wing: RaidsInfo[4]['wing'],
      boss: RaidsInfo[4]['boss'],
      bossOk: RaidsInfo[4]['bossOk'],
      bossCompletado: RaidsInfo[4]['bossCompletado'],
      bossWeeklyCompletado: RaidsInfo[4]['bossWeeklyCompletado'],
      bossWeekly: RaidsInfo[4]['bossWeekly'],
      weeklyId: RaidsInfo[4]['weeklyId'],
      tokenCount: RaidsInfo[4]['tokenCount'],
      callOfTheMists: RaidsInfo[4]['callOfTheMists'],
      emboldened: RaidsInfo[4]['emboldened'],
      url: RaidsInfo[4]['url']
    },
    {
      name: RaidsInfo[5]['name'],
      wing: RaidsInfo[5]['wing'],
      boss: RaidsInfo[5]['boss'],
      bossOk: RaidsInfo[5]['bossOk'],
      bossCompletado: RaidsInfo[5]['bossCompletado'],
      bossWeeklyCompletado: RaidsInfo[5]['bossWeeklyCompletado'],
      bossWeekly: RaidsInfo[5]['bossWeekly'],
      weeklyId: RaidsInfo[5]['weeklyId'],
      tokenCount: RaidsInfo[5]['tokenCount'],
      callOfTheMists: RaidsInfo[5]['callOfTheMists'],
      emboldened: RaidsInfo[5]['emboldened'],
      url: RaidsInfo[5]['url']
    },
    {
      name: RaidsInfo[6]['name'],
      wing: RaidsInfo[6]['wing'],
      boss: RaidsInfo[6]['boss'],
      bossOk: RaidsInfo[6]['bossOk'],
      bossCompletado: RaidsInfo[6]['bossCompletado'],
      bossWeeklyCompletado: RaidsInfo[6]['bossWeeklyCompletado'],
      bossWeekly: RaidsInfo[6]['bossWeekly'],
      weeklyId: RaidsInfo[6]['weeklyId'],
      tokenCount: RaidsInfo[6]['tokenCount'],
      callOfTheMists: RaidsInfo[6]['callOfTheMists'],
      emboldened: RaidsInfo[6]['emboldened'],
      url: RaidsInfo[6]['url']
    },
    {
      name: RaidsInfo[7]['name'],
      wing: RaidsInfo[7]['wing'],
      boss: RaidsInfo[7]['boss'],
      bossOk: RaidsInfo[7]['bossOk'],
      bossCompletado: RaidsInfo[7]['bossCompletado'],
      bossWeeklyCompletado: RaidsInfo[7]['bossWeeklyCompletado'],
      bossWeekly: RaidsInfo[7]['bossWeekly'],
      weeklyId: RaidsInfo[7]['weeklyId'],
      tokenCount: RaidsInfo[7]['tokenCount'],
      callOfTheMists: RaidsInfo[7]['callOfTheMists'],
      emboldened: RaidsInfo[7]['emboldened'],
      url: RaidsInfo[7]['url']
    }
  ];
  strikeWings: Strike[] = [
    {
      wing: StrikesInfo[0]['wing'],
      bossOk: StrikesInfo[0]['bossOk'],
    },
    {
      wing: StrikesInfo[1]['wing'],
      bossOk: StrikesInfo[1]['bossOk'],
    },
    {
      wing: StrikesInfo[2]['wing'],
      bossOk: StrikesInfo[2]['bossOk'],
    },
    {
      wing: StrikesInfo[3]['wing'],
      bossOk: StrikesInfo[3]['bossOk'],
    }
  ];

  isRaidLoading = false;
  isWeeklyRaidLoading = false;
  raidError: string | null = null;
  weeklyRaidError: string | null = null;

  weeklyRaid: any; //contiene el id de las raid semanales buscando en achievements/categories/477
  weeklyRaidIdsS: string = ''; //contiene el id de las raid semanales
  weeklyRaidDone: { index: number, name: string }[] = [];
  weeklyRaidDoneIds: Set<number> = new Set();

  DailyRaidBounties = DailyRaidBounties;
  dailyRotation: any;
  weeklyRotation: any;
  isDailyBoss(boss: string): boolean {
    if (!this.dailyRotation) return false;
    return Object.values(this.dailyRotation).includes(boss);
  }
  isWeeklyBoss(boss: string): boolean {
    if (!this.weeklyRotation?.week) return false;

    return this.weeklyRotation.week.some((day: any) =>
      Object.values(day.bounties).includes(boss)
    );
  }

  // Para copiar al portapapeles
  copiadoNotInWeek = false;
  copiadoDaily = false;
  copiadoInWeek = false;
  bossesNotInWeek = '';
  bossesDaily = '';
  bossesInWeek = '';
  private bossGroupMap!: Map<string, string>;
  bossesNotInWeekGrouped: { wing: string, bosses: string[] }[] = [];

  // Para las rutas a las pestañas de raid
  selectedTabIndex: number = 0;
  tabs: string[] = ['Limpieza', 'Logro Raid Semanal', 'Daily Raid Bounties'];
  routeMap: { [key: string]: string } = {
    'limpieza': 'Limpieza',
    'weeklyraid': 'Logro Raid Semanal',
    'dailyraidbounties': 'Daily Raid Bounties'
  };
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
    this.router.navigate(['/raid', routeName]);
  }

  constructor(private raidService: RaidService, private heroService: HeroService, private route: ActivatedRoute, private router: Router, private clipboard: Clipboard) { }

  ngOnInit() {

    // Para hacer el routing a las pestañas de la tabla
    this.route.paramMap.subscribe(params => {
      const tab = params.get('tab');
      if (tab) {
        this.selectedTabIndex = this.getTabIndex(tab);
      }
    });

    // Limpieza
    this.getRaid();
    this.getCallOfTheMists();
    this.getEmboldened();
    this.updateGridCols();

    // Logro raid semanal
    this.loadWeeklyRaidAchie();

    // Para la rotacion de daily raid bounties
    const today = new Date();
    this.dailyRotation = this.raidService.getDailyRaidBounties(today);
    this.weeklyRotation = this.raidService.getWeeklyRaidBounties(today);
    this.bossGroupMap = this.getBossGroupMap();
    this.crearBossListas();
  }

  getRaid() {
    this.isRaidLoading = true;
    this.raidError = null;

    this.raidService.getRaid().subscribe({
      next: (raid: any) => {
        this.raid = raid;
        // console.log(this.raid);
        // comprobacion de los bosses completado
        this.checkBossDone();
        this.getToken();
        this.getLiLd();
        this.isRaidLoading = false;
      },
      error: (err) => {
        console.warn('Error al cargar limpieza de raids:', err);
        this.raidError = 'No se pudo cargar la limpieza de raids.';
        this.isRaidLoading = false;
      }
    });
  }

  getCallOfTheMists() {
    this.raidDoble = this.raidService.getCallOfTheMists();
    this.raidWings[this.raidDoble - 1]['callOfTheMists'] = "dobleestasemana";
  }

  getEmboldened() {
    this.raidEnvalentonado = this.raidService.getEmboldened();
    this.raidWings[this.raidEnvalentonado - 1]['emboldened'] = "envalentonado";
  }

  checkBossDone() {
    this.numberOfBossesRaids = 0;
    for (let i = 0; i < this.raidWings.length; i++) {
      // console.log('RaidsInfo ', RaidsInfo[i]['boss'].length)
      for (let j = 0; j < this.raidWings[i]['boss'].length; j++) {
        let nombre = this.raidWings[i]['boss'][j];
        // console.log('nombre ', nombre)
        this.numberOfBossesRaids++;
        if (this.raid.includes(nombre)) {
          this.raidWings[i]['bossCompletado'][j] = true;
        }
      }
    }
  }

  sumCountById(arr: { id: number; count: number }[], idBossRaid: number): number {
    // devuelve la suma de count de todas las ocurrencias de idBossRaid en el array del banco (token)
    return arr.reduce((sum, obj) => {
      if (obj !== null) { // porque token tiene valores null y asi los evitamos
        if (obj.id === idBossRaid) {
          return sum + obj.count;
        }
      }
      return sum;
    }, 0);
  }

  getToken() {
    this.heroService.getBank().subscribe((token: any) => {
      //Devuelve los materiales del banco en stacks de maximo 250, si supera esa cantidad habra varias ids iguales
      for (let i = 0; i < TokenId.length; i++) {
        this.raidWings[0].tokenCount[0] = this.sumCountById(token, TokenId[0].vale_guardian);
        this.raidWings[0].tokenCount[2] = this.sumCountById(token, TokenId[0].gorseval);
        this.raidWings[0].tokenCount[3] = this.sumCountById(token, TokenId[0].sabetha);
        this.raidWings[1].tokenCount[0] = this.sumCountById(token, TokenId[0].slothasor);
        this.raidWings[1].tokenCount[2] = this.sumCountById(token, TokenId[0].matthias);
        this.raidWings[2].tokenCount[0] = this.sumCountById(token, TokenId[0].escort);
        this.raidWings[2].tokenCount[1] = this.sumCountById(token, TokenId[0].keep_construct);
        this.raidWings[2].tokenCount[3] = this.sumCountById(token, TokenId[0].xera);
        this.raidWings[3].tokenCount[0] = this.sumCountById(token, TokenId[0].cairn);
        this.raidWings[3].tokenCount[1] = this.sumCountById(token, TokenId[0].mursaat_overseer);
        this.raidWings[3].tokenCount[2] = this.sumCountById(token, TokenId[0].samarog);
        this.raidWings[3].tokenCount[3] = this.sumCountById(token, TokenId[0].deimos);
        this.raidWings[4].tokenCount[0] = this.sumCountById(token, TokenId[0].soulless_horror);
        this.raidWings[4].tokenCount[1] = this.sumCountById(token, TokenId[0].river_of_souls);
        this.raidWings[4].tokenCount[2] = this.sumCountById(token, TokenId[0].statues_of_grenth);
        this.raidWings[4].tokenCount[3] = this.sumCountById(token, TokenId[0].voice_in_the_void);
        this.raidWings[5].tokenCount[0] = this.sumCountById(token, TokenId[0].conjured_amalgamate);
        this.raidWings[5].tokenCount[1] = this.sumCountById(token, TokenId[0].twin_largos);
        this.raidWings[5].tokenCount[2] = this.sumCountById(token, TokenId[0].qadim);
        this.raidWings[6].tokenCount[1] = this.sumCountById(token, TokenId[0].adina);
        this.raidWings[6].tokenCount[2] = this.sumCountById(token, TokenId[0].sabir);
        this.raidWings[6].tokenCount[3] = this.sumCountById(token, TokenId[0].qadim_the_peerless);
        this.raidWings[7].tokenCount[1] = this.sumCountById(token, TokenId[0].decima);
        this.raidWings[7].tokenCount[2] = this.sumCountById(token, TokenId[0].greer);
        this.raidWings[7].tokenCount[3] = this.sumCountById(token, TokenId[0].ura);
      }
    })
  }

  getLiLd() {
    this.heroService.getWallet().subscribe((wallet: any) => {
      // for (let i = 0; i < wallet.length; i++){
      //   if (wallet[i].id === 70){
      //     this.liTengo = wallet[i].value;
      //   }
      // }
      this.liTengo = wallet.find((o: { id: number; value: number }) => o.id === 70)?.value ?? 0;
      // console.log('liTengo ', this.liTengo);

      // Busco si se tiene armadura legendaria fabricada
      this.heroService.getLegendaryArmory().subscribe((armadura: any) => {
        for (let i = 0; i < armadura.length; i++) {
          for (let j = 0; j < LegendariaRaidId[0].armadura.length; j++) {
            if (armadura[i].id === LegendariaRaidId[0].armadura[j]) {
              this.armaduraRaidCount++;
            }
          }
          if (armadura[i].id === LegendariaRaidId[0].anillo) {
            this.anilloRaidCount++;
          }
        }
        // console.log(this.armaduraRaidCount);
        // console.log(this.anilloRaidCount);
        if (this.armaduraRaidCount <= 6) {
          this.liUsada = 25 * this.armaduraRaidCount;
        }
        else {
          this.liUsada = 150 + 50 * (this.armaduraRaidCount - 6);
        }

        this.liUsada += 150 * this.anilloRaidCount;
        // console.log('liUsada ', this.liUsada);
      })
      this.magnetitas = wallet.find((o: { id: number; value: number }) => o.id === 28)?.value ?? 0;
      this.gaets = wallet.find((o: { id: number; value: number }) => o.id === 77)?.value ?? 0;
    })
  }

  async loadWeeklyRaidAchie(): Promise<void> {
    this.isWeeklyRaidLoading = true;
    this.weeklyRaidError = null;

    try {
      this.weeklyRaid = await this.getWeeklyRaidId();
      this.getWeeklyRaid();
    } catch (err) {
      console.warn('getWeeklyRaidId failed or not found:', err);
      this.weeklyRaid = null;
      this.weeklyRaidError = 'No se pudo cargar el logro de raid semanal.';
      this.isWeeklyRaidLoading = false;
      this.getWeeklyRaid(); // getWeeklyRaid() ya protege contra weeklyRaid nulo
    }
  }

  getWeeklyRaidId() {
    return this.raidService.getWeeklyRaidId().toPromise();
  }

  getWeeklyRaid() {
    // Proteger contra llamadas cuando `weeklyRaid` no existe (404 o error previo)
    if (!this.weeklyRaid || !Array.isArray(this.weeklyRaid.achievements)) {
      console.warn("'weekly raid' no disponible, omitiendo getWeeklyRaid()");
      this.weeklyRaidIdsS = '';
      this.weeklyRaidDoneIds = new Set();
      this.totalWeeklyBosses = 0;
      this.completedWeeklyBosses = 0;
      return;
    }

    // Resetear ids antes de concatenar para evitar duplicados en reintentos
    this.weeklyRaidIdsS = '';
    this.weeklyRaidDone = [];
    this.totalWeeklyBosses = 0;
    this.completedWeeklyBosses = 0;
    const weeklyIds = this.weeklyRaid.achievements.map((id: string) => Number(id));
    this.weeklyRaidIdsS = weeklyIds.join(',');

    if (!weeklyIds.length) return;

    // Una sola llamada a la api
    this.getWeeklyRaidEncounters(this.weeklyRaidIdsS, weeklyIds);
  }

  getWeeklyRaidEncounters(weeklyIdsS: string, weeklyIds: number[]) {
    this.raidService.getWeeklyRaidDone(weeklyIdsS).subscribe({
      next: (data: any[]) => {
        weeklyIds.forEach((id: number) => {
          const raidWing = this.raidWings.find(wing => wing.weeklyId === id);
          if (!raidWing) return; // Si no se encuentra el wing correspondiente, saltar a la siguiente iteracion

          // Aplicar resultado a cada wing
          this.applyWeeklyResultToWing(data, raidWing);
        });
        this.isWeeklyRaidLoading = false;
      },
      error: () => {
        // En caso de error, marcar todos las bosses semanales como no completados
        this.raidWings.forEach(raidWing => {
          raidWing.bossWeeklyCompletado = raidWing.bossWeekly.map(() => false);
        });
        this.weeklyRaidDone = [];
        this.weeklyRaidDoneIds = new Set();
        this.weeklyRaidError = 'Error al consultar el progreso del logro semanal.';
        this.isWeeklyRaidLoading = false;
        console.warn(`Weekly Raid sin hacer`);
      }
    });
  }

  applyWeeklyResultToWing(data: any[], raidWing: Raid) {
    // Inicializar estado de bosses
    raidWing.bossWeeklyCompletado = raidWing.bossWeekly.map(() => false);
    this.weeklyRaidDone = raidWing.bossWeekly.map((name, index) => ({
      index,
      name
    }));
    this.weeklyRaidDoneIds = new Set();

    // Total bosses de este wing
    const totalBossesWing = raidWing.bossWeekly.length;
    this.totalWeeklyBosses += totalBossesWing;

    // Si la api devuelve un array vacio o nulo
    if (!data || data.length === 0) {
      console.log(`${raidWing.wing}: API vacia o error`);
      return;
    }

    // Buscar el resultado correspondiente a este wing
    const result = data.find(d => d.id === raidWing.weeklyId);
    if (!result) {
      console.log(`${raidWing.wing} sin resultado semanal`);
      return;
    }

    if (result.done === true) {
      // Todos los bosses completados
      this.weeklyRaidDoneIds = new Set(
        this.weeklyRaidDone.map(b => b.index)
      );
      raidWing.bossWeeklyCompletado = raidWing.bossWeekly.map(() => true);
      this.completedWeeklyBosses += totalBossesWing;
      // console.log(`${raidWing.name}: TODOS los bosses semanales completados`);
    } else if (Array.isArray(result.bits)) {
      // Solo los bosses indicados en bits
      this.weeklyRaidDoneIds = new Set(result.bits || []);
      result.bits.forEach((index: number) => {
        if (raidWing.bossWeeklyCompletado[index] !== undefined) {
          raidWing.bossWeeklyCompletado[index] = true;
          this.completedWeeklyBosses++;
        }
      });
    }

    // Debug: visualizar tabla de estado de bosses semanales
    // console.log(`Wing ${raidWing.name}`);
    // console.table(
    //   raidWing.bossWeekly.map((boss, i) => ({
    //     boss,
    //     completado: raidWing.bossWeeklyCompletado[i]
    //   }))
    // );
  }

  @HostListener('window:resize')
  onResize() {
    this.updateGridCols();
  }

  private updateGridCols(): void {
    const width = window.innerWidth;
    if (width < 768) {
      this.cols = 1;
      this.rowHeight = '3:1';
    } else if (width < 1366) {
      this.cols = 2;
      this.rowHeight = '4:1';
    } else {
      this.cols = 4;
      this.rowHeight = '5:1';
    }
  }

  getDailyBossKeys(): string[] {
    return Object.keys(this.DailyRaidBounties).filter(key => key !== 'notInWeek');
  }

  getDailyBossByKey(key: string): string[] {
    return (this.DailyRaidBounties as Record<string, string[]>)[key] || [];
  }

  getBossClass(boss: string): string {
    if (this.isDailyBoss(boss)) {
      return 'daily-boss';
    }
    if (this.isWeeklyBoss(boss)) {
      return 'weekly-boss';
    }
    return 'inactive-boss';
  }

  getDisplayBoss(boss: string): string {
    return this.isDailyBoss(boss) ? boss.toUpperCase() : boss;
  }

  getBossGroupMap(): Map<string, string> {
    const normalize = (str: string) =>
      str
        ?.trim()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

    const map = new Map<string, string>();

    // Raids
    this.raidWings.forEach(raid => {
      raid.bossOk.forEach(boss => {
        // Ignorar eventos que no son bosses semanales ni diarios
        if (
          boss === "Spirit Woods" ||
          boss === "Bandit Trio" ||
          boss === "Escort Glenna" ||
          boss === "Twisted Castle" ||
          boss === "River of Souls" ||
          boss === "Statues of Grenth" ||
          boss === "Gate" ||
          boss === "Camp"
        ) {
          return;
        }
        map.set(normalize(boss), raid.wing);
      });
    });

    // Strikes
    this.strikeWings.forEach(strike => {
      strike.bossOk.forEach(boss => {
        map.set(normalize(boss), strike.wing);
      });
    });

    return map;
  }

  crearBossListas(): void {
    // Crea la lista de bosses disponibles, no disponibles y diarios para los botones de copiar

    if (!this.dailyRotation || !this.weeklyRotation) {
      return;
    }

    const normalize = (str: string) =>
      str
        ?.trim()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

    const orderMap = new Map(
      OrdenReferenciaEng.map((name, index) => [normalize(name), index])
    );

    // const addWing = (boss: string): string => {
    //   const wing = BossBountyWing[boss as keyof typeof BossBountyWing];
    //   return wing ? `${wing}: ${boss}` : boss;
    // };

    // Bosses diarios
    const dailyBosses = Object.values(this.dailyRotation) as string[];
    dailyBosses.sort((a, b) =>
      (orderMap.get(normalize(a)) ?? 999) -
      (orderMap.get(normalize(b)) ?? 999)
    );
    // this.bossesDaily = dailyBosses
    //   .map(addWing)
    //   .join("\n");
    this.bossesDaily = this.groupByWing(dailyBosses);

    // Bosses no disponibles esta semana
    // (vienen ordenados y normalizados en el servicio)
    // this.bossesNotInWeek = this.weeklyRotation?.notInWeek
    //   ? this.weeklyRotation.notInWeek.map(addWing).join("\n")
    //   : "";
    this.bossesNotInWeek = this.weeklyRotation?.notInWeek
      ? this.groupByWing(this.weeklyRotation.notInWeek)
      : "";
    this.bossesNotInWeekGrouped = this.groupBossesByWing(this.weeklyRotation.notInWeek);

    // Bosses disponibles esta semana
    const weekBosses: string[] = [];
    this.weeklyRotation.week.forEach((day: any) => {
      Object.values(day.bounties).forEach((boss: any) => {
        if (weekBosses.indexOf(boss as string) === -1) {
          weekBosses.push(boss as string);
        }
      });
    });
    weekBosses.sort((a, b) =>
      (orderMap.get(normalize(a)) ?? 999) -
      (orderMap.get(normalize(b)) ?? 999)
    );
    // this.bossesInWeek = weekBosses
    //   .map(addWing)
    //   .join("\n");
    this.bossesInWeek = this.groupByWing(weekBosses);
  }

  groupByWing(bosses: string[]): string {
    // Agrupa los bosses por wing y devuelve un string con el formato "Wing: Boss1, Boss2, ..."

    const groups = new Map<string, string[]>();

    bosses.forEach(boss => {
      const wing = BossBountyWing[boss as keyof typeof BossBountyWing] || "";
      if (!groups.has(wing)) {
        groups.set(wing, []);
      }
      groups.get(wing)!.push(boss);
    });

    const result: string[] = [];

    groups.forEach((bosses, wing) => {
      if (wing) {
        result.push(`${wing}: ${bosses.join(", ")}`);
      } else {
        // Por si algun dia hubiera un boss sin wing asignada
        result.push(...bosses);
      }
    });

    return result.join("  \n");

  }

  groupBossesByWing(bosses: string[]): { wing: string, bosses: string[] }[] {
    const groups = new Map<string, string[]>();

    bosses.forEach(boss => {
      const wing = BossBountyWing[boss as keyof typeof BossBountyWing] || "";
      if (!groups.has(wing)) {
        groups.set(wing, []);
      }
      groups.get(wing)!.push(boss);
    });

    return Array.from(groups.entries()).map(([wing, bosses]) => ({
      wing,
      bosses
    }));
  }

  copyToClipboard(text: string, type: 'notInWeek' | 'daily' | 'inWeek'): void {
    if (this.clipboard.copy(text)) {
      switch (type) {
        case 'notInWeek':
          this.copiadoNotInWeek = true;
          break;
        case 'daily':
          this.copiadoDaily = true;
          break;
        case 'inWeek':
          this.copiadoInWeek = true;
          break;
      }
      this.resetCopiado(type);
    }
  }

  resetCopiado(type: 'notInWeek' | 'daily' | 'inWeek'): void {
    setTimeout(() => {
      switch (type) {
        case 'notInWeek':
          this.copiadoNotInWeek = false;
          break;
        case 'daily':
          this.copiadoDaily = false;
          break;
        case 'inWeek':
          this.copiadoInWeek = false;
          break;
      }
    }, 2000);
  }

}
