import { Component } from '@angular/core';
import { MultService } from '../../services/mult.service';

@Component({
  selector: 'app-multiplicacao',
  standalone: true,
  imports: [],
  templateUrl: './multiplicacao.component.html',
  styleUrl: './soma.component.css'
})



export class SomaComponent {

  result: number = 0;
 
  constructor(public multService: MultService) {

 
  } 
 
  multButton(numero1: string, numero2: string) {
    let num1: number;
    let num2: number;

    num1 = parseFloat(numero1)
    num2 = parseFloat(numero2)

    this.result = this.multService.multiplicar(num1, num2)
    

  }


}
