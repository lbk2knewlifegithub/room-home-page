import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section>
      <div class="grid gap-16">
        <!--    dark-->
        <img
          class="aspect-video"
          src="/assets/images/image-about-dark.jpg"
          alt="About Dark"
        />
        <!--    end dark-->

        <lbk-about-content></lbk-about-content>

        <!--    light-->
        <img
          class="aspect-video"
          src="/assets/images/image-about-light.jpg"
          alt="About Light"
        />
        <!--    end light-->
      </div>
    </section>
  `,
})
export class AboutComponent {}
