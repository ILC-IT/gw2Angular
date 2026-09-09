import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { ApiKeyService } from '../../service/api-key.service';
import { ApiAccount } from '../../service/key';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  title = 'GW2 Angular';
  value: string = '';

  @ViewChild('diariasTrigger') diariasTrigger!: MatMenuTrigger;
  @ViewChild('heroesTrigger') heroesTrigger!: MatMenuTrigger;
  @ViewChild('buscadorStatsTrigger') buscadorStatsTrigger!: MatMenuTrigger;
  @ViewChild('buscadorPoiTrigger') buscadorPoiTrigger!: MatMenuTrigger;
  @ViewChild('raidTrigger') raidTrigger!: MatMenuTrigger;
  @ViewChild('legendariosTrigger') legendariosTrigger!: MatMenuTrigger;
  @ViewChild('homesteadTrigger') homesteadTrigger!: MatMenuTrigger;

  private openMenuTimeout: any;
  private closeMenuTimeout: any;

  openMenu(trigger: MatMenuTrigger) {
    clearTimeout(this.closeMenuTimeout);
    this.openMenuTimeout = setTimeout(() => {
      trigger.openMenu();
    }, 50); // Ajustar el tiempo segun sea necesario
  }

  cancelCloseMenu(trigger: MatMenuTrigger) {
    clearTimeout(this.closeMenuTimeout);
  }

  closeMenu(trigger: MatMenuTrigger) {
    clearTimeout(this.openMenuTimeout);
    this.closeMenuTimeout = setTimeout(() => {
      trigger.closeMenu();
    }, 50); // Ajustar el tiempo segun sea necesario
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

  onAccountChange(account: ApiAccount) {
    this.apiKeyService.setAccount(account);
    window.location.reload();
  }

}
