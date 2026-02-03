import { ChangeDetectionStrategy, Component, computed, inject, input, OnInit, signal } from '@angular/core';
import { Product } from '@products/interfaces/product.interface';
import { ProductCarousel } from "@products/components/product-carousel/product-carousel";
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormUtils } from '@utils/form-utils';
import { FormErrorLabel } from "@shared//components/form-error-label/form-error-label";
import { ProductsService } from '@products/services/products.service';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';

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
  router = inject(Router);

  wasSaved = signal(false);

  imageFileList: FileList | undefined = undefined;
  tempImages = signal<string[]>([]);

  imagesToCarouse = computed(()=>{
    const currentProdcutImages = [...this.product().images, ...this.tempImages()];
    return currentProdcutImages;
  } );


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


  async onSubmit(){
    const isValid = this.productForm.valid;
    this.productForm.markAllAsTouched();

    if (!isValid) return;
    const formValue = this.productForm.value;

    const productLike: Partial<Product> = {
      ...(formValue) as any,
      tags: formValue.tags?.toLocaleLowerCase().split(',').map(gat => gat.trim()) ?? [],

    };

    if(this.product().id === 'new'){
      const prodcuto = await firstValueFrom(
        this.productService.createProduct(productLike, this.imageFileList)
      );

      console.log('Producto creado', prodcuto);
      this.router.navigate(['/admin/product', prodcuto.id]);

      //this.wasSaved.set(true);
    }
    else
    {
      await firstValueFrom(
        this.productService.updateProduct(this.product().id, productLike, this.imageFileList)
      );

      console.log('Producto Actualizado');
    }

    this.wasSaved.set(true);

    setTimeout(() => {
      this.wasSaved.set(false);
    }, 3000);

  }

  //Imagenes
  onFileChange(event: Event){
    this.tempImages.set([]);
    const fileList = (event.target as HTMLInputElement).files;
    this.imageFileList = fileList ?? undefined;
    const imageUrls = Array.from(fileList ?? []).map(file => URL.createObjectURL(file));

    this.tempImages.set(imageUrls);
  }



}
