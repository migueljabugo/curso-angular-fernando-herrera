import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-change-detection',
  imports: [],
  templateUrl: './change-detection.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangeDetection { }
