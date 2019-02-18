import { Component, OnInit } from '@angular/core';
import { SgeneradorNumerosService } from '../sgenerador-numeros.service';

@Component({
  selector: 'app-ejemplo14',
  templateUrl: './ejemplo14.component.html',
  styleUrls: ['./ejemplo14.component.css']
})
export class Ejemplo14Component implements OnInit {

  public cantidad:number = 5
  public numeros = []
  
  constructor(private generadorNumeros:SgeneradorNumerosService) { }

  ngOnInit() {
  }
  generarNumerosMal(){
   this.numeros = this.generadorNumeros.obtenerNumeros(this.cantidad);  

  } 
  generarNumerosObservable(){
    this.numeros = []
    this.generadorNumeros.obtenerNumerosObservable(this.cantidad).subscribe(
      response =>{ // cuando me llegan cosas
        console.log('Llega...', response)
        this.numeros.push(response)
      },
      error =>{ // cuando hay un error
        alert(error)
      },
      ()=>{ // cuando se termina
        console.log('Hemos terminado de obtener todos los numeros')
      }
    );
  }
}
