import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { AnteproyectoService } from 'src/app/servicios/anteproyecto.service';

@Component({
  selector: 'app-veranteproyecto',
  templateUrl: './veranteproyecto.component.html',
  styleUrls: ['./veranteproyecto.component.sass']
})
export class VeranteproyectoComponent implements OnInit {
  proyectos: any[] = [];

  constructor(private __anteproyectoService: AnteproyectoService) { 
  }

  ngOnInit(): void {
    this.ObtenerAnteProyectos();
  }
  ObtenerAnteProyectos(){
    this.__anteproyectoService.ObtenerAnteProyectos().subscribe(data =>{
      this.proyectos = [];
      data.forEach((element: any) => {
       this.proyectos.push({
          id: element.payload.doc.id, 
          ...element.payload.doc.data()
        })
      });
      console.log(this.proyectos);
      });
  }


  EliminarAtproyecto(id: string){
    this.__anteproyectoService.EliminarAtproyecto(id).then(() =>{
      console.log('ELIMINADO')
    }).catch(error => {
      console.log(error);
    })
  }




}
