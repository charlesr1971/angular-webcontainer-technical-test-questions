import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Example50aComponent } from "./example50a.component";
import { Example50bComponent } from "./example50b.component";

const sharedElements = [Example50aComponent, Example50bComponent];

@NgModule({
  imports: [CommonModule],
  declarations: sharedElements,
  // exports: sharedElements.concat([CommonModule]), // export 1 SUCCESS
  // exports: sharedElements.concat(imports), // export 2 FAIL
  // exports: sharedElements, // export 3 SUCCESS
  // exports: sharedElements.concat([FormsModule]), // export 4 SUCCESS
})
export class Example50Module {}
