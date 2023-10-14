import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-indice-barthel',
  templateUrl: './indice-barthel.component.html',
  styleUrls: ['./indice-barthel.component.scss'],
  
})
export class IndiceBarthelComponent implements OnInit {
  indice:string;
  P1Seleccionada: string;
  form: FormGroup;
  respondido: string;
  idEncabezado:string;

  estado:string[]=["Asistido","Independiente"]
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private aRouter: ActivatedRoute,
    private location:Location,) { 
    this.form = this.formBuilder.group({
      pregunta1: ['', [Validators.required]],
    });
    this.indice ="Indice Barthel";
    //this.idEncabezado = this.router.getCurrentNavigation()!.extras.state!['idEncabezado'];

  }

  ngOnInit(): void {
    this.idEncabezado = this.aRouter.snapshot.paramMap.get("enc_id");
    console.log(this.idEncabezado)
  }
  
  btnContinuar(estado:any,idEncabezado: any) {
    // al hacer el clic en el botón se asigna el valor del input a la variable
    this.respondido = this.P1Seleccionada;
    this.router.navigate(['/TestBarthel/'+this.idEncabezado+'/'+this.respondido])
  }

  /* 
  btnContinuar(estado: any,idEncabezado: any) {
    // al hacer el clic en el botón se asigna el valor del input a la variable
    this.respondido = this.P1Seleccionada;   
    this.router.navigate(['/TestBarthel'], { state: { respondido: estado} })
  }
*/
  
  save(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      console.log(value);
    } else {
      this.form.markAllAsTouched();
      alert("Existen campos sin llenar, debe llenar todos los campos.");
    }
  }
  onBack(){
    this.location.back();
  }

}
