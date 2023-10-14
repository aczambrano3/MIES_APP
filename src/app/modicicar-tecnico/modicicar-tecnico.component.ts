import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { TecnicosService } from 'src/app/service/tecnicos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common'
import { Location } from '@angular/common';

interface Genero {
  value: string;
  viewValue: string;
}

const now = new Date();
@Component({
  selector: 'app-modicicar-tecnico',
  templateUrl: './modicicar-tecnico.component.html',
  styleUrls: ['./modicicar-tecnico.component.scss']
})
export class ModicicarTecnicoComponent implements OnInit {
  hayError: boolean = false;

  form!:FormGroup;
  nombres="";
  apellidos="";
  id:string;

  genero: Genero[] = [
    {value: 'Masculino', viewValue: 'Masculino'},
    {value: 'Femenino', viewValue: 'Femenino'},
  ];

  constructor(
    private router: Router, 
    private adultosService: TecnicosService, 
    public formulario: FormBuilder,
    private route: ActivatedRoute,
    public datepipe: DatePipe,
    private location:Location
  ) { 

    this.id = this.route.snapshot.paramMap.get('id');
    this.adultosService.getById(this.id).subscribe(res => {
      console.log(res)
      var gen = "";
      if (res['tec_genero']=="1") {
        gen = "Masculino";
      }else{
        gen = "Femenino";
      }
      this.nombres = res['tec_nombre'];
      this.apellidos = res['tec_apellido'];

      let date = this.datepipe.transform(res['tec_fecha_nac'], 'yyyy-MM-dd');

      this.form.setValue({
        tec_cedula: res['tec_cedula'],
        tec_genero: gen,
        tec_fecha_nac: date,
        tec_etnia: res['tec_etnia'],
        tec_direccion: res['tec_direccion'],
        tec_contrasenia: res['tec_contrasenia']
      });
    });

    this.form = this.formulario.group({
        tec_cedula: [''],
        tec_genero: [''],
        tec_fecha_nac: [''],
        tec_etnia: [''],
        tec_direccion: [''],
        tec_contrasenia: ['']
    });
    
  }

  ngOnInit(): void {
    
  }
  onBack(){
    this.location.back();
  }


  save(event: Event){
    event.preventDefault();
    if (this.form.valid) {
        var resp;
        this.adultosService.editTecnico(this.id,this.form.value).subscribe(res => {
          resp = res['status'];
          if (resp == "adulto Updated") {
            alert("Datos ingresados correctamente.");
            //this.router.navigate(['']);
            this.onBack();
          }else {
            alert("Ocurrio un error al insertar en la base de datos.");
          }
        });
    }else{
      this.hayError=true;
    }
  }
}