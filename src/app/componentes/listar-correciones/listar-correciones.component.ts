import { Component, OnInit } from '@angular/core';
import { CorrecionesService } from 'src/app/servicios/correciones.service';

@Component({
  selector: 'app-listar-correciones',
  templateUrl: './listar-correciones.component.html',
  styleUrls: ['./listar-correciones.component.sass']
})
export class ListarCorrecionesComponent implements OnInit {
  TablaCorreciones: any[] = [];
   
  constructor(private _correcionesService: CorrecionesService ) { 
  }

  ngOnInit(): void {
    this.getCorreciones();
  }

  getCorreciones(){
this._correcionesService.getCorreciones().subscribe(data =>{
 this.TablaCorreciones = [];
  data.forEach((element:any) => {
   this.TablaCorreciones.push({
   id: element.payload.doc.id,
   ...element.payload.doc.data()})
 });});}


  eliminarCorreciones(id: string){
    this._correcionesService.eliminarCorreciones(id).then(() =>{ }).catch(error =>{
  
    })
  }

}
