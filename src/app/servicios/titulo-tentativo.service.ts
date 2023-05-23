import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TituloTentativoService {
  constructor(private firestore: AngularFirestore) { }

  AgregarTituloTentativo(arregloTituloTentativo: any): Promise<any>{
    return this.firestore.collection('TablaTituloTentativo').add(arregloTituloTentativo);
  }

  getTituloTentativo():Observable<any>{
    return  this.firestore.collection('TablaTituloTentativo', ref =>ref.orderBy('fechaCreacion', 'asc')).snapshotChanges();
  }

  eliminarTituloTentativo(id: string): Promise<any>{
    return this.firestore.collection('TablaTituloTentativo').doc(id).delete();
  }
  DesabitlitarItmes():Observable<any>{
    return  this.firestore.collection('TablaObjectivoGeneral', ref =>ref.orderBy('fechaCreacion', 'asc')).snapshotChanges();
  }
  gettitulotentativo(id: string): Observable<any>{
   return this.firestore.collection('TablaTituloTentativo').doc(id).snapshotChanges();
  }

  actualizarTituloTentativo(id: string, data: any): Promise<any>{
    return this.firestore.collection('TablaTituloTentativo').doc(id).update(data);
  }





}
