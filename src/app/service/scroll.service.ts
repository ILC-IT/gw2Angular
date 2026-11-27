import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  esMovil(): boolean {
    return window.matchMedia('(max-width: 700px)').matches;
  }

  subirArriba(): void {
    const appBody = document.querySelector('.app-body') as HTMLElement | null;
    const mobileContent = document.querySelector('.mobile-content') as HTMLElement | null;

    appBody?.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    mobileContent?.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  obtenerScrollTop(): number {
    const appBody = document.querySelector('.app-body') as HTMLElement | null;
    const mobileContent = document.querySelector('.mobile-content') as HTMLElement | null;

    return appBody?.scrollTop || mobileContent?.scrollTop || 0;
  }
}