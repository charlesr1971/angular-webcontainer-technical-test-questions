import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example69',
  template: `
    <div class="item-header-1">Question</div>
    <img class="question-image" src="./assets/images/questions/qA56.png" />
    <div class="item-header-3">Answer</div>
    <div class="item-content item-text">The component won't compile, since interface <em>OnInit</em> is missing</div>
    <div class="item-header-4">Notes</div>
    <div class="item-content item-text">
      Try changing the implementation in <em>example69.component.ts</em>, by removing <em>OnInit</em> and see if the application compiles.
    </div>
  `,
  styles: [
  ]
})
export class Example69Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
