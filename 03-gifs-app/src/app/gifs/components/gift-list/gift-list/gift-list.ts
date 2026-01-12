import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GiftListItem } from "../gift-list-item/gift-list-item";



@Component({
  selector: 'gift-list',
  imports: [GiftListItem],
  templateUrl: './gift-list.html',
  styleUrl: './gift-list.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GiftList {


 }
