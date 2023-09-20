import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-example60",
  template: `
    <div class="item-header-1">Question</div>
    <img class="question-image" src="./assets/images/questions/qA45.png" />
    <div class="item-header-2">Implementation</div>
    <div class="item-header-2-content">
      <input type="text" required [(ngModel)]="model.name" />
    </div>
    <div class="item-header-3">Answer</div>
    <div class="item-content item-text">green</div>
  `,
  styles: [
    `
      input {
        border: none;
        outline: none;
        border-left: 5px solid yellow;
        padding: 15px;
        border-radius: 5px;
      }
      .ng-pristine {
        border-left: 5px solid yellow;
      }
      .ng-valid[required],
      .ng-valid.required {
        border-left: 5px solid green;
      }
      .ng-invalid:not(form) {
        border-left: 5px solid red;
      }
    `,
  ],
})
export class Example60Component implements OnInit {
  model = { name: "" };

  constructor() {}

  ngOnInit(): void {}
}
