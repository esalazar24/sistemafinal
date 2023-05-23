import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ObjectivoGeneralService } from 'src/app/servicios/objectivo-general.service';

@Component({
  selector: 'app-objectivo-general',
  templateUrl: './objectivo-general.component.html',
  styleUrls: ['./objectivo-general.component.sass']
})
export class ObjectivoGeneralComponent implements OnInit {
  TablaHipotesis: any[] = [];
  id: string | null;
  CrearObjectivoGeneral: FormGroup;
  submitted = false;
  texto = 'Agregar El Nuevo Objectivo General';
  loadding = false;
 
  
    constructor(private fb: FormBuilder,
      private _objectivoGeneralService: ObjectivoGeneralService,
      private router: Router,
      private aRoute: ActivatedRoute) {
      this.CrearObjectivoGeneral = this.fb.group({
        variableObjectivoGeneral: ['', Validators.required]
      })
      this.id = this.aRoute.snapshot.paramMap.get('id');
      
     }
  
    ngOnInit(): void {
      this.editar();
      this.DesabitlitarItmes();
    }
    editar(){
      if(this.id !== null){
        this.texto = 'Editar El Objectivo General';
      
        this._objectivoGeneralService.getobjectivogeneral(this.id).subscribe(data =>{
  this.CrearObjectivoGeneral.setValue({
  variableObjectivoGeneral: data.payload.data()['variableObjectivoGeneral']
          })
        })
    }
    }
  
  
  agregarobjectivogeneral(){
    const arregloObjectivoGeneral: any = {
      variableObjectivoGeneral: this.CrearObjectivoGeneral.value.variableObjectivoGeneral,
      fechaCreacion: new Date(),
      fechaActualizacion: new Date()
  }


  this._objectivoGeneralService.AgregarObjectivoGeneral(arregloObjectivoGeneral).then(()=>{
   this.router.navigate(['/ListarObjectivo']);
    }).catch(error =>{})
  }
  
  agregarEditarObjectivoGeneral(){
    this.submitted = true;
    if(this.CrearObjectivoGeneral.invalid){
      return;
    }
    if(this.id ===null){
      this.agregarobjectivogeneral();
    }else{
      this.editaObjectivoGeneral(this.id);
    }
}
  
  editaObjectivoGeneral(id: string){
     
    const arregloObjectivoGeneral: any = {
      variableObjectivoGeneral: this.CrearObjectivoGeneral.value.variableObjectivoGeneral,
    
       
      fechaActualizacion: new Date()
  }
    this._objectivoGeneralService.actualizarObjectivoGeneral(id, arregloObjectivoGeneral).then(() =>{
      this.loadding = false;
      this.router.navigate(['/ListarObjectivo']);
    })
  }
  
  
  
  DesabitlitarItmes(){
    this._objectivoGeneralService.DesabitlitarItmes().subscribe(data =>{
     this.TablaHipotesis = [];
      data.forEach((element:any) => {
       this.TablaHipotesis.push({
       id: element.payload.doc.id,
       ...element.payload.doc.data()}) });});} 
  
  

}
