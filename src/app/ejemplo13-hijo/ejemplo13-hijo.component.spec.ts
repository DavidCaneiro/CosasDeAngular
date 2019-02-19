import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo13HijoComponent } from './ejemplo13-hijo.component';
import { FormsModule } from '@angular/forms';

describe('Ejemplo13HijoComponent', () => {
  let component: Ejemplo13HijoComponent;
  let fixture: ComponentFixture<Ejemplo13HijoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ejemplo13HijoComponent ],
      imports:[FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ejemplo13HijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
