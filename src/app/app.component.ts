import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { Observable, timer } from 'rxjs';
import { HeroService } from "./service/hero.service";
import { ApiKeyService } from './service/api-key.service';
import { ApiAccount } from './service/key';
import { RefreshService } from './service/refresh.service';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

registerLocaleData(localeEs, 'es-ES');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'GW2 Angular';
  value: string = '';
  isSmallScreen!: Observable<boolean>;
  account: any = {
    name: '',
    error: false
  };
  loadingAccount = false;

  // Reloj
  private _time$: Observable<Date> = timer(0, 1000).pipe(
    map(tick => new Date()),
    shareReplay(1)
  );

  get time() {
    return this._time$;
  }

  // Selector de API key
  accounts: ApiAccount[] = [];
  selectedAccount!: ApiAccount | null;

  timeoutIds: ReturnType<typeof setTimeout>[] = [];

  constructor(private heroService: HeroService, private breakpointObserver: BreakpointObserver, private apiKeyService: ApiKeyService, private refreshService: RefreshService) { }

  ngOnInit() {
    // Inicializar cuentas
    this.accounts = this.apiKeyService.getAccounts();
    // Suscripcion para actualizar seleccion si cambia en otro lugar
    this.apiKeyService.getCurrentAccount$().subscribe(account => {
      this.selectedAccount = account ?? this.accounts[0];
      if (account) {
        this.getAccount();
      }
    });

    // Suscripcion a los cambios de tamaño de pantalla
    this.isSmallScreen = this.breakpointObserver
      .observe([Breakpoints.Handset, Breakpoints.Tablet, Breakpoints.TabletLandscape, '(max-width: 1569.99px)'])
      .pipe(
        map((result: { matches: any; }) => result.matches),
        shareReplay()
      );

    // Programar refresco diario con el reset del juego
    this.programarActualizacionDiaria();
  }

  ngOnDestroy() {
    this.timeoutIds.forEach(id => clearTimeout(id));
  }

  programarActualizacionDiaria() {
    // Hora objetivo UTC
    // Verano: 02:00 UTC+2 = 00:00 UTC
    // Invierno: 01:00 UTC+1 = 00:00 UTC
    const dailyTimer = this.refreshService.programarActualizacion(0, 0, 5, () => {

      // El timeout ya se ha ejecutado, lo quitamos de la lista
      this.timeoutIds = this.timeoutIds.filter(id => id !== dailyTimer);

      window.location.reload();
    });
    this.timeoutIds.push(dailyTimer);
  }

  getAccount() {
    this.loadingAccount = true;

    this.heroService.getAccount().subscribe((acc: any) => {
      this.account = {
        ...acc,
        name: acc?.name || '',
        error: false
      };
      this.loadingAccount = false;
    },
      (err) => {
        console.error('Error al obtener la cuenta:', err);
        console.warn('Problema en la API');
        this.account = {
          name: '',
          error: true
        };
        this.loadingAccount = false;
      }
    )
  }

  onAccountChange(account: ApiAccount) {
    this.apiKeyService.setAccount(account);
    window.location.reload();
  }

  onSidenavClose() {
  }
}
