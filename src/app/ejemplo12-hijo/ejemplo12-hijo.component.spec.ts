import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo12HijoComponent } from './ejemplo12-hijo.component';

describe('Ejemplo12HijoComponent', () => {
  let component: Ejemplo12HijoComponent;
  let fixture: ComponentFixture<Ejemplo12HijoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ejemplo12HijoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ejemplo12HijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
