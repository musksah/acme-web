import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Vehicle } from '../components/vehicle/vehicle.component';

const API_URL = environment.baseApi + '/vehicles';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any[]>{
    return this.http.get<any[]>(API_URL);
  }

  create(vehicle:Vehicle): Observable<any[]>{
    return this.http.post<any[]>(API_URL, vehicle);
  }
}
