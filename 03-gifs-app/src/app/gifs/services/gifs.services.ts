import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import type { GiphyResponse } from '../interfaces/Giphy.interface';
import { Gift } from '../interfaces/gift.interface';
import { GifMapper } from '../mapper/gif.mapper';
import { map, tap, Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class GifService {

  private http = inject(HttpClient);

  trendingGifs = signal<Gift[]>([]);
  trendingGifsLoading = signal<boolean>(true);

  searchHistory = signal<Record<string, Gift[]>>({});
  searchHistoryKeys = computed(()=> Object.keys(this.searchHistory()));

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
      this.trendingGifsLoading.set( false );
      this.trendingGifs.set( gifts );
    });
  }

  searchGifs(query: string): Observable<Gift[]> {
    return this.http
      .get<GiphyResponse>(`${environment.giphyUrl}/gifs/search`, {
        params: {
          api_key: environment.giphyApiKey,
          limit: 10,
          q: query,
        },
      })
      .pipe(
        map(({ data }) => data),
        map((items) => GifMapper.mapGiphyItemToGiftArray(items)),

        //Historial
        tap(items => {
          this.searchHistory.update(history =>{
            console.log(history);

            return ({
              ...history,
              [query.toLocaleLowerCase()]: items
            });
          })
        })
      );
//    .subscribe( (resp) => {
//      console.log(resp)
//      const gifts = GifMapper.mapGiphyItemToGiftArray( resp.data );
//      console.log({gifts});
//
//    });
  }
}
