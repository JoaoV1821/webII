import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SomaComponent } from './pages/soma';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, SomaComponent],
  templateUrl: './app.component.html',

  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'soma';
}
