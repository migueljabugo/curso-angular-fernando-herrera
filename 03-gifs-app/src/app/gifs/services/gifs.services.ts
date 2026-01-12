import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import type { GiphyResponse } from '../interfaces/Giphy.interface';
import { Gift } from '../interfaces/gift.interface';
import { GifMapper } from '../mapper/gif.mapper';

@Injectable({providedIn: 'root'})
export class GifService {

  private http = inject(HttpClient);

  trendingGifs = signal<Gift[]>([]);

  constructor() {
    this.loadTrendingGifs();

  }

  loadTrendingGifs() {
    //https://api.giphy.com/v1/gifs/trending?api_key={giphyApiKey}&limit=25&offset=0&rating=g

    this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`, {
      params: {
        api_key: environment.giphyApiKey,
        limit: 20,
        offset: 0,
        rating: 'g'
      }
    }).subscribe( (resp) => {
      console.log('Trending gifs loaded');

      const gifts = GifMapper.mapGiphyItemToGiftArray( resp.data );
      //console.log(gifts);
      this.trendingGifs.set( gifts );
    });
  }
}
