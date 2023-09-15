import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

interface Person {
  name: string;
}

@Component({
  selector: 'app-example9b',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="box-text" (click)="click()">
      {{person.name}}
    </div>
  `,
  styles: [
    ``,
  ],
})
export class Example9bComponent {
  @Input()
  person: Person = { name: 'jhon' };

  click() {
    this.person.name = 'mich';
  }
}
