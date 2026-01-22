import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'heroCreator'
})

export class HeroCreatorPipe implements PipeTransform {
  transform(value: number): string {
    return value === 0
      ? 'Marvel'
      : 'DC';
  }
}
