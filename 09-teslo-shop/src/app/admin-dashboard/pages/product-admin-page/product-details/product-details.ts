import { ChangeDetectionStrategy, Component, inject, input, OnInit } from '@angular/core';
import { Product } from '@products/interfaces/product.interface';
import { ProductCarousel } from "@products/components/product-carousel/product-carousel";
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormUtils } from '@utils/form-utils';
import { FormErrorLabel } from "@shared//components/form-error-label/form-error-label";
import { ProductsService } from '@products/services/products.service';

@Component({
  selector: 'product-details',
  imports: [
    ProductCarousel,
    ReactiveFormsModule,
    FormErrorLabel
],
  templateUrl: './product-details.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetails implements OnInit {
  product = input.required<Product>();
  fb = inject(FormBuilder);
  productService = inject(ProductsService);

  productForm = this.fb.group({
    title: ['', [Validators.required]],
    description: ['', [Validators.required]],
    slug: ['', [Validators.required, Validators.pattern(FormUtils.slugPattern)]],
    price: ['', [Validators.required, Validators.min(0)]],
    stock: ['', [Validators.required, Validators.min(0)]],
    sizes: [['']],
    images: [[]],
    gender: ['men', [Validators.required, Validators.pattern(/men|women|kid|unisex/)]],
    tags: ['']
  });

  sizes = ["XS", "S", "M", "L", "XL", "XXL"];

  ngOnInit(): void {
    this.setFormValue(this.product());
  }

  setFormValue(formLike: Partial<Product>){
    this.productForm.reset(this.product() as any);
    //this.productForm.patchValue(formLike as any);
    this.productForm.patchValue({ tags: formLike.tags?.join(',') });
  }

  onSizeClick(size: string){
    const currentSizes = this.productForm.value.sizes ?? [];

    if (currentSizes.includes(size)){
      currentSizes.splice(currentSizes.indexOf(size), 1);
    } else {
      currentSizes.push(size);
    }

    this.productForm.patchValue({ sizes: currentSizes });
  }


  onSubmit(){
    const isValid = this.productForm.valid;
    this.productForm.markAllAsTouched();

    if (!isValid) return;
    const formValue = this.productForm.value;

    const productLike: Partial<Product> = {
      ...(formValue) as any,
      tags: formValue.tags?.toLocaleLowerCase().split(',').map(gat => gat.trim()) ?? [],

    };


    this.productService.updateProduct(productLike);
  }




}
