import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { OwnerService } from 'src/app/services/owner.service';

@Component({
  selector: 'app-create-owner',
  templateUrl: './create-owner.component.html',
  styleUrls: ['./create-owner.component.css']
})
export class CreateOwnerComponent implements OnInit {

  checkoutForm;
  submited: boolean = false;

  constructor(
    private formBuilder: FormBuilder, 
    private _ownerService: OwnerService,
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

  get f() { return this.checkoutForm.controls; };

  ngOnInit(): void {

  }

  onSubmit(value: any) {
    this.submited = true;
    console.log('Creando Propietario');
    if (this.checkoutForm.valid){
      this._ownerService.create(value).subscribe(
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

}
