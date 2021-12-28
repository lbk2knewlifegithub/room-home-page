import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Product } from '@lbk/room/models';

@Component({
  selector: 'lbk-product-feature',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!--discover-->
    <section class="relative xl:col-span-5">
      <div
        class="p-[2rem] mt-16 flex items-center justify-center flex-col xl:h-full xl:mt-0"
      >
        <div class="max-w-lg">
          <h1
            class="text-3xl font-bold sm:text-4xl md:text-4xl lg:text-5xl xl:text-4xl"
          >
            {{ product.name }}
          </h1>
          <p
            class="mt-6 text-sm text-skin-muted sm:text-base md:text-lg text:text-md lg:mt-16 xl:mt-8"
            [innerHTML]="product.description"
          ></p>

          <!--    shop now-->
          <!--    end shop now-->
        </div>
      </div>

      <lbk-navigation
        (onNext)="onNext()"
        (onPrevious)="onPrevious()"
        class="absolute bottom-0 left-0 hidden xl:block"
      >
      </lbk-navigation>
    </section>
    <!--end discover-->
  `,
})
export class ProductFeatureComponent {
  @Input() product!: Product;

  onNext() {}

  onPrevious() {}
}
