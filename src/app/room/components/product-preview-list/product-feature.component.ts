import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { Product } from '@lbk/room/models';

@Component({
  selector: 'lbk-product-feature',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div
      class="relative p-8 py-24 xl:p-20 xl:h-full xl:grid xl:place-content-center"
    >
      <!-- text -->
      <div>
        <h1 class="text-3xl font-bold md:text-4xl">
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
        (next)="next.emit()"
        (previous)="previous.emit()"
        class="absolute bottom-0 left-0 hidden xl:block"
      >
      </lbk-navigation>
    </div>
  `,
})
export class ProductFeatureComponent {
  @Input() product!: Product;

  @Output() next = new EventEmitter<void>();
  @Output() previous = new EventEmitter<void>();
}
