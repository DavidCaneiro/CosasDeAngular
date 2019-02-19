import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo13PadreComponent } from './ejemplo13-padre.component';
import { Ejemplo13HijoComponent } from '../ejemplo13-hijo/ejemplo13-hijo.component';
import { FormsModule } from '@angular/forms';

describe('Ejemplo13PadreComponent', () => {
  let component: Ejemplo13PadreComponent;
  let fixture: ComponentFixture<Ejemplo13PadreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
      Ejemplo13PadreComponent,
      Ejemplo13HijoComponent ],
      imports:[FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ejemplo13PadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
