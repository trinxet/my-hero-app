import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[upperCaseInput]',
})
export class UpperDirective {
  constructor(private el: ElementRef) {}

  @HostListener('document:keyup', ['$event']) onKeydownHandler(
    event: KeyboardEvent
  ) {
    if (this.el.nativeElement.value) {
      this.el.nativeElement.value = this.el.nativeElement.value.toUpperCase();
    }
  }
}
