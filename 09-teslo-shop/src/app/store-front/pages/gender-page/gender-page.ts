import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '@products/services/products.service';
import { map } from 'rxjs';
import { ProductCard } from "@store-front/components/product-card/product-card";
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-gender-page',
  imports: [
    ProductCard,
    TitleCasePipe
  ],
  templateUrl: './gender-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GenderPage {

  route = inject(ActivatedRoute);

  gender = toSignal(this.route.params.pipe(
    map(({gender}) => gender)
  ));

  productsService = inject(ProductsService);

  productResource = rxResource({
    params: () => ({gender: this.gender()}),
    stream: ({params}) => {
      return this.productsService.getProducts({gender:params.gender});
    }
  });

 }
