import { ChangeDetectionStrategy, Component, inject, resource, signal } from '@angular/core';
import { CountryList } from '../../components/country-list/country-list';
import { SearchInput } from '../../components/search-input/search-input';
import { CountryService } from '../../services/country';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-by-country-page',
  imports: [SearchInput, CountryList],
  templateUrl: './by-country-page.html',
  styleUrl: './by-country-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByCountryPage {

  countryService = inject(CountryService);
  query = signal('');

  countryResource = resource({
    params: ()=> ({ query: this.query() }),
    loader: async({params}) => {
      if(!params.query) return [];

      return await firstValueFrom(this.countryService.searchByCountry(params.query));

    },
  });

 }
