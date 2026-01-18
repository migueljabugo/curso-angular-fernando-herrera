import { ChangeDetectionStrategy, Component, inject, resource, signal } from '@angular/core';
import { SearchInput } from '../../components/search-input/search-input';
import { CountryList } from '../../components/country-list/country-list';
import { CountryService } from '../../services/country.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-by-capital-page',
  imports: [SearchInput, CountryList],
  templateUrl: './by-capital-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByCapital {

  countryService = inject(CountryService);
  query = signal('');

  countryResource = resource({
    params: ()=> ({ query: this.query() }),
    loader: async({params}) => {
      if(!params.query) return [];

      return await firstValueFrom(this.countryService.searchByCapital(params.query));

    },
  });


  /*isLoading = signal(false);
  isError = signal<string | null>(null);
  countries = signal<Country[]>([]);

  onSearch(value: string) {
    if (this.isLoading()) return;

    this.isLoading.set(true);
    this.isError.set(null);

    this.countryService.searchByCapital(value)
      .subscribe({
        next: (countries) => {
          this.countries.set(countries);
          this.isLoading.set(false);
        },
        error: (error) => {
          this.isLoading.set(false);
          this.countries.set([]);
          this.isError.set(error);
        }

      });
  }*/


 }
