import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example5',
  template: `
    <div class="item-header-1">Question</div>
    <img class="question-image" src="./assets/images/questions/q15.png" />
    <div class="item-header-2">Implementation</div>
    <div class="item-header-2-content">
      <!-- <div #Answer1>{{ 1++ }}</div> -->
      <!-- <div #Answer2>{{ variable | 1 }}</div> -->
      <div #Answer3>{{ variable - 1 }}</div>
      <!-- <div #Answer4>{{ variable = 1 }}</div> -->
    </div>
    <div class="item-header-3">Answer</div>
    <div class="item-content item-text">Answer3</div>
    <div class="item-header-4">Notes</div>
    <div class="item-content item-text">No error is thrown. To test this, comment out each option and see which one is transpiled.</div>
	`,
  styles: [],
})
export class Example5Component implements OnInit {
  variable: number;

  constructor() {}

  ngOnInit(): void {}
}
