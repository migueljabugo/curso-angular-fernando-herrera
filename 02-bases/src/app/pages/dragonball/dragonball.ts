import { Component, computed, signal } from '@angular/core';
import { NgClass } from "@angular/common";

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  imports: [NgClass],
  templateUrl: './dragonball.html',
  styleUrl: './dragonball.css',
})
export class Dragonball {

  name = signal<string>('Dragon Ball Characters');
  power = signal<number>(5000);



  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8500 },
    { id: 3, name: 'Gohan', power: 7000 },
    { id: 4, name: 'Piccolo', power: 6500 },
    { id: 5, name: 'Frieza', power: 12000 },
    { id: 6, name: 'Yamcha', power: 520 }
  ]);

  //powerClasses = computed(() => {
  //  return {
  //    'text-danger': true
  //  }
  //});

  addCharacter() {
    const newCharacter: Character = {
      id: this.characters().map(x => x.id).sort((a, b) => b - a)[0] + 1,
      name: this.name(),
      power: this.power()
    };
    this.characters.update(chars => [...chars, newCharacter]);
  }

}
