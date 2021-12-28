import { ChangeDetectionStrategy, Component } from '@angular/core';
import { listAnimation } from '@lbk/shared/animations';

@Component({
  selector: 'lbk-links-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ul @listAnimation class="flex font-bold gap-5">
      <li><a class="animate-link" routerLink="/">home</a></li>
      <li><a class="animate-link" routerLink="/">shop</a></li>
      <li><a class="animate-link" routerLink="/">about</a></li>
      <li><a class="animate-link" routerLink="/">contact</a></li>
    </ul>
  `,
  animations: [listAnimation()],
})
export class LinksHeaderComponent {}
