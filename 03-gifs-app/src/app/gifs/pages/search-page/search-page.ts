import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { GiftList } from "../../components/gift-list/gift-list/gift-list";
import { GifService } from '../../services/gifs.services';

@Component({
  selector: 'app-search-page',
  imports: [GiftList],
  templateUrl: './search-page.html',
  styleUrl: './search-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SearchPage {

  gifService = inject(GifService);

  onSearch(query: string) {
    console.log({ query });
    this.gifService.searchGifs(query);
  }


}
