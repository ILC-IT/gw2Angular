import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { Observable, timer } from 'rxjs';
import { HeroService } from "./service/hero.service";
import { ApiKeyService } from './service/api-key.service';
import { ApiAccount } from './service/key';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'GW2 Angular';
  value: string = '';
  isSmallScreen: Observable<boolean>;
  account: any = {
    name: '',
    error: false
  };

  //reloj
  private _time$: Observable<Date> = timer(0, 1000).pipe(
    map(tick => new Date()),
    shareReplay(1)
  );

  get time() {
    return this._time$;
  }

  // selector de API key
  accounts: ApiAccount[] = [];
  selectedAccount!: ApiAccount | null;

  constructor(private heroService: HeroService, private breakpointObserver: BreakpointObserver, private apiKeyService: ApiKeyService) {
    this.getAccount();

    // inicializar cuentas y selección
    this.accounts = this.apiKeyService.getAccounts();
    this.selectedAccount = this.apiKeyService.getCurrentAccount() ?? this.accounts[0];
    // suscripción para actualizar selección si cambia en otro lugar
    this.apiKeyService.getCurrentAccount$().subscribe(account => {
      this.selectedAccount = account ?? this.accounts[0];
    });

    this.isSmallScreen = this.breakpointObserver
      .observe([Breakpoints.Handset, Breakpoints.Tablet, Breakpoints.TabletLandscape, '(max-width: 1569.99px)'])
      .pipe(
        map((result: { matches: any; }) => result.matches),
        shareReplay()
      );
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

  onSidenavClose() {
  }
}
