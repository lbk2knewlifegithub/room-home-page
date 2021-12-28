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
    <div>
      <!--      previous-->
      <button (click)="previous.emit()" class="">
        <img src="/assets/images/icon-angle-left.svg" alt="Angle Left" />
      </button>
      <!--      end previous-->

      <!--     next -->
      <button (click)="next.emit()">
        <img src="/assets/images/icon-angle-right.svg" alt="Angle Right" />
      </button>
      <!--     end next -->
    </div>
  `,
  styles: [
    `
      div {
        @apply inline-flex;

        button {
          @apply bg-black flex items-center justify-center  w-14 h-14 duration-300 hover:bg-black/70;
          img {
            @apply w-3;
          }
        }
      }
    `,
  ],
})
export class NavigationComponent {
  @Output() next = new EventEmitter<void>();
  @Output() previous = new EventEmitter<void>();
}
