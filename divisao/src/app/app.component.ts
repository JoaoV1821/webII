import { Component } from '@angular/core';

import { DivisaoComponent } from "./pages/divisao/divisao.component";

@Component({
  selector: 'app-root',
  imports: [DivisaoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'divisao';
}
