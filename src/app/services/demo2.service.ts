import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Demo2Service {

  name = 'demo2';

  constructor() {
    console.log('Demo2Service: constructor()');
  }
}
