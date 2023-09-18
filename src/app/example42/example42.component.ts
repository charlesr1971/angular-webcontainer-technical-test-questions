import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-example42",
  template: `
    <div class="item-header-1">Question</div>
    <img class="question-image" src="./assets/images/questions/qA27.png" />
    <div class="item-header-3">Answer</div>
    <div class="item-content item-text">NgFor</div>
    <div class="item-header-4">Notes</div>
    <div class="item-content item-text">
      <a
        href="https://angular.io/guide/built-in-directives#listing-items-with-ngfor"
        target="_blank"
        >More information</a
      >
    </div>
  `,
  styles: [],
})
export class Example42Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
