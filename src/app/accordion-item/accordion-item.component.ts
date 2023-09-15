import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.css']
})
export class AccordionItemComponent {
  isOpen = false;
  toggle() {
    this.isOpen = !this.isOpen;
  }
}