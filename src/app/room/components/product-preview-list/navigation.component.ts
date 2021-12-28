import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output
} from '@angular/core';

@Component({
  selector: 'lbk-navigation',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!--    navigator carousel-->
    <div class="flex bg-black">
      <!--      previous-->
      <div
        (click)="previous.emit()"
        class="flex items-center justify-center cursor-pointer w-14 h-14 bg-red"
      >
        <img
          class="w-3"
          src="/assets/images/icon-angle-left.svg"
          alt="Angle Left"
        />
      </div>
      <!--      end previous-->

      <!--     next -->
      <div
        (click)="next.emit()"
        class="flex items-center justify-center cursor-pointer w-14 h-14 bg-red"
      >
        <img
          class="w-3"
          src="/assets/images/icon-angle-right.svg"
          alt="Angle Right"
        />
      </div>
      <!--     end next -->
    </div>
    <!--    end navigator carousel-->
  `,
})
export class NavigationComponent {
  @Output() next = new EventEmitter<void>();
  @Output() previous = new EventEmitter<void>();
}
