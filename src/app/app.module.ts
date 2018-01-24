import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserService } from './service/user.service';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatDialogModule, MatGridListModule, MatDatepickerModule, MatNativeDateModule} from '@angular/material';
import { AppRouterModule } from './router/app-router.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastOptions } from 'ng2-toastr/src/toast-options';
import { routingComponents } from './router/app-router.module';
import { SearchPipe } from './search/search.pipe';

@NgModule({
	declarations: [
		AppComponent,
		SearchPipe,
		routingComponents
	],
	imports: [
		BrowserModule,
		FormsModule,
		AppRouterModule,
		HttpClientModule,
		MatInputModule,
		MatButtonModule,
		MatSelectModule,
		MatIconModule,
		MatDialogModule,
		BrowserAnimationsModule,
		MatGridListModule,
		MatDatepickerModule,
		MatNativeDateModule,
		ToastModule.forRoot(),

	],

	bootstrap: [AppComponent],
	providers: [UserService],
})
export class AppModule { }
