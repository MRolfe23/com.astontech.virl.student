import { Mentee } from './../types/mentee';
import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-mentee-form',
  templateUrl: './mentee-form.component.html',
  styleUrls: ['./mentee-form.component.css']
})
export class MenteeFormComponent implements OnChanges {
  
  @Input() visable: boolean;
  @Input() currentMentee: Mentee;

  @Output() submitMentee: EventEmitter<Mentee> = new EventEmitter<Mentee>();
  @Output() modalState: EventEmitter<boolean> = new EventEmitter<boolean>();
  // model = this.populateMenteeForm(this.currentMentee);
  model = new Mentee('', '', '');

  submitted = false;

  ngOnChanges() {
    this.model = this.currentMentee;
  }

  onSubmit(menteeForm: NgForm) {
    console.log('Mentee Form: ' + menteeForm.value);
    console.log('model assign: ' + this.model.id);
    console.log('model assign: ' + this.model.name);
    this.model = menteeForm.value;
    console.log('model assign: ' + this.model.id);
    console.log('model assign: ' + this.model.name);

    this.submitted = true;
    this.submitMentee.emit(this.model);
    this.visable = false;
    this.onClose(menteeForm);
  }

  populateMenteeForm(mentee: Mentee) {
    if (mentee === null) {
      this.model = new Mentee('', '', '');
    } else {
      this.model = new Mentee('newMentee', '', '');
      //this.model = mentee; 
    }
  }

  onClose(menteeForm: NgForm) {
    this.visable = false;
    this.modalState.emit(false);
  }

  get diagnostic() { return JSON.stringify(this.model); }

}
