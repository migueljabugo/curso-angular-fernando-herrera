import { Injectable, signal, effect } from '@angular/core';
import { Character } from '../interfaces/character.interface';

const keyCharacters = 'characters';

function loadFromLocalStorage(): Character[] {
  const characters = localStorage.getItem(keyCharacters);
  return characters ? JSON.parse(characters) : [];
}


@Injectable({providedIn: 'root'})
export class ServiceNameService {

  characters = signal<Character[]>(loadFromLocalStorage());

  saveToLocalStorage = effect(() => {
    console.log(`Character count ${this.characters().length}`);
    localStorage.setItem(keyCharacters, JSON.stringify(this.characters()));
  });

  addCharacter(newCharacter: Character) {
    this.characters.update(chars => [...chars, newCharacter]);
  }


}
