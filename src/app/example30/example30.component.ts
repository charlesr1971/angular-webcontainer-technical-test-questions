import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-example30",
  template: `
    <div class="item-header-1">Question</div>
    <img class="question-image" src="./assets/images/questions/qA14.png" />
    <div class="item-header-3">Answer</div>
    <div class="item-content item-text">ModuleWithProviders</div>
    <div class="item-header-4">Notes</div>
    <div class="item-content item-text">
      <a
        href="https://medium.com/slackernoon/when-to-use-angulars-forroot-method-400094a0ebb7"
        target="_blank"
        >More Information</a
      >
    </div>
  `,
  styles: [],
})
export class Example30Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
