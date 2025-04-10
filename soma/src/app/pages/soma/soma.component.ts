import { Component } from '@angular/core';
import { SomaService } from '../../services/soma.service';

@Component({
  selector: 'app-soma',
  standalone: true,
  imports: [],
  templateUrl: './soma.component.html',
  styleUrl: './soma.component.css'
})



export class SomaComponent {

  result: number = 0;
 
  constructor(public somaService: SomaService) {

 
  } 
 
  somaButton(numero1: string, numero2: string) {
    let num1: number;
    let num2: number;

    num1 = parseFloat(numero1)
    num2 = parseFloat(numero2)

    this.result = this.somaService.somar(num1, num2)
    

  }


}
