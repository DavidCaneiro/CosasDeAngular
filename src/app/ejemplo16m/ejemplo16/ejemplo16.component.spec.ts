import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo16Component } from './ejemplo16.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('Ejemplo16Component', () => {
  let component: Ejemplo16Component;
  let fixture: ComponentFixture<Ejemplo16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ejemplo16Component ],
      imports:[RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ejemplo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
