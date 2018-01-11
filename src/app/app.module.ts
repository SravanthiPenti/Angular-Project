import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserService } from './user/user.service';
import {RouterModule,Routes} from '@angular/router';
import {DetailsComponent} from './details/details.component';
import {NewUserComponent} from './NewUser/newuser.component';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {UserData} from './userdata';
import {MatInputModule,MatButtonModule,MatSelectModule,MatIconModule,MatDialogModule} from '@angular/material';
import {DeleteComponent} from './user/delete.component';

export const routes:Routes=[
{path:'',redirectTo:'/home',pathMatch:'full'},
{path:'home',component:UserComponent},
{path:'home/:id',component:DetailsComponent},
{path:'addUser',component:NewUserComponent},
{path:'delete',component:DeleteComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DetailsComponent,
    NewUserComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
HttpClientInMemoryWebApiModule.forRoot(UserData,{dataEncapsulation:false}),

  HttpClientModule,
  MatInputModule,
  MatButtonModule,
  MatSelectModule,
  MatIconModule,
  MatDialogModule
 
  ],

  bootstrap: [AppComponent],
  providers:[UserService],
})
export class AppModule { }
