import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html'
})
export class ParentComponent {

  message = 'This is a message from the parent component.';

  message2 = 'This is the second message from parent!';

  messageFromChild;

  message_to_child;

  onNotify(message: string) {
    this.messageFromChild = message;
  }

}
