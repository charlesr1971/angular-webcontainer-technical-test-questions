import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-example32",
  template: `
    <div class="item-header-1">Question</div>
    <img class="question-image" src="./assets/images/questions/qA16.png" />
    <div class="item-header-3">Answer</div>
    <div class="item-content item-text">
      <div [innerHTML]="code"></div>
    </div>
    <div class="item-header-4">Notes</div>
    <div class="item-content item-text">
      <a
        href="https://ultimatecourses.com/blog/ng-class-angular-classes"
        target="_blank"
        >More Information</a
      >
    </div>
  `,
  styles: [],
})
export class Example32Component implements OnInit {
  code = `
  *ngClass="{'valid': isValid}"
  `;

  constructor() {}

  ngOnInit(): void {}
}
