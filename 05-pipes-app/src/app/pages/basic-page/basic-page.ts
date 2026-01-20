import { LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe } from '@angular/common'
import { ChangeDetectionStrategy, Component, effect, inject, isSignal, LOCALE_ID, signal } from '@angular/core';
import { availableLocales, LocaleService } from '../../services/locale.service';

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

  localeService = inject(LocaleService);
  currentLocale = inject(LOCALE_ID);

  name = signal('miguel');

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


  changeLocale(locale: availableLocales){
    console.log('changing to', locale)
    this.localeService.changeLocale(locale);
  }
}
