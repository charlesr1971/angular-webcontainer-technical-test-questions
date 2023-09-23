import { Component, Injectable, OnInit } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Demo6Service {
	name = 'service';
}

@Component({
  providers: [Demo6Service],
  selector: 'app-example71',
  template: `
    <div class="item-header-1">Question</div>
    <img class="question-image" src="./assets/images/questions/qA58.png" />
    <div class="item-header-3">Answer</div>
    <div class="item-content item-text">service</div>
    <div class="item-header-4">Notes</div>
    <div class="item-content item-text">
      To start with, <em>root</em> is logged in the console, from the <em><span [innerHTML]="code1"></span></em> injected into <em>app.component.ts</em>. However, this is overwritten, with the value of <em>service</em>, which is set within the <em>Demo6Service</em> service. This is injected into <em>example71.component.ts</em>, as a unique instance using the <em>providers</em> property of the <em>@Component</em> decorator.
    </div>
  `,
  styles: [
  ]
})
export class Example71Component implements OnInit {

  code1 = `
    @Injectable({ providedIn: ‘root’, })
  `;

  constructor(private demoService: Demo6Service) {
    console.log('Example71Component: constructor(): this.demoService.name: ', this.demoService.name);
  }

  ngOnInit(): void {
  }

}
