import { MenteeService } from './services/mentee.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { ClarityModule, ClrFormsNextModule } from '@clr/angular';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserProfileService } from "./services/user-profile.service";
import { HttpClient } from "@angular/common/http";
import { HttpClientModule } from "@angular/common/http";
import { MenteeComponent } from './mentee/mentee.component';
import { MentorComponent } from './mentor/mentor.component';
import { MenteeFormComponent } from './mentee-form/mentee-form.component';
import { ParentComponent } from './test/parent/parent.component';
import { ChildComponent } from './test/child/child.component';
import { DeleteConformationComponent } from './delete-conformation/delete-conformation.component';

@NgModule({
  declarations: [
    AppComponent,
    MenteeComponent,
    MentorComponent,
    MenteeFormComponent,
    ParentComponent,
    ChildComponent,
    DeleteConformationComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ClarityModule,
    ClrFormsNextModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    HttpClient,
    UserProfileService,
    MenteeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
