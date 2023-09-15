import { Component, OnInit } from '@angular/core';
import { Demo2Service } from '../services/demo2.service';

@Component({
  providers: [Demo2Service],
  template: ``,
})
export class Demo3Component {
  constructor(private demo2Service: Demo2Service) {
    console.log('Demo3Component: constructor()');
    console.log(
      'Demo3Component: this.demo2Service.name: ',
      this.demo2Service.name
    );
  }
}
