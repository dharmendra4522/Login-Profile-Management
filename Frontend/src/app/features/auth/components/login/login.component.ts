import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/servies/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm!: FormGroup;
  Email: string = '';
  Password: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {}

  initLogin() {
    return this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() {
    this.loginForm = this.initLogin();
  }

  onSubmit(loginForm: any) {
    // extrct the email and pass from form.
    const enteredEmail = this.loginForm.value.email;
    const enteredPassword = this.loginForm.value.password;

    const serverRespone = this.authService.isValidUser(
      enteredEmail,
      enteredPassword,
    );

    serverRespone.subscribe({
      next: (isValidUser) => {
        if (isValidUser) {
          const fakeToken = 'jsbhsiu33893b';
          console.log('Login successful', isValidUser);
          localStorage.setItem('token', fakeToken);
          
          localStorage.setItem('loggedInUserEmail', enteredEmail);
          this.router.navigate(['/profile']);
        } else {
          alert('Invalid email or password');
        }
      },
    });
  }
}
