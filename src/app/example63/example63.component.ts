import { Component, OnInit } from "@angular/core";
import { from } from "rxjs";
import { distinctUntilChanged } from "rxjs/operators";

@Component({
  selector: "app-example63",
  template: `
    <div class="item-header-1">Question</div>
    <img class="question-image" src="./assets/images/questions/qA48.png" />
    <div class="item-header-3">Answer</div>
    <div class="item-content item-text">John Tom Sue John</div>
    <div class="item-header-4">Notes</div>
    <div class="item-content item-text">
      <em>distinctUntilChanged((first, second))</em> represents
      <em>distinctUntilChanged((prev, next))</em>:
      <a
        href="https://www.learnrxjs.io/learn-rxjs/operators/filtering/distinctuntilchanged"
        target="_blank"
        >More information</a
      >
    </div>
  `,
  styles: [],
})
export class Example63Component implements OnInit {
  users$ = from([
    { name: "John" },
    { name: "Tom" },
    { name: "Sue" },
    { name: "Sue" },
    { name: "John" },
  ]);

  constructor() {}

  ngOnInit(): void {
    this.users$
      .pipe(distinctUntilChanged((first, second) => first.name === second.name))
      .subscribe((user) => {
        console.log("Example63Component: ngOnInit(): user.name: ", user.name);
      });
  }
}
