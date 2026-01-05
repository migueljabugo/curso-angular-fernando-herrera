import { Component } from "@angular/core";

@Component({
  template: `
    <h1>Counter {{ counter }}</h1>
    <button (click)="increaseBy(1)">+1</button>
  `
})
export class CounterComponent {

  counter = 10;

  increaseBy(value: number): void {
    this.counter += value;
  }
}
