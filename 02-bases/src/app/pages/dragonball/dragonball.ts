import { Component, computed, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  imports: [],
  templateUrl: './dragonball.html',
  styleUrl: './dragonball.css',
})
export class Dragonball {

  name = signal<string>('');
  power = signal<number>(0);



  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 }
  ]);

  //powerClasses = computed(() => {
  //  return {
  //    'text-danger': true
  //  }
  //});

  addCharacter() {
    if (this.name() === '' || this.power() <= 0) return;

    const newCharacter: Character = {
      id: this.characters().map(x => x.id).sort((a, b) => b - a)[0] + 1,
      name: this.name(),
      power: this.power()
    };
    this.characters.update(chars => [...chars, newCharacter]);
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
