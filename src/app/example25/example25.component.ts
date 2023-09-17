import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-example25",
  template: `
    <div class="item-header-1">Question</div>
    <img class="question-image" src="./assets/images/questions/qA11.png" />
    <div class="item-header-3">Answer</div>
    <div class="item-content item-text">True</div>
    <div class="item-header-4">Notes</div>
    <div class="item-content item-text">
      <a
        href="https://stackoverflow.com/questions/55732153/confusion-with-angular-changedetectionstategy-onpush-application-to-child-compon"
        target="_blank"
        >More Information</a
      ><br /><br />
      If you have <em>ChangeDetectionStrategy.OnPush</em> executed for a parent,
      it will run for it's children, unless they are also <em>OnPush</em>:
      <ol>
        <li>
          <a
            href="https://blog.angular-university.io/onpush-change-detection-how-it-works/"
            target="_blank"
          >
            ChangeDetectionStrategy.OnPush
          </a>
        </li>
        <li>
          <a
            href="https://stackoverflow.com/questions/54565231/angular-onpush-change-detection-propagation-to-a-child-components-in-a-ngfor-loo"
            target="_blank"
          >
            Change Detection Propagation to a Child Components in a ngFor Loop
          </a>
        </li>
      </ol>
    </div>
  `,
  styles: [],
})
export class Example25Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
