import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DailyComponent } from './component/daily/daily.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HeroesComponent } from './component/heroes/heroes.component';
import { PrincipalComponent } from './component/principal/principal.component';
import { EnlacesComponent } from './component/enlaces/enlaces.component';
import { CalculadoraComponent } from './component/calculadora/calculadora.component';
import { StatsComponent } from './component/stats/stats.component';
import { RaidComponent } from './component/raid/raid.component';
import { HerodetailComponent } from './component/herodetail/herodetail.component';
import { LegendaryComponent } from './component/legendary/legendary.component';

const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path: 'diaria', component: DailyComponent },
  { path: 'diaria/:tab', component: DailyComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'enlaces', component: EnlacesComponent },
  { path: 'calculadora', component: CalculadoraComponent },
  { path: 'stats', component: StatsComponent },
  { path: 'stats/:tab', component: StatsComponent },
  { path: 'raid', component: RaidComponent },
  { path: 'heroes/detail/:name', component: HerodetailComponent},
  { path: 'legendary', component: LegendaryComponent},
  { path: 'legendary/:tab', component: LegendaryComponent},
  { path:'**', pathMatch: 'full', redirectTo:'' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
