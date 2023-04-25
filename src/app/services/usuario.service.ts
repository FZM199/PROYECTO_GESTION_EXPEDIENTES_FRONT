import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Usuario } from '../models/usuario.model';
import { Observable } from 'rxjs';

const baseUrlUsuario = 'http://localhost:8090/rest/usuario'
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor(private http:HttpClient) { }

  create(data:Usuario):Observable<any>{
    return this.http.post(baseUrlUsuario,data);
  }

}
