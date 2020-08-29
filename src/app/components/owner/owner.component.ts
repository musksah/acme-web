import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { OwnerService } from '../../services/owner.service';

export interface Owner {
  dni_id: number;
  first_name: string;
  middle_name: string;
  surnames: string;
  address: string
  phone_number: string
  city: string;
}

// const ELEMENT_DATA: Owner[] = [
//   { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
//   { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
//   { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
//   { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
//   { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
//   { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
//   { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
//   { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
//   { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
//   { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
// ];


@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent implements OnInit {
  displayedColumns: string[] = ['dni_id', 'first_name', 'middle_name', 'surnames', 'address', 'phone_number', 'city'];
  dataSource: Owner[] = [];
  checkoutForm;

  constructor(private formBuilder: FormBuilder, private _ownerService: OwnerService
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
    this._ownerService.getAll().subscribe(
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
