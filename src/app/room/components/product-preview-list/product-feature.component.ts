import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Product } from '@lbk/room/models';

@Component({
  selector: 'lbk-product-feature',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="relative p-6">
      <!-- text -->
      <div>
        <h1 class="text-3xl font-bold">
          {{ product.name }}
        </h1>

        <p class="mt-6 text-sm text-muted-300 font-semibold">
          {{ product.description }}
        </p>
        <!-- end text -->
      </div>

      <!--    shop now-->
      <lbk-shop-now class="block mt-14"></lbk-shop-now>
      <!--    end shop now-->

      <lbk-navigation
        (onNext)="onNext()"
        (onPrevious)="onPrevious()"
        class="absolute bottom-0 left-0 hidden lg:block"
      >
      </lbk-navigation>
    </div>
  `,
})
export class ProductFeatureComponent {
  @Input() product!: Product;

  onNext() {}

  onPrevious() {}
}
