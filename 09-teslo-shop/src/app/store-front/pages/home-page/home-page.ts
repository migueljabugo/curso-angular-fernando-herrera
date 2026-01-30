
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ProductsService } from '@products/services/products.service';
import { ProductCard } from '@store-front/components/product-card/product-card';
import { rxResource } from '@angular/core/rxjs-interop';
import { Pagination } from "@shared//components/pagination/pagination";

@Component({
  selector: 'app-home-page',
  imports: [
    ProductCard,
    Pagination
],
  templateUrl: './home-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {

  productsService = inject(ProductsService);

  productResource = rxResource({
    params: () => ({}),
    stream: ({params}) => {
      return this.productsService.getProducts({});
    }
  });

 }
