import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent {

  constructor(private router: Router) { }

  @Input() userName = '';

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUserEmail');
    this.router.navigate(['/login']);
    console.log('User logged out');
  }
}
