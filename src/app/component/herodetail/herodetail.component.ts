import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from 'src/app/service/hero.service';

@Component({
  selector: 'app-herodetail',
  templateUrl: './herodetail.component.html',
  styleUrls: ['./herodetail.component.css']
})
export class HerodetailComponent implements OnInit {

  hero: any = {};

  constructor(private route: ActivatedRoute, private heroService: HeroService, private location: Location) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    let id = this.route.snapshot.paramMap.get('name');
    this.heroService.getHero(id).subscribe((hero: any) => {
      this.hero = hero;
    });
  }

  goBack(): void {
    this.location.back();
  }

}
