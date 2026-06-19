import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  apiUrl ='http://localhost:3000/users';

  getUser(){
    return this.http.get<any[]>(this.apiUrl);;
  }

    isValidUser(email: string, password: string): Observable<boolean> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((users: any[]) => {
          
        return users.some(user => user.email === email && user.password === password);
      })
    );
  }
}
