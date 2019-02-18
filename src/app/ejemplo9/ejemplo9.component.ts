import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo9',
  templateUrl: './ejemplo9.component.html',
  styleUrls: ['./ejemplo9.component.css']
})
export class Ejemplo9Component implements OnInit {

  public nombre
  public mail
  constructor() { }

  ngOnInit() {
  }
  onSubmit(){
    alert('Voy a enviar el fromulario al backend ' + this.nombre+ '  ' + this.mail)
    // validamos el formulario (validar en el cliente)
    // nos comunicamos con el backend(enviamos los datos)
  }

}
