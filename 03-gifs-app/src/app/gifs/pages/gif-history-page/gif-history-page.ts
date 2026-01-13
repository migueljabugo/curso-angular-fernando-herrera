import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop'
import { map } from 'rxjs';
import { GifService } from '../../services/gifs.services';
import { GiftList } from "../../components/gift-list/gift-list/gift-list";

@Component({
  selector: 'app-gif-history-page',
  imports: [GiftList],
  templateUrl: './gif-history-page.html',
  styleUrl: './gif-history-page.css'
})
export default class GifHistoryPage {

  gifService = inject(GifService);

  query = toSignal(inject(ActivatedRoute).params.pipe(
    map(params => params['query'])
  ));

  gifByKey = computed(() => {
    return this.gifService.getHistoryGifs(this.query());
  })


 }
