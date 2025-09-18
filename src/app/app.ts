import { Component, signal } from '@angular/core';
import { CatalogoComponent } from "./catalogo/catalogo";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CatalogoComponent, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('mi-proyecto');
}
