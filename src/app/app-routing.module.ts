import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { VehicleComponent } from "./components/vehicle/vehicle.component";
import { DriverComponent } from "./components/driver/driver.component";
import { OwnerComponent } from "./components/owner/owner.component";
import { CreateOwnerComponent } from './components/owner/create-owner/create-owner.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'vehicle',
    component: VehicleComponent
  },
  {
    path: 'vehicle/create',
    component: VehicleComponent
  },
  {
    path: 'driver',
    component: DriverComponent
  },
  {
    path: 'owner',
    component: OwnerComponent
  },
  {
    path: 'owner-create',
    component: CreateOwnerComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
