import { Import } from './../../../../node_modules/@angular/compiler-cli/src/ngtsc/reflection/src/host.d';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import type { GiphyResponse } from '../interfaces/Giphy.interfaces';

@Injectable({providedIn: 'root'})
export class GifService {

  private http = inject(HttpClient);

  constructor() {
    this.loadTrendingGifs();

  }

  loadTrendingGifs() {
    this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`, {
      params: {
        api_key: environment.giphyApiKey,
        limit: 20,
        offset: 0,
        rating: 'g'
      }
    });
  }

}
