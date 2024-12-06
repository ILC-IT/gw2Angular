import { Component, OnInit } from '@angular/core';
import { RaidService } from 'src/app/service/raid.service';
import { HeroService } from 'src/app/service/hero.service';
import { Raid, RaidsInfo, LegendariaRaidId, TokenId} from './raid'

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

  raidWings: Raid[] = [
    {
      name: RaidsInfo[0]['name'],
      wing: RaidsInfo[0]['wing'],
      boss: RaidsInfo[0]['boss'],
      bossOk: RaidsInfo[0]['bossOk'],
      bossCompletado: RaidsInfo[0]['bossCompletado'],
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
      tokenCount: RaidsInfo[7]['tokenCount'],
      callOfTheMists: RaidsInfo[7]['callOfTheMists'],
      emboldened: RaidsInfo[7]['emboldened']
    }
  ];

  constructor(private raidService: RaidService, private heroService: HeroService) { }

  ngOnInit(): void {
    this.getRaid();
    this.getCallOfTheMists();
    this.getEmboldened();
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
    this.raidWings[7]['callOfTheMists'] = "dobleestasemana"; // La 8 nueva estará doble un tiempo aparte de la otra
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
      this.liTengo = wallet.find((o: { id: number; value: number}) => o.id === 70).value;
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
      this.magnetitas = wallet.find((o: { id: number; value: number}) => o.id === 28).value;
      this.gaets = wallet.find((o: { id: number; value: number}) => o.id === 77).value;
    })
  }
}
