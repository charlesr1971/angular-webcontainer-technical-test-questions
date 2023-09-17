import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-example24",
  template: `
    <div class="item-header-1">Question</div>
    <img class="question-image" src="./assets/images/questions/qA10.png" />
    <div class="item-header-2">Implementation</div>
    <div class="item-header-3">Answer</div>
    <div class="item-content item-text">True</div>
    <div class="item-header-4">Notes</div>
    <div class="item-content item-text">
      As usual in Angular, you can rely on dependency injection
    </div>
  `,
  styles: [],
})
export class Example24Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
