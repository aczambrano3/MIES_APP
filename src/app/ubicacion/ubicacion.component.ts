import { state } from '@angular/animations';
import { Component, OnInit, Output, Input } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { FormularioUbi } from '../models/form';
import { Location } from '@angular/common';

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.component.html',
  styleUrls: ['./ubicacion.component.scss']
})
export class UbicacionComponent implements OnInit {

  listFormulario: FormularioUbi[] = [];
  ubicacionForm: FormGroup;
  itemUbicacion: any;
  ubicaciones: string[] = ['Punto de Atencion', 'Domicilio'];
  enc_id: any;
  am_id:any;
  am_nombres:any;
  am_apellidos:any;
  tec_id:any;

  indice:string;
  constructor(private router:Router,
              private aRouter: ActivatedRoute,
              private ApiService: ApiService,
              private fb: FormBuilder,
              private location:Location) { 
    this.ubicacionForm = this.fb.group({
      ubicacion: ['', Validators.required]
    })
    //this.id = this.aRouter.snapshot.paramMap.get('id');
    this.indice = "Ubicación";
  }


  ngOnInit(){
    this.am_id = this.aRouter.snapshot.paramMap.get("am_id");
    this.am_nombres = this.aRouter.snapshot.paramMap.get("nombre");
    this.am_apellidos= this.aRouter.snapshot.paramMap.get("apellido");
    this.tec_id = this.aRouter.snapshot.paramMap.get("tec_id");
    console.log(this.am_id + this.am_nombres+this.am_apellidos+this.tec_id);
  }
  enviar(){
    this.router.navigate(['app-menuform/'+this.am_nombres+'/'+this.am_apellidos+'/'+this.enc_id]);
  }

  agregarUbicacion(){
    const UBICACION : FormularioUbi ={
      ubicacion: this.ubicacionForm.get('ubicacion')?.value,
      am_id:this.am_id,
      tec_id:this.tec_id
    }
    this.ApiService.AgregarUbicacio(UBICACION).subscribe(data => {
      console.log(data._id);
      this.enc_id=data._id;
      this.router.navigate(['app-menuform/'+this.am_nombres+'/'+this.am_apellidos+'/'+this.enc_id]);
    }), error => {
      console.log(error);
      this.ubicacionForm.reset();
    };
  }

  onBack(){
    this.location.back();
  }
}
