import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-fast',
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <section [class]="['w-full', 'h-20', cssClass()]">
    <ng-content></ng-content>
  </section>`
})
export class HeavyLoadersFast {

  cssClass = input.required();

  constructor(){
    console.log("Creado")
  }

}
