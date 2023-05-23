import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TituloTentativoService } from 'src/app/servicios/titulo-tentativo.service';

@Component({
  selector: 'app-titulo-tentativo',
  templateUrl: './titulo-tentativo.component.html',
  styleUrls: ['./titulo-tentativo.component.sass']
})
export class TituloTentativoComponent implements OnInit {

 
 
  
  id: string | null;
  texto = 'Agregar Nuevo Titulo';
  CrearTituloTentativo: FormGroup;
  submitted = false;
  TablaObjectivoGeneral : any[] = [];
    constructor(private fb: FormBuilder,
      private _tituloTentativoService: TituloTentativoService,
      private router: Router,
      private aRoute: ActivatedRoute) {
      this.CrearTituloTentativo = this.fb.group({
        variableTituloTentativo: ['', Validators.required]
      })
      this.id = this.aRoute.snapshot.paramMap.get('id');
      
     }
  
    ngOnInit(): void {
      this.editar();
      this.DesabitlitarItmes();
    }
  
    DesabitlitarItmes(){
      this._tituloTentativoService.DesabitlitarItmes().subscribe(data =>{
       this.TablaObjectivoGeneral = [];
        data.forEach((element:any) => {
         this.TablaObjectivoGeneral.push({
         id: element.payload.doc.id,
         ...element.payload.doc.data()
         })});});} 

    agregarEditarTituloTentativo(){
      this.submitted = true;
      if(this.CrearTituloTentativo.invalid){
        return;
      }
      if(this.id ===null){
        this.agregartitulotentativo();
      }else{
        this.editaTituloTentativo(this.id);
      }
  }
  
  agregartitulotentativo(){
    const arregloTituloTentativo: any = {
      variableTituloTentativo: this.CrearTituloTentativo.value.variableTituloTentativo,
 fechaCreacion: new Date(),
      fechaActualizacion: new Date()
  }
    this._tituloTentativoService.AgregarTituloTentativo(arregloTituloTentativo).then(()=>{
   this.router.navigate(['/LitarTentativo']);
    }).catch(error =>{
      console.log(error);
     
    })
  }
  
  
  editaTituloTentativo(id: string){
   
    const arregloTituloTentativo: any = {
      variableTituloTentativo: this.CrearTituloTentativo.value.variableTituloTentativo,
     fechaActualizacion: new Date()
  }
    this._tituloTentativoService.actualizarTituloTentativo(id, arregloTituloTentativo).then(() =>{
      this.router.navigate(['/LitarTentativo']);
    })
  }
  
  
  
  editar(){
    if(this.id !== null){
      this.texto = 'Editar El Titulo Tentativo';
    
      this._tituloTentativoService.gettitulotentativo(this.id).subscribe(data =>{
   this.CrearTituloTentativo.setValue({
          variableTituloTentativo: data.payload.data()['variableTituloTentativo']
        })
      })
  }
  }
  



}
