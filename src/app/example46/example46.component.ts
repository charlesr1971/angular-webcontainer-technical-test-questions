import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-example46",
  template: `
    <div class="item-header-1">Question</div>
    <img class="question-image" src="./assets/images/questions/qA34.png" />
    <div class="item-header-3">Answer</div>
    <div class="item-content item-text">Emulated</div>
    <div class="item-header-4">Notes</div>
    <div class="item-content item-text">
      Emulated view encapsulation (the default) emulates the behavior of shadow
      DOM by preprocessing (and renaming) the CSS code to effectively scope the
      CSS to the component's view.<br />
      <a
        href="https://baldur.gitbook.io/angular/angular/angular-components-overview/view-encapsulation"
        target="_blank"
        >More information</a
      >
    </div>
  `,
  styles: [],
})
export class Example46Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
