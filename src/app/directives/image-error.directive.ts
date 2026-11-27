import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: 'img'
})
export class ImageErrorDirective {

  /*
   * Directiva global para gestionar errores de carga de imagenes.
   * Se aplica automaticamente a todas las etiquetas <img> y oculta
   * aquellas cuya URL no se puede cargar, evitando mostrar el icono de imagen rota.
   */

  constructor(private el: ElementRef<HTMLImageElement>) { }

  @HostListener('error')
  onError(): void {
    const img = this.el.nativeElement;
    img.style.display = 'none';
  }
}