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
  selector: 'app-example64b',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div>
      <p>
        <strong>PERSON 1</strong>
        <em>My parent component object reference does change:</em><br /><br />
        {{ person1.name }}
      </p>
      <p>
        <strong>PERSON 2</strong>
        <em>My parent component object reference does NOT change:</em><br /><br />
        {{ person2.name }}
      </p>
    </div>
  `,
})
export class Example64bComponent {
  @Input('person1') person1: Person;
  @Input('person2') person2: Person;
}

