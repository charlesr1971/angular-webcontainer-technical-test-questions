import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-example4b',
  template: `<button (click)="select($any($event))">Select Name</button>`,
})
export class Example4bComponent {
  @Input() name!: string;
  @Output() selectedName = new EventEmitter<string>();

  select(name?: string): void {
    this.name = 'Demo2';
    this.selectedName.emit(this.name);
  }
}
