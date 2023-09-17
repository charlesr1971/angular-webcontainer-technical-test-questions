import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-example19',
  template: `
    <div class="item-header-1">Question</div>
    <img class="question-image" src="./assets/images/questions/qA5.png" />
    <div class="item-header-3">Answer</div>
    <div class="item-content item-text">1 4 9</div>
    <div class="item-header-4">Notes</div>
    <div class="item-content item-text">Check the console</div>
  `,
  styles: [
  ]
})
export class Example19Component implements OnInit {

  nums = of(1, 2, 3); 
  squareValues = map( (val: number) => val * val); 
  squaredNums = this.squareValues(this.nums); 
  

  ngOnInit(): void {
    this.squaredNums.subscribe( (x: any) => {
      console.log('Example19Component: x: ', x);
    });
  }

}
