import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Barthel } from '../models/barthel';
import { BarthelService } from '../service/barthel.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-test-barthel',
  templateUrl: './test-barthel.component.html',
  styleUrls: ['./test-barthel.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class TestBarthelComponent implements OnInit {
  form: FormGroup;
  indice: string;
  respondido: string;
  idEncabezado: string;
  bloqueado:string= "no";
  public hora: number = 0;
  public minutos: number = 0;
  public segundos: number = 0;

  public seg: string = "00";
  public min: string = "00";
  public hr: string = "00";

  public contador: any;

  P1Seleccionada: string;
  P2Seleccionada: string;
  P3Seleccionada: string;
  P4Seleccionada: string;
  P5Seleccionada: string;
  P6Seleccionada: string;
  P7Seleccionada: string;
  P8Seleccionada: string;
  P9Seleccionada: string;
  P10Seleccionada: string;
  tiempoInicial: string;
  tiempoFinal: string;
  tiempoTotal: string;
  estado: string;
  valorTotal: number;


  valorP1: number;
  valorP2: number;
  valorP3: number;
  valorP4: number;
  valorP5: number;
  valorP6: number;
  valorP7: number;
  valorP8: number;
  valorP9: number;
  valorP10: number;

  P1: string[] = ['Incapaz', 'Necesita ayuda para cortar, extender mantequilla, usar  condimentos, etc',
    'Independiente. (puede comer solo)'];
  P2: string[] = ['Incapaz, no se mantiene sentado.',
    'Necesita ayuda importante (una persona entrenada o 2 personas , puede estar sentado.)',
    'Necesita algo de ayuda (una pequeña ayuda física o ayuda verbal',
    'Independiente'];
  P3: string[] = ['Necesita ayuda con el aseo personal',
    'Independiente para lavarse la cara, las manos y los dientes, peinarse y afeitarse'];
  P4: string[] = ['Dependiente', 'Necesita alguna ayuda, pero puede hacer algo solo',
    'Independiente (entrar y salir, limpiarse y vestirse)'];
  P5: string[] = ['Dependiente', 'Independiente para bañarse o ducharse.'];
  P6: string[] = ['Inmóvil', 'Independiente en silla de ruedas en 50 metros'
    , 'Anda con pequeña ayuda de una persona (física o verbal)'
    , 'Independiente al menos 50m con cualquier tipo de muleta excepto andador.'];
  P7: string[] = ['Incapaz', 'Necesita ayuda física o verbal puede llevar cualquier tipo de   muleta.'
    , 'Independiente para subir y bajar.'];
  P8: string[] = ['Dependiente', 'Necesita ayuda, pero puede hacer la mitad aproximadamente sin  ayuda.'
    , 'Independiente incluyendo botones, cremalleras (cierres) y cordones'];
  P9: string[] = ['Incontinente, (o necesita que le suministren enema)'
    , 'Accidente excepcional (1 por semana)',
    'Continente'];
  P10: string[] = ['Incontinente o sondado incapaz de cambiarse la bolsa'
    , ' Accidente excepcional (máximo 1 por 24 horas)'
    , 'Continente, durante al menos 7 días.'];


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private _BarthelService: BarthelService,
    private aRouter: ActivatedRoute,
    private location:Location,) {
    this.form = this.formBuilder.group({
      pregunta1: ['', [Validators.required]],
      pregunta2: ['', [Validators.required]],
      pregunta3: ['', [Validators.required]],
      pregunta4: ['', [Validators.required]],
      pregunta5: ['', [Validators.required]],
      pregunta6: ['', [Validators.required]],
      pregunta7: ['', [Validators.required]],
      pregunta8: ['', [Validators.required]],
      pregunta9: ['', [Validators.required]],
      pregunta10: ['', [Validators.required]],
    });
    this.indice = "Test Barthel";
    //this.respondido = this.router.getCurrentNavigation()!.extras.state!['respondido'];
    //this.idEncabezado = this.router.getCurrentNavigation()!.extras.state!['idEncabezado'];
  }

  agregarBarthel(bloqueado: any) {

    //console.log(this.form.get('form')?.value)
    this.stop();
    this.calcularTiempoFinal();
    const BARTHEL: Barthel = {
      idEncabezado: this.idEncabezado,
      p1_comer: this.P1Seleccionada,
      p2_retrasladarse: this.P2Seleccionada,
      p3_aseo: this.P3Seleccionada,
      p4_uso_retrete: this.P4Seleccionada,
      p5_bañarse: this.P5Seleccionada,
      p6_desplazarse: this.P6Seleccionada,
      p7_escaleras: this.P7Seleccionada,
      p8_vestirse: this.P8Seleccionada,
      p9_control_heces: this.P9Seleccionada,
      p10_control_orina: this.P10Seleccionada,
      tiempo_inicial: this.tiempoInicial,
      tiempo_final: this.tiempoFinal,
      tiempo_total: this.tiempoTotal,
      estado: this.respondido,
      puntaje_total: this.valorTotal
    }

    this._BarthelService.guardarBarthel(BARTHEL).subscribe(data => {
      console.log(data);
      alert("PUNTAJE TOTAL: " + this.valorTotal);
      clearInterval(this.contador);
      //this.router.navigate(['/app-menuform'],{state: { bloqueado: bloqueado}})
      this.onBack();
    }, error => {
      console.log(error);
    })/* 
    this._BarthelService.guardarBarthel(BARTHEL).subscribe({
      next:(data)=>console.log(data),
      error:(e)=>console.log(e),
      complete: () => console.info('complete') 
    })*/

  }

  onBack(){
    this.location.back();
    this.location.back();
  }

  funcionvalorP1() {
    if (this.P1Seleccionada == this.P1[0]) {
      this.valorP1 = 0;
    }
    if (this.P1Seleccionada == this.P1[1]) {
      this.valorP1 = 5;
    }
    if (this.P1Seleccionada == this.P1[2]) {
      this.valorP1 = 10;
    }
    return this.valorP1;
  }

  funcionvalorP2() {
    if (this.P2Seleccionada == this.P2[0]) {
      this.valorP2 = 0;
    }
    if (this.P2Seleccionada == this.P2[1]) {
      this.valorP2 = 5;
    }
    if (this.P2Seleccionada == this.P2[2]) {
      this.valorP2 = 10;
    }
    if (this.P2Seleccionada == this.P2[3]) {
      this.valorP2 = 15;
    }
    return this.valorP2;
  }

  funcionvalorP3() {
    if (this.P3Seleccionada == this.P3[0]) {
      this.valorP3 = 0;
    }
    if (this.P3Seleccionada == this.P3[1]) {
      this.valorP3 = 5;
    }
    return this.valorP3;
  }

  funcionvalorP4() {
    if (this.P4Seleccionada == this.P4[0]) {
      this.valorP4 = 0;
    }
    if (this.P4Seleccionada == this.P4[1]) {
      this.valorP4 = 5;
    }
    if (this.P4Seleccionada == this.P4[2]) {
      this.valorP4 = 10;
    }
    return this.valorP4;
  }

  funcionvalorP5() {
    if (this.P5Seleccionada == this.P5[0]) {
      this.valorP5 = 0;
    }
    if (this.P5Seleccionada == this.P5[1]) {
      this.valorP5 = 5;
    }
    return this.valorP5;
  }

  funcionvalorP6() {
    if (this.P6Seleccionada == this.P6[0]) {
      this.valorP6 = 0;
    }
    if (this.P6Seleccionada == this.P6[1]) {
      this.valorP6 = 5;
    }
    if (this.P6Seleccionada == this.P6[2]) {
      this.valorP6 = 10;
    }
    if (this.P6Seleccionada == this.P6[3]) {
      this.valorP6 = 15;
    }
    return this.valorP6;
  }

  funcionvalorP7() {
    if (this.P7Seleccionada == this.P7[0]) {
      this.valorP7 = 0;
    }
    if (this.P7Seleccionada == this.P7[1]) {
      this.valorP7 = 5;
    }
    if (this.P7Seleccionada == this.P7[2]) {
      this.valorP7 = 10;
    }
    return this.valorP7;
  }

  funcionvalorP8() {
    if (this.P8Seleccionada == this.P8[0]) {
      this.valorP8 = 0;
    }
    if (this.P8Seleccionada == this.P8[1]) {
      this.valorP8 = 5;
    }
    if (this.P8Seleccionada == this.P8[2]) {
      this.valorP8 = 10;
    }
    return this.valorP8;
  }

  funcionvalorP9() {
    if (this.P9Seleccionada == this.P9[0]) {
      this.valorP9 = 0;
    }
    if (this.P9Seleccionada == this.P9[1]) {
      this.valorP9 = 5;
    }
    if (this.P9Seleccionada == this.P9[2]) {
      this.valorP9 = 10;
    }
    return this.valorP9;
  }

  funcionvalorP10() {
    if (this.P10Seleccionada == this.P10[0]) {
      this.valorP10 = 0;
    }
    if (this.P10Seleccionada == this.P10[1]) {
      this.valorP10 = 5;
    }
    if (this.P10Seleccionada == this.P10[2]) {
      this.valorP10 = 10;
    }
    return this.valorP10;
  }

  calcularValorTotal() {
    this.valorTotal =
      this.funcionvalorP1() +
      this.funcionvalorP2() +
      this.funcionvalorP3() +
      this.funcionvalorP4() +
      this.funcionvalorP5() +
      this.funcionvalorP6() +
      this.funcionvalorP7() +
      this.funcionvalorP8() +
      this.funcionvalorP9() +
      this.funcionvalorP10()
    return this.valorTotal;
  }



  ngOnInit(): void {
    this.idEncabezado = this.aRouter.snapshot.paramMap.get("enc_id");
    this.respondido=this.aRouter.snapshot.paramMap.get("respondido");;
    this.start();
  }

  calcularTiempoInicial() {
    var inicial = new Date();
    this.tiempoInicial = inicial.getHours() + ':' + inicial.getMinutes() + ':' + inicial.getSeconds();
    console.log("Tiempo inicial", this.tiempoInicial)
  }
  calcularTiempoFinal() {
    var final = new Date();
    this.tiempoFinal = final.getHours() + ':' + final.getMinutes() + ':' + final.getSeconds();
    console.log("Tiempo final", this.tiempoFinal)

  }

  start() {
    if (this.contador == undefined) {
      this.contador = setInterval(() => {
        this.segundos += 1;
        if (this.segundos == 60) {
          this.segundos = 0;
          this.minutos += 1;
          if (this.minutos == 60) {
            this.minutos = 0;
            this.hora += 1;
            if (this.hora == 24) {
              this.hora = 0;
            }
          }
        }
        if (this.segundos < 10) {
          this.seg = "0" + this.segundos;
        } else if (this.segundos >= 10) {
          this.seg = "" + this.segundos;
        }

        if (this.minutos < 10) {
          this.min = "0" + this.minutos;
        } else if (this.minutos >= 10) {
          this.min = "" + this.minutos;
        }

        if (this.hora < 10) {
          this.hr = "0" + this.hora;
        } else if (this.hora >= 10) {
          this.hr = "" + this.hora;
        }
      }, 1000);
    }
    this.calcularTiempoInicial();
  }

  stop() {
    this.hr;
    this.min;
    this.seg;
    this.contador = null;
    this.tiempoTotal = this.hr + ":" + this.min + ":" + this.seg;
    this.calcularValorTotal();

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
}
