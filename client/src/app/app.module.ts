import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from "@angular/forms";
import { ReactiveFormsModule} from "@angular/forms";
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing-module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthService} from "./services/auth.service";
import { ReservationService} from "./services/reservation.service";
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FlashMessagesModule, FlashMessagesService} from "angular2-flash-messages";
import { AuthGuard } from "./guards/auth.guard";
import { NotAuthGuard } from "./guards/notAuth.guard";
import { ReservationComponent} from "./components/reservation/reservation.component";
import { EditReservationComponent } from './components/reservation/edit-reservation/edit-reservation.component';
import {DatePipe} from "@angular/common";
import { DeleteReservationComponent } from './components/reservation/delete-reservation/delete-reservation.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DashboardComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    ReservationComponent,
    EditReservationComponent,
    DeleteReservationComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    FlashMessagesModule
  ],
  providers: [
    [AuthService, AuthGuard, NotAuthGuard, ReservationService, DatePipe],
    [FlashMessagesService]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
