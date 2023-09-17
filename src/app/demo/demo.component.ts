import { Component, OnInit } from "@angular/core";
import { Demo2Service } from "../services/demo2.service";

@Component({
  providers: [Demo2Service],
  selector: "app-demo",
  template: `
    <!--<div class="item-header-1">Question</div>
    <img class="question-image" src="./assets/images/questions/q17.png" />-->
    <div class="item-header-3">Answer</div>
    <div class="item-content item-text">demo2</div>
    <div class="item-header-4">Notes</div>
    <div class="item-content item-text">
      Please check the console.<br />
      Although services are normally injected before the constructor body is
      executed, the service is instantiated again for the DemoComponent. So the
      AppComponent is executed first, and the Demo2Service is re-instantiated
      for the DemoComponent, by using the component property
      <em>providers: [Demo2Service]</em>
    </div>
  `,
})
export class DemoComponent {
  constructor(private demo2Service: Demo2Service) {
    console.log("DemoComponent: constructor()");
    console.log(
      "DemoComponent: this.demo2Service.name: ",
      this.demo2Service.name,
    );
  }
}
