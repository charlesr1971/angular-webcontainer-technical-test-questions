import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-example55b",
  template: ` <div>I am DemoComponent2</div> `,
  styles: [],
})
export class Example55bComponent implements OnInit {
  @Input() name: string;

  constructor() {}

  ngOnInit(): void {}
}
