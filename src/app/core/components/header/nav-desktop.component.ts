import { ChangeDetectionStrategy, Component } from '@angular/core';
import { listAnimation } from '@lbk/shared/animations';
import { fadeInOnEnterAnimation } from 'angular-animations';

@Component({
  selector: 'lbk-nav-desktop',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nav
      @fadeInOnEnter
      class="container flex items-center pl-20 pt-16 gap-20 duration-500"
    >
      <lbk-logo></lbk-logo>
      <lbk-links-header @listAnimation color="white"></lbk-links-header>
    </nav>
  `,
  animations: [
    fadeInOnEnterAnimation({ delay: 300 }),
    listAnimation({ delayEnter: 600 }),
  ],
})
export class NavDesktopComponent {}
