import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example14',
  template: `
    <div class="item-header-1">Question</div>
    <img class="question-image" src="./assets/images/questions/q18.png" />
    <div class="item-header-2">Implementation</div>
    <div class="item-header-3">Answer</div>
    <div class="item-content item-text">False</div>
    <div class="item-header-4">Notes</div>
    <div class="item-content item-text">Because EventEmitters should only be used to emit events from components, and hence they should not be subscribed to, there is no need for Angular to provide a means to unsubscribe. If you are not using an output property in a component, use an Observable or a Subject instead of an EventEmitter: <a href="https://stackoverflow.com/questions/36494509/how-to-unsubscribe-from-eventemitter-in-angular-2" target="_blank">More Information</a></div>
  `,
  styles: [],
})
export class Example14Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
