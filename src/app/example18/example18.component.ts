import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example18',
  template: `
    <div class="item-header-1">Question</div>
    <img class="question-image" src="./assets/images/questions/qA1.png" />
    <div class="item-header-2">Implementation</div>
    <div class="item-header-3">Answer</div>
    <div class="item-content item-text">NavigationEnds</div>
    <div class="item-header-4">Notes</div>
    <div class="item-content item-text"><a href="https://www.tektutorialshub.com/angular/angular-router-events/" target="_blank">More Information</a></div>
  `,
  styles: [],
})
export class Example18Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
