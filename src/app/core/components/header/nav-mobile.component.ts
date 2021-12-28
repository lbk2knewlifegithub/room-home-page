import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-nav-mobile',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nav
      [ngClass]="ngClass"
      class="container flex items-center py-10 duration-500"
    >
      <lbk-menu [(open)]="openNav" class="block"></lbk-menu>

      <div class="w-full flex justify-center">
        <lbk-logo *ngIf="!openNav"></lbk-logo>
        <lbk-links-header *ngIf="openNav"></lbk-links-header>
      </div>
    </nav>
  `,
})
export class NavMobileComponent {
  openNav = false;

  get ngClass() {
    return {
      'bg-white gap-10': this.openNav,
      'delay-1000': !this.openNav,
    };
  }
}
