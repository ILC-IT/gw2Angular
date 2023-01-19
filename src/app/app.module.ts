import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeroesComponent } from './component/heroes/heroes.component';
import { DailyComponent } from './component/daily/daily.component';
import { KeyFormComponent } from './component/key-form/key-form.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { MaterialModule } from './modules/material/material.module';
import { DailyService } from './service/daily.service';
import { HeroService } from './service/hero.service';
import { PrincipalComponent } from './component/principal/principal.component';
import { EnlacesComponent } from './component/enlaces/enlaces.component';
import { BuscadorComponent } from './component/buscador/buscador.component';
import { CalculadoraComponent } from './component/calculadora/calculadora.component';
import { StatsComponent } from './component/stats/stats.component';
import { RaidComponent } from './component/raid/raid.component';
import { HerodetailComponent } from './component/herodetail/herodetail.component';
import { MessageService } from './service/message.service';
import { RaidService } from './service/raid.service';
import { LegendaryComponent } from './component/legendary/legendary.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    DailyComponent,
    KeyFormComponent,
    DashboardComponent,
    PrincipalComponent,
    EnlacesComponent,
    BuscadorComponent,
    CalculadoraComponent,
    StatsComponent,
    RaidComponent,
    HerodetailComponent,
    LegendaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [
    DailyService,
    HeroService,
    MessageService,
    RaidService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
