import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example67',
  template: `
    <div class="item-header-1">Question</div>
    <img class="question-image" src="./assets/images/questions/qA54.png" />
    <div class="item-header-2">Implementation</div>
    <div class="item-header-2-content">
      <div [ngSwitch]="user.country">
        <p #Case1 *ngSwitchCase="'country'">Case1</p>
        <p #Case2 *ngSwitchCase="'UK'">Case 2</p>
        <p #Case3 *ngSwitchCase="'FR'">Case 3</p>
        <p #Case4 *ngSwitchDefault>Case 4</p>
      </div>
    </div>
    <div class="item-header-3">Answer</div>
    <div class="item-content item-text">Case 4</div>
    <div class="item-header-4">Notes</div>
    <div class="item-content item-text">
      To begin with, <em>Case 2</em> is displayed, but once <em>ngOnInit()</em> kicks in, <em>Case 4</em> is displayed, because there is no match for 'ES': <a href="https://angular.io/api/common/NgSwitch" target="_blank"
        >More information</a
      >
    </div>
  `,
  styles: [
  ]
})
export class Example67Component implements OnInit {

  country = 'FR';
	user = { country: 'UK' };

  constructor() { }

  ngOnInit(): void {
    this.country = 'ES';
		this.user.country = this.country;
  }

}
