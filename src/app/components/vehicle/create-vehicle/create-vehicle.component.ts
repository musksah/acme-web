import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { VehicleService } from 'src/app/services/vehicle.service';
import { DriverService } from 'src/app/services/driver.service';
import { OwnerService } from 'src/app/services/owner.service';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent implements OnInit {

  checkoutForm;
  submited: boolean = false;
  listDrivers: any = [];
  listOwners: any = [];

  constructor(
    private formBuilder: FormBuilder,
    private _vehicleService: VehicleService,
    private _driverService: DriverService,
    private _ownerService: OwnerService,
    private _router: Router
  ) {
    this.checkoutForm = this.formBuilder.group({
      plate: [null, [Validators.required]],
      color: [null, [Validators.required]],
      brand: [null, [Validators.required]],
      type_vehicle: [null, [Validators.required]],
      owner_id: [null, [Validators.required]],
      driver_id: [null, [Validators.required]],
    });
  }
  ngOnInit(): void {
    this.getDrivers();
    this.getOwners();
  }

  getDrivers() {
    this._driverService.getAll().subscribe(
      (resp: any) => {
        this.listDrivers = resp.data;
        console.log(resp);
      },
      (error) => {
        console.log(error);
      });
  }

  getOwners() {
    this._ownerService.getAll().subscribe(
      (resp: any) => {
        this.listOwners = resp.data;
        console.log(resp);
      },
      (error) => {
        console.log(error);
      });
  }



  get f() { return this.checkoutForm.controls; };

  onSubmit(value: any) {
    console.log("insertando vehículo");
    console.log(value);
    
    this.submited = true;
    if (this.checkoutForm.valid) {
      this._vehicleService.create(value).subscribe(
        (resp) => {
          this._router.navigate(['/vehicle']);
          console.log(resp);
        },
        (error) => {
          console.log(error);
        }
      )
    } else {
      console.log("hay errores");
      return;
    }
  }

}
