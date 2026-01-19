import { LowerCasePipe, UpperCasePipe, TitleCasePipe } from '@angular/common'
import { ChangeDetectionStrategy, Component, isSignal, signal } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  imports: [
    LowerCasePipe,
    UpperCasePipe,
    TitleCasePipe
  ],
  templateUrl: './basic-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BasicPage {

  nameLower = signal('miguel angel');
  nameUpper = signal('MIGUEL ANGEL');
  fullName = signal('MiGuEl aNgEl');





}
