import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-example72',
  template: `
    <div class="item-header-1">Question</div>
    <img class="question-image" src="./assets/images/questions/qA59.png" />
    <div class="item-header-3">Answer</div>
    <div class="item-content item-text">1 9 25</div>
    <div class="item-header-4">Notes</div>
    <div class="item-content item-text">
      Please search for <em>Example72Component</em> in the console, for the answer.
    </div>
  `,
  styles: [
  ]
})
export class Example72Component implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const squareOdd = of(1, 2, 3, 4, 5)
    .pipe(
      filter(n => n % 2 !== 0),
      map(n => n * n)
    );

    squareOdd.subscribe( (x) => {
      console.log('Example72Component: ngOnInit(): x: ', x)
    });

  }

}
