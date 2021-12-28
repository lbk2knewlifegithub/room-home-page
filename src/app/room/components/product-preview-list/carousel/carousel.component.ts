import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { Product } from '@lbk/room/models';
import { Unsubscribe } from '@lbk/shared/components';
import { CarouselOptions } from '@lbk/shared/models';
import { debounceTime, fromEvent } from 'rxjs';
@Component({
  selector: 'lbk-carousel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './carousel.component.html',
  styles: [
    `
      .slide {
        @apply object-cover object-center h-full;
      }
    `,
  ],
})
export class CarouselComponent
  extends Unsubscribe
  implements OnInit, OnDestroy
{
  @ViewChild('slide') slideRef!: ElementRef;
  @Input() carouselOptions: CarouselOptions = {
    autoPlay: true,
    delay: 5000,
    duration: 500,
  };

  @Input() products!: Product[];

  @Input() set index(i: number) {
    if (this.slideRef && !this.transitionEnd) {
      this.applyTransition(this.slideRef.nativeElement);
    }

    this._index = i;
    this.indexChange.emit(i);
  }

  @Output() indexChange = new EventEmitter<number>();

  _index = 1;
  transitionEnd = false;

  lastClone!: Product;
  firstClone!: Product;
  interval: any;

  constructor(private readonly _cd: ChangeDetectorRef) {
    super();
  }

  ngOnInit(): void {
    this.lastClone = { ...this.products[this.products.length - 1] };
    this.firstClone = { ...this.products[0] };

    this.products = [this.lastClone, ...this.products, this.firstClone];

    // Register event when user the window resize
    this.appendSub = fromEvent(window, 'resize')
      .pipe(debounceTime(100))
      .subscribe(() => this._cd.detectChanges());

    // Register event when user press left or right arrow key
    this.appendSub = fromEvent(window, 'keydown').subscribe((event) => {
      const key = (event as KeyboardEvent).key;
      if (key === 'ArrowLeft') {
        this.previous();
      } else if (key === 'ArrowRight') {
        this.next();
      }
    });

    // If autoPlay is true, create interval interval
    if (this.carouselOptions.autoPlay) {
      this.interval = this.createInterval();
    }
  }

  private createInterval() {
    return setInterval(() => {
      this.next();
      this._cd.detectChanges();
    }, this.carouselOptions.delay);
  }

  private resetInterval() {
    clearInterval(this.interval);
    this.interval = this.createInterval();
  }

  override ngOnDestroy(): void {
    super.ngOnDestroy();
    if (this.interval) clearInterval(this.interval);
  }

  get current(): Product {
    return this.products[this.index];
  }

  private applyTransition(slide: HTMLElement) {
    slide.style.transition = `transform ${this.carouselOptions.duration}ms ease-in-out`;
  }

  previous(): void {
    if (this.index <= 0) return;
    this.transitionEnd = false;
    this.applyTransition(this.slide);
    this.index--;

    this.resetInterval();
  }

  next(): void {
    if (this.index >= this.products.length - 1) return;
    this.transitionEnd = false;
    this.applyTransition(this.slide);
    this.index = (this.index + 1) % this.products.length;

    this.resetInterval();
  }

  translate(slide: HTMLElement): any {
    return { transform: `translateX(-${this.index * slide.clientWidth}px)` };
  }

  onTransitionEnd(slide: HTMLElement): void {
    if (this.products[this.index] === this.lastClone) {
      this.transitionEnd = true;
      slide.style.transition = 'none';
      this.index = this.products.length - 2;
    }

    if (this.products[this.index] === this.firstClone) {
      this.transitionEnd = true;
      slide.style.transition = 'none';
      this.index = this.products.length - this.index;
    }
  }

  imageWidth(slide: HTMLElement): any {
    return { 'min-width': slide.clientWidth + 'px' };
  }

  get index(): number {
    return this._index;
  }

  get slide(): HTMLElement {
    return this.slideRef.nativeElement;
  }
}
