import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListaItemsService {

  constructor(private firestore: AngularFirestore) { }

  agregarAtItems(proyecto: any): Promise<any> {
    return this.firestore.collection('bdItems').add(proyecto);
  }

  ObtenerItems(): Observable<any>{
    return this.firestore.collection('bdItems', ref => ref.orderBy('fechacreacion', 'asc')).snapshotChanges();
  }

  EliminarAtItems(id: string): Promise<any>{
    return this.firestore.collection('bdItems').doc(id).delete();
  }

  listar1AtItems(id: string): Observable<any>{
    return this.firestore.collection('bdItems').doc(id).snapshotChanges();
  }

  actualizarItems(id: string, data:any): Promise<any>{
return this.firestore.collection('bdItems').doc(id).update(data);
  }



}
