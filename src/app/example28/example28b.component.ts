import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  timer,
  Subscription,
} from 'rxjs';

@Component({
  selector: 'app-example28b',
  template: `
    {{ time }}
  `,
  styles: [
  ]
})
export class Example28bComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  timer$ = timer(0,1000);
  time = 0;
  
  constructor() { }

  ngOnInit(): void {
    console.log("Example28bComponent: ngOnInit()");
    this.subscription = this.timer$.subscribe( (time: any) => {
      console.log("Example28bComponent: ngOnInit(): timer$ subscribe(): time", time);
      this.time = time;
    });
  }
  
  ngOnDestroy(): void {
    console.log("Example28bComponent: ngOnDestroy()");
    this.subscription.unsubscribe();
  }

}
