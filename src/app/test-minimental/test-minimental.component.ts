import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MiniMental } from '../models/MiniMental';
import { MiniMentalService } from '../service/mini-mental.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-test-minimental',
  templateUrl: './test-minimental.component.html',
  styleUrls: ['./test-minimental.component.scss'],
})
export class TestMinimentalComponent implements OnInit {

  form: FormGroup;
  indice: string;
  idEncabezado: string;
  bloqueado: string = "no";
  public hora: number = 0;
  public minutos: number = 0;
  public segundos: number = 0;

  public seg: string = "00";
  public min: string = "00";
  public hr: string = "00";

  public contador: any;


  tiempoInicial: string;
  tiempoFinal: string;
  tiempoTotal: string;
  valorTotal: number;


  puntajeP1: number;
  puntajeP2: number;
  puntajeP3: number;
  puntajeP4: number;
  puntajeP5: number;
  puntajeP6: number;
  puntajeP7: number;
  puntajeP8: number;
  puntajeP9: number;
  puntajeP10: number;
  puntajeP11: number;
  puntajeP12: number;
  puntajeP13: number;
  puntajeP14: number;
  puntajeP15: number;
  puntajeP16: number;
  puntajeP17: number;
  puntajeP18: number;
  puntajeP19: number;
  puntajeP20: number;
  puntajeP21: number;
  puntajeP22: number;
  puntajeP23: number;
  puntajeP24: number;
  puntajeP25: number;
  puntajeP26: number;
  puntajeP27: number;
  puntajeP28: number;
  puntajeP29: number;
  puntajeP30: number;



  P1Seleccionada: string;
  P1: string[] = ['0(Incorrecto)', '1(Correcto)'];
  P2Seleccionada: string;
  P2: string[] = ['0(Incorrecto)', '1(Correcto)'];
  P3Seleccionada: string;
  P3: string[] = ['0(Incorrecto)', '1(Correcto)'];
  P4Seleccionada: string;
  P4: string[] = ['0(Incorrecto)', '1(Correcto)'];
  P5Seleccionada: string;
  P5: string[] = ['0(Incorrecto)', '1(Correcto)'];
  P6Seleccionada: string;
  P6: string[] = ['0(Incorrecto)', '1(Correcto)'];
  P7Seleccionada: string;
  P7: string[] = ['0(Incorrecto)', '1(Correcto)'];
  P8Seleccionada: string;
  P8: string[] = ['0(Incorrecto)', '1(Correcto)'];
  P9Seleccionada: string;
  P9: string[] = ['0(Incorrecto)', '1(Correcto)'];
  P10Seleccionada: string;
  P10: string[] = ['0(Incorrecto)', '1(Correcto)'];
  P11Seleccionada: string;
  P11: string[] = ['0(Incorrecto)', '1(Correcto)'];
  P12Seleccionada: string;
  P12: string[] = ['0(Incorrecto)', '1(Correcto)'];
  P13Seleccionada: string;
  P13: string[] = ['0(Incorrecto)', '1(Correcto)'];
  P14Seleccionada: string;
  P14: string[] = ['0(Incorrecto)', '1(Correcto)'];
  P15Seleccionada: string;
  P15: string[] = ['0(Incorrecto)', '1(Correcto)'];
  P16Seleccionada: string;
  P16: string[] = ['0(Incorrecto)', '1(Correcto)'];
  P17Seleccionada: string;
  P17: string[] = ['0(Incorrecto)', '1(Correcto)'];
  P18Seleccionada: string;
  P18: string[] = ['0(Incorrecto)', '1(Correcto)'];
  P19Seleccionada: string;
  P19: string[] = ['0(Incorrecto)', '1(Correcto)'];
  P20Seleccionada: string;
  P20: string[] = ['0(Incorrecto)', '1(Correcto)'];
  P21Seleccionada: string;
  P21: string[] = ['0(Incorrecto)', '1(Correcto)'];
  P22Seleccionada: string;
  P22: string[] = ['0(Incorrecto)', '1(Correcto)'];
  P23Seleccionada: string;
  P23: string[] = ['0(Incorrecto)', '1(Correcto)'];
  P24Seleccionada: string;
  P24: string[] = ['0(Incorrecto)', '1(Correcto)'];
  P25Seleccionada: string;
  P25: string[] = ['0(Incorrecto)', '1(Correcto)'];
  P26Seleccionada: string;
  P26: string[] = ['0(Incorrecto)', '1(Correcto)'];
  P27Seleccionada: string;
  P27: string[] = ['0(Incorrecto)', '1(Correcto)'];
  P28Seleccionada: string;
  P28: string[] = ['0(Incorrecto)', '1(Correcto)'];
  P29Seleccionada: string;
  P29: string[] = ['0(Incorrecto)', '1(Correcto)'];
  P30Seleccionada: string;
  P30: string[] = ['0(Incorrecto)', '1(Correcto)'];
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private _MiniMentalService: MiniMentalService,
    private aRouter:ActivatedRoute,
    private location:Location,
    ) {
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
      pregunta11: ['', [Validators.required]],
      pregunta12: ['', [Validators.required]],
      pregunta13: ['', [Validators.required]],
      pregunta14: ['', [Validators.required]],
      pregunta15: ['', [Validators.required]],
      pregunta16: ['', [Validators.required]],
      pregunta17: ['', [Validators.required]],
      pregunta18: ['', [Validators.required]],
      pregunta19: ['', [Validators.required]],
      pregunta20: ['', [Validators.required]],
      pregunta21: ['', [Validators.required]],
      pregunta22: ['', [Validators.required]],
      pregunta23: ['', [Validators.required]],
      pregunta24: ['', [Validators.required]],
      pregunta25: ['', [Validators.required]],
      pregunta26: ['', [Validators.required]],
      pregunta27: ['', [Validators.required]],
      pregunta28: ['', [Validators.required]],
      pregunta29: ['', [Validators.required]],
      pregunta30: ['', [Validators.required]]
    });
    this.indice = "Test Mini Mental";
    this.idEncabezado = this.aRouter.snapshot.paramMap.get("enc_id");
    console.log(this.idEncabezado);
  }
  

  agregarMiniMental() {

    //console.log(this.form.get('form')?.value)
    this.stop();
    this.calcularTiempoFinal();

    const MINIMENTAL: MiniMental = {
      idEncabezado: this.idEncabezado,
      orientacion_tiempo: {
        mim_p1_dia: this.P1Seleccionada,
        mim_p1_mes: this.P2Seleccionada,
        mim_p1_anio: this.P3Seleccionada,
        mim_p1_semana: this.P4Seleccionada,
        mim_p1_hora: this.P5Seleccionada,

    },
      orientacion_en_el_espacio:{
        min_p2_lugar: this.P6Seleccionada,
        min_p2_piso: this.P7Seleccionada,
        min_p2_barrio: this.P8Seleccionada,
        min_p2_ciudad: this.P9Seleccionada,
        min_p2_pais: this.P10Seleccionada,

    },
      memoria: {
        mim_p3_papel: this.P11Seleccionada,
        mim_p3_bicicleta: this.P12Seleccionada,
        mim_p3_cuchara: this.P13Seleccionada,

    },
      atencion_y_calculo: {
        mim_p4_calculo_1: this.P14Seleccionada,
        mim_p4_calculo_2: this.P15Seleccionada,
        mim_p4_calculo_3: this.P16Seleccionada,
        mim_p4_calculo_4: this.P17Seleccionada,
        mim_p4_calculo_5: this.P18Seleccionada,

    },
      memoria_diferida: {
        mim_p5_papel: this.P19Seleccionada,
        mim_p5_bicicleta: this.P20Seleccionada,
        mim_p5_cuchara: this.P21Seleccionada,

    },
      denominacion: {
        mim_p6_mlapiz: this.P22Seleccionada,
        mim_p6_mreloj: this.P23Seleccionada,

    },
      repeticion_de_una_frase:this.P24Seleccionada,
      comprension_ejecucion_de_orden: {
        mim_p8_mderecha: this.P25Seleccionada,
        mim_p8_doblar: this.P26Seleccionada,
        mim_p8_dejar: this.P27Seleccionada,

    },
      lectura: this.P28Seleccionada,
      escritura: this.P29Seleccionada,
      copia_de_un_dibujo:this.P30Seleccionada,
      tiempo_inicial: this.tiempoInicial,
      tiempo_final: this.tiempoFinal,
      tiempo_total: this.tiempoTotal,
      puntaje_total: this.valorTotal
    }

    this._MiniMentalService.guardarMinimental(MINIMENTAL).subscribe(data => {
      console.log(data);
      clearInterval(this.contador);
      alert("PUNTAJE TOTAL: " + this.valorTotal);
      //this.router.navigate(['/app-menuform'], { state: { bloqueado: bloqueado } })
      this.onBack();
    }, error => {
      console.log(error);
    })

  }

  onBack(){
    this.location.back();
  }
  funcionpuntajeP1() {
    if (this.P1Seleccionada == this.P1[0]) {
      this.puntajeP1 = 0;
    }
    if (this.P1Seleccionada == this.P1[1]) {
      this.puntajeP1 = 1;
    }
    return this.puntajeP1;
  }

  funcionpuntajeP2() {
    if (this.P2Seleccionada == this.P2[0]) {
      this.puntajeP2 = 0;
    }
    if (this.P2Seleccionada == this.P2[1]) {
      this.puntajeP2 = 1;
    }
    return this.puntajeP2;
  }

  funcionpuntajeP3() {
    if (this.P3Seleccionada == this.P3[0]) {
      this.puntajeP3 = 0;
    }
    if (this.P3Seleccionada == this.P3[1]) {
      this.puntajeP3 = 1;
    }
    return this.puntajeP3;
  }

  funcionpuntajeP4() {
    if (this.P4Seleccionada == this.P4[0]) {
      this.puntajeP4 = 0;
    }
    if (this.P4Seleccionada == this.P4[1]) {
      this.puntajeP4 = 1;
    }
    return this.puntajeP4;
  }

  funcionpuntajeP5() {
    if (this.P5Seleccionada == this.P5[0]) {
      this.puntajeP5 = 0;
    }
    if (this.P5Seleccionada == this.P5[1]) {
      this.puntajeP5 = 1;
    }
    return this.puntajeP5;
  }

  funcionpuntajeP6() {
    if (this.P6Seleccionada == this.P6[0]) {
      this.puntajeP6 = 0;
    }
    if (this.P6Seleccionada == this.P6[1]) {
      this.puntajeP6 = 1;
    }
    return this.puntajeP6;
  }

  funcionpuntajeP7() {
    if (this.P7Seleccionada == this.P7[0]) {
      this.puntajeP7 = 0;
    }
    if (this.P7Seleccionada == this.P7[1]) {
      this.puntajeP7 = 1;
    }
    return this.puntajeP7;
  }

  funcionpuntajeP8() {
    if (this.P8Seleccionada == this.P8[0]) {
      this.puntajeP8 = 0;
    }
    if (this.P8Seleccionada == this.P8[1]) {
      this.puntajeP8 = 1;
    }
    return this.puntajeP8;
  }

  funcionpuntajeP9() {
    if (this.P9Seleccionada == this.P9[0]) {
      this.puntajeP9 = 0;
    }
    if (this.P9Seleccionada == this.P9[1]) {
      this.puntajeP9 = 1;
    }
    return this.puntajeP9;
  }

  funcionpuntajeP10() {
    if (this.P10Seleccionada == this.P10[0]) {
      this.puntajeP10 = 0;
    }
    if (this.P10Seleccionada == this.P10[1]) {
      this.puntajeP10 = 1;
    }
    return this.puntajeP10;
  }

  funcionpuntajeP11() {
    if (this.P11Seleccionada == this.P11[0]) {
      this.puntajeP11 = 0;
    }
    if (this.P11Seleccionada == this.P11[1]) {
      this.puntajeP11 = 1;
    }
    return this.puntajeP11;
  }

  funcionpuntajeP12() {
    if (this.P12Seleccionada == this.P12[0]) {
      this.puntajeP12 = 0;
    }
    if (this.P12Seleccionada == this.P12[1]) {
      this.puntajeP12 = 1;
    }
    return this.puntajeP12;
  }

  funcionpuntajeP13() {
    if (this.P13Seleccionada == this.P13[0]) {
      this.puntajeP13 = 0;
    }
    if (this.P13Seleccionada == this.P13[1]) {
      this.puntajeP13 = 1;
    }
    return this.puntajeP13;
  }

  funcionpuntajeP14() {
    if (this.P14Seleccionada == this.P14[0]) {
      this.puntajeP14 = 0;
    }
    if (this.P14Seleccionada == this.P14[1]) {
      this.puntajeP14 = 1;
    }
    return this.puntajeP14;
  }

  funcionpuntajeP15() {
    if (this.P15Seleccionada == this.P15[0]) {
      this.puntajeP15 = 0;
    }
    if (this.P15Seleccionada == this.P15[1]) {
      this.puntajeP15 = 1;
    }
    return this.puntajeP15;
  }

  funcionpuntajeP16() {
    if (this.P16Seleccionada == this.P16[0]) {
      this.puntajeP16 = 0;
    }
    if (this.P16Seleccionada == this.P16[1]) {
      this.puntajeP16 = 1;
    }
    return this.puntajeP16;
  }

  funcionpuntajeP17() {
    if (this.P17Seleccionada == this.P17[0]) {
      this.puntajeP17 = 0;
    }
    if (this.P17Seleccionada == this.P17[1]) {
      this.puntajeP17 = 1;
    }
    return this.puntajeP17;
  }

  funcionpuntajeP18() {
    if (this.P18Seleccionada == this.P18[0]) {
      this.puntajeP18 = 0;
    }
    if (this.P18Seleccionada == this.P18[1]) {
      this.puntajeP18 = 1;
    }
    return this.puntajeP18;
  }

  funcionpuntajeP19() {
    if (this.P19Seleccionada == this.P19[0]) {
      this.puntajeP19 = 0;
    }
    if (this.P19Seleccionada == this.P19[1]) {
      this.puntajeP19 = 1;
    }
    return this.puntajeP19;
  }

  funcionpuntajeP20() {
    if (this.P20Seleccionada == this.P20[0]) {
      this.puntajeP20 = 0;
    }
    if (this.P20Seleccionada == this.P20[1]) {
      this.puntajeP20 = 1;
    }
    return this.puntajeP20;
  }

  funcionpuntajeP21() {
    if (this.P21Seleccionada == this.P21[0]) {
      this.puntajeP21 = 0;
    }
    if (this.P21Seleccionada == this.P21[1]) {
      this.puntajeP21 = 1;
    }
    return this.puntajeP21;
  }
  funcionpuntajeP22() {
    if (this.P22Seleccionada == this.P22[0]) {
      this.puntajeP22 = 0;
    }
    if (this.P22Seleccionada == this.P22[1]) {
      this.puntajeP22 = 1;
    }
    return this.puntajeP22;
  }

  funcionpuntajeP23() {
    if (this.P23Seleccionada == this.P23[0]) {
      this.puntajeP23 = 0;
    }
    if (this.P23Seleccionada == this.P23[1]) {
      this.puntajeP23 = 1;
    }
    return this.puntajeP23;
  }

  funcionpuntajeP24() {
    if (this.P24Seleccionada == this.P24[0]) {
      this.puntajeP24 = 0;
    }
    if (this.P24Seleccionada == this.P24[1]) {
      this.puntajeP24 = 1;
    }
    return this.puntajeP24;
  }
  funcionpuntajeP25() {
    if (this.P25Seleccionada == this.P25[0]) {
      this.puntajeP25 = 0;
    }
    if (this.P25Seleccionada == this.P25[1]) {
      this.puntajeP25 = 1;
    }
    return this.puntajeP25;
  }
  funcionpuntajeP26() {
    if (this.P26Seleccionada == this.P26[0]) {
      this.puntajeP26 = 0;
    }
    if (this.P26Seleccionada == this.P26[1]) {
      this.puntajeP26 = 1;
    }
    return this.puntajeP26;
  }

  funcionpuntajeP27() {
    if (this.P27Seleccionada == this.P27[0]) {
      this.puntajeP27 = 0;
    }
    if (this.P27Seleccionada == this.P27[1]) {
      this.puntajeP27 = 1;
    }
    return this.puntajeP27;
  }
  funcionpuntajeP28() {
    if (this.P28Seleccionada == this.P28[0]) {
      this.puntajeP28 = 0;
    }
    if (this.P28Seleccionada == this.P28[1]) {
      this.puntajeP28 = 1;
    }
    return this.puntajeP28;
  }
  funcionpuntajeP29() {
    if (this.P29Seleccionada == this.P29[0]) {
      this.puntajeP29 = 0;
    }
    if (this.P29Seleccionada == this.P29[1]) {
      this.puntajeP29 = 1;
    }
    return this.puntajeP29;
  }
  funcionpuntajeP30() {
    if (this.P30Seleccionada == this.P30[0]) {
      this.puntajeP30 = 0;
    }
    if (this.P30Seleccionada == this.P30[1]) {
      this.puntajeP30 = 1;
    }
    return this.puntajeP30;
  }

  calcularValorTotal() {
    this.valorTotal =
      this.funcionpuntajeP1() +
      this.funcionpuntajeP2() +
      this.funcionpuntajeP3() +
      this.funcionpuntajeP4() +
      this.funcionpuntajeP5() +
      this.funcionpuntajeP6() +
      this.funcionpuntajeP7() +
      this.funcionpuntajeP8() +
      this.funcionpuntajeP9() +
      this.funcionpuntajeP10() +
      this.funcionpuntajeP11() +
      this.funcionpuntajeP12() +
      this.funcionpuntajeP13() +
      this.funcionpuntajeP14() +
      this.funcionpuntajeP15() +
      this.funcionpuntajeP16() +
      this.funcionpuntajeP17() +
      this.funcionpuntajeP18() +
      this.funcionpuntajeP19() +
      this.funcionpuntajeP20() +
      this.funcionpuntajeP21() +
      this.funcionpuntajeP22() +
      this.funcionpuntajeP23() +
      this.funcionpuntajeP24() +
      this.funcionpuntajeP25() +
      this.funcionpuntajeP26() +
      this.funcionpuntajeP27() +
      this.funcionpuntajeP28() +
      this.funcionpuntajeP29() +
      this.funcionpuntajeP30()

    return this.valorTotal;
  }



  ngOnInit(): void {
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
