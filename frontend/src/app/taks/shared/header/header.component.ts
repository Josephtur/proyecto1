import { Component } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';            // Módulo de toolbar de PrimeNG
import { ButtonModule } from 'primeng/button';              // Módulo de botones de PrimeNG
import { RippleModule } from 'primeng/ripple';              // Módulo para efecto ripple en botones

@Component({
  selector: 'app-header',
    imports: [                         // Módulos de PrimeNG que utiliza este componente
    ToolbarModule,
    ButtonModule,
    RippleModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

 }
