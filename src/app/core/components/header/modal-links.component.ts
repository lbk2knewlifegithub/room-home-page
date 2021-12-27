import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'lbk-modal-links',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div
      class="flex items-center justify-between w-full px-8 bg-white shadow-lg py-14"
    >
      <!--    menu close-->
      <button class="cursor-pointer">
        <img src="/assets/images/icon-close.svg" alt="Close" />
      </button>
      <!--    end menu close-->

      <!--    links-->
      <ul class="flex gap-6 sm:gap-10">
        <li><a class="sm:text-xl" href="#">home</a></li>
        <li><a class="sm:text-xl" href="#">shop</a></li>
        <li><a class="sm:text-xl" href="#">about</a></li>
        <li><a class="sm:text-xl" href="#">contact</a></li>
      </ul>
      <!--    end links-->
    </div>
  `,
})
export class ModalLinksComponent {
  @Input() open!: boolean;
}
