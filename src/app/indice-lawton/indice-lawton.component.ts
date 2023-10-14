import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-indice-lawton',
  templateUrl: './indice-lawton.component.html',
  styleUrls: ['./indice-lawton.component.scss'],

})
export class IndiceLawtonComponent implements OnInit {

  indice: string;
  P1Seleccionada: string;
  form: FormGroup;
  respondido: string;
  idEncabezado: string;

  estado: string[] = ["Asistido", "Independiente"]

  constructor(
    private formBuilder: FormBuilder, 
    private router: Router,
    private aRouter: ActivatedRoute,
    private location:Location,) {
    this.form = this.formBuilder.group({
      pregunta1: ['', [Validators.required]],
    });
    this.indice = "Indice Lawton";
    //this.idEncabezado = this.router.getCurrentNavigation()!.extras.state!['idEncabezado'];

  }

  ngOnInit(): void {
    this.idEncabezado = this.aRouter.snapshot.paramMap.get("enc_id");
    console.log(this.idEncabezado)
  }

  btnContinuar(estado: any, idEncabezado: any) {
    // al hacer el clic en el botón se asigna el valor del input a la variable
    this.respondido = this.P1Seleccionada;
    this.router.navigate(['/TestLawton/'+this.idEncabezado+'/'+this.respondido])
  }
  save(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
    } else {
      this.form.markAllAsTouched();
      alert("Existen campos sin llenar, debe llenar todos los campos.");
    }
  }

  mostrar(selector: any, visible: boolean) {
    var elemento = document.querySelector(selector);
    console.log(elemento);
    if (elemento != null) {
      elemento.style.display = visible ? 'block' : 'none';
    }
  }

  onBack(){
    this.location.back();
  }

}
