import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import { Product } from '@lbk/room/models';
import { CarouselComponent } from './carousel/carousel.component';

@Component({
  selector: 'lbk-product-carousel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="relative xl:h-full ">
      <!-- product image -->
      <lbk-carousel
        #carousel
        class="xl:h-full"
        (indexChange)="onTranslated($event)"
        [products]="products"
      ></lbk-carousel>
      <!-- end product image -->

      <lbk-navigation
        (next)="next.emit()"
        (previous)="previous.emit()"
        class="absolute bottom-0 right-0 block z-50 xl:hidden"
      ></lbk-navigation>
    </div>
  `,
})
export class ProductCarouselComponent {
  @Input() products!: Product[];

  @Input() product!: Product;
  @Output() productChange = new EventEmitter<Product>();

  @Output() next = new EventEmitter<void>();
  @Output() previous = new EventEmitter<void>();

  @ViewChild(CarouselComponent)
  carousel!: CarouselComponent;

  onTranslated(index: number) {
    const tmp = this.products[index - 1];
    if (!tmp) return;
    this.product = tmp;
    this.productChange.emit(this.product);
  }

  get src(): string {
    const matched = window.matchMedia('(min-width: 1024px)').matches;
    return matched ? this.product.srcDesktop : this.product.srcMobile;
  }
}
