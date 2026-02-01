import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Product } from '@products/interfaces/product.interface';
import { ProductImgaePipe as ProductImagePipe } from '@products/pipes/product-images.pipe';
import { RouterLink } from "@angular/router";
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'product-table',
  imports: [
    ProductImagePipe,
    CurrencyPipe,
    RouterLink
],
  templateUrl: './product-table.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductTable {

  products = input.required<Product[]>();


 }
