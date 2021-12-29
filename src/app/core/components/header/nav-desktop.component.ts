import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-nav-desktop',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nav class="container flex items-center pl-20 pt-16 gap-20 duration-500">
      <lbk-logo></lbk-logo>
      <lbk-links-header [open]="true" color="white"></lbk-links-header>
    </nav>
  `,
})
export class NavDesktopComponent {}
