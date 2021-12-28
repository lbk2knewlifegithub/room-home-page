import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';
import { Product } from '@lbk/room/models';

@Component({
  selector: 'lbk-product-preview-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="space-y-16">
      <lbk-product-carousel
        class="block"
        [products]="products"
      ></lbk-product-carousel>

      <lbk-product-feature
        class="block"
        [product]="product"
      ></lbk-product-feature>
    </section>
  `,
})
export class ProductPreviewListComponent implements OnInit {
  @Input() products!: Product[];

  product!: Product;

  ngOnInit(): void {
    this.product = this.products[0];
  }
}
