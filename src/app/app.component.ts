import {
  Component,
  OnDestroy,
  OnInit,
  ElementRef,
  Injectable,
} from "@angular/core";
import { Title } from "@angular/platform-browser";
import { RouterLink, Router, RouterOutlet } from "@angular/router";
import { Observable, Subject, EMPTY, combineLatest, of, from } from "rxjs";
import { takeUntil, map, catchError, concatMap } from "rxjs/operators";
import { DemoService } from "./services/demo.service";

@Component({
  selector: "app-root",
  template: `
    <h1>Angular Technical Test Questions</h1>
    <app-accordion>
      <!--<app-accordion-item>
        <div accordion-title>
          <div class="header">QUESTION 3<span class="triangle"></span></div>
          <div class="sub-header">DemoComponent</div>
          <div class="file-header">demo.component.ts</div>
        </div>
        <div accordion-content>
          <app-demo></app-demo>
        </div>
      </app-accordion-item>-->
      <!--<app-accordion-item>
        <div accordion-title>
          <div class="header">QUESTION 3<span class="triangle"></span></div>
          <div class="sub-header">AppComponent</div>
          <div class="file-header">app.component.ts</div>
        </div>
        <div accordion-content>
          <p>{{ user?.name }}</p>
          <div class="item-header-3">Answer</div>
          <div class="item-content item-text">
            <code> {{  "{{ user?.name }}" }} </code>
          </div>
          <div class="item-header-4">Notes</div>
          <div class="item-content item-text">
            Even though the <em>ngOnInit</em> method is executed after the class
            variables are instantiated, the safe navigation operator should be
            used, because change detection will try to update the user object
            with <em>undefined</em>. Clearly, this will remove the
            <em>name</em> property, which would then throw an error, unless the
            safe navigation operator is used.
          </div>
        </div>
      </app-accordion-item>-->
      <!--<app-accordion-item>
        <div accordion-title>
          <div class="header">QUESTION 5<span class="triangle"></span></div>
          <div class="sub-header">AppComponent</div>
          <div class="file-header">app.component.ts</div>
        </div>
        <div accordion-content>
          <p [ngClass]="{ special: true }">
            {{ birthday | date: "EEEE" | uppercase | lowercase }}
          </p>
        </div>
      </app-accordion-item>-->
      <!--<app-accordion-item>
        <div accordion-title>
          <div class="header">QUESTION 7<span class="triangle"></span></div>
          <div class="sub-header">Demo4Directive</div>
          <div class="file-header">demo4.directive.ts</div>
        </div>
        <div accordion-content>
          <h2 appDemo4>Hello World</h2>
        </div>
      </app-accordion-item>-->
      <!--<app-accordion-item>
        <div accordion-title>
          <div class="header">QUESTION 7<span class="triangle"></span></div>
          <div class="sub-header">Renderer2Component</div>
          <div class="file-header">renderer2.component.ts</div>
        </div>
        <div accordion-content>
          <app-renderer2></app-renderer2>
        </div>
      </app-accordion-item>-->
      <!--<app-accordion-item>
        <div accordion-title>
          <div class="header">QUESTION 7<span class="triangle"></span></div>
          <div class="sub-header">Example1Component</div>
          <div class="file-header">example1.component.ts</div>
        </div>
        <div accordion-content>
          <app-example1></app-example1>
        </div>
      </app-accordion-item>-->
      <app-accordion-item>
        <div accordion-title>
          <div class="header">QUESTION 9<span class="triangle"></span></div>
          <div class="question-header">
            Given the code snippet below.<br />
            What is the name of the <em>html element</em> that should replace
            the question mark, from the <em>component template</em>?
          </div>
          <div class="sub-header">Example2Component</div>
          <div class="file-header">example2.component.ts</div>
        </div>
        <div accordion-content>
          <app-example2></app-example2>
        </div>
      </app-accordion-item>
      <!--<app-accordion-item>
        <div accordion-title>
          <div class="header">QUESTION 10<span class="triangle"></span></div>
          <div class="sub-header">Example3Component</div>
          <div class="file-header">example3.component.ts</div>
        </div>
        <div accordion-content>
          <app-example3></app-example3>
        </div>
      </app-accordion-item>-->
      <app-accordion-item>
        <div accordion-title>
          <div class="header">QUESTION 14<span class="triangle"></span></div>
          <div class="question-header">
            Considering the following use of <em>@Input()</em> and
            <em>@Output</em> properties.<br />
            What will be logged in the console, when the user clicks the
            <em>SelectName</em> button?
          </div>
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
          <div class="question-header">
            Which of the following answers is a valid
            <em>template expression</em>?
          </div>
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
          <div class="question-header">
            Given the code snippet below, how will Angular compile the
            <em>#Div1</em> and <em>#Div2</em> elements?
          </div>
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
          <div class="question-header">
            In a <em>reactive form</em>, the source of truth is the
            <em>component template</em>?
          </div>
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
          <div class="question-header">
            <em>EventEmitters</em> should always be unsubscribed, before a
            client component or service is destroyed?
          </div>
          <div class="sub-header">Example14Component</div>
          <div class="file-header">example14.component.ts</div>
        </div>
        <div accordion-content>
          <app-example14></app-example14>
        </div>
      </app-accordion-item>
      <!--<app-accordion-item>
        <div accordion-title>
          <div class="header">QUESTION 19<span class="triangle"></span></div>
          <div class="sub-header">Example7Component</div>
          <div class="file-header">example7.component.ts</div>
        </div>
        <div accordion-content>
          <app-example7></app-example7>
        </div>
      </app-accordion-item>-->
      <app-accordion-item>
        <div accordion-title>
          <div class="header">QUESTION 19<span class="triangle"></span></div>
          <div class="question-header">
            Consider the following code snippet.<br />
            What <em>pipe</em> can be used in place of the question mark, to
            mark the component, to be checked for changes and update the view,
            whenever the timer emits a new value?
          </div>
          <div class="sub-header">Example12Component</div>
          <div class="file-header">example12.component.ts</div>
        </div>
        <div accordion-content>
          <app-example12></app-example12>
        </div>
      </app-accordion-item>
      <app-accordion-item>
        <div accordion-title>
          <div class="header header-conflict">QUESTION 21a<span class="triangle"></span></div>
          <div class="question-header">
            The parent component supplies two different objects to its child component.<br />
            The child component uses <em>ChangeDetectionStrategy.OnPush</em>.<br />
            Which object will trigger change detection to occur, in the child and why?
          </div>
          <div class="sub-header">Example8aComponent</div>
          <div class="file-header">example8a.component.ts</div>
        </div>
        <div accordion-content>
          <app-example8a></app-example8a>
        </div>
      </app-accordion-item>
      <app-accordion-item>
        <div accordion-title>
          <div class="header header-conflict">QUESTION 21b<span class="triangle"></span></div>
          <div class="question-header">
            The parent component supplies two different objects to its child component.<br />
            The parent component uses <em>ChangeDetectionStrategy.OnPush</em>.<br />
            Which object will trigger change detection to occur, in the child and why?
          </div>
          <div class="sub-header">Example64aComponent</div>
          <div class="file-header">example64a.component.ts</div>
        </div>
        <div accordion-content>
          <app-example64a></app-example64a>
        </div>
      </app-accordion-item>
      <!--<app-accordion-item>
        <div accordion-title>
          <div class="header">QUESTION 21<span class="triangle"></span></div>
          <div class="sub-header">Example9aComponent</div>
          <div class="file-header">example9a.component.ts</div>
        </div>
        <div accordion-content>
          <app-example9a></app-example9a>
        </div>
      </app-accordion-item>-->
      <app-accordion-item>
        <div accordion-title>
          <div class="header header-conflict">
            QUESTION 22<span class="triangle"></span>
          </div>
          <div class="question-header">
            Which of the following answers is an invalid
            <em>template</em> statement?
          </div>
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
          <div class="question-header">
            Consider the following route.<br />
            Select the answer that represents the correct sending of the
            required <em>id parameter</em>
          </div>
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
          <div class="question-header">
            If a component is needed in more than one <em>NgModule</em>, it can
            be added in the declarations array of all those modules?
          </div>
          <div class="sub-header">Example16Component</div>
          <div class="file-header">example16.component.ts</div>
        </div>
        <div accordion-content>
          <app-example16></app-example16>
        </div>
      </app-accordion-item>
      <app-accordion-item>
        <div accordion-title>
          <div class="header">QUESTION 25<span class="triangle"></span></div>
          <div class="question-header">
            Consider the following routes and html template.<br />
            When the app is initially loaded, what <em>class</em> will be
            assigned to the <em>admin anchor</em>?
          </div>
          <div class="sub-header">Example17aComponent</div>
          <div class="file-header">example17a.component.ts</div>
        </div>
        <div accordion-content>
          <nav>
            <a routerLink="/admin" class="nav" routerLinkActive="active"
              >Admin</a
            >
            <a routerLink="/users" class="nav" routerLinkActive="active"
              >Users</a
            >
          </nav>
          <router-outlet></router-outlet>
        </div>
      </app-accordion-item>
      <app-accordion-item>
        <div accordion-title>
          <div class="header">QUESTION 26<span class="triangle"></span></div>
          <div class="question-header">
            What <em>router event</em> can be used to determine that a
            navigation ended successfully?
          </div>
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
          <div class="question-header">
            Consider the following use of the <em>of</em> and
            <em>map</em> operators. What is going to get logged in the console?
          </div>
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
          <div class="question-header">
            The <em>AsyncPipe</em> can be used to subscribe to observables as
            well as to promises?
          </div>
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
          <div class="question-header">
            Consider the following relationship between a component & service.
            "Nothing will get logged, in the console, after the
            <em>destroyed</em> string….”
          </div>
          <div class="sub-header">Example21Component</div>
          <div class="file-header">example21.component.ts</div>
        </div>
        <div accordion-content>
          <app-example21></app-example21>
        </div>
      </app-accordion-item>
      <app-accordion-item>
        <div accordion-title>
          <div class="header">QUESTION 30<span class="triangle"></span></div>
          <div class="question-header">
            What is the <em>structural directive</em> that conditionally creates
            or destroys subviews from the template?
          </div>
          <div class="sub-header">Example22Component</div>
          <div class="file-header">example22.component.ts</div>
        </div>
        <div accordion-content>
          <app-example22></app-example22>
        </div>
      </app-accordion-item>
      <app-accordion-item>
        <div accordion-title>
          <div class="header">QUESTION 31<span class="triangle"></span></div>
          <div class="question-header">
            Before using the <em>ngModel</em> directive in two-way data binding,
            a specific <em>NgModule</em> must be imported in the current module?
          </div>
          <div class="sub-header">Example23Component</div>
          <div class="file-header">example23.component.ts</div>
        </div>
        <div accordion-content>
          <app-example23></app-example23>
        </div>
      </app-accordion-item>
      <app-accordion-item>
        <div accordion-title>
          <div class="header">QUESTION 32<span class="triangle"></span></div>
          <div class="question-header">
            Pipes can be used in any <em>@Service</em> or
            <em>@Component</em> typescript code, since they are providers that
            can be injected, in the constructor?
          </div>
          <div class="sub-header">Example24Component</div>
          <div class="file-header">example24.component.ts</div>
        </div>
        <div accordion-content>
          <app-example24></app-example24>
        </div>
      </app-accordion-item>
      <app-accordion-item>
        <div accordion-title>
          <div class="header">QUESTION 33<span class="triangle"></span></div>
          <div class="question-header">
            Setting the <em>changeDetection</em> property of the
            <em>@component</em> to
            <em>ChangeDetectionStrategy.OnPush</em> affects all child components
            of that tree?
          </div>
          <div class="sub-header">Example25Component</div>
          <div class="file-header">example25.component.ts</div>
        </div>
        <div accordion-content>
          <app-example25></app-example25>
        </div>
      </app-accordion-item>
      <app-accordion-item>
        <div accordion-title>
          <div class="header">QUESTION 34<span class="triangle"></span></div>
          <div class="question-header">
            Given the following code snippet, what are the methods that will log
            <em>undefined</em>?
          </div>
          <div class="sub-header">Example26Component</div>
          <div class="file-header">example26.component.ts</div>
        </div>
        <div accordion-content>
          <app-example26></app-example26>
        </div>
      </app-accordion-item>
      <app-accordion-item>
        <div accordion-title>
          <div class="header">QUESTION 35<span class="triangle"></span></div>
          <div class="question-header">
            What is the method name that needs to replace the question mark, so
            that the <em>HttpInterceptor</em> request is handled correctly?
          </div>
          <div class="sub-header">Example27Component</div>
          <div class="file-header">example27.component.ts</div>
        </div>
        <div accordion-content>
          <app-example27></app-example27>
        </div>
      </app-accordion-item>
      <app-accordion-item>
        <div accordion-title>
          <div class="header">QUESTION 36<span class="triangle"></span></div>
          <div class="question-header">
            Consider the following relationship between a component & service.
            "Nothing will get logged, in the console, after the
            <em>destroyed</em> string….”
          </div>
          <div class="sub-header">Example28aComponent</div>
          <div class="file-header">example28a.component.ts</div>
        </div>
        <div accordion-content>
          <app-example28a></app-example28a>
        </div>
      </app-accordion-item>
      <app-accordion-item>
        <div accordion-title>
          <div class="header">QUESTION 37<span class="triangle"></span></div>
          <div class="question-header">
            What <em>component lifecycle hook</em> is usually used, to detect an
            <em>@Input</em> property changes?
          </div>
          <div class="sub-header">Example29Component</div>
          <div class="file-header">example29.component.ts</div>
        </div>
        <div accordion-content>
          <app-example29></app-example29>
        </div>
      </app-accordion-item>
      <app-accordion-item>
        <div accordion-title>
          <div class="header">QUESTION 38<span class="triangle"></span></div>
          <div class="question-header">
            Consider the following definition of the <em>DemoModule</em>.<br />
            What is the type of the <em>forRoot()</em> static method?
          </div>
          <div class="sub-header">Example30Component</div>
          <div class="file-header">example30.component.ts</div>
        </div>
        <div accordion-content>
          <app-example30></app-example30>
        </div>
      </app-accordion-item>
      <app-accordion-item>
        <div accordion-title>
          <div class="header">QUESTION 39<span class="triangle"></span></div>
          <div class="question-header">
            True or false: Given the service from the code snippet below, it is
            required to register the service as a provider in a specific
            <em>NgModule</em>, to make it available at the root level?
          </div>
          <div class="sub-header">Example31Component</div>
          <div class="file-header">example31.component.ts</div>
        </div>
        <div accordion-content>
          <app-example31></app-example31>
        </div>
      </app-accordion-item>
      <app-accordion-item>
        <div accordion-title>
          <div class="header">QUESTION 40<span class="triangle"></span></div>
          <div class="question-header">
            Which of the following is an incorrect syntax for adding the
            <em>valid</em> CSS class to an html element?
          </div>
          <div class="sub-header">Example32Component</div>
          <div class="file-header">example32.component.ts</div>
        </div>
        <div accordion-content>
          <app-example32></app-example32>
        </div>
      </app-accordion-item>
      <app-accordion-item>
        <div accordion-title>
          <div class="header">QUESTION 41<span class="triangle"></span></div>
          <div class="question-header">
            Given the code snippet below.<br />
            Select the <em>input</em> that will not be able to update the name
            property?
          </div>
          <div class="sub-header">Example33Component</div>
          <div class="file-header">example33.component.ts</div>
        </div>
        <div accordion-content>
          <app-example33></app-example33>
        </div>
      </app-accordion-item>
      <app-accordion-item>
        <div accordion-title>
          <div class="header">QUESTION 42<span class="triangle"></span></div>
          <div class="question-header">
            What type of items can be used in the <em>NgModule</em> imports
            array?
          </div>
          <div class="sub-header">Example34Component</div>
          <div class="file-header">example34.component.ts</div>
        </div>
        <div accordion-content>
          <app-example34></app-example34>
        </div>
      </app-accordion-item>
      <app-accordion-item>
        <div accordion-title>
          <div class="header">QUESTION 43<span class="triangle"></span></div>
          <div class="question-header">
            Consider the following relationship between a <em>component</em> and
            a <em>service</em>.<br />
            What is the first word that is going to be logged in the console?
          </div>
          <div class="sub-header">Example35Component</div>
          <div class="file-header">example35.component.ts</div>
        </div>
        <div accordion-content>
          <app-example35></app-example35>
        </div>
      </app-accordion-item>
      <app-accordion-item>
        <div accordion-title>
          <div class="header">QUESTION 44<span class="triangle"></span></div>
          <div class="question-header">
            Consider the following use of the <em>filter</em> and ·<em>map</em>
            operators. What is going to get logged in the console?
          </div>
          <div class="sub-header">Example36Component</div>
          <div class="file-header">example36.component.ts</div>
        </div>
        <div accordion-content>
          <app-example36></app-example36>
        </div>
      </app-accordion-item>
      <app-accordion-item>
        <div accordion-title>
          <div class="header">QUESTION 45<span class="triangle"></span></div>
          <div class="question-header">
            Which of the following answers represents an invalid way of adding
            headers to the options of an <em>HttpClient.get()</em> method?
          </div>
          <div class="sub-header">Example37Component</div>
          <div class="file-header">example37.component.ts</div>
        </div>
        <div accordion-content>
          <app-example37></app-example37>
        </div>
      </app-accordion-item>
      <app-accordion-item>
        <div accordion-title>
          <div class="header header-conflict">
            QUESTION 46<span class="triangle"></span>
          </div>
          <div class="question-header">
            Which of the following <em>NgModules</em> needs to be imported in
            order to use <em>Nglf</em> and <em>NgFor</em>?
          </div>
          <div class="sub-header">Example38Component</div>
          <div class="file-header">example38.component.ts</div>
        </div>
        <div accordion-content>
          <app-example38></app-example38>
        </div>
      </app-accordion-item>
      <app-accordion-item>
        <div accordion-title>
          <div class="header">QUESTION 47<span class="triangle"></span></div>
          <div class="question-header">
            Consider the following list of decorators.<br />Which one can be
            used to provide a unique instance of the <em>DemoService</em> in
            every <em>NgModule</em>?
          </div>
          <div class="sub-header">Example39Component</div>
          <div class="file-header">example39.component.ts</div>
        </div>
        <div accordion-content>
          <app-example39></app-example39>
        </div>
      </app-accordion-item>
      <app-accordion-item>
        <div accordion-title>
          <div class="header">QUESTION 48<span class="triangle"></span></div>
          <div class="question-header">
            What method do you need to correctly implement the
            <em>Pipe Transform</em> interface?
          </div>
          <div class="sub-header">Example40Component</div>
          <div class="file-header">example40.component.ts</div>
        </div>
        <div accordion-content>
          <app-example40></app-example40>
        </div>
      </app-accordion-item>
      <app-accordion-item>
        <div accordion-title>
          <div class="header">QUESTION 49<span class="triangle"></span></div>
          <div class="question-header">
            Given the code snippet below, what is the value that will be
            displayed?
          </div>
          <div class="sub-header">Example41Component</div>
          <div class="file-header">example41.component.ts</div>
        </div>
        <div accordion-content>
          <app-example41></app-example41>
        </div>
      </app-accordion-item>
      <app-accordion-item>
        <div accordion-title>
          <div class="header">QUESTION 50<span class="triangle"></span></div>
          <div class="question-header">
            What is the <em>structural directive</em> that repeats a node for
            each item in a list?
          </div>
          <div class="sub-header">Example42Component</div>
          <div class="file-header">example42.component.ts</div>
        </div>
        <div accordion-content>
          <app-example42></app-example42>
        </div>
      </app-accordion-item>
      <app-accordion-item>
        <div accordion-title>
          <div class="header">QUESTION 51<span class="triangle"></span></div>
          <div class="question-header">
            What is the type that can replace the underscore ( _ ) in the 5th
            line of the code snippet below, so that the code is compiled
            successfully?
          </div>
          <div class="sub-header">Example43Component</div>
          <div class="file-header">example43.component.ts</div>
        </div>
        <div accordion-content>
          <app-example43></app-example43>
        </div>
      </app-accordion-item>
      <app-accordion-item>
        <div accordion-title>
          <div class="header">QUESTION 52<span class="triangle"></span></div>
          <div class="question-header">
            Which of the following statements is correct?
          </div>
          <div class="sub-header">Example44Component</div>
          <div class="file-header">example44.component.ts</div>
        </div>
        <div accordion-content>
          <app-example44></app-example44>
        </div>
      </app-accordion-item>
      <app-accordion-item>
        <div accordion-title>
          <div class="header">QUESTION 53<span class="triangle"></span></div>
          <div class="question-header">
            A directive has the same set of lifecycle hooks as a component?
          </div>
          <div class="sub-header">Example45Component</div>
          <div class="file-header">example45.component.ts</div>
        </div>
        <div accordion-content>
          <app-example45></app-example45>
        </div>
      </app-accordion-item>
      <app-accordion-item>
        <div accordion-title>
          <div class="header">QUESTION 54<span class="triangle"></span></div>
          <div class="question-header">
            What mode of <em>ViewEncapsulation</em> can be used to scope the CSS
            to the component's view?
          </div>
          <div class="sub-header">Example46Component</div>
          <div class="file-header">example46.component.ts</div>
        </div>
        <div accordion-content>
          <app-example46></app-example46>
        </div>
      </app-accordion-item>
      <app-accordion-item>
        <div accordion-title>
          <div class="header">QUESTION 55<span class="triangle"></span></div>
          <div class="question-header">
            Consider the following routes and html template.<br />
            When the app is initially loaded, the <em>user</em> section anchor,
            won't have the <em>active CSS class</em> assigned to it?
          </div>
          <div class="sub-header">Example47Component</div>
          <div class="file-header">example47.component.ts</div>
        </div>
        <div accordion-content>
          <nav>
            <a routerLink="/users1" class="nav" routerLinkActive="active"
              >Users</a
            >
            <a
              routerLink="/users1/details"
              class="nav"
              routerLinkActive="active"
              >Details</a
            >
          </nav>
          <router-outlet></router-outlet>
        </div>
      </app-accordion-item>
      <app-accordion-item>
        <div accordion-title>
          <div class="header">QUESTION 56<span class="triangle"></span></div>
          <div class="question-header">
            What is the <em>interface</em> that needs to be implemented in a
            class in order to create an <em>http interceptor</em>?
          </div>
          <div class="sub-header">Example48Component</div>
          <div class="file-header">example48.component.ts</div>
        </div>
        <div accordion-content>
          <app-example48></app-example48>
        </div>
      </app-accordion-item>
      <app-accordion-item>
        <div accordion-title>
          <div class="header">QUESTION 57<span class="triangle"></span></div>
          <div class="question-header">
            Consider the following relationship between a component and a
            service.<br />
            Nothing will get logged in the console after the
            <em>destroyed</em> string?
          </div>
          <div class="sub-header">Example49aComponent</div>
          <div class="file-header">example49a.component.ts</div>
        </div>
        <div accordion-content>
          <app-example49a></app-example49a>
        </div>
      </app-accordion-item>
      <app-accordion-item>
        <div accordion-title>
          <div class="header">QUESTION 58<span class="triangle"></span></div>
          <div class="question-header">
            Consider the following <em>NgModule</em>.<br />
            Which <em>export</em> is an invalid way of sharing elements?
          </div>
          <div class="sub-header">Example50aComponent</div>
          <div class="file-header">example50a.component.ts</div>
        </div>
        <div accordion-content>
          <app-example50a></app-example50a>
        </div>
      </app-accordion-item>
      <app-accordion-item>
        <div accordion-title>
          <div class="header header-conflict">
            QUESTION 59<span class="triangle"></span>
          </div>
          <div class="question-header">
            A <em>feature model</em> can have any of the following arrays:
            declarations, imports, bootstrap, providers?
          </div>
          <div class="sub-header">Example51Component</div>
          <div class="file-header">example51.component.ts</div>
        </div>
        <div accordion-content>
          <app-example51></app-example51>
        </div>
      </app-accordion-item>
      <app-accordion-item>
        <div accordion-title>
          <div class="header">QUESTION 60<span class="triangle"></span></div>
          <div class="question-header">
            The <em>EventEmitter</em> class provided by Angular extends a core
            <em>RxJS</em> class, adding an <em>emit()</em> method so it can send
            arbitrary values.<br />
            What is the name of that class?
          </div>
          <div class="sub-header">Example52Component</div>
          <div class="file-header">example52.component.ts</div>
        </div>
        <div accordion-content>
          <app-example52></app-example52>
        </div>
      </app-accordion-item>
      <app-accordion-item>
        <div accordion-title>
          <div class="header">QUESTION 61<span class="triangle"></span></div>
          <div class="question-header">
            Before using the <em>formControl</em> directive in a template, a
            specific <em>NgModule</em> must be imported in the current
            module.<br />
            What's the name of that <em>NgModule</em>?
          </div>
          <div class="sub-header">Example53Component</div>
          <div class="file-header">example53.component.ts</div>
        </div>
        <div accordion-content>
          <app-example53></app-example53>
        </div>
      </app-accordion-item>
      <app-accordion-item>
        <div accordion-title>
          <div class="header">QUESTION 62<span class="triangle"></span></div>
          <div class="question-header">
            At the <em>component template</em> level, what brackets are used to
            mark the data passing from a child component to its parent?
          </div>
          <div class="sub-header">Example54Component</div>
          <div class="file-header">example54.component.ts</div>
        </div>
        <div accordion-content>
          <app-example54></app-example54>
        </div>
      </app-accordion-item>
      <app-accordion-item>
        <div accordion-title>
          <div class="header header-conflict">
            QUESTION 63<span class="triangle"></span>
          </div>
          <div class="question-header">
            Considering the following use of the
            <em>@ViewChild</em> property.<br />
            What will be logged in the console?
          </div>
          <div class="sub-header">Example55aComponent</div>
          <div class="file-header">example55a.component.ts</div>
        </div>
        <div accordion-content>
          <app-example55a></app-example55a>
        </div>
      </app-accordion-item>
      <app-accordion-item>
        <div accordion-title>
          <div class="header">QUESTION 64<span class="triangle"></span></div>
          <div class="question-header">
            What should the type of the element, injected in the
            <em>constructor</em>, be, so that the component has the color
            correctly set to red?
          </div>
          <div class="sub-header">Example56Component</div>
          <div class="file-header">example56.component.ts</div>
        </div>
        <div accordion-content>
          <app-example56></app-example56>
        </div>
      </app-accordion-item>
      <app-accordion-item>
        <div accordion-title>
          <div class="header">QUESTION 65<span class="triangle"></span></div>
          <div class="question-header">
            Assume that the <em>custom-div</em> component has a property called
            backgroundColor.<br />
            What will the backgroundColor be in the following case?
          </div>
          <div class="sub-header">Example57aComponent</div>
          <div class="file-header">example57a.component.ts</div>
        </div>
        <div accordion-content>
          <app-example57a></app-example57a>
        </div>
      </app-accordion-item>
      <app-accordion-item>
        <div accordion-title>
          <div class="header">QUESTION 66<span class="triangle"></span></div>
          <div class="question-header">
            Which of the following statements are correct?
          </div>
          <div class="sub-header">Example58Component</div>
          <div class="file-header">example58.component.ts</div>
        </div>
        <div accordion-content>
          <app-example58></app-example58>
        </div>
      </app-accordion-item>
      <app-accordion-item>
        <div accordion-title>
          <div class="header">QUESTION 67<span class="triangle"></span></div>
          <div class="question-header">
            Given the code snippet below, complete the missing area marked with
            the underscore, so that the following information is displayed:
            <em>12/1 5/88</em>?
          </div>
          <div class="sub-header">Example59Component</div>
          <div class="file-header">example59.component.ts</div>
        </div>
        <div accordion-content>
          <app-example59></app-example59>
        </div>
      </app-accordion-item>
      <app-accordion-item>
        <div accordion-title>
          <div class="header">QUESTION 68<span class="triangle"></span></div>
          <div class="question-header">
            Consider the following code snippet.<br />
            After the user inputs a name, what will the border color of the
            input be?
          </div>
          <div class="sub-header">Example60Component</div>
          <div class="file-header">example60.component.ts</div>
        </div>
        <div accordion-content>
          <app-example60></app-example60>
        </div>
      </app-accordion-item>
      <app-accordion-item>
        <div accordion-title>
          <div class="header">QUESTION 69<span class="triangle"></span></div>
          <div class="question-header">
            Consider the following use of the <em>timer</em> and
            <em>combinelatest</em> operators?<br />
            What is going to get logged in the console the second time the
            <em>combinelatest</em> operator emits a value?
          </div>
          <div class="sub-header">Example61Component</div>
          <div class="file-header">example61.component.ts</div>
        </div>
        <div accordion-content>
          <app-example61></app-example61>
        </div>
      </app-accordion-item>
      <app-accordion-item>
        <div accordion-title>
          <div class="header header-conflict">
            QUESTION 70<span class="triangle"></span>
          </div>
          <div class="question-header">
            Which of the following statements about <em>observables</em> is
            incorrect?
          </div>
          <div class="sub-header">Example62Component</div>
          <div class="file-header">example62.component.ts</div>
        </div>
        <div accordion-content>
          <app-example62></app-example62>
        </div>
      </app-accordion-item>
      <app-accordion-item>
        <div accordion-title>
          <div class="header">QUESTION 71<span class="triangle"></span></div>
          <div class="question-header">
            Consider the following use of the
            <em>distinctUntilChanged</em> operator.<br />
            What is going to get logged in the console?
          </div>
          <div class="sub-header">Example63Component</div>
          <div class="file-header">example63.component.ts</div>
        </div>
        <div accordion-content>
          <app-example63></app-example63>
        </div>
      </app-accordion-item>
      <app-accordion-item>
        <div accordion-title>
          <div class="header">QUESTION 72<span class="triangle"></span></div>
          <div class="question-header">
          Which of the following notifications is not sent by a handler that implements 
the <em>Observer</em> interface?
          </div>
          <div class="sub-header">Example65Component</div>
          <div class="file-header">example65.component.ts</div>
        </div>
        <div accordion-content>
          <app-example65></app-example65>
        </div>
      </app-accordion-item>
      <app-accordion-item>
        <div accordion-title>
          <div class="header">QUESTION 73<span class="triangle"></span></div>
          <div class="question-header">
          Consider the following relationship between a component and a service.<br />
What is the first word that is going to be logged in the console?
          </div>
          <div class="sub-header">Example66Component</div>
          <div class="file-header">example66.component.ts</div>
        </div>
        <div accordion-content>
          <app-example66></app-example66>
        </div>
      </app-accordion-item>
      <app-accordion-item>
        <div accordion-title>
          <div class="header">QUESTION 74<span class="triangle"></span></div>
          <div class="question-header">
          Given the code snippet below<br />
Select the case that will be rendered by the <em>NgSwitch</em> statement?
          </div>
          <div class="sub-header">Example67Component</div>
          <div class="file-header">example67.component.ts</div>
        </div>
        <div accordion-content>
          <app-example67></app-example67>
        </div>
      </app-accordion-item>
      <app-accordion-item>
        <div accordion-title>
          <div class="header header-conflict">QUESTION 75<span class="triangle"></span></div>
          <div class="question-header">
          What is the first <em>lifecycle hook</em> method that Angular calls, after a component is 
constructed?
          </div>
          <div class="sub-header">Example68Component</div>
          <div class="file-header">example68.component.ts</div>
        </div>
        <div accordion-content>
          <app-example68></app-example68>
        </div>
      </app-accordion-item>
      <app-accordion-item>
        <div accordion-title>
          <div class="header">QUESTION 76<span class="triangle"></span></div>
          <div class="question-header">
            Given the following code snippet, how will Angular compile this component?
          </div>
          <div class="sub-header">Example69Component</div>
          <div class="file-header">example69.component.ts</div>
        </div>
        <div accordion-content>
          <app-example69></app-example69>
        </div>
      </app-accordion-item>
      <app-accordion-item>
        <div accordion-title>
          <div class="header">QUESTION 77<span class="triangle"></span></div>
          <div class="question-header">
            Which of the following definitions apply to a <em>singleton</em>?
          </div>
          <div class="sub-header">Example70Component</div>
          <div class="file-header">example70.component.ts</div>
        </div>
        <div accordion-content>
          <app-example70></app-example70>
        </div>
      </app-accordion-item>
      <app-accordion-item>
        <div accordion-title>
          <div class="header">QUESTION 78<span class="triangle"></span></div>
          <div class="question-header">
            Consider the following relationship between two components and a service.<br />
            What is going to be logged in the console? 
          </div>
          <div class="sub-header">Example71Component</div>
          <div class="file-header">example71.component.ts</div>
        </div>
        <div accordion-content>
          <app-example71></app-example71>
        </div>
      </app-accordion-item>
      <app-accordion-item>
        <div accordion-title>
          <div class="header">QUESTION 79<span class="triangle"></span></div>
          <div class="question-header">
            Consider the following use of the <em>filter</em> and <em>map</em> operators.<br />
            What is going to get logged in the console? 
          </div>
          <div class="sub-header">Example72Component</div>
          <div class="file-header">example72.component.ts</div>
        </div>
        <div accordion-content>
          <app-example72></app-example72>
        </div>
      </app-accordion-item>
    </app-accordion>
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
  user: any = { name: "Charlie" };
  birthday = new Date(1988, 3, 15);

  constructor(private demoService: DemoService) {
    console.log("AppComponent: constructor()");
    this.demoService.demo2Service.name = "root";
    console.log("AppComponent: constructor(): this.demoService.demo2Service.name: ", this.demoService.demo2Service.name);
  }

  ngOnInit(): void {
    this.user = undefined;
  }
}
