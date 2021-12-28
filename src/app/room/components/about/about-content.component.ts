import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-about-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main class="p-6 space-y-4">
      <h2 class="uppercase font-bold tracking-[6px]">About our furniture</h2>
      <p class="text-sm text-muted-300 font-medium">
        Out multifunctional collection blends design and function to sult your
        individual taste. Make each room unique, or pick a cohesive theme that
        best express your interests and what inspires you. Find the furniture
        pieces you need, from traditional to contemporary styles or anything in
        between. Product specialists are available to help you create your cream
        space.
      </p>
    </main>
  `,
})
export class AboutContentComponent {}
