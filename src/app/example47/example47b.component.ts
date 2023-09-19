import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-example47b",
  template: `
    <div class="item-header-1">Question</div>
    <img class="question-image" src="./assets/images/questions/qA33.png" />
    <div class="item-header-3">Answer</div>
    <div class="item-content item-text">False [Users 1 Details Section]</div>
    <div class="item-header-4">Notes</div>
    <div class="item-content item-text">
      RouterLinkActive does chunk the current route and try to match it's parts
      with the RouterLinks you've provided. With that in mind, route / will be
      matched anywhere as it's the very parent for all the other routes (like
      /about, /contact, etc. as it consist of / + route-path). To simplify, it's
      not a bug, it's sometimes a needed functionality in your application to
      match multiple routes. To prevent that, you can specify the
      routerLinkActiveOptions to match exactly the route you're on. That means
      it's not going to match parent routes but will only try to find the
      routerLink provided for this exact route.<br />
      Set <span [innerHTML]="code"></span> to get an exact match for a link.<br />
      <a
        href="https://stackoverflow.com/questions/55587975/routerlinkactive-route-for-child-and-parent"
        target="_blank"
        >More information</a
      >
    </div>
  `,
  styles: [],
})
export class Example47bComponent implements OnInit {
  code = `[routerLinkActiveOptions]="{exact: true}"`;

  constructor() {}

  ngOnInit(): void {}
}
