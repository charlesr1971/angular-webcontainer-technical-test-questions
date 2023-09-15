import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example20',
  template: `
    <div class="item-header-1">Question</div>
    <img class="question-image" src="./assets/images/questions/qA6.png" />
    <div class="item-header-3">Answer</div>
    <div class="item-content item-text">True</div>
    <div class="item-header-4">Notes</div>
    <div class="item-content item-text">In Angular, the async pipe is a pipe that essentially does these three tasks:
      <ol>
        <li>It subscribes to an observable or a promise and returns the last emitted value</li>
        <li>Whenever a new value is emitted, it marks the component to be checked. That means Angular will run Change Detector for that component in the next cycle</li>
        <li>It unsubscribes from the observable when the component gets destroyed</li>
      </ol>
      <a href="https://www.telerik.com/blogs/angular-basics-step-by-step-understanding-async-pipe" target="_blank">More Information</a>
    </div>
  `,
  styles: [],
})
export class Example20Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
