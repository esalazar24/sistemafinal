import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DescripcionDelTemaService {

  constructor(private firestore: AngularFirestore) { }

  agregarDescripcionDelTema(arreglodescripcion: any): Promise<any>{
    return this.firestore.collection('TablaDescripcionDelTema').add(arreglodescripcion);
  }

  getDescripcionDelTema():Observable<any>{
    return  this.firestore.collection('TablaDescripcionDelTema', ref =>ref.orderBy('fechaCreacion', 'asc')).snapshotChanges();
  }

  eliminardescripcionDelTema(id: string): Promise<any>{
    return this.firestore.collection('TablaDescripcionDelTema').doc(id).delete();
  }

  getdescripciondeltema(id: string): Observable<any>{
   return this.firestore.collection('TablaDescripcionDelTema').doc(id).snapshotChanges();
  }

  actualizardescripcionDelTema(id: string, data: any): Promise<any>{
    return this.firestore.collection('TablaDescripcionDelTema').doc(id).update(data);
  }



}
