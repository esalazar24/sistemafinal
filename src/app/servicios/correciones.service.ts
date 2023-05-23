import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CorrecionesService {
  constructor(private firestore: AngularFirestore) { }

  eliminarCorreciones(id: string): Promise<any>{
    return this.firestore.collection('TablaCorreciones').doc(id).delete();
  }
  AgregarCorreciones(arregloCorreciones: any): Promise<any>{
    return this.firestore.collection('TablaCorreciones').add(arregloCorreciones);
  }
  actualizarCorreciones(id: string, data: any): Promise<any>{
    return this.firestore.collection('TablaCorreciones').doc(id).update(data);
  }

   getcorrecion(id: string): Observable<any>{
   return this.firestore.collection('TablaCorreciones').doc(id).snapshotChanges();
  }
  getCorreciones():Observable<any>{
    return  this.firestore.collection('TablaCorreciones', ref =>ref.orderBy('fechaCreacion', 'asc')).snapshotChanges();
  }
  



}
