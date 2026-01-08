import { Routes } from '@angular/router';
import { CounterComponent } from './pages/counter/counter';
import { HeroComponent } from './pages/hero/hero';
import { Dragonball } from './pages/dragonball/dragonball';


export const routes: Routes = [
  {
    path: '',
    component: CounterComponent
  },
  {
    path: 'hero',
    component: HeroComponent
  },
  {
    path: 'dragonball',
    component: Dragonball
  },
  {
    path: '**',
    redirectTo: ''
  }
];
