import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';
import { Observable } from 'rxjs/internal/Observable';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  apiUrl = 'http://localhost:3000/users';

  getUser() {
    return this.http.get<User[]>(this.apiUrl);
  }

  isValidUser(email: string, password: string): Observable<boolean> {
    return this.http.get<User[]>(this.apiUrl).pipe(
      map((users: User[]) => {
        for (let i = 0; i < users.length; i++) {
          const currUser = users[i];
          if (currUser.email === email && currUser.password === password) {
            return true;
          }
        }
        return false;
      }),
    );
  }
}
