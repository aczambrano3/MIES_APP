import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm} from '@angular/forms';
import { Router , ActivatedRoute} from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import { AdultosService } from 'src/app/service/adultos.service';
import { Location } from '@angular/common';

interface Genero {
  value: string;
  viewValue: string;
}

const now = new Date();

@Component({
  selector: 'app-crear-adulto',
  templateUrl: './crear-adulto.component.html',
  styleUrls: ['./crear-adulto.component.scss']
})
export class CrearAdultoComponent implements OnInit {
  hayError: boolean = false;
  tec_id:string;

  genero: Genero[] = [
    {value: 'Masculino', viewValue: 'Masculino'},
    {value: 'Femenino', viewValue: 'Femenino'},
  ];

  form!: FormGroup;
  
  constructor(
    private router: Router,
    private formBuilder:FormBuilder,
    private adultosService: AdultosService,
    private aRouter: ActivatedRoute,
    private location:Location
  ) { 
    this.buildForm();
  }

  ngOnInit(): void {
    this.tec_id = this.aRouter.snapshot.paramMap.get("id");
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      cedula: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required ]),
      genero: new FormControl('', [Validators.required]),
      etnia: new FormControl('', [Validators.required]),
      direccion: new FormControl('', [Validators.required]),
      origen: new FormControl('', [Validators.required]),
      fechaReg: [now.toLocaleDateString()]
    });

    
  }

  save(event: Event){
    event.preventDefault();
    if (this.form.valid) {
      this.form.value.tec_id=this.tec_id;
      console.log(this.form.value.tec_id);
        var resp;
        this.adultosService.agregarAdulto(this.form.value).subscribe(res => {
          resp = res['status'];
          if (resp == "adulto_c") {
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

  doSomething(){
    window.open("https://www.w3schools.com");
  }
  onBack(){
    this.location.back();
  }



}
