import {
  Component,
  OnDestroy,
  OnInit,
  ElementRef,
  Injectable,
} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable, Subject, EMPTY, combineLatest, of, from } from 'rxjs';
import { takeUntil, map, catchError, concatMap } from 'rxjs/operators';
import { DemoService } from './services/demo.service';

@Component({
  selector: 'app-root',
  template: `
  <h1>Angular Technical Test Questions</h1>
  <app-accordion>
    <app-accordion-item>
        <div accordion-title>
          <div class="header">QUESTION 3<span class="triangle"></span></div>
          <div class="sub-header">DemoComponent</div>
          <div class="file-header">demo.component.ts</div>
        </div>
        <div accordion-content>
          <app-demo></app-demo>
        </div>
      </app-accordion-item>
      <app-accordion-item>
        <div accordion-title>
          <div class="header">QUESTION 4<span class="triangle"></span></div>
          <div class="sub-header">AppComponent</div>
          <div class="file-header">app.component.ts</div>
        </div>
        <div accordion-content>
          <p>{{ user?.name }}</p>
        </div>
      </app-accordion-item>
      <app-accordion-item>
        <div accordion-title>
          <div class="header">QUESTION 5<span class="triangle"></span></div>
          <div class="sub-header">AppComponent</div>
          <div class="file-header">app.component.ts</div>
        </div>
        <div accordion-content>
          <p [ngClass]="{special: true}">{{birthday | date:'EEEE' | uppercase | lowercase}}</p>
        </div>
      </app-accordion-item>
      <app-accordion-item>
        <div accordion-title>
          <div class="header">QUESTION 7<span class="triangle"></span></div>
          <div class="sub-header">Demo4Directive</div>
          <div class="file-header">demo4.directive.ts</div>
        </div>
        <div accordion-content>
          <h2 appDemo4>Hello World</h2>
        </div>
      </app-accordion-item>
      <app-accordion-item>
        <div accordion-title>
          <div class="header">QUESTION 7<span class="triangle"></span></div>
          <div class="sub-header">Renderer2Component</div>
          <div class="file-header">renderer2.component.ts</div>
        </div>
        <div accordion-content>
          <app-renderer2></app-renderer2>
        </div>
      </app-accordion-item>
      <app-accordion-item>
        <div accordion-title>
          <div class="header">QUESTION 7<span class="triangle"></span></div>
          <div class="sub-header">Example1Component</div>
          <div class="file-header">example1.component.ts</div>
        </div>
        <div accordion-content>
          <app-example1></app-example1>
        </div>
      </app-accordion-item>
      <app-accordion-item>
        <div accordion-title>
          <div class="header">QUESTION 9<span class="triangle"></span></div>
          <div class="sub-header">Example2Component</div>
          <div class="file-header">example2.component.ts</div>
        </div>
        <div accordion-content>
          <app-example2></app-example2>
        </div>
      </app-accordion-item>
      <app-accordion-item>
        <div accordion-title>
          <div class="header">QUESTION 10<span class="triangle"></span></div>
          <div class="sub-header">Example3Component</div>
          <div class="file-header">example3.component.ts</div>
        </div>
        <div accordion-content>
          <app-example3></app-example3>
        </div>
      </app-accordion-item>
      <app-accordion-item>
        <div accordion-title>
          <div class="header">QUESTION 14<span class="triangle"></span></div>
          <div class="sub-header">Example4aComponent</div>
          <div class="file-header">example4a.component.ts</div>
        </div>
        <div accordion-content>
          <app-example4a></app-example4a>
        </div>
      </app-accordion-item>
      <app-accordion-item>
        <div accordion-title>
          <div class="header">QUESTION 15<span class="triangle"></span></div>
          <div class="sub-header">Example5Component</div>
          <div class="file-header">example5.component.ts</div>
        </div>
        <div accordion-content>
          <app-example5></app-example5>
        </div>
      </app-accordion-item>
      <app-accordion-item>
        <div accordion-title>
          <div class="header">QUESTION 16<span class="triangle"></span></div>
          <div class="sub-header">Example6Component</div>
          <div class="file-header">example6.component.ts</div>
        </div>
        <div accordion-content>
          <app-example6></app-example6>
        </div>
      </app-accordion-item>
      <app-accordion-item>
        <div accordion-title>
          <div class="header">QUESTION 17<span class="triangle"></span></div>
          <div class="sub-header">Example13Component</div>
          <div class="file-header">example13.component.ts</div>
        </div>
        <div accordion-content>
          <app-example13></app-example13>
        </div>
      </app-accordion-item>
      <app-accordion-item>
        <div accordion-title>
          <div class="header">QUESTION 18<span class="triangle"></span></div>
          <div class="sub-header">Example14Component</div>
          <div class="file-header">example14.component.ts</div>
        </div>
        <div accordion-content>
          <app-example14></app-example14>
        </div>
      </app-accordion-item>
      <app-accordion-item>
        <div accordion-title>
          <div class="header">QUESTION 19<span class="triangle"></span></div>
          <div class="sub-header">Example7Component</div>
          <div class="file-header">example7.component.ts</div>
        </div>
        <div accordion-content>
          <app-example7></app-example7>
        </div>
      </app-accordion-item>
      <app-accordion-item>
        <div accordion-title>
          <div class="header">QUESTION 19<span class="triangle"></span></div>
          <div class="sub-header">Example12Component</div>
          <div class="file-header">example12.component.ts</div>
        </div>
        <div accordion-content>
          <app-example12></app-example12>
        </div>
      </app-accordion-item>
      <app-accordion-item>
        <div accordion-title>
          <div class="header">QUESTION 21<span class="triangle"></span></div>
          <div class="sub-header">Example8aComponent</div>
          <div class="file-header">example8a.component.ts</div>
        </div>
        <div accordion-content>
          <app-example8a></app-example8a>
        </div>
      </app-accordion-item>
      <app-accordion-item>
        <div accordion-title>
          <div class="header">QUESTION 21<span class="triangle"></span></div>
          <div class="sub-header">Example9aComponent</div>
          <div class="file-header">example9a.component.ts</div>
        </div>
        <div accordion-content>
          <app-example9a></app-example9a>
        </div>
      </app-accordion-item>
      <app-accordion-item>
        <div accordion-title>
          <div class="header header-conflict">QUESTION 22<span class="triangle"></span></div>
          <div class="sub-header">Example10Component</div>
          <div class="file-header">example10.component.ts</div>
        </div>
        <div accordion-content>
          <app-example10></app-example10>
        </div>
      </app-accordion-item>
      <app-accordion-item>
        <div accordion-title>
          <div class="header">QUESTION 23<span class="triangle"></span></div>
          <div class="sub-header">Example15Component</div>
          <div class="file-header">example15.component.ts</div>
        </div>
        <div accordion-content>
          <app-example15></app-example15>
        </div>
      </app-accordion-item>
      <app-accordion-item>
        <div accordion-title>
          <div class="header">QUESTION 24<span class="triangle"></span></div>
          <div class="sub-header">Example16Component</div>
          <div class="file-header">example16.component.ts</div>
        </div>
        <div accordion-content>
          <app-example16></app-example16>
        </div>
      </app-accordion-item>
      <app-accordion-item>
        <div accordion-title>
          <div class="header header-conflict">QUESTION 25<span class="triangle"></span></div>
          <div class="sub-header">Example17aComponent</div>
          <div class="file-header">example17a.component.ts</div>
        </div>
        <div accordion-content>
          <nav> 
            <a routerLink="/admin" class="nav" routerLinkActive="active">Admin</a>
            <a routerLink="/users" class="nav" routerLinkActive="active">Users</a>
          </nav>
          <router-outlet></router-outlet>
        </div>
      </app-accordion-item>
      <app-accordion-item>
        <div accordion-title>
          <div class="header">QUESTION 26<span class="triangle"></span></div>
          <div class="sub-header">Example18Component</div>
          <div class="file-header">example18.component.ts</div>
        </div>
        <div accordion-content>
          <app-example18></app-example18>
        </div>
      </app-accordion-item>
      <app-accordion-item>
        <div accordion-title>
          <div class="header">QUESTION 27<span class="triangle"></span></div>
          <div class="sub-header">Example19Component</div>
          <div class="file-header">example19.component.ts</div>
        </div>
        <div accordion-content>
          <app-example19></app-example19>
        </div>
      </app-accordion-item>
      <app-accordion-item>
        <div accordion-title>
          <div class="header">QUESTION 28<span class="triangle"></span></div>
          <div class="sub-header">Example20Component</div>
          <div class="file-header">example20.component.ts</div>
        </div>
        <div accordion-content>
          <app-example20></app-example20>
        </div>
      </app-accordion-item>
      <app-accordion-item>
        <div accordion-title>
          <div class="header">QUESTION 29<span class="triangle"></span></div>
          <div class="sub-header">Example21Component</div>
          <div class="file-header">example21.component.ts</div>
        </div>
        <div accordion-content>
          <app-example21></app-example21>
        </div>
      </app-accordion-item>
    <app-accordion>
  `,
  styles: [
    `
    p.special {
      color: pink;
    }
  `,
  ],
})
export class AppComponent implements OnInit {
  user: any = { name: 'Charlie' };
  birthday = new Date(1988, 3, 15);

  constructor(private demoService: DemoService) {
    console.log('AppComponent: constructor()');
    this.demoService.demo2Service.name = 'root';
  }

  ngOnInit(): void {
    this.user = undefined;
  }
}
