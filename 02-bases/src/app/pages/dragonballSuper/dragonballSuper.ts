import { Component, inject } from '@angular/core';
import { CharacterList } from "../../components/dragonball/character-list/character-list";
import { CharacterAdd } from '../../components/dragonball/character-add/character-add';
import { ServiceNameService } from '../../services/dragonball.service';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  imports: [CharacterList, CharacterAdd],
  templateUrl: './dragonballSuper.html',
  styleUrl: './dragonballSuper.css',
})
export class DragonballSuper {

  //Forma tradicional
  //constructor(public dragonballService: ServiceNameService) { }

  //Forma con inject
  public dragonbalService = inject(ServiceNameService);

}
