import { Component, OnInit, Input } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-menu-form',
  templateUrl: './menu-form.component.html',
  styleUrls: ['./menu-form.component.scss'],
  
})
export class MenuFormComponent implements OnInit {


  ImagePath: string;
  ImagePath2: string;
  ImagePath3: string;
  indice: string;
  ubicacion:any;
  idEncabezado:any;
  am_id:any;
  am_nombres:any;
  am_apellidos:any;
  //enc_id:any;
  constructor(
    private aRouter: ActivatedRoute,
    private router: Router,
    private location:Location) {
    this.indice="Formularios"
    this.ImagePath = 'https://i.eldiario.com.ec/fotos-manabi-ecuador/2009/mies.png'
    this.ImagePath2 = 'https://cdn-icons-png.flaticon.com/512/825/825590.png'
    this.ImagePath3 ='https://img2.freepng.es/20180402/ysw/kisspng-computer-icons-test-survey-5ac2cf57df8907.6438385715227165039156.jpg'
    //this.ubicacion = this.router.getCurrentNavigation()!.extras.state!['ubicacionName'];
  }

  ngOnInit(): void {
    this.am_nombres = this.aRouter.snapshot.paramMap.get("am_nombre");
    this.am_apellidos= this.aRouter.snapshot.paramMap.get("am_apellido");
    this.idEncabezado = this.aRouter.snapshot.paramMap.get("enc_id");
    //console.log(this.aRouter.snapshot.paramMap.get()
    //console.log(this.am_nombres+this.am_apellidos+this.enc_id);
    //console.log(this.ubicacion)
  }

  dirigirBarthel(){
    this.router.navigate(['/IndiceBarthel/'+this.idEncabezado])
  }
  dirigirLawton(){
    console.log(this.idEncabezado, "id")
    this.router.navigate(['/IndiceLawton/'+this.idEncabezado])
  }
  dirigirYesavage(idEncabezado: any){
    console.log(this.idEncabezado, "id")
    this.router.navigate(['/escala-yesavage/'+this.idEncabezado])
  }
  dirigirMini(){
    console.log(this.idEncabezado, "id")
    this.router.navigate(['/MiniMental/'+this.idEncabezado])
  }
  dirigirObservacion(){
    console.log(this.idEncabezado, "id")
    this.router.navigate(['app-observacion/'+this.idEncabezado]);
  }
  onBack(){
    this.location.back();
    this.location.back();
  }
}


