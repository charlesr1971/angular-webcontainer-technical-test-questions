import { Component, ElementRef, OnInit, ViewChild, ChangeDetectionStrategy, } from '@angular/core';

interface Person {
  name: string;
}

@Component({
  selector: 'app-example8a',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="item-header-1">Question</div>
    <div class="item-header-2-content">
      <pre><code [innerHTML]="code"></code></pre>
    </div>
    <div class="item-header-2">Implementation</div>
    <div class="item-header-2-content">
      <div class="box-no-size">
        <app-example8b [person1]="person1" [person2]="person2" #sub></app-example8b><br /><br />
        <button (click)="person1Click()">Change Person 1</button>
        <button (click)="person2Click()">Change Person 2</button>
      </div>
    </div>
    <div class="item-header-3">Answer</div>
    <div class="item-content item-text">
      The <em>person1</em> object changes, because it is an immutable object. By
      creating a new object reference the <em>person1</em> triggers change
      detection in the child.<br />The <em>ChangeDetectionStrategy</em> is set
      to <em>OnPush</em>, in the child component,
      only.
    </div>
    <div class="item-header-4">Notes</div>
    <div class="item-content item-text">
      Please search for <em>Example64aComponent</em> in the console, to see the
      which objects change, in the child.
    </div>
    <div class="item-header-5">Conflict</div>
    <div class="item-content item-text">
      <strong>This example sets the
      <em>ChangeDetectionStrategy</em> to <em>OnPush</em> in the child component,
      only.</strong>
      The following example sets the
      <em>ChangeDetectionStrategy</em> to <em>OnPush</em> in the parent,
      only.<br />According to the official documentation,
      <em>ChangeDetectionStrategy</em> should be inherited by all descendant
      components. But the following example, proves this theory to be false. You
      will see that the <em>person2</em> object also changes, even though it's
      <em>name</em> property is changed, in a mutable fashion.
    </div>
  `,
  styles: [``],
})
export class Example8aComponent {
  person1: Person = { name: 'thierry' };
  person2: Person = { name: 'charlie' };
  @ViewChild('sub') sub: any;

  code = `
    // PARENT COMPONENT
    @Component({
      selector: 'app-example8a',
      template: \`
      &#x3C;app-example8b [person1]=&#x22;person1&#x22; [person2]=&#x22;person2&#x22; #sub&#x3E;&#x3C;/app-example8b&#x3E;&#x3C;br /&#x3E;&#x3C;br /&#x3E;
      &#x3C;button (click)=&#x22;person1Click()&#x22;&#x3E;Change Person 1&#x3C;/button&#x3E;
      &#x3C;button (click)=&#x22;person2Click()&#x22;&#x3E;Change Person 2&#x3C;/button&#x3E;
      \`,
    })
    export class Example8aComponent {
      person1: Person = { name: 'thierry' };
      person2: Person = { name: 'charlie' };
      @ViewChild('sub') sub: any;
      person1Click() {
        this.person1 = { 
          name: 'alan' 
        };
      }
      person2Click() {
        this.person2.name = 'Jean';
      }
    }
    // CHILD COMPONENT
    @Component({
      selector: 'app-example8b',
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: \`
        &#x3C;div&#x3E;
          &#x3C;p&#x3E;
            &#x3C;strong&#x3E;PERSON 1&#x3C;/strong&#x3E;
            &#x3C;em&#x3E;My parent component object reference does change:&#x3C;/em&#x3E;&#x3C;br /&#x3E;&#x3C;br /&#x3E;
            {{ person1.name }}
          &#x3C;/p&#x3E;
          &#x3C;p&#x3E;
            &#x3C;strong&#x3E;PERSON 2&#x3C;/strong&#x3E;
            &#x3C;em&#x3E;My parent component object reference does NOT change:&#x3C;/em&#x3E;&#x3C;br /&#x3E;&#x3C;br /&#x3E;
              {{ person2.name }}
          &#x3C;/p&#x3E;
        &#x3C;/div&#x3E;
      \`,
    })
    export class Example8bComponent {
      @Input('person1') person1: Person;
      @Input('person2') person2: Person;
    }
  `;

  person1Click() {
    this.person1 = { 
      name: 'alan' 
    }; // this does trigger the child component's ChangeDetectionStrategy.OnPush, because the object reference changes
    console.log('Example8aComponent: this.sub.person1: ', this.sub.person1);
  }

  person2Click() {
    this.person2.name = 'Jean'; // this does NOT trigger the child component's ChangeDetectionStrategy.OnPush, because the object reference has not changed
    console.log('Example8aComponent: this.sub.person2: ', this.sub.person2);
  }
}
