import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, input, OnChanges, SimpleChanges, viewChild } from '@angular/core';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ProductImgaePipe as ProductImagePipe } from '@products/pipes/product-images.pipe';

@Component({
  selector: 'product-carousel',
  imports: [
    ProductImagePipe
  ],
  templateUrl: './product-carousel.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./product-carousel.css']
})
export class ProductCarousel implements AfterViewInit, OnChanges {

  images = input.required<Array<string>>();
  swiperDiv = viewChild<ElementRef>('swiperDiv');
  swiper: Swiper | undefined = undefined;



  ngOnChanges(changes: SimpleChanges): void {
    if (changes['images']?.firstChange) {
      return;
    }

    if (!this.swiper) return;

    this.swiper.destroy(true, true);
    this.swiperInit();

    const paginationEl = this.swiperDiv()?.nativeElement?.querySelector('.swiper-pagination');
    if (paginationEl) {
      paginationEl.innerHTML = '';
    }
  }

  ngAfterViewInit(): void {
    this.swiperInit();

  }

  swiperInit(){
    const element = this.swiperDiv()?.nativeElement;
    if (!element) { return; }

    this.swiper = new Swiper(element, {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      modules: [Navigation, Pagination],

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
  }
 }
