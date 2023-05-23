import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { ReactiveFormsModule } from '@angular/forms';

 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './componentes/login/login.component';
import { VeranteproyectoComponent } from './componentes/veranteproyecto/veranteproyecto.component';
import { AgregaranteproyectoComponent } from './componentes/agregaranteproyecto/agregaranteproyecto.component';
import { CabezaNavbarComponent } from './componentes/cabeza-navbar/cabeza-navbar.component';
import { PieFooterComponent } from './componentes/pie-footer/pie-footer.component';
import { VisualizacionItemsComponent } from './componentes/visualizacion-items/visualizacion-items.component';
import { AgregarlistaItemsComponent } from './componentes/agregarlista-items/agregarlista-items.component';
import { RegistroDeItemsComponent } from './componentes/registro-de-items/registro-de-items.component';
import { ListardescripcionDelTemaComponent } from './componentes/listardescripcion-del-tema/listardescripcion-del-tema.component';
import { DescripcionDelTemaComponent } from './componentes/descripcion-del-tema/descripcion-del-tema.component';
import { ListarplanteamientoProblemaComponent } from './componentes/listarplanteamiento-problema/listarplanteamiento-problema.component';
import { PlanteamientoProblemaComponent } from './componentes/planteamiento-problema/planteamiento-problema.component';
import { ListarHipotesisComponent } from './componentes/listar-hipotesis/listar-hipotesis.component';
import { HipotesisComponent } from './componentes/hipotesis/hipotesis.component';
import { ListarObjectivoGeneralComponent } from './componentes/listar-objectivo-general/listar-objectivo-general.component';
import { ObjectivoGeneralComponent } from './componentes/objectivo-general/objectivo-general.component';
import { ListarTituloTentativoComponent } from './componentes/listar-titulo-tentativo/listar-titulo-tentativo.component';
import { TituloTentativoComponent } from './componentes/titulo-tentativo/titulo-tentativo.component';
import { ListarJustificacionComponent } from './componentes/listar-justificacion/listar-justificacion.component';
import { JustificacionComponent } from './componentes/justificacion/justificacion.component';
import { ListarCorrecionesComponent } from './componentes/listar-correciones/listar-correciones.component';
import { CorrecionesComponent } from './componentes/correciones/correciones.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VeranteproyectoComponent,
    AgregaranteproyectoComponent,
    CabezaNavbarComponent,
    PieFooterComponent,
    VisualizacionItemsComponent,
    AgregarlistaItemsComponent,
    RegistroDeItemsComponent,
    ListardescripcionDelTemaComponent,
    DescripcionDelTemaComponent,
    ListarplanteamientoProblemaComponent,
    PlanteamientoProblemaComponent,
    ListarHipotesisComponent,
    HipotesisComponent,
    ListarObjectivoGeneralComponent,
    ObjectivoGeneralComponent,
    ListarTituloTentativoComponent,
    TituloTentativoComponent,
    ListarJustificacionComponent,
    JustificacionComponent,
    ListarCorrecionesComponent,
    CorrecionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
}) 
export class AppModule { }
