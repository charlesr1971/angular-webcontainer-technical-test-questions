import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-example1',
  template: `
    <button (click)="changeColor()">Change Color</button>
  `
})
export class Example1Component {

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  changeColor() {
    const button = this.el.nativeElement.querySelector('button');
    this.renderer.setStyle(button, 'background-color', 'red');
  }
}