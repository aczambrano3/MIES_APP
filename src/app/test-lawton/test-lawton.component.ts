import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Lawton } from '../models/lawton';
import { LawtonService } from '../service/lawton.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-test-lawton',
  templateUrl: './test-lawton.component.html',
  styleUrls: ['./test-lawton.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class TestLawtonComponent implements OnInit {

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
  estado_l:string;
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

  P1: string[] = ['Utiliza el teléfono por iniciativa propia', 'Es capaz de marcar bien algunos números familiares',
    'Es capaz de contestar al teléfono, pero no de marcar','No utiliza el teléfono'];
  P2: string[] = ['Realiza todas las compras necesarias independientemente',
    'Realiza independientemente pequeñas compras',
    'Necesita ir acompañado para cualquier compra',
    'Totalmente incapaz de comprar'];
  P3: string[] = ['Organiza, prepara y sirve las comidas por si solo adecuadamente',
    'Prepara adecuadamente las comidas si se le proporcionan los ingredientes',
  'Prepara, calienta y sirve las comidas, pero no sigue una dieta adecuada',
'Necesita que le preparen y sirvan las comidas'];
  P4: string[] = ['Mantiene la casa solo o con ayuda ocasional ( para trabajos pesados)', 
  'Realiza tareas ligeras, como lavar los platos o hacer las camas',
    'Realiza tareas ligeras, pero no puede mantener un adecuado nivel de limpieza',
  'Necesita ayuda en todas las labores de casa',
'No participa en ninguna labor de la casa<'];
  P5: string[] = ['Lava por sí solo toda la ropa', 
  'Lava por sí solo pequeñas prendas',
  'Todo el lavado de ropa debe ser realizado por otro.'];
  P6: string[] = ['Viaja solo en transporte público o conduce su propio coche', 
  'Es capaz de coger un taxi, pero no usa otro medio de transporte'
    , 'Viaja en transporte público cuando va acompañado por otra persona'
    , 'Utiliza el taxi o el automóvil sólo con la ayuda de otros',
  'No viaja'];
  P7: string[] = ['Es capaz de tomar su medicación a la dosis y hora adecuada', 
  'Realiza independientemente pequeñas compras.'
    , 'Independiente para subir y bajar.',
  'Toma su medicación si la dosis es preparada previamente',
'No es capaz de administrarse su medicación'];
  P8: string[] = ['Se encarga de sus asuntos económicos por si solo', 
  'Realiza las compras de cada día, pero necesita ayuda con las grandes compras y en los bancos'
    , 'Incapaz de manejar dinero'];

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private _LawtonService: LawtonService,
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
    });
    this.indice = "Test Lawton";
    //this.respondido = this.router.getCurrentNavigation()!.extras.state!['respondido'];
    //this.idEncabezado = this.router.getCurrentNavigation()!.extras.state!['idEncabezado'];
  }

  agregarLawton(bloqueado: any) {

    //console.log(this.form.get('form')?.value)
    this.stop();
    this.calcularTiempoFinal();
    const LAWTON: Lawton = {
      idEncabezado: this.idEncabezado,
      lb_p1: this.P1Seleccionada,
      lb_p2: this.P2Seleccionada,
      lb_p3: this.P3Seleccionada,
      lb_p4: this.P4Seleccionada,
      lb_p5: this.P5Seleccionada,
      lb_p6: this.P6Seleccionada,
      lb_p7: this.P7Seleccionada,
      lb_p8: this.P8Seleccionada,
      tiempo_inicial: this.tiempoInicial,
      tiempo_final: this.tiempoFinal,
      tiempo_total: this.tiempoTotal,
      estado: this.respondido,
      puntaje_total: this.valorTotal
    }

    this._LawtonService.guardarLawton(LAWTON).subscribe(data => {
      console.log(data);
      clearInterval(this.contador);
      alert("PUNTAJE TOTAL: " + this.valorTotal);
      //this.router.navigate(['/app-menuform'],{state: { bloqueado: bloqueado}})
      this.onBack();
    }, error => {
      console.log(error);
    })
  }
  onBack(){
    this.location.back();
    this.location.back();
  }

  funcionvalorP1() {
    if (this.P1Seleccionada == this.P1[0]) {
      this.valorP1 = 1;
    }
    if (this.P1Seleccionada == this.P1[1]) {
      this.valorP1 = 1;
    }
    if (this.P1Seleccionada == this.P1[2]) {
      this.valorP1 = 1;
    }
    if (this.P1Seleccionada == this.P1[3]) {
      this.valorP1 = 0;
    }
    return this.valorP1;
  }

  funcionvalorP2() {
    if (this.P2Seleccionada == this.P2[0]) {
      this.valorP2 = 1;
    }
    if (this.P2Seleccionada == this.P2[1]) {
      this.valorP2 = 1;
    }
    if (this.P2Seleccionada == this.P2[2]) {
      this.valorP2 = 1;
    }
    if (this.P2Seleccionada == this.P2[3]) {
      this.valorP2 = 0;
    }
    return this.valorP2;
  }

  funcionvalorP3() {
    if (this.P3Seleccionada == this.P3[0]) {
      this.valorP3 = 1;
    }
    if (this.P3Seleccionada == this.P3[1]) {
      this.valorP3 = 0;
    }
    if (this.P3Seleccionada == this.P3[2]) {
      this.valorP3 = 0;
    }
    if (this.P3Seleccionada == this.P3[3]) {
      this.valorP3 = 0;
    }
    return this.valorP3;
  }

  funcionvalorP4() {
    if (this.P4Seleccionada == this.P4[0]) {
      this.valorP4 = 1;
    }
    if (this.P4Seleccionada == this.P4[1]) {
      this.valorP4 = 1;
    }
    if (this.P4Seleccionada == this.P4[2]) {
      this.valorP4 = 1;
    }
    if (this.P4Seleccionada == this.P4[3]) {
      this.valorP4 = 1;
    }
    if (this.P4Seleccionada == this.P4[4]) {
      this.valorP4 = 0;
    }
    return this.valorP4;
  }

  funcionvalorP5() {
    if (this.P5Seleccionada == this.P5[0]) {
      this.valorP5 = 1;
    }
    if (this.P5Seleccionada == this.P5[1]) {
      this.valorP5 = 1;
    }
    if (this.P5Seleccionada == this.P5[2]) {
      this.valorP5 = 0;
    }
    return this.valorP5;
  }

  funcionvalorP6() {
    if (this.P6Seleccionada == this.P6[0]) {
      this.valorP6 = 1;
    }
    if (this.P6Seleccionada == this.P6[1]) {
      this.valorP6 = 1;
    }
    if (this.P6Seleccionada == this.P6[2]) {
      this.valorP6 = 1;
    }
    if (this.P6Seleccionada == this.P6[3]) {
      this.valorP6 = 0;
    }
    if (this.P6Seleccionada == this.P6[4]) {
      this.valorP6 = 0;
    }
    return this.valorP6;
  }

  funcionvalorP7() {
    if (this.P7Seleccionada == this.P7[0]) {
      this.valorP7 = 1;
    }
    if (this.P7Seleccionada == this.P7[1]) {
      this.valorP7 = 0;
    }
    if (this.P7Seleccionada == this.P7[2]) {
      this.valorP7 = 0;
    }
    if (this.P7Seleccionada == this.P7[3]) {
      this.valorP7 = 0;
    }
    if (this.P7Seleccionada == this.P7[4]) {
      this.valorP7 = 0;
    }
    return this.valorP7;
  }

  funcionvalorP8() {
    if (this.P8Seleccionada == this.P8[0]) {
      this.valorP8 = 1;
    }
    if (this.P8Seleccionada == this.P8[1]) {
      this.valorP8 = 1;
    }
    if (this.P8Seleccionada == this.P8[2]) {
      this.valorP8 = 0;
    }
    return this.valorP8;
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
      this.funcionvalorP8() 
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
