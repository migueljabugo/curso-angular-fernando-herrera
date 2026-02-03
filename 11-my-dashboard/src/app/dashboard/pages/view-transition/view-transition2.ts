import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Title } from '@shared/title/title';

@Component({
  selector: 'app-view-transition2',
  imports: [
    Title
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `

  <app-title title="View Transition 2"/>

  <section class="flex justify-end">

    <img
      srcset="http://picsum.photos/id/237/200/300"
      alt="Picsum"
      width="200"
      height="300"
      style="view-transition-name: hero1" />

      <div
        class="fixed bottom-16 right-16 bg-blue-800 w-32 h-32 rounded-2xl"
        style="view-transition-name: hero2"></div>

  </section>

  `,
})
export default class ViewTransition2 { }
