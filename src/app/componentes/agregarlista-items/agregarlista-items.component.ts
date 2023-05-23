import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ListaItemsService } from 'src/app/servicios/lista-items.service';

@Component({
  selector: 'app-agregarlista-items',
  templateUrl: './agregarlista-items.component.html',
  styleUrls: ['./agregarlista-items.component.sass']
})
export class AgregarlistaItemsComponent implements OnInit {

agregarItem: FormGroup;
estado = false;
id: string | null; 
oracion = 'Agregar Lista de Items';
  constructor(private fb: FormBuilder, 
    private _listaItemsService: ListaItemsService,
    private router: Router,
    private aRoute: ActivatedRoute) { 
    this.agregarItem = this.fb.group({
      nombre:['',Validators.required]
    })
    this.id = this.aRoute.snapshot.paramMap.get('id');
    
  }

  ngOnInit(): void {
    this.editarIT();
  }

  agregarEditarItem(){
    this.estado= true;
    if(this.agregarItem.invalid){
      return;
    }
    if(this.id === null){
      this.Itemsagregar();
    }else{
      this.EditarAnteItems(this.id);
    }
 }

 Itemsagregar(){
  const lista: any = {
    nombre: this.agregarItem.value.nombre, 
    fechacreacion: new Date(),
    fechaactualizacion: new Date()
  }
  this._listaItemsService.agregarAtItems(lista).then(() =>{
  
   this.router.navigate(['/visualizacionItems']);
  }).catch(error => {
    console.log(error);
  })
}

EditarAnteItems(id: string){
  const proyecto: any = {
    nombre: this.agregarItem.value.nombre, 
    fechaactualizacion: new Date()
  }
  this._listaItemsService.actualizarItems(id, proyecto).then(()=>{
    this.router.navigate(['/visualizacionItems']);
  })
}

editarIT(){
    
    if(this.id !== null){
      this.oracion = 'Editar Lista de Items';
      this._listaItemsService.listar1AtItems(this.id).subscribe(data =>{
        this.agregarItem.setValue({
          nombre: data.payload.data()['nombre']
          
        })
        
      })
    }
  
  }  







}
