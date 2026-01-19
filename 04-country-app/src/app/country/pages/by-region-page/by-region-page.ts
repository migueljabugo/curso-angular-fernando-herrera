import { ChangeDetectionStrategy, Component, inject, input, resource, signal } from '@angular/core';
import { SearchInput } from '../../components/search-input/search-input';
import { CountryList } from '../../components/country-list/country-list';
import { Region } from '../../interfaces/region.type';
import { firstValueFrom } from 'rxjs';
import { CountryService } from '../../services/country.service';
import { ActivatedRoute, Router } from '@angular/router';

function validateQueryParam (queryParam: string) : Region {
  const validRegions: Record<string, Region> = {
    'africa': 'Africa',
    'americas': 'Americas',
    'asia': 'Asia',
    'europe': 'Europe',
    'oceania': 'Oceania',
    'antarctic': 'Antarctic'
  };

  return validRegions[queryParam] ?? 'Europe';
}

@Component({
  selector: 'app-by-region-page',
  imports: [CountryList],
  templateUrl: './by-region-page.html',
  styleUrl: './by-region-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByRegionPage {

  countryService = inject(CountryService);

  activatedRoute = inject(ActivatedRoute);

  router = inject(Router);

  queryParam = this.activatedRoute.snapshot.queryParamMap.get('query') ?? '';

  public regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
    'Antarctic'
  ];

  selectedRegion = signal<Region | null>(validateQueryParam(this.queryParam));

  selectRegion(region: Region) {
    this.selectedRegion.set(region);
  }

  countryResource = resource({
    params: ()=> ({ query: this.selectedRegion() }),
    loader: async({params}) => {
      if(!params.query) return [];

      this.router.navigate(['/country/by-region'], {
        queryParams: {
          query: params.query
        }
      });

      return await firstValueFrom(this.countryService.searchByRegion(params.query));

    },
  });

 }
