import { Component, OnInit, ViewChild } from "@angular/core";
import { Example57bComponent } from "./example57b.component";

@Component({
  selector: "app-example57a",
  template: `
    <div class="item-header-1">Question</div>
    <img class="question-image" src="./assets/images/questions/qA42.png" />
    <div class="item-header-2">Implementation</div>
    <div class="item-header-2-content">
      <app-example57b backgroundColor="red">{{ "blue" }}</app-example57b>
    </div>
    <div class="item-header-3">Answer</div>
    <div class="item-content item-text">Red</div>
    <div class="item-header-4">Notes</div>
    <div class="item-content item-text">
      In order to get <em>@ViewChild</em> property initiated, you need to call
      it, inside the <em>ngAfterViewInit</em> lifecycle hook. The answer is
      <em>red</em>, because the property <em>backgroundColor</em>, is just a
      string. Its value does not equate to the variable <em>red</em>, because
      the property is not surrounded by square brackets:
      <a href="https://stackoverflow.com/a/56958379/1606349" target="_blank"
        >More information</a
      >
    </div>
  `,
  styles: [],
})
export class Example57aComponent implements OnInit {
  @ViewChild(Example57bComponent) child: Example57bComponent;

  red = "yellow";

  ngOnInit(): void {
    this.red = "black";
  }

  ngAfterViewInit(): void {
    console.log(
      "Example57aComponent: ngAfterViewInit(): this.child.backgroundColor: ",
      this.child.backgroundColor,
    );
  }
}
