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
    this.name = signal('Spiderman');
    this.age = signal(22);
  }

  resetForm(): void {
    this.name = signal('Ironman');
    this.age = signal(45);
  }

  chageAge(): void {
    this.age.update(current => 60);
  }
}
