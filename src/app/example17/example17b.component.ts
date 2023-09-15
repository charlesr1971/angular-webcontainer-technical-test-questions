import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example17b',
  template: `
    <div class="item-header-1">Question</div>
    <img class="question-image" src="./assets/images/questions/qA2.png" />
    <div class="item-header-3">Answer</div>
    <div class="item-content item-text">AdminComponent</div>
    <div class="item-header-4">Notes</div>
    <div class="item-content item-text">I am the Users Section</div>
    <div class="item-header-5">Conflict</div>
    <div class="item-content item-text">The question asks 'When the app is initially loaded, what class will be assigned to the admin anchor?'. It is possible that the question is meant to say say 'When the app is initially loaded, what section will be displayed?'</div>
  `,
  styles: [
  ]
})
export class Example17bComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
