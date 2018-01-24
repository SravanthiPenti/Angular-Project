import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {UserComponent} from '../user/user.component';
import {EditDetailsComponent} from '../Edit-Details/edit-details.component';
import {NewUserComponent} from '../NewUser/newuser.component';
import {DeleteUserComponent} from '../user/user.component';
import {ShowUserComponent} from '../user/user.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: UserComponent },
  { path: 'home/:id', component: EditDetailsComponent },
  { path: 'addUser', component: NewUserComponent },

]
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule],
    entryComponents: [DeleteUserComponent, UserComponent, ShowUserComponent],
})
export class AppRouterModule{}
export const routingComponents=[UserComponent,EditDetailsComponent,NewUserComponent,DeleteUserComponent,ShowUserComponent];