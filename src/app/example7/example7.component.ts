import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  Renderer2,
} from '@angular/core';
import { fromEvent, merge, of, Observable, timer, Subject, NEVER } from 'rxjs';
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
} from 'rxjs/operators';

interface CounterStateModel {
  count: number;
  isTicking: boolean;
}

@Component({
  selector: 'app-example7',
  template: `
    <h3 #counterDisplayHeader></h3>
    <button #startBtn>Start</button>
    <button #stopBtn>Stop Timer</button>
    <button #pauseBtn>Pause</button>
  `,
})
export class Example7Component implements OnInit {
  @ViewChild('stopBtn', { static: true }) stopBtn!: ElementRef;
  @ViewChild('startBtn', { static: true }) startBtn!: ElementRef;
  @ViewChild('pauseBtn', { static: true }) pauseBtn!: ElementRef;
  @ViewChild('counterDisplayHeader', { static: true })
  counterDisplayHeader!: ElementRef;

  startClick$: any;
  stopClick$: any;
  pauseBtn$: any;

  startValue = 1000;

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

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    const that = this;

    setTimeout(() => {
      this.startClick$ = fromEvent(this.startBtn.nativeElement, 'click');
      this.stopClick$ = fromEvent(this.stopBtn.nativeElement, 'click');
      this.pauseBtn$ = fromEvent(this.pauseBtn.nativeElement, 'click');

      this.counterCommands$ = merge(
        this.startClick$.pipe(mapTo({ isTicking: true })),
        this.pauseBtn$.pipe(mapTo({ isTicking: false })),
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
          this.renderer.setProperty(
            this.counterDisplayHeader.nativeElement,
            'innerHTML',
            state.count.toString()
          );
        });
    });
  }
}
