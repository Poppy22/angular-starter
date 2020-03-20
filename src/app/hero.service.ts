import { Injectable } from '@angular/core';
import { Hero } from './hero'; // adaugati importul clasei Hero

@Injectable({
  providedIn: 'root'
})

export class HeroService {
  public heros: Hero[] = [
  {
    id: 1,
    name: 'Batman',
    alterEgo: 'Bruce Wayne',
    description: "One of the most iconic fictional characters in the world, Batman has dedicated his life to an endless crusade, a war on all criminals in the name of his murdered parents, who were taken from him when he was just a child. Since that tragic night, he has trained his body and mind to near physical perfection to be a self-made Super Hero. He's developed an arsenal of technology that would put most armies to shame. And he's assembled teams of his fellow DC Super Heroes, like the Justice League, the Outsiders and Batman, Incorporated.",
    photo: 'assets/batman.jpg',
    universe: 'DC'
  },
  {
    id: 2,
    name: 'Black Widdow',
    alterEgo: 'Natalia Alianovna Romanova',
    description: 'About Black Widow',
    photo: 'assets/black-widow.png',
    universe: 'Marvel'
  },
  {
    id: 3,
    name: 'Wonder Woman',
    alterEgo: 'Diana Prince',
    description: 'About Wonder Woman',
    photo: 'assets/wonder-woman.jpg',
    universe: 'DC'
  },
  {
    id: 4,
    name: 'Hulk',
    alterEgo: 'Robert Bruce Banner',
    description: 'About Hulk',
    photo: 'assets/hulk.png',
    universe: 'Marvel'
  }
  ];
  constructor() { }

  getHero(heroId) {
      for (let i = 0; i < this.heros.length; i++) {
        if (this.heros[i].id === heroId) {
          return this.heros[i];
        }
      }
    }

}
