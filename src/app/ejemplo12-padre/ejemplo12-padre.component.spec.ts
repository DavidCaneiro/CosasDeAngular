import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo12PadreComponent } from './ejemplo12-padre.component';

describe('Ejemplo12PadreComponent', () => {
  let component: Ejemplo12PadreComponent;
  let fixture: ComponentFixture<Ejemplo12PadreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ejemplo12PadreComponent ]
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
