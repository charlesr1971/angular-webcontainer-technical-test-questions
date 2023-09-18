import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-example31",
  template: `
    <div class="item-header-1">Question</div>
    <img class="question-image" src="./assets/images/questions/qA15.png" />
    <div class="item-header-3">Answer</div>
    <div class="item-content item-text">False</div>
    <div class="item-header-4">Notes</div>
    <div class="item-content item-text">
      <a href="https://angular.io/guide/providers" target="_blank"
        >More Information</a
      >
    </div>
  `,
  styles: [],
})
export class Example31Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
