import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Owner } from '../components/owner/owner.component';

const API_URL = environment.baseApi + '/owners';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any[]>{
    return this.http.get<any[]>(API_URL);
  }

  create(owner:Owner): Observable<any[]>{
    return this.http.post<any[]>(API_URL, owner);
  }

}
