import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  templateUrl: './title.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Title { }
