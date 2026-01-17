import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'country-list',
  imports: [],
  templateUrl: './country-list.html',
  styleUrl: './country-list.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryList { }
