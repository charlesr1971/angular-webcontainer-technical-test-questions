import { Component, OnInit, Injectable } from '@angular/core';

@Component({
  selector: 'app-demo2',
  template: `<app-cancel></app-cancel>`,
  styles: [`app-cancel button.cancel { background-color: red; }`],
})
export class Demo2Component {}
@Component({
  selector: 'app-cancel',
  template: `<button class="cancel">Cancel</button>`,
  styles: [`button { background-color: yellow; }`],
})
export class CancelComponent {}
