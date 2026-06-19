import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  Name: string = 'John Doe';
  Email: string = 'john@test.com';
  Phone: string = '9999999999';
  Role: string = 'Admin';

}
