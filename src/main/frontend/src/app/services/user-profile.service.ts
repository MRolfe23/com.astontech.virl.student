import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Profile } from 'selenium-webdriver/firefox';

@Injectable()
export class UserProfileService {

  public serviceMessage = 'Service Injected';

  constructor(private http: HttpClient) {}

  getUserProfile(name: string) {
    this.http.get('/api/profile/' + name).subscribe(profile => {console.log(profile);});
  }

  getSessionProfile() {
    return this.http.get('/api/profile/');
  }
}
