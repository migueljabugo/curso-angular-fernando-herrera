import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeavyLoadersFast } from '@shared/heavy-loaders/heavy-loaders-fast';
import { Title } from '@shared/title/title';

@Component({
  selector: 'app-defer-options',
  imports: [
    HeavyLoadersFast,
    Title
  ],
  templateUrl: './defer-options.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DeferOptions {




}
