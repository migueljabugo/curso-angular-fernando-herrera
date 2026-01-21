import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../data/heroes.data';
import { Hero, Color, Creator } from '../../interfaces/hero.interface';


@Component({
  selector: 'app-custom-page',
  imports: [
    ToggleCasePipe
  ],
  templateUrl: './custom-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CustomPage {

  name = signal('MIguel Angel');

  upperCase = signal(true);

  heroes = signal(heroes);

  toggleCase() {
    this.upperCase.update(upper => !upper);
  }




}
