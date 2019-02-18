import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SgeneradorNumerosService {

  constructor() { }

  obtenerNumeros(cantidadAgenerar:number){
    const listaNumeros = []
    for(let i = 0;i<cantidadAgenerar;i++){
      listaNumeros.push(Math.round(Math.random()*10));
    }
    return listaNumeros;
  }
  obtenerNumerosObservable(cantidad:number):Observable<any>{
   
    return new Observable((observe)=>{
      if(cantidad<0){
        observe.error('No puedes usar una cantidad negativa')
      }
      for(let i = 0;i<cantidad;i++){
        const aleaotorio = Math.round((Math.random()*49)+1);
        observe.next(aleaotorio);
      }
      observe.complete()
    })


    
  }
}
