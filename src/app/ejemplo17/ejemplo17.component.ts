import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ejemplo17',
  templateUrl: './ejemplo17.component.html',
  styleUrls: ['./ejemplo17.component.css']
})
export class Ejemplo17Component implements OnInit {
  public elId = '';
  constructor(activateRoute:ActivatedRoute) { 
    this.elId = activateRoute.snapshot.params['id'];
  }

  ngOnInit() {
  }

}
