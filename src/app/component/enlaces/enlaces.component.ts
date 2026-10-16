import { Component, OnInit } from '@angular/core';

interface Enlace {
  url: string;
  label: string;
  sublabel?: string;
}

interface SeccionEnlaces {
  nombre: string;
  enlaces: Enlace[];
}

@Component({
  selector: 'app-enlaces',
  templateUrl: './enlaces.component.html',
  styleUrls: ['./enlaces.component.css']
})
export class EnlacesComponent implements OnInit {

  secciones: SeccionEnlaces[] = [
    {
      nombre: 'API y Economía',
      enlaces: [
        {
          url: 'https://gw2efficiency.com',
          label: 'GW2 Efficiency'
        },
        {
          url: 'https://www.gw2bltc.com',
          label: 'GW2 BLTC'
        },
        {
          url: 'https://en.gw2treasures.com/',
          label: 'GW2 Treasures database'
        },
        {
          url: 'https://status.gw2efficiency.com/',
          label: 'Status API'
        },
        {
          url: 'https://wiki.guildwars2.com/wiki/API:Main',
          label: 'API v2 wiki'
        },
      ]
    },
    {
      nombre: 'Herramientas',
      enlaces: [
        {
          url: 'https://gw2timer.com/',
          label: 'GW2 Timer'
        },
        {
          url: 'https://www.deltaconnected.com/arcdps/',
          label: 'ARC DPS'
        },
        {
          url: 'https://blishhud.com/',
          label: 'Blish HUD'
        },
        {
          url: 'https://www.tekkitsworkshop.net/download',
          label: 'Tekkits TACO'
        }
      ]
    },
    {
      nombre: 'Wiki e Información',
      enlaces: [
        {
          url: 'https://wiki.guildwars2.com/wiki/Event_timers',
          label: 'Wiki Event Timers'
        },
        {
          url: 'https://wiki.guildwars2.com/wiki/Fractals_of_the_Mists',
          label: 'Wiki Fractals'
        },
        {
          url: 'https://en-forum.guildwars2.com/forum/6-game-update-notes/',
          label: 'Notas de actualización',
          sublabel: '(Foro Gw2 EN)'
        },
        {
          url: 'https://wiki.guildwars2.com/wiki/Guild_Trek',
          label: 'Travesías CLAN'
        }
      ]
    },
    {
      nombre: 'Mapas',
      enlaces: [
        {
          url: 'https://maps.gw2.io/tyria',
          label: 'GW2 Map'
        },
        {
          url: 'https://gw2.ninja/wvw/map',
          label: 'Mapa WvW en tiempo real'
        }
      ]
    },
    {
      nombre: 'Otros',
      enlaces: [
        {
          url: 'https://wiki.guildwars2.com/wiki/Gem_Store/March_Sale',
          label: 'Rebajas Marzo'
        },
        {
          url: 'https://wiki.guildwars2.com/wiki/Gem_Store/Anniversary_Sales',
          label: 'Rebajas Aniversario'
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
