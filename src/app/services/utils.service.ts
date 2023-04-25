import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Administrado } from '../models/administrado.model';
import { Usuario } from '../models/usuario.model';
import { Estad } from '../models/estad.model';
import { Ah } from '../models/ah.model';

const Url= 'http://localhost:8090/rest/util'
const UrlAdministrado= Url + '/administrado'
const URLUsuario=Url + '/usuario'
const URLEstado=Url+'/estado'
const URLAh= Url + '/ah'

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private http:HttpClient) { }

  listaAdministrado():Observable<Administrado[]>{
    return this.http.get<Administrado[]>(UrlAdministrado);
  }
  listaUsuario():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(URLUsuario);
  }
  listaEstado():Observable<Estad[]>{
    return this.http.get<Estad[]>(URLEstado);
  }
  listaAH():Observable<Ah[]>{
    return this.http.get<Ah[]>(URLAh);
  }
}
