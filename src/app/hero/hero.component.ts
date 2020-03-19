import { Hero } from '../hero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jsh-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  public hero:Hero;
  constructor() { }

  ngOnInit() {
    this.hero = new Hero(
      'Batman',
      'Bruce Wayne',
      'Bla bla bla despre Batman',
      'assets/batman.jpg'
    );
  }
}
