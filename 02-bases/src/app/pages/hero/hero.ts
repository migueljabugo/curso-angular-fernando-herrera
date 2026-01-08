import { Component, signal, computed } from "@angular/core";
import { UpperCasePipe } from "@angular/common";

@Component({
  templateUrl: './hero.html',
  styleUrl: './hero.css',
  imports: [UpperCasePipe],
})
export class HeroComponent {

  name = signal('Ironman');
  age = signal(45);

  heroDescription = computed(() => {
    const description = `${this.name()} - ${this.age()}`;
    return description;
  });

  capitalizeName = computed(() => {
    return this.name().toUpperCase();
  });

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
