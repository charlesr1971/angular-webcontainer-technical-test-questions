import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-example41",
  template: `
    <div class="item-header-1">Question</div>
    <img class="question-image" src="./assets/images/questions/qA26.png" />
    <div class="item-header-3">Answer</div>
    <div class="item-content item-text">
      <div *ngFor="let item of items; let i = index">
        {{ i + 1 - (item.index - i) }}
      </div>
    </div>
  `,
  styles: [],
})
export class Example41Component implements OnInit {
  items = [{ index: 1 }];

  constructor() {}

  ngOnInit(): void {}
}
