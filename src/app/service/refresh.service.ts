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

    const tiempoRestante = siguienteActualizacion.getTime() - ahora.getTime();

    return setTimeout(accion, tiempoRestante);
  }

  getTimeZone(): string {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  }

  getHoraLocalDesdeUtc(horaUtc: number, minutoUtc: number = 0): string {
    const fecha = new Date();

    fecha.setUTCHours(horaUtc, minutoUtc, 0, 0);

    return fecha.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
  }


}