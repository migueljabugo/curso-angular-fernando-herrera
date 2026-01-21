import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';

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

  toggleCase() {
    this.upperCase.update(upper => !upper);
  }


}
