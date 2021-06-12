import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightCard]'
})
export class HighlightCardDirective {

  constructor(private ele: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.makeOpaque('50%');
  }

  @HostListener('mouseleave') onMouseLeave() {
   this.makeOpaque(null);
 }


  private makeOpaque(opacity: string|null) {
   this.ele.nativeElement.style.opacity = opacity;
  }

}
