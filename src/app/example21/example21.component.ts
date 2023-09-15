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
  Subject,
  NEVER,
  interval,
  EMPTY,
} from 'rxjs';
import {
  switchMap,
  scan,
  mapTo,
  startWith,
  tap,
  shareReplay,
  distinctUntilChanged,
  map,
  withLatestFrom,
  takeWhile,
  takeUntil,
  repeat,
} from 'rxjs/operators';
import { DemoService } from '../services/demo.service';

interface CounterStateModel {
  count: number;
  isTicking: boolean;
}

@Component({
  selector: 'app-example21',
  template: `
    <div class="item-header-1">Question</div>
    <img class="question-image" src="./assets/images/questions/qA7.png" />
    <div class="item-header-2">Implementation</div>
    <div class="item-header-2-content">
      <button #startBtn>Start</button>
      <button #stopBtn>Stop Timer</button>
    </div>
    <div class="item-header-3">Answer</div>
    <div class="item-content item-text">True</div>
    <div class="item-header-4">Notes</div>
    <div class="item-content item-text"></div>
  `,
  styles: [],
})
export class Example21Component implements OnInit, OnDestroy {
  @ViewChild('startBtn', { static: true }) startBtn!: ElementRef;
  @ViewChild('stopBtn', { static: true }) stopBtn!: ElementRef;

  timer$: any;

  startClick$: any;
  stopClick$: any;

  startValue = 0;

  initialCounterState: CounterStateModel = {
    count: this.startValue,
    isTicking: false,
  };

  patchCounterState = new Subject<Partial<CounterStateModel>>();
  counterCommands$: any;
  counterState$: Observable<CounterStateModel>;
  isTicking$: any;
  commandFromTick$: any;
  commandFromReset$: any;

  constructor(private demoService: DemoService) {}

  ngOnInit(): void {
    /* this.timer$ = this.demoService.timer$.subscribe((time: number) => {
      console.log('Example21Component: ngOnInit(): time', time);
    }); */

    setTimeout(() => {
      this.startClick$ = fromEvent(this.startBtn.nativeElement, 'click');
      this.stopClick$ = fromEvent(this.stopBtn.nativeElement, 'click');

      merge(
        this.startClick$.pipe(mapTo(true)),
        this.stopClick$.pipe(mapTo(false))
      )
        .pipe(
          switchMap((val) => (val ? interval(10) : EMPTY)),
          mapTo(1),
          scan((acc: number, curr: number) => acc + curr, this.startValue),
          takeWhile((val) => val >= 0),
          startWith(this.startValue),
          takeUntil(this.stopClick$),
          repeat()
        )
        .subscribe((val) => {
          // counterDisplayHeader.innerHTML = val.toString();
          console.log('Example21Component: ngOnInit(): time', val.toString());
        });

      /* this.counterCommands$ = merge(
        this.startClick$.pipe(mapTo({ isTicking: true })),
        this.stopClick$.pipe(mapTo({ ...this.initialCounterState })),
        this.patchCounterState.asObservable()
      );

      this.counterState$ = this.counterCommands$.pipe(
        startWith(this.initialCounterState),
        scan(
          (counterState: CounterStateModel, command): CounterStateModel => ({
            ...counterState,
            ...command,
          })
        ),
        shareReplay(1)
      );

      this.isTicking$ = this.counterState$.pipe(
        map((state) => state.isTicking),
        distinctUntilChanged()
      );

      this.commandFromTick$ = this.isTicking$.pipe(
        switchMap((isTicking) => (isTicking ? timer(0, 10) : NEVER)),
        withLatestFrom(this.counterState$, (_, counterState) => ({
          count: counterState.count,
        })),
        tap(({ count }) => {
          if (count) {
            this.patchCounterState.next({ count: count - 1 });
          } else {
            this.patchCounterState.next({ ...this.initialCounterState });
          }
        })
      );

      this.commandFromReset$ = this.stopClick$.pipe(
        mapTo({ ...this.initialCounterState })
      );

      merge(this.commandFromTick$, this.commandFromReset$)
        .pipe(startWith(this.initialCounterState))
        .subscribe((state: any) => {
          console.log('Example21Component: ngOnInit(): time', state.count.toString());
        }); */
    });
  }

  ngOnDestroy(): void {
    console.log('Example21Component: ngOnDestroy(): destroyed');
  }
}
