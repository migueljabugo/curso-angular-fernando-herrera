import { Component, input } from '@angular/core';
import { Gift } from 'src/app/gifs/interfaces/gift.interface';

@Component({
  selector: 'gift-list-item',
  imports: [],
  templateUrl: './gift-list-item.html',
  styleUrl: './gift-list-item.css'
})
export class GiftListItem {

  gift = input.required<Gift>();



 }
