import { Component, OnInit, ViewChild } from "@angular/core";
import { Example55bComponent } from "./example55b.component";

@Component({
  selector: "app-example55a",
  template: `
    <div class="item-header-1">Question</div>
    <img class="question-image" src="./assets/images/questions/qA40.png" />
    <div class="item-header-2">Implementation</div>
    <div class="item-header-2-content">
      <app-example55b name="Demo"></app-example55b>
    </div>
    <div class="item-header-3">Answer</div>
    <div class="item-content item-text">Nothing, since the child is not yet defined by the time the console.log calls are executed</div>
    <div class="item-header-4">Notes</div>
    <div class="item-content item-text">
      In order to get <em>@ViewChild</em> property initiated, you need to call
      it, inside the <em>ngAfterViewInit</em> lifecycle hook:
      <a href="https://stackoverflow.com/a/56958379/1606349" target="_blank"
        >More information</a
      >
    </div>
  `,
  styles: [],
})
export class Example55aComponent implements OnInit {
  @ViewChild(Example55bComponent) child: Example55bComponent;

  ngOnInit(): void {
    console.log(
      "Example55aComponent: ngOnInit(): this.child.name: ",
      this.child.name,
    );
  }

  ngAfterViewInit(): void {
    this.child.name = "Demo2";
    console.log(
      "Example55aComponent: ngAfterViewInit(): this.child.name: ",
      this.child.name,
    );
  }
}
