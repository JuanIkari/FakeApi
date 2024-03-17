import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ListaProductosI } from '../../modelos/listaProductos.interface';
import { Observable } from 'rxjs';
import { ProductoI } from '../../modelos/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url:string = "https://api.escuelajs.co/api/v1"

  constructor(private http:HttpClient) { }

  getProducts():Observable<ListaProductosI[]>{ 
    return this.http.get<ListaProductosI[]>(`${this.url}/products`)
  }

  getProductById(id:string):Observable<ProductoI>{
    return this.http.get<ProductoI>(`${this.url}/products/${id}`)
  }

  putProducto(form:ProductoI):Observable<Response>{
    return this.http.put<Response>(`${this.url}/products/${form.id}`, form)
  }

  deleteProducto(from:ProductoI):Observable<Response>{
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: from,
    };
    return this.http.delete<Response>(`${this.url}/products/${from.id}`, options)
  }

  postProducto(form:ProductoI):Observable<Response>{
    return this.http.post<Response>(`${this.url}/products/`, form)
  }

}
