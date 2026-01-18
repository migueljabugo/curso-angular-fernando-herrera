import { ChangeDetectionStrategy, Component, inject, input, resource, signal } from '@angular/core';
import { SearchInput } from '../../components/search-input/search-input';
import { CountryList } from '../../components/country-list/country-list';
import { Region } from '../../interfaces/region.type';
import { firstValueFrom } from 'rxjs';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region-page',
  imports: [CountryList],
  templateUrl: './by-region-page.html',
  styleUrl: './by-region-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByRegionPage {

  countryService = inject(CountryService);

  public regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
    'Antarctic'
  ];

  selectedRegion = signal<Region|null>(null);

  selectRegion(region: Region) {
    this.selectedRegion.set(region);
  }

  countryResource = resource({
    params: ()=> ({ query: this.selectedRegion() }),
    loader: async({params}) => {
      if(!params.query) return [];

      return await firstValueFrom(this.countryService.searchByRegion(params.query));

    },
  });

 }
