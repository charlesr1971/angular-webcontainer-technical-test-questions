import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-example51",
  template: `
    <div class="item-header-1">Question</div>
    <img class="question-image" src="./assets/images/questions/qA36.png" />
    <div class="item-header-3">Answer</div>
    <div class="item-content item-text">True</div>
    <div class="item-header-5">Conflict</div>
    <div class="item-content item-text">
      The question talks about <em>feature model</em>, but I am fairly sure it
      means <em>feature module</em>
    </div>
  `,
  styles: [],
})
export class Example51Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
