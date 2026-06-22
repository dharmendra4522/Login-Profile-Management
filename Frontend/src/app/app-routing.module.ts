import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', title: 'Login', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)},

  {path: 'profile', title: 'Profile', canActivate: [AuthGuard], loadChildren: () => import('./features/profile/profile.module').then(m => m.ProfileModule)},

  {path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
