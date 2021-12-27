import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-logo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a routerLink="/">
      <h3
        class="text-2xl font-bold leading-6 tracking-wide text-white lg:text-4xl"
      >
        room
      </h3>
    </a>
  `,
})
export class LogoComponent {}
