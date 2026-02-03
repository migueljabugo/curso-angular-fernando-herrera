import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-defer-options',
  imports: [],
  templateUrl: './defer-options.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DeferOptions { }
