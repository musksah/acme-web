import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-owner',
  templateUrl: './create-owner.component.html',
  styleUrls: ['./create-owner.component.css']
})
export class CreateOwnerComponent implements OnInit {

  checkoutForm;

  constructor(private formBuilder: FormBuilder,
  ) {
    this.checkoutForm = this.formBuilder.group({
      dni_id: '',
      first_name: '',
      middle_name: '',
      surnames: '',
      address: '',
      phone_number: '',
      city: ''
    });
  }

  ngOnInit(): void {
  }

  onSubmit(value:any){
    
  }

}
