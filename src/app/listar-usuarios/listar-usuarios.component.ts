import { Component, OnInit } from '@angular/core';
import { AdultosService } from '../service/adultos.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.scss']
})
export class ListarUsuariosComponent implements OnInit {
  data: any;
  adultosCount: any;
  searchText='';
  tec_id='';

  indice:string;

  constructor(
    private adultosService: AdultosService,
    private rutaActiva: ActivatedRoute
    ) { 
     this.indice = "APP MIES";
  }

  ngOnInit(): void {
    this.tec_id = this.rutaActiva.snapshot.params['id'];
    console.log("el id es:"+this.tec_id);
    this.adultosService.getAdultosCount(this.tec_id).subscribe(result => {
      this.adultosCount = result;
    });
    this.adultosService.getAdultos(this.tec_id).subscribe(result => {
      this.data = result;
      for (let index = 0; index < this.adultosCount; index++) {
        if (this.data[index]['am_genero']==1) {
          this.data[index]['am_genero'] = "Masculino"
        } else {
          this.data[index]['am_genero'] = "Femenino"
        }
      }
      console.log(this.data)
    });
  }

}
