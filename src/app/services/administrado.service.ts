import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Expediente } from '../models/expediente.model';
import { Observable } from 'rxjs';
import { Administrado } from '../models/administrado.model';
//Controlador Aministrado
const baseUrl= 'http://localhost:8090/rest/administrado'

@Injectable({
  providedIn: 'root'
})
export class AdministradoService {

  constructor(private http:HttpClient) { }

  create(data:Administrado):Observable<any>{
    return this.http.post(baseUrl,data);
  }
}
