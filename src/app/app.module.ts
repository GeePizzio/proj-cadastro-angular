import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { ProfilesComponent } from './pages/profiles/profiles.component';
import { ProfileListComponent } from './pages/profiles/profile-list/profile-list.component';
import { ProfileCreateUpdateComponent } from './pages/profiles/profile-create-update/profile-create-update.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProfilesComponent,
    ProfileListComponent,
    ProfileCreateUpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'profile', component: ProfileListComponent },
      { path: 'profile/create', component: ProfileCreateUpdateComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
