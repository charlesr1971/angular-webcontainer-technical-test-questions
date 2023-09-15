import {
  Component,
  Renderer2,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewInit,
  VERSION,
} from '@angular/core';

@Component({
  selector: 'app-renderer2',
  template: `
    <p #hello>
      renderer2 works!
    </p>
  `,
  styles: [],
})
export class Renderer2Component implements OnInit {
  @ViewChild('hello', { static: false }) divHello!: ElementRef;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    setTimeout(() => {
      this.renderer.setProperty(
        this.divHello.nativeElement,
        'innerHTML',
        'Hello Angular'
      );
      this.renderer.setStyle(this.divHello.nativeElement, 'color', 'red');
      this.renderer.setStyle(this.divHello.nativeElement, 'color', 'red');
    });
  }
}
