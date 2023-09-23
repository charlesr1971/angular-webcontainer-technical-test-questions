import { Component, Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class Demo5Service {
	behaviourSubject = new BehaviorSubject<string>('behaviour');
	subject = new Subject<string>();
}

@Component({
  selector: 'app-example66',
  template: `
    <div class="item-header-1">Question</div>
    <img class="question-image" src="./assets/images/questions/qA53.png" />
    <div class="item-header-3">Answer</div>
    <div class="item-content item-text">behaviour</div>
    <div class="item-header-4">Notes</div>
    <div class="item-content item-text">
      Please search for <em>Example66Component</em>, in the console, for the answer.
    </div>
  `,
  styles: [
  ]
})
export class Example66Component implements OnInit {

  constructor(private demoService: Demo5Service) { }

  ngOnInit(): void {
    this.demoService.behaviourSubject.asObservable().subscribe((data: string) => {
			console.log('Example66Component: ngOnInit(): behaviourSubject.asObservable().subscribe(): ', data);
		});

		this.demoService.subject.asObservable().subscribe((data: string) => {
			console.log('Example66Component: ngOnInit(): subject.asObservable().subscribe(): ', data);
		});

		this.demoService.subject.next('subject');
  }

}
