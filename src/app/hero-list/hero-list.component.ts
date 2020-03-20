
import { Hero } from '../hero';
import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'jsh-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  selectedUniverse: string;

  public heros: Hero[] = [];

  changeUniverse(newUniverse) {
    this.selectedUniverse = newUniverse;
  }

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.selectedUniverse = 'all';
    this.heros = this.heroService.heros;
  }

}
