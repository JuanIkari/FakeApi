import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductoI } from '../../modelos/producto.interface';
import { ApiService } from '../../servicios/api/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css',
})
export class EditarComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private api: ApiService
  ) {}

  datosProducto: ProductoI = { id: "", title: '', price: '0', description: '', categoryId: '', images: []};

  editarForm = new FormGroup({
    id: new FormControl(),
    title: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl(''),
  });

  ngOnInit() {
    let productoId = this.route.snapshot.paramMap.get('id');
    if (productoId !== null) {
      this.api.getProductById(productoId).subscribe((data) => {
        this.editarForm.setValue({
          id: data.id,
          title: data.title,
          price: data.price,
          description: data.description,
        });
      });
    } else {
      console.error('No se encontró el parámetro "id" en la URL.');
    }
  }

  postForm(form: any) {
    this.api.putProducto(form).subscribe((data) => {
      console.log(data);
    });
  }

  eliminar() {
    let datos: any = this.editarForm.value;
    this.api.deleteProducto(datos).subscribe((data) => {
      console.log(data);
    });
  }

  salir(){
    this.router.navigate(['dashboard']);
  }
}
