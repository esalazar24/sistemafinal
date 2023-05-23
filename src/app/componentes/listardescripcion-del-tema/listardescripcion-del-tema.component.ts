import { Component, OnInit } from '@angular/core';
import { DescripcionDelTemaService } from 'src/app/servicios/descripcion-del-tema.service';

@Component({
  selector: 'app-listardescripcion-del-tema',
  templateUrl: './listardescripcion-del-tema.component.html',
  styleUrls: ['./listardescripcion-del-tema.component.sass']
})
export class ListardescripcionDelTemaComponent implements OnInit {

  TablaDescripcionDelTema: any[] = [];
   
  constructor(private _descripcionDelTemaService: DescripcionDelTemaService ) { 
  }

  ngOnInit(): void {
    this.getDescripcionDelTema();
  }

  getDescripcionDelTema(){
this._descripcionDelTemaService.getDescripcionDelTema().subscribe(data =>{
 this.TablaDescripcionDelTema = [];
  data.forEach((element:any) => {
   this.TablaDescripcionDelTema.push({
   id: element.payload.doc.id,
   ...element.payload.doc.data()
   })
 });
 console.log(this.TablaDescripcionDelTema);
});
  }


  eliminardescripcionDelTema(id: string){
    this._descripcionDelTemaService.eliminardescripcionDelTema(id).then(() =>{
    }).catch(error =>{
      console.log(error);
    })
  }




}
