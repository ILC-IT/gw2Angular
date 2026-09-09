import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiAccount, Gw2Permission, Gw2TokenInfo, InvalidImportAccount, VALIDATE_GW2_ACCOUNT_NAME, ValidImportAccount } from '../../service/key';
import { ApiKeyService } from '../../service/api-key.service';

@Component({
  selector: 'app-key-form',
  templateUrl: './key-form.component.html',
  styleUrls: ['./key-form.component.css']
})
export class KeyFormComponent implements OnInit {

  form: FormGroup;
  accounts: ApiAccount[] = [];
  currentAccount: ApiAccount | null = null;
  editingIndex: number | null = null;
  errorMessage = '';
  importAccountsData: ApiAccount[] = [];
  importJson = '';
  showImportOptions = false;
  importTotal = 0;
  importNew = 0;
  importExisting = 0;
  importInvalid = 0;
  importInvalidAccounts: InvalidImportAccount[] = [];
  isSaving = false;
  isImporting = false;

  constructor(private fb: FormBuilder, private apiKeyService: ApiKeyService) {
    this.form = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.maxLength(20)
        ]
      ],
      gw2Name: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[^.]+\.[0-9]{4}$/)
        ]
      ],
      key: [
        '',
        [
          Validators.required,
          Validators.maxLength(72),
          Validators.pattern(/^[0-9A-Fa-f]+(?:-[0-9A-Fa-f]+)+$/)
        ]
      ]
    });
  }

  ngOnInit(): void {
    this.loadAccounts();

    this.apiKeyService.getCurrentAccount$().subscribe(account => {
      this.currentAccount = account;
    });
  }

  loadAccounts(): void {
    this.accounts = this.apiKeyService.getAccounts();
  }

  // Validar los permisos de la api key
  private async validateApiKey(key: string, gw2Name: string, validateAccountName = VALIDATE_GW2_ACCOUNT_NAME): Promise<{
    valid: boolean;
    error?: string;
  }> {

    let tokenInfo: Gw2TokenInfo;

    // Comprobar que la API Key es valida
    try {
      tokenInfo = await this.apiKeyService
        .getTokenInfo(key)
        .toPromise();

    } catch (error) {
      return {
        valid: false,
        error: 'La API Key no es válida o no se ha podido verificar.'
      };
    }

    // Comprobar permisos requeridos
    const missingPermissions =
      this.apiKeyService.getMissingPermissions(tokenInfo);

    if (missingPermissions.length > 0) {
      return {
        valid: false,
        error:
          'La API Key no tiene todos los permisos necesarios. ' +
          `Faltan: ${missingPermissions.join(', ')}.`
      };
    }

    // Comprobar que el gw2Name pertenece realmente a la API Key
    if (validateAccountName) {

      try {
        const gw2Account = await this.apiKeyService
          .getAccount(key)
          .toPromise();

        if (
          gw2Account.name.trim().toLowerCase() !== gw2Name.trim().toLowerCase()
        ) {
          return {
            valid: false,
            error: 'El gw2Name no corresponde con la API Key indicada.'
          };
        }

      } catch (error) {
        return {
          valid: false,
          error: 'No se ha podido comprobar la cuenta asociada a la API Key.'
        };
      }
    }

    return {
      valid: true
    };
  }

  private async validateImportedAccounts(accounts: ValidImportAccount[]): Promise<{
    validAccounts: ApiAccount[];
    invalidAccounts: InvalidImportAccount[];
  }> {

    const validAccounts: ApiAccount[] = [];
    const invalidAccounts: InvalidImportAccount[] = [];

    const results = await Promise.all(
      accounts.map(async (item) => {

        const validation = await this.validateApiKey(item.account.key, item.account.gw2Name);

        return {
          index: item.index,
          account: item.account,
          validation
        };
      })
    );

    for (const result of results) {

      if (result.validation.valid) {
        validAccounts.push(result.account);
        continue;
      }

      invalidAccounts.push({
        index: result.index,
        name: result.account.name,
        gw2Name: result.account.gw2Name,
        reason: result.validation.error || 'La API Key no es válida.'
      });
    }

    return {
      validAccounts,
      invalidAccounts
    };
  }

  // Añadir una nueva cuenta o actualizar la que estamos editando
  async save(): Promise<void> {
    if (this.isSaving) {
      return;
    }

    this.errorMessage = '';

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isSaving = true;

    try {
      const account: ApiAccount = {
        name: this.form.value.name.trim(),
        gw2Name: this.form.value.gw2Name.trim(),
        key: this.form.value.key.trim()
      };

      const oldIndex = this.editingIndex;

      // Comprobar que el gw2Name es unico
      if (this.apiKeyService.isGw2NameTaken(account.gw2Name, oldIndex)) {
        this.errorMessage = 'Ya existe una cuenta con ese gw2Name.';
        return;
      }

      // Comprobar que el alias es unico
      if (this.apiKeyService.isNameTaken(account.name, oldIndex)) {
        this.errorMessage = 'Ya existe una cuenta con ese alias.';
        return;
      }

      // Validar API Key contra GW2
      const keyValidation = await this.validateApiKey(account.key, account.gw2Name);

      if (!keyValidation.valid) {
        this.errorMessage = keyValidation.error || 'La API Key no es válida.';
        return;
      }

      // Actualizar cuenta
      if (oldIndex !== null) {
        const result = this.apiKeyService.updateAccount(oldIndex, account);

        if (!result.success) {
          switch (result.reason) {
            case 'duplicate-gw2Name':
              this.errorMessage = 'Ya existe una cuenta con ese gw2Name.';
              break;

            case 'duplicate-name':
              this.errorMessage = 'Ya existe una cuenta con ese alias.';
              break;

            default:
              this.errorMessage = 'No se ha podido actualizar la cuenta.';
          }

          return;
        }

        this.loadAccounts();
        this.cancelEdit();

        if (result.accountChanged) {
          window.location.reload();
        }

        return;
      }

      // Añadir cuenta
      const wasEmpty = this.accounts.length === 0;
      const success = this.apiKeyService.addAccount(account);

      if (!success) {
        this.errorMessage = 'No se ha podido guardar la cuenta.';
        return;
      }

      this.loadAccounts();
      this.cancelEdit();

      // addAccount() selecciona automaticamente la primera cuenta
      if (wasEmpty) {
        window.location.reload();
      }

    } finally {
      this.isSaving = false;
    }
  }

  // Cargar una cuenta en el formulario para editarla
  edit(index: number): void {
    const account = this.accounts[index];

    this.errorMessage = '';

    this.form.patchValue({
      name: account.name,
      gw2Name: account.gw2Name,
      key: account.key
    });

    this.editingIndex = index;
  }

  // Eliminar una cuenta
  delete(index: number): void {
    const account = this.accounts[index];

    if (!confirm(`¿Eliminar la cuenta "${account.name}"?`)) {
      return;
    }

    const accountChanged = this.apiKeyService.deleteAccount(index);

    this.loadAccounts();

    // Si se ha eliminado la cuenta activa y se ha seleccionado otra (o ninguna), recargar la aplicacion 
    if (accountChanged) {
      window.location.reload();
    }
  }

  // Seleccionar una cuenta como cuenta activa
  select(account: ApiAccount): void {
    this.apiKeyService.setAccount(account);
    // La cuenta activa ha cambiado
    window.location.reload();
  }

  // Cancelar la edicion
  cancelEdit(): void {
    this.editingIndex = null;
    this.errorMessage = '';

    this.form.reset({
      name: '',
      gw2Name: '',
      key: ''
    });
  }

  isCurrent(account: ApiAccount): boolean {
    return this.currentAccount?.gw2Name === account.gw2Name;
  }

  exportAccounts(): void {

    const json = this.apiKeyService.exportAccounts();
    const nombreArchivoSalida = 'gw2Angular-accounts.json';
    const blob = new Blob(
      [json],
      { type: 'application/json;charset=utf-8' }
    );
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');

    link.href = url;
    link.download = nombreArchivoSalida;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => {
      window.URL.revokeObjectURL(url);
    }, 100);
  }

  async importAccounts(event: Event): Promise<void> {

    this.errorMessage = '';

    const input = event.target as HTMLInputElement;

    if (!input.files || input.files.length === 0) {
      return;
    }

    const file = input.files[0];

    // Indicar inmediatamente que estamos procesando el archivo
    this.isImporting = true;

    const reader = new FileReader();

    reader.onload = async () => {

      try {

        const json = reader.result as string;

        // 1. Validar JSON, estructura, formato y duplicados
        const result = this.apiKeyService.validateImport(json);

        this.importTotal = result.total;
        this.importInvalidAccounts = [
          ...result.invalidAccounts
        ];

        // JSON invalido o estructura incorrecta
        if (result.error) {
          this.errorMessage = result.error;
          return;
        }

        // 2. Validar las API Keys de las cuentas conservando el indice original del archivo
        const apiValidation = await this.validateImportedAccounts(result.validAccounts);

        // 3. Guardar solamente las cuentas con API Key valida
        this.importAccountsData = [
          ...apiValidation.validAccounts
        ];

        // 4. Añadir a la lista los errores de las API Keys
        this.importInvalidAccounts = [
          ...this.importInvalidAccounts,
          ...apiValidation.invalidAccounts
        ];

        // 5. Actualizar contadores
        this.importInvalid = this.importInvalidAccounts.length;

        this.importNew = this.importAccountsData.filter(account =>
          result.newAccounts.some(newAccount =>
            newAccount.gw2Name.toLowerCase() === account.gw2Name.toLowerCase()
          )
        ).length;

        this.importExisting = this.importAccountsData.filter(account =>
          result.existingAccounts.some(existingAccount =>
            existingAccount.gw2Name.toLowerCase() === account.gw2Name.toLowerCase()
          )
        ).length;

        // 6. Mostrar el resultado
        this.showImportOptions = true;

      } catch (error) {
        console.error('Error durante la importación:', error);
        this.errorMessage = 'Se ha producido un error durante la importación.';
      } finally {
        this.isImporting = false;
      }
    };

    reader.onerror = () => {
      this.isImporting = false;
      this.errorMessage = 'No se ha podido leer el archivo.';
    };

    reader.readAsText(file);

    // Permitir volver a seleccionar el mismo archivo
    input.value = '';
  }

  importAddNew(): void {

    const newAccounts = this.importAccountsData.filter(account =>
      !this.accounts.some(existing =>
        existing.gw2Name.toLowerCase() === account.gw2Name.toLowerCase()
      )
    );

    const result = this.apiKeyService.addNewAccounts(newAccounts);

    this.finishImport(
      `Se han añadido ${result.added} cuenta(s) nueva(s).`
    );
  }

  importUpdateExisting(): void {

    const existingAccounts = this.importAccountsData.filter(account =>
      this.accounts.some(existing =>
        existing.gw2Name.toLowerCase() === account.gw2Name.toLowerCase()
      )
    );

    const result = this.apiKeyService.updateExistingAccounts(existingAccounts);

    this.finishImport(`Se han actualizado ${result.updated} cuenta(s).`);
  }

  importReplaceAll(): void {

    const confirmed = confirm(
      'Esta acción borrará todas las cuentas actuales y las sustituirá por las del archivo.\n\n¿Continuar?'
    );

    if (!confirmed) {
      return;
    }

    const result = this.apiKeyService.importReplaceAllAccounts(this.importAccountsData);

    this.finishImport(`Se han importado ${result.added} cuenta(s).`);
  }

  replaceAll(): void {

    const confirmed = confirm(
      'Esta acción borrará todas las cuentas actuales.\n\n¿Continuar?'
    );

    if (!confirmed) {
      return;
    }

    this.apiKeyService.replaceAllAccounts();

    this.loadAccounts();
    
    const message = 'Se han borrado todas las cuentas.';
    alert(message);

    // Recargar para actualizar completamente la aplicacion
    window.location.reload();
  }

  cancelImport(): void {

    this.showImportOptions = false;

    this.importJson = '';
    this.importAccountsData = [];
    this.importInvalidAccounts = [];

    this.importTotal = 0;
    this.importNew = 0;
    this.importExisting = 0;
    this.importInvalid = 0;
  }

  private finishImport(message: string): void {

    this.showImportOptions = false;

    this.importJson = '';
    this.importAccountsData = [];
    this.importInvalidAccounts = [];

    this.importTotal = 0;
    this.importNew = 0;
    this.importExisting = 0;
    this.importInvalid = 0;

    this.loadAccounts();

    alert(message);

    // Recargar para actualizar completamente la aplicacion
    window.location.reload();
  }

}
