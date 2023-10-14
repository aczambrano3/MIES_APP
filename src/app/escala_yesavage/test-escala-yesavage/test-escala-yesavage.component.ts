import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { YesavageService } from 'src/app/service/yesavage.service';
import { TestYesavage } from 'src/app/models/test-yesavage';

@Component({
  selector: 'app-test-escala-yesavage',
  templateUrl: './test-escala-yesavage.component.html',
  styleUrls: ['./test-escala-yesavage.component.scss']
})
export class TestEscalaYesavageComponent implements OnInit {

  // Barra de menu nombre
  indice:string;

  // Fecha y hora en que se inicia el test
  fechaInicio:string;

  // Estado
  estadoTest:boolean = true;

  // Varieble del ID encabezado
  idEncabezado:string = '1';

  // Varieble del ID del Test Yesavage
  //idTest:string = '1';

  // Cronometro
  public hora: number=0;
  public minutos: number=0;
  public segundos: number=0;

  public seg: string= "00";
  public min: string= "00";
  public hr: string= "00";

  public contador: any;

  // form: FormGroup;
  public formularioTest: FormGroup;

  constructor(
    // private formBuilder:FormBuilder
    private readonly _formBuilder: FormBuilder,
    private router : Router,
    private _testService: YesavageService,
    private aRouter: ActivatedRoute,
    private location:Location,
  ) { 
    this.indice = "Escala Yesavage";
    this.buildForm();
  }

  ngOnInit(): void {
    this.start();
    this.fechaInicio = this.fechaStartEnd();
    this.idEncabezado =  this.aRouter.snapshot.paramMap.get("enc_id");
    console.log("Tiempo inicio es: "+ this.fechaInicio)
  }

  fechaStartEnd(){
    const dt = new Date();
    const padL = (nr: number, len = 2, chr = `0`) => `${nr}`.padStart(2, chr);
    const fechaInicFin = `${
        padL(dt.getMonth()+1)}/${
        padL(dt.getDate())}/${
        dt.getFullYear()} ${
        padL(dt.getHours())}:${
        padL(dt.getMinutes())}:${
        padL(dt.getSeconds())}`;
        //console.log("Fecha es: "+fechaInicFin)
        return(fechaInicFin)
  }

  start(){
    if (this.contador == undefined) {
      this.contador = setInterval( () =>{
        this.segundos +=1;
        if (this.segundos == 60) {
          this.segundos = 0;
          this.minutos +=1;
          if (this.minutos == 60) {
            this.minutos =0;
            this.hora +=1;
            if (this.hora == 24) {
              this.hora = 0;
            }
          } 
        }
        if(this.segundos<10){
          this.seg="0"+this.segundos;
        }else if(this.segundos>=10){
          this.seg=""+this.segundos;
        }
        
        if(this.minutos<10){
          this.min="0"+this.minutos;
        }else if(this.minutos>=10){
          this.min=""+this.minutos;
        }

        if(this.hora<10){
          this.hr="0"+this.hora;
        }else if(this.hora>=10){
          this.hr=""+this.hora;
        }
      }, 1000);
    }
  }

  stop(){
    clearInterval(this.contador);
    this.hr;
    this.min;
    this.seg;
    this.contador=null;
    
  }

  buildForm() {
    this.formularioTest = this._formBuilder.group({
      pregunta1: new FormControl('', [Validators.required]),
      pregunta2: new FormControl('', [Validators.required]),
      pregunta3: new FormControl('', [Validators.required]),
      pregunta4: new FormControl('', [Validators.required]),
      pregunta5: new FormControl('', [Validators.required]),
      pregunta6: new FormControl('', [Validators.required]),
      pregunta7: new FormControl('', [Validators.required]),
      pregunta8: new FormControl('', [Validators.required]),
      pregunta9: new FormControl('', [Validators.required]),
      pregunta10: new FormControl('', [Validators.required]),
      pregunta11: new FormControl('', [Validators.required]),
      pregunta12: new FormControl('', [Validators.required]),
      pregunta13: new FormControl('', [Validators.required]),
      pregunta14: new FormControl('', [Validators.required]),
      pregunta15: new FormControl('', [Validators.required]),
    });
  }

  save(event: Event) {
    event.preventDefault();
    // Fecha final
    const fechaFin = this.fechaStartEnd();
    console.log("Tiempo final es: "+fechaFin)

    if(this.formularioTest.valid) {
      const value = this.formularioTest.value;
      console.log(value);
      const puntajeTotal = this.calcularPuntaje();

      const TESTYESAVAGE: TestYesavage = {
        //ey_id: this.idTest,
        ef_id: this.idEncabezado,
        ey_p1_satisfecho: this.formularioTest.get('pregunta1')?.value,
        ey_p2_actividades: this.formularioTest.get('pregunta2')?.value,
        ey_p3_vacio: this.formularioTest.get('pregunta3')?.value,
        ey_p4_aburrido: this.formularioTest.get('pregunta4')?.value,
        ey_p5_animo: this.formularioTest.get('pregunta5')?.value,
        ey_p6_preocupado: this.formularioTest.get('pregunta6')?.value,
        ey_p7_feliz: this.formularioTest.get('pregunta7')?.value,
        ey_p8_desamparado: this.formularioTest.get('pregunta8')?.value,
        ey_p9_cosas: this.formularioTest.get('pregunta9')?.value,
        ey_p10_memoria: this.formularioTest.get('pregunta10')?.value,
        ey_p11_estar_vivo: this.formularioTest.get('pregunta11')?.value,
        ey_p12_inutil_despreciable: this.formularioTest.get('pregunta12')?.value,
        ey_p13_energia: this.formularioTest.get('pregunta13')?.value,
        ey_p14_esperanza_actual: this.formularioTest.get('pregunta14')?.value,
        ey_p15_cree_mejor: this.formularioTest.get('pregunta15')?.value,
        ey_tiempo_inicial: this.fechaInicio,
        ey_tiempo_final: fechaFin,
        ey_tiempo_total: this.hr + ':' + this.min + ':' + this.seg,
        ey_estado: this.estadoTest,
        ey_puntaje_total: puntajeTotal,
      }

      this._testService.guardarTest(TESTYESAVAGE).subscribe(data => {
        alert("PUNTAJE TOTAL: " + puntajeTotal);
        //this.router.navigate(['/']);
        this.onBack()
      });
      
    } else {
      this.formularioTest.markAllAsTouched();
      alert("Existen campos sin llenar, debe llenar todos los campos.");
    }
  }

  calcularPuntaje() {
    let puntajeTest = 0;
    const listaRespuestas: [] = this.formularioTest.value;

    for (const key in listaRespuestas) {
      puntajeTest += listaRespuestas[key] == 'Si' || listaRespuestas[key] == 'No' ? 1 : 0;
    }

    console.log(puntajeTest);
    return puntajeTest;
  }

  onBack(){
    this.location.back();
    this.location.back();
  }
}
