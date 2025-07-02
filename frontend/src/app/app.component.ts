import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './taks/shared/footer/footer.component';
import { HeaderComponent } from './taks/shared/header/header.component';

@Component({
  selector: 'app-root',
  // ACA IMPORTAR LOS COMPONENTES " HEADER, MAIN, FOOTER, ETC."
  imports: [RouterOutlet, FooterComponent, HeaderComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
