import { inject, Injectable } from '@angular/core';
import { Gender, Product, ProductsResponse } from '../interfaces/product.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '@auth/interfaces/user.interface';


const baseUrl = environment.baseUrl;

interface Options {
  limit?: number;
  offset?: number;
  gender?: string;
};

const emptyProduct: Product = {
  id: 'new',
  title: '',
  price: 0,
  description: '',
  slug: '',
  stock: 0,
  sizes: [],
  gender: Gender.Men,
  tags: [],
  images: [],
  user: {} as User
};

@Injectable({providedIn: 'root'})
export class ProductsService {

  private http = inject(HttpClient);

  //Fernando recomienda utilizar la cache con TanStack Query
  //https://tanstack.com/query/latest
  private productsCache = new Map<string, ProductsResponse>();
  private productCache = new Map<string, Product>();

  getProducts(options: Options= {}): Observable<ProductsResponse> {

    const { limit = 9, offset = 0, gender = '' } = options;

    const key = `${limit}-${offset}-${gender}`;

    if (this.productsCache.has(key)) {
      return of(this.productsCache.get(key)!);
    }

    return this.http.get<ProductsResponse>(`${baseUrl}/products`,
      {
        params: {
          limit,
          offset,
          gender
        }
      }
    )
    .pipe(
      //tap(response => console.log(response)),
      tap((response) => this.productsCache.set(key, response))
    );
  }


  getProductByIdSlug(idSlug: string): Observable<Product> {

    const key = `p-${idSlug}`;

    if (this.productCache.has(key)) {
      return of(this.productCache.get(key)!);
    }


    return this.http.get<Product>(`${baseUrl}/products/${idSlug}`)
    .pipe(
      //tap(response => console.log(response)),
      tap((product) => this.productCache.set(key, product))
    );
  }

  getProductById(id: string): Observable<Product> {

    if (id === emptyProduct.id){
      return of(emptyProduct);
    }

    const key = `p-${id}`;

    if (this.productCache.has(key)) {
      return of(this.productCache.get(key)!);
    }


    return this.http.get<Product>(`${baseUrl}/products/${id}`)
    .pipe(
      //tap(response => console.log(response)),
      tap((product) => this.productCache.set(key, product))
    );
  }

  createProduct(productLike: Partial<Product>): Observable<Product>{

    return this.http.post<Product>(`${baseUrl}/products`, productLike)
    .pipe(
      tap((product) => this.updateProductCache(product, true))
    );
  }

  updateProduct(id:string, productLike: Partial<Product>){

    return this.http.patch<Product>(`${baseUrl}/products/${id}`, productLike)
    .pipe(
      tap((product) => this.updateProductCache(product))
    );
  }

  updateProductCache(product: Product, clearList = false){
    const productId = product.id;

    this.productCache.set(`p-${productId}`, product);

    if (clearList){
      this.productsCache.clear();
      return;
    }

    this.productsCache.forEach((productsResponse, key) => {
      productsResponse.products = productsResponse.products.map(currentProduct => {
        if (currentProduct.id === productId){
          return product;
        }
        return currentProduct;
      });
    });

    console.log('Cache Actualizado');
  }
}
