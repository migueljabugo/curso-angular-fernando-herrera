import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

const baseUrl = environment.baseUrl;

@Pipe({
  name: 'productImage'
})
export class ProductImgaePipe implements PipeTransform {
  transform(value: string | string[]): string {

    if (Array.isArray(value)) {
      if (value.length === 0) {
        return './assets/images/no-image.jpg';
      }

      return `${baseUrl}/files/product/${value[0]}`;
    }

    return `${baseUrl}/files/product/${value}`;
  }
}
