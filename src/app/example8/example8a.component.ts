import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

interface Person {
  name: string;
}

@Component({
  selector: 'app-example8a',
  template: `
    <div class="box-no-size">
      <app-example8b [person1]="person1" [person2]="person2" #sub></app-example8b><br /><br />
      <button (click)="person1Click()">Change Person 1</button>
      <button (click)="person2Click()">Change Person 2</button>
    </div>
  `,
  styles: [``],
})
export class Example8aComponent {
  person1: Person = { name: 'thierry' };
  person2: Person = { name: 'charlie' };
  @ViewChild('sub') sub: any;

  person1Click() {
    this.person1 = { name: 'alan' }; // this does trigger the child component's ChangeDetectionStrategy.OnPush, because the object reference changes
    console.log('Example8aComponent: this.sub.person1: ', this.sub.person1);
  }

  person2Click() {
    this.person2.name = 'Jean'; // this does NOT trigger the child component's ChangeDetectionStrategy.OnPush, because the object reference has not changed
    console.log('Example8aComponent: this.sub.person2: ', this.sub.person2);
  }
}
