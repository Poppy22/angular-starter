import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'jsh-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.css']
})
export class EditHeroComponent implements OnInit {
  @Input() heroId;
  hero: Hero; // proprietate adaugata

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.hero = this.heroService.getHero(this.heroId); // obtinem eroul de editat
  }

}
