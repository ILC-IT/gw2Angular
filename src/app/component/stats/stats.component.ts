import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { atributos, atributosEng, atributos2, atributos2Eng, prefijos, prefijosEng, armaduras, armadurasEng, statsEsp, statsEng } from "./statsDefinition";
// import * as _ from 'lodash';
import { isEqual } from 'lodash';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  loadingS = false;
  loadingP = false;
  loadingA = false;
  loadingSEng = false;
  loadingPEng = false;
  loadingAEng = false;
  resultado = {
    nombreStat: '',
    nombreStatEng: '',
    stats: [''],
    armadura: '',
    juego: ''
  };
  resultadoEng = {
    nombreStat: '',
    nombreStatEsp: '',
    stats: [''],
    armadura: '',
    juego: ''
  };
  resultadoPrefijo = {
    nombreStat: '',
    nombreStatEng: '',
    stats: [''],
    armadura: '',
    juego: ''
  };
  resultadoPrefijoEng = {
    nombreStat: '',
    nombreStatEsp: '',
    stats: [''],
    armadura: '',
    juego: ''
  };
  resultadoArmadura = {
    nombreStat: '',
    nombreStatEng: '',
    stats: [''],
    armadura: '',
    juego: ''
  };
  resultadoArmaduraEng = {
    nombreStat: '',
    nombreStatEsp: '',
    stats: [''],
    armadura: '',
    juego: ''
  };
  formularioStats!: FormGroup;
  formularioPrefijo!: FormGroup;
  formularioArmadura!: FormGroup;
  formularioStatsEng!: FormGroup;
  formularioPrefijoEng!: FormGroup;
  formularioArmaduraEng!: FormGroup;
  atributos = atributos;
  atributosEng = atributosEng;
  atributos2 = atributos2;
  atributos2Eng = atributos2Eng;
  prefijos = prefijos;
  prefijosEng = prefijosEng;
  armaduras = armaduras;
  armadurasEng = armadurasEng;

  // Para las rutas a las pestañas de diarias
  selectedTabIndex: number = 0;
  tabs: string[] = ['Buscar por stats (atributos)', 'Buscar por prefijo', 'Buscar por nombre arma/armadura'];
  routeMap: { [key: string]: string } = {
    'buscarporstats': 'Buscar por stats (atributos)',
    'buscarporprefijo': 'Buscar por prefijo',
    'buscarporarma': 'Buscar por nombre arma/armadura'
  };

  constructor(private formBuilder: FormBuilder,  private route: ActivatedRoute,  private router: Router) { 
    this.initForm();
  }

  ngOnInit(): void {
    // Para hacer el routing a las pestañas de la tabla
    this.route.paramMap.subscribe(params => {
      const tab = params.get('tab');
      if (tab) {
        this.selectedTabIndex = this.getTabIndex(tab);
      }
    });
  }

  // stat1 = new FormControl();
  // OnStat1Selected(option: { value: any; }) {
  //   console.log("1 ", option.value);
  // }

  // devuelve el index de la pestaña de la tabla
  getTabIndex(tab: string): number {
    const tabName = this.routeMap[tab] || tab;
    return this.tabs.indexOf(tabName);
  }

  sanitizeRoute(name: string): string {
    return name.replace(/[^\w-]+/g, '').toLowerCase();
  }

  onTabChange(event: any) {
    const selectedTab = this.tabs[event.index];
    const routeName = Object.keys(this.routeMap).find(key => this.routeMap[key] === selectedTab) || this.sanitizeRoute(selectedTab);
    this.router.navigate(['/stats', routeName]);
  }

  initForm(){
    this.formularioStats = this.formBuilder.group({
      stat1Mayor: [''],
      stat2Mayor: [''],
      stat1Menor: [''],
      stat2Menor: ['']
    });
    this.formularioPrefijo = this.formBuilder.group({
      prefijo: ''
    });
    this.formularioArmadura = this.formBuilder.group({
      armadura: ''
    });
    this.formularioStatsEng = this.formBuilder.group({
      stat1Mayor: [''],
      stat2Mayor: [''],
      stat1Menor: [''],
      stat2Menor: ['']
    });
    this.formularioPrefijoEng = this.formBuilder.group({
      prefijo: ''
    });
    this.formularioArmaduraEng = this.formBuilder.group({
      armadura: ''
    });
  }

  sendFormStat(){
    if (this.formularioStats.status == "INVALID"){
      return;
    }
    this.resultado = this.buscarAtributos();
    this.loadingS = true;
  }

  sendFormPrefijo(){
    if (this.formularioPrefijo.status == "INVALID"){
      return;
    }
    this.resultadoPrefijo = this.buscarPrefijo();
    this.loadingP = true;
  }

  sendFormArmadura(){
    if (this.formularioArmadura.status == "INVALID"){
      return;
    }
    this.resultadoArmadura = this.buscarArmadura();
    this.loadingA = true;
  }

  sendFormStatEng(){
    if (this.formularioStatsEng.status == "INVALID"){
      return;
    }
    this.resultadoEng = this.buscarAtributosEng();
    this.loadingSEng = true;
  }

  sendFormPrefijoEng(){
    if (this.formularioPrefijoEng.status == "INVALID"){
      return;
    }
    this.resultadoPrefijoEng = this.buscarPrefijoEng();
    this.loadingPEng = true;
  }

  sendFormArmaduraEng(){
    if (this.formularioArmaduraEng.status == "INVALID"){
      return;
    }
    this.resultadoArmaduraEng = this.buscarArmaduraEng();
    this.loadingAEng = true;
  }

  resetFormS(){
    this.formularioStats.reset();
    this.formularioStats.markAsUntouched();
    this.formularioStats.setValue({
      stat1Mayor: '',
      stat2Mayor: '',
      stat1Menor: '',
      stat2Menor: ''
    });
    this.loadingS = false;
  }

  resetFormP(){
    this.formularioPrefijo.reset();
    this.formularioPrefijo.markAsUntouched();
    this.formularioPrefijo.setValue({
      prefijo: ''
    });
    this.loadingP = false;
  }

  resetFormA(){
    this.formularioArmadura.reset();
    this.formularioArmadura.markAsUntouched();
    this.formularioArmadura.setValue({
      armadura: ''
    });
    this.loadingA = false;
  }

  resetFormSEng(){
    this.formularioStatsEng.reset();
    this.formularioStatsEng.markAsUntouched();
    this.formularioStatsEng.setValue({
      stat1Mayor: '',
      stat2Mayor: '',
      stat1Menor: '',
      stat2Menor: ''
    });
    this.loadingSEng = false;
  }

  resetFormPEng(){
    this.formularioPrefijoEng.reset();
    this.formularioPrefijoEng.markAsUntouched();
    this.formularioPrefijoEng.setValue({
      prefijo: ''
    });
    this.loadingPEng = false;
  }

  resetFormAEng(){
    this.formularioArmaduraEng.reset();
    this.formularioArmaduraEng.markAsUntouched();
    this.formularioArmaduraEng.setValue({
      armadura: ''
    });
    this.loadingAEng = false;
  }

  buscarAtributos(){
    let valor = this.formularioStats.value;
    let arrayBuscar = [];
    let resultadoo = {};
    arrayBuscar.push(valor.stat1Mayor);
    arrayBuscar.push(valor.stat2Mayor);
    arrayBuscar.push(valor.stat1Menor);
    arrayBuscar.push(valor.stat2Menor);
    // console.log(valor.stat1Mayor);
    // console.log(statsEsp[0])
    // console.log(arrayBuscar)

    for (let i = 0; i < statsEsp.length; i++){
      if (isEqual(statsEsp[i].stats, arrayBuscar) ){
        //console.log('encontrado')
        return resultadoo = statsEsp[i];
      }
    }

    return resultadoo = {
      nombreStat: 'No existe',
      nombreStatEng: 'No existe',
      stats: ['No existe'],
      armadura: 'No existe',
      juego: 'No existe'
    }
  }

  buscarPrefijo(){
    let valor = this.formularioPrefijo.value;
    let resultadoo = {};
    // console.log(valor.prefijo)

    for (let i = 0; i < statsEsp.length; i++){
      if (isEqual(statsEsp[i].nombreStat, valor.prefijo) ){
        // console.log('encontrado')
        return resultadoo = statsEsp[i];
      }
    }

    return resultadoo = {
      nombreStat: 'No existe',
      nombreStatEng: 'No existe',
      stats: ['No existe'],
      armadura: 'No existe',
      juego: 'No existe'
    }
  }

  buscarArmadura(){
    let valor = this.formularioArmadura.value;
    let resultadoo = {};
    // console.log(valor.armadura)

    for (let i = 0; i < statsEsp.length; i++){
      if (isEqual(statsEsp[i].armadura, valor.armadura) ){
        // console.log('encontrado')
        return resultadoo = statsEsp[i];
      }
    }

    return resultadoo = {
      nombreStat: 'No existe',
      nombreStatEng: 'No existe',
      stats: ['No existe'],
      armadura: 'No existe',
      juego: 'No existe'
    }
  }

  //ENG
  buscarAtributosEng(){
    let valor = this.formularioStatsEng.value;
    let arrayBuscar = [];
    let resultadoo = {};
    arrayBuscar.push(valor.stat1Mayor);
    arrayBuscar.push(valor.stat2Mayor);
    arrayBuscar.push(valor.stat1Menor);
    arrayBuscar.push(valor.stat2Menor);
    // console.log(valor.stat1Mayor);
    // console.log(statsEng[0])
    // console.log(arrayBuscar)

    for (let i = 0; i < statsEng.length; i++){
      if (isEqual(statsEng[i].stats, arrayBuscar) ){
        // console.log('encontrado')
        return resultadoo = statsEng[i];
      }
    }

    return resultadoo = {
      nombreStat: 'No exists',
      nombreStatEsp: 'No exists',
      stats: ['No exists'],
      armadura: 'No exists',
      juego: 'No exists'
    }
  }

  buscarPrefijoEng(){
    let valor = this.formularioPrefijoEng.value;
    let resultadoo = {};
    // console.log(valor.prefijo)

    for (let i = 0; i < statsEng.length; i++){
      if (isEqual(statsEng[i].nombreStat, valor.prefijo) ){
        // console.log('encontrado')
        return resultadoo = statsEng[i];
      }
    }

    return resultadoo = {
      nombreStat: 'No exists',
      nombreStatEsp: 'No exists',
      stats: ['No exists'],
      armadura: 'No exists',
      juego: 'No exists'
    }
  }

  buscarArmaduraEng(){
    let valor = this.formularioArmaduraEng.value;
    let resultadoo = {};
    // console.log(valor.armadura)

    for (let i = 0; i < statsEng.length; i++){
      if (isEqual(statsEng[i].armadura, valor.armadura) ){
        // console.log('encontrado')
        return resultadoo = statsEng[i];
      }
    }

    return resultadoo = {
      nombreStat: 'No exists',
      nombreStatEsp: 'No exists',
      stats: ['No exists'],
      armadura: 'No exists',
      juego: 'No exists'
    }
  }

}
