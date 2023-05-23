import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JustificacionService {


  constructor(private firestore: AngularFirestore) { }

  AgregarJustificacion(arregloJustificacion: any): Promise<any>{
    return this.firestore.collection('TablaJustificacion').add(arregloJustificacion);
  }

  getJustificacion():Observable<any>{
    return  this.firestore.collection('TablaJustificacion', ref =>ref.orderBy('fechaCreacion', 'asc')).snapshotChanges();
  }

  eliminarJustificacion(id: string): Promise<any>{
    return this.firestore.collection('TablaJustificacion').doc(id).delete();
  }

  getjustificacion(id: string): Observable<any>{
   return this.firestore.collection('TablaJustificacion').doc(id).snapshotChanges();
  }
  DesabitlitarItmes():Observable<any>{
    return  this.firestore.collection('TablaTituloTentativo', ref =>ref.orderBy('fechaCreacion', 'asc')).snapshotChanges();
  }


  actualizarJustificacion(id: string, data: any): Promise<any>{
    return this.firestore.collection('TablaJustificacion').doc(id).update(data);
  }



}
