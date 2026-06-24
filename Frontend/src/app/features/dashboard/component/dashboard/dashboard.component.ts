import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/servies/auth.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  currUser: User | null = null;
  lastLoginTime = new Date().toLocaleString();

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.loadUserProfile();
  }

  loadUserProfile() {
    const userId = localStorage.getItem('userId');
    if (userId) {
      this.authService.getProfile(userId).subscribe({
        next: (userData: User) => {
          this.currUser = userData;
        },
        error: (err) => {
          console.error("Error fetching user profile for dashboard", err);
        }
      });
    }
  }
}
