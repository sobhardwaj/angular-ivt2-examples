import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { HeaderComponent } from './components/header/header.component'
import { UsersModule } from './components/users/users.module'
import { LoginComponent } from './components/auth/login/login.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AlertModule } from './modules/alert/alert.module'
import { AlertService } from './modules/alert/alert.service'
import { RegisterComponent } from './components/auth/register/register.component'
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [AppComponent, DashboardComponent, HeaderComponent, LoginComponent, RegisterComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AlertModule,
    // UsersModule must be before AppRoutingModule,
    // otherwise userroutes are overwritten by '**'.
    UsersModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    // LoggedInAuthGuard,
    // AdminRoleAuthGuard,
    AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
