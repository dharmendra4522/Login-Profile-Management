import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/servies/auth.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    console.log("Submit button click hua!");

    const enteredEmail = this.loginForm.value.email.trim();
    const enteredPassword = this.loginForm.value.password.toString().trim();

    this.authService.login(enteredEmail, enteredPassword).subscribe({
      next: (usersList: User[]) => {
        if (usersList && usersList.length > 0) {
          const loggedInUser = usersList[0];

          localStorage.setItem('token', 'dummy-token');
          localStorage.setItem('userId', loggedInUser.id.toString());
          localStorage.setItem('loggedInUserEmail', loggedInUser.email);

          alert('Login Successful!');
          this.router.navigate(['/profile']);
        } else {
          alert('Invalid email or password');
        }
      },
      error: (err) => {
        console.log('Error occurred during login:', err);
      }
    });
  }
}