import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { combineLatest, timer } from "rxjs";

@Component({
  selector: "app-example61",
  template: `
    <div class="item-header-1">Question</div>
    <img class="question-image" src="./assets/images/questions/qA46.png" />
    <div class="item-header-2">Implementation</div>
    <div class="item-header-2-content">
      <button #stopBtn (click)="stopTimer()">Stop</button>
      <button #startBtn (click)="startTimer()">Start</button>
    </div>
    <div class="item-header-3">Answer</div>
    <div class="item-content item-text">0 1</div>
    <div class="item-header-4">Notes</div>
    <div class="item-content item-text">
      Please search for <em>Example61Component</em> in the console, to see the
      values emitted by both timers.
    </div>
  `,
  styles: [],
})
export class Example61Component implements OnInit {

  @ViewChild("stopBtn", { static: true }) stopBtn!: ElementRef;
  @ViewChild("startBtn", { static: true }) startBtn!: ElementRef;

  sub: any;
  timerOne$ = timer(1000, 5000);
  timerTwo$ = timer(2000, 1000);

  constructor() {}

  ngOnInit(): void {
    this.startTimer();
  }

  startTimer() {
    this.sub = combineLatest(this.timerOne$, this.timerTwo$).subscribe(
      ([timerValOne, timerValTwo]) => {
        console.log(
          "Example61Component: ngOnInit(): timerValOne: ",
          timerValOne,
          " timerValTwo: ",
          timerValTwo,
        );
      },
    );
  }

  stopTimer() {
    this.sub.unsubscribe();
  }
}
