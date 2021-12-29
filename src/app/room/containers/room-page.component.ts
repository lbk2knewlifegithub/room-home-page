import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import * as fromData from '@lbk/room/data';
import { Observable, of } from 'rxjs';
import { Product } from '../models';

@Component({
  selector: 'lbk-room-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main class="container-large xl:h-[800px]">
      <lbk-product-preview-list
        class="block xl:h-[65%] overflow-hidden"
        *ngIf="products$ | async as products"
        [products]="products"
      ></lbk-product-preview-list>

      <lbk-about class="block xl:h-[35%]"></lbk-about>
    </main>
  `,
})
export class RoomPageComponent implements OnInit {
  products$!: Observable<Product[]>;

  ngOnInit(): void {
    this.products$ = of(fromData.products);
  }
}
