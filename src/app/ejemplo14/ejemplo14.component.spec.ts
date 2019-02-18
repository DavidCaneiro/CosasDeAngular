import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo14Component } from './ejemplo14.component';

describe('Ejemplo14Component', () => {
  let component: Ejemplo14Component;
  let fixture: ComponentFixture<Ejemplo14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ejemplo14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ejemplo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
