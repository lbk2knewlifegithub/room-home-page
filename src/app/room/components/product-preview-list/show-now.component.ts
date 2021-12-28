import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-shop-now',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a routerLink="/" class="inline-flex items-center gap-8 group">
      <span class="uppercase tracking-[8px] font-semibold text-muted-900"
        >Shop now</span
      >

      <!-- arrow icon -->
      <img
        class="duration-300 group-hover:translate-x-5"
        src="/assets/images/icon-arrow.svg"
        alt="Arrow Long Left"
      />
      <!-- end arrow icon -->
    </a>
  `,
})
export class ShopNowComponent {}
