import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'lbk-links-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ul [style.color]="color" class="flex font-bold gap-5 md:gap-8 lg:gap-10">
      <li>
        <a [ngClass]="ngClass" class="animate-link " routerLink="/">home</a>
      </li>
      <li>
        <a [ngClass]="ngClass" class="animate-link " routerLink="/">shop</a>
      </li>
      <li>
        <a [ngClass]="ngClass" class="animate-link " routerLink="/">about</a>
      </li>

      <li>
        <a [ngClass]="ngClass" class="animate-link " routerLink="/">contact</a>
      </li>
    </ul>
  `,
})
export class LinksHeaderComponent {
  @Input() color: 'white' | 'black' = 'black';
  @Input() open!: boolean;

  get ngClass() {
    return {
      'before:bg-white': this.color === 'white',
    };
  }
}
