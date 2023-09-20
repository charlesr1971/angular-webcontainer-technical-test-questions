import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-example59",
  template: `
    <div class="item-header-1">Question</div>
    <img class="question-image" src="./assets/images/questions/qA44.png" />
    <div class="item-header-2">Implementation</div>
    <div class="item-header-2-content">
      {{ birthday | date: "M/dd/yy" }}
    </div>
    <div class="item-header-3">Answer</div>
    <div class="item-content item-text">date: "M/dd/yy"</div>
    <div class="item-header-4">Notes</div>
    <div class="item-content item-text">
      <a href="https://angular.io/api/common/DatePipe" target="_blank"
        >More information</a
      >
    </div>
  `,
  styles: [],
})
export class Example59Component implements OnInit {
  birthday = new Date(1988, 11, 15);

  constructor() {}

  ngOnInit(): void {}
}
