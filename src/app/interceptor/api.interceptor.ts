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

  constructor(private apiKeyService: ApiKeyService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    // Aplica solamente access_token a URLs que contengan "account" o "characters" (endpoints autenticados)

    const authEndpoints = [
      'account',
      'characters'
    ];

    if (!authEndpoints.some(e => req.url.includes(e))) {
      return next.handle(req);
    }

    return this.apiKeyService.getCurrentAccount$().pipe(
      take(1),
      switchMap(account => {
        const apiKey = account?.key;
        if (!apiKey) return next.handle(req);

        let url = req.url;

        // Reemplazar access_token si existe en la cadena de la URL
        if (url.includes('access_token=')) {
          url = url.replace(/access_token=[^&]*/, `access_token=${apiKey}`);
        }

        // Si no estaba en la cadena de la URL, se añade
        else if (!url.includes('access_token=')) {
          const separator = url.includes('?') ? '&' : '?';
          url = `${url}${separator}access_token=${apiKey}`;
        }

        // Revisar los HttpParams y reemplazar access_token si existe
        let newParams = req.params;
        // if (req.params.has('access_token')) {
        //   newParams = newParams.set('access_token', apiKey);
        // }

        let newHeaders = req.headers;

        if (this.noCacheSettings) {
          newHeaders = newHeaders
            .set('Cache-Control', 'no-cache, no-store, must-revalidate')
            .set('Pragma', 'no-cache')
            .set('Expires', '0');
        }

        if (this.noCacheTimestamp) {
          const separator = url.includes('?') ? '&' : '?';
          url = `${url}${separator}_=${Date.now()}`;
        }

        const cloned = req.clone({ 
          url, 
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
