import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Example50aComponent } from "./example50a.component";
import { Example50bComponent } from "./example50b.component";

const sharedElements = [Example50aComponent];

@NgModule({
  imports: [CommonModule],
  declarations: sharedElements,
  // exports: sharedElements.concat([Example50bComponent]), // export 1 SUCCESS
  // exports: sharedElements.concat(imports), // export 2 FAIL
  // exports: sharedElements, // export 3 SUCCESS
  // exports: sharedElements.concat([Example50bComponent]), // export 4 SUCCESS
})
export class Example50Module {}
