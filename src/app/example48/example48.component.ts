import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example48',
  template: `
    <div class="item-header-1">Question</div>
    <img class="question-image" src="./assets/images/questions/qA32.png" />
    <div class="item-header-3">Answer</div>
    <div class="item-content item-text">
      HttpInterceptor
    </div>
    <div class="item-header-4">Notes</div>
    <div class="item-content item-text">
      <a href="https://ultimatecourses.com/blog/intro-to-angular-http-interceptors#:~:text=To%20create%20an%20Interceptor%2C%20we,calls%20the%20intercept()%20method." target="_blank"
        >More information</a
      >
    </div>
  `,
  styles: [
  ]
})
export class Example48Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
