import { Component, OnInit } from '@angular/core';
import { ObjectivoGeneralService } from 'src/app/servicios/objectivo-general.service';

@Component({
  selector: 'app-listar-objectivo-general',
  templateUrl: './listar-objectivo-general.component.html',
  styleUrls: ['./listar-objectivo-general.component.sass']
})
export class ListarObjectivoGeneralComponent implements OnInit {

  TablaObjectivoGeneral: any[] = [];
   
  constructor(private _objectivoGeneralService: ObjectivoGeneralService ) { 
  }

  ngOnInit(): void {
    this.getObjectivoGeneral();
  }
  eliminarObjectivoGeneral(id: string){
    this._objectivoGeneralService.eliminarObjectivoGeneral(id).then(() =>{
   
    }).catch(error =>{
      console.log(error);
    })
  }

  getObjectivoGeneral(){
this._objectivoGeneralService.getObjectivoGeneral().subscribe(data =>{
 this.TablaObjectivoGeneral = [];
  data.forEach((element:any) => {
   this.TablaObjectivoGeneral.push({
   id: element.payload.doc.id,
   ...element.payload.doc.data()
   })
 });


});
  }


 





}
