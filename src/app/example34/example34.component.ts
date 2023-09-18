import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-example34",
  template: `
    <div class="item-header-1">Question</div>
    <img class="question-image" src="./assets/images/questions/qA18.png" />
    <div class="item-header-3">Answer</div>
    <div class="item-content item-text">NgModules</div>
    <div class="item-header-4">Notes</div>
    <div class="item-content item-text">
      <a
        href="https://blog.angular-university.io/angular2-ngmodule/#:~:text=we%20can%20list%20the%20components,be%20used%20in%20some%20cases"
        target="_blank"
        >More Information</a
      >
    </div>
  `,
  styles: [],
})
export class Example34Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
