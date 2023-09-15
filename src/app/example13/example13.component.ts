import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example13',
  template: `
    <div class="item-header-1">Question</div>
    <img class="question-image" src="./assets/images/questions/q17.png" />
    <div class="item-header-2">Implementation</div>
    <div class="item-header-3">Answer</div>
    <div class="item-content item-text">False</div>
    <div class="item-header-4">Notes</div>
    <div class="item-content item-text">In reactive forms, the source of truth lies in the component class, i.e. the form model (like FormGroup or FormControl instance), and NOT the component template. The update from the model to the view and from the view to the model is synchronous.<br />
    Template-driven forms are asynchronous in nature, whereas Reactive forms are mostly synchronous. In a template-driven approach, most of the logic is driven from the template, whereas in a reactive-driven approach, the logic resides mainly in the component or typescript code.</div>
  `,
  styles: [],
})
export class Example13Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
