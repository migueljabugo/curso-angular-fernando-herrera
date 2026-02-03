import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

const baseUrl = environment.baseUrl;

@Pipe({
  name: 'productImage'
})
export class ProductImgaePipe implements PipeTransform {
  transform(value: null | string | string[]): string {

    if (value === null) {
      return './assets/images/no-image.jpg';
    }

    if (typeof value === 'string' && value.startsWith('blob:')){
      return value;
    }

    if (Array.isArray(value)) {
      if (value.length === 0) {
        return './assets/images/no-image.jpg';
      }

      return `${baseUrl}/files/product/${value[0]}`;
    }

    return `${baseUrl}/files/product/${value}`;
  }
}
