import { Injectable } from '@angular/core';
import { Gw2DataService } from './gw2-data.service';

@Injectable({
  providedIn: 'root'
})
export class HomesteadService {

  constructor(private gw2DataService: Gw2DataService) { }

  getAccGlyphs() {
    return this.gw2DataService.getAccount('homestead/glyphs');
  }

  getAccDecorations() {
    return this.gw2DataService.getAccount('homestead/decorations');
  }

  getDecoractionsById(id: string) {
    return this.gw2DataService.get(`homestead/decorations/${id}`);
  }

}
