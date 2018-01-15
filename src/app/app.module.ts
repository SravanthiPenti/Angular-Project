import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserService } from './user/user.service';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { NewUserComponent } from './NewUser/newuser.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { UserData } from './userdata';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatDialogModule,MatGridListModule } from '@angular/material';

import { DeleteUserComponent } from './user/user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastOptions } from 'ng2-toastr/src/toast-options';

import {ShowUserComponent} from './user/user.component';
import {SearchPipe} from './search/search.pipe';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: UserComponent },
  { path: 'home/:id', component: DetailsComponent },
  { path: 'addUser', component: NewUserComponent },

]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DetailsComponent,
    NewUserComponent,

    DeleteUserComponent,
    ShowUserComponent,
    // DeleteMessageComponent
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientInMemoryWebApiModule.forRoot(UserData, { dataEncapsulation: false }),

    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatGridListModule,
    ToastModule.forRoot(),

  ],
  entryComponents: [DeleteUserComponent, UserComponent,ShowUserComponent],

  bootstrap: [AppComponent],
  providers: [UserService],
})
export class AppModule { }
