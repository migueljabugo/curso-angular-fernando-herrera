import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'gift-list-item',
  imports: [],
  templateUrl: './gift-list-item.html',
  styleUrl: './gift-list-item.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GiftListItem {

  src: string = 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg';

 }
