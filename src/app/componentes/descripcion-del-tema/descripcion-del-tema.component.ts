import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DescripcionDelTemaService } from 'src/app/servicios/descripcion-del-tema.service';

@Component({
  selector: 'app-descripcion-del-tema',
  templateUrl: './descripcion-del-tema.component.html',
  styleUrls: ['./descripcion-del-tema.component.sass']
})
export class DescripcionDelTemaComponent implements OnInit {
  submitted = false;
  CreardescripcionDelTema: FormGroup;
  
  texto = 'Agregar La Descripcion Del Tema';
  id: string | null;
  
    constructor(private fb: FormBuilder,
      private _descripcionDelTemaService: DescripcionDelTemaService,
      private router: Router,
      private aRoute: ActivatedRoute) {
      this.CreardescripcionDelTema = this.fb.group({
        variabledescripcion: ['', Validators.required]
      })
      this.id = this.aRoute.snapshot.paramMap.get('id');
      
     }
  
    ngOnInit(): void {
      this.editar();
    }
  
    agregarEditarDescripcion(){
      this.submitted = true;
      if(this.CreardescripcionDelTema.invalid){
        return;
      }
      if(this.id ===null){
        this.agregardescripciondeltema();
      }else{
        this.editardescripcionDelTema(this.id);
      }
  }
  
  editar(){
    if(this.id !== null){
      this.texto = 'Editar la descripcion del tema';
     this._descripcionDelTemaService.getdescripciondeltema(this.id).subscribe(data =>{
      this.CreardescripcionDelTema.setValue({
        variabledescripcion: data.payload.data()['variabledescripcion']
        })
      })
  }
  }

 
  
  editardescripcionDelTema(id: string){
   const arreglodescripcion: any = {
    variabledescripcion: this.CreardescripcionDelTema.value.variabledescripcion,
      fechaActualizacion: new Date()
  }
    this._descripcionDelTemaService.actualizardescripcionDelTema(id, arreglodescripcion).then(() =>{
      
      this.router.navigate(['/ListarLaDescripcion']);
    })
  }
  
  agregardescripciondeltema(){
    const arreglodescripcion: any = {
      variabledescripcion: this.CreardescripcionDelTema.value.variabledescripcion,
      fechaCreacion: new Date(),
      fechaActualizacion: new Date()
  }
  this._descripcionDelTemaService.agregarDescripcionDelTema(arreglodescripcion).then(()=>{
      this.router.navigate(['/ListarLaDescripcion']);
    }).catch(error =>{
      console.log(error);
    })
  }
  
  


}
