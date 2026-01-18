import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RESTCountry } from '../interfaces/rest-countries.interface';
import { catchError, delay, map, of, tap, throwError } from 'rxjs';
import { CountryMapper } from '../mappers/country.mapper';
import { Country } from '../interfaces/country.interface';

const API_URL = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private http = inject(HttpClient);
  private queryCacheCapital = new Map<string, Country[]>();
  private queryCacheCountry = new Map<string, Country[]>();




  searchByCapital( query: string) {
    query = query.toLocaleLowerCase();

    if (this.queryCacheCapital.has(query)) {
      return of(this.queryCacheCapital.get(query)!);
    }

    console.log('Obteniendo info', query);

    return this.http.get<RESTCountry[]>(`${API_URL}/capital/${query}`)
      .pipe(
        map(CountryMapper.fromRestCountryArrayToCountryArray),
        tap((coutries) => this.queryCacheCapital.set(query, coutries)),
        catchError(error => {

          return throwError(() => new Error('No se pudo obtener resultados'));
        })
     );
  }

  searchByCountry( query: string) {
    query = query.toLocaleLowerCase();

    if (this.queryCacheCountry.has(query)) {
      return of(this.queryCacheCountry.get(query)!);
    }

    console.log('Obteniendo info', query);

    return this.http.get<RESTCountry[]>(`${API_URL}/name/${query}`)
      .pipe(
        map(CountryMapper.fromRestCountryArrayToCountryArray),
        tap((coutries) => this.queryCacheCountry.set(query, coutries)),
        catchError(error => {

          return throwError(() => new Error('No se pudo obtener resultados'));
        })
     );
  }

  searchContryByAlphaCode( query: string) {
    query = query.toLocaleLowerCase();

    return this.http.get<RESTCountry[]>(`${API_URL}/alpha/${query}`)
      .pipe(
        map(CountryMapper.fromRestCountryArrayToCountryArray),
        map(countries => countries[0]),
        catchError(error => {

          return throwError(() => new Error(`No se pudo obtener el pais con el código ${query}`));
        })
     );
  }

}
