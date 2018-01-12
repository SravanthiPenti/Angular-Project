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
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatDialogModule } from '@angular/material';
import { DeleteComponent } from './user/delete.component';
import { DeleteUserComponent } from './user/user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastOptions } from 'ng2-toastr/src/toast-options';
import { CustomOption } from './toaster/toaster.component';
import {ShowUserComponent} from './user/user.component';

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
    ShowUserComponent
    // DeleteMessageComponent
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
    ToastModule.forRoot(),

  ],
  entryComponents: [DeleteUserComponent, UserComponent,ShowUserComponent],

  bootstrap: [AppComponent],
  providers: [UserService,
    {provide: ToastOptions, useClass: CustomOption},],
})
export class AppModule { }
