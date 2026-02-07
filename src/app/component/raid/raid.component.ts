import { Component, HostListener, OnInit } from '@angular/core';
import { RaidService } from 'src/app/service/raid.service';
import { HeroService } from 'src/app/service/hero.service';
import { Raid, RaidsInfo, LegendariaRaidId, TokenId} from './raid'
import { ActivatedRoute, Router } from '@angular/router';

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
      emboldened: RaidsInfo[0]['emboldened']
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
      emboldened: RaidsInfo[1]['emboldened']
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
      emboldened: RaidsInfo[2]['emboldened']
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
      emboldened: RaidsInfo[3]['emboldened']
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
      emboldened: RaidsInfo[4]['emboldened']
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
      emboldened: RaidsInfo[5]['emboldened']
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
      emboldened: RaidsInfo[6]['emboldened']
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
      emboldened: RaidsInfo[7]['emboldened']
    }
  ];

  weeklyRaid: any; //contiene el id de las raid semanales buscando en achievements/categories/477
  weeklyRaidIdsS: string = ''; //contiene el id de las raid semanales
  weeklyRaidDone: { index: number, name: string }[] = [];
  weeklyRaidDoneIds: Set<number> = new Set();

  // Para las rutas a las pestañas de raid
  selectedTabIndex: number = 0;
  tabs: string[] = ['Limpieza', 'Logro Raid Semanal'];
  routeMap: { [key: string]: string } = {
    'limpieza': 'Limpieza',
    'weeklyraid': 'Logro Raid Semanal'
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

  constructor(private raidService: RaidService, private heroService: HeroService, private route: ActivatedRoute, private router: Router) { }

  async ngOnInit() {
    // Para hacer el routing a las pestañas de la tabla
    this.route.paramMap.subscribe(params => {
      const tab = params.get('tab');
      if (tab) {
        this.selectedTabIndex = this.getTabIndex(tab);
      }
    });

    this.getRaid();
    this.getCallOfTheMists();
    this.getEmboldened();
    this.updateGridCols();
    try {
      this.weeklyRaid = await this.getWeeklyRaidId();
      this.getWeeklyRaid();
    } catch (err) {
      console.warn('getWeeklyRaidId failed or not found:', err);
      this.weeklyRaid = null;
      this.getWeeklyRaid(); // getWeeklyRaid() ya protege contra weeklyRaid nulo
    }
  }

  getRaid(){
    this.raidService.getRaid().subscribe((raid: any) => {
      this.raid = raid;
      // console.log(this.raid);
      // comprobación de los bosses completados
      this.checkBossDone();
      this.getToken();
      this.getLiLd();
    })
  }

  getCallOfTheMists(){
    this.raidDoble = this.raidService.getCallOfTheMists();
    this.raidWings[this.raidDoble-1]['callOfTheMists'] = "dobleestasemana";
  }

  getEmboldened(){
    this.raidEnvalentonado = this.raidService.getEmboldened();
    this.raidWings[this.raidEnvalentonado-1]['emboldened'] = "envalentonado";
  }

  checkBossDone(){
      for(let i = 0; i < this.raidWings.length; i++){
        // console.log('RaidsInfo ', RaidsInfo[i]['boss'].length)
        for (let j = 0; j < this.raidWings[i]['boss'].length; j++){
          let nombre = this.raidWings[i]['boss'][j];
          // console.log('nombre ', nombre)
          this.numberOfBossesRaids++;
          if (this.raid.includes(nombre)){
            this.raidWings[i]['bossCompletado'][j] = true;
          }
        }
      }
      // console.log(RaidsInfo[6]['bossCompletado'])
  }

  sumCountById(arr: { id: number; count: number }[], idBossRaid: number): number {
    // devuelve la suma de count de todas las ocurrencias de idBossRaid en el array del banco (token)
    return arr.reduce((sum, obj) => {
      if (obj !== null){ // porque token tiene valores null y asi los evitamos
        if (obj.id === idBossRaid) {
          return sum + obj.count;
        }
      }
      return sum;
    }, 0);
  }

  getToken(){
    this.heroService.getBank().subscribe((token: any) => {
      //Devuelve los materiales del banco en stacks de maximo 250, si supera esa cantidad habra varias ids iguales
      for (let i = 0; i < TokenId.length; i++){
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

  getLiLd(){
    this.heroService.getWallet().subscribe((wallet: any) => {
      // for (let i = 0; i < wallet.length; i++){
      //   if (wallet[i].id === 70){
      //     this.liTengo = wallet[i].value;
      //   }
      // }
      this.liTengo = wallet.find((o: { id: number; value: number}) => o.id === 70)?.value ?? 0;
      // console.log('liTengo ', this.liTengo);

      // Busco si se tiene armadura legendaria fabricada
      this.heroService.getLegendaryArmory().subscribe((armadura: any) => {
        for (let i = 0; i < armadura.length; i++){
          for (let j = 0; j < LegendariaRaidId[0].armadura.length; j++){
            if (armadura[i].id === LegendariaRaidId[0].armadura[j]){
              this.armaduraRaidCount++;
            }
          }
          if (armadura[i].id === LegendariaRaidId[0].anillo){
            this.anilloRaidCount++;
          }
        }
        // console.log(this.armaduraRaidCount);
        // console.log(this.anilloRaidCount);
        if (this.armaduraRaidCount <= 6){
          this.liUsada = 25* this.armaduraRaidCount;
        }
        else{
          this.liUsada = 150 + 50 * (this.armaduraRaidCount - 6);
        }

        this.liUsada += 150 * this.anilloRaidCount;
        // console.log('liUsada ', this.liUsada);
      })
      this.magnetitas = wallet.find((o: { id: number; value: number}) => o.id === 28)?.value ?? 0;
      this.gaets = wallet.find((o: { id: number; value: number}) => o.id === 77)?.value ?? 0;
    })
  }

  async getWeeklyRaidId(){
    return await this.raidService.getWeeklyRaidId().toPromise();
  }

  getWeeklyRaid(){
    // Proteger contra llamadas cuando `weeklyRaid` no existe (404 o error previo)
    if (!this.weeklyRaid || !Array.isArray(this.weeklyRaid.achievements)) {
      console.warn("'weekly raid' no disponible, omitiendo getWeeklyRaid()");
      this.weeklyRaidIdsS = '';
      this.weeklyRaidDoneIds = new Set();
      return;
    }

    // Resetear ids antes de concatenar para evitar duplicados en reintentos
    this.weeklyRaidIdsS = '';
    this.weeklyRaidDone = [];
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
          if (!raidWing) return; // Si no se encuentra el wing correspondiente, saltar a la siguiente iteración

          // Aplicar resultado a cada wing
          this.applyWeeklyResultToWing(data, raidWing);
        });
      },
      error: () => {
        // En caso de error, marcar todos las bosses semanales como no completados
        this.raidWings.forEach(raidWing => {
          raidWing.bossWeeklyCompletado = raidWing.bossWeekly.map(() => false);
        });
        this.weeklyRaidDone = [];
        this.weeklyRaidDoneIds = new Set();
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

    // Si la api devuelve un array vacío o nulo
    if (!data || data.length === 0) {
      console.log(`Wing ${raidWing.name}: API vacía o error`);
      return;
    }

    // Buscar el resultado correspondiente a este wing
    const result = data.find(d => d.id === raidWing.weeklyId);
    if (!result) {
      console.log(`Wing ${raidWing.name} sin resultado semanal`);
      return;
    }

    if (result.done === true) {
      // Todos los bosses completados
      this.weeklyRaidDoneIds = new Set(
        this.weeklyRaidDone.map(b => b.index)
      );
      raidWing.bossWeeklyCompletado = raidWing.bossWeekly.map(() => true);
      // console.log(`${raidWing.name}: TODOS los bosses semanales completados`);
    } else if (Array.isArray(result.bits)) {
      // Solo los bosses indicados en bits
      this.weeklyRaidDoneIds = new Set(result.bits || []);
      result.bits.forEach((index: number) => {
        if (raidWing.bossWeeklyCompletado[index] !== undefined) {
          raidWing.bossWeeklyCompletado[index] = true;
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
    } else if (width < 1366){
      this.cols = 2;
      this.rowHeight = '4:1';
    } else {
      this.cols = 4;
      this.rowHeight = '5:1';
    }
  }
}
