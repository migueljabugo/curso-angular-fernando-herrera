import { ChangeDetectionStrategy, Component, output, effect, signal, computed, input, linkedSignal } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './search-input.html',
  styleUrl: './search-input.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchInput {

  placeholder = input<string>("Buscar");
  debounceTime = input(500);
  initialValue = input('');

  value = output<string>();

  inputValue = linkedSignal<string>(()=> this.initialValue() ?? '');

  debounceEffect = effect((onCleanup) => {
    const value = this.inputValue();

    const timeout = setTimeout(() => {
      this.value.emit(value);
    }, this.debounceTime());

    onCleanup(() => {
      clearTimeout(timeout);
    });
  });




 }
