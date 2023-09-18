import { Component, OnInit, Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: "root" })
export class Demo1Service {
  counter = new BehaviorSubject<string>("service");
}

@Component({
  selector: "app-example35",
  template: `
    <div class="item-header-1">Question</div>
    <img class="question-image" src="./assets/images/questions/qA19.png" />
    <div class="item-header-3">Answer</div>
    <div class="item-content item-text">service</div>
    <div class="item-header-4">Notes</div>
    <div class="item-content item-text">Please check the console.</div>
  `,
  styles: [],
})
export class Example35Component implements OnInit {
  constructor(private demoService: Demo1Service) {}

  ngOnInit(): void {
    this.demoService.counter.asObservable().subscribe((counter: string) => {
      console.log(
        "Example35Component: ngOnInit(): subscribe(): counter: ",
        counter,
      );
    });
    this.demoService.counter.next("component");
  }
}
