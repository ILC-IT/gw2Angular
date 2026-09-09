import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { TYPE_LABELS, TYPE_ICONS, VALID_MAPS_ES, VALID_MAPS_EN, normalizeText, quitarEspaciosGuionesAntesText, CHAT_CODE_HEADERS, ChatCodeType, HEADER_TO_TYPE } from './buscadorExtra';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit, OnDestroy {

  fichEn = 'assets/poi/full_poi_Tyria_Mists_en_grouped.json';
  fichEs = 'assets/poi/full_poi_Tyria_Mists_es_grouped.json';

  errorArchivoEn = false;
  errorArchivoEs = false;
  loadingNombre = false;
  loadingName = false;
  loadingCodigo = false;
  resultadoNombre: any = null;
  resultadoName: any = null;
  resultadoCodigoEs: any = null;
  resultadoCodigoEn: any = null;
  formularioNombre!: FormGroup;
  formularioName!: FormGroup;
  formularioCodigo!: FormGroup;

  optionsEs: any[] = [];  // todos los items
  filteredByTypeEs: any[] = [];// items solo del tipo elegido
  filteredOptionsEs: any[] = []; // resultados finales autocomplete
  optionsEn: any[] = [];
  filteredByTypeEn: any[] = [];
  filteredOptionsEn: any[] = [];
  copiadoEs = false;
  copiadoEn = false;
  copiadoCodigo = false;
  busquedaRealizadaEs = false;
  busquedaRealizadaEn = false;
  busquedaRealizadaC = false;
  typesEs: string[] = [];
  typesEn: string[] = [];
  mapsEs: string[] = [];
  mapsEn: string[] = [];
  selectedMapEs = '';
  selectedMapInfoEs: any = null;
  selectedMapEn = '';
  selectedMapInfoEn: any = null;
  groupedByTypeEs: { [key: string]: any[] } = {};
  groupedByTypeEn: { [key: string]: any[] } = {};

  // Para las rutas a las pestañas de poi
  selectedTabIndex: number = 0;
  tabs: string[] = ['Buscar por nombre', 'Buscar por mapa', 'Buscar por código'];
  routeMap: { [key: string]: string } = {
    'buscarpornombre': 'Buscar por nombre',
    'buscarpormapa': 'Buscar por mapa',
    'buscarporcodigo': 'Buscar por código'
  };

  private subscriptions: Subscription = new Subscription();

  constructor(private http: HttpClient, private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router) {
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

    // Para cargar el JSON de los POIs ES
    const sub1 = this.http.get<any[]>(this.fichEs).subscribe({
      next: data => {
        this.errorArchivoEs = false;

        this.optionsEs = data.map(x => ({
          ...x,
          _norm: normalizeText(x.data?.tooltip || ''),
          _typeNorm: normalizeText(x.type || '')
        }));
        this.filteredByTypeEs = [];
        this.filteredOptionsEs = [];
        this.typesEs = [...new Set(
          this.optionsEs.map(x => x.type)
        )];

        // Filtra solo los mapas validos comparando el nombre normalizado,
        // conserva el nombre original, elimina duplicados y los ordena
        const rawMaps = this.optionsEs.map(item =>
          quitarEspaciosGuionesAntesText(item.map)
        );
        // console.log([...new Set(rawMaps)]) // mapas sin repetidos

        const filteredMaps = rawMaps.filter((map): map is string =>
          !!map && VALID_MAPS_ES.has(normalizeText(map))
        );

        this.mapsEs = [...new Set(filteredMaps)].sort();
        // console.log(this.mapsEs) // mapas unicos y sin repetir

        const diferenciaEs = [...new Set(rawMaps)]
          .filter(item => !this.mapsEs.includes(item));
        console.log('Mapas que no estan en lista de validos: ', diferenciaEs); // mapas que no estan en la lista de mapas validos

        // console.log('Originales:', rawMaps.length);
        // console.log('Tras filtro:', filteredMaps.length);
        // console.log('Final unicos:', this.mapsEs.length);
      },
      error: error => {
        console.error('Error cargando el archivo:', this.fichEs, error);

        if (error.status === 404) {
          console.error('El archivo no existe.');
        } else {
          console.error('El archivo existe pero no se ha podido cargar.');
        }

        this.errorArchivoEs = true;
        this.optionsEs = [];
        this.filteredByTypeEs = [];
        this.filteredOptionsEs = [];
        this.typesEs = [];
        this.mapsEs = [];
      }
    });
    this.subscriptions.add(sub1);

    // Para cargar el JSON de los POIs EN
    const sub2 = this.http.get<any[]>(this.fichEn).subscribe({
      next: data => {
        this.errorArchivoEn = false;

        this.optionsEn = data.map(x => ({
          ...x,
          _norm: normalizeText(x.data?.tooltip || ''),
          _typeNorm: normalizeText(x.type || '')
        }));
        this.filteredByTypeEn = [];
        this.filteredOptionsEn = [];
        this.typesEn = [...new Set(
          this.optionsEn.map(x => x.type)
        )];

        // Filtra solo los mapas validos comparando el nombre normalizado,
        // conserva el nombre original, elimina duplicados y los ordena
        const rawMaps = this.optionsEn.map(item =>
          quitarEspaciosGuionesAntesText(item.map)
        );
        // console.log([...new Set(rawMaps)]) // mapas sin repetidos

        const filteredMaps = rawMaps.filter((map): map is string =>
          !!map && VALID_MAPS_EN.has(normalizeText(map))
        );

        this.mapsEn = [...new Set(filteredMaps)].sort();
        // console.log(this.mapsEn) // mapas unicos y sin repetir

        const diferenciaEn = [...new Set(rawMaps)].filter(item => !this.mapsEn.includes(item));
        console.log('Maps that are not on the valid list:', diferenciaEn); // mapas que no estan en la lista de mapas validos

        // console.log('Originales:', rawMaps.length);
        // console.log('Tras filtro:', filteredMaps.length);
        // console.log('Final unicos:', this.mapsEn.length);
      },
      error: error => {
        console.error('Error loading the file:', this.fichEn, error);

        if (error.status === 404) {
          console.error('The file does not exist.');
        } else {
          console.error('The file exists but could not be loaded.');
        }

        this.errorArchivoEn = true;
        this.optionsEn = [];
        this.filteredByTypeEn = [];
        this.filteredOptionsEn = [];
        this.typesEn = [];
        this.mapsEn = [];
      }
    });
    this.subscriptions.add(sub2);

    // Escuchar cambios en tipo para filtrar los resultados del autocomplete
    const sub3 = this.formularioNombre.get('tipo')!.valueChanges
      .subscribe(typeValue => {

        const idControl = this.formularioNombre.get('id');
        const nombreControl = this.formularioNombre.get('nombreEs');

        // si cambia el tipo, limpiar ID (evita inconsistencias)
        idControl?.setValue(null, { emitEvent: false });

        if (!typeValue) {
          nombreControl?.disable();
          this.filteredByTypeEs = [];
          this.filteredOptionsEs = [];
          return;
        }

        nombreControl?.enable();

        const normalizedType = normalizeText(typeValue);

        this.filteredByTypeEs = this.optionsEs.filter(option =>
          option._typeNorm === normalizedType
        );

        this.filteredOptionsEs = [];

        nombreControl?.setValue(null, { emitEvent: false });
      });
    this.subscriptions.add(sub3);

    // Escuchar cambios en type para filtrar los resultados del autocomplete
    const sub4 = this.formularioName.get('type')!.valueChanges
      .subscribe(typeValue => {

        const idControl = this.formularioName.get('id');
        const nameControl = this.formularioName.get('nameEn');

        // si cambia el type, limpiar ID (evita inconsistencias)
        idControl?.setValue(null, { emitEvent: false });

        if (!typeValue) {
          nameControl?.disable();
          this.filteredByTypeEn = [];
          this.filteredOptionsEn = [];
          return;
        }

        nameControl?.enable();

        const normalizedType = normalizeText(typeValue);

        this.filteredByTypeEn = this.optionsEn.filter(option =>
          option._typeNorm === normalizedType
        );

        this.filteredOptionsEn = [];

        nameControl?.setValue(null, { emitEvent: false });
      });
    this.subscriptions.add(sub4);

    // Filtrado del autocomplete
    // const sub3 = this.formularioNombre.get('nombreEs')!.valueChanges
    //   .pipe(
    //     debounceTime(300),
    //     map(value => {
    //       const text =
    //         typeof value === 'string'
    //           ? value
    //           : value?.data?.tooltip || '';

    //       return normalizeText(text);
    //     })
    //   )
    //   .subscribe(filterValue => {
    //     if (filterValue.trim().length < 2) {
    //       this.filteredOptionsEs = [];
    //       return;
    //     }
    //     this.filteredOptionsEs = this.optionsEs.filter(option =>
    //       option._norm.includes(filterValue)
    //     )
    //     .slice(0, 50); // Limitar a 50 resultados para evitar saturar el UI
    //   });

    const sub5 = this.formularioNombre.get('nombreEs')!.valueChanges
      .pipe(
        debounceTime(300)
      )
      .subscribe(value => {

        // Si el usuario esta escribiendo, ocultar resultado anterior
        if (typeof value === 'string' && value.trim().length > 0) {
          this.resultadoNombre = null;
          this.busquedaRealizadaEs = false;
          // borrar busqueda por ID
          this.formularioNombre.get('id')?.setValue(null, {
            emitEvent: false
          });
        }

        const text =
          typeof value === 'string'
            ? value
            : value?.data?.tooltip || '';

        const filterValue = normalizeText(text);

        if (filterValue.length < 2) {
          this.filteredOptionsEs = [];
          return;
        }

        // buscar SOLO dentro del tipo elegido
        this.filteredOptionsEs = this.filteredByTypeEs
          .filter(option =>
            option._norm.includes(filterValue)
          )
          .slice(0, 50); // Limitar a 50 resultados para evitar saturar el UI

      });
    this.subscriptions.add(sub5);

    const sub6 = this.formularioName.get('nameEn')!.valueChanges
      .pipe(
        debounceTime(300)
      )
      .subscribe(value => {

        // Si el usuario esta escribiendo, ocultar resultado anterior
        if (typeof value === 'string' && value.trim().length > 0) {
          this.resultadoName = null;
          this.busquedaRealizadaEn = false;
          // borrar busqueda por ID
          this.formularioName.get('id')?.setValue(null, {
            emitEvent: false
          });
        }

        const text =
          typeof value === 'string'
            ? value
            : value?.data?.tooltip || '';

        const filterValue = normalizeText(text);

        if (filterValue.length < 2) {
          this.filteredOptionsEn = [];
          return;
        }

        // buscar SOLO dentro del type elegido
        this.filteredOptionsEn = this.filteredByTypeEn
          .filter(option =>
            option._norm.includes(filterValue)
          )
          .slice(0, 50); // Limitar a 50 resultados para evitar saturar el UI

      });
    this.subscriptions.add(sub6);

    const sub7 = this.formularioNombre.get('id')!.valueChanges.subscribe(id => {
      // if (id) valdria, pero 0 es valido, asi que hay que comprobar que no sea null, undefined o string vacio
      if (id !== null && id !== undefined && id !== '') {
        // Limpiar busqueda por nombre
        this.formularioNombre.get('nombreEs')?.setValue(null, { emitEvent: false });

        this.resultadoNombre = null;
        this.busquedaRealizadaEs = false;
      }
    });
    this.subscriptions.add(sub7);

    const sub8 = this.formularioName.get('id')!.valueChanges.subscribe(id => {
      if (id !== null && id !== undefined && id !== '') {
        // Limpiar busqueda por name
        this.formularioName.get('nameEn')?.setValue(null, { emitEvent: false });

        this.resultadoName = null;
        this.busquedaRealizadaEn = false;
      }
    });
    this.subscriptions.add(sub8);

  }

  ngOnDestroy(): void {
    // Limpieza de suscripciones
    this.subscriptions.unsubscribe();

    // Liberar referencias
    this.optionsEs = [];
    this.filteredByTypeEs = [];
    this.filteredOptionsEs = [];
    this.typesEs = [];
    this.optionsEn = [];
    this.filteredByTypeEn = [];
    this.filteredOptionsEn = [];
    this.typesEn = [];
    this.mapsEs = [];
    this.mapsEn = [];
    this.selectedMapEs = '';
    this.selectedMapInfoEs = null;
    this.selectedMapEn = '';
    this.selectedMapInfoEn = null;
    this.groupedByTypeEs = {};
    this.groupedByTypeEn = {};
    this.busquedaRealizadaEs = false;
    this.busquedaRealizadaEn = false;
    this.busquedaRealizadaC = false;
  }

  // Devuelve el index de la pestaña de la tabla
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
    this.router.navigate(['/poi', routeName]);
  }

  resetCopiadoEs() {
    setTimeout(() => {
      this.copiadoEs = false;
    }, 1500);
  }

  resetCopiadoEn() {
    setTimeout(() => {
      this.copiadoEn = false;
    }, 1500);
  }

  initForm() {
    this.formularioNombre = this.formBuilder.group({
      tipo: [''],
      nombreEs: [{ value: null, disabled: true }],
      id: [null]
    });
    this.formularioName = this.formBuilder.group({
      type: [''],
      nameEn: [{ value: null, disabled: true }],
      id: [null]
    });
    this.formularioCodigo = this.formBuilder.group({
      codigoC: [null]
    });
  }

  // Muestra texto en el input
  displayFn = (option: any): string => {
    return option ? option.data?.tooltip : '';
  };

  trackById(index: number, item: any) {
    return item.id;
  }

  // Seleccion (solo para debug)
  onSelected(option: any) {
    this.formularioNombre.get('id')?.setValue(
      null,
      { emitEvent: false }
    );
    // console.log('Seleccionado:', option);
  }

  onMapChangeEs(): void {
    if (!this.selectedMapEs) {
      this.groupedByTypeEs = {};
      this.selectedMapInfoEs = null;
      return;
    }

    const datos = this.optionsEs.filter(item =>
      item.map === this.selectedMapEs
    );

    this.selectedMapInfoEs = datos.length ? datos[0] : null;
    this.groupedByTypeEs = {};

    datos.forEach(item => {
      if (!this.groupedByTypeEs[item.type]) {
        this.groupedByTypeEs[item.type] = [];
      }
      this.groupedByTypeEs[item.type].push(item);
    });
  }

  onMapChangeEn(): void {
    if (!this.selectedMapEn) {
      this.groupedByTypeEn = {};
      this.selectedMapInfoEn = null;
      return;
    }

    const datos = this.optionsEn.filter(item =>
      item.map === this.selectedMapEn
    );

    this.selectedMapInfoEn = datos.length ? datos[0] : null;
    this.groupedByTypeEn = {};

    datos.forEach(item => {
      if (!this.groupedByTypeEn[item.type]) {
        this.groupedByTypeEn[item.type] = [];
      }
      this.groupedByTypeEn[item.type].push(item);
    });
  }

  copyChatLink(chatLink: string | undefined): void {

    if (!chatLink) {
      return;
    }

    if (navigator.clipboard) {
      navigator.clipboard.writeText(chatLink);
    } else {
      const textarea = document.createElement('textarea');
      textarea.value = chatLink;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
  }

  openWiki(): void {
    window.open(
      'https://wiki.guildwars2.com/wiki/Chat_link_format/0x04_codes',
      '_blank',
      'noopener,noreferrer'
    );
  }

  openWikiSearch(chatLink: string | undefined) {
    if (!chatLink) return;
    const url = `https://wiki.guildwars2.com/index.php?search=${encodeURIComponent(chatLink)}&go=Go`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  resetMapEs(): void {
    this.selectedMapEs = '';
    this.selectedMapInfoEs = null;
    this.groupedByTypeEs = {};
  }

  resetMapEn(): void {
    this.selectedMapEn = '';
    this.selectedMapInfoEn = null;
    this.groupedByTypeEn = {};
  }

  // Para que salga en el mat-label el texto correcto dependiendo del tipo seleccionado
  getNombreLabel(lang: 'es' | 'en'): string {
    const type = lang === 'es'
      ? this.formularioNombre.get('tipo')?.value
      : this.formularioName.get('type')?.value;

    if (!type) {
      return lang === 'es'
        ? 'Selecciona un tipo o un ID'
        : 'Select a type or ID';
    }

    return TYPE_LABELS[type]?.[lang] ??
      (lang === 'es' ? 'Buscar' : 'Search');
  }

  selectTypeEs(type: string) {
    const control = this.formularioNombre.get('tipo');

    if (control?.value === type) {
      return; // NO hace nada si ya esta seleccionado
    }

    control?.setValue(type);

    // reset dependiente del tipo
    this.formularioNombre.get('nombreEs')?.setValue('');
    this.filteredOptionsEs = [];
    this.formularioNombre.get('id')?.setValue(null);
  }

  selectTypeEn(type: string) {
    const control = this.formularioName.get('type');

    if (control?.value === type) {
      return; // NO hace nada si ya esta seleccionado
    }

    control?.setValue(type);

    // reset dependiente del type
    this.formularioName.get('nameEn')?.setValue('');
    this.filteredOptionsEn = [];
    this.formularioName.get('id')?.setValue(null);
  }

  getTypeIcon(type: string): string {
    return TYPE_ICONS[type] ?? '';
  }

  // Formatea el tipo para mostrarlo en el UI
  formatTypeLabel(type: string): string {
    if (!type) return '';
    const t = type.toLowerCase();
    if (t === 'landmark') {
      return 'POI (Landmark)';
    }
    return t.charAt(0).toUpperCase() + t.slice(1);
  }

  // sendSearchById() {
  //   const id = this.formularioNombre.get('id')?.value;

  //   if (!id) {
  //     this.resultadoNombre = null;
  //     return;
  //   }

  //   const numericId = Number(id);

  //   this.resultadoNombre = this.optionsEs.find(o => Number(o.id) === numericId);

  //   this.busquedaRealizadaEs = true;
  // }

  // sendFormNombre() {
  //   if (this.formularioNombre.status == "INVALID") {
  //     return;
  //   }

  //   const value = this.formularioNombre.get('nombreEs')?.value;

  //   // input vacio, no mostrar nada
  //   if (!value) {
  //     this.busquedaRealizadaEs = false;
  //     this.resultadoNombre = null;
  //     return;
  //   }
  //   // texto escrito pero no seleccionado
  //   if (typeof value === 'string') {
  //     this.busquedaRealizadaEs = true;
  //     this.resultadoNombre = null;
  //     return;
  //   }
  //   // seleccion valida
  //   this.busquedaRealizadaEs = true;
  //   this.resultadoNombre = value;
  //   this.loadingNombre = true;
  // }

  sendFormNombre() {
    const id = this.formularioNombre.get('id')?.value;
    const nombre = this.formularioNombre.get('nombreEs')?.value;
    const tipo = this.formularioNombre.get('tipo')?.value;

    this.loadingNombre = true; // empieza busqueda

    // 1. Busqueda por ID
    if (id !== null && id !== undefined && id !== '') {
      const numericId = Number(id);

      this.resultadoNombre =
        this.optionsEs.find(o => Number(o.id) === numericId) ||
        this.optionsEn.find(o => Number(o.id) === numericId);

      this.busquedaRealizadaEs = true;
      this.loadingNombre = false; // termina
      return;
    }

    // 2. Sin tipo: no se puede buscar por nombre
    if (!tipo) {
      this.resultadoNombre = null;
      this.busquedaRealizadaEs = false;
      this.loadingNombre = false;
      return;
    }

    // 3. Input vacio o string suelto
    if (!nombre || typeof nombre === 'string') {
      this.resultadoNombre = null;
      this.busquedaRealizadaEs = true;
      this.loadingNombre = false;
      return;
    }

    // 4. Seleccion valida
    this.resultadoNombre = nombre;
    this.busquedaRealizadaEs = true;
    this.loadingNombre = false;
  }

  // sendFormName(){
  //   if (this.formularioName.status == "INVALID"){
  //     return;
  //   }

  //   const value = this.formularioName.get('nameEn')?.value;

  //   // input vacio, no mostrar nada
  //   if (!value) {
  //     this.busquedaRealizadaEn = false;
  //     this.resultadoName = null;
  //     return;
  //   }
  //   // texto escrito pero no seleccionado
  //   if (typeof value === 'string') {
  //     this.busquedaRealizadaEn = true;
  //     this.resultadoName = null;
  //     return;
  //   }
  //   // seleccion valida
  //   this.busquedaRealizadaEn = true;
  //   this.resultadoName = value;
  //   this.loadingName = true;
  // }

  sendFormName() {
    const id = this.formularioName.get('id')?.value;
    const nombre = this.formularioName.get('nombreEn')?.value;
    const tipo = this.formularioName.get('tipo')?.value;

    this.loadingName = true; // empieza busqueda

    // 1. Busqueda por ID
    if (id !== null && id !== undefined && id !== '') {
      const numericId = Number(id);

      this.resultadoName =
        this.optionsEs.find(o => Number(o.id) === numericId) ||
        this.optionsEn.find(o => Number(o.id) === numericId);

      this.busquedaRealizadaEn = true;
      this.loadingName = false; // termina
      return;
    }

    // 2. Sin tipo: no se puede buscar por nombre
    if (!tipo) {
      this.resultadoName = null;
      this.busquedaRealizadaEn = false;
      this.loadingName = false;
      return;
    }

    // 3. Input vacio o string suelto
    if (!nombre || typeof nombre === 'string') {
      this.resultadoName = null;
      this.busquedaRealizadaEn = true;
      this.loadingName = false;
      return;
    }

    // 4. Seleccion valida
    this.resultadoName = nombre;
    this.busquedaRealizadaEn = true;
    this.loadingName = false;
  }

  sendFormCodigo() {
    if (this.formularioCodigo.status == "INVALID") {
      return;
    }

    const value = this.formularioCodigo.get('codigoC')?.value?.trim();

    // Input vacio, no mostrar nada
    if (!value) {
      this.busquedaRealizadaC = false;
      this.resultadoCodigoEs = null;
      this.resultadoCodigoEn = null;
      return;
    }

    this.busquedaRealizadaC = true;

    if (!value || typeof value !== 'string') {
      this.resultadoCodigoEs = null;
      this.resultadoCodigoEn = null;
      return;
    }

    // Buscar en ES solo si el archivo se cargo correctamente
    if (!this.errorArchivoEs) {
      this.resultadoCodigoEs = this.optionsEs.find(
        opt => opt.data?.chat_link === value
      ) || null;
    } else {
      this.resultadoCodigoEs = null;
    }

    // Buscar en EN solo si el archivo se cargo correctamente
    if (!this.errorArchivoEn) {
      this.resultadoCodigoEn = this.optionsEn.find(
        opt => opt.data?.chat_link === value
      ) || null;
    } else {
      this.resultadoCodigoEn = null;
    }

    this.loadingCodigo = true;
  }

  onIdFocusEs(): void {
    // Limpiar tipo si esta seleccionado al pinchar en ID
    this.formularioNombre.patchValue({
      tipo: '',
      nombreEs: null
    });

    this.filteredByTypeEs = [];
    this.filteredOptionsEs = [];

    this.resultadoNombre = null;
    this.busquedaRealizadaEs = false;
  }

  onIdFocusEn(): void {
    // Limpiar type si esta seleccionado al pinchar en ID
    this.formularioName.patchValue({
      type: '',
      nameEn: null
    });

    this.filteredByTypeEn = [];
    this.filteredOptionsEn = [];

    this.resultadoName = null;
    this.busquedaRealizadaEn = false;
  }

  resetFormNombre() {
    this.formularioNombre.reset();
    this.formularioNombre.markAsUntouched();
    this.resultadoNombre = null;
    this.loadingNombre = false;
    this.filteredOptionsEs = [];
    this.filteredByTypeEs = [];
    this.busquedaRealizadaEs = false;
  }

  resetFormName() {
    this.formularioName.reset();
    this.formularioName.markAsUntouched();
    this.resultadoName = null;
    this.loadingName = false;
    this.filteredOptionsEn = [];
    this.filteredByTypeEn = [];
    this.busquedaRealizadaEn = false;
  }

  resetFormCodigo() {
    this.formularioCodigo.reset();
    this.formularioCodigo.markAsUntouched();
    this.resultadoCodigoEs = null;
    this.resultadoCodigoEn = null;
    this.loadingCodigo = false;
    this.busquedaRealizadaC = false;
  }

  /////////////////////////////////// EXTRAS ///////////////////////////////////
  generarChatCode(tipo: ChatCodeType, id: number): string {
    // USO: const code = this.generarChatCode('map', 598);

    const header = CHAT_CODE_HEADERS[tipo];

    const bytes = new Uint8Array([
      header,
      id & 0xFF,
      (id >> 8) & 0xFF,
      (id >> 16) & 0xFF,
      0x00
    ]);

    const binary = String.fromCharCode(...bytes);
    const base64 = btoa(binary);

    return `[&${base64}]`;
  }

  decodificarChatCode(chatCode: string) {
    // USO: const decoded = this.decodificarChatCode('[&BFYCAAA=]');

    // quitar [& y ]
    const clean = chatCode.replace('[&', '').replace(']', '');

    // base64 a bytes
    const binary = atob(clean);
    const bytes = Uint8Array.from(binary, c => c.charCodeAt(0));

    const header = bytes[0];

    const id =
      bytes[1] |
      (bytes[2] << 8) |
      (bytes[3] << 16);

    return {
      tipo: HEADER_TO_TYPE[header] ?? 'unknown',
      id
    };
  }

}