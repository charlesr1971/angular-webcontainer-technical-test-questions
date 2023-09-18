import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-example33",
  template: `
    <div class="item-header-1">Question</div>
    <img class="question-image" src="./assets/images/questions/qA17.png" />
    <div class="item-header-2">Implementation</div>
    <div class="item-header-2-content">
      <!--<div class="webflow-style-input">
        <input
          #Input1="ngModel"
          [value]="name"
          (input)="name = $event.target.value"
        />
        <button (click)="setValue1()">
          <i class="icon ion-android-arrow-forward"></i>
        </button>
      </div>-->
      <pre class="code-txt">
<code [innerHTML]="code"></code>
</pre><br />
      <div class="webflow-style-input">
        <input
          #Input2="ngModel"
          [ngModel]="name"
          (ngModel)="name = $any($event)"
          placeholder="Input2"
        />
        <button (click)="setValue2()">
          <i class="icon ion-android-arrow-forward"></i>
        </button>
      </div>
      <div class="webflow-style-input">
        <input #Input3="ngModel" [(ngModel)]="name" placeholder="Input3" />
        <button (click)="setValue3()">
          <i class="icon ion-android-arrow-forward"></i>
        </button>
      </div>
      <div class="webflow-style-input">
        <input
          #Input4="ngModel"
          [ngModel]="name"
          (ngModelChange)="name = $event"
          placeholder="Input4"
        />
        <button (click)="setValue4()">
          <i class="icon ion-android-arrow-forward"></i>
        </button>
      </div>
    </div>
    <div class="item-header-3">Answer</div>
    <div class="item-content item-text">#lnput1</div>
    <div class="item-header-4">Notes</div>
    <div class="item-content item-text">
      When using <em>ngModel</em>, it must be used as either an
      <em>input</em> or <em>output</em>. If you look at the first input, there
      is no <em>ngModel</em> directive, in either the <em>input</em> or
      <em>output</em>. Input attributes are wrapped within [] and output
      attributes are wrapped in (). It is also possible to wrap the attribute in
      both, like [()], which is known as <em>bananas in a box</em>.<br />
      <a href="https://angular.io/api/forms/NgModel" target="_blank"
        >More Information</a
      >
    </div>
  `,
  styles: [],
})
export class Example33Component implements OnInit {
  name = "";
  code = `
  &#x3C;div class=&#x22;webflow-style-input&#x22;&#x3E;
    &#x3C;input
      #Input1=&#x22;ngModel&#x22;
      [value]=&#x22;name&#x22;
      (input)=&#x22;name = $event.target.value&#x22;
    /&#x3E;
    &#x3C;button (click)=&#x22;setValue1()&#x22;&#x3E;
      &#x3C;i class=&#x22;icon ion-android-arrow-forward&#x22;&#x3E;&#x3C;/i&#x3E;
    &#x3C;/button&#x3E;
  &#x3C;/div&#x3E;
  `;

  constructor() {
    console.log("Example33Component: constructor(): this.name: ", this.name);
  }

  ngOnInit(): void {
    console.log("Example33Component: ngOnInit(): this.name: ", this.name);
  }

  setValue1() {
    this.name = "Input 1 has been submitted";
    console.log("Example33Component: setValue1(): this.name: ", this.name);
  }

  setValue2() {
    this.name = "Input 2 has been submitted";
    console.log("Example33Component: setValue2(): this.name: ", this.name);
  }

  setValue3() {
    this.name = "Input 3 has been submitted";
    console.log("Example33Component: setValue3(): this.name: ", this.name);
  }

  setValue4() {
    this.name = "Input 4 has been submitted";
    console.log("Example33Component: setValue4(): this.name: ", this.name);
  }
}
