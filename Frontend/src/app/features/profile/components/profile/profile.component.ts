import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/servies/auth.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  Name: string = '';
  Email: string = '';
  Phone: string = '';
  Role: string = '';

  currUser: User | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    const loggedInEmail = localStorage.getItem('loggedInUserEmail');
    const response = this.authService.getUser();

    if (loggedInEmail) {
      response.subscribe({
        next: (allUsers) => {
          for (let i = 0; i < allUsers.length; i++) {
            if (allUsers[i].email === loggedInEmail) {
              this.currUser = allUsers[i];
              localStorage.setItem('userId', this.currUser.id.toString());
              break;
            }
          }
        },
        error: (err) =>{
          console.log("Error to fetch data from DB", err);
        }
      });
    }
  }
}
