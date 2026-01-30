import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '@products/services/products.service';
import { map } from 'rxjs';
import { ProductCard } from "@store-front/components/product-card/product-card";
import { TitleCasePipe } from '@angular/common';
import { PaginationService } from '@shared//components/pagination/pagination.service';
import { Pagination } from "@shared//components/pagination/pagination";

@Component({
  selector: 'app-gender-page',
  imports: [
    ProductCard,
    TitleCasePipe,
    Pagination
],
  templateUrl: './gender-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GenderPage {

  route = inject(ActivatedRoute);

  pagintaionSErvice = inject(PaginationService);

  gender = toSignal(this.route.params.pipe(
    map(({gender}) => gender)
  ));

  productsService = inject(ProductsService);

  productResource = rxResource({
    params: () => ({
      gender: this.gender(),
      page: this.pagintaionSErvice.currentPage() - 1
    }),
    stream: ({params}) => {
      return this.productsService.getProducts({
        gender:params.gender,
        offset: params.page * 9
      });
    }
  });

 }
