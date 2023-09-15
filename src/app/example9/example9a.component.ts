import { Component, OnInit } from '@angular/core';

interface Person {
  name: string;
}

@Component({
  selector: 'app-example9a',
  template: `
    <div class="box-button grey">
      <app-example9b></app-example9b>
    </div>
  `,
  styles: [
    `
      div.grey {
        background: #ccc;
      }
    `,
  ],
})
export class Example9aComponent {
  person: Person = { name: 'thierry' };
  click() {
    this.person.name = 'Jean';
    console.log(this.person);
  }
}
