import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuBarComponent } from "./menu-bar/menu-bar.component";
import { FooterComponent } from "./footer/footer.component";
import { ProductosService } from './productos.service';
import { Producto } from './producto.interface';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, MenuBarComponent, FooterComponent],
    providers: [ProductosService]
})
export class AppComponent implements OnInit{
  title = 'Factory App';
  productos: Producto[] = [];

  constructor(private productosService: ProductosService) {}

  ngOnInit() {
    this.productosService.obtenerProductos().subscribe(productos => {
      this.productos = productos;
    });
  }

}
