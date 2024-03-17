import { Component } from '@angular/core';
import { ApiService } from '../../servicios/api/api.service';
import { Router } from '@angular/router';

import { ListaProductosI } from '../../modelos/listaProductos.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  
  productos: ListaProductosI[] = []
  
  constructor(private api:ApiService, private router:Router) {}
  
  ngOnInit(){
    this.api.getProducts().subscribe((data) => {
      this.productos = data;
    })
  }

  editarProducto(id: number){
    this.router.navigate(['editar', id]);
  }

  nuevoProducto(){ 
    this.router.navigate(['nuevo']);
  }
}
