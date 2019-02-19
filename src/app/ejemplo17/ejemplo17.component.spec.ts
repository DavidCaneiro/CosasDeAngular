import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo17Component } from './ejemplo17.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ejemplo1Component } from '../ejemplo1/ejemplo1.component';
import { Ejemplo2Component } from '../ejemplo2/ejemplo2.component';
import { Ejemplo3Component } from '../ejemplo3/ejemplo3.component';
import { Ejemplo4Component } from '../ejemplo4/ejemplo4.component';
import { Ejemplo5Component } from '../ejemplo5/ejemplo5.component';
import { Ejemplo6Component } from '../ejemplo6/ejemplo6.component';
import { Ejemplo7Component } from '../ejemplo7/ejemplo7.component';
import { Ejemplo8Component } from '../ejemplo8/ejemplo8.component';
import { Ejemplo9Component } from '../ejemplo9/ejemplo9.component';
import { Ejemplo10Component } from '../ejemplo10/ejemplo10.component';
import { Ejemplo11Component } from '../ejemplo11/ejemplo11.component';
import { Ejemplo12HijoComponent } from '../ejemplo12-hijo/ejemplo12-hijo.component';
import { Ejemplo12PadreComponent } from '../ejemplo12-padre/ejemplo12-padre.component';
import { Ejemplo13HijoComponent } from '../ejemplo13-hijo/ejemplo13-hijo.component';
import { Ejemplo13PadreComponent } from '../ejemplo13-padre/ejemplo13-padre.component';
import { Ejemplo14Component } from '../ejemplo14/ejemplo14.component';
import { Ejemplo15Component } from '../ejemplo15/ejemplo15.component';
import { Ejemplo16Component } from '../ejemplo16m/ejemplo16/ejemplo16.component';
import { Ejemplo18Component } from '../ejemplo18/ejemplo18.component';
import { Ejemplo19Component } from '../ejemplo19/ejemplo19.component';
import { MayusParesPipe } from '../mayus-pares.pipe';

describe('Ejemplo17Component', () => {
  let component: Ejemplo17Component;
  let fixture: ComponentFixture<Ejemplo17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ejemplo17Component, Ejemplo1Component,Ejemplo2Component,Ejemplo3Component,Ejemplo4Component,Ejemplo5Component,
      Ejemplo6Component,Ejemplo7Component,Ejemplo8Component,Ejemplo9Component,Ejemplo10Component,Ejemplo11Component,Ejemplo12HijoComponent,
    Ejemplo12PadreComponent,Ejemplo13HijoComponent,Ejemplo13PadreComponent,Ejemplo14Component,Ejemplo15Component,Ejemplo16Component,Ejemplo18Component,Ejemplo19Component,
    MayusParesPipe ],
      imports:[AppRoutingModule,
              FormsModule,
            ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ejemplo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
