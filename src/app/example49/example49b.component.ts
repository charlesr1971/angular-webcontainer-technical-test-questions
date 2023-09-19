import { Component, OnInit, Injectable } from "@angular/core";
import { BehaviorSubject, Subscription, timer } from "rxjs";

@Injectable({ providedIn: "root" })
export class Demo3Service {
  counter = new BehaviorSubject<string>("service");
  timer$ = timer(0, 1000);
}

@Component({
  selector: "app-example49b",
  template: `
    {{ time }}
  `,
  styles: [],
})
export class Example49bComponent implements OnInit {
  subscription: Subscription;
  time = 0;

  constructor(private demoService: Demo3Service) {
    console.log("Example49bComponent: constructor()");
  }

  ngOnInit(): void {
    console.log("Example49bComponent: ngOnInit()");
    this.subscription = this.demoService.timer$.subscribe((time: number) => {
      console.log(
        "Example49bComponent: ngOnInit(): timer$.subscribe(): time: ",
        time,
      );
      this.time = time;
    });

    this.subscription.unsubscribe();
  }

  ngOnDestroy(): void {
    console.log("Example49bComponent: ngOnDestroy(): destroyed");
  }
}
