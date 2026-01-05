import { Component, signal } from "@angular/core";

@Component({
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})
export class CounterComponent {

  counter = 0;
  counterSignal = signal(0);

  constructor() {
    setInterval(() => {
      //this.counter += 1;
      this.counterSignal.update(current => current + 1);
      console.log('Tick');
    }, 1000);

  }



  increaseBy(value: number): void {
    this.counter += value;
    this.counterSignal.update(current => current + value);
  }

  resetCounter(): void {
    this.counter = 0;
    this.counterSignal.set(0);
  }
}
