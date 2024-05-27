
import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent implements OnChanges {
  @Input() data: any;
  @ViewChild('carousel') carousel!: ElementRef;
  currentIndex = 0;
  slideCount: number = 0;
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    if(this.data)this.slideCount = this.data.length;
  }

  goToSlide(index: number) {
    this.carousel.nativeElement.style.transform = `translateX(-${index * 100}%)`;
  }
  next() {
    this.currentIndex = (this.currentIndex + 1) % this.slideCount;
    this.goToSlide(this.currentIndex);
  }
  back() {
    this.currentIndex =
      (this.currentIndex - 1 + this.slideCount) % this.slideCount;
    this.goToSlide(this.currentIndex);
  }
}
