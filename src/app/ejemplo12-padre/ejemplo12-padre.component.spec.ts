import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo12PadreComponent } from './ejemplo12-padre.component';
import { Ejemplo12HijoComponent } from '../ejemplo12-hijo/ejemplo12-hijo.component';
import { FormsModule } from '@angular/forms';

describe('Ejemplo12PadreComponent', () => {
  let component: Ejemplo12PadreComponent;
  let fixture: ComponentFixture<Ejemplo12PadreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ejemplo12PadreComponent,
      Ejemplo12HijoComponent
      ],
      imports:[FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ejemplo12PadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
