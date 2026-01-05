import { Component } from "@angular/core";

@Component({
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})
export class CounterComponent {

  counter = 0;

  increaseBy(value: number): void {
    this.counter += value;
  }

  resetCounter(): void {
    this.counter = 0;
  }
}
