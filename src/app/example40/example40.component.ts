import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-example40",
  template: `
    <div class="item-header-1">Question</div>
    <img class="question-image" src="./assets/images/questions/qA25.png" />
    <div class="item-header-3">Answer</div>
    <div class="item-content item-text">transform()</div>
    <div class="item-header-4">Notes</div>
    <div class="item-content item-text">
      <a href="https://angular.io/guide/pipes" target="_blank"
        >More information</a
      >
    </div>
  `,
  styles: [],
})
export class Example40Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
