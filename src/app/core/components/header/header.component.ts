import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="absolute w-full z-50">
      <nav
        [ngClass]="ngClass"
        class="container flex items-center py-10 justify-between duration-500"
      >
        <lbk-menu [(open)]="openNav" class="block"></lbk-menu>

        <div *ngIf="!openNav" class="w-full flex justify-center">
          <lbk-logo></lbk-logo>
        </div>

        <lbk-links-header *ngIf="openNav"></lbk-links-header>
      </nav>
    </header>
  `,
})
export class HeaderComponent {
  openNav = true;

  get ngClass() {
    return {
      'bg-white': this.openNav,
      'delay-1000': !this.openNav,
    };
  }
}
