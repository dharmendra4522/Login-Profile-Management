import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { HeadersComponent } from './shared/components/headers/headers.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  {
    path: 'login',
    title: 'Login',
    loadChildren: () =>
      import('./features/auth/auth.module').then((m) => m.AuthModule),
  },

  {
    path: '',
    component: HeadersComponent,
    children: [
      {
        path: 'profile',
        title: 'Profile',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('./features/profile/profile.module').then(
            (m) => m.ProfileModule,
          ),
      },
      {
        path: 'dashboard',
        title: 'Dashboard',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('./features/dashboard/dashboard.module').then(
            (m) => m.DashboardModule,
          ),
      },
      {
        path: 'employee',
        title: 'Employee',
        loadChildren: () =>
          import('./features/employee/employee.module').then(
            (m) => m.EmployeeModule,
          ),
      },
    ],
  },

  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
