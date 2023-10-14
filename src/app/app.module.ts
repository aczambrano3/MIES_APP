import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { MenuFormComponent } from './menu-form/menu-form.component';
import { ObservacionComponent } from './observacion/observacion.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { EscalaYesavageComponent } from './escala_yesavage/escala-yesavage/escala-yesavage.component';
import { TestEscalaYesavageComponent } from './escala_yesavage/test-escala-yesavage/test-escala-yesavage.component';
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';
import { CrearAdultoComponent } from './crear-adulto/crear-adulto.component';
import { ModificarAdultoComponent } from './modificar-adulto/modificar-adulto.component';
import { TestBarthelComponent } from './test-barthel/test-barthel.component';
import { IndiceBarthelComponent } from './indice-barthel/indice-barthel.component';
import { TestLawtonComponent } from './test-lawton/test-lawton.component';
import { IndiceLawtonComponent } from './indice-lawton/indice-lawton.component';
import { TestMinimentalComponent } from './test-minimental/test-minimental.component';
import { LoginComponent } from './login/login.component';



import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MaterialFileInputModule } from 'ngx-material-file-input';
import {MatRadioModule} from '@angular/material/radio';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DatePipe } from '@angular/common';
import { ListarTecnicosComponent } from './listar-tecnicos/listar-tecnicos.component';
import { ModicicarTecnicoComponent } from './modicicar-tecnico/modicicar-tecnico.component';




@NgModule({
  declarations: [
    AppComponent,
    ObservacionComponent,
    MenuComponent,
    MenuFormComponent,
    UbicacionComponent,
    EscalaYesavageComponent,
    TestEscalaYesavageComponent,
    CrearAdultoComponent,
    ListarUsuariosComponent,
    ModificarAdultoComponent,
    TestBarthelComponent,
    IndiceBarthelComponent,
    IndiceLawtonComponent,
    TestLawtonComponent,   
    TestMinimentalComponent,
    LoginComponent,
    ListarTecnicosComponent,
    ModicicarTecnicoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MaterialFileInputModule,
    MatRadioModule,
    MatListModule,
    MatToolbarModule,
    MatDialogModule,
    MatSelectModule,
    Ng2SearchPipeModule,

  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
