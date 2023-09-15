import { Component, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-example3',
  template: `
    <div [ngClass]="currentClasses"><div class="box-text">Hello</div></div>
    <button (click)="updateClasses()">Button</button>
  `,
  styles: [
    `
    /*div { 
      background-color: orange; 
      width: 100px;
      height: 100px;
      border: 1px solid black;
    }*/
    div.special, button.special {
      background-color: pink;
    }
  `,
  ],
})
export class Example3Component implements OnInit {
  canSave = true;
  isUnchanged = true;
  isSpecial = true;
  currentClasses: any;

  constructor() {}

  updateClasses() {
    console.log('updateClasses');
    this.currentClasses = {
      saveable: this.canSave,
      modified: !this.isUnchanged,
      special: this.isSpecial,
      'box-size-without-pointer': true,
    };
  }

  ngOnInit(): void {
    this.canSave = !this.canSave;
    this.currentClasses = { 'box-size-without-pointer': true };
  }
}
