import { Component, inject, signal } from '@angular/core';
import { GiftList } from "../../components/gift-list/gift-list/gift-list";
import { GifService } from '../../services/gifs.services';
import { Gift } from '../../interfaces/gift.interface';

@Component({
  selector: 'app-search-page',
  imports: [GiftList],
  templateUrl: './search-page.html',
  styleUrl: './search-page.css'
})
export default class SearchPage {

  gifService = inject(GifService);
  gifs = signal<Gift[]>([]);

  onSearch(query: string) {
    console.log(query)
     this.gifService.searchGifs(query).subscribe((resp) => {
      console.log(resp)
      this.gifs.set(resp);
    });
  }


}
