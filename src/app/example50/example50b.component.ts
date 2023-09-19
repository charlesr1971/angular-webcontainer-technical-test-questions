import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-example50b",
  template: `
    <div class="item-header-1">Question</div>
    <img class="question-image" src="./assets/images/questions/qA35.png" />
    <div class="item-header-3">Answer</div>
    <div class="item-content item-text">
      <span [innerHTML]="code"></span>
    </div>
    <div class="item-header-5">Conflict</div>
    <div class="item-content item-text">
      The question appears to indicate that there is only one incorrect answer,
      when, in fact, there are three incorrect answers.
    </div>
  `,
  styles: [],
})
export class Example50bComponent implements OnInit {
  code = `exports: sharedElements.concat(imports), // export 2 FAIL`;

  constructor() {}

  ngOnInit(): void {}
}
