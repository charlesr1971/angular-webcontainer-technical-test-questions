import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule, HttpClientJsonpModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { Example47Module } from "./example47/example47.module";

import { Demo4Directive } from "./demo4/demo4.directive";

import { AppComponent } from "./app.component";
import { AccordionComponent } from "./accordion/accordion.component";
import { AccordionItemComponent } from "./accordion-item/accordion-item.component";
import { DemoComponent } from "./demo/demo.component";
import { Demo2Component } from "./demo2/demo2.component";
import { CancelComponent } from "./demo2/demo2.component";
import { Renderer2Component } from "./renderer2/renderer2.component";
import { Example1Component } from "./example1/example1.component";

import { DynamicSelectorComponent } from './dynamic-selector/dynamic-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    Demo2Component,
    CancelComponent,
    Demo4Directive,
    Renderer2Component,
    AccordionComponent,
    AccordionItemComponent,
    DynamicSelectorComponent,
    Example1Component,
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
  exports: [
    ReactiveFormsModule,
    // Example47Module,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
