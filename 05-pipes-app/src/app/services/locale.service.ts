import { Injectable, signal } from '@angular/core';

export type availableLocales = 'es' | 'en' | 'fr';

const KEY_LOCALE = 'locale';


@Injectable({providedIn: 'root'})
export class LocaleService {

  private currentLocale = signal<availableLocales>('es');

  constructor(){
    this.currentLocale.set(localStorage.getItem(KEY_LOCALE) as availableLocales ?? 'es');
  }

  get getLocale(){
    return this.currentLocale();
  }

  changeLocale(locale: availableLocales){
    localStorage.setItem(KEY_LOCALE, locale);
    this.currentLocale.set(locale);
    window.location.reload();
  }
}
