import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { ProductImgaePipe } from '@products/pipes/product-images.pipe';
import { ProductsService } from '@products/services/products.service';

@Component({
  selector: 'app-product-page',
  imports: [
    ProductImgaePipe
  ],
  templateUrl: './product-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductPage {

  activatedRoute = inject(ActivatedRoute);

  productsService = inject(ProductsService);

  productIdSlug: string = this.activatedRoute.snapshot.params['idSlug'];

  productResource = rxResource({
    params: () => ({idSlug: this.productIdSlug}),
    stream: ({params}) => {
      return this.productsService.getProductByIdSlug(params.idSlug);
    }
  });

 }
