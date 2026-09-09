import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DailyComponent } from './component/daily/daily.component';
import { HeroesComponent } from './component/heroes/heroes.component';
import { PrincipalComponent } from './component/principal/principal.component';
import { EnlacesComponent } from './component/enlaces/enlaces.component';
import { CalculadoraComponent } from './component/calculadora/calculadora.component';
import { StatsComponent } from './component/stats/stats.component';
import { RaidComponent } from './component/raid/raid.component';
import { HerodetailComponent } from './component/herodetail/herodetail.component';
import { LegendaryComponent } from './component/legendary/legendary.component';
import { HomesteadComponent } from './component/homestead/homestead.component';
import { FestivalComponent } from './component/festival/festival.component';
import { BuscadorComponent } from './component/buscador/buscador.component';
import { DungeonComponent } from './component/dungeon/dungeon.component';
import { KeyFormComponent } from './component/key-form/key-form.component'
import { ApiAccountGuard } from './guards/api-account.guard';

const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path: 'diaria', component: DailyComponent, canActivate: [ApiAccountGuard] },
  { path: 'diaria/:tab', component: DailyComponent, canActivate: [ApiAccountGuard] },
  { path: 'heroes', component: HeroesComponent, canActivate: [ApiAccountGuard] },
  { path: 'heroes/:tab', component: HeroesComponent, canActivate: [ApiAccountGuard] },
  { path: 'heroes/detail/:name', component: HerodetailComponent, canActivate: [ApiAccountGuard] },
  { path: 'calculadora', component: CalculadoraComponent },
  { path: 'stats', component: StatsComponent },
  { path: 'stats/:tab', component: StatsComponent },
  { path: 'poi', component: BuscadorComponent },
  { path: 'poi/:tab', component: BuscadorComponent },
  { path: 'enlaces', component: EnlacesComponent },
  { path: 'raid', component: RaidComponent, canActivate: [ApiAccountGuard] },
  { path: 'raid/:tab', component: RaidComponent, canActivate: [ApiAccountGuard] },
  { path: 'dungeon', component: DungeonComponent, canActivate: [ApiAccountGuard] },
  { path: 'legendary', component: LegendaryComponent, canActivate: [ApiAccountGuard] },
  { path: 'legendary/:tab', component: LegendaryComponent, canActivate: [ApiAccountGuard] },
  { path: 'festival', component: FestivalComponent, canActivate: [ApiAccountGuard] },
  { path: 'homestead', component: HomesteadComponent, canActivate: [ApiAccountGuard] },
  { path: 'homestead/:tab', component: HomesteadComponent, canActivate: [ApiAccountGuard] },
  { path: 'accounts', component: KeyFormComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
