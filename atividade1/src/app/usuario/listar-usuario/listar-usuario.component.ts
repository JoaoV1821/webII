import { Component } from '@angular/core';

@Component({
  selector: 'listar-usuario',
  standalone: false,
  templateUrl: './listar-usuario.component.html',
  styleUrl: './listar-usuario.component.css'
})
export class ListarUsuarioComponent {

  users = [

    {id: 1,  nome: "User 1", idade: 18},
    {id: 2,  nome: "User 2", idade: 19},
    {id: 3,  nome: "User 3", idade: 20}

  ]
  constructor () {
    
  }


}
