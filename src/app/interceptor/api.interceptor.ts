import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { ApiKeyService } from '../service/api-key.service';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  // noCacheSettings: true para tratar de no cachear la respuesta mediante el navegador
  private noCacheSettings = false;
  // noCacheTimestamp: true para añadir un timestamp a la URL y romper la caché del navegador
  private noCacheTimestamp = false;

  // URL base de la API de GW2
  private readonly apiUrl = 'https://api.guildwars2.com/v2/';

  // Endpoints autenticados
  private readonly authEndpoints = [
    'account',
    'characters'
  ];

  constructor(private apiKeyService: ApiKeyService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // Comprobar que pertenece a la API de GW2
    if (!req.url.startsWith(this.apiUrl)) {
      return next.handle(req);
    }

    // Obtener endpoint de la URL
    const endpoint = req.url.substring(this.apiUrl.length);

    // Comprobar si necesita autenticacion
    const requiresAuth = this.authEndpoints.some(
      e => endpoint === e || endpoint.startsWith(`${e}/`)
    );

    if (!requiresAuth) {
      return next.handle(req);
    }

    return this.apiKeyService.getCurrentAccount$().pipe(
      take(1),
      switchMap(account => {

        const apiKey = account?.key;
        
        if (!apiKey) return next.handle(req);

        let newParams = req.params.set('access_token', apiKey);

        let newHeaders = req.headers;

        if (this.noCacheSettings) {
          newHeaders = newHeaders
            .set('Cache-Control', 'no-cache, no-store, must-revalidate')
            .set('Pragma', 'no-cache')
            .set('Expires', '0');
        }

        if (this.noCacheTimestamp) {
          newParams = newParams.set('_', Date.now().toString());
        }

        const cloned = req.clone({
          params: newParams,
          headers: newHeaders
        });

        // console.log(
        //   '[API Interceptor] URL final:\n',
        //   cloned.urlWithParams.replace('https://api.guildwars2.com/v2', '')
        // );

        return next.handle(cloned);
      })
    );
  }
}
