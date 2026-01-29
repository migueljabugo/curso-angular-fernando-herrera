import { SlicePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Product } from '@products/interfaces/product.interface';

@Component({
  selector: 'product-card',
  imports: [
    RouterLink,
    SlicePipe
  ],
  templateUrl: './product-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCard {

  product = input.required<Product>();
  imageUrl = computed(() => {
    //if (this.product().images.length === 0) {
    //  return 'https://via.placeholder.com/640x480.png?text=No+image';
    //}
    return `http://localhost:3000/api/files/product/${this.product().images[0]}`
  });
}
