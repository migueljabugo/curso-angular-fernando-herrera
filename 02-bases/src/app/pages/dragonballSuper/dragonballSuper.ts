import { Component, computed, signal } from '@angular/core';
import { NgClass } from "@angular/common";
import { CharacterList } from "../../components/dragonball/character-list/character-list";
import { CharacterAdd } from '../../components/dragonball/character-add/character-add';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  imports: [NgClass, CharacterList, CharacterAdd],
  templateUrl: './dragonballSuper.html',
  styleUrl: './dragonballSuper.css',
})
export class DragonballSuper {

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8500 }
  ]);

  //powerClasses = computed(() => {
  //  return {
  //    'text-danger': true
  //  }
  //});


}
