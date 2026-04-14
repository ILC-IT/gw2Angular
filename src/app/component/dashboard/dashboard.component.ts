import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Observable, timer } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { HeroService } from "../../service/hero.service";
import { ApiKeyService } from '../../service/api-key.service';
import { ApiAccount } from '../../service/key';

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
  @ViewChild('raidTrigger') raidTrigger!: MatMenuTrigger;
  @ViewChild('legendariosTrigger') legendariosTrigger!: MatMenuTrigger;
  @ViewChild('homesteadTrigger') homesteadTrigger!: MatMenuTrigger;

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
  
  account: any = {
    name: '',
    error: false
  };

  // selector de API key
  accounts: ApiAccount[] = [];
  selectedAccount!: ApiAccount | null;

  constructor(private heroService: HeroService, private apiKeyService: ApiKeyService) { }

  ngOnInit() {
    this.getAccount();
    this.accounts = this.apiKeyService.getAccounts();
    this.selectedAccount = this.apiKeyService.getCurrentAccount();
    this.apiKeyService.getCurrentAccount$().subscribe(account => {
      this.selectedAccount = account;
    });
  }

  getAccount(){
    this.heroService.getAccount().subscribe((acc: any) => {
        this.account = { 
          ...acc,
          name: acc?.name || 'Loading API...',
          error: false 
        };
      },
      (err) => {
        console.error('Error al obtener la cuenta:', err);
        console.warn('Problema en la API');
        this.account = { 
          name: 'API ERROR',
          error: true
        };
      }
  )}

  onAccountChange(account: ApiAccount) {
    this.apiKeyService.setAccount(account);
     window.location.reload(); 
  }

}
