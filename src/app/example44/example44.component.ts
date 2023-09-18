import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-example44",
  template: `
    <div class="item-header-1">Question</div>
    <img class="question-image" src="./assets/images/questions/qA29.png" />
    <div class="item-header-3">Answer</div>
    <div class="item-content item-text">
      An <em>@Input()</em> property is writable, while an
      <em>@Output()</em> property is an observable?
    </div>
    <div class="item-header-4">Notes</div>
    <div class="item-content item-text">
      <a href="https://github.com/angular/angular/issues/23435" target="_blank"
        >More information</a
      >
    </div>
  `,
  styles: [],
})
export class Example44Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
