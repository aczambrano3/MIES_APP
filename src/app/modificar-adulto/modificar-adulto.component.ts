import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { AdultosService } from 'src/app/service/adultos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common'
import { Location } from '@angular/common';

interface Genero {
  value: string;
  viewValue: string;
}

const now = new Date();
@Component({
  selector: 'app-modificar-adulto',
  templateUrl: './modificar-adulto.component.html',
  styleUrls: ['./modificar-adulto.component.scss']
})
export class ModificarAdultoComponent implements OnInit {
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
    private adultosService: AdultosService, 
    public formulario: FormBuilder,
    private route: ActivatedRoute,
    public datepipe: DatePipe,
    private location:Location
  ) { 

    this.id = this.route.snapshot.paramMap.get('id');
    this.adultosService.getById(this.id).subscribe(res => {
      res
      var gen = "";
      if (res['am_genero']=="Masculino") {
        gen = "Masculino";
      }else{
        gen = "Femenino";
      }
      this.nombres = res['am_nombres'];
      this.apellidos = res['am_apellidos'];

      let date = this.datepipe.transform(res['am_fecha_nac'], 'yyyy-MM-dd');

      this.form.setValue({
        am_cedula: res['am_ci'],
        am_genero: gen,
        am_fecha_nac: date,
        am_etnia: res['am_etnia'],
        am_direccion: res['am_dir'],
        am_origen: res['am_origen']
      });
    });

    this.form = this.formulario.group({
        am_cedula: [''],
        am_genero: [''],
        am_fecha_nac: [''],
        am_etnia: [''],
        am_direccion: [''],
        am_origen: ['']
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
        this.adultosService.editAdulto(this.id,this.form.value).subscribe(res => {
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