import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!--about-->
    <section class="container xl:mt-0 xl:flex-grow xl:row-span-2">
      <div
        class="grid space-y-16 xl:space-y-0 xl:grid-cols-10 xl:p-0 xl:h-full xl:w-full"
      >
        <!--    dark-->
        <div class="relative aspect-w-16 aspect-h-9 xl:col-span-3">
          <img
            class="absolute inset-0 w-full h-full"
            src="/assets/images/image-about-dark.jpg"
            alt="About Dark"
          />
        </div>
        <!--    end dark-->

        <lbk-about-content></lbk-about-content>

        <!--    light-->
        <div class="relative aspect-w-16 aspect-h-9 xl:col-span-3">
          <img
            class="absolute inset-0 w-full h-full"
            src="/assets/images/image-about-light.jpg"
            alt="About Light"
          />
        </div>
        <!--    end light-->
      </div>
    </section>
    <!--end about-->
  `,
})
export class AboutComponent {}
