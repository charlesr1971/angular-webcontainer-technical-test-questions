import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example70',
  template: `
    <div class="item-header-1">Question</div>
    <img class="question-image" src="./assets/images/questions/qA57.png" />
    <div class="item-header-3">Answer</div>
    <div class="item-content item-text">A singleton service, is a service, with one instance per App</div>
    <div class="item-header-4">Notes</div>
    <div class="item-content item-text">
      <p [innerHTML]="code1"></p>
      <p>In the case of <em>providedIn</em> property, a singleton service is created by passing the value <em>root</em>, to the <em>providedIn</em> property. After this, the service will be available throughout the application, as a singleton service.<br />
      <em>providedIn</em> property is available only from angular 6.0 prior to that we have only providers array to register services in angular. Also there is a bundling impact, is that providedIn allows to tree-shake out Angular services that are not being used.
      </p>
      <p [innerHTML]="code2"></p>
      <p>In the case of <em>NgModule</em> providers array, a singleton service is created, by passing the service as a value, to the providers array and, if the <em>NgModule</em> is the <em>root app module</em>, then the service will be available throughout the application, as a singleton service.<br />This property is handy, if we want the service to be available, as a singleton service, across all modules and we do not have the requirement to restrict it to a particular <em>feature module</em>.<br />Also <em>providedIn</em> property works irrespective of our service, being <em>eager loading</em> or <em>lazy loading module</em>.</p>
      <a href="https://medium.com/weekly-webtips/a-singleton-service-in-angular-a6ed577413d6" target="_blank"
          >More information</a>
    </div>
  `,
  styles: [
  ]
})
export class Example70Component implements OnInit {

  code1 = `
    @Injectable({ providedIn: ‘root’, })
  `;

  code2 = `
    @NgModule({
        …
        providers: [YourService],
        …
    })
  `;

  constructor() { }

  ngOnInit(): void {
  }

}
