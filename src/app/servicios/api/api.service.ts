import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ListaProductosI } from '../../modelos/listaProductos.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url:string = "https://api.escuelajs.co/api/v1"

  constructor(private http:HttpClient) { }

  getProducts():Observable<ListaProductosI[]>{ 
    return this.http.get<ListaProductosI[]>(`${this.url}/products`)
  }
}
