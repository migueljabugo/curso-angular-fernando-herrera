import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Country } from '../../interfaces/country.interface';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'country-list',
  imports: [DecimalPipe, RouterLink],
  templateUrl: './country-list.html',
  styleUrl: './country-list.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryList {

  countries = input.required<Country[]>();

  errorMessage = input<string | null>();
  isLoading = input<boolean>(false);
  isEmpty = input<boolean>(false);



 }
