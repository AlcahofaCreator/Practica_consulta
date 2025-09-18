import { Component, OnInit } from '@angular/core';
import { Producto } from '../modelos/producto';
import { ProductoService } from '../servicios/producto';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-catalogo',
  imports: [NgForOf],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css'
})
export class CatalogoComponent implements OnInit {
  productos: Producto[] = [];
  constructor(private productoService: ProductoService){}
  ngOnInit(): void {
    this.productoService.getProductos().subscribe(data => {
      this.productos = data;
    });
  }
}
