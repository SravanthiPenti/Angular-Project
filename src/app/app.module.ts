import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserService } from './user/user.service';
import {RouterModule,Routes} from '@angular/router';
import {DetailsComponent} from './details/details.component';

export const routes:Routes=[
{path:'',redirectTo:'/home',pathMatch:'full'},
{path:'home',component:UserComponent},
{path:'home/:id',component:DetailsComponent},
{path:'addUser',component:NewUserComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
 
  ],

  bootstrap: [AppComponent],
  providers:[UserService],
})
export class AppModule { }
