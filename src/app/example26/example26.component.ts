import { Component, Input, OnChanges, AfterViewInit } from "@angular/core";

@Component({
  selector: "app-example26",
  template: `
    <div class="item-header-1">Question</div>
    <img class="question-image" src="./assets/images/questions/qA12.png" />
    <div class="item-header-3">Answer</div>
    <div class="item-content item-text">
      The constructor and ngAfterViewlnit
    </div>
    <div class="item-header-4">Notes</div>
    <div class="item-content item-text">
      Look for <em>Example26Component</em> in the console:
      <a href="https://angular.io/guide/lifecycle-hooks" target="_blank"
        >More Information</a
      >
    </div>
  `,
  styles: [],
})
export class Example26Component implements OnChanges, AfterViewInit {
  @Input() name: string;

  constructor() {
    console.log("Example26Component: constructor(): ", this.name);
  }

  ngOnChanges(): void {
    console.log("Example26Component: ngOnChanges(): ", this.name);
  }

  ngAfterViewInit(): void {
    console.log("Example26Component: ngAfterViewinit(): ", this.name);
  }
}
