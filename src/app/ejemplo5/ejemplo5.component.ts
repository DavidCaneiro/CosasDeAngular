import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo5',
  templateUrl: './ejemplo5.component.html',
  styleUrls: ['./ejemplo5.component.css']
})
export class Ejemplo5Component implements OnInit {
  public nombre:string;
  constructor() { 
    this.nombre = 'porDefecto'
  }

  ngOnInit() {
  }

}
