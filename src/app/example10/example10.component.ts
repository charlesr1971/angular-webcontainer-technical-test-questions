import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-example10",
  template: `
    <div class="item-header-1">Question</div>
    <img class="question-image" src="./assets/images/questions/q22.png" />
    <div class="item-header-2">Implementation</div>
    <div class="item-header-2-content">
      <button #Answer1 (click)="log()">Text 1</button>
      <!-- <button #Answer2 (click)="log(Math.max(1, 2))">Text 2</button> -->
      <!-- <button #Answer3 (click)="log('1', '2')">Text 3</button> -->
      <button #Answer4 (click)="log(Answer4)">Text 4</button>
    </div>
    <div class="item-header-3">Answer</div>
    <div class="item-content item-text">Answer2 | Answer3</div>
    <div class="item-header-4">Notes</div>
    <div class="item-content item-text">
      Check & search for <em>Example10Component</em> in the console, for answer.
    </div>
    <div class="item-header-5">Conflict</div>
    <div class="item-content item-text">
      The question appears to indicate that there is only one incorrect answer,
      when, in fact, there are two incorrect answers.
    </div>
  `,
  styles: [],
})
export class Example10Component {
  math = Math;

  log(answer?: HTMLElement): void {
    console.log("Example10Component: log(): arguments: ", arguments);
  }
}
