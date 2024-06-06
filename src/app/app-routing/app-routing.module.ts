import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ProfileComponent } from '../profile/profile.component';
import { SettingsComponent } from '../settings/settings.component';
import { Submenu1Component } from './submenu1/submenu1.component';
import { Submenu2Component } from '../submenu2/submenu2.component';


const routes: Routes = [
  // { path: '', component: HomeComponent },
  { path: 'user/:id', component: ProfileComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'submenu1', component: Submenu1Component },
  { path: 'submenu2', component: Submenu2Component },
  // { path: '**', redirectTo: '' } // Redirect to home for unknown routes
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }