import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo2',
  templateUrl: './ejemplo2.component.html',
  styleUrls: ['./ejemplo2.component.css']
})
export class Ejemplo2Component implements OnInit {
  public contador = 0
  constructor() {
    this.contador ++ }

  ngOnInit() {
  }
incrementar(){
  console.log('incremento')
}
capturaPulsacion($evento){
  console.log($evento.x,',',$evento.y)
}

}
