import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },
  {
    path: 'splash',
    loadChildren: () => import('./slides/splash/splash.module').then(m => m.SplashPageModule)
  },
  {
    path: 'slide-2',
    loadChildren: () => import('./slides/slide-2/slide-2.module').then(m => m.Slide2PageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./aut/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./aut/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'homepage',
    loadChildren: () => import('./pages/homepage/homepage.module').then(m => m.HomepagePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfilePageModule),
    canActivate: [AuthGuard]
  },

  {
    path: 'tarif',
    loadChildren: () => import('./pages/tarif/tarif.module').then(m => m.TarifPageModule)
  },
  {
    path: 'riwayat/:customerId',
    loadChildren: () => import('./pages/riwayat/riwayat.module').then(m => m.RiwayatPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'voucher',
    loadChildren: () => import('./pages/voucher/voucher.module').then(m => m.VoucherPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }