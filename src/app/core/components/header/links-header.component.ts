import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-links-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ul class="flex font-bold gap-5">
      <li><a routerLink="/">home</a></li>
      <li><a routerLink="/">shop</a></li>
      <li><a routerLink="/">about</a></li>
      <li><a routerLink="/">contact</a></li>
    </ul>
  `,
})
export class LinksHeaderComponent {}
