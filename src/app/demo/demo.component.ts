import { Component, OnInit } from '@angular/core';
import { Demo2Service } from '../services/demo2.service';

@Component({
  providers: [Demo2Service],
  selector: 'app-demo',
  template: ``,
})
export class DemoComponent {
  constructor(private demo2Service: Demo2Service) {
    console.log('DemoComponent: constructor()');
    console.log(
      'DemoComponent: this.demo2Service.name: ',
      this.demo2Service.name
    );
  }
}
