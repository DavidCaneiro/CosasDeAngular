import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo3',
  templateUrl: './ejemplo3.component.html',
  styleUrls: ['./ejemplo3.component.css']
})
export class Ejemplo3Component implements OnInit {

  nombres:string[]
  constructor() { 
    this.nombres = ['angel','bea','pepe']
  }

  ngOnInit() {
  }

}
