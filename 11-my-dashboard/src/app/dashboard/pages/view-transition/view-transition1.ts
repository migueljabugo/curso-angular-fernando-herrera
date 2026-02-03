import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Title } from '@shared/title/title';

@Component({
  selector: 'app-view-transition1',
  imports: [
    Title
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `

  <app-title title="View Transition 1"/>

  <section class="flex justify-start">

    <img
      srcset="http://picsum.photos/id/237/200/300"
      alt="Picsum"
      width="200"
      height="300"/>

      <div class="bg-blue-500 w-56 h-56"></div>

  </section>

  `,
})
export default class ViewTransition1 { }
