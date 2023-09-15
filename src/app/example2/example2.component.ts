import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-example2',
  template: `
    <div class="item-header-1">Question</div>
    <img class="question-image" src="./assets/images/questions/q9.png" />
    <div class="item-header-2">Implementation</div>
    <div class="item-header-2-content">
      <form [formGroup]="profileForm">
        <div class="webflow-style-input">
          <input type="text" placeholder="What's your forename?" formControlName="firstName" />
          <button type="submit"><i class="icon ion-android-arrow-forward"></i></button>
        </div>
        <div class="webflow-style-input">
          <input type="text" placeholder="What's your surname?" formControlName="lastName" />
          <button type="submit"><i class="icon ion-android-arrow-forward"></i></button>
        </div>
      </form>
    </div>
    <div class="item-header-4">Notes</div>
    <div class="item-content item-text">No error is thrown</div>
  `,
  styles: [],
})
export class Example2Component {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });
}
