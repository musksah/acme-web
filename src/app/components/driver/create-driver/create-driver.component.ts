import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DriverService } from 'src/app/services/driver.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-driver',
  templateUrl: './create-driver.component.html',
  styleUrls: ['./create-driver.component.css']
})
export class CreateDriverComponent implements OnInit {

  checkoutForm;
  submited: boolean = false;

  constructor(
    private formBuilder: FormBuilder, 
    private _driverService: DriverService,
    private _router:Router
  ) {
    this.checkoutForm = this.formBuilder.group({
      dni_id: [null, [Validators.required]],
      first_name: [null, [Validators.required]],
      middle_name: ["", []],
      surnames: [null, [Validators.required]],
      address: [null, [Validators.required]],
      phone_number: [null, [Validators.required]],
      city: [null, [Validators.required]]
    });
  }

  ngOnInit(): void {
    
  }

  onSubmit(value: any) {
    this.submited = true;
    console.log('Creando Propietario');
    if (this.checkoutForm.valid){
      this._driverService.create(value).subscribe(
        (resp) => {
          this._router.navigate(['/owner']);
          console.log(resp);
        },
        (error) => {
          console.log(error);
        }
      )
    }else{
      console.log("hay errores");
      return;
    } 
  }

  get f() { return this.checkoutForm.controls; }

}
