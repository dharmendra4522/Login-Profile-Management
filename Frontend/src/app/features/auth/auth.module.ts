import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, AuthRoutingModule, ReactiveFormsModule, MaterialModule],
  exports: [LoginComponent],
})
export class AuthModule {
  constructor() {
    console.log('AuthModule loaded!');
  }
}
