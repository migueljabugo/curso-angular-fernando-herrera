import { computed, inject, Injectable, signal } from '@angular/core';
import { User, UsersResponse } from '../interfaces/req-response';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs';
import { environment } from '../../environments/environment';

const API_KEY = environment.reqres_in_api_key;

interface State {
  users: User[],
  loading: boolean
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  http = inject(HttpClient);

  #state = signal<State>({
    users: [],
    loading: true
  });

  public users = computed(() => this.#state().users);
  public loading = computed(() => this.#state().loading);


  constructor() {

    console.log('Cargando datos...');
    this.http.get<UsersResponse>('https://reqres.in/api/users', {
      headers: {
        'x-api-key': API_KEY
      }
    })
      .pipe(
        delay(2000)
      )
      .subscribe(resp => {
        this.#state.set({
          loading: false,
          users: resp.data
        })
      });

   }

}
