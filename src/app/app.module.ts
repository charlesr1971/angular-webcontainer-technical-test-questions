import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
// import { Demo3Component } from './demo3/demo3.component';
import { DemoComponent } from './demo/demo.component';
import { Demo2Component } from './demo2/demo2.component';
import { CancelComponent } from './demo2/demo2.component';
import { Demo4Directive } from './demo4/demo4.directive';
import { Renderer2Component } from './renderer2/renderer2.component';
import { Example1Component } from './example1/example1.component';
import { Example2Component } from './example2/example2.component';
import { Example3Component } from './example3/example3.component';
import { Example4aComponent } from './example4/example4a.component';
import { Example4bComponent } from './example4/example4b.component';
import { Example5Component } from './example5/example5.component';
import { Example6Component } from './example6/example6.component';
import { Example7Component } from './example7/example7.component';
import { Example8aComponent } from './example8/example8a.component';
import { Example8bComponent } from './example8/example8b.component';
import { Example9aComponent } from './example9/example9a.component';
import { Example9bComponent } from './example9/example9b.component';
import { Example10Component } from './example10/example10.component';
import { AccordionComponent } from './accordion/accordion.component';
import { AccordionItemComponent } from './accordion-item/accordion-item.component';
import { Example12Component } from './example12/example12.component';
import { Example13Component } from './example13/example13.component';
import { Example14Component } from './example14/example14.component';
import { Example15Component } from './example15/example15.component';
import { Example16Component } from './example16/example16.component';
import { Example17aComponent } from './example17/example17a.component';
import { Example17bComponent } from './example17/example17b.component';
import { AppRoutingModule } from './app-routing.module';
import { Example18Component } from './example18/example18.component';
import { Example19Component } from './example19/example19.component';
import { Example20Component } from './example20/example20.component';
import { Example21Component } from './example21/example21.component';
import { Example22Component } from './example22/example22.component';
import { Example23Component } from './example23/example23.component';
import { Example24Component } from './example24/example24.component';
import { Example25Component } from './example25/example25.component';
import { Example26Component } from './example26/example26.component';
import { Example27Component } from './example27/example27.component';

@NgModule({
  declarations: [
    AppComponent,
    // Demo3Component,
    DemoComponent,
    Demo2Component,
    CancelComponent,
    Demo4Directive,
    Renderer2Component,
    Example1Component,
    Example2Component,
    Example3Component,
    Example4bComponent,
    Example4aComponent,
    Example5Component,
    Example6Component,
    Example7Component,
    Example8aComponent,
    Example8bComponent,
    Example9aComponent,
    Example9bComponent,
    Example10Component,
    AccordionComponent,
    AccordionItemComponent,
    Example12Component,
    Example13Component,
    Example14Component,
    Example15Component,
    Example16Component,
    Example17aComponent,
    Example17bComponent,
    Example18Component,
    Example19Component,
    Example20Component,
    Example21Component,
    Example22Component,
    Example23Component,
    Example24Component,
    Example25Component,
    Example26Component,
    Example27Component,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
  exports: [ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
