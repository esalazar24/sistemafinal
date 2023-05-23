import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnteproyectoService {

  constructor(private firestore: AngularFirestore) { }
  agregarAtproyecto(proyecto: any): Promise<any> {
    return this.firestore.collection('Antproyecto').add(proyecto);
  }

  ObtenerAnteProyectos(): Observable<any>{
    return this.firestore.collection('Antproyecto', ref => ref.orderBy('fechacreacion', 'asc')).snapshotChanges();
  }

  EliminarAtproyecto(id: string): Promise<any>{
    return this.firestore.collection('Antproyecto').doc(id).delete();
  }

  listar1Atproyecto(id: string): Observable<any>{
    return this.firestore.collection('Antproyecto').doc(id).snapshotChanges();
  }

  actualizarProyecto(id: string, data:any): Promise<any>{
return this.firestore.collection('Antproyecto').doc(id).update(data);
  }

}
