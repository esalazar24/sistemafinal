import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JustificacionService } from 'src/app/servicios/justificacion.service';

@Component({
  selector: 'app-justificacion',
  templateUrl: './justificacion.component.html',
  styleUrls: ['./justificacion.component.sass']
})
export class JustificacionComponent implements OnInit {

 
  submitted = false;
  TablaTituloTentativo : any[] = [];
  texto = 'Agregar La Justificacion';
  CrearJustificacion: FormGroup;
  id: string | null;
  
    constructor(private fb: FormBuilder,
      private _justificacionService: JustificacionService,
      private router: Router,
      private aRoute: ActivatedRoute) {
      this.CrearJustificacion = this.fb.group({
        variableJustificacion: ['', Validators.required],

      })
      this.id = this.aRoute.snapshot.paramMap.get('id');
      
     }
  
    ngOnInit(): void {
      this.editar();
      this.DesabitlitarItmes();
    }
  
    agregarEditarJustificacion(){
      this.submitted = true;
      if(this.CrearJustificacion.invalid){
        return;
      }
      if(this.id ===null){
        this.agregarjustificacion();
      }else{
        this.editaJustificacion(this.id);
      }
  }
  

   
  editar(){
    if(this.id !== null){
      this.texto = 'Editar La Justificacion Creada';
      
      this._justificacionService.getjustificacion(this.id).subscribe(data =>{
       
      

        this.CrearJustificacion.setValue({
          variableJustificacion: data.payload.data()['variableJustificacion']
        })
      })
  }
  }
  
  
  editaJustificacion(id: string){
  
    const arregloJustificacion: any = {
      variableJustificacion: this.CrearJustificacion.value.variableJustificacion,
     
       
      fechaActualizacion: new Date()
  }
    this._justificacionService.actualizarJustificacion(id, arregloJustificacion).then(() =>{
    
      this.router.navigate(['/LISTARJUSTIFICACION']);
    })
  }
  
  DesabitlitarItmes(){
    this._justificacionService.DesabitlitarItmes().subscribe(data =>{
     this.TablaTituloTentativo = [];
      data.forEach((element:any) => {
       this.TablaTituloTentativo.push({
       id: element.payload.doc.id,
       ...element.payload.doc.data()
       })
     });
    
    });
      } 
  agregarjustificacion(){
    const arregloJustificacion: any = {
      variableJustificacion: this.CrearJustificacion.value.variableJustificacion,
     
      fechaCreacion: new Date(),
      fechaActualizacion: new Date()
  }
  
    
    this._justificacionService.AgregarJustificacion(arregloJustificacion).then(()=>{
     
    
      this.router.navigate(['/LISTARJUSTIFICACION']);
    }).catch(error =>{
      console.log(error);
   
    })
  }

  

}
