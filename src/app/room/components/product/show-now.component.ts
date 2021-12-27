import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-shop-now',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="flex items-center self-start mt-14">
      <a class="uppercase tracking-[5px] text-xl" routerLink="/">Shop now</a>

      <!-- arrow icon -->
      <img
        class="ml-8"
        src="/assets/images/icon-arrow.svg"
        alt="Arrow Long Left"
      />
      <!-- end arrow icon -->
    </div>
  `,
})
export class ShopNowComponent {}
