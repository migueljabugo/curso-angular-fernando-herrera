import { ChangeDetectionStrategy, Component, output, effect, signal, computed, input } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './search-input.html',
  styleUrl: './search-input.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchInput {

  placeholder = input<string>("Buscar");

  value = output<string>();


 }
