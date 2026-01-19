import { LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe } from '@angular/common'
import { ChangeDetectionStrategy, Component, effect, isSignal, signal } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  imports: [
    LowerCasePipe,
    UpperCasePipe,
    TitleCasePipe,
    DatePipe
  ],
  templateUrl: './basic-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BasicPage {

  nameLower = signal('miguel angel');
  nameUpper = signal('MIGUEL ANGEL');
  fullName = signal('MiGuEl aNgEl');

  customDate = signal(new Date());

  tickingDAteEffect = effect((onCleanup) => {
    const interval = setInterval(() => {
      this.customDate.set(new Date());
    }, 1000);

    onCleanup(() => {
      clearInterval(interval);
    });
  })

}
