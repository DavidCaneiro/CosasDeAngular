import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';

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
    if(this.num2===0){
      this.resultado=0
      throw new Error('No puedes dividir por 0')
    }else{
      this.resultado = this.num1 / this.num2;
    }
  }
}
