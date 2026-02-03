import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  imports: [],
  templateUrl: './control-flow.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ControlFlow {

  public showContent = signal(false);

  public toggleContent() {
    this.showContent.update(val => !val);
  }

 }
