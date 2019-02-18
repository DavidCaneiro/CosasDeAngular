import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo4',
  templateUrl: './ejemplo4.component.html',
  styleUrls: ['./ejemplo4.component.css']
})
export class Ejemplo4Component implements OnInit {
  contador = 0
  constructor() { }

  ngOnInit() {
  }
incrementar(){
  this.contador ++
}
esPrimo(){
  let numeroPrimo = true
  for(let i = 1; i<this.contador;i++){
    if(this.contador / i === Math.round(this.contador/i) && i!==1 && i!== this.contador){
      numeroPrimo = false
      break;
    }
  }
  return numeroPrimo
}
}
