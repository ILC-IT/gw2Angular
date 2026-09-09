import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RefreshService {

  constructor() { }

  programarActualizacion(
    horaUtc: number,
    minutoUtc: number,
    segundoUtc: number,
    accion: () => void
  ): ReturnType<typeof setTimeout> {

    const ahora = new Date();

    const siguienteActualizacion = new Date();
    siguienteActualizacion.setUTCHours(horaUtc, minutoUtc, segundoUtc, 0);

    if (siguienteActualizacion <= ahora) {
      siguienteActualizacion.setUTCDate(
        siguienteActualizacion.getUTCDate() + 1
      );
    }

    const tiempoRestante =
      siguienteActualizacion.getTime() - ahora.getTime();

    return setTimeout(accion, tiempoRestante);
  }

}