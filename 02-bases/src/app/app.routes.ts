import { Routes } from '@angular/router';
import { CounterComponent } from './pages/counter/counter';
import { HeroComponent } from './pages/hero/hero';


export const routes: Routes = [
  {
    path: '',
    component: HeroComponent
  },
  {
    path: 'hero',
    component: HeroComponent
  }

];
