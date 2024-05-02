import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'login',
  loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule),
  data: { isPublic: true }
}, {
  path: 'dashboard',
  loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule),
}, {
  path: 'home',
  loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
}, {
  path: 'notification',
  loadChildren: () => import('./pages/notification/notification.module').then(m => m.NotificationModule),
}, {
  path: 'profile',
  loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule),
}, {
  path: 'referral',
  loadChildren: () => import('./pages/referral/referral.module').then(m => m.ReferralModule),
}, {
  path: 'register',
  loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule),
}, { path: '**', redirectTo: 'login' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
