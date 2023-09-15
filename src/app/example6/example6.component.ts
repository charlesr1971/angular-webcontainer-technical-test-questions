import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example6',
  template: `
  <div class="item-header-1">Question</div>
  <img class="question-image" src="./assets/images/questions/q16.png" />
  <div class="item-header-2">Implementation</div>
  <div class="item-header-2-content">
		<div class="div1" #Div1 [style.display]="displayContent ? 'block' : 'none'">DIV 1</div>
		<div class="div2" #Div2 *ngIf="displayContent">DIV 2</div>
  </div>
  <div class="item-header-3">Answer</div>
  <div class="item-content item-text">#Div1 will be present in the DOM with display set to none and #Div2
  will be removed from the DOM</div>
  <div class="item-header-4">Notes</div>
  <div class="item-content item-text">Look at implementation area and then inspect the #Div1 element</div>
	`,
  styles: [
    `
    div.div1 {
      width: 100px;
      height: 100px;
      border: 1px solid black;
      background-color: green;
    }
    div.div2 {
      width: 100px;
      height: 100px;
      border: 1px solid black;
      background-color: blue;
    }
  `,
  ],
})
export class Example6Component {
  displayContent = false;
}
