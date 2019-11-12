import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mentee',
  templateUrl: './mentee.component.html',
  styleUrls: ['./mentee.component.css']
})
export class MenteeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

}
