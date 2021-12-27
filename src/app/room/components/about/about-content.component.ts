import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-about-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main class="px-12 xl:col-span-4 xl:pt-16">
      <h2
        class="uppercase font-bold tracking-[4px] sm:text-3xl md:text-4xl lg:text-5x xl:text-3xl"
      >
        About our furniture
      </h2>
      <p class="mt-3 text-sm text-skin-muted sm:text-base md:text-lg">
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
