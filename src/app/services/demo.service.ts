import { Injectable } from '@angular/core';
import { Demo2Service } from './demo2.service';

@Injectable({
  providedIn: 'root',
})
export class DemoService {
  constructor(public demo2Service: Demo2Service) {
    console.log('DemoService: constructor()');
  }
}
