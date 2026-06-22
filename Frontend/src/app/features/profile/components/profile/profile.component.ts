import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/servies/auth.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  currUser: User | null = null;

  constructor(private authService: AuthService) {}


  ngOnInit() {
    const userId = localStorage.getItem('userId');

    if (userId) {
      this.authService.getProfile(userId).subscribe({
        next: (userData: User) => {
          this.currUser = userData;
        },
        error: (err) => { 
          console.log("Error to fetch data from DB", err);
        }
      });
    }
  }
}