import { signal, Component, input } from '@angular/core';
import type { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './character-add.html',
  styleUrl: './character-add.css'
})
export class CharacterAdd {

  name = signal<string>('');
  power = signal<number>(0);
  characters = input.required<Character[]>();

  addCharacter() {
    if (this.name() === '' || this.power() <= 0) return;

    const newCharacter: Character = {
      id: this.characters().map(x => x.id).sort((a, b) => b - a)[0] + 1,
      name: this.name(),
      power: this.power()
    };
    console.log(newCharacter);
    //this.characters.update(chars => [...chars, newCharacter]);
    //this.characters().push(newCharacter);

    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }

 }
