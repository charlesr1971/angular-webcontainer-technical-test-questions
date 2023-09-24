import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example73',
  template: `
    <div class="item-header-1">Question</div>
    <img class="question-image" src="./assets/images/questions/qA60.png" />
    <div class="item-header-3">Answer</div>
    <div class="item-content item-text">:host</div>
    <div class="item-header-4">Notes</div>
    <div class="item-content item-text">
    <a href="https://angular.io/guide/component-styles#host" target="_blank"
          >More information</a>
    </div>
  `,
  styles: [
  ]
})
export class Example73Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
