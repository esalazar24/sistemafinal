import { Component, OnInit } from '@angular/core';
import { TituloTentativoService } from 'src/app/servicios/titulo-tentativo.service';

@Component({
  selector: 'app-listar-titulo-tentativo',
  templateUrl: './listar-titulo-tentativo.component.html',
  styleUrls: ['./listar-titulo-tentativo.component.sass']
})
export class ListarTituloTentativoComponent implements OnInit {

  TablaTituloTentativo: any[] = [];
   
  constructor(private _tituloTentativoService: TituloTentativoService ) { 
  }

  ngOnInit(): void {
    this.getTituloTentativo();
  }

  getTituloTentativo(){
this._tituloTentativoService.getTituloTentativo().subscribe(data =>{
 this.TablaTituloTentativo = [];
  data.forEach((element:any) => {
   this.TablaTituloTentativo.push({
   id: element.payload.doc.id,
   ...element.payload.doc.data()
   })
 });
 
});
  }


  eliminarTituloTentativo(id: string){
    this._tituloTentativoService.eliminarTituloTentativo(id).then(() =>{
    
    }).catch(error =>{
       
    })
  }





}
