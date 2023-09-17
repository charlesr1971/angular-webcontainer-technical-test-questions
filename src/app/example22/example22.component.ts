import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-example22",
  template: `
    <div class="item-header-1">Question</div>
    <img class="question-image" src="./assets/images/questions/qA8.png" />
    <div class="item-header-2">Implementation</div>
    <div class="item-header-3">Answer</div>
    <div class="item-content item-text">NgIf</div>
    <div class="item-header-4">Notes</div>
    <div class="item-content item-text">
      Structural directives are responsible for HTML layout. They shape or
      reshape the DOM's structure, typically by adding, removing, and
      manipulating the host elements to which they are attached.<br />
      This section is an introduction to the common built-in structural
      directives:
      <ol>
        <li>
          NgIf—conditionally creates or destroys subviews from the template
        </li>
        <li>NgFor—repeat a node for each item in a list</li>
        <li>
          NgSwitch—a set of directives that switch among alternative views
        </li>
      </ol>
    </div>
  `,
  styles: [],
})
export class Example22Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
