import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { AuthResponse } from '@auth/interfaces/auth-response.interface';
import { User } from '@auth/interfaces/user.interface';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

type AuthStatus = 'checking' | 'authenticated' | 'not-authenticated';
const baseUrl = environment.baseUrl;

@Injectable({providedIn: 'root'})
export class AuthService {

  private _authStatus = signal<AuthStatus>('checking');
  private _user = signal<User | null>(null);
  private _token = signal<string | null>(null);

  private http = inject(HttpClient);

  authStatus = computed(() => {
    if (this._authStatus() === 'checking') return 'checking';

    if (this._user()){
      return 'authenticated';
    }

    return 'not-authenticated';
  });

  user = computed<User | null>(() => this._user());

  token = computed(() => this._token());

  login(email: string, password: string):Observable<boolean>{
    return this.http.post<AuthResponse>(`${baseUrl}/auth/login`, {
      email: email,
      password: password
    }).pipe(
      tap(({user, token}) => {
        this._user.set(user);
        this._token.set(token);
        this._authStatus.set('authenticated');

        localStorage.setItem('token', token);
      }),
      map(resp => true),
      catchError((error) => {
        this._authStatus.set('not-authenticated');
        this._user.set(null);
        this._token.set(null);
        return of(false);
      })
    );
  }


}
