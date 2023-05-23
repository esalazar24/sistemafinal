import { Component, OnInit } from '@angular/core';
import { HipotesisService } from 'src/app/servicios/hipotesis.service';

@Component({
  selector: 'app-listar-hipotesis',
  templateUrl: './listar-hipotesis.component.html',
  styleUrls: ['./listar-hipotesis.component.sass']
})
export class ListarHipotesisComponent implements OnInit {

  TablaHipotesis: any[] = [];
   
  constructor(private _hipotesisService: HipotesisService ) { 
  }

  ngOnInit(): void {
    this.getHipotesis();
  }

  getHipotesis(){
this._hipotesisService.getHipotesis().subscribe(data =>{
 this.TablaHipotesis = [];
  data.forEach((element:any) => {
   this.TablaHipotesis.push({
   id: element.payload.doc.id,
   ...element.payload.doc.data()
   })
 });
 
});
  }


  eliminarHipotesis(id: string){
    this._hipotesisService.eliminarHipotesis(id).then(() =>{
     
    }).catch(error =>{
      console.log(error);
    })
  }


}
