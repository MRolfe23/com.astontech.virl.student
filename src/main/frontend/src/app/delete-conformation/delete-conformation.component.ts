import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { MenteeService } from '../services/mentee.service';
import { Mentee } from '../types/mentee';

@Component({
  selector: 'app-delete-conformation',
  templateUrl: './delete-conformation.component.html',
  styleUrls: ['./delete-conformation.component.css']
})
export class DeleteConformationComponent implements OnChanges {

  @Input()
  visable: boolean;
  
  @Input()
  menteeToDelete: Mentee;

  @Output()
  modalState: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  submitDelete: EventEmitter<Mentee> = new EventEmitter<Mentee>();

  deleteConfirm = false;
  menteeDelete: Mentee;

  constructor(private menteeService: MenteeService) { }

  ngOnChanges() {

  }

  onClose() {
    this.visable = false;
    this.modalState.emit(false);
  }

  onConfirmDelete(mentee: Mentee) {
    console.log('This is in on ConfirmDelete: ' + this.menteeToDelete);
    this.menteeDelete = mentee;
    this.submitDelete.emit(this.menteeDelete);
    this.onClose();
  }

  menteeModalState(visable: boolean) {
    console.log('From the child: ', visable);
    this.deleteConfirm = false;
  }
}