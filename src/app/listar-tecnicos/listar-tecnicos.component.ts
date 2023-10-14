import { Component, OnInit } from '@angular/core';
import { TecnicosService } from '../service/tecnicos.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-listar-tecnicos',
  templateUrl: './listar-tecnicos.component.html',
  styleUrls: ['./listar-tecnicos.component.scss']
})

export class ListarTecnicosComponent implements OnInit {
  data: any;
  adultosCount: any;
  searchText='';
  tec_id='';

  indice:string;

  constructor(
    private adultosService: TecnicosService,
    private rutaActiva: ActivatedRoute
    ) { 
     this.indice = "APP MIES";
  }

  ngOnInit(): void {
    this.tec_id = this.rutaActiva.snapshot.params['id'];
    console.log("el id es:"+this.tec_id);
    this.adultosService.getTecnicosCount(this.tec_id).subscribe(result => {
      this.adultosCount = result;
    });
    this.adultosService.getTecnicos(this.tec_id).subscribe(result => {
      this.data = result;
      console.log(result);
      for (let index = 0; index < this.adultosCount; index++) {
        if (this.data[index]['tec_genero']==1) {
          this.data[index]['tec_genero'] = "Masculino"
        } else {
          this.data[index]['tec_genero'] = "Femenino"
        }
      }
      console.log(this.data)
    });
  }

}
