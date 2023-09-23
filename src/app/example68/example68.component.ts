import { Component, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-example68',
  template: `
    <div class="item-header-1">Question</div>
    <img class="question-image" src="./assets/images/questions/qA55.png" />
    <div class="item-header-2">Implementation</div>
    <div class="item-header-2-content">
      {{ buttonClicked }}<br />
      <button (click)="changeValue()">Make Change</button>
    </div>
    <div class="item-header-3">Answer</div>
    <div class="item-content item-text">ngOnChanges</div>
    <div class="item-header-4">Notes</div>
    <div class="item-content item-text">
      Please search for <em>Example68Component</em>, in the console, for the answer: <a href="https://v2.angular.io/docs/ts/latest/guide/lifecycle-hooks.html" target="_blank"
        >More information</a
      >
    </div>
    <div class="item-header-5">Conflict</div>
    <div class="item-content item-text">
      <em>ngOnChanges</em> is the first lifecycle hook called when a change occurs.<br />
      If a change does not occur, then <em>ngOnInit</em> is the first lifecycle hook.<br />
      This makes this question, highly ambiguous.
    </div>
  `,
  styles: [
  ]
})
export class Example68Component implements OnInit {

  buttonClicked = false;

  constructor() { }

  ngOnInit(): void {
    console.log('Example68Component: ngOnInit()');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Example68Component: ngOnChanges(): changes: ', changes);
  }

  ngAfterViewInit(): void {
    console.log('Example68Component: ngAfterViewInit()');
  }

  ngDoCheck(): void {
    console.log('Example68Component: ngDoCheck()');
  }

  changeValue(): void {
    this.buttonClicked = true;
    console.log('Example68Component: changeValue(): this.buttonClicked: ', this.buttonClicked);
  }

}
