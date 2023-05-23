import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CorrecionesService } from 'src/app/servicios/correciones.service';

@Component({
  selector: 'app-correciones',
  templateUrl: './correciones.component.html',
  styleUrls: ['./correciones.component.sass']
})
export class CorrecionesComponent implements OnInit {

 
  CrearCorreciones: FormGroup;

texto = 'Agregar Nuevas sugerencias';
id: string | null;
submitted = false;
  constructor(private fb: FormBuilder,
    private _correcionesService: CorrecionesService,
    private router: Router,
    private aRoute: ActivatedRoute) {
    this.CrearCorreciones = this.fb.group({
      variableCorreciones: ['', Validators.required]
    })
    this.id = this.aRoute.snapshot.paramMap.get('id');
    
   }

  ngOnInit(): void {
    this.editar();
  }

  agregarEditarCorreciones(){
    this.submitted = true;
    if(this.CrearCorreciones.invalid){
      return;
    }
    if(this.id ===null){
      this.agregarcorrecion();
    }else{
      this.editarCorreciones(this.id);
    }
}

agregarcorrecion(){
  const arregloCorreciones: any = {
    variableCorreciones: this.CrearCorreciones.value.variableCorreciones,
    fechaCreacion: new Date(),
    fechaActualizacion: new Date()
}
  this._correcionesService.AgregarCorreciones(arregloCorreciones).then(()=>{
    this.router.navigate(['/ListarCorreciones']);
  }).catch(error =>{})}


editarCorreciones(id: string){
 
  const arregloCorreciones: any = {
    variableCorreciones: this.CrearCorreciones.value.variableCorreciones,
fechaActualizacion: new Date()
}
  this._correcionesService.actualizarCorreciones(id, arregloCorreciones).then(() =>{
 this.router.navigate(['/ListarCorreciones']);})}

editar(){
  if(this.id !== null){
    this.texto = 'Editar La new Correcion';
  
    this._correcionesService.getcorrecion(this.id).subscribe(data =>{
this.CrearCorreciones.setValue({
        variableCorreciones: data.payload.data()['variableCorreciones']
      })
    })
}
}


}
