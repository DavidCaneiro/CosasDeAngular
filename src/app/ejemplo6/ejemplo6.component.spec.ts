import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo6Component } from './ejemplo6.component';
import { FormsModule } from '@angular/forms';

describe('Ejemplo6Component', () => {
  let component: Ejemplo6Component;
  let fixture: ComponentFixture<Ejemplo6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ejemplo6Component ],
      imports:[FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ejemplo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
