import { Injectable } from '@angular/core';
import { Demo2Service } from './demo2.service';
import { timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DemoService {
  // timer$ = timer(0, 1000);

  constructor(public demo2Service: Demo2Service) {
    console.log('DemoService: constructor()');
  }
}
