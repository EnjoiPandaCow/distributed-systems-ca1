import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent} from "./components/home/home.component";
import { DashboardComponent} from "./components/dashboard/dashboard.component";

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
    component: DashboardComponent
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