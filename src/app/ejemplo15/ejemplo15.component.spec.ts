import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo15Component } from './ejemplo15.component';

describe('Ejemplo15Component', () => {
  let component: Ejemplo15Component;
  let fixture: ComponentFixture<Ejemplo15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ejemplo15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ejemplo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
