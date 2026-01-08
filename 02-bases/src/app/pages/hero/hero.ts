import { Component, signal } from "@angular/core";


@Component({
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class HeroComponent {

  name = signal('Ironman');
  age = signal(45);

  getHeroDescription(): string {
    return `${ this.name() } - ${ this.age() }`;
  }

  changeHero(): void {
    this.name.set('Spiderman');
    this.age.set(22);
  }

  resetForm(): void {
    this.name.set('Ironman');
    this.age.set(45);
  }

  chageAge(): void {
    this.age.set(60);
  }
}
