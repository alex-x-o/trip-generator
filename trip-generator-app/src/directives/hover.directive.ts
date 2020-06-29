import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private elemRef: ElementRef) { }
  @HostBinding('class.selected')
  private hostSelected = false;

  @HostListener('mouseover') onMouseOver() {
    this.hostSelected = true;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.hostSelected = false;
  }

  @HostListener('click')
  private onClick() {
    this.hostSelected = !this.hostSelected;
  }
}
