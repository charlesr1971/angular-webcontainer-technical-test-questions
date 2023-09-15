import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example15',
  template: `
    <div class="item-header-1">Question</div>
    <img class="question-image" src="./assets/images/questions/qA4.png" />
    <div class="item-header-3">Answer</div>
    <div class="item-content item-text">navigation 2</div>
    <div class="item-header-4">Notes</div>
    <div class="item-content item-text"><a href="https://stackoverflow.com/questions/45902521/routing-with-id-in-angular-4/50393304#50393304" target="_blank">More Information</a><br /><a href="https://angular.io/guide/router#accessing-query-parameters-and-fragments" target="_blank">Accessing query parameters and fragments</a></div>
  `,
  styles: [],
})
export class Example15Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
