import { Component, OnInit } from '@angular/core';
import { Environment } from '../../../environments/environment.model';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  env: Environment = environment;

  ngOnInit(): void {
    console.log(this.env.color.secondary_color)
  }
}
