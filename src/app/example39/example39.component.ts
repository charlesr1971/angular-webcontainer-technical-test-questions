import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-example39",
  template: `
    <div class="item-header-1">Question</div>
    <img class="question-image" src="./assets/images/questions/qA25.png" />
    <div class="item-header-3">Answer</div>
    <div class="item-content item-text">
      <pre class="code-txt">
<code [innerHTML]="code"></code>
</pre>
    </div>
    <div class="item-header-4">Notes</div>
    <div class="item-content item-text">
      <a
        href="https://stackoverflow.com/questions/50848357/what-is-the-purpose-of-providedin-with-the-injectable-decorator-when-generating"
        target="_blank"
        >More information</a
      >
    </div>
  `,
  styles: [],
})
export class Example39Component implements OnInit {
  code = `@Injectable( { providedIn: 'root' }) // answer2 `;

  constructor() {}

  ngOnInit(): void {}
}
