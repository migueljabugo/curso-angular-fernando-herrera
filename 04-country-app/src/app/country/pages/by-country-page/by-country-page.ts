import { ChangeDetectionStrategy, Component, inject, resource, signal } from '@angular/core';
import { CountryList } from '../../components/country-list/country-list';
import { SearchInput } from '../../components/search-input/search-input';
import { CountryService } from '../../services/country.service';
import { firstValueFrom } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-by-country-page',
  imports: [SearchInput, CountryList],
  templateUrl: './by-country-page.html',
  styleUrl: './by-country-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByCountryPage {

  countryService = inject(CountryService);

  activatedRoute = inject(ActivatedRoute);

  router = inject(Router);

  queryParam = this.activatedRoute.snapshot.queryParamMap.get('query') ?? '';

  query = signal(this.queryParam);

  countryResource = resource({
    params: ()=> ({ query: this.query() }),
    loader: async({params}) => {
      if(!params.query) return [];

      this.router.navigate(['/country/by-country'], {
        queryParams: {
          query: params.query
        }
      });

      return await firstValueFrom(this.countryService.searchByCountry(params.query));
    },
  });

 }
