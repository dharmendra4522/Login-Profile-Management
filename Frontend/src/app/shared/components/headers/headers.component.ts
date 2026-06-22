import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/servies/auth.service';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent {

  constructor(private authService: AuthService, private router: Router) { }

  @Input() userName = '';
  
  logout() {
      this.authService.logout();
      this.router.navigate(['/login']);
    }
}
