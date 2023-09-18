import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-example38",
  template: `
    <div class="item-header-1">Question</div>
    <img class="question-image" src="./assets/images/questions/qA23.png" />
    <div class="item-header-3">Answer</div>
    <div class="item-content item-text">BrowserModule || CommonModule</div>
    <div class="item-header-5">Conflict</div>
    <div class="item-content item-text">The question appears to indicate that there is only one correct answer, when, in fact, there are two possible correct answers. In the link below it says that <em>BrowserModule</em> imports <em>CommonModule</em>, which contributes many common directives such as <em>ngIf</em> and <em>ngFor</em>. Additionally, <em>BrowserModule</em> re-exports <em>CommonModule</em>, making all of its directives available to any module that imports <em>BrowserModule</em>.<br /><a href="https://angular.io/guide/frequent-ngmodules" target="_blank">More information</a></div>
  `,
  styles: [],
})
export class Example38Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
