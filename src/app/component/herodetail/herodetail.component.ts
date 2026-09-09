import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from 'src/app/service/hero.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-herodetail',
  templateUrl: './herodetail.component.html',
  styleUrls: ['./herodetail.component.css']
})
export class HerodetailComponent implements OnInit {

  hero: any = {};
  heroName: string = '';
  loading: boolean = false;

  constructor(private route: ActivatedRoute, private heroService: HeroService, private location: Location) { }

  ngOnInit(): void {
    this.heroName = this.route.snapshot.paramMap.get('name') || '';
    this.getHero();
  }

  getHero(): void {
    let id = this.route.snapshot.paramMap.get('name');
    this.loading = true;
    this.heroService.getHero(id)
      .pipe(
        finalize(() => this.loading = false) // loading false cuando la peticion termina, ya sea con exito o error
      )
      .subscribe((hero: any) => {
        this.hero = hero;
      });
  }

  goBack(): void {
    this.location.back();
  }

}
