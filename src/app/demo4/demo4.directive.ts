import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDemo4]',
})
export class Demo4Directive implements OnInit {
  constructor(private element: ElementRef, private renderer2: Renderer2) {}

  ngOnInit(): void {
    this.renderer2.setStyle(this.element.nativeElement, 'color', 'red');
  }
}
