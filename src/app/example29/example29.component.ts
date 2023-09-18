import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-example29",
  template: `
    <div class="item-header-1">Question</div>
    <img class="question-image" src="./assets/images/questions/qA13.png" />
    <div class="item-header-3">Answer</div>
    <div class="item-content item-text">ngOnChanges</div>
    <div class="item-header-4">Notes</div>
    <div class="item-content item-text">
      <a href="https://angular.io/guide/lifecycle-hooks" target="_blank"
        >More Information</a
      >
    </div>
  `,
  styles: [],
})
export class Example29Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
