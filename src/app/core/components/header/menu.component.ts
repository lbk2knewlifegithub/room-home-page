import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'lbk-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button (click)="onMenu()">
      <img [src]="src" [alt]="name" />
    </button>
  `,
})
export class MenuComponent {
  @Input() open!: boolean;
  @Output() openChange = new EventEmitter<boolean>();

  get name(): string {
    return this.open ? 'close' : 'hamburger';
  }

  get src() {
    return `assets/images/icon-${this.name}.svg`;
  }
  onMenu() {
    this.openChange.emit(!this.open);
  }
}
