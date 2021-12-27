import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Product } from '@lbk/room/models';

@Component({
  selector: 'lbk-product-carousel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div>
      <div class="grid xl:grid-cols-12">
        <nav
          class="relative aspect-w-9 aspect-h-9 md:aspect-w-16 xl:col-span-7"
        >
          <!--  background image mobile-->
          <img
            class="absolute inset-0 w-full h-full object-cover object-center z-[-1] md:hidden"
            [src]="product.srcMobile"
            alt="Background Image"
          />
          <!--  end background image mobile-->

          <!--    background desktop-->
          <img
            class="absolute inset-0 w-full h-full object-cover object-center z-[-1] hidden md:block"
            [src]="product.srcDesktop"
            alt="Background Image"
          />
          <!--    end background desktop-->

          <lbk-navigation
            (onNext)="onNext()"
            (onPrevious)="onPrevious()"
            class="absolute bottom-0 right-0 block xl:hidden"
          ></lbk-navigation>
        </nav>
      </div>
    </div>
  `,
})
export class ProductCarouselComponent {
  @Input() product!: Product;

  onNext() {}
  onPrevious() {}
}
