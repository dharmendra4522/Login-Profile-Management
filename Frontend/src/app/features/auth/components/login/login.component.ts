import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/servies/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm!: FormGroup;
  Email: string = '';
  Password: string = '';

  constructor(private formBuilder: FormBuilder, private authService: AuthService) { }


  initLogin() {
    return this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  ngOnInit() {
    this.loginForm = this.initLogin();
  }

  onSubmit(loginForm: any) {
    if(this.loginForm.invalid) {
        const { email, password} = this.loginForm.controls;
        
        this.authService.isValidUser(email.value, password.value).subscribe(isValid => {
          console.log('Is valid user:', isValid);
          console.log('Email:', email.value);
          console.log('Password:', password.value);
        })
    } else{
      alert('Please fill in all required fields correctly.');
    }
    // this.Email = loginForm.value.email;
    // this.Password = loginForm.value.password;
    // console.log('Email:', this.Email);
    // console.log('Password:', this.Password);
    // console.log(loginForm.value);
  }
}
