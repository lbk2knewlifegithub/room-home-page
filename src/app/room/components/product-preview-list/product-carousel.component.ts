import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Product } from '@lbk/room/models';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'lbk-product-carousel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="relative">
      <!-- product image -->
      <owl-carousel-o #owl [options]="customOptions">
        <ng-container *ngFor="let product of products">
          <ng-template carouselSlide [id]="product.name">
            <img
              class="object-cover object-center"
              [src]="product.srcMobile"
              [alt]="product.name"
              [title]="product.name"
            />
          </ng-template>
        </ng-container>
      </owl-carousel-o>
      <!-- end product image -->

      <lbk-navigation
        (onNext)="owl.next()"
        (onPrevious)="owl.prev()"
        class="absolute bottom-0 right-0 block z-50"
      ></lbk-navigation>
    </div>
  `,
})
export class ProductCarouselComponent {
  @Input() products!: Product[];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1,
      },
    },
  };

  onNext() {}
  onPrevious() {}
}
