import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { ShowuserdetailsComponent } from './showuserdetails/showuserdetails.component';
import { UserService } from './user.service';
import { HomeComponent } from './home/home.component';
import {HttpModule} from '@angular/http';
import {ShowComponent} from './home/show.component';
export const routes:Routes=[
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'home', component:UsersComponent},
  // {path:'details',component:HomeComponent},
  // {path:'home/:id',component:ShowComponent},

  {path:'home/:id',component:ShowuserdetailsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ShowuserdetailsComponent,
    HomeComponent,
    ShowComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
 
  ],

  bootstrap: [AppComponent],
  providers:[UserService],
})
export class AppModule { }
