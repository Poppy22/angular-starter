
import { Hero } from '../hero';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'jsh-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  selectedUniverse: string;

  public heros: Hero[] = [];

  @Output() heroSelected = new EventEmitter();

  changeUniverse(newUniverse) {
    this.selectedUniverse = newUniverse;
  }

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.selectedUniverse = 'all';
    this.heros = this.heroService.heros;
  }

  editHandler(id) {
  this.heroSelected.emit(id);
}
}
