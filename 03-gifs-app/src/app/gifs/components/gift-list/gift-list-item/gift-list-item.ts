import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'gift-list-item',
  imports: [],
  templateUrl: './gift-list-item.html',
  styleUrl: './gift-list-item.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GiftListItem {

  url = input.required<string>();

 }
