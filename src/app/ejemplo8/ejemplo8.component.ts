import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo8',
  templateUrl: './ejemplo8.component.html',
  styleUrls: ['./ejemplo8.component.css']
})
export class Ejemplo8Component implements OnInit {
  resultado = 0
  //num1= 0
  //num2= 0
  constructor() { }

  ngOnInit() {
  }

//  realizarSuma(){
  //  this.resultado = Number(this.num1) +Number(this.num2)
  //}
  realizarSuma(numero1,numero2){
    this.resultado = Number(numero1) +Number(numero2)
  }
}
