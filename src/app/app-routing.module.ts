import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservacionComponent } from './observacion/observacion.component';
import { MenuComponent } from './menu/menu.component';
import { MenuFormComponent } from './menu-form/menu-form.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';

import { EscalaYesavageComponent } from './escala_yesavage/escala-yesavage/escala-yesavage.component';
import { TestEscalaYesavageComponent } from './escala_yesavage/test-escala-yesavage/test-escala-yesavage.component';

import { CrearAdultoComponent } from './crear-adulto/crear-adulto.component';
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';
import { ModificarAdultoComponent } from './modificar-adulto/modificar-adulto.component';
import { IndiceBarthelComponent } from './indice-barthel/indice-barthel.component';
import { TestBarthelComponent } from './test-barthel/test-barthel.component';
import { IndiceLawtonComponent } from './indice-lawton/indice-lawton.component';
import { TestLawtonComponent } from './test-lawton/test-lawton.component';
import { TestMinimentalComponent } from './test-minimental/test-minimental.component';
import { LoginComponent } from './login/login.component';
import { ListarTecnicosComponent } from './listar-tecnicos/listar-tecnicos.component';
import { ModicicarTecnicoComponent } from './modicicar-tecnico/modicicar-tecnico.component';


const routes: Routes = [
  {path: 'app-observacion/:enc_id', component:ObservacionComponent},
  {path: 'app-menu', component:MenuComponent},
  {path: 'app-menuform/:am_nombre/:am_apellido/:enc_id', component:MenuFormComponent},
  {path: 'app-ubicacion/:am_id/:nombre/:apellido/:tec_id', component:UbicacionComponent},
  {path: 'escala-yesavage/:enc_id', component:EscalaYesavageComponent},
  {path: 'test-escala-yesavage/:enc_id', component:TestEscalaYesavageComponent},
  {path: 'crearAdulto/:id', component: CrearAdultoComponent},
  {path: 'modificarAdulto/:id', component: ModificarAdultoComponent },
  {path: 'modificarTecnico/:id', component: ModicicarTecnicoComponent },
  {path: 'listar-usuarios/:id', component: ListarUsuariosComponent  },
  {path: 'listar-tecnicos/:id', component: ListarTecnicosComponent  },
  {path: 'TestBarthel/:enc_id/:respondido', component: TestBarthelComponent },
  {path: 'IndiceBarthel/:enc_id', component: IndiceBarthelComponent },
  {path: 'IndiceLawton/:enc_id', component: IndiceLawtonComponent },
  {path: 'TestLawton/:enc_id/:respondido', component: TestLawtonComponent },
  {path: 'MiniMental/:enc_id', component: TestMinimentalComponent },
  {path: '', component: LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
