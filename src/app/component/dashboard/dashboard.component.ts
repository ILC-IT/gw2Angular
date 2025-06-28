import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Observable, timer } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { HeroService } from "../../service/hero.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  title = 'GW2 Angular';
  value: string = '';
  
  //reloj
  // private _time$: Observable<Date> = timer(0, 1000).pipe(
  //   map(tick => new Date()),
  //   shareReplay(1)
  // );

  // get time() {
  //   return this._time$;
  // }

  @ViewChild('diariasTrigger') diariasTrigger!: MatMenuTrigger;
  @ViewChild('buscadorStatsTrigger') buscadorStatsTrigger!: MatMenuTrigger;
  @ViewChild('legendariosTrigger') legendariosTrigger!: MatMenuTrigger;

  private openMenuTimeout: any;
  private closeMenuTimeout: any;

  openMenu(trigger: MatMenuTrigger) {
    clearTimeout(this.closeMenuTimeout);
    this.openMenuTimeout = setTimeout(() => {
      trigger.openMenu();
    }, 50); // Ajusta el tiempo según sea necesario
  }

  cancelCloseMenu(trigger: MatMenuTrigger) {
    clearTimeout(this.closeMenuTimeout);
  }

  closeMenu(trigger: MatMenuTrigger) {
    clearTimeout(this.openMenuTimeout);
    this.closeMenuTimeout = setTimeout(() => {
      trigger.closeMenu();
    }, 50); // Ajusta el tiempo según sea necesario
  }
  
  account: any = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getAccount();
  }

  getAccount(){
    this.heroService.getAccount().subscribe((acc: any) => {
        this.account = acc;
      },
      (err) => {
        console.error('Error al obtener la cuenta:', err);
      }
  )}

}
