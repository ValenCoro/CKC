import { Injectable } from '@angular/core';
import { Carrito } from '../interfaces/carrito';
import { Producto } from '../interfaces/productos';
import { PerfilService } from './perfil.service';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  
  constructor(private perfilService: PerfilService) {
    const memoria = localStorage.getItem('carrito');
    if(memoria) {
      this.carrito = JSON.parse(memoria);
      this.calcularTotal();
    };
   } 

  carrito:Carrito[] = []
  totalCarrito: number = 0;

  agregarProducto(producto:Producto, cantidad:number){
    const index = this.carrito.findIndex(item => item.producto.id === producto.id);
    if(index > -1) {
      this.carrito[index].cantidad++; 
    }
    else {
      this.carrito.push({
        producto: producto,
        cantidad: cantidad
      });
    }
    this.actualizarLocalstorage();
    this.calcularTotal();
  }

  modificarCantidadProducto(idProducto:number, cantidadACambiar: number){
    const index = this.carrito.findIndex(item => item.producto.id === idProducto);
    if(index > -1) {
      this.carrito[index].cantidad = cantidadACambiar; 
    }
    this.actualizarLocalstorage(); 
    this.calcularTotal();
  }

  eliminarProducto(id:number){
    this.carrito = this.carrito.filter(item => item.producto.id !== id);
    this.actualizarLocalstorage(); 
    this.calcularTotal();
  }

  limpiarCarrito(){
    this.carrito = [];
    this.actualizarLocalstorage();
    this.calcularTotal();
  }

  actualizarLocalstorage(){
    localStorage.setItem('carrito',JSON.stringify(this.carrito))
  }

  calcularTotal(){
    this.totalCarrito = 0;
    this.carrito.forEach(item => {
      this.totalCarrito = this.totalCarrito + item.producto.precio * item.cantidad;
    })
  }

  generarMensaje() {
  const primeraParte = "https://wa.me/+543412257427?text=";

 
  let parteProductos = '';
  this.carrito.forEach(itemCarrito => {
     parteProductos += `* ${itemCarrito.producto.nombre} - ${itemCarrito.cantidad}\n`;
    });
    

  
  const perfil = this.perfilService.getPerfil();

  
  const ultimaParte = `Se realizó el siguiente pedido:
  Productos:
  ${parteProductos}
  Total: $${this.totalCarrito}
  Dirección de envío: ${perfil.direccion}
  Nombre: ${perfil.nombreCompleto}
  Número telefónico: ${perfil.celular}
  Fecha de nacimiento: ${perfil.fechaNacimiento}`;

  
  return encodeURI(primeraParte + ultimaParte);
}

}
