import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example50a',
  template: `
    <div class="item-header-1">Question</div>
    <img class="question-image" src="./assets/images/questions/qA35.png" />
    <div class="item-header-3">Answer</div>
    <div class="item-content item-text">
      <span [innerHTML]="code"></span>
    </div>
  `,
  styles: [
  ]
})
export class Example50aComponent implements OnInit {

  code = `exports: sharedElements.concat(imports), // export 2 FAIL`;

  constructor() { }

  ngOnInit(): void {
  }

}
