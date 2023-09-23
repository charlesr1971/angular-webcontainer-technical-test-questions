import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule, HttpClientJsonpModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { DemoComponent } from "./demo/demo.component";
import { Demo2Component } from "./demo2/demo2.component";
import { CancelComponent } from "./demo2/demo2.component";
import { Demo4Directive } from "./demo4/demo4.directive";
import { Renderer2Component } from "./renderer2/renderer2.component";
import { Example1Component } from "./example1/example1.component";
import { Example2Component } from "./example2/example2.component";
import { Example3Component } from "./example3/example3.component";
import { Example4aComponent } from "./example4/example4a.component";
import { Example4bComponent } from "./example4/example4b.component";
import { Example5Component } from "./example5/example5.component";
import { Example6Component } from "./example6/example6.component";
import { Example7Component } from "./example7/example7.component";
import { Example8aComponent } from "./example8/example8a.component";
import { Example8bComponent } from "./example8/example8b.component";
import { Example9aComponent } from "./example9/example9a.component";
import { Example9bComponent } from "./example9/example9b.component";
import { Example10Component } from "./example10/example10.component";
import { AccordionComponent } from "./accordion/accordion.component";
import { AccordionItemComponent } from "./accordion-item/accordion-item.component";
import { Example12Component } from "./example12/example12.component";
import { Example13Component } from "./example13/example13.component";
import { Example14Component } from "./example14/example14.component";
import { Example15Component } from "./example15/example15.component";
import { Example16Component } from "./example16/example16.component";
import { Example17aComponent } from "./example17/example17a.component";
import { Example17bComponent } from "./example17/example17b.component";
import { AppRoutingModule } from "./app-routing.module";
import { Example18Component } from "./example18/example18.component";
import { Example19Component } from "./example19/example19.component";
import { Example20Component } from "./example20/example20.component";
import { Example21Component } from "./example21/example21.component";
import { Example22Component } from "./example22/example22.component";
import { Example23Component } from "./example23/example23.component";
import { Example24Component } from "./example24/example24.component";
import { Example25Component } from "./example25/example25.component";
import { Example26Component } from "./example26/example26.component";
import { Example27Component } from "./example27/example27.component";
import { Example28aComponent } from "./example28/example28a.component";
import { Example28bComponent } from "./example28/example28b.component";
import { Example29Component } from "./example29/example29.component";
import { Example30Component } from "./example30/example30.component";
import { Example31Component } from "./example31/example31.component";
import { Example32Component } from "./example32/example32.component";
import { Example33Component } from "./example33/example33.component";
import { Example34Component } from "./example34/example34.component";
import { Example35Component } from "./example35/example35.component";
import { Example36Component } from "./example36/example36.component";
import { Example37Component } from "./example37/example37.component";
import { Example38Component } from "./example38/example38.component";
import { Example39Component } from "./example39/example39.component";
import { Example40Component } from "./example40/example40.component";
import { Example41Component } from "./example41/example41.component";
import { Example42Component } from "./example42/example42.component";
import { Example43Component } from "./example43/example43.component";
import { Example44Component } from "./example44/example44.component";
import { Example45Component } from "./example45/example45.component";
import { Example46Component } from "./example46/example46.component";
import { Example47Component } from "./example47/example47.component";
import { Example47aComponent } from "./example47/example47a.component";
import { Example47bComponent } from "./example47/example47b.component";
import { Example47Module } from "./example47/example47.module";
import { Example48Component } from "./example48/example48.component";
import { Example49bComponent } from "./example49/example49b.component";
import { Example49aComponent } from "./example49/example49a.component";
import { Example50aComponent } from "./example50/example50a.component";
import { Example51Component } from "./example51/example51.component";
import { Example52Component } from "./example52/example52.component";
import { Example53Component } from "./example53/example53.component";
import { Example54Component } from "./example54/example54.component";
import { Example55aComponent } from "./example55/example55a.component";
import { Example55bComponent } from "./example55/example55b.component";
import { Example56Component } from "./example56/example56.component";
import { Example57aComponent } from './example57/example57a.component';
import { Example57bComponent } from './example57/example57b.component';
import { Example58Component } from './example58/example58.component';
import { Example59Component } from './example59/example59.component';
import { Example60Component } from './example60/example60.component';
import { Example61Component } from './example61/example61.component';
import { Example62Component } from './example62/example62.component';
import { Example63Component } from './example63/example63.component';
import { Example64aComponent } from './example64/example64a.component';
import { Example64bComponent } from './example64/example64b.component';
import { Example65Component } from './example65/example65.component';
import { Example66Component } from './example66/example66.component';
import { Example67Component } from './example67/example67.component';
import { Example68Component } from './example68/example68.component';

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
    Example28aComponent,
    Example28bComponent,
    Example29Component,
    Example30Component,
    Example31Component,
    Example32Component,
    Example33Component,
    Example34Component,
    Example35Component,
    Example36Component,
    Example37Component,
    Example38Component,
    Example39Component,
    Example40Component,
    Example41Component,
    Example42Component,
    Example43Component,
    Example44Component,
    Example45Component,
    Example46Component,
    Example47Component,
    Example47aComponent,
    Example47bComponent,
    Example48Component,
    Example49bComponent,
    Example49aComponent,
    Example50aComponent,
    Example51Component,
    Example52Component,
    Example53Component,
    Example54Component,
    Example55aComponent,
    Example55bComponent,
    Example56Component,
    Example57aComponent,
    Example57bComponent,
    Example58Component,
    Example59Component,
    Example60Component,
    Example61Component,
    Example62Component,
    Example63Component,
    Example64aComponent,
    Example64bComponent,
    Example65Component,
    Example66Component,
    Example67Component,
    Example68Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    Example47Module,
  ],
  exports: [ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
