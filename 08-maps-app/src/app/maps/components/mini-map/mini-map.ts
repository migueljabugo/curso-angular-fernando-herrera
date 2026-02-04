import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-mini-map',
  imports: [],
  templateUrl: './mini-map.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MiniMap { }
