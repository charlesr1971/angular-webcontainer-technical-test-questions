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
  selector: 'app-example8b',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div>
      <p>
        <strong>PERSON 1</strong>
        <em>My parent component object reference does change:</em><br /><br />
        {{person1.name}}
      </p>
      <p>
        <strong>PERSON 2</strong>
        <em>My parent component object reference does NOT change:</em><br /><br />
        {{person2.name}}
      </p>
    </div>
  `,
  styles: [],
})
export class Example8bComponent {
  @Input('person1') person1: Person;
  @Input('person2') person2: Person;
}
