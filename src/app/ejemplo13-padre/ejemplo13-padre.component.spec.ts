import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo13PadreComponent } from './ejemplo13-padre.component';

describe('Ejemplo13PadreComponent', () => {
  let component: Ejemplo13PadreComponent;
  let fixture: ComponentFixture<Ejemplo13PadreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ejemplo13PadreComponent ]
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
