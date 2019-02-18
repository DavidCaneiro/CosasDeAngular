import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo19',
  templateUrl: './ejemplo19.component.html',
  styleUrls: ['./ejemplo19.component.css']
})
export class Ejemplo19Component implements OnInit {

  public num1:number
  public num2:number
  public resultado:number
  constructor() { }

  ngOnInit() {
  }

  dividir(){
    this.resultado = this.num1 / this.num2;
  }
}
