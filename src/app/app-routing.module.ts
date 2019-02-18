import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Ejemplo1Component } from './ejemplo1/ejemplo1.component';
import { Ejemplo2Component } from './ejemplo2/ejemplo2.component';
import { Ejemplo3Component } from './ejemplo3/ejemplo3.component';
import { Ejemplo4Component } from './ejemplo4/ejemplo4.component';
import { Ejemplo5Component } from './ejemplo5/ejemplo5.component';
import { Ejemplo6Component } from './ejemplo6/ejemplo6.component';
import { Ejemplo7Component } from './ejemplo7/ejemplo7.component';
import { Ejemplo8Component } from './ejemplo8/ejemplo8.component';
import { Ejemplo9Component } from './ejemplo9/ejemplo9.component';
import { Ejemplo10Component } from './ejemplo10/ejemplo10.component';
import { Ejemplo11Component } from './ejemplo11/ejemplo11.component';
import { Ejemplo12PadreComponent } from './ejemplo12-padre/ejemplo12-padre.component';
import { Ejemplo13HijoComponent } from './ejemplo13-hijo/ejemplo13-hijo.component';
import { Ejemplo13PadreComponent } from './ejemplo13-padre/ejemplo13-padre.component';
import { Ejemplo14Component } from './ejemplo14/ejemplo14.component';
import { Ejemplo15Component } from './ejemplo15/ejemplo15.component';
import { Ejemplo17Component } from './ejemplo17/ejemplo17.component';
import { Ejemplo18Component } from './ejemplo18/ejemplo18.component';
import { Ejemplo19Component } from './ejemplo19/ejemplo19.component';


const routes: Routes = [
  {path:'ejemplo1',component:Ejemplo1Component},
  {path:'ejemplo2',component:Ejemplo2Component},
  {path:'ejemplo3',component:Ejemplo3Component},
  {path:'ejemplo4',component:Ejemplo4Component},
  {path:'ejemplo5',component:Ejemplo5Component},
  {path:'ejemplo6',component:Ejemplo6Component},
  {path:'ejemplo7',component:Ejemplo7Component},
  {path:'ejemplo8',component:Ejemplo8Component},
  {path:'ejemplo9',component:Ejemplo9Component},
  {path:'ejemplo10',component:Ejemplo10Component},
  {path:'ejemplo11',component:Ejemplo11Component},
  {path:'ejemplo12padre',component:Ejemplo12PadreComponent},
  {path:'ejemplo13padre',component:Ejemplo13PadreComponent},
  {path:'ejemplo13hijo',component:Ejemplo13HijoComponent},
  {path:'ejemplo14',component:Ejemplo14Component},
  {path:'ejemplo15',component:Ejemplo15Component},
  {path:'ejemplo16',loadChildren:'./ejemplo16m/ejemplo16m.module#Ejemplo16mModule'},
  {path:'ejemplo17/:id',component:Ejemplo17Component},
  {path:'ejemplo18',component:Ejemplo18Component},
  {path:'ejemplo19',component:Ejemplo19Component}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
