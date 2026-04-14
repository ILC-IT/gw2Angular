import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiAccount, apiAccounts } from './key';

@Injectable({
  providedIn: 'root'
})
export class ApiKeyService {

  private accounts: ApiAccount[] = apiAccounts;

  private currentAccount$ = new BehaviorSubject<ApiAccount | null>(null);

  constructor() {
    const saved = localStorage.getItem('apiAccount');
    if (saved) {
      this.currentAccount$.next(JSON.parse(saved));
    } else if (this.accounts.length > 0) {
      // selecciona la primera API key por defecto
      this.setAccount(this.accounts[0]);
    }
  }

  getAccounts() {
    return this.accounts;
  }

  setAccount(account: ApiAccount) {
    this.currentAccount$.next(account);
    localStorage.setItem('apiAccount', JSON.stringify(account));
  }

  getCurrentAccount() {
    return this.currentAccount$.value;
  }

  getCurrentKey(): string | null {
    return this.currentAccount$.value?.key || null;
  }

  getCurrentAccount$() {
    return this.currentAccount$.asObservable();
  }
}
