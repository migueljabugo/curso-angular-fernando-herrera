import { Country } from './../../interfaces/country.interface';
import { DecimalPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, resource } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import countryRoutes from '../../country.routes';
import { firstValueFrom } from 'rxjs';
import { CountryService } from '../../services/country';

@Component({
  selector: 'app-country-page',
  imports: [DecimalPipe],
  templateUrl: './country-page.html',
  styleUrl: './country-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryPage {

  countryService = inject(CountryService);
  countryCode = inject(ActivatedRoute).snapshot.params['code'];

  countryResource = resource({
    params: () => ({ code: this.countryCode }),
    loader: async ({ params }) => {
      if (!params.code) return;

      return await firstValueFrom(this.countryService.searchContryByAlphaCode(params.code));

    },
  });



 }
