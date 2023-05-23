import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlanteamientoProblemaService } from 'src/app/servicios/planteamiento-problema.service';

@Component({
  selector: 'app-planteamiento-problema',
  templateUrl: './planteamiento-problema.component.html',
  styleUrls: ['./planteamiento-problema.component.sass']
})
export class PlanteamientoProblemaComponent implements OnInit {
  submitted = false;
  CrearplanteamientoProblema: FormGroup;
  texto = 'Agregar Pranteamiento del Probrema';
  TablaDescripcionDelTema: any[] = [];
  id: string | null;
  
    constructor(private fb: FormBuilder,
      private _planteamientoProblemaService: PlanteamientoProblemaService,
      private router: Router,
      private aRoute: ActivatedRoute) {
      this.CrearplanteamientoProblema = this.fb.group({
        variableplanteamientoProblema: ['', Validators.required]
      })
      this.id = this.aRoute.snapshot.paramMap.get('id');
      
     }
  
    ngOnInit(): void {
      this.editar();
      this.DesabitlitarItmes();
    }
  
    agregarEditarplanteamientoProblema(){
      this.submitted = true;
      if(this.CrearplanteamientoProblema.invalid){
        return;
      }
      if(this.id ===null){
        this.agregarplanteamientoproblema();
      }else{
        this.editarplanteamientoProblema(this.id);
      }
  }
  
  agregarplanteamientoproblema(){
    const arregloplanteamientoProblema: any = {
      variableplanteamientoProblema: this.CrearplanteamientoProblema.value.variableplanteamientoProblema,
      fechaCreacion: new Date(),
      fechaActualizacion: new Date()
  }
  
   
    this._planteamientoProblemaService.agregarPlanteamientoProblema(arregloplanteamientoProblema).then(()=>{
     
   
      this.router.navigate(['/ListarPlanteamiento']);
    }).catch(error =>{
      console.log(error);
      
    })
  }
  
  DesabitlitarItmes(){
    this._planteamientoProblemaService.DesabitlitarItmes().subscribe(data =>{
     this.TablaDescripcionDelTema = [];
      data.forEach((element:any) => {
       this.TablaDescripcionDelTema.push({
       id: element.payload.doc.id,
       ...element.payload.doc.data()
       })
     });
    
    });
      } 
  editarplanteamientoProblema(id: string){
  
    const arregloplanteamientoProblema: any = {
      variableplanteamientoProblema: this.CrearplanteamientoProblema.value.variableplanteamientoProblema,
     fechaActualizacion: new Date()
  }
    this._planteamientoProblemaService.actualizarplanteamientoProblema(id, arregloplanteamientoProblema).then(() =>{
     
      this.router.navigate(['/ListarPlanteamiento']);
    })
  }
  
  
  
  editar(){
    if(this.id !== null){
      this.texto = 'Editar El Planteamiento Del Problema';
      
      this._planteamientoProblemaService.getplanteamientoproblema(this.id).subscribe(data =>{
     
       
        this.CrearplanteamientoProblema.setValue({
      variableplanteamientoProblema: data.payload.data()['variableplanteamientoProblema']
        })
      })
  }
  }
  
  


}
