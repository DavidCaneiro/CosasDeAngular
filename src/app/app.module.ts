import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
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
import { MayusParesPipe } from './mayus-pares.pipe';
import { Ejemplo11Component } from './ejemplo11/ejemplo11.component';
import { Ejemplo12PadreComponent } from './ejemplo12-padre/ejemplo12-padre.component';
import { Ejemplo12HijoComponent } from './ejemplo12-hijo/ejemplo12-hijo.component';
import { Ejemplo13PadreComponent } from './ejemplo13-padre/ejemplo13-padre.component';
import { Ejemplo13HijoComponent } from './ejemplo13-hijo/ejemplo13-hijo.component';
import { Ejemplo14Component } from './ejemplo14/ejemplo14.component';
import { Ejemplo15Component } from './ejemplo15/ejemplo15.component';
import { Ejemplo17Component } from './ejemplo17/ejemplo17.component';
import { Ejemplo18Component } from './ejemplo18/ejemplo18.component';
import { Ejemplo19Component } from './ejemplo19/ejemplo19.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    Ejemplo1Component,
    Ejemplo2Component,
    Ejemplo3Component,
    Ejemplo4Component,
    Ejemplo5Component,
    Ejemplo6Component,
    Ejemplo7Component,
    Ejemplo8Component,
    Ejemplo9Component,
    Ejemplo10Component,
    MayusParesPipe,
    Ejemplo11Component,
    Ejemplo12PadreComponent,
    Ejemplo12HijoComponent,
    Ejemplo13PadreComponent,
    Ejemplo13HijoComponent,
    Ejemplo14Component,
    Ejemplo15Component,
    Ejemplo17Component,
    Ejemplo18Component,
    Ejemplo19Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
