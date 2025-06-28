import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { Observable, timer } from 'rxjs';
import { HeroService } from "./service/hero.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'GW2 Angular';
  value: string = '';
  isSmallScreen: Observable<boolean>;
  account: any = [];

  //reloj
  private _time$: Observable<Date> = timer(0, 1000).pipe(
    map(tick => new Date()),
    shareReplay(1)
  );

  get time() {
    return this._time$;
  }

  constructor(private heroService: HeroService, private breakpointObserver: BreakpointObserver) {
    this.getAccount();

    this.isSmallScreen = this.breakpointObserver
      .observe([Breakpoints.Handset, Breakpoints.Tablet, Breakpoints.TabletLandscape, '(max-width: 1569.99px)'])
      .pipe(
        map((result: { matches: any; }) => result.matches),
        shareReplay()
      );
  }

  getAccount(){
    this.heroService.getAccount().subscribe((acc: any) => {
        this.account = acc;
      },
      (err) => {
        console.error('Error al obtener la cuenta:', err);
      }
  )}

  onSidenavClose() {
  }
}
