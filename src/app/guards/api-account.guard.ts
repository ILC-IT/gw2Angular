import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiKeyService } from '../service/api-key.service';

@Injectable({
  providedIn: 'root'
})
export class ApiAccountGuard implements CanActivate {

  constructor(private apiKeyService: ApiKeyService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const tab = route.paramMap.get('tab');

    // Estas pestañas no necesitan API key 
    if (tab === 'dailyraidbounties') {
      return true;
    }

    // Si no hay cuentas, redirigir al componente Accounts
    const hasAccounts = this.apiKeyService.hasAccounts();
    const rutaKey = this.router.createUrlTree(['/accounts']);
    return hasAccounts
      ? true
      : rutaKey
  }

}
