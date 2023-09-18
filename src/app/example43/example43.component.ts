import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { debounceTime, distinctUntilChanged, switchMap } from "rxjs/operators";

@Component({
  selector: "app-example43",
  template: `
    <div class="item-header-1">Question</div>
    <img class="question-image" src="./assets/images/questions/qA28.png" />
    <div class="item-header-2">Implementation</div>
    <div class="item-header-2-content">
      <div class="webflow-style-input">
        <input type="text" [formControl]="favoriteColor" placeholder="input" />
      </div>
    </div>
    <div class="item-header-3">Answer</div>
    <div class="item-content item-text">
      FormControl
    </div>
    <div class="item-header-4">Notes</div>
    <div class="item-content item-text">
      Please look at the console, to see the monitored value changes of the <em>FormControl</em>
    </div>
  `,
  styles: [],
})
export class Example43Component implements OnInit {
  favoriteColor = new FormControl("");

  constructor() {}

  ngOnInit(): void {
    this.favoriteColor.valueChanges
      .pipe(
        debounceTime(400),
        distinctUntilChanged()
      )
      .subscribe(val => {
        console.log('Example43Component: ngOnInit(): val: ', val);
      });
  }
}
