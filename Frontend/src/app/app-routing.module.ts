import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/auth/components/login/login.component';
import { ProfileComponent } from './features/profile/components/profile/profile.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {path: '' , redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', title: 'Login', component: LoginComponent},

  {path: 'profile', title: 'Profile', canActivate: [AuthGuard], component: ProfileComponent},

  {path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
