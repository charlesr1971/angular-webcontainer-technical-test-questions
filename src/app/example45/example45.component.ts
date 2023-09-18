import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-example45",
  template: `
    <div class="item-header-1">Question</div>
    <img class="question-image" src="./assets/images/questions/qA30.png" />
    <div class="item-header-3">Answer</div>
    <div class="item-content item-text">False</div>
    <div class="item-header-4">Notes</div>
    <div class="item-content item-text">
      A directive has the same set of lifecycle hooks, minus the hooks that are
      specific to component content and views.<br />
      <a
        href="https://v2.angular.io/docs/ts/latest/guide/lifecycle-hooks.html#:~:text=Angular%20offers%20lifecycle%20hooks%20that,to%20component%20content%20and%20views."
        target="_blank"
        >More information</a
      >
    </div>
  `,
  styles: [],
})
export class Example45Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
