import { Component, AfterViewInit, OnDestroy, Input, HostBinding } from '@angular/core';
import { ScrollService } from '../../service/scroll.service';

// USO. Añadir en html de componente:
// Para que solo se vea en vista de movil: <app-scroll-top-button></app-scroll-top-button>
// Para que se vea en vista de pc y en vista de movil: <app-scroll-top-button [showOnDesktop]="true"></app-scroll-top-button>

@Component({
  selector: 'app-scroll-top-button',
  templateUrl: './scroll-top-button.component.html',
  styleUrls: ['./scroll-top-button.component.css']
})
export class ScrollTopButtonComponent implements AfterViewInit, OnDestroy {

  @Input() showOnDesktop = false;

  @HostBinding('class.show-desktop')
  get showDesktopClass(): boolean {
    return this.showOnDesktop;
  }

  mostrarBotonArriba = false;

  private appBody: HTMLElement | null = null;
  private mobileContent: HTMLElement | null = null;

  constructor(private scrollService: ScrollService) { }

  private comprobarScroll = () => {
    this.mostrarBotonArriba = this.scrollService.obtenerScrollTop() > 300;
  };

  ngAfterViewInit(): void {
    this.appBody = document.querySelector('.app-body');
    this.mobileContent = document.querySelector('.mobile-content');

    this.appBody?.addEventListener('scroll', () => {
      this.comprobarScroll();
    });
    this.mobileContent?.addEventListener('scroll', () => {
      this.comprobarScroll();
    });

    this.comprobarScroll();
  }

  subirArriba(): void {
    this.scrollService.subirArriba();
  }

  ngOnDestroy(): void {
    this.appBody?.removeEventListener('scroll', this.comprobarScroll);
    this.mobileContent?.removeEventListener('scroll', this.comprobarScroll);
  }
}