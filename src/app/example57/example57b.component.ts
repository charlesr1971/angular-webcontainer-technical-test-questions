import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-example57b',
  template: `
    <p>
      example57b works!
    </p>
  `,
  styles: [
  ]
})
export class Example57bComponent implements OnInit {

  @Input() backgroundColor: string;

  constructor() { }

  ngOnInit(): void {
  }

}
