import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/Usuario';

@Component({
  selector: 'app-ejemplo15',
  templateUrl: './ejemplo15.component.html',
  styleUrls: ['./ejemplo15.component.css']
})
export class Ejemplo15Component implements OnInit {

  public usuario:Usuario;
 
  constructor() {
    this.usuario = {
      nombre:'Ana',
      isAdmin: true,
      ciudad: 'Vigo'
    }
   }
  
  ngOnInit() {
  }

}
