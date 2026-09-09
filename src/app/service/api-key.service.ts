import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiAccount, ImportValidationResult, ImportResult, Gw2TokenInfo, REQUIRED_GW2_PERMISSIONS, Gw2Permission, ValidImportAccount } from './key';

@Injectable({
  providedIn: 'root'
})
export class ApiKeyService {

  apiUrl = "https://api.guildwars2.com/v2/";

  // apiAccounts son las cuentas que hay en localStorage
  // apiAccount es la cuenta que esta actualmente seleccionada en localStorage
  private accounts: ApiAccount[] = [];
  private currentAccount$ = new BehaviorSubject<ApiAccount | null>(null);

  constructor(private httpClient: HttpClient) {

    // Recuperar cuentas guardadas
    const savedAccounts = localStorage.getItem('apiAccounts');
    if (savedAccounts) {
      try {
        this.accounts = JSON.parse(savedAccounts);
      } catch (error) {
        console.error('Error leyendo apiAccounts de localStorage', error);
        this.accounts = [];
        localStorage.removeItem('apiAccounts');
      }
    }
    // Recuperar cuenta seleccionada 
    const savedCurrent = localStorage.getItem('apiAccount');
    if (savedCurrent) {
      try {
        this.currentAccount$.next(JSON.parse(savedCurrent));
      } catch (error) {
        console.error('Error leyendo apiAccount de localStorage', error);
        localStorage.removeItem('apiAccount');
      }
    }
    // Si no hay cuenta seleccionada pero existen cuentas, seleccionar la primera
    if (!this.currentAccount$.value && this.accounts.length > 0) {
      this.setAccount(this.accounts[0]);
    }

  }

  getAccounts() {
    return this.accounts;
  }

  hasAccounts(): boolean {
    return this.accounts.length > 0;
  }

  setAccount(account: ApiAccount) {
    this.currentAccount$.next(account);
    localStorage.setItem('apiAccount', JSON.stringify(account));
  }

  private saveAccounts(): void {
    localStorage.setItem('apiAccounts', JSON.stringify(this.accounts));
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

  getTokenInfo(key: string) {
    const url = `${this.apiUrl}tokeninfo?access_token=${encodeURIComponent(key)}`;
    return this.httpClient.get<Gw2TokenInfo>(url);
  }

  getMissingPermissions(tokenInfo: Gw2TokenInfo): Gw2Permission[] {
    return REQUIRED_GW2_PERMISSIONS.filter(permission =>
      !tokenInfo.permissions.includes(permission)
    );
  }

  getAccount(key: string) {
    const url = `${this.apiUrl}account?access_token=${encodeURIComponent(key)}`;
    return this.httpClient.get<{ name: string }>(url);
  }

  isNameTaken(name: string, excludeIndex: number | null = null): boolean {
    // Comprueba si un alias ya esta utilizado
    // excludeIndex permite ignorar la propia cuenta cuando se esta editando
    const normalizedName = name.trim().toLowerCase();
    return this.accounts.some((account, index) => {
      if (excludeIndex !== null && index === excludeIndex) {
        return false;
      }
      return account.name.trim().toLowerCase() === normalizedName;
    });
  }

  isGw2NameTaken(gw2Name: string, excludeIndex: number | null = null): boolean {
    // Comprueba si un gw2Name ya esta utilizado
    // excludeIndex permite ignorar la propia cuenta cuando se esta editando
    const normalizedGw2Name = gw2Name.trim().toLowerCase();
    return this.accounts.some((account, index) => {
      if (excludeIndex !== null && index === excludeIndex) {
        return false;
      }
      return account.gw2Name.trim().toLowerCase() === normalizedGw2Name;
    });
  }

  addAccount(account: ApiAccount): boolean {
    // Devuelve false si gw2Name o alias ya existe
    // Devuelve true si la cuenta se ha añadido correctamente

    if (this.isGw2NameTaken(account.gw2Name)) {
      return false;
    }

    if (this.isNameTaken(account.name)) {
      return false;
    }

    this.accounts.push(account);
    this.saveAccounts();

    // Si es la primera cuenta, seleccionarla automaticamente
    if (this.accounts.length === 1) {
      this.setAccount(account);
    }
    return true;
  }

  updateAccount(index: number, account: ApiAccount): {
    success: boolean;
    accountChanged: boolean;
    reason?: 'not-found' | 'duplicate-gw2Name' | 'duplicate-name';
  } {

    const oldAccount = this.accounts[index];

    if (!oldAccount) {
      return {
        success: false,
        accountChanged: false,
        reason: 'not-found'
      };
    }

    // No permitir gw2Name duplicado. Se excluye la propia cuenta que se esta editando
    if (this.isGw2NameTaken(account.gw2Name, index)) {
      return {
        success: false,
        accountChanged: false,
        reason: 'duplicate-gw2Name'
      };
    }

    // No permitir alias duplicado. Se excluye la propia cuenta que se esta editando
    if (this.isNameTaken(account.name, index)) {
      return {
        success: false,
        accountChanged: false,
        reason: 'duplicate-name'
      };
    }

    const currentAccount = this.currentAccount$.value;

    // gw2Name identifica la cuenta real de GW2
    const isCurrent = currentAccount?.gw2Name.toLowerCase() === oldAccount.gw2Name.toLowerCase();

    this.accounts[index] = account;
    this.saveAccounts();

    // Si se esta modificando la cuenta activa, actualizar tambien currentAccount
    if (isCurrent) {
      this.setAccount(account);

      return {
        success: true,
        accountChanged: true
      };
    }

    return {
      success: true,
      accountChanged: false
    };
  }

  deleteAccount(index: number): boolean {
    // Devuelve true si la cuenta activa ha cambiado

    const deletedAccount = this.accounts[index];

    if (!deletedAccount) {
      return false;
    }

    const currentAccount = this.currentAccount$.value;
    const isCurrent = currentAccount?.gw2Name === deletedAccount.gw2Name;

    this.accounts.splice(index, 1);
    this.saveAccounts();

    // Si se ha borrado la cuenta activa
    if (isCurrent) {
      if (this.accounts.length > 0) {
        // Seleccionar automaticamente otra cuenta 
        this.setAccount(this.accounts[0]);
      } else {
        // Ya no quedan cuentas 
        this.currentAccount$.next(null);
        localStorage.removeItem('apiAccount');
      }
      return true;
    }
    return false;
  }


  // Exportacion
  exportAccounts(): string {
    return JSON.stringify(this.accounts, null, 2);
  }

  // Validacion de importacion
  validateImport(json: string): ImportValidationResult {

    let data: any;

    try {
      data = JSON.parse(json);
    } catch (error) {
      return {
        valid: false,
        error: 'El archivo no contiene un JSON válido.',
        total: 0,
        newAccounts: [],
        existingAccounts: [],
        validAccounts: [],
        invalidAccounts: []
      };
    }

    if (!Array.isArray(data)) {
      return {
        valid: false,
        error: 'El formato del archivo no es válido. Se esperaba una lista de cuentas.',
        total: 0,
        newAccounts: [],
        existingAccounts: [],
        validAccounts: [],
        invalidAccounts: []
      };
    }

    const newAccounts: ApiAccount[] = [];
    const existingAccounts: ApiAccount[] = [];
    const validAccounts: ValidImportAccount[] = [];
    const invalidAccounts: {
      index: number;
      name: string;
      gw2Name: string;
      reason: string;
    }[] = [];

    const addInvalid = (
      index: number,
      item: any,
      reason: string
    ): void => {

      invalidAccounts.push({
        index,
        name: typeof item?.name === 'string'
          ? item.name.trim()
          : '',
        gw2Name: typeof item?.gw2Name === 'string'
          ? item.gw2Name.trim()
          : '',
        reason
      });
    };

    // Para detectar dos veces el mismo gw2Name dentro del propio archivo
    const gw2NamesInFile: string[] = [];

    // Para detectar dos alias iguales dentro del propio archivo
    const namesInFile: string[] = [];

    data.forEach((item: any, index: number) => {

      // Validar estructura
      if (!item || typeof item !== 'object') {
        addInvalid(index, item, 'La cuenta no es un objeto válido.');
        return;
      }

      if (typeof item.name !== 'string') {
        addInvalid(index, item, 'El alias no es válido.');
        return;
      }

      if (typeof item.gw2Name !== 'string') {
        addInvalid(index, item, 'El nombre de cuenta GW2 no es válido.');
        return;
      }

      if (typeof item.key !== 'string') {
        addInvalid(index, item, 'La API Key no es válida.');
        return;
      }

      // Limpiar datos
      const name = item.name.trim();
      const gw2Name = item.gw2Name.trim();
      const key = item.key.trim();

      // Validar alias
      if (!name) {
        addInvalid(index, item, 'El alias es obligatorio.');
        return;
      }

      if (name.length > 20) {
        addInvalid(index, item, 'El alias no puede superar los 20 caracteres.');

        return;
      }

      // Validar gw2Name
      if (!gw2Name) {
        addInvalid(index, item, 'El nombre de cuenta GW2 es obligatorio.');
        return;
      }

      if (!/^[^.]+\.[0-9]{4}$/.test(gw2Name)) {
        addInvalid(index, item, 'El nombre de cuenta GW2 no tiene el formato Nombre.1234');
        return;
      }

      // Validar API Key
      if (!key) {
        addInvalid(index, item, 'La API Key es obligatoria.');
        return;
      }

      if (!/^[0-9A-Fa-f]+(?:-[0-9A-Fa-f]+)+$/.test(key)) {
        addInvalid(index, item, 'La API Key no tiene un formato válido.');
        return;
      }

      if (key.length > 72) {
        addInvalid(index, item, 'La API Key no tiene una longitud válida.');
        return;
      }

      // Comprobar duplicados dentro del archivo
      const normalizedGw2Name = gw2Name.toLowerCase();
      const normalizedName = name.toLowerCase();

      if (gw2NamesInFile.includes(normalizedGw2Name)) {
        addInvalid(index, item, 'El gw2Name aparece más de una vez en el archivo.');
        return;
      }

      if (namesInFile.includes(normalizedName)) {
        addInvalid(index, item, 'El alias aparece más de una vez en el archivo.');
        return;
      }

      gw2NamesInFile.push(normalizedGw2Name);
      namesInFile.push(normalizedName);

      const account: ApiAccount = {
        name,
        gw2Name,
        key
      };

      validAccounts.push({
        index,
        account
      });

      // Comprobar si ya existe
      // IMPORTANTE: gw2Name es el identificador unico de la cuenta
      const existing = this.accounts.find(existingAccount =>
        existingAccount.gw2Name.toLowerCase() === normalizedGw2Name
      );

      if (existing) {
        existingAccounts.push(account);
      } else {
        newAccounts.push(account);
      }
    });

    return {
      valid: invalidAccounts.length === 0,
      total: data.length,
      newAccounts,
      existingAccounts,
      validAccounts,
      invalidAccounts
    };
  }

  // Añadir solo cuentas nuevas, ignorando las que ya existen (basado en gw2Name)
  addNewAccounts(accounts: ApiAccount[]): ImportResult {

    let added = 0;

    for (const account of accounts) {

      // gw2Name es el identificador unico
      const exists = this.accounts.some(existing =>
        existing.gw2Name.toLowerCase() === account.gw2Name.toLowerCase()
      );

      if (exists) {
        continue;
      }

      // Mantener tambien la regla de gw2Name unico
      if (this.isGw2NameTaken(account.gw2Name)) {
        continue;
      }

      // Mantener tambien la regla de alias unico
      if (this.isNameTaken(account.name)) {
        continue;
      }

      this.accounts.push(account);
      added++;
    }

    if (added > 0) {
      this.saveAccounts();

      // Si no existia cuenta activa, seleccionar la primera
      if (!this.currentAccount$.value && this.accounts.length > 0) {
        this.setAccount(this.accounts[0]);
      }
    }

    return {
      success: true,
      added,
      updated: 0,
      invalid: 0
    };
  }

  // Actualizar solo las cuentas que ya existen, ignorando las que no existen (basado en gw2Name)
  updateExistingAccounts(accounts: ApiAccount[]): ImportResult {

    let updated = 0;

    for (const account of accounts) {

      const index = this.accounts.findIndex(existing =>
        existing.gw2Name.toLowerCase() === account.gw2Name.toLowerCase()
      );

      if (index === -1) {
        // No existe: se ignora
        continue;
      }

      const oldAccount = this.accounts[index];

      // Comprobar que el nuevo alias no lo esta utilizando otra cuenta distinta
      const nameTaken = this.accounts.some((existing, i) =>
        i !== index &&
        existing.name.trim().toLowerCase() === account.name.trim().toLowerCase()
      );

      if (nameTaken) {
        continue;
      }

      const currentAccount = this.currentAccount$.value;

      const isCurrent = currentAccount?.gw2Name.toLowerCase() === oldAccount.gw2Name.toLowerCase();

      this.accounts[index] = account;
      updated++;

      // Si era la cuenta activa, actualizarla
      if (isCurrent) {
        this.setAccount(account);
      }
    }

    if (updated > 0) {
      this.saveAccounts();
    }

    return {
      success: true,
      added: 0,
      updated,
      invalid: 0
    };
  }

  // Borrar todo e importar
  importReplaceAllAccounts(accounts: ApiAccount[]): ImportResult {

    this.accounts = [...accounts];

    this.saveAccounts();

    // Seleccionar la primera cuenta
    if (this.accounts.length > 0) {
      this.setAccount(this.accounts[0]);
    } else {
      this.currentAccount$.next(null);
      localStorage.removeItem('apiAccount');
    }

    return {
      success: true,
      added: accounts.length,
      updated: 0,
      invalid: 0
    };
  }

  // Borrar todo
  replaceAllAccounts(): ImportResult {

    localStorage.removeItem('apiAccounts');
    this.currentAccount$.next(null);
    localStorage.removeItem('apiAccount');

    return {
      success: true,
      added: 0,
      updated: 0,
      invalid: 0
    };
  }

}
