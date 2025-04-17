import { Component } from '@angular/core';
import { SubService } from '../../services/sub.service';

@Component({
  selector: 'app-subtracao',
  imports: [],
  templateUrl: './subtracao.component.html',
  styleUrl: './subtracao.component.css'
})
export class SubtracaoComponent {

  result: number = 0;
 
  constructor(public subService: SubService) {

 
  } 
 
  subButton(numero1: string, numero2: string) {
    let num1: number;
    let num2: number;

    num1 = parseFloat(numero1)
    num2 = parseFloat(numero2)

    this.result = this.subService.sub(num1, num2)
    

  }


}
