import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo19Component } from './ejemplo19.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('Ejemplo19Component', () => {
  let component: Ejemplo19Component;
  let fixture: ComponentFixture<Ejemplo19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ejemplo19Component ],
      imports:[FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ejemplo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it crea un nuevo test y con describe las agrupa
  describe('Testeo la operacion dividir', () => {
    it('Dividir dos numeros', () => {
      component.num1 = 4
      component.num2 = 2
      component.dividir()
      expect(component.resultado).toBe(2);
    });
    it('Dividir por 0', () => {
      component.num1 = 4
      component.num2 = 0
      expect(()=>{
        component.dividir()
      }).toThrowError()
      expect(component.resultado).toBe(0)
    });

    describe('Testo la interfaz grafica', () => {
    it('Deberia tener como titulo <h2>Calculadora<h2>', () => {
      let elemento:HTMLElement = fixture.nativeElement;
      let h2 = elemento.querySelector('h2')
      expect(h2.textContent).toBe('Calculadora')
    });
    it('Deberia sumar correctamente', () => {
      let elemento:HTMLElement = fixture.nativeElement;
      // Numero 1
      let num1:HTMLInputElement = elemento.querySelector('#num1')
      num1.value = '4'
      num1.dispatchEvent(new Event('input'))
      // Numero 2
      let num2:HTMLInputElement = elemento.querySelector('#num2')
      num2.value = '2'
      // Simula que escribe algo, fundamental para testear 2waydataBinding
      num2.dispatchEvent(new Event('input'))
      // Boton
      elemento.querySelector('button').click()
      // Para que detecte los cambios
      fixture.detectChanges()
      // Cuando carge todo, lo ejecutara
      fixture.whenStable().then(()=>{
        let textoDiv = elemento.querySelector('#resultado').textContent
        expect(textoDiv).toEqual('2')
      })
      
    });
    it('Deberia sumar correctamente (debugElement)', () => {
    fixture.debugElement.query(By.css('#num1')).nativeElement    
    // y continuaria  mas o menos igual que el otro
    });
    
    
    });
    
  });
  

});
