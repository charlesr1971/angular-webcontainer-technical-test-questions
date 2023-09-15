import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example16',
  template: `
    <div class="item-header-1">Question</div>
    <img class="question-image" src="./assets/images/questions/qA3.png" />
    <div class="item-header-3">Answer</div>
    <div class="item-content item-text">False</div>
    <div class="item-header-4">Notes</div>
    <div class="item-content item-text">A component must be wrapped in a module, if it is to be shared in more than one ngModule. It needs to be declared and exported in its wrapper module and then just imported in its parent module: <a href="https://stackoverflow.com/questions/64643390/the-component-is-declared-by-more-than-one-ngmodule" target="_blank">More Information</a></div>
  `,
  styles: [],
})
export class Example16Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
