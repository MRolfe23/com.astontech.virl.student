import { MenteeComponent } from './../mentee/mentee.component';
import { Mentee } from './../types/mentee';
import { Component, OnInit, Output } from '@angular/core';
import { MenteeService } from '../services/mentee.service';
import { merge } from 'rxjs';

@Component({
  selector: 'app-mentor',
  templateUrl: './mentor.component.html',
  styleUrls: ['./mentor.component.css']
})
export class MentorComponent implements OnInit {
  mentees: Mentee[] = [];
  newMenteeModal = false;
  errorModal = false;
  conformationModal = false;
  newVar = new Mentee('','','');


  constructor(private menteeService: MenteeService) { }

  ngOnInit() {
    this.getMentees();
  }

  getMentees() {
    this.menteeService.getMentees()
    .subscribe(mentees => this.mentees = mentees)
  }

  saveMentee(newMentee: Mentee) {
    this.newMenteeModal = false;
    if (newMentee.id === undefined) {
      console.log('This is in the create new mentee.');
      this.menteeService.addMentee(newMentee)
        .subscribe(mentee => this.mentees.push(mentee));
    } else {
      console.log('This is in the update mentee.')
      this.menteeService.addMentee(newMentee)
        .subscribe(mentee => console.log('Mentee has been updated'));
    }
  }

  newModal() {
    this.newVar = new Mentee('','','');
    this.newMenteeModal = true;
    
  }

  editModal(mentee: Mentee) {
    this.newVar = mentee;
    this.newMenteeModal = true;
  }

  deleteConfirm(mentee: Mentee) {
    this.newVar = mentee;
    this.conformationModal = true;
  }

  removeMentee(mentee: Mentee) {
    console.log('Deleteing Mentee: ' + mentee);
    this.menteeService.deleteMentee(mentee.id)
      .subscribe(removeMenteee => this.mentees.splice(this.mentees.indexOf(mentee), 1));
    console.log('Finished removeMentee: ' + mentee);
  }

  menteeModalState(visable: boolean) {
    console.log('From the child: ', visable);
    this.newMenteeModal = visable;
  }

  deleteConfirmModalState(visable: boolean) {
    this.conformationModal = visable;
  }
}
