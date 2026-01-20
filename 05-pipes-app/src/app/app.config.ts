import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection, LOCALE_ID } from '@angular/core';
import { provideRouter } from '@angular/router';
import { registerLocaleData } from '@angular/common';

import { routes } from './app.routes';

import localeES from '@angular/common/locales/es';
import localeEN from '@angular/common/locales/en';
import localeFR from '@angular/common/locales/fr';

registerLocaleData(localeES, 'es');
registerLocaleData(localeEN, 'en');
registerLocaleData(localeFR, 'fr');

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    {
      provide: LOCALE_ID,
      useValue: 'es'
    }
  ]
};
