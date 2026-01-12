import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { GiftListItem } from "../gift-list-item/gift-list-item";
import { Gift } from 'src/app/gifs/interfaces/gift.interface';



@Component({
  selector: 'gift-list',
  imports: [GiftListItem],
  templateUrl: './gift-list.html',
  styleUrl: './gift-list.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GiftList {

  gifs = input.required<Gift[]>();

 }
