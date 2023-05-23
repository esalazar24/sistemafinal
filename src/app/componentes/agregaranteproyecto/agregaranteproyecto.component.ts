import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AnteproyectoService } from 'src/app/servicios/anteproyecto.service';

@Component({
  selector: 'app-agregaranteproyecto',
  templateUrl: './agregaranteproyecto.component.html',
  styleUrls: ['./agregaranteproyecto.component.sass']
})
export class AgregaranteproyectoComponent implements OnInit {
agregarAnteproyecto: FormGroup;
submitted = false;
id: string | null; 
cadena = 'Agregar Anteproyecto';
  constructor(private fb: FormBuilder, 
    private _anteproyectoService: AnteproyectoService,
    private router: Router,
    private aRoute: ActivatedRoute) { 
    this.agregarAnteproyecto = this.fb.group({
      nombre:['',Validators.required],
      descripcion:['',Validators.required]
    })
    this.id = this.aRoute.snapshot.paramMap.get('id');
    
  }

  ngOnInit(): void {
    this.editar();
  }

  agregarEditarAtproyecto(){
    this.submitted= true;
    if(this.agregarAnteproyecto.invalid){
      return;
    }
    if(this.id === null){
      this.agregarProyecto();
    }else{
      this.EditarAnteproyecto(this.id);
    }
 }

agregarProyecto(){
  const proyecto: any = {
    nombre: this.agregarAnteproyecto.value.nombre, 
    descripcion: this.agregarAnteproyecto.value.descripcion,
    fechacreacion: new Date(),
    fechaactualizacion: new Date()
  }
  this._anteproyectoService.agregarAtproyecto(proyecto).then(() =>{
  
   this.router.navigate(['/veranteproyecto']);
  }).catch(error => {
    console.log(error);
  })
}

EditarAnteproyecto(id: string){
  const proyecto: any = {
    nombre: this.agregarAnteproyecto.value.nombre, 
    descripcion: this.agregarAnteproyecto.value.descripcion,
    fechaactualizacion: new Date()
  }
  this._anteproyectoService.actualizarProyecto(id, proyecto).then(()=>{
    this.router.navigate(['/veranteproyecto']);
  })
}

  editar(){
    
    if(this.id !== null){
      this.cadena = 'Editar Anteproyecto';
      this._anteproyectoService.listar1Atproyecto(this.id).subscribe(data =>{
        this.agregarAnteproyecto.setValue({
          nombre: data.payload.data()['nombre'],
          descripcion: data.payload.data()['descripcion']
        })
        
      })
    }
  
  }

}
