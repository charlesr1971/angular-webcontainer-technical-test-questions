import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example49a',
  template: `
    <div class="item-header-1">Question</div>
    <img class="question-image" src="./assets/images/questions/qA31.png" />
    <div class="item-header-2">Implementation</div>
    <div class="item-header-2-content">
      <h3>
        <span class="time-text">
          <app-example49b *ngIf='showChild; else zero'></app-example49b>
          <ng-template #zero>
            0
          </ng-template>
        </span>
      </h3>
      <button (click)="update()">Toggle Timer</button>
    </div>
    <div class="item-header-3">Answer</div>
    <div class="item-content item-text">True</div>
    <div class="item-header-4">Notes</div>
    <div class="item-content item-text">
      Please click on the <em>Toggle Timer</em> button, three times, to start/stop/start the timer, and then look in the console, to see if the timer subscription gets
      destroyed. You should see <em>Example49bComponent: ngOnDestroy()</em> and
      nothing after this, which means the subscription stops immediately. In this example, the timer never starts, because it is immediately unsubscribed from, within the ngOnInit() method: <a
        href="https://www.linkedin.com/pulse/how-unsubscribe-from-observables-angular-samuel-y-?utm_source=share&utm_medium=member_ios&utm_campaign=share_via"
        target="_blank"
        >More information</a
      >
    </div>
  `,
  styles: [
  ]
})
export class Example49aComponent implements OnInit {

  public showChild = false;
  constructor() { }
  update(){
    this.showChild = !this.showChild;
  }
  ngOnInit() {
    console.log("Example49aComponent: ngOnInit()");
  }

}
