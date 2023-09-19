import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-example17a",
  template: `
    <div class="item-header-1">Question</div>
    <img class="question-image" src="./assets/images/questions/qA2.png" />
    <div class="item-header-3">Answer</div>
    <div class="item-content item-text">nav CSS class [Admin Section]</div>
    <div class="item-header-4">Notes</div>
    <div class="item-content item-text">
      The default route is to the <em>users</em> section. When the app is
      initially loaded, the <em>users</em> section will be displayed. This will
      initially give the <em>users</em> link, both <em>nav</em> and
      <em>active</em> CSS classes, and the <em>admin</em> link, just the
      <em>nav</em> CSS class
    </div>
  `,
  styles: [],
})
export class Example17aComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
