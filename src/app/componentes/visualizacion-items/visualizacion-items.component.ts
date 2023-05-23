import { Component, OnInit } from '@angular/core';
import { ListaItemsService } from 'src/app/servicios/lista-items.service';

@Component({
  selector: 'app-visualizacion-items',
  templateUrl: './visualizacion-items.component.html',
  styleUrls: ['./visualizacion-items.component.sass']
})
export class VisualizacionItemsComponent implements OnInit {

  listas: any[] = [];

  constructor(private __listaItemsService: ListaItemsService) { 
  }

  ngOnInit(): void {
    this.ObtenerItems();
  }
  ObtenerItems(){
    this.__listaItemsService.ObtenerItems().subscribe(data =>{
      this.listas = [];
      data.forEach((element: any) => {
       this.listas.push({
          id: element.payload.doc.id, 
          ...element.payload.doc.data()
        })
      });
      console.log(this.listas);
      });
  }


  EliminarAtItems(id: string){
    this.__listaItemsService.EliminarAtItems(id).then(() =>{
      console.log('ELIMINADO')
    }).catch(error => {
      console.log(error);
    })
  }









}
