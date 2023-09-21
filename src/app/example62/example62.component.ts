import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-example62",
  template: `
    <div class="item-header-1">Question</div>
    <img class="question-image" src="./assets/images/questions/qA47.png" />
    <div class="item-header-3">Answer</div>
    <div class="item-content item-text">
      Observables provide the async keyword
    </div>
    <div class="item-header-4">Notes</div>
    <div class="item-content item-text">
      Observables do not provide the <em>async</em> keyword, Angular does. The
      <em>async</em> keyword is an in-built <em>pipe</em>:
      <a href="https://angular.io/api/common/AsyncPipe" target="_blank"
        >More information</a
      >
    </div>
    <div class="item-header-5">Conflict</div>
    <div class="item-content item-text">
      There are two incorrect answers. The second answer is also incorrect.
      Observables are not computed until subscription<br />
      This is only true with cold observables. An example of a hot observable is
      <em>ActivatedRoute.params</em>. There is no <em>subscription</em> with hot
      observables:
      <a href="https://stackoverflow.com/a/48853870/1606349" target="_blank"
        >More information</a
      >
    </div>
  `,
  styles: [],
})
export class Example62Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
