import { Component, Input, OnInit, Output } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Formulario } from '../models/formulario';
import { Location } from '@angular/common';

@Component({
  selector: 'app-observacion',
  templateUrl: './observacion.component.html',
  styleUrls: ['./observacion.component.scss']
})
export class ObservacionComponent implements OnInit {

  listFormulario: Formulario[] = [];

  formularioForm: FormGroup;
  imageFile: File = null;
  pregunta1 = '';
  pregunta2 = '';
  idForm: any;
  indice:string;
  ubicacion:any;
  idEncabezado:string;
  a:boolean=true;


  constructor(
    private api: ApiService,
    private formBuilder: FormBuilder,
    private formularioService: ApiService,
    private router: Router,
    private location:Location,
    private aRouter: ActivatedRoute,
  ) { 
    this.indice = "Observacion";
  }
  ngOnInit(): void {
    this.formularioForm = this.formBuilder.group({
      imageFile : ["", Validators.required],
      pregunta1 : ["", Validators.required],
      pregunta2 : ["", Validators.required]    
    });
    this.obtenerId();
    this.idEncabezado = this.aRouter.snapshot.paramMap.get("enc_id");
  }

  agregarFormulario(){
      this.api.addFormulario(this.idEncabezado, this.formularioForm.value, this.formularioForm.get('imageFile').value._files[0]).subscribe(data => {
        if(this.a){
          this.a=false;
          this.onBack();
        }
      }, error => {
        console.log(error);
        this.formularioForm.reset();
      })
  }

  onBack(){
    this.location.back();
  }

  obtenerId(){
    this.formularioService.getUbi().subscribe(data => {
      console.log(data);
      this.listFormulario = data;
    }, error => {
      console.log(error);
    })
  }
}
