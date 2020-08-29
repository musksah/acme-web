import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';
import { FormBuilder } from '@angular/forms';
import { Owner } from '../owner/owner.component';

export interface Vehicle {
  plate: string;
  color: string;
  brand: string;
  type_vehicle: string;
  owner_id: number,
  driver_id: number,
  driver:Owner,
  owner:Owner
}

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {
  displayedColumns: string[] = ['plate', 'brand', 'driver.first_name', 'driver.surnames', 'owner.first_name', 'owner.surnames'];
  dataSource: Vehicle[] = [];
  checkoutForm;

  constructor(private formBuilder: FormBuilder, private _vehicleService: VehicleService) { }

  ngOnInit() {
    this._vehicleService.getAll().subscribe(
      (resp: any) => {
        console.log('Trayendo la información del propietario');
        this.dataSource = resp.data;
        console.log(resp);
      },
      (error) => {
        console.log(error);
      });
  }

}
