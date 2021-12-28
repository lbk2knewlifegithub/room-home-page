import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="xl:h-full">
      <div class="grid gap-16 xl:grid-cols-10 xl:gap-0 xl:h-full overflow-hidden">
        <!--    dark-->
        <img
          class="pattern"
          src="/assets/images/image-about-dark.jpg"
          alt="About Dark"
        />
        <!--    end dark-->

        <lbk-about-content
          class="xl:col-span-4 max-w-3xl mx-auto"
        ></lbk-about-content>

        <!--    light-->
        <img
          class="pattern"
          src="/assets/images/image-about-light.jpg"
          alt="About Light"
        />
        <!--    end light-->
      </div>
    </section>
  `,
  styles: [
    `
      .pattern {
        @apply aspect-video w-full max-h-[500px] object-cover object-center xl:col-span-3 xl:h-full xl:max-h-full;
      }
    `,
  ],
})
export class AboutComponent {}
