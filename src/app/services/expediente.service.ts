import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Expediente } from '../models/expediente.model';
import { Observable } from 'rxjs';

//Controlador Aministrado
const baseUrl= 'http://localhost:8090/rest/expediente'

@Injectable({
  providedIn: 'root'
})
export class ExpedienteService {

  constructor(private http:HttpClient) { }

  listaExpediente1(partida:string):Observable<any>{
    const params = new HttpParams().set("Partida",partida);
    return this.http.get<any>(baseUrl + '/ByPartidawithParamaters',{params});
  }
  listaExpediente2(año:number,numero:number):Observable<any>{
    const params = new HttpParams().set("Año",año).set("Numero",numero);
    return this.http.get<any>(baseUrl+'/ByNumeroAndAñoWithParamaters',{params});
  }
  create(data:Expediente):Observable<any>{
    return this.http.post(baseUrl,data);
  }
}
