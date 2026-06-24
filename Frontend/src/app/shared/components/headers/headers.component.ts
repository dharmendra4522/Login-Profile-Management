import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthService } from 'src/app/core/servies/auth.service';
import { User } from 'src/app/models/user.model';

export type Menu = {
  title: string;
  icon: string;
  path: string;
};

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css'],
})
export class HeadersComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor(
    private router: Router,
    private authService: AuthService,
  ) {}

  menu: Menu[] = [
    { title: 'Dashboard', icon: 'dashboard', path: '/dashboard' },
    { title: 'Profile', icon: 'person', path: '/profile' },
    { title: 'Employee', icon: 'person', path: '/employee' },
  ];

  @Input() userName = '';

  ngOnInit(): void {
    if (!this.userName) {
      const userId = localStorage.getItem('userId');
      if (userId) {
        this.authService.getProfile(userId).subscribe({
          next: (userData: User) => {
            this.userName = userData.name;
            console.log(
              'Successfully fetched user profile for header:',
              userData,
            );
          },
          error: (err) => {
            console.error('Error fetching user profile for header:', err);
          },
        });
      }
    }
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
