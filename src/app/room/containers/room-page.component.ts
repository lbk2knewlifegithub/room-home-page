import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import * as fromData from '@lbk/room/data';
import { Observable, of } from 'rxjs';
import { Product } from '../models';

@Component({
  selector: 'lbk-room-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main class="space-y-20">
      <lbk-product-preview-list
        class="block"
        *ngIf="products$ | async as products"
        [products]="products"
      ></lbk-product-preview-list>

      <lbk-about class="block"></lbk-about>
    </main>
  `,
})
export class RoomPageComponent implements OnInit {
  products$!: Observable<Product[]>;

  ngOnInit(): void {
    this.products$ = of(fromData.products);
  }
}
