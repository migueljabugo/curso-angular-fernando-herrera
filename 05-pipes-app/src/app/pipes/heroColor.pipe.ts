import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../interfaces/hero.interface';
import { TitleCasePipe } from '@angular/common';

@Pipe({
  name: 'heroColor'
})

export class HeroColorPipe implements PipeTransform {
  transform(value: Color): string {
    return Color[value];
  }
}
