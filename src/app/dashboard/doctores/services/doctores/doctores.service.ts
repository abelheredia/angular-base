import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { DoctorInsert } from '../../interfaces/doctor';

@Injectable({
  providedIn: 'root',
})
export class DoctoresService {
  constructor(private http: HttpClient) {}

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': 'POST, OPTIONS, GET',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Origin': '*',
  });

  getDoctores(): any {
    return this.http
      .get('http://localhost:5000/api/plataforma/usuario')
      .pipe(map((data) => data));
  }

  insertDoctor(d: DoctorInsert): any {
    return this.http.post(
      'http://localhost:5000/api/plataforma/usuario/create',
      d,
      { headers: this.headers }
    );
  }
}
