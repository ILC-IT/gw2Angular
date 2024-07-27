import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Observable, timer } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  title = 'Proyecto de GW2 en Angular';
  value: string = '';
  
  //reloj
  private _time$: Observable<Date> = timer(0, 1000).pipe(
    map(tick => new Date()),
    shareReplay(1)
  );

  get time() {
    return this._time$;
  }

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
  
  constructor() { }

  ngOnInit(): void {
  }

}
