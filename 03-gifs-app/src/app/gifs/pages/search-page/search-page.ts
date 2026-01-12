import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GiftList } from "../../components/gift-list/gift-list/gift-list";

@Component({
  selector: 'app-search-page',
  imports: [GiftList],
  templateUrl: './search-page.html',
  styleUrl: './search-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SearchPage {

  onSearch(query: string) {
    console.log({ query });
  }


}
