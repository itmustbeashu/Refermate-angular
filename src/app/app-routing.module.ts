import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'login',
  loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule),
  data: { sideNav:false,bottomNav:false,header:true,footer:false }
}, {
  path: 'dashboard',
  loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule),
  data: { sideNav:true,bottomNav:true,header:true,footer:false }
}, {
  path: 'home',
  loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
  data: { sideNav:false,bottomNav:false,header:true,footer:false }
}, {
  path: 'notification',
  loadChildren: () => import('./pages/notification/notification.module').then(m => m.NotificationModule),
  data: { sideNav:true,bottomNav:true,header:true,footer:false }
}, {
  path: 'profile',
  loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule),
  data: { sideNav:true,bottomNav:true,header:true,footer:false }
}, {
  path: 'referral',
  loadChildren: () => import('./pages/referral/referral.module').then(m => m.ReferralModule),
  data: { sideNav:true,bottomNav:true,header:true,footer:false }
}, {
  path: 'register',
  loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule),
  data: { sideNav:false,bottomNav:false,header:true,footer:false }
}, { path: '**', redirectTo: 'login' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
