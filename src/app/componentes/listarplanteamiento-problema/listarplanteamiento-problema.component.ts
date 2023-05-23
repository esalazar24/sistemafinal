import { Component, OnInit } from '@angular/core';
import { PlanteamientoProblemaService } from 'src/app/servicios/planteamiento-problema.service';

@Component({
  selector: 'app-listarplanteamiento-problema',
  templateUrl: './listarplanteamiento-problema.component.html',
  styleUrls: ['./listarplanteamiento-problema.component.sass']
})
export class ListarplanteamientoProblemaComponent implements OnInit {

  TablaplanteamientoProblema: any[] = [];
   
  constructor(private _planteamientoProblemaService: PlanteamientoProblemaService ) { 
  }

  ngOnInit(): void {
    this.getPlanteamientoProblema();
  }

  getPlanteamientoProblema(){
this._planteamientoProblemaService.getPlanteamientoProblema().subscribe(data =>{
 this.TablaplanteamientoProblema = [];
  data.forEach((element:any) => {
   this.TablaplanteamientoProblema.push({
   id: element.payload.doc.id,
   ...element.payload.doc.data()
   })
 });

});
  }


  eliminarplanteamientoProblema(id: string){
    this._planteamientoProblemaService.eliminarplanteamientoProblema(id).then(() =>{
     
    }).catch(error =>{
      console.log(error);
    })
  }





}
