import { Component, OnInit } from '@angular/core';

interface Enlace {
  url: string;
  label: string;
}
@Component({
  selector: 'app-enlaces',
  templateUrl: './enlaces.component.html',
  styleUrls: ['./enlaces.component.css']
})
export class EnlacesComponent implements OnInit {

  enlaces: Enlace[] = [
      { url: 'https://gw2timer.com/', label: 'gw2timer' },
      { url: 'https://wiki.guildwars2.com/wiki/Event_timers', label: 'gw2 wiki event timers' },
      { url: 'https://www.deltaconnected.com/arcdps/', label: 'ARC DPS' },
      { url: 'https://gw2efficiency.com', label: 'gw2efficiency' },
      { url: 'https://www.gw2bltc.com', label: 'gw2BLTC' },
      { url: 'https://en-forum.guildwars2.com/forum/6-game-update-notes/', label: 'Notas de actualización (Foro Gw2 EN)' },
      { url: 'https://maps.gw2.io/tyria', label: 'GW2 Map' },
      { url: 'https://status.gw2efficiency.com/', label: 'Status API' },
      { url: 'https://wiki.guildwars2.com/wiki/API:Main', label: 'API v2 wiki' },
      { url: 'https://wiki.guildwars2.com/wiki/Gem_Store/March_Sale', label: 'Rebajas Marzo' },
      { url: 'https://wiki.guildwars2.com/wiki/Gem_Store/Anniversary_Sales', label: 'Rebajas Aniversario' },
      { url: 'https://gw2.ninja/wvw/map', label: 'Mapa WvW en tiempo real' },
      { url: 'http://tekkitsworkshop.net/index.php/gw2-taco/download', label: 'Tekkits TACO' },
      { url: 'https://wiki.guildwars2.com/wiki/Guild_Trek', label: 'Travesías CLAN' },
      { url: 'https://en.gw2treasures.com/', label: 'GW2 Treasures database' }
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
