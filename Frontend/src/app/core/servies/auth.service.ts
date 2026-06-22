// src/app/core/servies/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient, private router: Router) { }



  login(email: string, password: string): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }


  getProfile(userId: string | number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${userId}`);
  }


  logout() : void{
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUserEmail');
    localStorage.removeItem('userId');

    console.log('User logged out successfully from Service');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}