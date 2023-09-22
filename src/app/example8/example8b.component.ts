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
        <em>My parent component object reference does change:</em><span class="material-icons check_circle">check_circle</span><br /><br />
        {{ person1.name }}
      </p>
      <p>
        <strong>PERSON 2</strong>
        <em>My parent component object reference does NOT change:</em><span class="material-icons cancel">cancel</span><br /><br />
        {{ person2.name }}
      </p>
    </div>
  `,
})
export class Example8bComponent implements OnInit {
  @Input('person1') person1: Person;
  @Input('person2') person2: Person;

  ngOnInit(): void {
    setTimeout( () => {
      console.log('Example8bComponent: ngOnInit(): this.person1: ', this.person1);
      console.log('Example8bComponent: ngOnInit(): this.person2: ', this.person2);
    });
  }

  ngAfterViewInit(): void {
    console.log('Example8bComponent: ngAfterViewInit(): this.person1: ', this.person1);
    console.log('Example8bComponent: ngAfterViewInit(): this.person2: ', this.person2);
  }
}
