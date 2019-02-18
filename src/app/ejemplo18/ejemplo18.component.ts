import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ejemplo18',
  templateUrl: './ejemplo18.component.html',
  styleUrls: ['./ejemplo18.component.css']
})
export class Ejemplo18Component implements OnInit {

  public form:FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      nombre: ['Angel',Validators.required],
      email:['cuentafalsa@falso.com',[Validators.email,Validators.required]]
    });
  }
  onSubmit(formValue){
    // aqui iria el backend
    alert('El formulario se ha enviado correctamente ' +formValue.email);
  }

}
