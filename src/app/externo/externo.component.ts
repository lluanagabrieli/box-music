import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-externo',
  standalone: true,
  imports: [
    HomeComponent
  ],
  templateUrl: './externo.component.html',
  styleUrl: './externo.component.css'
})
export class ExternoComponent {

}
