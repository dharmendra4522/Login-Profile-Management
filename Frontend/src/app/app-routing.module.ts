import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/auth/components/login/login.component';
import { ProfileComponent } from './features/profile/components/profile/profile.component';
import { AuthGuard } from './core/guards/auth.guard';
import { ProfileModule } from './features/profile/profile.module';

const routes: Routes = [
  {path: '' , redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', title: 'Login', 
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
  },

  {path: 'profile', title: 'Profile', canActivate: [AuthGuard], 
    loadChildren: () => import('./features/profile/profile.module').then(m => m.ProfileModule)
  },

  {path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
