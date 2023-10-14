import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-escala-yesavage',
  templateUrl: './escala-yesavage.component.html',
  styleUrls: ['./escala-yesavage.component.scss']
})
export class EscalaYesavageComponent implements OnInit {

  indice:string;
  idEncabezado:string;

  constructor(
    private router: Router,
    private aRouter: ActivatedRoute,
    private location:Location,
  ) {
    this.indice = "Escala Yesavage"
  }

  ngOnInit(): void {
    this.idEncabezado = this.aRouter.snapshot.paramMap.get("enc_id");
    console.log(this.idEncabezado)
  }

  btnContinuar(idEncabezado: any) {
    // al hacer el clic en el botón se asigna el valor del input a la variable
    this.router.navigate(['/test-escala-yesavage/'+this.idEncabezado])
  }

  onBack(){
    this.location.back();
  }
}
