import { Component, Input, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { ApiKeyService } from '../../service/api-key.service';
import { ApiAccount } from '../../service/key';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  value: string = ''; // Para el buscador de la wiki

  @ViewChild('diariasTrigger') diariasTrigger!: MatMenuTrigger;
  @ViewChild('heroesTrigger') heroesTrigger!: MatMenuTrigger;
  @ViewChild('buscadorStatsTrigger') buscadorStatsTrigger!: MatMenuTrigger;
  @ViewChild('buscadorPoiTrigger') buscadorPoiTrigger!: MatMenuTrigger;
  @ViewChild('raidTrigger') raidTrigger!: MatMenuTrigger;
  @ViewChild('legendariosTrigger') legendariosTrigger!: MatMenuTrigger;
  @ViewChild('homesteadTrigger') homesteadTrigger!: MatMenuTrigger;

  private openMenuTimeout: any;
  private closeMenuTimeout: any;
  private activeTrigger: MatMenuTrigger | null = null;

  openMenu(trigger: MatMenuTrigger) {
    clearTimeout(this.openMenuTimeout);
    clearTimeout(this.closeMenuTimeout);

    this.openMenuTimeout = setTimeout(() => {
      // Si hay otro menu abierto, cerrarlo
      if (this.activeTrigger && this.activeTrigger !== trigger) {
        this.activeTrigger.closeMenu();
      }

      this.activeTrigger = trigger;
      trigger.openMenu();
    }, 50); // Ajustar el tiempo segun sea necesario
  }

  cancelCloseMenu(trigger: MatMenuTrigger) {
    clearTimeout(this.closeMenuTimeout);
  }

  closeMenu(trigger: MatMenuTrigger) {
    clearTimeout(this.openMenuTimeout);
    clearTimeout(this.closeMenuTimeout);

    this.closeMenuTimeout = setTimeout(() => {
      trigger.closeMenu();

      if (this.activeTrigger === trigger) {
        this.activeTrigger = null;
      }
    }, 150); // Ajustar el tiempo segun sea necesario
  }

  @Input() account: any = {
    name: '',
    error: false
  };

  @Input() loadingAccount = false;

  // Selector de API key
  accounts: ApiAccount[] = [];
  selectedAccount!: ApiAccount | null;

  constructor(private apiKeyService: ApiKeyService) { }

  ngOnInit() {
    // Inicializar cuentas
    this.accounts = this.apiKeyService.getAccounts();
    this.selectedAccount = this.apiKeyService.getCurrentAccount() ?? this.accounts[0];
    // Suscripcion para actualizar seleccion si cambia en otro lugar
    this.apiKeyService.getCurrentAccount$().subscribe(account => {
      this.selectedAccount = account ?? this.accounts[0];
    });
  }

  ngOnDestroy(): void {
    clearTimeout(this.openMenuTimeout);
    clearTimeout(this.closeMenuTimeout);

    if (this.activeTrigger) {
      this.activeTrigger.closeMenu();
      this.activeTrigger = null;
    }
  }

  onAccountChange(account: ApiAccount) {
    this.apiKeyService.setAccount(account);
    window.location.reload();
  }

  get selectedKp(): string {
    return this.selectedAccount?.kp || '';
  }

}
