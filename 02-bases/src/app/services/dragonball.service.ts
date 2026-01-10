import { Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class ServiceNameService {

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8500 }
  ]);

  addCharacter(newCharacter: Character) {
    this.characters.update(chars => [...chars, newCharacter]);
  }


}
