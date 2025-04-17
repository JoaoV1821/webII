import { Component } from '@angular/core';
import { DivService } from '../../services/div.service';

@Component({
  selector: 'app-divisao',
  imports: [],
  templateUrl: './divisao.component.html',
  styleUrl: './divisao.component.css'
})
export class DivisaoComponent {

  result: number = 0;
 
  constructor(public divService: DivService) {

 
  } 
 
  divButton(numero1: string, numero2: string) {
    let num1: number;
    let num2: number;

    num1 = parseFloat(numero1)
    num2 = parseFloat(numero2)

    this.result = this.divService.div(num1, num2)
    

  }


}
