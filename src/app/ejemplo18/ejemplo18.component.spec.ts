import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo18Component } from './ejemplo18.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('Ejemplo18Component', () => {
  let component: Ejemplo18Component;
  let fixture: ComponentFixture<Ejemplo18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ejemplo18Component ],
      imports:[ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ejemplo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
