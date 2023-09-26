import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.css']
})
export class AccordionItemComponent {

  debug = false;

  @Input() isOpen = false;
  @Input() componentName = '';
  @Output() item = new EventEmitter<any>();

  // isOpen = false;
  
  isCategoryOpen = false;

  ngOnChanges(changes: SimpleChanges) {   
    //if(this.debug){
      console.log("AccordionItemComponent: ngOnChanges(): changes: ", changes, ' this.componentName: ', this.componentName);
    //}
  }

  toggle() {
    this.isOpen = !this.isOpen;
    this.item.emit({
      componentName: this.componentName,
      isOpen: this.isOpen
    });
  }

  toggleCategory() {
    this.isCategoryOpen = !this.isCategoryOpen;
  }

}