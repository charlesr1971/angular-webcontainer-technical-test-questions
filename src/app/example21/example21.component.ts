import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  Renderer2,
  OnDestroy,
} from '@angular/core';
import {
  fromEvent,
  merge,
  of,
  Observable,
  timer,
  EMPTY,
  concat,
  defer,
} from 'rxjs';
import { switchMap, mapTo, map, catchError } from 'rxjs/operators';
import { DemoService } from '../services/demo.service';

type StopwatchAction = 'START' | 'STOP' | 'RESET' | 'END';

@Component({
  selector: 'app-example21',
  template: `
    <div class="item-header-1">Question</div>
    <img class="question-image" src="./assets/images/questions/qA7.png" />
    <div class="item-header-2">Implementation</div>
    <div class="item-header-2-content">
      <h3>
        <span class="time-text" #hoursField>{{ hours | number:'2.0' }}</span>
        <span class="time-separator-text">:</span>
        <span class="time-text" #minutesField>{{ minutes | number:'2.0' }}</span>
        <span class="time-separator-text">:</span>
        <span class="time-text" #secondsField>{{ seconds | number:'2.0' }}</span>
      </h3>
      <button #startBtn>Start</button>
      <button #stopBtn>Stop</button>
      <button #resetBtn>Reset</button>
    </div>
    <div class="item-header-3">Answer</div>
    <div class="item-content item-text">True</div>
    <div class="item-header-4">Notes</div>
    <div class="item-content item-text">Please look in the console, to see if the timer gets destroyed:  <a href="https://www.linkedin.com/pulse/how-unsubscribe-from-observables-angular-samuel-y-?utm_source=share&utm_medium=member_ios&utm_campaign=share_via" target="_blank">More information</a></div>
  `,
  styles: [],
})
export class Example21Component implements OnInit, OnDestroy {
  @ViewChild('startBtn', { static: true }) startBtn!: ElementRef;
  @ViewChild('stopBtn', { static: true }) stopBtn!: ElementRef;
  @ViewChild('resetBtn', { static: true }) resetBtn!: ElementRef;

  @ViewChild('hoursField', { static: true })
  hoursField!: ElementRef;
  @ViewChild('minutesField', { static: true })
  minutesField!: ElementRef;
  @ViewChild('secondsField', { static: true })
  secondsField!: ElementRef;

  timer$: Observable<number>;

  startValue = 0;

  hours: any = '00';
  minutes: any = '00';
  seconds: any = '00';

  constructor(
    private demoService: DemoService,
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    const start$: Observable<StopwatchAction> = fromEvent(
      this.startBtn.nativeElement,
      'click'
    ).pipe(mapTo('START'));
    const stop$: Observable<StopwatchAction> = fromEvent(
      this.stopBtn.nativeElement,
      'click'
    ).pipe(mapTo('STOP'));
    const reset$: Observable<StopwatchAction> = fromEvent(
      this.resetBtn.nativeElement,
      'click'
    ).pipe(mapTo('RESET'));

    this.createTimer(merge(start$, stop$, reset$)).subscribe((seconds) => {
      console.log('Example21Component: ngOnInit(): timer subscribe');
      const secondsFieldVal = seconds % 60;
      const minutesFieldVal = Math.floor(seconds / 60) % 60;
      const hoursFieldVal = Math.floor(seconds / 3600);
      this.hours = hoursFieldVal;
      this.minutes = minutesFieldVal;
      this.seconds = secondsFieldVal;
    });
  }

  createTimer(
    control$: Observable<StopwatchAction>,
    interval = 1000
  ): Observable<number> {
    return defer(() => {
      let toggle: boolean = false;
      let count: number = 0;
      this.timer$ = timer(0, interval).pipe(map((x) => count++));
      const end$ = of('END');
      return concat(control$, end$).pipe(
        catchError((_) => end$),
        switchMap((control) => {
          if (control === 'START' && !toggle) {
            toggle = true;
            return this.timer$;
          } else if (control === 'STOP' && toggle) {
            toggle = false;
            return EMPTY;
          } else if (control === 'RESET') {
            count = 0;
            if (toggle) {
              return this.timer$;
            }
            return of(count);
          }
          return EMPTY;
        })
      );
    });
  }

  ngOnDestroy(): void {
    console.log('Example21Component: ngOnDestroy(): destroyed');
  }
}
