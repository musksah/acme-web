import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DriverService } from 'src/app/services/driver.service';
import { Owner } from '../owner/owner.component';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {

  displayedColumns: string[] = ['dni_id', 'first_name', 'middle_name', 'surnames', 'address', 'phone_number', 'city'];
  dataSource: Owner[] = [];
  checkoutForm;

  constructor(private formBuilder: FormBuilder, private _driveService: DriverService
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

  ngOnInit() {
    this._driveService.getAll().subscribe(
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
