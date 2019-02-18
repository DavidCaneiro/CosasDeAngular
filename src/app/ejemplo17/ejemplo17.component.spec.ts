import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo17Component } from './ejemplo17.component';

describe('Ejemplo17Component', () => {
  let component: Ejemplo17Component;
  let fixture: ComponentFixture<Ejemplo17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ejemplo17Component ]
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
