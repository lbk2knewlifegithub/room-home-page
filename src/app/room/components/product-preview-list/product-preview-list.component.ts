import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import { Product } from '@lbk/room/models';
import { ProductCarouselComponent } from './product-carousel.component';

@Component({
  selector: 'lbk-product-preview-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="xl:grid xl:grid-cols-5 xl:h-full">
      <lbk-product-carousel
        class="xl:col-span-3 xl:overflow-hidden"
        [products]="products"
        [(product)]="product"
        (next)="onNext()"
        (previous)="onPrevious()"
      ></lbk-product-carousel>

      <lbk-product-feature
        class="block max-w-2xl mx-auto  xl:col-span-2"
        [product]="product"
        (next)="onNext()"
        (previous)="onPrevious()"
      ></lbk-product-feature>
    </section>
  `,
})
export class ProductPreviewListComponent implements OnInit {
  @Input() products!: Product[];

  @ViewChild(ProductCarouselComponent)
  carousel!: ProductCarouselComponent;

  product!: Product;

  ngOnInit(): void {
    this.product = this.products[0];
  }

  onNext() {
    this.carousel.carousel.next();
  }

  onPrevious() {
    this.carousel.carousel.previous();
  }
}
