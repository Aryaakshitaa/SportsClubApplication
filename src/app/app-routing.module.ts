import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { PlayerComponent } from './player/player.component';
import { SportComponent } from './sport/sport.component';

const routes: Routes = [
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : 'dashboard',
    component : DashboardComponent
  },
  {
    path:'player',
    component:PlayerComponent
  },
  {
    path:'sport',
    component:SportComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
