import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { SearchInput } from '../../components/search-input/search-input';
import { CountryList } from '../../components/country-list/country-list';
import { CountryService } from '../../services/country';

@Component({
  selector: 'app-by-capital-page',
  imports: [SearchInput, CountryList],
  templateUrl: './by-capital-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByCapital {

  countryService = inject(CountryService);

  onSearch(value: string){
    console.log(value);
    this.countryService.searchByCapital(value)
      .subscribe(resp => console.log(resp));
  }


 }
