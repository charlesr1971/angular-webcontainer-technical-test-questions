import { Component, OnInit } from '@angular/core';
import { of } from "rxjs";
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-example36',
  template: `
    <div class="item-header-1">Question</div>
    <img class="question-image" src="./assets/images/questions/qA20.png" />
    <div class="item-header-2">Implementation</div>
    <div class="item-header-2-content">
      <h3>
        <span class="time-text">{{ num }}</span>
      </h3>
    </div>
    <div class="item-header-3">Answer</div>
    <div class="item-content item-text">1 9 25</div>
    <div class="item-header-4">Notes</div>
    <div class="item-content item-text">Please check the console. The <em>filter</em> method returns all numbers that are not completely divisble by two, and then the <em>map</em> method, multiplies them, by themselves</div>
  `,
  styles: [
  ]
})
export class Example36Component implements OnInit {

  squareOdd: any;
  num = '';

  constructor() { }

  ngOnInit(): void {
    this.squareOdd = of(1, 2, 3, 4, 5) 
    .pipe( 
    filter(n => n % 2 !== 0), 
    map(n => n * n) 
    ); 
    this.squareOdd.subscribe((num: any) => {
      console.log('Example36Component: ngOnInit(): squareOdd.subscribe(): num: ', num);
      this.num += ' ' + num;
    });
  }

}
