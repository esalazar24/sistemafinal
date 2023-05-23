import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HipotesisService } from 'src/app/servicios/hipotesis.service';

@Component({
  selector: 'app-hipotesis',
  templateUrl: './hipotesis.component.html',
  styleUrls: ['./hipotesis.component.sass']
})
export class HipotesisComponent implements OnInit {

  CrearHipotesis: FormGroup;
  id: string | null;
  texto = 'Agregar Productos';
  TablaplanteamientoProblema: any[] = [];
  submitted = false;
  

  
    constructor(private fb: FormBuilder,
      private _hipotesisService: HipotesisService,
      private router: Router,
      private aRoute: ActivatedRoute) {
      this.CrearHipotesis = this.fb.group({
        variableHipotesis: ['', Validators.required],
       
      })
      this.id = this.aRoute.snapshot.paramMap.get('id');
      
     }
  
    ngOnInit(): void {
      this.editar();
      this.DesabitlitarItmes();
    }
  
    agregarEditarHipotesis(){
      this.submitted = true;
      if(this.CrearHipotesis.invalid){
        return;
      }
      if(this.id ===null){
        this.agregarhipotesis();
      }else{
        this.editaHipotesis(this.id);
      }
  }
  

  editar(){
    if(this.id !== null){
      this.texto = 'Editar Hipotesis';
    
this._hipotesisService.gethipotesi(this.id).subscribe(data =>{
       
        this.CrearHipotesis.setValue({
variableHipotesis: data.payload.data()['variableHipotesis']
        })
      })
  }
  }
  
  agregarhipotesis(){
    const arregloHipotesis: any = {
      variableHipotesis: this.CrearHipotesis.value.variableHipotesis,
      fechaCreacion: new Date(),
      fechaActualizacion: new Date()
  }
  
 
    this._hipotesisService.AgregarHipotesis(arregloHipotesis).then(()=>{
    
      this.router.navigate(['/VerHipotesis']);
    }).catch(error =>{
      console.log(error);
     
    })
  }
  
  
 
  
  
  
 
  editaHipotesis(id: string){
    
    const arregloHipotesis: any = {
      variableHipotesis: this.CrearHipotesis.value.variableHipotesis,

       
      fechaActualizacion: new Date()
  }
    this._hipotesisService.actualizarHipotesis(id, arregloHipotesis).then(() =>{
    
      this.router.navigate(['/VerHipotesis']);
    })
  }

  DesabitlitarItmes(){
    this._hipotesisService.DesabitlitarItmes().subscribe(data =>{
     this.TablaplanteamientoProblema = [];
      data.forEach((element:any) => {
       this.TablaplanteamientoProblema.push({
       id: element.payload.doc.id,
       ...element.payload.doc.data()
       })
     });}); } 

}
