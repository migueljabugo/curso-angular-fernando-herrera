import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';


@Component({
  selector: 'app-heavy-loaders-slow',
  imports: [
    NgClass
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<h1 [class]="['w-full', 'h-[600px]', cssClass()]">HeavyLoaders Slow</h1>`
})
export class HeavyLoadersSlow {

  cssClass = input.required();

  constructor(){
    const start = Date.now();

    console.log('Cargando...');

    while( Date.now() - start < 3000 ){ }

    console.log('Cargado HeavyLoaders Slow');
  }

}
