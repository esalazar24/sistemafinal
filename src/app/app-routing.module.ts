import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VeranteproyectoComponent } from './componentes/veranteproyecto/veranteproyecto.component';
import { AgregaranteproyectoComponent } from './componentes/agregaranteproyecto/agregaranteproyecto.component';
import { LoginComponent } from './componentes/login/login.component';
import { VisualizacionItemsComponent } from './componentes/visualizacion-items/visualizacion-items.component';
import { AgregarlistaItemsComponent } from './componentes/agregarlista-items/agregarlista-items.component';
import { RegistroDeItemsComponent } from './componentes/registro-de-items/registro-de-items.component';
import { DescripcionDelTemaComponent } from './componentes/descripcion-del-tema/descripcion-del-tema.component';
import { ListardescripcionDelTemaComponent } from './componentes/listardescripcion-del-tema/listardescripcion-del-tema.component';
import { PlanteamientoProblemaComponent } from './componentes/planteamiento-problema/planteamiento-problema.component';
import { HipotesisComponent } from './componentes/hipotesis/hipotesis.component';
import { ListarHipotesisComponent } from './componentes/listar-hipotesis/listar-hipotesis.component';
import { ObjectivoGeneralComponent } from './componentes/objectivo-general/objectivo-general.component';
import { ListarObjectivoGeneralComponent } from './componentes/listar-objectivo-general/listar-objectivo-general.component';
import { TituloTentativoComponent } from './componentes/titulo-tentativo/titulo-tentativo.component';
import { ListarTituloTentativoComponent } from './componentes/listar-titulo-tentativo/listar-titulo-tentativo.component';
import { JustificacionComponent } from './componentes/justificacion/justificacion.component';
import { ListarJustificacionComponent } from './componentes/listar-justificacion/listar-justificacion.component';
import { CorrecionesComponent } from './componentes/correciones/correciones.component';
import { ListarCorrecionesComponent } from './componentes/listar-correciones/listar-correciones.component';
import { ListarplanteamientoProblemaComponent } from './componentes/listarplanteamiento-problema/listarplanteamiento-problema.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'veranteproyecto', component: VeranteproyectoComponent },
  { path: 'agregaranteproyecto', component: AgregaranteproyectoComponent },
  { path: 'editaranteproyecto/:id', component: AgregaranteproyectoComponent },

  { path: 'visualizacionItems', component: VisualizacionItemsComponent },
  { path: 'agregarLitaItems', component: AgregarlistaItemsComponent },
  { path: 'editarLitaItems/:id', component: AgregarlistaItemsComponent },

  { path: 'RegistroItems', component: RegistroDeItemsComponent },

  { path: 'Descripcion', component: DescripcionDelTemaComponent },
  { path: 'ListarLaDescripcion', component: ListardescripcionDelTemaComponent },
  { path: 'modificardescripcion/:id', component: DescripcionDelTemaComponent },

  { path: 'PlanteamientoProblema', component: PlanteamientoProblemaComponent },
  { path: 'ListarPlanteamiento', component: ListarplanteamientoProblemaComponent },
  { path: 'Modificacion/:id', component: PlanteamientoProblemaComponent },

  { path: 'VHipotesis', component: HipotesisComponent },
  { path: 'VerHipotesis', component: ListarHipotesisComponent },
  { path: 'ModificacionHIpotesis/:id', component: HipotesisComponent },

  { path: 'objectivoGeneral', component: ObjectivoGeneralComponent },
  { path: 'ListarObjectivo', component: ListarObjectivoGeneralComponent },
  { path: 'editarObjectivo/:id', component: ObjectivoGeneralComponent },

  { path: 'TituloTentativo', component: TituloTentativoComponent },
  { path: 'LitarTentativo', component: ListarTituloTentativoComponent },
  { path: 'editarTituloTentativo/:id', component: TituloTentativoComponent },

  {path: 'justificacion', component: JustificacionComponent},
  {path: 'LISTARJUSTIFICACION', component: ListarJustificacionComponent},
  {path: 'ModificarEDitarJustificacion/:id', component: JustificacionComponent},

  {path: 'correciones', component: CorrecionesComponent},
  {path: 'ListarCorreciones', component: ListarCorrecionesComponent},
  {path: 'ModificacionSugerencias/:id', component: CorrecionesComponent},
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }