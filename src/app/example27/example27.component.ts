import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-example27",
  template: `
    <div class="item-header-1">Question</div>
    <img class="question-image" src="./assets/images/questions/qA21.png" />
    <div class="item-header-3">Answer</div>
    <div class="item-content item-text">
      <code> return next.handle(request); </code>
    </div>
    <div class="item-header-4">Notes</div>
    <div class="item-content item-text">
      <a
        href="https://stackoverflow.com/questions/62635885/next-handlerequest-in-multiple-http-interceptors-fails-undefined"
        target="_blank"
        >More Information</a
      >
    </div>
  `,
  styles: [],
})
export class Example27Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
