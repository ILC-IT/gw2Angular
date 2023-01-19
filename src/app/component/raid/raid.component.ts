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
  liTengo: number = 0;
  liUsada: number = 0;
  armaduraRaidCount = 0;
  anilloRaidCount = 0;

  raidWings: Raid[] = [
    {
      name: RaidsInfo[0]['name'],
      wing: RaidsInfo[0]['wing'],
      boss: RaidsInfo[0]['boss'],
      bossOk: RaidsInfo[0]['bossOk'],
      bossCompletado: RaidsInfo[0]['bossCompletado'],
      tokenCount: RaidsInfo[0]['tokenCount']
    },
    {
      name: RaidsInfo[1]['name'],
      wing: RaidsInfo[1]['wing'],
      boss: RaidsInfo[1]['boss'],
      bossOk: RaidsInfo[1]['bossOk'],
      bossCompletado: RaidsInfo[1]['bossCompletado'],
      tokenCount: RaidsInfo[1]['tokenCount']
    },
    {
      name: RaidsInfo[2]['name'],
      wing: RaidsInfo[2]['wing'],
      boss: RaidsInfo[2]['boss'],
      bossOk: RaidsInfo[2]['bossOk'],
      bossCompletado: RaidsInfo[2]['bossCompletado'],
      tokenCount: RaidsInfo[2]['tokenCount']
    },
    {
      name: RaidsInfo[3]['name'],
      wing: RaidsInfo[3]['wing'],
      boss: RaidsInfo[3]['boss'],
      bossOk: RaidsInfo[3]['bossOk'],
      bossCompletado: RaidsInfo[3]['bossCompletado'],
      tokenCount: RaidsInfo[3]['tokenCount']
    },
    {
      name: RaidsInfo[4]['name'],
      wing: RaidsInfo[4]['wing'],
      boss: RaidsInfo[4]['boss'],
      bossOk: RaidsInfo[4]['bossOk'],
      bossCompletado: RaidsInfo[4]['bossCompletado'],
      tokenCount: RaidsInfo[4]['tokenCount']
    },
    {
      name: RaidsInfo[5]['name'],
      wing: RaidsInfo[5]['wing'],
      boss: RaidsInfo[5]['boss'],
      bossOk: RaidsInfo[5]['bossOk'],
      bossCompletado: RaidsInfo[5]['bossCompletado'],
      tokenCount: RaidsInfo[5]['tokenCount']
    },
    {
      name: RaidsInfo[6]['name'],
      wing: RaidsInfo[6]['wing'],
      boss: RaidsInfo[6]['boss'],
      bossOk: RaidsInfo[6]['bossOk'],
      bossCompletado: RaidsInfo[6]['bossCompletado'],
      tokenCount: RaidsInfo[6]['tokenCount']
    },
  ];

  constructor(private raidService: RaidService, private heroService: HeroService) { }

  ngOnInit(): void {
    this.getRaid();
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

  getToken(){
    this.heroService.getBank().subscribe((token: any) => {
      for (let i = 0; i < TokenId.length; i++){
        this.raidWings[0].tokenCount[0] = token.find((o: { id: number; count: number}) => o.id === TokenId[0].vale_guardian).count;
        this.raidWings[0].tokenCount[2] = token.find((o: { id: number; count: number}) => o.id === TokenId[0].gorseval).count;
        this.raidWings[0].tokenCount[3] = token.find((o: { id: number; count: number}) => o.id === TokenId[0].sabetha).count;
        this.raidWings[1].tokenCount[0] = token.find((o: { id: number; count: number}) => o.id === TokenId[0].slothasor).count;
        this.raidWings[1].tokenCount[2] = token.find((o: { id: number; count: number}) => o.id === TokenId[0].matthias).count;
        this.raidWings[2].tokenCount[0] = token.find((o: { id: number; count: number}) => o.id === TokenId[0].escort).count;
        this.raidWings[2].tokenCount[1] = token.find((o: { id: number; count: number}) => o.id === TokenId[0].keep_construct).count;
        this.raidWings[2].tokenCount[3] = token.find((o: { id: number; count: number}) => o.id === TokenId[0].xera).count;
        this.raidWings[3].tokenCount[0] = token.find((o: { id: number; count: number}) => o.id === TokenId[0].cairn).count;
        this.raidWings[3].tokenCount[1] = token.find((o: { id: number; count: number}) => o.id === TokenId[0].mursaat_overseer).count;
        this.raidWings[3].tokenCount[2] = token.find((o: { id: number; count: number}) => o.id === TokenId[0].samarog).count;
        this.raidWings[3].tokenCount[3] = token.find((o: { id: number; count: number}) => o.id === TokenId[0].deimos).count;
        this.raidWings[4].tokenCount[0] = token.find((o: { id: number; count: number}) => o.id === TokenId[0].soulless_horror).count;
        this.raidWings[4].tokenCount[1] = token.find((o: { id: number; count: number}) => o.id === TokenId[0].river_of_souls).count;
        this.raidWings[4].tokenCount[2] = token.find((o: { id: number; count: number}) => o.id === TokenId[0].statues_of_grenth).count;
        this.raidWings[4].tokenCount[3] = token.find((o: { id: number; count: number}) => o.id === TokenId[0].voice_in_the_void).count;
        this.raidWings[5].tokenCount[0] = token.find((o: { id: number; count: number}) => o.id === TokenId[0].conjured_amalgamate).count;
        this.raidWings[5].tokenCount[1] = token.find((o: { id: number; count: number}) => o.id === TokenId[0].twin_largos).count;
        this.raidWings[5].tokenCount[2] = token.find((o: { id: number; count: number}) => o.id === TokenId[0].qadim).count;
        this.raidWings[6].tokenCount[1] = token.find((o: { id: number; count: number}) => o.id === TokenId[0].adina).count;
        this.raidWings[6].tokenCount[2] = token.find((o: { id: number; count: number}) => o.id === TokenId[0].sabir).count;
        this.raidWings[6].tokenCount[3] = token.find((o: { id: number; count: number}) => o.id === TokenId[0].qadim_the_peerless).count;
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
    })
  }
}
