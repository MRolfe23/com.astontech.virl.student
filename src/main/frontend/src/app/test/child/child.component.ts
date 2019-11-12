import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html'
})

export class ChildComponent {

  @Input()
  parent_message: string;

  @Input()
  parent_message2: string;

  @Input()
  teachChild: string;

  @Output()
  notify: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  child_message;

  notifyParent() {
    this.notify.emit(this.child_message);
  }

}