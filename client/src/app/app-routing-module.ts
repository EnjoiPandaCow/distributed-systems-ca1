import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent} from "./components/home/home.component";
import { DashboardComponent} from "./components/dashboard/dashboard.component";
import { RegisterComponent} from "./components/register/register.component";
import { LoginComponent} from "./components/login/login.component";
import { ProfileComponent} from "./components/profile/profile.component";
import { ReservationComponent} from "./components/reservation/reservation.component";
import { EditReservationComponent} from "./components/reservation/edit-reservation/edit-reservation.component";
import { AuthGuard} from "./guards/auth.guard";
import { NotAuthGuard} from "./guards/notAuth.guard";


// Array of objects each object being each route.
const appRoutes: Routes = [
  // Home page or default route.
  {
    path: '',
    // Injecting the home component to this route.
    component: HomeComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [NotAuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [NotAuthGuard]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'reservation',
    component: ReservationComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'edit-reservation/:id',
    component: EditReservationComponent,
    canActivate: [AuthGuard]
  },
  // When ever there is a route that is accessed that is not defined.
  { path: '**', component: HomeComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
