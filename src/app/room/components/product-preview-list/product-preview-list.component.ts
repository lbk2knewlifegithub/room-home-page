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
    <section>
      <lbk-product-carousel [products]="products"></lbk-product-carousel>

      <lbk-product-feature [product]="product"></lbk-product-feature>
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
