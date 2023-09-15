import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-example12',
  template: `
    <div class="item-header-1">Question</div>
    <img class="question-image" src="./assets/images/questions/q19.png" />
    <div class="item-header-2">Implementation</div>
    <div class="item-header-2-content">
      <div>Time: {{ timer$ | async }}</ div>
    </div>
    <div class="item-header-3">Answer</div>
    <div class="item-content item-text">async</div>
  `,
})
export class Example12Component {
  timer$ = timer(0, 1000);
}
