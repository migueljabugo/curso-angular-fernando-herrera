import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

type Grade = 'A' | 'B' | 'F';


@Component({
  selector: 'app-control-flow',
  imports: [],
  templateUrl: './control-flow.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ControlFlow {

  public showContent = signal(false);
  public grade = signal<Grade>('A');
  public frameworks = signal(['Angular', 'Vue', 'Svelte', 'Qwik', 'React']);
  public frameworks2 = signal([]);

  public toggleContent() {
    this.showContent.update(val => !val);

  }



 }
