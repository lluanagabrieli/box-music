import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Environment } from '../environments/environment.model';
import { environment } from '../environments/environment';
import { Title } from '@angular/platform-browser';
import { ExternoComponent } from './externo/externo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ExternoComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  env: Environment = environment;
  titleService = inject(Title);

  ngOnInit(): void {
    this.titleService.setTitle(this.env.nomeAba);
  }
}
