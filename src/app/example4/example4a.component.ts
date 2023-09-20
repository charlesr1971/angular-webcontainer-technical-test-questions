import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-example4a",
  template: `
    <div class="item-header-1">Question</div>
    <img class="question-image" src="./assets/images/questions/q14.png" />
    <div class="item-header-2">Implementation</div>
    <div class="item-header-2-content">
      <app-example4b (selectedName)="nameSelected($event)"></app-example4b>
    </div>
    <div class="item-header-3">Answer</div>
    <div class="item-content item-text">Demo2</div>
    <div class="item-header-4">Notes</div>
    <div class="item-content item-text">
      Check & search for <em>Example4aComponent</em> in the console, for
      answer.<br />The <em>EventEmitter</em>, in the child component, is
      responsible for pushing the data up to the parent component, where it is
      consumed by the <em>select</em> method. The <em>EventEmitter</em> only
      emits data, when the click event is triggered. When the
      <em>name</em> variable is defined, during the parent component's
      initialisation, it is not consumed by the <em>select</em> method. This is
      why nothing is, initially, displayed in the console.
    </div>
  `,
})
export class Example4aComponent {
  name = "Demo";

  nameSelected(name: string): void {
    this.name = name;
    console.log("Example4aComponent: nameSelected(): name: ", name);
  }
}
