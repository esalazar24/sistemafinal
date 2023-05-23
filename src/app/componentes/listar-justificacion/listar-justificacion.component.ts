import { Component, OnInit } from '@angular/core';
import { JustificacionService } from 'src/app/servicios/justificacion.service';

@Component({
  selector: 'app-listar-justificacion',
  templateUrl: './listar-justificacion.component.html',
  styleUrls: ['./listar-justificacion.component.sass']
})
export class ListarJustificacionComponent implements OnInit {


  TablaJustificacion: any[] = [];
   
  constructor(private _justificacionService: JustificacionService ) { 
  }

  ngOnInit(): void {
    this.getJustificacion();
  }

  getJustificacion(){
this._justificacionService.getJustificacion().subscribe(data =>{
 this.TablaJustificacion = [];
  data.forEach((element:any) => {
   this.TablaJustificacion.push({
   id: element.payload.doc.id,
   ...element.payload.doc.data()
   })});});}


  eliminarJustificacion(id: string){
    this._justificacionService.eliminarJustificacion(id).then(() =>{}).catch(error =>{
      console.log(error);})}





}
