import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SportComponent } from './sport/sport.component';
import { ShowSportComponent } from './sport/show-sport/show-sport.component';
import { AddEditSportComponent } from './sport/add-edit-sport/add-edit-sport.component';
import { PlayerComponent } from './player/player.component';
import { ShowPlayerComponent } from './player/show-player/show-player.component';
import { AddEditPlayerComponent } from './player/add-edit-player/add-edit-player.component';
import { SharedService } from './shared.service';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    SportComponent,
    ShowSportComponent,
    AddEditSportComponent,
    PlayerComponent,
    ShowPlayerComponent,
    AddEditPlayerComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
