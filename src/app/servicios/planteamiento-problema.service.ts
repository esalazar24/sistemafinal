import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanteamientoProblemaService {

  constructor(private firestore: AngularFirestore) { }


  getplanteamientoproblema(id: string): Observable<any>{
    return this.firestore.collection('TablaplanteamientoProblema').doc(id).snapshotChanges();
   }

  agregarPlanteamientoProblema(arregloplanteamientoProblema: any): Promise<any>{
    return this.firestore.collection('TablaplanteamientoProblema').add(arregloplanteamientoProblema);
  }

  DesabitlitarItmes():Observable<any>{
    return  this.firestore.collection('TablaDescripcionDelTema', ref =>ref.orderBy('fechaCreacion', 'asc')).snapshotChanges();
  }
  eliminarplanteamientoProblema(id: string): Promise<any>{
    return this.firestore.collection('TablaplanteamientoProblema').doc(id).delete();
  }

  getPlanteamientoProblema():Observable<any>{
    return  this.firestore.collection('TablaplanteamientoProblema', ref =>ref.orderBy('fechaCreacion', 'asc')).snapshotChanges();
  }

  actualizarplanteamientoProblema(id: string, data: any): Promise<any>{
    return this.firestore.collection('TablaplanteamientoProblema').doc(id).update(data);
  }

 

 
  

}
