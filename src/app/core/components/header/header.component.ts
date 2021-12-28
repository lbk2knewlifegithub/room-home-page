import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="absolute w-full z-50">
      <!-- nav mobile -->
      <lbk-nav-mobile class="xl:hidden"></lbk-nav-mobile>
      <!-- end nav mobile -->

      <!-- nav desktop -->
      <lbk-nav-desktop class="hidden xl:block"></lbk-nav-desktop>
      <!-- end nav desktop -->
    </header>
  `,
})
export class HeaderComponent {}
