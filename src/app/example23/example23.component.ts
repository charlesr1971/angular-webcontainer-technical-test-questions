import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-example23",
  template: `
    <div class="item-header-1">Question</div>
    <img class="question-image" src="./assets/images/questions/qA9.png" />
    <div class="item-header-2">Implementation</div>
    <div class="item-header-3">Answer</div>
    <div class="item-content item-text">FormsModule</div>
    <div class="item-header-4">Notes</div>
    <div class="item-content item-text">
      <em>ngModel</em> directive belongs to <em>FormsModule</em>, that's why you
      should import the <em>FormsModule</em> from
      <em>@angular/forms</em> module, inside <em>imports</em> metadata option of
      <em>AppModule</em>
    </div>
  `,
  styles: [],
})
export class Example23Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
